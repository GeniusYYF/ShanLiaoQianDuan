module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 按需引用viewUI插件配置
  plugins: [
    // "transform-vue-jsx", "transform-runtime",
    [
      "import",
      {
        libraryName: "view-design",
        // "style":true,
        libraryDirectory: "src/components"
      }
    ]
  ]
};
