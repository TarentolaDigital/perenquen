var ResourceLoader = require('resource-loader'),
    textureParser = require('./textureParser'),
    spritesheetParser = require('./spritesheetParser'),
    test = require('./test');

function AssetLoader(){
    ResourceLoader.call(this);

    this.use(ResourceLoader.middleware.parsing.json())
        .use(ResourceLoader.middleware.parsing.blob())
        .use(spritesheetParser())
        .use(textureParser())
        .use(test());
}

AssetLoader.prototype = Object.create(ResourceLoader.prototype);
AssetLoader.prototype.constructor = AssetLoader;

module.exports = AssetLoader;

