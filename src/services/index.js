import { PlayerContextProvider } from './player-service';
import { ThemeContextProvider } from './theme-service';
import { SocketContextProvider } from "./socket-service"

const Services = ({ children }) => (
  <SocketContextProvider>
    <ThemeContextProvider>
    <PlayerContextProvider>{children}</PlayerContextProvider>
  </ThemeContextProvider>
  </SocketContextProvider>
  
);

export default Services;
