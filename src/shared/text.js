import styled from 'styled-components';
import withText from 'HOCs/with-text';

const Title = withText(styled.h2``);

const Subtitle = withText(styled.h3``);

const Text = withText(styled.p``);

const Span = withText(styled.span``);

export { Title, Subtitle, Text, Span };
