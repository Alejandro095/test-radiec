const withText = (Component) => {
  return (props) => (
    <Component {...props}>{props.t || props.text || props.children}</Component>
  );
};

export default withText;
