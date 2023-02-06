import getPath from "@/utils/getPath";

export default function createRouter() {
  const routes = [];

  const router = {
    addRoute(path, component) {
      routes.push({ path, component });
      return this;
    },
    navigate(path) {
      history.pushState({}, null, path);

      const currentPath = getPath();
      const currentRoute = routes.find((route) => route.path === currentPath);
      currentRoute.component();
    },
  };
  return router;
}
