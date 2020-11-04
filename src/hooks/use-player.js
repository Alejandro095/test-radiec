import { useEffect } from 'react';
import { usePlayerService } from 'services/player-service';

const usePlayer = () => {
  const [state, dispatch] = usePlayerService();

  useEffect(() => {
    // setInterval(() => console.log(state), 500);
  });

  return () => {
    if (state.initialized) {
      dispatch({ type: 'PLAY_STOP' });
    } else {
      dispatch({ type: 'LOAD' });
    }
  };
};

export default usePlayer;
