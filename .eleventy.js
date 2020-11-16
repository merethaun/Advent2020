let Nunjucks = require("nunjucks");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("main.css");
    eleventyConfig.addPassthroughCopy("assets");
    let nunjucksEnvironment = new Nunjucks.Environment(
        new Nunjucks.FileSystemLoader("_includes")
    );
    eleventyConfig.setLibrary("njk", nunjucksEnvironment);
}