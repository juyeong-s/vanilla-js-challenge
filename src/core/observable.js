let currentObserver = null;

export const observe = (callback) => {
  currentObserver = callback;
  callback();
  currentObserver = null;
};

export const observable = (obj) => {
  const observerMap = {};

  return new Proxy(obj, {
    get(target, name) {
      if (!observerMap[name]) observerMap[name] = new Set();
      if (currentObserver) observerMap[name].add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      if (JSON.stringify(target[name]) === JSON.stringify(value)) return true;

      target[name] = value;
      observerMap[name].forEach((callback) => callback());
      return true;
    },
  });
};
