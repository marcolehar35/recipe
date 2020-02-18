const ajaxMiddleware = (store) => (next) => (action) => {
  console.log('middleware', action);

  // Passes à ton voisin
  next(action);
};

export default ajaxMiddleware;
