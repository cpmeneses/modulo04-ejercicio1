function withLoading(WrappedComponent) {
  return function LoadingComponent(props) {
    if (props.isLoading) {
      return <p>Cargando...</p>;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withLoading;