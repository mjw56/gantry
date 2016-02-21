export default function apiMiddleware() {
  return next => action => {
    if (!action) return next(action);

    const { request, url, type, ...rest } = action;

    if (!request) return next(action);

    const promise = fetch(url);

    return next({ promise: promise, type });
  };
}