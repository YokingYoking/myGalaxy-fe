export const addWindowResizeHandler = function (handler: any) {
  let oldHandler = window.onresize;
  if (typeof window.onresize != "function") {
    window.onresize = handler;
  } else {
    window.onresize = function () {
      if (oldHandler) {
        oldHandler();
      }
      handler();
    };
  }
};
export const generateId = function () {
  return Math.floor(
    Math.random() * 100000 + Math.random() * 20000 + Math.random() * 5000
  );
};
export const deepClone = function (origin: any) {
  if (origin === undefined) {
    return undefined;
  }

  return JSON.parse(JSON.stringify(origin));
};
