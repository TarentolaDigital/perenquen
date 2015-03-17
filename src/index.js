var CONST = require('./core/const'),
    addInherits = require('./core/utils').addInherits,
    interactionMouse = require('./input/mouse');

var core = {
    utils : require('./core/utils'),

    Class : require('./core/Class'),
    Game : require('./core/Game'),
    Container : require('./display/Container'),
    SceneManager : require('./core/SceneManager'),
    Scene : require('./display/Scene'),
    Graphics : require('./display/Graphics'),
    Sprite : require('./display/Sprite'),
    TilingSprite : require('./display/TilingSprite'),
    Texture : require('../lib/pixi/src/core/textures/Texture'),
    Pool : require('./extra/Pool'),
    Point : require('../lib/pixi/src/core/math/Point')
};

//Add inheritance system
for(var key in core){
    if(typeof core[key] === "function"){
        addInherits(core[key]);
    }
}

//Add Constants to the main object
for(var c in CONST) {
    core[c] = CONST[c];
}


module.exports = core;