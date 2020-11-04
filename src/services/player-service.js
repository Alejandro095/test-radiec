import { createContext, useContext, useReducer, useEffect } from 'react';

const PlayerStateContext = createContext();
const PlayerDispatchContext = createContext();

const InitialState = {
  initialized: false,
  playerMaster: null,
  errors: [],
  sources: [
    { preference: 1, source: 'https://radiec.online/srv01' },
    { preference: 2, source: 'https://radiec.online/srv02' },
    { preference: 3, source: 'https://radiec.online/srv03' },
  ],
  sourcesActives: [],
};

const playerReducer = (state, { type, src }) => {
  console.log(type);

  switch (type) {
    case 'PLAY_STOP':
      if (state.initialized === 'PLAYING' && state.playerMaster) {
        if (state.playerMaster.volume === 0) {
          state.playerMaster.volume = 1;
        } else {
          state.playerMaster.volume = 0;
        }
      }
      return state;

    case 'LOAD_ONE_AUDIO':
      const mediaElement = new Audio(src.source);
      mediaElement.preference = src.preference;

      mediaElement.load();

      mediaElement.addEventListener('canplay', () => {
        state.sourcesActives.push(mediaElement);
        state.sourcesActives.sort((a, b) => {
          a = a.preference;
          b = b.preference;
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });

        state.playerMaster = state.sourcesActives[0];
        state.sourcesActives.forEach((player) => {
          if (player.src !== state.playerMaster.src) {
            player.pause();
            player.src = '';
          }
        });

        state.playerMaster.play();
        state.initialized = 'PLAYING';
      });
      mediaElement.addEventListener('error', (mediaError) => {
        const mediaExistSourceActives = state.sourcesActives.filter(
          (player) => player.src === mediaError.path[0].src
        ).length;

        if (!mediaExistSourceActives) {
          state.errors.push(MediaError);
        }
      });
      return state;
    case 'LOAD':
      return { ...state, initialized: 'LOADING' };
    case 'CLEAN':
      return {
        ...state,
        initialized: false,
        playerMaster: null,
        errors: [],
        sourcesActives: [],
      };
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const PlayerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, InitialState);

  useEffect(() => {
    if (state.initialized === 'LOADING') {
      state.sources.forEach((source) =>
        dispatch({ type: 'LOAD_ONE_AUDIO', src: source })
      );
    }
  });

  return (
    <PlayerStateContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerStateContext.Provider>
  );
};

const usePlayerService = () => [
  useContext(PlayerStateContext),
  useContext(PlayerDispatchContext),
];

export { PlayerContextProvider, usePlayerService };
