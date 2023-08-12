module.exports = function(eleventyConfig) {
    
    // Ensure Eleventy copies the 'css' and 'images' directories to the output directory
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    
    // Your existing configuration
    return {
        dir: {
            input: ".",
            output: "docs",
            includes: "_includes"
        }
    };
};
