import GlobalStyles from 'styles/global-styles';

// Services
import Services from 'services';

import Application from 'components/app-component';

function App({ Component, pageProps }) {
  return (
    <Services>
      <Application>
        <Component {...pageProps} />
        <GlobalStyles />
      </Application>
    </Services>
  );
}

export default App;
