module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ealhossa" : "/",
  chainWebpack: config => config.resolve.symlinks(false)
};
