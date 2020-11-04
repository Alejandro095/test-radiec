import React from 'react';

// Styles components
import { Layout, Container } from './styles';

// Components
import Aside from 'components/aside-component';
import View from 'components/view-component';
import Player from 'components/player-component';

import MobileHeader from "containers/mobile-header"

const Application = ({ children }) => (
  <Layout>
    <MobileHeader />
    <Container>
      <Aside />
      <View> {children} </View>
    </Container>
    <Player />
  </Layout>
);

export default Application;
