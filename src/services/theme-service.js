import { createContext, useContext, useEffect, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme-config';

const ThemeContext = createContext();
const ThemeDispatch = createContext();

const themeReducer = (state, { type }) => {
  const store = (value) => {
    localStorage.setItem('dark-mode', JSON.stringify(value));
  };

  switch (type) {
    case 'CHANGE_TO_WHITE':
      store(false);
      return theme.white;

    case 'CHANGE_TO_DARK':
      store(true);
      return theme.dark;
    case 'TOGGLE_THEME':
      if (state.name === 'dark') {
        store(false);
        return theme.white;
      } else {
        store(true);
        return theme.dark;
      }

    default:
      throw new Error('ThemeService: Method no valid!');
  }
};

const useThemeContext = () => useContext(ThemeContext);
const useThemeDispatch = () => useContext(ThemeDispatch);

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, theme.white);

  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatch.Provider value={dispatch}>
        <ThemeProvider theme={state}>{children}</ThemeProvider>
      </ThemeDispatch.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = useThemeContext();
  const dispatch = useThemeDispatch();

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('dark-mode')) || false;

    if (!storage) {
      localStorage.setItem('dark-mode', JSON.stringify(false));

      dispatch({ type: `CHANGE_TO_WHITE` });
    } else {
      dispatch({ type: `CHANGE_TO_DARK` });
    }
  }, []);

  return [theme, dispatch];
};

export { useThemeDispatch, useThemeContext, useTheme, ThemeContextProvider };
