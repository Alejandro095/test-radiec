import GlobalStyles from 'styles/global-styles';
import { ThemeContextProvider } from 'services/theme-service';

import Application from 'components/app-component';

function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Application>
        <Component {...pageProps} />
        <GlobalStyles />
      </Application>
    </ThemeContextProvider>
  );
}

export default App;
