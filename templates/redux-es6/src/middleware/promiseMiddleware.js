export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action;

    if (!promise) return next(action);

    next({ ...rest, type: type[0] });

    return promise
      .then(res => {
        res.json().then((r) => {
          next({ ...rest, data: r, type: type[1] });
          return true;
        });
      })
      .catch(error => {
        next({ ...rest, error, type: type[2] });
        return false;
      });
  };
}