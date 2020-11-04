import { PlayerContextProvider } from './player-service';
import { ThemeContextProvider } from './theme-service';

const Services = ({ children }) => (
  <ThemeContextProvider>
    <PlayerContextProvider>{children}</PlayerContextProvider>
  </ThemeContextProvider>
);

export default Services;
