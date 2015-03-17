var CONST = require('./core/const'),
    interactionMouse = require('./input/mouse');

var core = {
    Class : require('./core/Class'),

    utils : require('./core/utils'),

    Game : require('./core/Game'),
    Container : require('./display/Container'),
    SceneManager : require('./core/SceneManager'),
    Scene : require('./display/Scene'),
    Graphics : require('./display/Graphics'),
    Sprite : require('./display/Sprite'),
    TilingSprite : require('./display/TilingSprite'),
    Texture : require('../lib/pixi/src/core/textures/Texture'),
    Pool : require('./extra/Pool')
};

//Add Constants to the main object
for(var key in CONST) {
    core[key] = CONST[key];
}

//Add inheritance system, and export the core
module.exports = require('./core/inherits')(core);