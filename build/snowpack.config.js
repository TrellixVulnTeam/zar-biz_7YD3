export default {
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html"
    }
  ],
  plugins: [
    [
      "@snowpack/plugin-webpack",
      {}
    ]
  ]
};
