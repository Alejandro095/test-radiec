const general = {
  text: {
    title: '#53575A',
    subtitle: '#CED4DA',
  },

  fontFamily: 'Roboto',

  breakPoints: {},

  colors: {
    white: '#FFFFFF',
    black: '#000000',
    green: '#00C65E',
    red: '#F93822',
    grayOne: '#F8F9FC',
    grayTwo: '#ADB5BD',
    grayThree: '#282D31',
    grayFour: '#141618',
  },
};

const dark = {
  ...general,
  name: 'dark',
  template: {
    primary: '#141618',
    secondary: '#282D31',
  },
};

const white = {
  ...general,
  name: 'white',
  template: {
    primary: '#FFFFFF',
    secondary: '#F8F9FC',
  },

  text: {
    title: '#53575A',
    text: '#CED4DA',
  },
};

export default { dark, white };
