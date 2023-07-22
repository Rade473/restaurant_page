function importAll(r) {
  r.keys().forEach(r);
}

importAll(
  require.context("../assets/images/", true, /\.(png|svg|jpg|jpeg|gif)$/i)
);
