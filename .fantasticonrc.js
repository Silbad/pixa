module.exports = {
    name: "pixa",
    inputDir: './icons',
    outputDir: './dist',
    fontTypes: ['ttf', 'woff', 'woff2'],
    assetTypes: ['css', 'json', 'html'],
    formatOptions: {
        woff: {
            // https://www.w3.org/TR/WOFF/#Metadata
            metadata: '...'
        },
        json: {
            indent: 4
        }
    },
    templates: {
        css: './templates/css.hbs',
        html: './templates/html.hbs'
    },
};