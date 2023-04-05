let currentObserver = null;

export const observe = (callback) => {
  currentObserver = callback;
  callback();
  currentObserver = null;
};

export const observable = (obj) => {
  const observerMap = {};

  return new Proxy(obj, {
    get(target, prop) {
      observerMap[prop] = observerMap[prop] || new Set();
      if (currentObserver) observerMap[prop].add(currentObserver);
      return target[prop];
    },
    set(target, prop, value) {
      if (target[prop] === value) return true;

      target[prop] = value;
      observerMap[prop].forEach((callback) => callback());
      return true;
    },
  });
};
