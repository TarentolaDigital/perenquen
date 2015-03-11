(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PQ = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CONST = require('./core/const');

var core = {
    Class : require('./core/Class'),

    utils : require('./core/utils'),

    Game : require('./core/Game'),
    SceneManager : require('./core/SceneManager'),
    Scene : require('./display/Scene'),
    Graphics : require('./display/Graphics')
};

//Add Constants to the main object
for(var key in CONST) {
    core[key] = CONST[key];
}

//Add inheritance system, and export the core
module.exports = require('./core/inherits')(core);
},{"./core/Class":62,"./core/Game":63,"./core/SceneManager":64,"./core/const":65,"./core/inherits":66,"./core/utils":68,"./display/Graphics":70,"./display/Scene":71}],2:[function(require,module,exports){
module.exports={
  "name": "pixi.js",
  "version": "3.0.0-rc2",
  "description": "Pixi.js is a fast lightweight 2D library that works across all devices.",
  "author": "Mat Groves",
  "contributors": [
    "Chad Engler <chad@pantherdev.com>",
    "Richard Davey <rdavey@gmail.com>"
  ],
  "main": "./src/index.js",
  "homepage": "http://goodboydigital.com/",
  "bugs": "https://github.com/GoodBoyDigital/pixi.js/issues",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/GoodBoyDigital/pixi.js.git"
  },
  "scripts": {
    "test": "gulp test",
    "docs": "./node_modules/.bin/jsdoc -c ./gulp/util/jsdoc.conf.json"
  },
  "devDependencies": {
    "browserify": "^8.0.2",
    "chai": "^1.10.0",
    "del": "^1.1.0",
    "exorcist": "^0.1.6",
    "gulp": "^3.8.10",
    "gulp-cached": "^1.0.1",
    "gulp-concat": "^2.5.2",
    "gulp-debug": "^2.0.0",
    "gulp-jsdoc": "^0.1.4",
    "gulp-jshint": "^1.9.0",
    "gulp-plumber": "^0.6.6",
    "gulp-rename": "^1.2.0",
    "gulp-uglify": "^1.0.2",
    "gulp-util": "^3.0.1",
    "ink-docstrap": "^0.5.2",
    "jsdoc": "^3.3.0-alpha13",
    "jshint-summary": "^0.4.0",
    "karma": "^0.12.28",
    "karma-firefox-launcher": "^0.1.0",
    "karma-mocha": "^0.1.10",
    "karma-spec-reporter": "^0.0.16",
    "minimist": "^1.1.0",
    "mocha": "^2.1.0",
    "require-dir": "^0.1.0",
    "run-sequence": "^1.0.2",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.0.0",
    "watchify": "^2.2.1"
  },
  "dependencies": {
    "async": "^0.9.0",
    "resource-loader": "^1.2.2",
    "brfs": "^1.2.0"
  },
  "browserify": {
    "transform": [
      "brfs"
    ]
  }
}

},{}],3:[function(require,module,exports){
/**
 * Constant values used in pixi
 *
 * @memberof PIXI
 */
module.exports = {
    /**
     * String of the current PIXI version
     *
     * @static
     * @constant
     * @property {string} VERSION
     */
    VERSION: require('../../package.json').version,

    /**
     * Constant to identify the Renderer Type.
     *
     * @static
     * @constant
     * @property {object} RENDERER_TYPE
     * @property {number} RENDERER_TYPE.UNKNOWN
     * @property {number} RENDERER_TYPE.WEBGL
     * @property {number} RENDERER_TYPE.CANVAS
     */
    RENDERER_TYPE: {
        UNKNOWN:    0,
        WEBGL:      1,
        CANVAS:     2
    },

    /**
     * Various blend modes supported by PIXI. IMPORTANT - The WebGL renderer only supports
     * the NORMAL, ADD, MULTIPLY and SCREEN blend modes. Anything else will silently act like
     * NORMAL.
     *
     * @static
     * @constant
     * @property {object} BLEND_MODES
     * @property {number} BLEND_MODES.NORMAL
     * @property {number} BLEND_MODES.ADD
     * @property {number} BLEND_MODES.MULTIPLY
     * @property {number} BLEND_MODES.SCREEN
     * @property {number} BLEND_MODES.OVERLAY
     * @property {number} BLEND_MODES.DARKEN
     * @property {number} BLEND_MODES.LIGHTEN
     * @property {number} BLEND_MODES.COLOR_DODGE
     * @property {number} BLEND_MODES.COLOR_BURN
     * @property {number} BLEND_MODES.HARD_LIGHT
     * @property {number} BLEND_MODES.SOFT_LIGHT
     * @property {number} BLEND_MODES.DIFFERENCE
     * @property {number} BLEND_MODES.EXCLUSION
     * @property {number} BLEND_MODES.HUE
     * @property {number} BLEND_MODES.SATURATION
     * @property {number} BLEND_MODES.COLOR
     * @property {number} BLEND_MODES.LUMINOSITY
     */
    BLEND_MODES: {
        NORMAL:         0,
        ADD:            1,
        MULTIPLY:       2,
        SCREEN:         3,
        OVERLAY:        4,
        DARKEN:         5,
        LIGHTEN:        6,
        COLOR_DODGE:    7,
        COLOR_BURN:     8,
        HARD_LIGHT:     9,
        SOFT_LIGHT:     10,
        DIFFERENCE:     11,
        EXCLUSION:      12,
        HUE:            13,
        SATURATION:     14,
        COLOR:          15,
        LUMINOSITY:     16
    },

    /**
     * The scale modes that are supported by pixi.
     *
     * The DEFAULT scale mode affects the default scaling mode of future operations.
     * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
     *
     * @static
     * @constant
     * @property {object} SCALE_MODES
     * @property {number} SCALE_MODES.DEFAULT=LINEAR
     * @property {number} SCALE_MODES.LINEAR Smooth scaling
     * @property {number} SCALE_MODES.NEAREST Pixelating scaling
     */
    SCALE_MODES: {
        DEFAULT:    0,
        LINEAR:     0,
        NEAREST:    1
    },

    /**
     * The prefix that denotes a URL is for a retina asset
     *
     * @static
     * @constant
     * @property {string} RETINA_PREFIX
     */
    //example: '@2x',
    RETINA_PREFIX: /@(.+)x/,

    RESOLUTION:1,

    FILTER_RESOLUTION:1,

    /**
     * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
     * or {@link PIXI.CanvasRenderer}.
     *
     * @static
     * @constant
     * @property {object} DEFAULT_RENDER_OPTIONS
     * @property {HTMLCanvasElement} DEFAULT_RENDER_OPTIONS.view=null
     * @property {boolean} DEFAULT_RENDER_OPTIONS.transparent=false
     * @property {boolean} DEFAULT_RENDER_OPTIONS.antialias=false
     * @property {boolean} DEFAULT_RENDER_OPTIONS.forceFXAA=false
     * @property {boolean} DEFAULT_RENDER_OPTIONS.preserveDrawingBuffer=false
     * @property {number} DEFAULT_RENDER_OPTIONS.resolution=1
     * @property {number} DEFAULT_RENDER_OPTIONS.backgroundColor=0x000000
     * @property {boolean} DEFAULT_RENDER_OPTIONS.clearBeforeRender=true
     * @property {boolean} DEFAULT_RENDER_OPTIONS.autoResize=false
     */
    DEFAULT_RENDER_OPTIONS: {
        view: null,
        resolution: 1,
        antialias: false,
        forceFXAA: false,
        autoResize: false,
        transparent: false,
        backgroundColor: 0x000000,
        clearBeforeRender: true,
        preserveDrawingBuffer: false
    },

    /**
     * Constants that identify shapes, mainly to prevent `instanceof` calls.
     *
     * @static
     * @constant
     * @property {object} SHAPES
     * @property {object} SHAPES.POLY=0
     * @property {object} SHAPES.RECT=1
     * @property {object} SHAPES.CIRC=2
     * @property {object} SHAPES.ELIP=3
     * @property {object} SHAPES.RREC=4
     */
    SHAPES: {
        POLY: 0,
        RECT: 1,
        CIRC: 2,
        ELIP: 3,
        RREC: 4
    },

    SPRITE_BATCH_SIZE: 2000 //nice balance between mobile and desktop machines
};

},{"../../package.json":2}],4:[function(require,module,exports){
var math = require('../math'),
    DisplayObject = require('./DisplayObject'),
    RenderTexture = require('../textures/RenderTexture'),
    _tempMatrix = new math.Matrix();

/**
 * A Container represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 *```js
 * var container = new PIXI.Container();
 * container.addChild(sprite);
 * ```
 * @class
 * @extends DisplayObject
 * @memberof PIXI
 */
function Container()
{
    DisplayObject.call(this);

    /**
     * The array of children of this container.
     *
     * @member {DisplayObject[]}
     * @readonly
     */
    this.children = [];
}

// constructor
Container.prototype = Object.create(DisplayObject.prototype);
Container.prototype.constructor = Container;
module.exports = Container;

Object.defineProperties(Container.prototype, {
    /**
     * The width of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof Container#
     */
    width: {
        get: function ()
        {
            return this.scale.x * this.getLocalBounds().width;
        },
        set: function (value)
        {

            var width = this.getLocalBounds().width;

            if (width !== 0)
            {
                this.scale.x = value / width;
            }
            else
            {
                this.scale.x = 1;
            }


            this._width = value;
        }
    },

    /**
     * The height of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof Container#
     */
    height: {
        get: function ()
        {
            return  this.scale.y * this.getLocalBounds().height;
        },
        set: function (value)
        {

            var height = this.getLocalBounds().height;

            if (height !== 0)
            {
                this.scale.y = value / height ;
            }
            else
            {
                this.scale.y = 1;
            }

            this._height = value;
        }
    }
});

/**
 * Adds a child to the container.
 *
 * @param child {DisplayObject} The DisplayObject to add to the container
 * @return {DisplayObject} The child that was added.
 */
Container.prototype.addChild = function (child)
{
    return this.addChildAt(child, this.children.length);
};

/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 *
 * @param child {DisplayObject} The child to add
 * @param index {Number} The index to place the child in
 * @return {DisplayObject} The child that was added.
 */
Container.prototype.addChildAt = function (child, index)
{
    // prevent adding self as child
    if (child === this)
    {
        return child;
    }

    if (index >= 0 && index <= this.children.length)
    {
        if (child.parent)
        {
            child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);
        return child;
    }
    else
    {
        throw new Error(child + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
    }
};

/**
 * Swaps the position of 2 Display Objects within this container.
 *
 * @param child {DisplayObject}
 * @param child2 {DisplayObject}
 */
Container.prototype.swapChildren = function (child, child2)
{
    if (child === child2)
    {
        return;
    }

    var index1 = this.getChildIndex(child);
    var index2 = this.getChildIndex(child2);

    if (index1 < 0 || index2 < 0)
    {
        throw new Error('swapChildren: Both the supplied DisplayObjects must be children of the caller.');
    }

    this.children[index1] = child2;
    this.children[index2] = child;
};

/**
 * Returns the index position of a child DisplayObject instance
 *
 * @param child {DisplayObject} The DisplayObject instance to identify
 * @return {Number} The index position of the child display object to identify
 */
Container.prototype.getChildIndex = function (child)
{
    var index = this.children.indexOf(child);

    if (index === -1)
    {
        throw new Error('The supplied DisplayObject must be a child of the caller');
    }

    return index;
};

/**
 * Changes the position of an existing child in the display object container
 *
 * @param child {DisplayObject} The child DisplayObject instance for which you want to change the index number
 * @param index {Number} The resulting index number for the child display object
 */
Container.prototype.setChildIndex = function (child, index)
{
    if (index < 0 || index >= this.children.length)
    {
        throw new Error('The supplied index is out of bounds');
    }

    var currentIndex = this.getChildIndex(child);

    this.children.splice(currentIndex, 1); //remove from old position
    this.children.splice(index, 0, child); //add at new position
};

/**
 * Returns the child at the specified index
 *
 * @param index {Number} The index to get the child at
 * @return {DisplayObject} The child at the given index, if any.
 */
Container.prototype.getChildAt = function (index)
{
    if (index < 0 || index >= this.children.length)
    {
        throw new Error('getChildAt: Supplied index ' + index + ' does not exist in the child list, or the supplied DisplayObject is not a child of the caller');
    }

    return this.children[index];
};

/**
 * Removes a child from the container.
 *
 * @param child {DisplayObject} The DisplayObject to remove
 * @return {DisplayObject} The child that was removed.
 */
Container.prototype.removeChild = function (child)
{
    var index = this.children.indexOf(child);

    if (index === -1)
    {
        return;
    }

    return this.removeChildAt(index);
};

/**
 * Removes a child from the specified index position.
 *
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child that was removed.
 */
Container.prototype.removeChildAt = function (index)
{
    var child = this.getChildAt(index);

    child.parent = null;
    this.children.splice(index, 1);

    return child;
};

/**
 * Removes all children from this container that are within the begin and end indexes.
 *
 * @param beginIndex {Number} The beginning position. Default value is 0.
 * @param endIndex {Number} The ending position. Default value is size of the container.
 */
Container.prototype.removeChildren = function (beginIndex, endIndex)
{
    var begin = beginIndex || 0;
    var end = typeof endIndex === 'number' ? endIndex : this.children.length;
    var range = end - begin;

    if (range > 0 && range <= end)
    {
        var removed = this.children.splice(begin, range);

        for (var i = 0; i < removed.length; ++i)
        {
            removed[i].parent = null;
        }

        return removed;
    }
    else if (range === 0 && this.children.length === 0)
    {
        return [];
    }
    else
    {
        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
    }
};

/**
 * Useful function that returns a texture of the display object that can then be used to create sprites
 * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 *
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used to generate the texture.
 * @param resolution {Number} The resolution of the texture being generated
 * @param scaleMode {Number} See {@link SCALE_MODES} for possible values
 * @return {Texture} a texture of the display object
 */
Container.prototype.generateTexture = function (renderer, resolution, scaleMode)
{
    var bounds = this.getLocalBounds();

    var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0, renderer, scaleMode, resolution);

    _tempMatrix.tx = -bounds.x;
    _tempMatrix.ty = -bounds.y;

    renderTexture.render(this, _tempMatrix);

    return renderTexture;
};

/*
 * Updates the transform on all children of this container for rendering
 *
 * @private
 */
Container.prototype.updateTransform = function ()
{
    if (!this.visible)
    {
        return;
    }

    this.displayObjectUpdateTransform();

    for (var i = 0, j = this.children.length; i < j; ++i)
    {
        this.children[i].updateTransform();
    }
};

// performance increase to avoid using call.. (10x faster)
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

/**
 * Retrieves the bounds of the Container as a rectangle. The bounds calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getBounds = function ()
{
    if(!this._currentBounds)
    {

        if (this.children.length === 0)
        {
            return math.Rectangle.EMPTY;
        }

        // TODO the bounds have already been calculated this render session so return what we have

        var minX = Infinity;
        var minY = Infinity;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var childBounds;
        var childMaxX;
        var childMaxY;

        var childVisible = false;

        for (var i = 0, j = this.children.length; i < j; ++i)
        {
            var child = this.children[i];

            if (!child.visible)
            {
                continue;
            }

            childVisible = true;

            childBounds = this.children[i].getBounds();

            minX = minX < childBounds.x ? minX : childBounds.x;
            minY = minY < childBounds.y ? minY : childBounds.y;

            childMaxX = childBounds.width + childBounds.x;
            childMaxY = childBounds.height + childBounds.y;

            maxX = maxX > childMaxX ? maxX : childMaxX;
            maxY = maxY > childMaxY ? maxY : childMaxY;
        }

        if (!childVisible)
        {
            return math.Rectangle.EMPTY;
        }

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.y = minY;
        bounds.width = maxX - minX;
        bounds.height = maxY - minY;

        this._currentBounds = bounds;
    }

    return this._currentBounds;
};

/**
 * Retrieves the non-global local bounds of the Container as a rectangle.
 * The calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getLocalBounds = function ()
{
    var matrixCache = this.worldTransform;

    this.worldTransform = math.Matrix.IDENTITY;

    for (var i = 0, j = this.children.length; i < j; ++i)
    {
        this.children[i].updateTransform();
    }

    this.worldTransform = matrixCache;

    this._currentBounds = null;

    return this.getBounds();
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The renderer
 */
Container.prototype.renderWebGL = function (renderer)
{

    // if the object is not visible or the alpha is 0 then no need to render this element
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
    {
        return;
    }

    var i, j;

    // do a quick check to see if this element has a mask or a filter.
    if (this._mask || this._filters)
    {
        renderer.currentRenderer.flush();

        // push filter first as we need to ensure the stencil buffer is correct for any masking
        if (this._filters)
        {
            renderer.filterManager.pushFilter(this, this._filters);
        }

        if (this._mask)
        {
            renderer.maskManager.pushMask(this, this._mask);
        }

        renderer.currentRenderer.start();

        // add this object to the batch, only rendered if it has a texture.
        this._renderWebGL(renderer);

        // now loop through the children and make sure they get rendered
        for (i = 0, j = this.children.length; i < j; i++)
        {
            this.children[i].renderWebGL(renderer);
        }

        renderer.currentRenderer.flush();

        if (this._mask)
        {
            renderer.maskManager.popMask(this, this._mask);
        }

        if (this._filters)
        {
            renderer.filterManager.popFilter();

        }
        renderer.currentRenderer.start();
    }
    else
    {
        this._renderWebGL(renderer);

        // simple render children!
        for (i = 0, j = this.children.length; i < j; ++i)
        {
            this.children[i].renderWebGL(renderer);
        }
    }
};

/**
 * To be overridden by the subclass
 *
 * @param renderer {WebGLRenderer} The renderer
 * @private
 */
Container.prototype._renderWebGL = function (renderer)
{
    // this is where content itself gets rendered...
};

/**
 * To be overridden by the subclass
 *
 * @param renderer {CanvasRenderer} The renderer
 * @private
 */
Container.prototype._renderCanvas = function (renderer)
{
    // this is where content itself gets rendered...
};


/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The renderer
 */
Container.prototype.renderCanvas = function (renderer)
{
    // if not visible or the alpha is 0 then no need to render this
    if (!this.visible || this.alpha <= 0 || !this.renderable)
    {
        return;
    }

    if (this._mask)
    {
        renderer.maskManager.pushMask(this._mask, renderer);
    }

    this._renderCanvas(renderer);
    for (var i = 0, j = this.children.length; i < j; ++i)
    {
        this.children[i].renderCanvas(renderer);
    }

    if (this._mask)
    {
        renderer.maskManager.popMask(renderer);
    }
};

/**
 * Destroys the container
 * @param destroyChildren {boolean} if set to true, all the children will have their destroy method called as well
 */
Container.prototype.destroy = function (destroyChildren)
{
    DisplayObject.prototype.destroy.call(this);

    if(destroyChildren)
    {
        for (var i = 0, j = this.children.length; i < j; ++i)
        {
            this.children[i].destroy();
        }
    }

    this.removeChildren();

    this.children = null;
};

},{"../math":13,"../textures/RenderTexture":50,"./DisplayObject":5}],5:[function(require,module,exports){
var math = require('../math'),
    utils = require('../utils'),
    RenderTexture = require('../textures/RenderTexture'),
    _tempMatrix = new math.Matrix();

/**
 * The base class for all objects that are rendered on the screen.
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class
 * @memberof PIXI
 */
function DisplayObject()
{
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     *
     * @member {Point}
     */
    this.position = new math.Point();

    /**
     * The scale factor of the object.
     *
     * @member {Point}
     */
    this.scale = new math.Point(1, 1);

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @member {Point}
     */
    this.pivot = new math.Point(0, 0);

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */
    this.rotation = 0;

    /**
     * The opacity of the object.
     *
     * @member {number}
     */
    this.alpha = 1;

    /**
     * The visibility of the object. If false the object will not be drawn, and
     * the updateTransform function will not be called.
     *
     * @member {boolean}
     */
    this.visible = true;

    /**
     * Can this object be rendered, if false the object will not be drawn but the updateTransform
     * methods will still be called.
     *
     * @member {boolean}
     */
    this.renderable = true;

    /**
     * The display object container that contains this display object.
     *
     * @member {Container}
     * @readOnly
     */
    this.parent = null;

    /**
     * The multiplied alpha of the displayObject
     *
     * @member {number}
     * @readOnly
     */
    this.worldAlpha = 1;

    /**
     * Current transform of the object based on world (parent) factors
     *
     * @member {Matrix}
     * @readOnly
     */
    this.worldTransform = new math.Matrix();

    /**
     * The area the filter is applied to. This is used as more of an optimisation
     * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
     *
     * @member {Rectangle}
     */
    this.filterArea = null;

    /**
     * cached sin rotation
     *
     * @member {number}
     * @private
     */
    this._sr = 0;

    /**
     * cached cos rotation
     *
     * @member {number}
     * @private
     */
    this._cr = 1;

    /**
     * The original, cached bounds of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._bounds = new math.Rectangle(0, 0, 1, 1);

    /**
     * The most up-to-date bounds of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._currentBounds = null;

    /**
     * The original, cached mask of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._mask = null;

    //TODO rename to _isMask
   // this.isMask = false;

    /**
     * Cached internal flag.
     *
     * @member {boolean}
     * @private
     */
    this._cacheAsBitmap = false;
    this._cachedObject = null;
}

// constructor
DisplayObject.prototype.constructor = DisplayObject;
utils.eventTarget.mixin(DisplayObject.prototype);
module.exports = DisplayObject;

Object.defineProperties(DisplayObject.prototype, {
    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     *
     * @member {number}
     * @memberof DisplayObject#
     */
    x: {
        get: function ()
        {
            return this.position.x;
        },
        set: function (value)
        {
            this.position.x = value;
        }
    },

    /**
     * The position of the displayObject on the y axis relative to the local coordinates of the parent.
     *
     * @member {number}
     * @memberof DisplayObject#
     */
    y: {
        get: function ()
        {
            return this.position.y;
        },
        set: function (value)
        {
            this.position.y = value;
        }
    },

    /**
     * Indicates if the sprite is globally visible.
     *
     * @member {boolean}
     * @memberof DisplayObject#
     * @readonly
     */
    worldVisible: {
        get: function ()
        {
            var item = this;

            do {
                if (!item.visible)
                {
                    return false;
                }

                item = item.parent;
            } while (item);

            return true;
        }
    },

    /**
     * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.
     * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.
     * To remove a mask, set this property to null.
     *
     * @member {Graphics}
     * @memberof DisplayObject#
     */
    mask: {
        get: function ()
        {
            return this._mask;
        },
        set: function (value)
        {
            if (this._mask)
            {
                this._mask.renderable = true;
            }

            this._mask = value;

            if (this._mask)
            {
                this._mask.renderable = false;
            }
        }
    },

    /**
     * Sets the filters for the displayObject.
     * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
     * To remove filters simply set this property to 'null'
     *
     * @member {Filter[]}
     * @memberof DisplayObject#
     */
    filters: {
        get: function ()
        {
            return this._filters && this._filters.slice();
        },
        set: function (value)
        {
            this._filters = value && value.slice();
        }
    }

});

/*
 * Updates the object transform for rendering
 *
 * TODO - Optimization pass!
 *
 * @private
 */
DisplayObject.prototype.updateTransform = function ()
{

    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    // so if rotation is between 0 then we can simplify the multiplication process...
    if (this.rotation % math.PI_2)
    {
        // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
        if (this.rotation !== this.rotationCache)
        {
            this.rotationCache = this.rotation;
            this._sr = Math.sin(this.rotation);
            this._cr = Math.cos(this.rotation);
        }

        // get the matrix values of the displayobject based on its transform properties..
        a  =  this._cr * this.scale.x;
        b  =  this._sr * this.scale.x;
        c  = -this._sr * this.scale.y;
        d  =  this._cr * this.scale.y;
        tx =  this.position.x;
        ty =  this.position.y;

        // check for pivot.. not often used so geared towards that fact!
        if (this.pivot.x || this.pivot.y)
        {
            tx -= this.pivot.x * a + this.pivot.y * c;
            ty -= this.pivot.x * b + this.pivot.y * d;
        }

        // concat the parent matrix with the objects transform.
        wt.a  = a  * pt.a + b  * pt.c;
        wt.b  = a  * pt.b + b  * pt.d;
        wt.c  = c  * pt.a + d  * pt.c;
        wt.d  = c  * pt.b + d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }
    else
    {
        // lets do the fast version as we know there is no rotation..
        a  = this.scale.x;
        d  = this.scale.y;

        tx = this.position.x - this.pivot.x * a;
        ty = this.position.y - this.pivot.y * d;

        wt.a  = a  * pt.a;
        wt.b  = a  * pt.b;
        wt.c  = d  * pt.c;
        wt.d  = d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }

    // multiply the alphas..
    this.worldAlpha = this.alpha * this.parent.worldAlpha;

    // reset the bounds each time this is called!
    this._currentBounds = null;
};

// performance increase to avoid using call.. (10x faster)
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

/**
 *
 *
 * Retrieves the bounds of the displayObject as a rectangle object
 *
 * @param matrix {Matrix}
 * @return {Rectangle} the rectangular bounding area
 */
DisplayObject.prototype.getBounds = function (matrix)
{
    return math.Rectangle.EMPTY;
};

/**
 * Retrieves the local bounds of the displayObject as a rectangle object
 *
 * @return {Rectangle} the rectangular bounding area
 */
DisplayObject.prototype.getLocalBounds = function ()
{
    return this.getBounds(math.Matrix.IDENTITY);
};

/**
 * Calculates the global position of the display object
 *
 * @param position {Point} The world origin to calculate from
 * @return {Point} A point object representing the position of this object
 */
DisplayObject.prototype.toGlobal = function (position)
{
    // don't need to update the lot
    this.displayObjectUpdateTransform();
    return this.worldTransform.apply(position);
};

/**
 * Calculates the local position of the display object relative to another point
 *
 * @param position {Point} The world origin to calculate from
 * @param [from] {DisplayObject} The DisplayObject to calculate the global position from
 * @return {Point} A point object representing the position of this object
 */
DisplayObject.prototype.toLocal = function (position, from)
{
    if (from)
    {
        position = from.toGlobal(position);
    }

    // don't need to update the lot
    this.displayObjectUpdateTransform();
    return this.worldTransform.applyInverse(position);
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The renderer
 * @private
 */
DisplayObject.prototype.renderWebGL = function (renderer)
{
    // OVERWRITE;
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The renderer
 * @private
 */
DisplayObject.prototype.renderCanvas = function (renderer)
{
    // OVERWRITE;
};
/**
 * Useful function that returns a texture of the display object that can then be used to create sprites
 * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 *
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used to generate the texture.
 * @param resolution {Number} The resolution of the texture being generated
 * @param scaleMode {Number} See {@link SCALE_MODES} for possible values
 * @return {Texture} a texture of the display object
 */
DisplayObject.prototype.generateTexture = function (renderer, resolution, scaleMode)
{
    var bounds = this.getLocalBounds();

    var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0, renderer, scaleMode, resolution);

    _tempMatrix.tx = -bounds.x;
    _tempMatrix.ty = -bounds.y;

    renderTexture.render(this, _tempMatrix);

    return renderTexture;
};

/**
 * Base destroy method for generic display objects
 *
 */
DisplayObject.prototype.destroy = function ()
{

    this.position = null;
    this.scale = null;
    this.pivot = null;

    this._bounds = null;
    this._currentBounds = null;
    this._mask = null;

    this.worldTransform = null;
    this.filterArea = null;

    this.listeners = null;
};

},{"../math":13,"../textures/RenderTexture":50,"../utils":57}],6:[function(require,module,exports){
var Container = require('../display/Container'),
    Sprite = require('../sprites/Sprite'),
    Texture = require('../textures/Texture'),
    CanvasBuffer = require('../renderers/canvas/utils/CanvasBuffer'),
    CanvasGraphics = require('../renderers/canvas/utils/CanvasGraphics'),
    GraphicsData = require('./GraphicsData'),
    math = require('../math'),
    CONST = require('../const'),
    tempPoint = new math.Point();

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * @class
 * @extends Container
 * @memberof PIXI
 */
function Graphics()
{
    Container.call(this);

    /**
     * The alpha value used when filling the Graphics object.
     *
     * @member {number}
     * @default 1
     */
    this.fillAlpha = 1;

    /**
     * The width (thickness) of any lines drawn.
     *
     * @member {number}
     * @default 0
     */
    this.lineWidth = 0;

    /**
     * The color of any lines drawn.
     *
     * @member {string}
     * @default 0
     */
    this.lineColor = 0;

    /**
     * Graphics data
     *
     * @member {GraphicsData[]}
     * @private
     */
    this.graphicsData = [];

    /**
     * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to reset the tint.
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;

    /**
     * The previous tint applied to the graphic shape. Used to compare to the current tint and check if theres change.
     *
     * @member {number}
     * @private
     * @default 0xFFFFFF
     */
    this._prevTint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the graphic shape. Apply a value of blendModes.NORMAL to reset the blend mode.
     *
     * @member {number}
     * @default CONST.BLEND_MODES.NORMAL;
     */
    this.blendMode = CONST.BLEND_MODES.NORMAL;

    /**
     * Current path
     *
     * @member {GraphicsData}
     * @private
     */
    this.currentPath = null;

    /**
     * Array containing some WebGL-related properties used by the WebGL renderer.
     *
     * @member {object<number, object>}
     * @private
     */
    // TODO - _webgl should use a prototype object, not a random undocumented object...
    this._webGL = {};

    /**
     * Whether this shape is being used as a mask.
     *
     * @member {boolean}
     */
    this.isMask = false;

    /**
     * The bounds' padding used for bounds calculation.
     *
     * @member {number}
     */
    this.boundsPadding = 0;

    /**
     * A cache of the local bounds to prevent recalculation.
     *
     * @member {Rectangle}
     * @private
     */
    this._localBounds = new math.Rectangle(0,0,1,1);

    /**
     * Used to detect if the graphics object has changed. If this is set to true then the graphics
     * object will be recalculated.
     *
     * @member {boolean}
     * @private
     */
    this.dirty = true;

    /**
     * Used to detect if the WebGL graphics object has changed. If this is set to true then the
     * graphics object will be recalculated.
     *
     * @member {boolean}
     * @private
     */
    this.glDirty = false;

    /**
     * Used to detect if the cached sprite object needs to be updated.
     *
     * @member {boolean}
     * @private
     */
    this.cachedSpriteDirty = false;
}

// constructor
Graphics.prototype = Object.create(Container.prototype);
Graphics.prototype.constructor = Graphics;
module.exports = Graphics;

Object.defineProperties(Graphics.prototype, {
    /**
     * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
     * This is useful if your graphics element does not change often, as it will speed up the rendering
     * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
     * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
     * you are constantly redrawing the graphics element.
     *
     * @member {boolean}
     * @memberof Graphics#
     * @default false
     * @private
     */

});

/**
 * Creates a new Graphics object with the same values as this one.
 *
 * @return {Graphics}
 */
Graphics.prototype.clone = function ()
{
    var clone = new Graphics();

    clone.renderable    = this.renderable;
    clone.fillAlpha     = this.fillAlpha;
    clone.lineWidth     = this.lineWidth;
    clone.lineColor     = this.lineColor;
    clone.tint          = this.tint;
    clone.blendMode     = this.blendMode;
    clone.isMask        = this.isMask;
    clone.boundsPadding = this.boundsPadding;
    clone.dirty         = this.dirty;
    clone.glDirty       = this.glDirty;
    clone.cachedSpriteDirty = this.cachedSpriteDirty;

    // copy graphics data
    for (var i = 0; i < this.graphicsData.length; ++i)
    {
        clone.graphicsData.push(this.graphicsData.clone());
    }

    clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];

    clone.updateLocalBounds();

    return clone;
};

/**
 * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
 *
 * @param lineWidth {number} width of the line to draw, will update the objects stored style
 * @param color {number} color of the line to draw, will update the objects stored style
 * @param alpha {number} alpha of the line to draw, will update the objects stored style
 * @return {Graphics}
 */
Graphics.prototype.lineStyle = function (lineWidth, color, alpha)
{
    this.lineWidth = lineWidth || 0;
    this.lineColor = color || 0;
    this.lineAlpha = (arguments.length < 3) ? 1 : alpha;

    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length)
        {
            // halfway through a line? start a new one!
            this.drawShape( new math.Polygon( this.currentPath.shape.points.slice(-2) ));
        }
        else
        {
            // otherwise its empty so lets just set the line properties
            this.currentPath.lineWidth = this.lineWidth;
            this.currentPath.lineColor = this.lineColor;
            this.currentPath.lineAlpha = this.lineAlpha;
        }
    }

    return this;
};

/**
 * Moves the current drawing position to x, y.
 *
 * @param x {number} the X coordinate to move to
 * @param y {number} the Y coordinate to move to
 * @return {Graphics}
  */
Graphics.prototype.moveTo = function (x, y)
{
    this.drawShape(new math.Polygon([x,y]));

    return this;
};

/**
 * Draws a line using the current line style from the current drawing position to (x, y);
 * The current drawing position is then set to (x, y).
 *
 * @param x {number} the X coordinate to draw to
 * @param y {number} the Y coordinate to draw to
 * @return {Graphics}
 */
Graphics.prototype.lineTo = function (x, y)
{
    this.currentPath.shape.points.push(x, y);
    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a quadratic bezier curve and then draws it.
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Graphics}
 */
Graphics.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY)
{
    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length === 0)
        {
            this.currentPath.shape.points = [0, 0];
        }
    }
    else
    {
        this.moveTo(0,0);
    }

    var xa,
        ya,
        n = 20,
        points = this.currentPath.shape.points;

    if (points.length === 0)
    {
        this.moveTo(0, 0);
    }

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;
    for (var i = 1; i <= n; ++i)
    {
        j = i / n;

        xa = fromX + ( (cpX - fromX) * j );
        ya = fromY + ( (cpY - fromY) * j );

        points.push( xa + ( ((cpX + ( (toX - cpX) * j )) - xa) * j ),
                     ya + ( ((cpY + ( (toY - cpY) * j )) - ya) * j ) );
    }

    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param cpX2 {number} Second Control point x
 * @param cpY2 {number} Second Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Graphics}
 */
Graphics.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY)
{
    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length === 0)
        {
            this.currentPath.shape.points = [0, 0];
        }
    }
    else
    {
        this.moveTo(0,0);
    }

    var n = 20,
        dt,
        dt2,
        dt3,
        t2,
        t3,
        points = this.currentPath.shape.points;

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;

    for (var i = 1; i <= n; ++i)
    {
        j = i / n;

        dt = (1 - j);
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        points.push( dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX,
                     dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }

    this.dirty = true;

    return this;
};

/**
 * The arcTo() method creates an arc/curve between two tangents on the canvas.
 *
 * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
 *
 * @param x1 {number} The x-coordinate of the beginning of the arc
 * @param y1 {number} The y-coordinate of the beginning of the arc
 * @param x2 {number} The x-coordinate of the end of the arc
 * @param y2 {number} The y-coordinate of the end of the arc
 * @param radius {number} The radius of the arc
 * @return {Graphics}
 */
Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius)
{
    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length === 0)
        {
            this.currentPath.shape.points.push(x1, y1);
        }
    }
    else
    {
        this.moveTo(x1, y1);
    }

    var points = this.currentPath.shape.points,
        fromX = points[points.length-2],
        fromY = points[points.length-1],
        a1 = fromY - y1,
        b1 = fromX - x1,
        a2 = y2   - y1,
        b2 = x2   - x1,
        mm = Math.abs(a1 * b2 - b1 * a2);

    if (mm < 1.0e-8 || radius === 0)
    {
        if (points[points.length-2] !== x1 || points[points.length-1] !== y1)
        {
            points.push(x1, y1);
        }
    }
    else
    {
        var dd = a1 * a1 + b1 * b1,
            cc = a2 * a2 + b2 * b2,
            tt = a1 * a2 + b1 * b2,
            k1 = radius * Math.sqrt(dd) / mm,
            k2 = radius * Math.sqrt(cc) / mm,
            j1 = k1 * tt / dd,
            j2 = k2 * tt / cc,
            cx = k1 * b2 + k2 * b1,
            cy = k1 * a2 + k2 * a1,
            px = b1 * (k2 + j1),
            py = a1 * (k2 + j1),
            qx = b2 * (k1 + j2),
            qy = a2 * (k1 + j2),
            startAngle = Math.atan2(py - cy, px - cx),
            endAngle   = Math.atan2(qy - cy, qx - cx);

        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
    }

    this.dirty = true;

    return this;
};

/**
 * The arc method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @param cx {number} The x-coordinate of the center of the circle
 * @param cy {number} The y-coordinate of the center of the circle
 * @param radius {number} The radius of the circle
 * @param startAngle {number} The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param endAngle {number} The ending angle, in radians
 * @param anticlockwise {boolean} Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
 * @return {Graphics}
 */
Graphics.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise)
{
    var startX = cx + Math.cos(startAngle) * radius;
    var startY = cy + Math.sin(startAngle) * radius;
    var points;

    if( this.currentPath )
    {
        points = this.currentPath.shape.points;

        if(points.length === 0)
        {
            points.push(startX, startY);
        }
        else if( points[points.length-2] !== startX || points[points.length-1] !== startY)
        {
            points.push(startX, startY);
        }
    }
    else
    {
        this.moveTo(startX, startY);
        points = this.currentPath.shape.points;
    }

    if (startAngle === endAngle)
    {
        return this;
    }

    if( !anticlockwise && endAngle <= startAngle )
    {
        endAngle += Math.PI * 2;
    }
    else if( anticlockwise && startAngle <= endAngle )
    {
        startAngle += Math.PI * 2;
    }

    var sweep = anticlockwise ? (startAngle - endAngle) *-1 : (endAngle - startAngle);
    var segs =  Math.ceil( Math.abs(sweep)/ (Math.PI * 2) ) * 40;

    if( sweep === 0 )
    {
        return this;
    }

    var theta = sweep/(segs*2);
    var theta2 = theta*2;

    var cTheta = Math.cos(theta);
    var sTheta = Math.sin(theta);

    var segMinus = segs - 1;

    var remainder = ( segMinus % 1 ) / segMinus;

    for(var i=0; i<=segMinus; i++)
    {
        var real =  i + remainder * i;


        var angle = ((theta) + startAngle + (theta2 * real));

        var c = Math.cos(angle);
        var s = -Math.sin(angle);

        points.push(( (cTheta *  c) + (sTheta * s) ) * radius + cx,
                    ( (cTheta * -s) + (sTheta * c) ) * radius + cy);
    }

    this.dirty = true;

    return this;
};

/**
 * Specifies a simple one-color fill that subsequent calls to other Graphics methods
 * (such as lineTo() or drawCircle()) use when drawing.
 *
 * @param color {number} the color of the fill
 * @param alpha {number} the alpha of the fill
 * @return {Graphics}
 */
Graphics.prototype.beginFill = function (color, alpha)
{
    this.filling = true;
    this.fillColor = color || 0;
    this.fillAlpha = (alpha === undefined) ? 1 : alpha;

    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length <= 2)
        {
            this.currentPath.fill = this.filling;
            this.currentPath.fillColor = this.fillColor;
            this.currentPath.fillAlpha = this.fillAlpha;
        }
    }
    return this;
};

/**
 * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
 *
 * @return {Graphics}
 */
Graphics.prototype.endFill = function ()
{
    this.filling = false;
    this.fillColor = null;
    this.fillAlpha = 1;

    return this;
};

/**
 *
 * @param x {number} The X coord of the top-left of the rectangle
 * @param y {number} The Y coord of the top-left of the rectangle
 * @param width {number} The width of the rectangle
 * @param height {number} The height of the rectangle
 * @return {Graphics}
 */
Graphics.prototype.drawRect = function ( x, y, width, height )
{
    this.drawShape(new math.Rectangle(x,y, width, height));

    return this;
};

/**
 *
 * @param x {number} The X coord of the top-left of the rectangle
 * @param y {number} The Y coord of the top-left of the rectangle
 * @param width {number} The width of the rectangle
 * @param height {number} The height of the rectangle
 * @param radius {number} Radius of the rectangle corners
 */
Graphics.prototype.drawRoundedRect = function ( x, y, width, height, radius )
{
    this.drawShape(new math.RoundedRectangle(x, y, width, height, radius));

    return this;
};

/**
 * Draws a circle.
 *
 * @param x {number} The X coordinate of the center of the circle
 * @param y {number} The Y coordinate of the center of the circle
 * @param radius {number} The radius of the circle
 * @return {Graphics}
 */
Graphics.prototype.drawCircle = function (x, y, radius)
{
    this.drawShape(new math.Circle(x,y, radius));

    return this;
};

/**
 * Draws an ellipse.
 *
 * @param x {number} The X coordinate of the center of the ellipse
 * @param y {number} The Y coordinate of the center of the ellipse
 * @param width {number} The half width of the ellipse
 * @param height {number} The half height of the ellipse
 * @return {Graphics}
 */
Graphics.prototype.drawEllipse = function (x, y, width, height)
{
    this.drawShape(new math.Ellipse(x, y, width, height));

    return this;
};

/**
 * Draws a polygon using the given path.
 *
 * @param path {Array} The path data used to construct the polygon.
 * @return {Graphics}
 */
Graphics.prototype.drawPolygon = function (path)
{
    if (!(path instanceof Array))
    {
        path = Array.prototype.slice.call(arguments);
    }

    this.drawShape(new math.Polygon(path));

    return this;
};

/**
 * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
 *
 * @return {Graphics}
 */
Graphics.prototype.clear = function ()
{
    this.lineWidth = 0;
    this.filling = false;

    this.dirty = true;
    this.clearDirty = true;
    this.graphicsData = [];

    return this;
};

/**
 * Useful function that returns a texture of the graphics object that can then be used to create sprites
 * This can be quite useful if your geometry is complicated and needs to be reused multiple times.
 *
 * @param resolution {number} The resolution of the texture being generated
 * @param scaleMode {number} Should be one of the scaleMode consts
 * @return {Texture} a texture of the graphics object
 */
Graphics.prototype.generateTexture = function (resolution, scaleMode)
{
    resolution = resolution || 1;

    var bounds = this.getBounds();

    var canvasBuffer = new CanvasBuffer(bounds.width * resolution, bounds.height * resolution);

    var texture = Texture.fromCanvas(canvasBuffer.canvas, scaleMode);
    texture.baseTexture.resolution = resolution;

    canvasBuffer.context.scale(resolution, resolution);

    canvasBuffer.context.translate(-bounds.x,-bounds.y);

    CanvasGraphics.renderGraphics(this, canvasBuffer.context);

    return texture;
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer}
 */
Graphics.prototype._renderWebGL = function (renderer)
{
    // if the sprite is not visible or the alpha is 0 then no need to render this element

    // this code may still be needed so leaving for now..
    //
    /*
    if (this._cacheAsBitmap)
    {
        if (this.dirty || this.cachedSpriteDirty)
        {
            this._generateCachedSprite();

            // we will also need to update the texture on the gpu too!
            this.updateCachedSpriteTexture();

            this.cachedSpriteDirty = false;
            this.dirty = false;
        }

        this._cachedSprite.worldAlpha = this.worldAlpha;

        Sprite.prototype.renderWebGL.call(this._cachedSprite, renderer);

        return;
    }

    */

    if (this.glDirty)
    {
        this.dirty = true;
        this.glDirty = false;
    }

    renderer.setObjectRenderer(renderer.plugins.graphics);
    renderer.plugins.graphics.render(this);

};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer}
 * @private
 */
Graphics.prototype._renderCanvas = function (renderer)
{
    if (this.isMask === true)
    {
        return;
    }

    // if the tint has changed, set the graphics object to dirty.
    if (this._prevTint !== this.tint) {
        this.dirty = true;
        this._prevTint = this.tint;
    }

    if (this._cacheAsBitmap)
    {
        if (this.dirty || this.cachedSpriteDirty)
        {
            this._generateCachedSprite();

            // we will also need to update the texture
            this.updateCachedSpriteTexture();

            this.cachedSpriteDirty = false;
            this.dirty = false;
        }

        this._cachedSprite.alpha = this.alpha;

        Sprite.prototype._renderCanvas.call(this._cachedSprite, renderer);

        return;
    }
    else
    {
        var context = renderer.context;
        var transform = this.worldTransform;

        if (this.blendMode !== renderer.currentBlendMode)
        {
            renderer.currentBlendMode = this.blendMode;
            context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
        }

        var resolution = renderer.resolution;
        context.setTransform(
            transform.a * resolution,
            transform.b * resolution,
            transform.c * resolution,
            transform.d * resolution,
            transform.tx * resolution,
            transform.ty * resolution
        );

        CanvasGraphics.renderGraphics(this, context);
    }
};

/**
 * Retrieves the bounds of the graphic shape as a rectangle object
 *
 * @return {Rectangle} the rectangular bounding area
 */
Graphics.prototype.getBounds = function (matrix)
{
    if(!this._currentBounds)
    {

        // return an empty object if the item is a mask!
        if (!this.renderable)
        {
            return math.Rectangle.EMPTY;
        }

        if (this.dirty)
        {
            this.updateLocalBounds();

            this.glDirty = true;
            this.cachedSpriteDirty = true;
            this.dirty = false;
        }

        var bounds = this._localBounds;

        var w0 = bounds.x;
        var w1 = bounds.width + bounds.x;

        var h0 = bounds.y;
        var h1 = bounds.height + bounds.y;

        var worldTransform = matrix || this.worldTransform;

        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;

        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;

        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;

        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;

        var x4 =  a * w1 + c * h0 + tx;
        var y4 =  d * h0 + b * w1 + ty;

        var maxX = x1;
        var maxY = y1;

        var minX = x1;
        var minY = y1;

        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;

        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;

        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;

        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;

        this._bounds.x = minX;
        this._bounds.width = maxX - minX;

        this._bounds.y = minY;
        this._bounds.height = maxY - minY;

        this._currentBounds = this._bounds;
    }

    return this._currentBounds;
};

/**
* Tests if a point is inside this graphics object
*
* @param point {Point} the point to test
* @return {boolean} the result of the test
*/
Graphics.prototype.containsPoint = function( point )
{
    this.worldTransform.applyInverse(point,  tempPoint);

    var graphicsData = this.graphicsData;

    for (var i = 0; i < graphicsData.length; i++)
    {
        var data = graphicsData[i];

        if (!data.fill)
        {
            continue;
        }

        // only deal with fills..
        if (data.shape)
        {
            if ( data.shape.contains( tempPoint.x, tempPoint.y ) )
            {
                return true;
            }
        }
    }

    return false;
};

/**
 * Update the bounds of the object
 *
 */
Graphics.prototype.updateLocalBounds = function ()
{
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    if (this.graphicsData.length)
    {
        var shape, points, x, y, w, h;

        for (var i = 0; i < this.graphicsData.length; i++)
        {
            var data = this.graphicsData[i];
            var type = data.type;
            var lineWidth = data.lineWidth;
            shape = data.shape;

            if (type === CONST.SHAPES.RECT || type === CONST.SHAPES.RREC)
            {
                x = shape.x - lineWidth/2;
                y = shape.y - lineWidth/2;
                w = shape.width + lineWidth;
                h = shape.height + lineWidth;

                minX = x < minX ? x : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y < minY ? y : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else if (type === CONST.SHAPES.CIRC)
            {
                x = shape.x;
                y = shape.y;
                w = shape.radius + lineWidth/2;
                h = shape.radius + lineWidth/2;

                minX = x - w < minX ? x - w : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y - h < minY ? y - h : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else if (type === CONST.SHAPES.ELIP)
            {
                x = shape.x;
                y = shape.y;
                w = shape.width + lineWidth/2;
                h = shape.height + lineWidth/2;

                minX = x - w < minX ? x - w : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y - h < minY ? y - h : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else
            {
                // POLY
                points = shape.points;

                for (var j = 0; j < points.length; j += 2)
                {
                    x = points[j];
                    y = points[j+1];

                    minX = x-lineWidth < minX ? x-lineWidth : minX;
                    maxX = x+lineWidth > maxX ? x+lineWidth : maxX;

                    minY = y-lineWidth < minY ? y-lineWidth : minY;
                    maxY = y+lineWidth > maxY ? y+lineWidth : maxY;
                }
            }
        }
    }
    else
    {
        minX = 0;
        maxX = 0;
        minY = 0;
        maxY = 0;
    }

    var padding = this.boundsPadding;

    this._localBounds.x = minX - padding;
    this._localBounds.width = (maxX - minX) + padding * 2;

    this._localBounds.y = minY - padding;
    this._localBounds.height = (maxY - minY) + padding * 2;
};

/**
 * Generates the cached sprite when the sprite has cacheAsBitmap = true
 *
 * @private
 */
/*
Graphics.prototype._generateCachedSprite = function ()
{
    var bounds = this.getLocalBounds();

    if (!this._cachedSprite)
    {
        var canvasBuffer = new CanvasBuffer(bounds.width, bounds.height);
        var texture = Texture.fromCanvas(canvasBuffer.canvas);

        this._cachedSprite = new Sprite(texture);
        this._cachedSprite.buffer = canvasBuffer;

        this._cachedSprite.worldTransform = this.worldTransform;
    }
    else
    {
        this._cachedSprite.buffer.resize(bounds.width, bounds.height);
    }

    // leverage the anchor to account for the offset of the element
    this._cachedSprite.anchor.x = -( bounds.x / bounds.width );
    this._cachedSprite.anchor.y = -( bounds.y / bounds.height );

    // this._cachedSprite.buffer.context.save();
    this._cachedSprite.buffer.context.translate(-bounds.x,-bounds.y);

    // make sure we set the alpha of the graphics to 1 for the render..
    this.worldAlpha = 1;

    // now render the graphic..
    CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context);

    this._cachedSprite.alpha = this.alpha;
};
*/
/**
 * Updates texture size based on canvas size
 *
 * @private
 */
/*
Graphics.prototype.updateCachedSpriteTexture = function ()
{
    var cachedSprite = this._cachedSprite;
    var texture = cachedSprite.texture;
    var canvas = cachedSprite.buffer.canvas;

    texture.baseTexture.width = canvas.width;
    texture.baseTexture.height = canvas.height;
    texture.crop.width = texture.frame.width = canvas.width;
    texture.crop.height = texture.frame.height = canvas.height;

    cachedSprite._width = canvas.width;
    cachedSprite._height = canvas.height;

    // update the dirty base textures
    texture.baseTexture.dirty();
};*/

/**
 * Destroys a previous cached sprite.
 *
 */
/*
Graphics.prototype.destroyCachedSprite = function ()
{
    this._cachedSprite.texture.destroy(true);

    // let the gc collect the unused sprite
    // TODO could be object pooled!
    this._cachedSprite = null;
};*/

/**
 * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
 *
 * @param shape {Circle|Rectangle|Ellipse|Line|Polygon} The shape object to draw.
 * @return {GraphicsData} The generated GraphicsData object.
 */
Graphics.prototype.drawShape = function (shape)
{
    if (this.currentPath)
    {
        // check current path!
        if (this.currentPath.shape.points.length <= 2)
        {
            this.graphicsData.pop();
        }
    }

    this.currentPath = null;

    var data = new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, shape);

    this.graphicsData.push(data);

    if (data.type === CONST.SHAPES.POLY)
    {
        data.shape.closed = this.filling;
        this.currentPath = data;
    }

    this.dirty = true;

    return data;
};

},{"../const":3,"../display/Container":4,"../math":13,"../renderers/canvas/utils/CanvasBuffer":25,"../renderers/canvas/utils/CanvasGraphics":26,"../sprites/Sprite":47,"../textures/Texture":51,"./GraphicsData":7}],7:[function(require,module,exports){
/**
 * A GraphicsData object.
 *
 * @class
 * @memberof PIXI
 * @param lineWidth {number} the width of the line to draw
 * @param lineColor {number} the color of the line to draw
 * @param lineAlpha {number} the alpha of the line to draw
 * @param fillColor {number} the color of the fill
 * @param fillAlpha {number} the alpha of the fill
 * @param fill      {boolean} whether or not the shape is filled with a colour
 * @param shape     {Circle|Rectangle|Ellipse|Line|Polygon} The shape object to draw.
 */
function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape)
{
    /* 
     * @member {number} the width of the line to draw
     */
    this.lineWidth = lineWidth;

    /* 
     * @member {number} the color of the line to draw
     */
    this.lineColor = lineColor;
    /* 
     * @member {number} the alpha of the line to draw
     */
    this.lineAlpha = lineAlpha;
    /* 
     * @member {number} cached tint of the line to draw
     */
    this._lineTint = lineColor;

    /* 
     * @member {number} the color of the fill
     */
    this.fillColor = fillColor;

    /* 
     * @member {number} the alpha of the fill
     */
    this.fillAlpha = fillAlpha;

    /* 
     * @member {number} cached tint of the fill
     */
    this._fillTint = fillColor;

    /* 
     * @member {boolean} whether or not the shape is filled with a colour
     */
    this.fill = fill;

    /* 
     * @member {Circle|Rectangle|Ellipse|Line|Polygon} The shape object to draw.
     */
    this.shape = shape;

    /* 
     * @member {number} The type of the shape, see the Const.Shapes file for all the existing types, 
     */
    this.type = shape.type;
}

GraphicsData.prototype.constructor = GraphicsData;
module.exports = GraphicsData;

/**
 * Creates a new GraphicsData object with the same values as this one.
 *
 * @return {GraphicsData}
 */
GraphicsData.prototype.clone = function ()
{
    return new GraphicsData(
        this.lineWidth,
        this.lineColor,
        this.lineAlpha,
        this.fillColor,
        this.fillAlpha,
        this.fill,
        this.shape
    );
};

},{}],8:[function(require,module,exports){
var utils = require('../../utils'),
    math = require('../../math'),
    CONST = require('../../const'),
    ObjectRenderer = require('../../renderers/webgl/utils/ObjectRenderer'),
    WebGLRenderer = require('../../renderers/webgl/WebGLRenderer'),
    WebGLGraphicsData = require('./WebGLGraphicsData');

/**
 * Renders the graphics object.
 *
 * @class
 * @private
 * @memberof PIXI
 * @extends ObjectRenderer
 * @param renderer {WebGLRenderer} The renderer this object renderer works for.
 */
function GraphicsRenderer(renderer)
{
    ObjectRenderer.call(this, renderer);

    this.graphicsDataPool = [];

    this.primitiveShader = null;
    this.complexPrimitiveShader = null;
}

GraphicsRenderer.prototype = Object.create(ObjectRenderer.prototype);
GraphicsRenderer.prototype.constructor = GraphicsRenderer;
module.exports = GraphicsRenderer;

WebGLRenderer.registerPlugin('graphics', GraphicsRenderer);

/**
 * Called when there is a WebGL context change
 *
 * @private
 *
 */
GraphicsRenderer.prototype.onContextChange = function()
{

};

/**
 * Destroys this renderer.
 *
 */
GraphicsRenderer.prototype.destroy = function () {
    ObjectRenderer.prototype.destroy.call(this);

    this.graphicsDataPool = null;
};

/**
 * Renders a graphics object.
 *
 * @param graphics {Graphics} The graphics object to render.
 */
GraphicsRenderer.prototype.render = function(graphics)
{
    var renderer = this.renderer;
    var gl = renderer.gl;

    var shader = renderer.shaderManager.plugins.primitiveShader,
        webGLData;

    if (graphics.dirty)
    {
        this.updateGraphics(graphics, gl);
    }

    var webGL = graphics._webGL[gl.id];

    // This  could be speeded up for sure!

    renderer.blendModeManager.setBlendMode( graphics.blendMode );

//    var matrix =  graphics.worldTransform.clone();
//    var matrix =  renderer.currentRenderTarget.projectionMatrix.clone();
//    matrix.append(graphics.worldTransform);

    for (var i = 0; i < webGL.data.length; i++)
    {
        if (webGL.data[i].mode === 1)
        {
            webGLData = webGL.data[i];

            renderer.stencilManager.pushStencil(graphics, webGLData, renderer);

            // render quad..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

            renderer.stencilManager.popStencil(graphics, webGLData, renderer);
        }
        else
        {
            webGLData = webGL.data[i];


            shader = renderer.shaderManager.primitiveShader;

            renderer.shaderManager.setShader( shader );//activatePrimitiveShader();

            gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));

            gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, renderer.currentRenderTarget.projectionMatrix.toArray(true));

            gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));

            gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);


            gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

            gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
            gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false,4 * 6, 2 * 4);

            // set the index buffer!
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );
        }
    }
};

/**
 * Updates the graphics object
 *
 * @private
 * @param graphicsData {Graphics} The graphics object to update
 */
GraphicsRenderer.prototype.updateGraphics = function(graphics)
{
    var gl = this.renderer.gl;

     // get the contexts graphics object
    var webGL = graphics._webGL[gl.id];

    // if the graphics object does not exist in the webGL context time to create it!
    if (!webGL)
    {
        webGL = graphics._webGL[gl.id] = {lastIndex:0, data:[], gl:gl};
    }

    // flag the graphics as not dirty as we are about to update it...
    graphics.dirty = false;

    var i;

    // if the user cleared the graphics object we will need to clear every object
    if (graphics.clearDirty)
    {
        graphics.clearDirty = false;

        // lop through and return all the webGLDatas to the object pool so than can be reused later on
        for (i = 0; i < webGL.data.length; i++)
        {
            var graphicsData = webGL.data[i];
            graphicsData.reset();
            this.graphicsDataPool.push( graphicsData );
        }

        // clear the array and reset the index..
        webGL.data = [];
        webGL.lastIndex = 0;
    }

    var webGLData;

    // loop through the graphics datas and construct each one..
    // if the object is a complex fill then the new stencil buffer technique will be used
    // other wise graphics objects will be pushed into a batch..
    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];

        if (data.type === CONST.SHAPES.POLY)
        {
            // need to add the points the the graphics object..
            data.points = data.shape.points.slice();
            if (data.shape.closed)
            {
                // close the poly if the value is true!
                if (data.points[0] !== data.points[data.points.length-2] || data.points[1] !== data.points[data.points.length-1])
                {
                    data.points.push(data.points[0], data.points[1]);
                }
            }

            // MAKE SURE WE HAVE THE CORRECT TYPE..
            if (data.fill)
            {
                if (data.points.length >= 6)
                {
                    if (data.points.length < 6 * 2)
                    {
                        webGLData = this.switchMode(webGL, 0);

                        var canDrawUsingSimple = this.buildPoly(data, webGLData);
                   //     console.log(canDrawUsingSimple);

                        if (!canDrawUsingSimple)
                        {
                        //    console.log("<>>>")
                            webGLData = this.switchMode(webGL, 1);
                            this.buildComplexPoly(data, webGLData);
                        }

                    }
                    else
                    {
                        webGLData = this.switchMode(webGL, 1);
                        this.buildComplexPoly(data, webGLData);
                    }
                }
            }

            if (data.lineWidth > 0)
            {
                webGLData = this.switchMode(webGL, 0);
                this.buildLine(data, webGLData);
            }
        }
        else
        {
            webGLData = this.switchMode(webGL, 0);

            if (data.type === CONST.SHAPES.RECT)
            {
                this.buildRectangle(data, webGLData);
            }
            else if (data.type === CONST.SHAPES.CIRC || data.type === CONST.SHAPES.ELIP)
            {
                this.buildCircle(data, webGLData);
            }
            else if (data.type === CONST.SHAPES.RREC)
            {
                this.buildRoundedRectangle(data, webGLData);
            }
        }

        webGL.lastIndex++;
    }

    // upload all the dirty data...
    for (i = 0; i < webGL.data.length; i++)
    {
        webGLData = webGL.data[i];

        if (webGLData.dirty)
        {
            webGLData.upload();
        }
    }
};

/**
 *
 *
 * @private
 * @param webGL {WebGLRenderingContext} the current WebGL drawing context
 * @param type {number} TODO @Alvin
 */
GraphicsRenderer.prototype.switchMode = function (webGL, type)
{
    var webGLData;

    if (!webGL.data.length)
    {
        webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
        webGLData.mode = type;
        webGL.data.push(webGLData);
    }
    else
    {
        webGLData = webGL.data[webGL.data.length-1];

        if ((webGLData.points.length > 320000) || webGLData.mode !== type || type === 1)
        {
            webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
            webGLData.mode = type;
            webGL.data.push(webGLData);
        }
    }

    webGLData.dirty = true;

    return webGLData;
};

/**
 * Builds a rectangle to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildRectangle = function (graphicsData, webGLData)
{
    // --- //
    // need to convert points to a nice regular data
    //
    var rectData = graphicsData.shape;
    var x = rectData.x;
    var y = rectData.y;
    var width = rectData.width;
    var height = rectData.height;

    if (graphicsData.fill)
    {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vertPos = verts.length/6;

        // start
        verts.push(x, y);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y);
        verts.push(r, g, b, alpha);

        verts.push(x , y + height);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y + height);
        verts.push(r, g, b, alpha);

        // insert 2 dead triangles..
        indices.push(vertPos, vertPos, vertPos+1, vertPos+2, vertPos+3, vertPos+3);
    }

    if (graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = [x, y,
                  x + width, y,
                  x + width, y + height,
                  x, y + height,
                  x, y];


        this.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a rounded rectangle to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildRoundedRectangle = function (graphicsData, webGLData)
{
    var rrectData = graphicsData.shape;
    var x = rrectData.x;
    var y = rrectData.y;
    var width = rrectData.width;
    var height = rrectData.height;

    var radius = rrectData.radius;

    var recPoints = [];
    recPoints.push(x, y + radius);
    recPoints = recPoints.concat(this.quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height));
    recPoints = recPoints.concat(this.quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
    recPoints = recPoints.concat(this.quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y));
    recPoints = recPoints.concat(this.quadraticBezierCurve(x + radius, y, x, y, x, y + radius));

    if (graphicsData.fill)
    {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        //TODO use this https://github.com/mapbox/earcut
        var triangles = utils.PolyK.Triangulate(recPoints);

        //

        var i = 0;
        for (i = 0; i < triangles.length; i+=3)
        {
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i+1] + vecPos);
            indices.push(triangles[i+2] + vecPos);
            indices.push(triangles[i+2] + vecPos);
        }

        for (i = 0; i < recPoints.length; i++)
        {
            verts.push(recPoints[i], recPoints[++i], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = recPoints;

        this.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @private
 * @param fromX {number} Origin point x
 * @param fromY {number} Origin point x
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {number[]} an array of points
 */
GraphicsRenderer.prototype.quadraticBezierCurve = function (fromX, fromY, cpX, cpY, toX, toY)
{

    var xa,
        ya,
        xb,
        yb,
        x,
        y,
        n = 20,
        points = [];

    function getPt(n1 , n2, perc) {
        var diff = n2 - n1;

        return n1 + ( diff * perc );
    }

    var j = 0;
    for (var i = 0; i <= n; i++ ) {
        j = i / n;

        // The Green Line
        xa = getPt( fromX , cpX , j );
        ya = getPt( fromY , cpY , j );
        xb = getPt( cpX , toX , j );
        yb = getPt( cpY , toY , j );

        // The Black Dot
        x = getPt( xa , xb , j );
        y = getPt( ya , yb , j );

        points.push(x, y);
    }
    return points;
};

/**
 * Builds a circle to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object to draw
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildCircle = function (graphicsData, webGLData)
{
    // need to convert points to a nice regular data
    var circleData = graphicsData.shape;
    var x = circleData.x;
    var y = circleData.y;
    var width;
    var height;

    // TODO - bit hacky??
    if (graphicsData.type === CONST.SHAPES.CIRC)
    {
        width = circleData.radius;
        height = circleData.radius;
    }
    else
    {
        width = circleData.width;
        height = circleData.height;
    }

    var totalSegs = 40;
    var seg = (Math.PI * 2) / totalSegs ;

    var i = 0;

    if (graphicsData.fill)
    {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        indices.push(vecPos);

        for (i = 0; i < totalSegs + 1 ; i++)
        {
            verts.push(x,y, r, g, b, alpha);

            verts.push(x + Math.sin(seg * i) * width,
                       y + Math.cos(seg * i) * height,
                       r, g, b, alpha);

            indices.push(vecPos++, vecPos++);
        }

        indices.push(vecPos-1);
    }

    if (graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = [];

        for (i = 0; i < totalSegs + 1; i++)
        {
            graphicsData.points.push(x + Math.sin(seg * i) * width,
                                     y + Math.cos(seg * i) * height);
        }

        this.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a line to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildLine = function (graphicsData, webGLData)
{
    // TODO OPTIMISE!
    var i = 0;
    var points = graphicsData.points;

    if (points.length === 0)
    {
        return;
    }

    // if the line width is an odd number add 0.5 to align to a whole pixel
    if (graphicsData.lineWidth%2)
    {
        for (i = 0; i < points.length; i++)
        {
            points[i] += 0.5;
        }
    }

    // get first and last point.. figure out the middle!
    var firstPoint = new math.Point(points[0], points[1]);
    var lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

    // if the first point is the last point - gonna have issues :)
    if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y)
    {
        // need to clone as we are going to slightly modify the shape..
        points = points.slice();

        points.pop();
        points.pop();

        lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

        var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) *0.5;
        var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) *0.5;

        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }

    var verts = webGLData.points;
    var indices = webGLData.indices;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length/6;

    // DRAW the Line
    var width = graphicsData.lineWidth / 2;

    // sort color
    var color = utils.hex2rgb(graphicsData.lineColor);
    var alpha = graphicsData.lineAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var px, py, p1x, p1y, p2x, p2y, p3x, p3y;
    var perpx, perpy, perp2x, perp2y, perp3x, perp3y;
    var a1, b1, c1, a2, b2, c2;
    var denom, pdist, dist;

    p1x = points[0];
    p1y = points[1];

    p2x = points[2];
    p2y = points[3];

    perpx = -(p1y - p2y);
    perpy =  p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);

    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    // start
    verts.push(p1x - perpx , p1y - perpy,
                r, g, b, alpha);

    verts.push(p1x + perpx , p1y + perpy,
                r, g, b, alpha);

    for (i = 1; i < length-1; i++)
    {
        p1x = points[(i-1)*2];
        p1y = points[(i-1)*2 + 1];

        p2x = points[(i)*2];
        p2y = points[(i)*2 + 1];

        p3x = points[(i+1)*2];
        p3y = points[(i+1)*2 + 1];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt(perpx*perpx + perpy*perpy);
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;

        perp2x = -(p2y - p3y);
        perp2y = p2x - p3x;

        dist = Math.sqrt(perp2x*perp2x + perp2y*perp2y);
        perp2x /= dist;
        perp2y /= dist;
        perp2x *= width;
        perp2y *= width;

        a1 = (-perpy + p1y) - (-perpy + p2y);
        b1 = (-perpx + p2x) - (-perpx + p1x);
        c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
        a2 = (-perp2y + p3y) - (-perp2y + p2y);
        b2 = (-perp2x + p2x) - (-perp2x + p3x);
        c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

        denom = a1*b2 - a2*b1;

        if (Math.abs(denom) < 0.1 )
        {

            denom+=10.1;
            verts.push(p2x - perpx , p2y - perpy,
                r, g, b, alpha);

            verts.push(p2x + perpx , p2y + perpy,
                r, g, b, alpha);

            continue;
        }

        px = (b1*c2 - b2*c1)/denom;
        py = (a2*c1 - a1*c2)/denom;


        pdist = (px -p2x) * (px -p2x) + (py -p2y) + (py -p2y);


        if (pdist > 140 * 140)
        {
            perp3x = perpx - perp2x;
            perp3y = perpy - perp2y;

            dist = Math.sqrt(perp3x*perp3x + perp3y*perp3y);
            perp3x /= dist;
            perp3y /= dist;
            perp3x *= width;
            perp3y *= width;

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x + perp3x, p2y +perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            indexCount++;
        }
        else
        {

            verts.push(px , py);
            verts.push(r, g, b, alpha);

            verts.push(p2x - (px-p2x), p2y - (py - p2y));
            verts.push(r, g, b, alpha);
        }
    }

    p1x = points[(length-2)*2];
    p1y = points[(length-2)*2 + 1];

    p2x = points[(length-1)*2];
    p2y = points[(length-1)*2 + 1];

    perpx = -(p1y - p2y);
    perpy = p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    verts.push(p2x - perpx , p2y - perpy);
    verts.push(r, g, b, alpha);

    verts.push(p2x + perpx , p2y + perpy);
    verts.push(r, g, b, alpha);

    indices.push(indexStart);

    for (i = 0; i < indexCount; i++)
    {
        indices.push(indexStart++);
    }

    indices.push(indexStart-1);
};

/**
 * Builds a complex polygon to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildComplexPoly = function (graphicsData, webGLData)
{
    //TODO - no need to copy this as it gets turned into a FLoat32Array anyways..
    var points = graphicsData.points.slice();

    if (points.length < 6)
    {
        return;
    }

    // get first and last point.. figure out the middle!
    var indices = webGLData.indices;
    webGLData.points = points;
    webGLData.alpha = graphicsData.fillAlpha;
    webGLData.color = utils.hex2rgb(graphicsData.fillColor);

    // calclate the bounds..
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    var x,y;

    // get size..
    for (var i = 0; i < points.length; i+=2)
    {
        x = points[i];
        y = points[i+1];

        minX = x < minX ? x : minX;
        maxX = x > maxX ? x : maxX;

        minY = y < minY ? y : minY;
        maxY = y > maxY ? y : maxY;
    }

    // add a quad to the end cos there is no point making another buffer!
    points.push(minX, minY,
                maxX, minY,
                maxX, maxY,
                minX, maxY);

    // push a quad onto the end..

    //TODO - this aint needed!
    var length = points.length / 2;
    for (i = 0; i < length; i++)
    {
        indices.push( i );
    }

};

/**
 * Builds a polygon to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildPoly = function (graphicsData, webGLData)
{
    var points = graphicsData.points;

    if (points.length < 6)
    {
        return;
    }

    // get first and last point.. figure out the middle!
    var verts = webGLData.points;
    var indices = webGLData.indices;

    var length = points.length / 2;

    // sort color
    var color = utils.hex2rgb(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var triangles = utils.PolyK.Triangulate(points);

    if (!triangles) {
        return false;
    }

    var vertPos = verts.length / 6;

    var i = 0;

    for (i = 0; i < triangles.length; i+=3)
    {
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i+1] + vertPos);
        indices.push(triangles[i+2] +vertPos);
        indices.push(triangles[i+2] + vertPos);
    }

    for (i = 0; i < length; i++)
    {
        verts.push(points[i * 2], points[i * 2 + 1],
                   r, g, b, alpha);
    }

    return true;
};

},{"../../const":3,"../../math":13,"../../renderers/webgl/WebGLRenderer":29,"../../renderers/webgl/utils/ObjectRenderer":43,"../../utils":57,"./WebGLGraphicsData":9}],9:[function(require,module,exports){
/**
 * An object containing WebGL specific properties to be used by the WebGL renderer
 *
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 * @private
 */
function WebGLGraphicsData(gl) {

    /**
     * The current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    //TODO does this need to be split before uploding??
    /**
     * An array of color components (r,g,b)
     * @member {Array}
     */
    this.color = [0,0,0]; // color split!

    /**
     * An array of points to draw
     * @member {Array}
     */
    this.points = [];

    /**
     * The indices of the vertices
     * @member {Array}
     */
    this.indices = [];
    /**
     * The main buffer
     * @member {WebGLBuffer}
     */
    this.buffer = gl.createBuffer();

    /**
     * The index buffer
     * @member {WebGLBuffer}
     */
    this.indexBuffer = gl.createBuffer();

    /**
     * todo @alvin
     * @member {number}
     */
    this.mode = 1;

    /**
     * The alpha of the graphics
     * @member {number}
     */
    this.alpha = 1;

    /**
     * Whether this graphics is dirty or not
     * @member {boolean}
     */
    this.dirty = true;
}

WebGLGraphicsData.prototype.constructor = WebGLGraphicsData;
module.exports = WebGLGraphicsData;

/**
 * Resets the vertices and the indices
 */
WebGLGraphicsData.prototype.reset = function () {
    this.points = [];
    this.indices = [];
};

/**
 * Binds the buffers and uploads the data
 */
WebGLGraphicsData.prototype.upload = function () {
    var gl = this.gl;

//    this.lastIndex = graphics.graphicsData.length;
    this.glPoints = new Float32Array(this.points);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.glPoints, gl.STATIC_DRAW);

    this.glIndices = new Uint16Array(this.indices);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.glIndices, gl.STATIC_DRAW);

    this.dirty = false;
};

},{}],10:[function(require,module,exports){
/**
 * @file        Main export of the PIXI core library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
var core = module.exports = {
    // utils
    utils: require('./utils'),
    math: require('./math'),
    CONST: require('./const'),

    // display
    DisplayObject:          require('./display/DisplayObject'),
    Container:              require('./display/Container'),

    // legacy..
    Stage:                  require('./display/Container'),
    DisplayObjectContainer: require('./display/Container'),

    Sprite:                 require('./sprites/Sprite'),
    ParticleContainer:      require('./particles/ParticleContainer'),
    SpriteRenderer:         require('./sprites/webgl/SpriteRenderer'),
    ParticleRenderer:       require('./particles/webgl/ParticleRenderer'),

    // primitives
    Graphics:               require('./graphics/Graphics'),
    GraphicsData:           require('./graphics/GraphicsData'),
    GraphicsRenderer:       require('./graphics/webgl/GraphicsRenderer'),

    // textures
    Texture:                require('./textures/Texture'),
    BaseTexture:            require('./textures/BaseTexture'),
    RenderTexture:          require('./textures/RenderTexture'),
    VideoBaseTexture:       require('./textures/VideoBaseTexture'),

    // renderers - canvas
    CanvasRenderer:         require('./renderers/canvas/CanvasRenderer'),
    CanvasGraphics:         require('./renderers/canvas/utils/CanvasGraphics'),
    CanvasBuffer:           require('./renderers/canvas/utils/CanvasBuffer'),

    // renderers - webgl
    WebGLRenderer:          require('./renderers/webgl/WebGLRenderer'),
    ShaderManager:          require('./renderers/webgl/managers/ShaderManager'),
    Shader:                 require('./renderers/webgl/shaders/Shader'),

    // filters - webgl
    AbstractFilter:         require('./renderers/webgl/filters/AbstractFilter'),

    /**
     * This helper function will automatically detect which renderer you should be using.
     * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
     * the browser then this function will return a canvas renderer
     *
     * @param width=800 {number} the width of the renderers view
     * @param height=600 {number} the height of the renderers view
     * @param [options] {object} The optional renderer parameters
     * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
     * @param [options.transparent=false] {boolean} If the render view is transparent, default false
     * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
     * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
     *      need to call toDataUrl on the webgl context
     * @param [options.resolution=1] {number} the resolution of the renderer, retina would be 2
     * @param [noWebGL=false] {boolean} prevents selection of WebGL renderer, even if such is present
     *
     * @return {WebGLRenderer|CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    autoDetectRenderer: function (width, height, options, noWebGL)
    {
        width = width || 800;
        height = height || 600;

        if (!noWebGL && checkWebGL())
        {
            return new core.WebGLRenderer(width, height, options);
        }

        return new core.CanvasRenderer(width, height, options);
    }
};

// add constants to export
var CONST = require('./const');

for (var c in CONST) {
    core[c] = CONST[c];
}


var contextOptions = { stencil: true };

function checkWebGL()
{
    try
    {
        if (!window.WebGLRenderingContext)
        {
            return false;
        }

        var canvas = document.createElement('canvas'),
            gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);

        return !!(gl && gl.getContextAttributes().stencil);
    }
    catch (e)
    {
        return false;
    }
}

},{"./const":3,"./display/Container":4,"./display/DisplayObject":5,"./graphics/Graphics":6,"./graphics/GraphicsData":7,"./graphics/webgl/GraphicsRenderer":8,"./math":13,"./particles/ParticleContainer":19,"./particles/webgl/ParticleRenderer":21,"./renderers/canvas/CanvasRenderer":24,"./renderers/canvas/utils/CanvasBuffer":25,"./renderers/canvas/utils/CanvasGraphics":26,"./renderers/webgl/WebGLRenderer":29,"./renderers/webgl/filters/AbstractFilter":30,"./renderers/webgl/managers/ShaderManager":36,"./renderers/webgl/shaders/Shader":41,"./sprites/Sprite":47,"./sprites/webgl/SpriteRenderer":48,"./textures/BaseTexture":49,"./textures/RenderTexture":50,"./textures/Texture":51,"./textures/VideoBaseTexture":53,"./utils":57}],11:[function(require,module,exports){
var Point = require('./Point');

/**
 * The pixi Matrix class as an object, which makes it a lot faster,
 * here is a representation of it :
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class
 * @memberof PIXI.math
 */
function Matrix()
{
    /**
     * @member {number}
     * @default 1
     */
    this.a = 1;

    /**
     * @member {number}
     * @default 0
     */
    this.b = 0;

    /**
     * @member {number}
     * @default 0
     */
    this.c = 0;

    /**
     * @member {number}
     * @default 1
     */
    this.d = 1;

    /**
     * @member {number}
     * @default 0
     */
    this.tx = 0;

    /**
     * @member {number}
     * @default 0
     */
    this.ty = 0;
}

Matrix.prototype.constructor = Matrix;
module.exports = Matrix;

/**
 * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
 *
 * a = array[0]
 * b = array[1]
 * c = array[3]
 * d = array[4]
 * tx = array[2]
 * ty = array[5]
 *
 * @param array {number[]} The array that the matrix will be populated from.
 */
Matrix.prototype.fromArray = function (array)
{
    this.a = array[0];
    this.b = array[1];
    this.c = array[3];
    this.d = array[4];
    this.tx = array[2];
    this.ty = array[5];
};

/**
 * Creates an array from the current Matrix object.
 *
 * @param transpose {boolean} Whether we need to transpose the matrix or not
 * @return {number[]} the newly created array which contains the matrix
 */
Matrix.prototype.toArray = function (transpose)
{
    if (!this.array)
    {
        this.array = new Float32Array(9);
    }

    var array = this.array;

    if (transpose)
    {
        array[0] = this.a;
        array[1] = this.b;
        array[2] = 0;
        array[3] = this.c;
        array[4] = this.d;
        array[5] = 0;
        array[6] = this.tx;
        array[7] = this.ty;
        array[8] = 1;
    }
    else
    {
        array[0] = this.a;
        array[1] = this.c;
        array[2] = this.tx;
        array[3] = this.b;
        array[4] = this.d;
        array[5] = this.ty;
        array[6] = 0;
        array[7] = 0;
        array[8] = 1;
    }

    return array;
};

/**
 * Get a new position with the current transformation applied.
 * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
 *
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, transformed through this matrix
 */
Matrix.prototype.apply = function (pos, newPos)
{
    newPos = newPos || new Point();

    var x = pos.x;
    var y = pos.y;

    newPos.x = this.a * x + this.c * y + this.tx;
    newPos.y = this.b * x + this.d * y + this.ty;

    return newPos;
};

/**
 * Get a new position with the inverse of the current transformation applied.
 * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
 *
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, inverse-transformed through this matrix
 */
Matrix.prototype.applyInverse = function (pos, newPos)
{
    newPos = newPos || new Point();

    var id = 1 / (this.a * this.d + this.c * -this.b);

    var x = pos.x;
    var y = pos.y;

    newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
    newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;

    return newPos;
};

/**
 * Translates the matrix on the x and y.
 *
 * @param {number} x
 * @param {number} y
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.translate = function (x, y)
{
    this.tx += x;
    this.ty += y;

    return this;
};

/**
 * Applies a scale transformation to the matrix.
 *
 * @param {number} x The amount to scale horizontally
 * @param {number} y The amount to scale vertically
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.scale = function (x, y)
{
    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.tx *= x;
    this.ty *= y;

    return this;
};


/**
 * Applies a rotation transformation to the matrix.
 *
 * @param {number} angle - The angle in radians.
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.rotate = function (angle)
{
    var cos = Math.cos( angle );
    var sin = Math.sin( angle );

    var a1 = this.a;
    var c1 = this.c;
    var tx1 = this.tx;

    this.a = a1 * cos-this.b * sin;
    this.b = a1 * sin+this.b * cos;
    this.c = c1 * cos-this.d * sin;
    this.d = c1 * sin+this.d * cos;
    this.tx = tx1 * cos - this.ty * sin;
    this.ty = tx1 * sin + this.ty * cos;

    return this;
};

/**
 * Appends the given Matrix to this Matrix.
 *
 * @param {Matrix} matrix
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.append = function (matrix)
{
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;

    this.a  = matrix.a * a1 + matrix.b * c1;
    this.b  = matrix.a * b1 + matrix.b * d1;
    this.c  = matrix.c * a1 + matrix.d * c1;
    this.d  = matrix.c * b1 + matrix.d * d1;

    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

    return this;
};

/**
 * Prepends the given Matrix to this Matrix.
 *
 * @param {Matrix} matrix
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.prepend = function(matrix)
{
    var tx1 = this.tx;

    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1)
    {
        var a1 = this.a;
        var c1 = this.c;
        this.a  = a1*matrix.a+this.b*matrix.c;
        this.b  = a1*matrix.b+this.b*matrix.d;
        this.c  = c1*matrix.a+this.d*matrix.c;
        this.d  = c1*matrix.b+this.d*matrix.d;
    }

    this.tx = tx1*matrix.a+this.ty*matrix.c+matrix.tx;
    this.ty = tx1*matrix.b+this.ty*matrix.d+matrix.ty;

    return this;
};

/**
 * Inverts this matrix
 *
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.invert = function()
{
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    var tx1 = this.tx;
    var n = a1*d1-b1*c1;

    this.a = d1/n;
    this.b = -b1/n;
    this.c = -c1/n;
    this.d = a1/n;
    this.tx = (c1*this.ty-d1*tx1)/n;
    this.ty = -(a1*this.ty-b1*tx1)/n;

    return this;
};


/**
 * Resets this Matix to an identity (default) matrix.
 *
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.identity = function ()
{
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;

    return this;
};

/**
 * Creates a new Matrix object with the same values as this one.
 *
 * @return {Matrix} A copy of this matrix. Good for chaining method calls.
 */
Matrix.prototype.clone = function ()
{
    var matrix = new Matrix();
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;

    return matrix;
};

/**
 * Changes the values of the given matrix to be the same as the ones in this matrix
 *
 * @return {Matrix} The matrix given in parameter with its values updated.
 */
Matrix.prototype.copy = function (matrix)
{
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;

    return matrix;
};

/**
 * A default (identity) matrix
 */
Matrix.IDENTITY = new Matrix();
/**
 * A temp matrix
 */
Matrix.TEMP_MATRIX = new Matrix();

},{"./Point":12}],12:[function(require,module,exports){
/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @memberof PIXI.math
 * @param [x=0] {number} position of the point on the x axis
 * @param [y=0] {number} position of the point on the y axis
 */
function Point(x, y)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;
}

Point.prototype.constructor = Point;
module.exports = Point;

/**
 * Creates a clone of this point
 *
 * @return {Point} a copy of the point
 */
Point.prototype.clone = function ()
{
    return new Point(this.x, this.y);
};

/**
 * Sets the point to a new x and y position.
 * If y is omitted, both x and y will be set to x.
 *
 * @param [x=0] {number} position of the point on the x axis
 * @param [y=0] {number} position of the point on the y axis
 */
Point.prototype.set = function (x, y)
{
    this.x = x || 0;
    this.y = y || ( (y !== 0) ? this.x : 0 ) ;
};

},{}],13:[function(require,module,exports){
/**
 * @namespace PIXI.math
 */
module.exports = {
    /**
     * @property {number} PI_2 - Two Pi
     * @constant
     * @static
     */
    PI_2: Math.PI * 2,

    /**
     * @property {number} RAD_TO_DEG - Constant conversion factor for converting radians to degrees
     * @constant
     * @static
     */
    RAD_TO_DEG: 180 / Math.PI,

    /**
     * @property {Number} DEG_TO_RAD - Constant conversion factor for converting degrees to radians
     * @constant
     * @static
     */
    DEG_TO_RAD: Math.PI / 180,

    Point:      require('./Point'),
    Matrix:     require('./Matrix'),

    Circle:     require('./shapes/Circle'),
    Ellipse:    require('./shapes/Ellipse'),
    Polygon:    require('./shapes/Polygon'),
    Rectangle:  require('./shapes/Rectangle'),
    RoundedRectangle: require('./shapes/RoundedRectangle')
};

},{"./Matrix":11,"./Point":12,"./shapes/Circle":14,"./shapes/Ellipse":15,"./shapes/Polygon":16,"./shapes/Rectangle":17,"./shapes/RoundedRectangle":18}],14:[function(require,module,exports){
var Rectangle = require('./Rectangle'),
    CONST = require('../../const');

/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the center of this circle
 * @param y {number} The Y coordinate of the center of this circle
 * @param radius {number} The radius of the circle
 */
function Circle(x, y, radius)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.radius = radius || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.CIRC;
}

Circle.prototype.constructor = Circle;
module.exports = Circle;

/**
 * Creates a clone of this Circle instance
 *
 * @return {Circle} a copy of the Circle
 */
Circle.prototype.clone = function ()
{
    return new Circle(this.x, this.y, this.radius);
};

/**
 * Checks whether the x and y coordinates given are contained within this circle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Circle
 */
Circle.prototype.contains = function (x, y)
{
    if (this.radius <= 0)
    {
        return false;
    }

    var dx = (this.x - x),
        dy = (this.y - y),
        r2 = this.radius * this.radius;

    dx *= dx;
    dy *= dy;

    return (dx + dy <= r2);
};

/**
* Returns the framing rectangle of the circle as a Rectangle object
*
* @return {Rectangle} the framing rectangle
*/
Circle.prototype.getBounds = function ()
{
    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
};

},{"../../const":3,"./Rectangle":17}],15:[function(require,module,exports){
var Rectangle = require('./Rectangle'),
    CONST = require('../../const');

/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the center of the ellipse
 * @param y {number} The Y coordinate of the center of the ellipse
 * @param width {number} The half width of this ellipse
 * @param height {number} The half height of this ellipse
 */
function Ellipse(x, y, width, height)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.ELIP;
}

Ellipse.prototype.constructor = Ellipse;
module.exports = Ellipse;

/**
 * Creates a clone of this Ellipse instance
 *
 * @return {Ellipse} a copy of the ellipse
 */
Ellipse.prototype.clone = function ()
{
    return new Ellipse(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates given are contained within this ellipse
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coords are within this ellipse
 */
Ellipse.prototype.contains = function (x, y)
{
    if (this.width <= 0 || this.height <= 0)
    {
        return false;
    }

    //normalize the coords to an ellipse with center 0,0
    var normx = ((x - this.x) / this.width),
        normy = ((y - this.y) / this.height);

    normx *= normx;
    normy *= normy;

    return (normx + normy <= 1);
};

/**
 * Returns the framing rectangle of the ellipse as a Rectangle object
 *
 * @return {Rectangle} the framing rectangle
 */
Ellipse.prototype.getBounds = function ()
{
    return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
};

},{"../../const":3,"./Rectangle":17}],16:[function(require,module,exports){
var Point = require('../Point'),
    CONST = require('../../const');

/**
 * @class
 * @memberof PIXI
 * @param points {Point[]|number[]|...Point|...number} This can be an array of Points that form the polygon,
 *      a flat array of numbers that will be interpreted as [x,y, x,y, ...], or the arguments passed can be
 *      all the points of the polygon e.g. `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the
 *      arguments passed can be flat x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are
 *      Numbers.
 */
function Polygon(points)
{
    //if points isn't an array, use arguments as the array
    if (!(points instanceof Array))
    {
        points = Array.prototype.slice.call(arguments);
    }

    //if this is an array of points, convert it to a flat array of numbers
    if (points[0] instanceof Point)
    {
        var p = [];
        for (var i = 0, il = points.length; i < il; i++)
        {
            p.push(points[i].x, points[i].y);
        }

        points = p;
    }

    this.closed = true;

    /**
     * An array of the points of this polygon
     *
     * @member {number[]}
     */
    this.points = points;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.POLY;
}

Polygon.prototype.constructor = Polygon;
module.exports = Polygon;

/**
 * Creates a clone of this polygon
 *
 * @return {Polygon} a copy of the polygon
 */
Polygon.prototype.clone = function ()
{
    return new Polygon(this.points.slice());
};

/**
 * Checks whether the x and y coordinates passed to this function are contained within this polygon
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this polygon
 */
Polygon.prototype.contains = function (x, y)
{
    var inside = false;

    // use some raycasting to test hits
    // https://github.com/substack/point-in-polygon/blob/master/index.js
    var length = this.points.length / 2;

    for (var i = 0, j = length - 1; i < length; j = i++)
    {
        var xi = this.points[i * 2], yi = this.points[i * 2 + 1],
            xj = this.points[j * 2], yj = this.points[j * 2 + 1],
            intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

        if (intersect)
        {
            inside = !inside;
        }
    }

    return inside;
};

},{"../../const":3,"../Point":12}],17:[function(require,module,exports){
var CONST = require('../../const');

/**
 * the Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the upper-left corner of the rectangle
 * @param y {number} The Y coordinate of the upper-left corner of the rectangle
 * @param width {number} The overall width of this rectangle
 * @param height {number} The overall height of this rectangle
 */
function Rectangle(x, y, width, height)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.RECT;
}

Rectangle.prototype.constructor = Rectangle;
module.exports = Rectangle;

/**
 * A constant empty rectangle.
 *
 * @static
 * @constant
 */
Rectangle.EMPTY = new Rectangle(0, 0, 0, 0);


/**
 * Creates a clone of this Rectangle
 *
 * @return {Rectangle} a copy of the rectangle
 */
Rectangle.prototype.clone = function ()
{
    return new Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates given are contained within this Rectangle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Rectangle
 */
Rectangle.prototype.contains = function (x, y)
{
    if (this.width <= 0 || this.height <= 0)
    {
        return false;
    }

    if (x >= this.x && x < this.x + this.width)
    {
        if (y >= this.y && y < this.y + this.height)
        {
            return true;
        }
    }

    return false;
};

},{"../../const":3}],18:[function(require,module,exports){
var CONST = require('../../const');

/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the upper-left corner of the rounded rectangle
 * @param y {number} The Y coordinate of the upper-left corner of the rounded rectangle
 * @param width {number} The overall width of this rounded rectangle
 * @param height {number} The overall height of this rounded rectangle
 * @param radius {number} Controls the radius of the rounded corners
 */
function RoundedRectangle(x, y, width, height, radius)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * @member {number}
     * @default 20
     */
    this.radius = radius || 20;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.RREC;
}

RoundedRectangle.prototype.constructor = RoundedRectangle;
module.exports = RoundedRectangle;

/**
 * Creates a clone of this Rounded Rectangle
 *
 * @return {RoundedRectangle} a copy of the rounded rectangle
 */
RoundedRectangle.prototype.clone = function ()
{
    return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
};

/**
 * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
 */
RoundedRectangle.prototype.contains = function (x, y)
{
    if (this.width <= 0 || this.height <= 0)
    {
        return false;
    }

    if (x >= this.x && x <= this.x + this.width)
    {
        if (y >= this.y && y <= this.y + this.height)
        {
            return true;
        }
    }

    return false;
};

},{"../../const":3}],19:[function(require,module,exports){
var Container = require('../display/Container');

/**
 * The ParticleContainer class is a really fast version of the Container built solely for speed,
 * so use when you need a lot of sprites or particles. The tradeoff of the ParticleContainer is that advanced
 * functionality will not work. ParticleContainer implements only the basic object transform (position, scale, rotation).
 * Any other functionality like tinting, masking, etc will not work on sprites in this batch.
 *
 * It's extremely easy to use :
 *
 * ```js
 * var container = new ParticleContainer();
 *
 * for (var i = 0; i < 100; ++i)
 * {
 *     var sprite = new PIXI.Sprite.fromImage("myImage.png");
 *     container.addChild(sprite);
 * }
 * ```
 *
 * And here you have a hundred sprites that will be renderer at the speed of light.
 *
 * @class
 * @extends Container
 * @memberof PIXI
 *
 * @param size {number} The number of images in the SpriteBatch before it flushes.
 * @param properties {object} The properties to be uploaded
 */
function ParticleContainer(size, properties)
{
    Container.call(this);

    // set properties to be dynamic (true) / static (false)
    // TODO this could be easier to understand!
    /* this._properties = {
        scale : false,
        position : true,
        rotation : false,
        uvs : false,
        alpha : false
     * }
     */
    /**
     * @member {object}
     * @private
     */
    this._properties = properties || [false, true, false, false, false];
    /**
     * @member {number}
     * @private
     */
    this._size = size || 15000;

    /**
     * @member {WebGLBuffer}
     * @private
     */
    this._buffers = null;

    /**
     * @member {boolean}
     * @private
     */
    this._updateStatic = false;

    /**
     * @member {boolean}
     *
     */
    this.interactiveChildren = false;

}

ParticleContainer.prototype = Object.create(Container.prototype);
ParticleContainer.prototype.constructor = ParticleContainer;
module.exports = ParticleContainer;

/**
 * Updates the object transform for rendering
 *
 * @private
 */
ParticleContainer.prototype.updateTransform = function ()
{
    // TODO don't need to!
    this.displayObjectUpdateTransform();
    //  PIXI.Container.prototype.updateTransform.call( this );
};

/**
 * Renders the container using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The webgl renderer
 * @private
 */
ParticleContainer.prototype.renderWebGL = function (renderer)
{
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable)
    {
        return;
    }

    renderer.setObjectRenderer( renderer.plugins.particle );
    renderer.plugins.particle.render( this );
};

/**
 * Adds a child to this particle container at a specified index. If the index is out of bounds an error will be thrown
 *
 * @param child {DisplayObject} The child to add
 * @param index {Number} The index to place the child in
 * @return {DisplayObject} The child that was added.
 */
ParticleContainer.prototype.addChildAt = function (child, index)
{
    // prevent adding self as child
    if (child === this)
    {
        return child;
    }

    if (index >= 0 && index <= this.children.length)
    {
        if (child.parent)
        {
            child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);

        this._updateStatic = true;

        return child;
    }
    else
    {
        throw new Error(child + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
    }
};

/**
 * Removes a child from the specified index position.
 *
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child that was removed.
 */
ParticleContainer.prototype.removeChildAt = function (index)
{
    var child = this.getChildAt(index);

    child.parent = null;
    this.children.splice(index, 1);
    this._updateStatic = true;

    return child;
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The canvas renderer
 * @private
 */
ParticleContainer.prototype.renderCanvas = function (renderer)
{
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable)
    {
        return;
    }

    var context = renderer.context;
    var transform = this.worldTransform;
    var isRotated = true;

    context.globalAlpha = this.worldAlpha;

    this.displayObjectUpdateTransform();

    for (var i = 0; i < this.children.length; ++i)
    {
        var child = this.children[i];

        if (!child.visible)
        {
            continue;
        }

        var frame = child.texture.frame;

        context.globalAlpha = this.worldAlpha * child.alpha;

        if (child.rotation % (Math.PI * 2) === 0)
        {
            // this is the fastest  way to optimise! - if rotation is 0 then we can avoid any kind of setTransform call
            if (isRotated)
            {
                context.setTransform(
                    transform.a,
                    transform.b,
                    transform.c,
                    transform.d,
                    transform.tx,
                    transform.ty
                );

                isRotated = false;
            }

            context.drawImage(
                child.texture.baseTexture.source,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                ((child.anchor.x) * (-frame.width * child.scale.x) + child.position.x  + 0.5) | 0,
                ((child.anchor.y) * (-frame.height * child.scale.y) + child.position.y  + 0.5) | 0,
                frame.width * child.scale.x,
                frame.height * child.scale.y
            );
        }
        else
        {
            if (!isRotated)
            {
                isRotated = true;
            }

            child.displayObjectUpdateTransform();

            var childTransform = child.worldTransform;

            if (renderer.roundPixels)
            {
                context.setTransform(
                    childTransform.a,
                    childTransform.b,
                    childTransform.c,
                    childTransform.d,
                    childTransform.tx | 0,
                    childTransform.ty | 0
                );
            }
            else
            {
                context.setTransform(
                    childTransform.a,
                    childTransform.b,
                    childTransform.c,
                    childTransform.d,
                    childTransform.tx,
                    childTransform.ty
                );
            }

            context.drawImage(
                child.texture.baseTexture.source,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                ((child.anchor.x) * (-frame.width) + 0.5) | 0,
                ((child.anchor.y) * (-frame.height) + 0.5) | 0,
                frame.width,
                frame.height
            );
        }
    }
};

},{"../display/Container":4}],20:[function(require,module,exports){

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's ParticleBuffer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/ParticleBuffer.java
 */

/**
 *
 * @class
 * @private
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function ParticleBuffer(gl, properties, size)
{
    /**
     * the current WebGL drawing context
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     *
     *
     * @member {number}
     */
    this.vertSize = 2;

    /**
     *
     *
     * @member {number}
     */
    this.vertByteSize = this.vertSize * 4;

    /**
     * The number of images in the SpriteBatch before it flushes.
     *
     * @member {number}
     */
    this.size = size;

    /**
     * 
     *
     * @member {Array}
     */
    this.dynamicProperties = [];

    /**
     * 
     *
     * @member {Array}
     */
    this.staticProperties = [];

    for (var i = 0; i < properties.length; i++)
    {
        var property = properties[i];

        if(property.dynamic)
        {
            this.dynamicProperties.push(property);
        }
        else
        {
            this.staticProperties.push(property);
        }
    }

    this.staticStride = 0;
    this.staticBuffer = null;
    this.staticData = null;

    this.dynamicStride = 0;
    this.dynamicBuffer = null;
    this.dynamicData = null;

    this.initBuffers();

}

ParticleBuffer.prototype.constructor = ParticleBuffer;
module.exports = ParticleBuffer;

/**
 * Sets up the renderer context and necessary buffers.
 *
 * @private
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 */
ParticleBuffer.prototype.initBuffers = function ()
{
    var gl = this.gl;
    var i;
    var property;

    var dynamicOffset = 0;
    this.dynamicStride = 0;

    for (i = 0; i < this.dynamicProperties.length; i++)
    {
        property = this.dynamicProperties[i];

        property.offset = dynamicOffset;
        dynamicOffset += property.size;
        this.dynamicStride += property.size;
    }

    this.dynamicData = new Float32Array( this.size * this.dynamicStride * 4);
    this.dynamicBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.dynamicData, gl.DYNAMIC_DRAW);


    // static //
    var staticOffset = 0;
    this.staticStride = 0;

    for (i = 0; i < this.staticProperties.length; i++)
    {
        property = this.staticProperties[i];

        property.offset = staticOffset;
        staticOffset += property.size;
        this.staticStride += property.size;
    }

    this.staticData = new Float32Array( this.size * this.staticStride * 4);
    this.staticBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.staticData, gl.DYNAMIC_DRAW);

};

ParticleBuffer.prototype.uploadDynamic = function(children, startIndex, amount)
{
    var gl = this.gl;

    for (var i = 0; i < this.dynamicProperties.length; i++)
    {
        var property = this.dynamicProperties[i];
        property.uploadFunction(children, startIndex, amount, this.dynamicData, this.dynamicStride, property.offset);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.dynamicData);
};

ParticleBuffer.prototype.uploadStatic = function(children, startIndex, amount)
{
    var gl = this.gl;

    for (var i = 0; i < this.staticProperties.length; i++)
    {
        var property = this.staticProperties[i];
        property.uploadFunction(children, startIndex, amount, this.staticData, this.staticStride, property.offset);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.staticData);
};

/**
 * Starts a new sprite batch.
 *
 */
ParticleBuffer.prototype.bind = function ()
{
    var gl = this.gl;
    var i, property;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);

    for (i = 0; i < this.dynamicProperties.length; i++)
    {
        property = this.dynamicProperties[i];
        gl.vertexAttribPointer(property.attribute, property.size, gl.FLOAT, false, this.dynamicStride * 4, property.offset * 4);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);

    for (i = 0; i < this.staticProperties.length; i++)
    {
        property = this.staticProperties[i];
        gl.vertexAttribPointer(property.attribute, property.size, gl.FLOAT, false, this.staticStride * 4, property.offset * 4);
    }
};

/**
 * Destroys the SpriteBatch.
 *
 */
ParticleBuffer.prototype.destroy = function ()
{
    //TODO implement this :) to busy making the fun bits..
};

},{}],21:[function(require,module,exports){
var ObjectRenderer = require('../../renderers/webgl/utils/ObjectRenderer'),
    WebGLRenderer = require('../../renderers/webgl/WebGLRenderer'),
    ParticleShader = require('./ParticleShader'),
    ParticleBuffer = require('./ParticleBuffer'),
    math            = require('../../math');

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's ParticleRenderer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/ParticleRenderer.java
 */

/**
 *
 * @class
 * @private
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function ParticleRenderer(renderer)
{
    ObjectRenderer.call(this, renderer);


    /**
     * The number of images in the Particle before it flushes.
     *
     * @member {number}
     */
    this.size = 15000;//CONST.SPRITE_BATCH_SIZE; // 2000 is a nice balance between mobile / desktop

    var numIndices = this.size * 6;


    /**
     * Holds the indices
     *
     * @member {Uint16Array}
     */
    this.indices = new Uint16Array(numIndices);

    for (var i=0, j=0; i < numIndices; i += 6, j += 4)
    {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }

    /**
     * The default shader that is used if a sprite doesn't have a more specific one.
     *
     * @member {Shader}
     */
    this.shader = null;

    this.tempMatrix = new math.Matrix();




}

ParticleRenderer.prototype = Object.create(ObjectRenderer.prototype);
ParticleRenderer.prototype.constructor = ParticleRenderer;
module.exports = ParticleRenderer;

WebGLRenderer.registerPlugin('particle', ParticleRenderer);

/**
 * When there is a WebGL context change
 *
 * @private
 *
 */
ParticleRenderer.prototype.onContextChange = function ()
{
    var gl = this.renderer.gl;

    // setup default shader
    this.shader = new ParticleShader(this.renderer.shaderManager);

    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.

    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);


    this.properties = [
    //verticesData
    {
        attribute:this.shader.attributes.aVertexPosition,
        dynamic:false,
        size:2,
        uploadFunction:this.uploadVertices,
        offset:0
    },
    // positionData
    {
        attribute:this.shader.attributes.aPositionCoord,
        dynamic:true,
        size:2,
        uploadFunction:this.uploadPosition,
        offset:0
    },
    // rotationData
    {
        attribute:this.shader.attributes.aRotation,
        dynamic:false,
        size:1,
        uploadFunction:this.uploadRotation,
        offset:0
    },
    //u vsData
    {
        attribute:this.shader.attributes.aTextureCoord,
        dynamic:false,
        size:2,
        uploadFunction:this.uploadUvs,
        offset:0
    },
    // alphaData
    {
        attribute:this.shader.attributes.aColor,
        dynamic:false,
        size:1,
        uploadFunction:this.uploadAlpha,
        offset:0
    }];

};

/**
 * Starts a new sprite batch.
 *
 */
ParticleRenderer.prototype.start = function ()
{
    var gl = this.renderer.gl;

    // bind the main texture
    gl.activeTexture(gl.TEXTURE0);

    // bind the buffers

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    var shader = this.shader;

    this.renderer.shaderManager.setShader(shader);
};


/**
 * Renders the sprite object.
 *
 * @param container {Container|Sprite} the sprite to render using this ParticleRenderer
 */
ParticleRenderer.prototype.render = function ( container )
{
    var children = container.children,
        totalChildren = children.length,
        maxSize = container._size;

    if(totalChildren === 0)
    {
        return;
    }
    else if(totalChildren > maxSize)
    {
        totalChildren = maxSize;
    }

    if(!container._buffers)
    {
        container._buffers = this.generateBuffers( container );
    }



    // if the uvs have not updated then no point rendering just yet!
    //this.renderer.blendModeManager.setBlendMode(sprite.blendMode);
    var gl = this.renderer.gl;

    var m =  container.worldTransform.copy( this.tempMatrix );
    m.prepend( this.renderer.currentRenderTarget.projectionMatrix );
    gl.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, false, m.toArray(true));

    // if this variable is true then we will upload the static contents as well as the dynamic contens
    var uploadStatic = container._updateStatic;

    // make sure the texture is bound..
    var baseTexture = children[0]._texture.baseTexture;

    if (!baseTexture._glTextures[gl.id])
    {
        this.renderer.updateTexture(baseTexture);
        if(!this.properties[0].dynamic || !this.properties[3].dynamic)
        {
            uploadStatic = true;
        }
    }
    else
    {
        gl.bindTexture(gl.TEXTURE_2D, baseTexture._glTextures[gl.id]);
    }

    // now lets upload and render the buffers..
    var j = 0;
    for (var i = 0; i < totalChildren; i+=this.size)
    {
         var amount = ( totalChildren - i);
        if(amount > this.size)
        {
            amount = this.size;
        }

        var buffer = container._buffers[j++];

        // we always upload the dynamic
        buffer.uploadDynamic(children, i, amount);

        // we only upload the static content when we have to!
        if(uploadStatic)
        {
            buffer.uploadStatic(children, i, amount);
        }

        // bind the buffer
        buffer.bind( this.shader );

         // now draw those suckas!
        gl.drawElements(gl.TRIANGLES, amount * 6, gl.UNSIGNED_SHORT, 0);
        this.renderer.drawCount++;
    }

    container._updateStatic = false;
};

/**
 * Creates one particle buffer for each child in the container we want to render and updates internal properties
 *
 * @param container {Container|Sprite} the sprite to render using this ParticleRenderer
 */
ParticleRenderer.prototype.generateBuffers = function ( container )
{
    var gl = this.renderer.gl,
        buffers = [],
        size = container._size,
        i;

    // update the properties to match the state of the container..
    for (i = 0; i < container._properties.length; i++)
    {
        this.properties[i].dynamic = container._properties[i];
    }

    for (i = 0; i < size; i += this.size)
    {
        buffers.push( new ParticleBuffer(gl,  this.properties, this.size, this.shader) );
    }

    return buffers;
};


/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their vertices uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadVertices = function (children, startIndex, amount, array, stride, offset)
{
    var sprite,
        texture,
        trim,
        sx,
        sy,
        w0, w1, h0, h1;

    for (var i = 0; i < amount; i++) {

        sprite = children[startIndex + i];
        texture = sprite._texture;
        sx = sprite.scale.x;
        sy = sprite.scale.y;

        if (texture.trim)
        {
            // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
            trim = texture.trim;

            w1 = trim.x - sprite.anchor.x * trim.width;
            w0 = w1 + texture.crop.width;

            h1 = trim.y - sprite.anchor.y * trim.height;
            h0 = h1 + texture.crop.height;
        }
        else
        {
            w0 = (texture._frame.width ) * (1-sprite.anchor.x);
            w1 = (texture._frame.width ) * -sprite.anchor.x;

            h0 = texture._frame.height * (1-sprite.anchor.y);
            h1 = texture._frame.height * -sprite.anchor.y;
        }

        array[offset] = w1 * sx;
        array[offset + 1] = h1 * sy;

        array[offset + stride] = w0 * sx;
        array[offset + stride + 1] = h1 * sy;

        array[offset + stride * 2] = w0 * sx;
        array[offset + stride * 2 + 1] = h0 * sy;

        array[offset + stride * 3] = w1 * sx;
        array[offset + stride * 3 + 1] = h0 * sy;

        offset += stride * 4;
    }

};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their positions uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadPosition = function (children,startIndex, amount, array, stride, offset)
{
    for (var i = 0; i < amount; i++)
    {
        var spritePosition = children[startIndex + i].position;

        array[offset] = spritePosition.x;
        array[offset + 1] = spritePosition.y;

        array[offset + stride] = spritePosition.x;
        array[offset + stride + 1] = spritePosition.y;

        array[offset + stride * 2] = spritePosition.x;
        array[offset + stride * 2 + 1] = spritePosition.y;

        array[offset + stride * 3] = spritePosition.x;
        array[offset + stride * 3 + 1] = spritePosition.y;

        offset += stride * 4;
    }

};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their rotation uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadRotation = function (children,startIndex, amount, array, stride, offset)
{
    for (var i = 0; i < amount; i++)
    {
        var spriteRotation = children[startIndex + i].rotation;


        array[offset] = spriteRotation;
        array[offset + stride] = spriteRotation;
        array[offset + stride * 2] = spriteRotation;
        array[offset + stride * 3] = spriteRotation;

        offset += stride * 4;
    }
};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their Uvs uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadUvs = function (children,startIndex, amount, array, stride, offset)
{
    for (var i = 0; i < amount; i++)
    {
        var textureUvs = children[startIndex + i]._texture._uvs;

        if (textureUvs)
        {
            array[offset] = textureUvs.x0;
            array[offset + 1] = textureUvs.y0;

            array[offset + stride] = textureUvs.x1;
            array[offset + stride + 1] = textureUvs.y1;

            array[offset + stride * 2] = textureUvs.x2;
            array[offset + stride * 2 + 1] = textureUvs.y2;

            array[offset + stride * 3] = textureUvs.x3;
            array[offset + stride * 3 + 1] = textureUvs.y3;

            offset += stride * 4;
        }
        else
        {
            //TODO you know this can be easier!
            array[offset] = 0;
            array[offset + 1] = 0;

            array[offset + stride] = 0;
            array[offset + stride + 1] = 0;

            array[offset + stride * 2] = 0;
            array[offset + stride * 2 + 1] = 0;

            array[offset + stride * 3] = 0;
            array[offset + stride * 3 + 1] = 0;

            offset += stride * 4;
        }
    }
};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their alpha uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadAlpha = function (children,startIndex, amount, array, stride, offset)
{
     for (var i = 0; i < amount; i++)
     {
        var spriteAlpha = children[startIndex + i].alpha;

        array[offset] = spriteAlpha;
        array[offset + stride] = spriteAlpha;
        array[offset + stride * 2] = spriteAlpha;
        array[offset + stride * 3] = spriteAlpha;

        offset += stride * 4;
    }
};


/**
 * Destroys the Particle.
 *
 */
ParticleRenderer.prototype.destroy = function ()
{

    this.shader.destroy();

    //TODO implement this!
};

},{"../../math":13,"../../renderers/webgl/WebGLRenderer":29,"../../renderers/webgl/utils/ObjectRenderer":43,"./ParticleBuffer":20,"./ParticleShader":22}],22:[function(require,module,exports){
var TextureShader = require('../../renderers/webgl/shaders/TextureShader');

/**
 * @class
 * @extends TextureShader
 * @memberof PIXI
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 */
function ParticleShader(shaderManager)
{
    TextureShader.call(this,
        shaderManager,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            'attribute vec2 aTextureCoord;',
            'attribute float aColor;',

            'attribute vec2 aPositionCoord;',
            'attribute vec2 aScale;',
            'attribute float aRotation;',

            'uniform mat3 projectionMatrix;',

            'varying vec2 vTextureCoord;',
            'varying float vColor;',

            'void main(void){',
            '   vec2 v = aVertexPosition;',

            '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);',
            '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);',
            '   v = v + aPositionCoord;',

            '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);',

            '   vTextureCoord = aTextureCoord;',
            '   vColor = aColor;',
            '}'
        ].join('\n'),
        // hello
         [
            'precision lowp float;',

            'varying vec2 vTextureCoord;',
            'varying float vColor;',

            'uniform sampler2D uSampler;',

            'void main(void){',
            '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
            '}'
        ].join('\n'),
        // custom uniforms
        null,
        // custom attributes
        {
            aPositionCoord: 0,
           // aScale:         0,
            aRotation:      0
        }
    );

    // TEMP HACK

}

ParticleShader.prototype = Object.create(TextureShader.prototype);
ParticleShader.prototype.constructor = ParticleShader;

module.exports = ParticleShader;

},{"../../renderers/webgl/shaders/TextureShader":42}],23:[function(require,module,exports){
var utils = require('../utils'),
    math = require('../math'),
    CONST = require('../const');

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @param system {string} The name of the system this renderer is for.
 * @param [width=800] {number} the width of the canvas view
 * @param [height=600] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {boolean} This sets if the CanvasRenderer will clear the canvas or
 *      not before the new render pass.
 */
function SystemRenderer(system, width, height, options)
{
    utils.sayHello(system);

    // prepare options
    if (options)
    {
        for (var i in CONST.DEFAULT_RENDER_OPTIONS)
        {
            if (typeof options[i] === 'undefined')
            {
                options[i] = CONST.DEFAULT_RENDER_OPTIONS[i];
            }
        }
    }
    else
    {
        options = CONST.DEFAULT_RENDER_OPTIONS;
    }

    /**
     * The type of the renderer.
     *
     * @member {RENDERER_TYPE}
     * @default CONT.RENDERER_TYPE.UNKNOWN
     */
    this.type = CONST.RENDERER_TYPE.UNKNOWN;

    /**
     * The width of the canvas view
     *
     * @member {number}
     * @default 800
     */
    this.width = width || 800;

    /**
     * The height of the canvas view
     *
     * @member {number}
     * @default 600
     */
    this.height = height || 600;

    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    this.view = options.view || document.createElement('canvas');

    /**
     * The resolution of the renderer
     *
     * @member {number}
     * @default 1
     */
    this.resolution = options.resolution;

    /**
     * Whether the render view is transparent
     *
     * @member {boolean}
     */
    this.transparent = options.transparent;

    /**
     * Whether the render view should be resized automatically
     *
     * @member {boolean}
     */
    this.autoResize = options.autoResize || false;

    /**
     * Tracks the blend modes useful for this renderer.
     *
     * @member {object<string, mixed>}
     */
    this.blendModes = null;


    ///////////////////////////
    // TODO: Combine these!

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.
     *
     * @member {boolean}
     */
    this.preserveDrawingBuffer = options.preserveDrawingBuffer;

    /**
     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
     * If the scene is NOT transparent Pixi will use a canvas sized fillRect operation every frame to set the canvas background color.
     * If the scene is transparent Pixi will use clearRect to clear the canvas every frame.
     * Disable this by setting this to false. For example if your game has a canvas filling background image you often don't need this set.
     *
     * @member {boolean}
     * @default
     */
    this.clearBeforeRender = options.clearBeforeRender;


    ////////////////////////

    /**
     * The background color as a number.
     *
     * @member {number}
     * @private
     */
    this._backgroundColor = 0xFFFFFF;

    /**
     * The background color as an [R, G, B] array.
     *
     * @member {number[]}
     * @private
     */
    this._backgroundColorRgb = [1, 1, 1];

    /**
     * The background color as a string.
     *
     * @member {string}
     * @private
     */
    this._backgroundColorString = '#000000';

    this.backgroundColor = options.backgroundColor || this._backgroundColor; // run bg color setter

    /**
     * This temporary display object used as the parent of the currently being rendered item
     * @member {DisplayObject}
     * @private
     */
    this._tempDisplayObjectParent = {worldTransform:new math.Matrix(), worldAlpha:1, children:[]};

    //
    this._lastObjectRendered = this._tempDisplayObjectParent;
}

// constructor
SystemRenderer.prototype.constructor = SystemRenderer;
module.exports = SystemRenderer;

utils.eventTarget.mixin(SystemRenderer.prototype);

Object.defineProperties(SystemRenderer.prototype, {
    /**
     * The background color to fill if not transparent
     *
     * @member {number}
     * @memberof SystemRenderer#
     */
    backgroundColor:
    {
        get: function ()
        {
            return this._backgroundColor;
        },
        set: function (val)
        {
            this._backgroundColor = val;
            this._backgroundColorString = utils.hex2string(val);
            utils.hex2rgb(val, this._backgroundColorRgb);
        }
    }
});

/**
 * Resizes the canvas view to the specified width and height
 *
 * @param width {number} the new width of the canvas view
 * @param height {number} the new height of the canvas view
 */
SystemRenderer.prototype.resize = function (width, height) {
    this.width = width * this.resolution;
    this.height = height * this.resolution;

    this.view.width = this.width;
    this.view.height = this.height;

    if (this.autoResize)
    {
        this.view.style.width = this.width / this.resolution + 'px';
        this.view.style.height = this.height / this.resolution + 'px';
    }
};

/**
 * Removes everything from the renderer and optionally removes the Canvas DOM element.
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
SystemRenderer.prototype.destroy = function (removeView) {
    if (removeView && this.view.parent)
    {
        this.view.parent.removeChild(this.view);
    }

    this.type = CONST.RENDERER_TYPE.UNKNOWN;

    this.width = 0;
    this.height = 0;

    this.view = null;

    this.resolution = 0;

    this.transparent = false;

    this.autoResize = false;

    this.blendModes = null;

    this.preserveDrawingBuffer = false;
    this.clearBeforeRender = false;

    this._backgroundColor = 0;
    this._backgroundColorRgb = null;
    this._backgroundColorString = null;
};

},{"../const":3,"../math":13,"../utils":57}],24:[function(require,module,exports){
var SystemRenderer = require('../SystemRenderer'),
    CanvasMaskManager = require('./utils/CanvasMaskManager'),
    utils = require('../../utils'),
    math = require('../../math'),
    CONST = require('../../const');

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @extends SystemRenderer
 * @param [width=800] {number} the width of the canvas view
 * @param [height=600] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {boolean} This sets if the CanvasRenderer will clear the canvas or
 *      not before the new render pass.
 */
function CanvasRenderer(width, height, options)
{
    SystemRenderer.call(this, 'Canvas', width, height, options);

    this.type = CONST.RENDERER_TYPE.CANVAS;

    /**
     * The canvas 2d context that everything is drawn with.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.view.getContext('2d', { alpha: this.transparent });

    /**
     * Boolean flag controlling canvas refresh.
     *
     * @member {boolean}
     */
    this.refresh = true;

    /**
     * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
     *
     * @member {CanvasMaskManager}
     */
    this.maskManager = new CanvasMaskManager();

    /**
     * If true Pixi will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Handy for crisp pixel art and speed on legacy devices.
     *
     * @member {boolean}
     */
    this.roundPixels = false;

    /**
     * Tracks the active scale mode for this renderer.
     *
     * @member {SCALE_MODE}
     */
    this.currentScaleMode = CONST.SCALE_MODES.DEFAULT;

    /**
     * Tracks the active blend mode for this renderer.
     *
     * @member {SCALE_MODE}
     */
    this.currentBlendMode = CONST.BLEND_MODES.NORMAL;

    /**
     * The canvas property used to set the canvas smoothing property.
     *
     * @member {string}
     */
    this.smoothProperty = 'imageSmoothingEnabled';

    if (!this.context.imageSmoothingEnabled)
    {
        if (this.context.webkitImageSmoothingEnabled)
        {
            this.smoothProperty = 'webkitImageSmoothingEnabled';
        }
        else if (this.context.mozImageSmoothingEnabled)
        {
            this.smoothProperty = 'mozImageSmoothingEnabled';
        }
        else if (this.context.oImageSmoothingEnabled)
        {
            this.smoothProperty = 'oImageSmoothingEnabled';
        }
        else if (this.context.msImageSmoothingEnabled)
        {
            this.smoothProperty = 'msImageSmoothingEnabled';
        }
    }

    this.initPlugins();

    this._mapBlendModes();

    /**
     * This temporary display object used as the parent of the currently being rendered item
     *
     * @member {DisplayObject}
     * @private
     */
    this._tempDisplayObjectParent = {
        worldTransform: new math.Matrix(),
        worldAlpha: 1
    };


    this.resize(width, height);
}

// constructor
CanvasRenderer.prototype = Object.create(SystemRenderer.prototype);
CanvasRenderer.prototype.constructor = CanvasRenderer;
module.exports = CanvasRenderer;
utils.pluginTarget.mixin(CanvasRenderer);

/**
 * Renders the object to this canvas view
 *
 * @param object {DisplayObject} the object to be rendered
 */
CanvasRenderer.prototype.render = function (object)
{
    var cacheParent = object.parent;

    this._lastObjectRendered = object;

    object.parent = this._tempDisplayObjectParent;

    // update the scene graph
    object.updateTransform();

    object.parent = cacheParent;

    this.context.setTransform(1, 0, 0, 1, 0, 0);

    this.context.globalAlpha = 1;

    this.currentBlendMode = CONST.BLEND_MODES.NORMAL;
    this.context.globalCompositeOperation = this.blendModes[CONST.BLEND_MODES.NORMAL];

    if (navigator.isCocoonJS && this.view.screencanvas)
    {
        this.context.fillStyle = 'black';
        this.context.clear();
    }

    if (this.clearBeforeRender)
    {
        if (this.transparent)
        {
            this.context.clearRect(0, 0, this.width, this.height);
        }
        else
        {
            this.context.fillStyle = this._backgroundColorString;
            this.context.fillRect(0, 0, this.width , this.height);
        }
    }

    this.renderDisplayObject(object, this.context);
};

/**
 * Removes everything from the renderer and optionally removes the Canvas DOM element.
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
CanvasRenderer.prototype.destroy = function (removeView)
{
    this.destroyPlugins();

    // call the base destroy
    SystemRenderer.prototype.destroy.call(this, removeView);

    this.context = null;

    this.refresh = true;

    this.maskManager.destroy();
    this.maskManager = null;

    this.roundPixels = false;

    this.currentScaleMode = 0;
    this.currentBlendMode = 0;

    this.smoothProperty = null;
};

/**
 * Renders a display object
 *
 * @param displayObject {DisplayObject} The displayObject to render
 * @private
 */
CanvasRenderer.prototype.renderDisplayObject = function (displayObject, context)
{
    var tempContext = this.context;

    this.context = context;
    displayObject.renderCanvas(this);
    this.context = tempContext;
};

/**
 * Maps Pixi blend modes to canvas blend modes.
 *
 * @private
 */
CanvasRenderer.prototype._mapBlendModes = function ()
{
    if (!this.blendModes)
    {
        this.blendModes = {};

        if (utils.canUseNewCanvasBlendModes())
        {
            this.blendModes[CONST.BLEND_MODES.NORMAL]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.ADD]           = 'lighter'; //IS THIS OK???
            this.blendModes[CONST.BLEND_MODES.MULTIPLY]      = 'multiply';
            this.blendModes[CONST.BLEND_MODES.SCREEN]        = 'screen';
            this.blendModes[CONST.BLEND_MODES.OVERLAY]       = 'overlay';
            this.blendModes[CONST.BLEND_MODES.DARKEN]        = 'darken';
            this.blendModes[CONST.BLEND_MODES.LIGHTEN]       = 'lighten';
            this.blendModes[CONST.BLEND_MODES.COLOR_DODGE]   = 'color-dodge';
            this.blendModes[CONST.BLEND_MODES.COLOR_BURN]    = 'color-burn';
            this.blendModes[CONST.BLEND_MODES.HARD_LIGHT]    = 'hard-light';
            this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT]    = 'soft-light';
            this.blendModes[CONST.BLEND_MODES.DIFFERENCE]    = 'difference';
            this.blendModes[CONST.BLEND_MODES.EXCLUSION]     = 'exclusion';
            this.blendModes[CONST.BLEND_MODES.HUE]           = 'hue';
            this.blendModes[CONST.BLEND_MODES.SATURATION]    = 'saturation';
            this.blendModes[CONST.BLEND_MODES.COLOR]         = 'color';
            this.blendModes[CONST.BLEND_MODES.LUMINOSITY]    = 'luminosity';
        }
        else
        {
            // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
            this.blendModes[CONST.BLEND_MODES.NORMAL]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.ADD]           = 'lighter'; //IS THIS OK???
            this.blendModes[CONST.BLEND_MODES.MULTIPLY]      = 'source-over';
            this.blendModes[CONST.BLEND_MODES.SCREEN]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.OVERLAY]       = 'source-over';
            this.blendModes[CONST.BLEND_MODES.DARKEN]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.LIGHTEN]       = 'source-over';
            this.blendModes[CONST.BLEND_MODES.COLOR_DODGE]   = 'source-over';
            this.blendModes[CONST.BLEND_MODES.COLOR_BURN]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.HARD_LIGHT]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.DIFFERENCE]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.EXCLUSION]     = 'source-over';
            this.blendModes[CONST.BLEND_MODES.HUE]           = 'source-over';
            this.blendModes[CONST.BLEND_MODES.SATURATION]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.COLOR]         = 'source-over';
            this.blendModes[CONST.BLEND_MODES.LUMINOSITY]    = 'source-over';
        }
    }
};

},{"../../const":3,"../../math":13,"../../utils":57,"../SystemRenderer":23,"./utils/CanvasMaskManager":27}],25:[function(require,module,exports){
/**
 * Creates a Canvas element of the given size.
 *
 * @class
 * @memberof PIXI
 * @param width {number} the width for the newly created canvas
 * @param height {number} the height for the newly created canvas
 */
function CanvasBuffer(width, height)
{
    /**
     * The Canvas object that belongs to this CanvasBuffer.
     *
     * @member {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.canvas.getContext('2d');

    this.canvas.width = width;
    this.canvas.height = height;
}

CanvasBuffer.prototype.constructor = CanvasBuffer;
module.exports = CanvasBuffer;

Object.defineProperties(CanvasBuffer.prototype, {
    /**
     * The width of the canvas buffer in pixels.
     *
     * @member {number}
     * @memberof CanvasBuffer#
     */
    width: {
        get: function ()
        {
            return this.canvas.width;
        },
        set: function (val)
        {
            this.canvas.width = val;
        }
    },
    /**
     * The height of the canvas buffer in pixels.
     *
     * @member {number}
     * @memberof CanvasBuffer#
     */
    height: {
        get: function ()
        {
            return this.canvas.height;
        },
        set: function (val)
        {
            this.canvas.height = val;
        }
    }
});

/**
 * Clears the canvas that was created by the CanvasBuffer class.
 *
 * @private
 */
CanvasBuffer.prototype.clear = function ()
{
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
};

/**
 * Resizes the canvas to the specified width and height.
 *
 * @param width {number} the new width of the canvas
 * @param height {number} the new height of the canvas
 */
CanvasBuffer.prototype.resize = function (width, height)
{
    this.canvas.width = width;
    this.canvas.height = height;
};

/**
 * Destroys this canvas.
 *
 */
CanvasBuffer.prototype.destroy = function ()
{
    this.context = null;
    this.canvas = null;
};

},{}],26:[function(require,module,exports){
var CONST = require('../../../const');

/**
 * A set of functions used by the canvas renderer to draw the primitive graphics data.
 * @static
 * @memberof PIXI
 */
var CanvasGraphics = module.exports = {};

/*
 * Renders a Graphics object to a canvas.
 *
 * @param graphics {Graphics} the actual graphics object to render
 * @param context {CanvasRenderingContext2D} the 2d drawing method of the canvas
 */
CanvasGraphics.renderGraphics = function (graphics, context)
{
    var worldAlpha = graphics.worldAlpha;

    if (graphics.dirty)
    {
        this.updateGraphicsTint(graphics);
        graphics.dirty = false;
    }

    for (var i = 0; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        var fillColor = data._fillTint;
        var lineColor = data._lineTint;

        context.lineWidth = data.lineWidth;

        if (data.type === CONST.SHAPES.POLY)
        {
            context.beginPath();

            var points = shape.points;

            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++)
            {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            if (shape.closed)
            {
                context.lineTo(points[0], points[1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if (points[0] === points[points.length-2] && points[1] === points[points.length-1])
            {
                context.closePath();
            }

            if (data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.RECT)
        {

            if (data.fillColor || data.fillColor === 0)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fillRect(shape.x, shape.y, shape.width, shape.height);

            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.strokeRect(shape.x, shape.y, shape.width, shape.height);
            }
        }
        else if (data.type === CONST.SHAPES.CIRC)
        {
            // TODO - need to be Undefined!
            context.beginPath();
            context.arc(shape.x, shape.y, shape.radius,0,2*Math.PI);
            context.closePath();

            if (data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.ELIP)
        {
            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - w/2;
            var y = shape.y - h/2;

            context.beginPath();

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

            context.closePath();

            if (data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.RREC)
        {
            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.beginPath();
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();

            if (data.fillColor || data.fillColor === 0)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();

            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
    }
};

/*
 * Renders a graphics mask
 *
 * @private
 * @param graphics {Graphics} the graphics which will be used as a mask
 * @param context {CanvasRenderingContext2D} the context 2d method of the canvas
 */
CanvasGraphics.renderGraphicsMask = function (graphics, context)
{
    var len = graphics.graphicsData.length;

    if (len === 0)
    {
        return;
    }

    context.beginPath();

    for (var i = 0; i < len; i++)
    {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        if (data.type === CONST.SHAPES.POLY)
        {

            var points = shape.points;

            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++)
            {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if (points[0] === points[points.length-2] && points[1] === points[points.length-1])
            {
                context.closePath();
            }

        }
        else if (data.type === CONST.SHAPES.RECT)
        {
            context.rect(shape.x, shape.y, shape.width, shape.height);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.CIRC)
        {
            // TODO - need to be Undefined!
            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.ELIP)
        {

            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - w/2;
            var y = shape.y - h/2;

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.RREC)
        {

            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();
        }
    }
};

/*
 * Updates the tint of a graphics object
 *
 * @private
 * @param graphics {Graphics} the graphics that will have its tint updated
 * 
 */
CanvasGraphics.updateGraphicsTint = function (graphics)
{
    if (graphics.tint === 0xFFFFFF)
    {
        return;
    }

    var tintR = (graphics.tint >> 16 & 0xFF) / 255;
    var tintG = (graphics.tint >> 8 & 0xFF) / 255;
    var tintB = (graphics.tint & 0xFF)/ 255;

    for (var i = 0; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];

        var fillColor = data.fillColor | 0;
        var lineColor = data.lineColor | 0;

        /*
        var colorR = (fillColor >> 16 & 0xFF) / 255;
        var colorG = (fillColor >> 8 & 0xFF) / 255;
        var colorB = (fillColor & 0xFF) / 255;

        colorR *= tintR;
        colorG *= tintG;
        colorB *= tintB;

        fillColor = ((colorR*255 << 16) + (colorG*255 << 8) + colorB*255);

        colorR = (lineColor >> 16 & 0xFF) / 255;
        colorG = (lineColor >> 8 & 0xFF) / 255;
        colorB = (lineColor & 0xFF) / 255;

        colorR *= tintR;
        colorG *= tintG;
        colorB *= tintB;

        lineColor = ((colorR*255 << 16) + (colorG*255 << 8) + colorB*255);
        */

        // super inline cos im an optimization NAZI :)
        data._fillTint = (((fillColor >> 16 & 0xFF) / 255 * tintR*255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG*255 << 8) +  (fillColor & 0xFF) / 255 * tintB*255);
        data._lineTint = (((lineColor >> 16 & 0xFF) / 255 * tintR*255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG*255 << 8) +  (lineColor & 0xFF) / 255 * tintB*255);

    }
};


},{"../../../const":3}],27:[function(require,module,exports){
var CanvasGraphics = require('./CanvasGraphics');

/**
 * A set of functions used to handle masking.
 *
 * @class
 * @memberof PIXI
 */
function CanvasMaskManager()
{}

CanvasMaskManager.prototype.constructor = CanvasMaskManager;
module.exports = CanvasMaskManager;

/**
 * This method adds it to the current stack of masks.
 *
 * @param maskData {object} the maskData that will be pushed
 * @param renderer {WebGLRenderer|CanvasRenderer} The renderer context to use.
 */
CanvasMaskManager.prototype.pushMask = function (maskData, renderer)
{

    renderer.context.save();

    var cacheAlpha = maskData.alpha;
    var transform = maskData.worldTransform;
    var resolution = renderer.resolution;

    renderer.context.setTransform(
        transform.a * resolution,
        transform.b * resolution,
        transform.c * resolution,
        transform.d * resolution,
        transform.tx * resolution,
        transform.ty * resolution
    );

    //TODO suport sprite alpha masks??
    //lots of effort required. If demand is great enough..
    if(!maskData.texture)
    {
        CanvasGraphics.renderGraphicsMask(maskData, renderer.context);
        renderer.context.clip();
    }

    maskData.worldAlpha = cacheAlpha;
};

/**
 * Restores the current drawing context to the state it was before the mask was applied.
 *
 * @param renderer {WebGLRenderer|CanvasRenderer} The renderer context to use.
 */
CanvasMaskManager.prototype.popMask = function (renderer)
{
    renderer.context.restore();
};

},{"./CanvasGraphics":26}],28:[function(require,module,exports){
var utils = require('../../../utils');

/**
 * Utility methods for Sprite/Texture tinting.
 * @static
 * @memberof PIXI
 */
var CanvasTinter = module.exports = {};

/**
 * Basically this method just needs a sprite and a color and tints the sprite with the given color.
 *
 * @param sprite {Sprite} the sprite to tint
 * @param color {number} the color to use to tint the sprite with
 * @return {HTMLCanvasElement} The tinted canvas
 */
CanvasTinter.getTintedTexture = function (sprite, color)
{
    var texture = sprite.texture;

    color = CanvasTinter.roundColor(color);

    var stringColor = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);

    texture.tintCache = texture.tintCache || {};

    if (texture.tintCache[stringColor])
    {
        return texture.tintCache[stringColor];
    }

     // clone texture..
    var canvas = CanvasTinter.canvas || document.createElement('canvas');

    //CanvasTinter.tintWithPerPixel(texture, stringColor, canvas);
    CanvasTinter.tintMethod(texture, color, canvas);

    if (CanvasTinter.convertTintToImage)
    {
        // is this better?
        var tintImage = new Image();
        tintImage.src = canvas.toDataURL();

        texture.tintCache[stringColor] = tintImage;
    }
    else
    {
        texture.tintCache[stringColor] = canvas;
        // if we are not converting the texture to an image then we need to lose the reference to the canvas
        CanvasTinter.canvas = null;
    }

    return canvas;
};

/**
 * Tint a texture using the 'multiply' operation.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithMultiply = function (texture, color, canvas)
{
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.fillStyle = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);

    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'multiply';

    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    context.globalCompositeOperation = 'destination-atop';

    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );
};

/**
 * Tint a texture using the 'overlay' operation.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithOverlay = function (texture, color, canvas)
{
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.globalCompositeOperation = 'copy';
    context.fillStyle = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);
    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'destination-atop';
    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    // context.globalCompositeOperation = 'copy';
};

/**
 * Tint a texture pixel per pixel.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithPerPixel = function (texture, color, canvas)
{
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.globalCompositeOperation = 'copy';
    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    var rgbValues = utils.hex2rgb(color);
    var r = rgbValues[0], g = rgbValues[1], b = rgbValues[2];

    var pixelData = context.getImageData(0, 0, crop.width, crop.height);

    var pixels = pixelData.data;

    for (var i = 0; i < pixels.length; i += 4)
    {
        pixels[i+0] *= r;
        pixels[i+1] *= g;
        pixels[i+2] *= b;
    }

    context.putImageData(pixelData, 0, 0);
};

/**
 * Rounds the specified color according to the CanvasTinter.cacheStepsPerColorChannel.
 *
 * @param color {number} the color to round, should be a hex color
 */
CanvasTinter.roundColor = function (color)
{
    var step = CanvasTinter.cacheStepsPerColorChannel;

    var rgbValues = utils.hex2rgb(color);

    rgbValues[0] = Math.min(255, (rgbValues[0] / step) * step);
    rgbValues[1] = Math.min(255, (rgbValues[1] / step) * step);
    rgbValues[2] = Math.min(255, (rgbValues[2] / step) * step);

    return utils.rgb2hex(rgbValues);
};

/**
 * Number of steps which will be used as a cap when rounding colors.
 *
 * @member
 */
CanvasTinter.cacheStepsPerColorChannel = 8;

/**
 * Tint cache boolean flag.
 *
 * @member
 */
CanvasTinter.convertTintToImage = false;

/**
 * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
 *
 * @member
 */
CanvasTinter.canUseMultiply = utils.canUseNewCanvasBlendModes();

/**
 * The tinting method that will be used.
 *
 */
CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply :  CanvasTinter.tintWithPerPixel;

},{"../../../utils":57}],29:[function(require,module,exports){
var SystemRenderer = require('../SystemRenderer'),
    ShaderManager = require('./managers/ShaderManager'),
    MaskManager = require('./managers/MaskManager'),
    StencilManager = require('./managers/StencilManager'),
    FilterManager = require('./managers/FilterManager'),
    BlendModeManager = require('./managers/BlendModeManager'),
    RenderTarget = require('./utils/RenderTarget'),
    ObjectRenderer = require('./utils/ObjectRenderer'),
    FXAAFilter = require('./filters/FXAAFilter'),
    utils = require('../../utils'),
    CONST = require('../../const');

/**
 * The WebGLRenderer draws the scene and all its content onto a webGL enabled canvas. This renderer
 * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
 * So no need for Sprite Batches or Sprite Clouds.
 * Don't forget to add the view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @extends SystemRenderer
 * @param [width=0] {number} the width of the canvas view
 * @param [height=0] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.antialias=false] {boolean} sets antialias. If not available natively then FXAA antialiasing is used
 * @param [options.forceFXAA=false] {boolean} forces FXAA antialiasing to be used over native. FXAA is faster, but may not always lok as great
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {boolean} This sets if the CanvasRenderer will clear the canvas or
 *      not before the new render pass.
 * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if
 *      you need to call toDataUrl on the webgl context.
 */
function WebGLRenderer(width, height, options)
{
    options = options || {};

    SystemRenderer.call(this, 'WebGL', width, height, options);

    /**
     * The type of this renderer as a standardised const
     *
     * @member {number}
     *
     */
    this.type = CONST.RENDERER_TYPE.WEBGL;

    this.handleContextLost = this.handleContextLost.bind(this);
    this.handleContextRestored = this.handleContextRestored.bind(this);

    this._updateTextureBound = function(e){
        this.updateTexture(e.target);
    }.bind(this);

    this._destroyTextureBound = function(e){
        this.destroyTexture(e.target);
    }.bind(this);

    this.view.addEventListener('webglcontextlost', this.handleContextLost, false);
    this.view.addEventListener('webglcontextrestored', this.handleContextRestored, false);

    //TODO possibility to force FXAA as it may offer better performance?
    /**
     * Does it use FXAA ?
     *
     * @member {boolean}
     * @private
     */
    this._useFXAA = !!options.forceFXAA && options.antialias;

    /**
     * The fxaa filter
     *
     * @member {FXAAFilter}
     * @private
     */
    this._FXAAFilter = null;

    /**
     * The options passed in to create a new webgl context.
     *
     * @member {object}
     * @private
     */
    this._contextOptions = {
        alpha: this.transparent,
        antialias: options.antialias,
        premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',
        stencil: true,
        preserveDrawingBuffer: options.preserveDrawingBuffer
    };

    /**
     * Counter for the number of draws made each frame
     *
     * @member {number}
     */
    this.drawCount = 0;

    /**
     * Deals with managing the shader programs and their attribs.
     *
     * @member {ShaderManager}
     */
    this.shaderManager = new ShaderManager(this);

    /**
     * Manages the masks using the stencil buffer.
     *
     * @member {MaskManager}
     */
    this.maskManager = new MaskManager(this);

    /**
     * Manages the stencil buffer.
     *
     * @member {StencilManager}
     */
    this.stencilManager = new StencilManager(this);

    /**
     * Manages the filters.
     *
     * @member {FilterManager}
     */
    this.filterManager = new FilterManager(this);


    /**
     * Manages the blendModes
     * @member {BlendModeManager}
     */
    this.blendModeManager = new BlendModeManager(this);

    /**
     * Holds the current render target
     * @member {Object}
     */
    this.currentRenderTarget = this.renderTarget;

    /**
     * object renderer @alvin
     * @member {ObjectRenderer}
     */
    this.currentRenderer = new ObjectRenderer(this);

    this.initPlugins();

     // initialize the context so it is ready for the managers.
    this._initContext();

    // map some webGL blend modes..
    this._mapBlendModes();

    /**
     * An array of render targets
     * @member {Array}
     * @private
     */
    this._renderTargetStack = [];
}

// constructor
WebGLRenderer.prototype = Object.create(SystemRenderer.prototype);
WebGLRenderer.prototype.constructor = WebGLRenderer;
module.exports = WebGLRenderer;
utils.pluginTarget.mixin(WebGLRenderer);

WebGLRenderer.glContextId = 0;

/**
 * Creates the WebGL context
 * @private
 */
WebGLRenderer.prototype._initContext = function ()
{
    var gl = this.view.getContext('webgl', this._contextOptions) || this.view.getContext('experimental-webgl', this._contextOptions);
    this.gl = gl;

    if (!gl)
    {
        // fail, not able to get a context
        throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }

    this.glContextId = WebGLRenderer.glContextId++;
    gl.id = this.glContextId;
    gl.renderer = this;

    // set up the default pixi settings..
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);

    this.renderTarget = new RenderTarget(this.gl, this.width, this.height, null, this.resolution, true);

    this.emit('context', gl);

    // setup the width/height properties and gl viewport
    this.resize(this.width, this.height);

    if(!this._useFXAA)
    {
        this._useFXAA = ( this._contextOptions.antialias && ! gl.getContextAttributes().antialias );
    }


    if(this._useFXAA)
    {
        window.console.warn('FXAA antialiasing being used instead of native antialiasing');
        this._FXAAFilter = [new FXAAFilter()];
    }
};

/**
 * Renders the object to its webGL view
 *
 * @param object {DisplayObject} the object to be rendered
 */
WebGLRenderer.prototype.render = function (object)
{
    // no point rendering if our context has been blown up!
    if (this.gl.isContextLost())
    {
        return;
    }

    this._lastObjectRendered = object;

    if(this._useFXAA)
    {
        this._FXAAFilter[0].uniforms.resolution.value.x = this.width;
        this._FXAAFilter[0].uniforms.resolution.value.y = this.height;
        object.filterArea = this.renderTarget.size;
        object.filters = this._FXAAFilter;
    }

    var cacheParent = object.parent;
    object.parent = this._tempDisplayObjectParent;

    // update the scene graph
    object.updateTransform();

    object.parent = cacheParent;

    var gl = this.gl;

    // make sure we are bound to the main frame buffer
    this.setRenderTarget(this.renderTarget);

    if (this.clearBeforeRender)
    {
        if (this.transparent)
        {
            gl.clearColor(0, 0, 0, 0);
        }
        else
        {
            gl.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1);
        }

        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    this.renderDisplayObject(object, this.renderTarget);//this.projection);
};

/**
 * Renders a Display Object.
 *
 * @param displayObject {DisplayObject} The DisplayObject to render
 * @param renderTarget {RenderTarget} The render target to use to render this display object
 *
 */
WebGLRenderer.prototype.renderDisplayObject = function (displayObject, renderTarget)//projection, buffer)
{
    // TODO is this needed...
    //this.blendModeManager.setBlendMode(CONST.BLEND_MODES.NORMAL);
    this.setRenderTarget(renderTarget);

    // start the filter manager
    this.filterManager.setFilterStack( renderTarget.filterStack );

    // render the scene!
    displayObject.renderWebGL(this);

    // finish the current renderer..
    this.currentRenderer.flush();
};

/**
 * Changes the current renderer to the one given in parameter
 *
 * @param objectRenderer {Object} TODO @alvin
 *
 */
WebGLRenderer.prototype.setObjectRenderer = function (objectRenderer)
{
    if (this.currentRenderer === objectRenderer)
    {
        return;
    }

    this.currentRenderer.stop();
    this.currentRenderer = objectRenderer;
    this.currentRenderer.start();
};

/**
 * Changes the current render target to the one given in parameter
 *
 * @param renderTarget {RenderTarget} the new render target
 *
 */
WebGLRenderer.prototype.setRenderTarget = function (renderTarget)
{
    if( this.currentRenderTarget === renderTarget)
    {
        return;
    }
    // TODO - maybe down the line this should be a push pos thing? Leaving for now though.
    this.currentRenderTarget = renderTarget;
    this.currentRenderTarget.activate();
    this.stencilManager.setMaskStack( renderTarget.stencilMaskStack );
};


/**
 * Resizes the webGL view to the specified width and height.
 *
 * @param width {number} the new width of the webGL view
 * @param height {number} the new height of the webGL view
 */
WebGLRenderer.prototype.resize = function (width, height)
{
    SystemRenderer.prototype.resize.call(this, width, height);

   // console.log(width)
    this.filterManager.resize(width, height);
    this.renderTarget.resize(width, height);
    if(this.currentRenderTarget === this.renderTarget)
    {
        this.renderTarget.activate();
    }
};

/**
 * Updates and/or Creates a WebGL texture for the renderer's context.
 *
 * @param texture {BaseTexture|Texture} the texture to update
 */
WebGLRenderer.prototype.updateTexture = function (texture)
{
    texture = texture.baseTexture || texture;

    if (!texture.hasLoaded)
    {
        return;
    }

    var gl = this.gl;

    if (!texture._glTextures[gl.id])
    {
        texture._glTextures[gl.id] = gl.createTexture();
        texture.on('update', this._updateTextureBound);
        texture.on('dispose', this._destroyTextureBound);
    }


    gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);

    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);


    if (texture.mipmap && texture.isPowerOfTwo)
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
    }
    else
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
    }

    if (!texture.isPowerOfTwo)
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    else
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }

    return  texture._glTextures[gl.id];
};

/**
 * Deletes the texture from WebGL
 *
 * @param texture {BaseTexture|Texture} the texture to destroy
 */
WebGLRenderer.prototype.destroyTexture = function (texture)
{
    texture = texture.baseTexture || texture;

    if (!texture.hasLoaded)
    {
        return;
    }

    if (texture._glTextures[this.gl.id])
    {
        this.gl.deleteTexture(texture._glTextures[this.gl.id]);
    }
};

/**
 * Handles a lost webgl context
 *
 * @param event {Event}
 * @private
 */
WebGLRenderer.prototype.handleContextLost = function (event)
{
    event.preventDefault();
};

/**
 * Handles a restored webgl context
 *
 * @param event {Event}
 * @private
 */
WebGLRenderer.prototype.handleContextRestored = function ()
{
    this._initContext();

    // empty all the old gl textures as they are useless now
    for (var key in utils.BaseTextureCache)
    {
        utils.BaseTextureCache[key]._glTextures.length = 0;
    }
};

/**
 * Removes everything from the renderer (event listeners, spritebatch, etc...)
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
WebGLRenderer.prototype.destroy = function (removeView)
{
    this.destroyPlugins();

    // remove listeners
    this.view.removeEventListener('webglcontextlost', this.handleContextLost);
    this.view.removeEventListener('webglcontextrestored', this.handleContextRestored);

    // call base destroy
    SystemRenderer.prototype.destroy.call(this, removeView);

    this.uuid = 0;

    // destroy the managers
    this.shaderManager.destroy();
    this.maskManager.destroy();
    this.stencilManager.destroy();
    this.filterManager.destroy();

    this.shaderManager = null;
    this.maskManager = null;
    this.filterManager = null;
    this.blendModeManager = null;

    this.handleContextLost = null;
    this.handleContextRestored = null;

    this._contextOptions = null;

    this.drawCount = 0;

    this.gl = null;
};

/**
 * Maps Pixi blend modes to WebGL blend modes.
 *
 * @private
 */
WebGLRenderer.prototype._mapBlendModes = function ()
{
    var gl = this.gl;

    if (!this.blendModes)
    {
        this.blendModes = {};

        this.blendModes[CONST.BLEND_MODES.NORMAL]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.ADD]           = [gl.SRC_ALPHA, gl.DST_ALPHA];
        this.blendModes[CONST.BLEND_MODES.MULTIPLY]      = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.SCREEN]        = [gl.SRC_ALPHA, gl.ONE];
        this.blendModes[CONST.BLEND_MODES.OVERLAY]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.DARKEN]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.LIGHTEN]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.COLOR_DODGE]   = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.COLOR_BURN]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.HARD_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.DIFFERENCE]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.EXCLUSION]     = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.HUE]           = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.SATURATION]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.COLOR]         = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.LUMINOSITY]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    }
};

},{"../../const":3,"../../utils":57,"../SystemRenderer":23,"./filters/FXAAFilter":31,"./managers/BlendModeManager":33,"./managers/FilterManager":34,"./managers/MaskManager":35,"./managers/ShaderManager":36,"./managers/StencilManager":37,"./utils/ObjectRenderer":43,"./utils/RenderTarget":45}],30:[function(require,module,exports){
var DefaultShader = require('../shaders/TextureShader');

/**
 * This is the base class for creating a PIXI filter. Currently only WebGL supports filters.
 * If you want to make a custom filter this should be your base class.
 *
 * @class
 * @memberof PIXI
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param uniforms {object} An object containing the uniforms for this filter.
 */
function AbstractFilter(vertexSrc, fragmentSrc, uniforms)
{

    /**
     * An array of shaders
     * @member {Shader[]}
     * @private
     */
    this.shaders = [];

    /**
     * The extra padding that the filter might need
     * @member {number}
     */
    this.padding = 0;

    /**
     * The uniforms as an object
     * @member {object}
     * @private
     */
    this.uniforms = uniforms || {};


    /**
     * The code of the vertex shader
     * @member {string[]}
     * @private
     */
    this.vertexSrc = vertexSrc || DefaultShader.defaultVertexSrc;

    /**
     * The code of the frament shader
     * @member {string[]}
     * @private
     */
    this.fragmentSrc = fragmentSrc || DefaultShader.defaultFragmentSrc;

    //TODO a reminder - would be cool to have lower res filters as this would give better performance.

    //typeof fragmentSrc === 'string' ? fragmentSrc.split('') : (fragmentSrc || []);

}

AbstractFilter.prototype.constructor = AbstractFilter;
module.exports = AbstractFilter;

/*
 * Grabs a shader from the current renderer
 * @param renderer {WebGLRenderer} The renderer to retrieve the shader from
 *
 */
AbstractFilter.prototype.getShader = function (renderer)
{
    var gl = renderer.gl;

    var shader = this.shaders[gl.id];

    if (!shader)
    {
        shader = new DefaultShader(renderer.shaderManager,
            this.vertexSrc,
            this.fragmentSrc,
            this.uniforms,
            this.attributes
        );

        this.shaders[gl.id] = shader;
    }

    return shader;
};

/*
 * Applies the filter
 * @param renderer {WebGLRenderer} The renderer to retrieve the filter from
 * @param input {RenderTarget}
 * @param output {RenderTarget}
 * @param clear {boolean} Whether or not we want to clear the outputTarget
 */
AbstractFilter.prototype.applyFilter = function (renderer, input, output, clear)
{
    var shader = this.getShader(renderer);

    renderer.filterManager.applyFilter(shader, input, output, clear);
};

/**
 * Syncs a uniform between the class object and the shaders.
 *
 */
AbstractFilter.prototype.syncUniform = function (uniform)
{
    for (var i = 0, j = this.shaders.length; i < j; ++i)
    {
        this.shaders[i].syncUniform(uniform);
    }
};

/*
AbstractFilter.prototype.apply = function (frameBuffer)
{
    // TODO :)
};
*/

},{"../shaders/TextureShader":42}],31:[function(require,module,exports){
(function (__dirname){
var AbstractFilter = require('./AbstractFilter');

var fs = require('fs');

/**
 *
 * Basic FXAA implementation based on the code on geeks3d.com with the
 * modification that the texture2DLod stuff was removed since it's
 * unsupported by WebGL.
 *
 * --
 * From:
 * https://github.com/mitsuhiko/webgl-meincraft
 *
 * @class
 * @extends AbstractFilter
 * @memberof PIXI
 *
 */
function FXAAFilter()
{
    AbstractFilter.call(this,
        // vertex shader
        fs.readFileSync(__dirname + '/FXAA.vert', 'utf8'),
        // fragment shader
        fs.readFileSync(__dirname + '/FXAA.frag', 'utf8'),
        // uniforms
        {
            resolution: { type: 'v2', value: { x: 1, y: 1 } }
        }
    );

}

FXAAFilter.prototype = Object.create(AbstractFilter.prototype);
FXAAFilter.prototype.constructor = FXAAFilter;
module.exports = FXAAFilter;

FXAAFilter.prototype.applyFilter = function (renderer, input, output)
{
    var filterManager = renderer.filterManager;

    var shader = this.getShader( renderer );
     // draw the filter...
    filterManager.applyFilter(shader, input, output);
};

}).call(this,"/lib/pixi/src/core/renderers/webgl/filters")

},{"./AbstractFilter":30,"fs":60}],32:[function(require,module,exports){
(function (__dirname){
var AbstractFilter = require('./AbstractFilter'),
    math =  require('../../../math');

// fs needs to be decalred alone for brfs to pick it up properly.
var fs = require('fs');

/**
 * The SpriteMaskFilter class
 *
 * @class
 * @extends AbstractFilter
 * @memberof PIXI
 * @param sprite {Sprite} the target sprite
 */
function SpriteMaskFilter(sprite)
{
    var maskMatrix = new math.Matrix();

    AbstractFilter.call(this,
        fs.readFileSync(__dirname + '/spriteMaskFilter.vert', 'utf8'),
        fs.readFileSync(__dirname + '/spriteMaskFilter.frag', 'utf8'),
        {
            mask:           { type: 'sampler2D', value: sprite._texture },
            alpha:          { type: 'f', value: 1},
            otherMatrix:    { type: 'mat3', value: maskMatrix.toArray(true) }
        }
    );

    this.maskSprite = sprite;
    this.maskMatrix = maskMatrix;
}

SpriteMaskFilter.prototype = Object.create(AbstractFilter.prototype);
SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;
module.exports = SpriteMaskFilter;

/**
 * Applies the filter ? @alvin
 *
 * @param renderer {WebGLRenderer} A reference to the WebGL renderer
 * @param input {RenderTarget}
 * @param output {RenderTarget}
 */
SpriteMaskFilter.prototype.applyFilter = function (renderer, input, output)
{
    var filterManager = renderer.filterManager;

    this.uniforms.mask.value = this.maskSprite._texture;

    filterManager.calculateMappedMatrix(input.frame, this.maskSprite, this.maskMatrix);

    this.uniforms.otherMatrix.value = this.maskMatrix.toArray(true);
    this.uniforms.alpha.value = this.maskSprite.worldAlpha;

    var shader = this.getShader(renderer);
     // draw the filter...
    filterManager.applyFilter(shader, input, output);
};


Object.defineProperties(SpriteMaskFilter.prototype, {
    /**
     * The texture used for the displacement map. Must be power of 2 sized texture.
     *
     * @member {Texture}
     * @memberof SpriteMaskFilter#
     */
    map: {
        get: function ()
        {
            return this.uniforms.mask.value;
        },
        set: function (value)
        {
            this.uniforms.mask.value = value;
        }
    },

    /**
     * The offset used to move the displacement map.
     *
     * @member {Point}
     * @memberof SpriteMaskFilter#
     */
    offset: {
        get: function()
        {
            return this.uniforms.offset.value;
        },
        set: function(value)
        {
            this.uniforms.offset.value = value;
        }
    }
});

}).call(this,"/lib/pixi/src/core/renderers/webgl/filters")

},{"../../../math":13,"./AbstractFilter":30,"fs":60}],33:[function(require,module,exports){
var WebGLManager = require('./WebGLManager');

/**
 * @class
 * @memberof PIXI
 * @extends WebGlManager
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function BlendModeManager(renderer)
{
    WebGLManager.call(this, renderer);

    /**
     * @member {number}
     */
    this.currentBlendMode = 99999;
}

BlendModeManager.prototype = Object.create(WebGLManager.prototype);
BlendModeManager.prototype.constructor = BlendModeManager;
module.exports = BlendModeManager;

/**
 * Sets-up the given blendMode from WebGL's point of view.
 *
 * @param blendMode {number} the blendMode, should be a Pixi const, such as BlendModes.ADD
 */
BlendModeManager.prototype.setBlendMode = function (blendMode)
{
    if (this.currentBlendMode === blendMode)
    {
        return false;
    }

    this.currentBlendMode = blendMode;

    var mode = this.renderer.blendModes[this.currentBlendMode];
    this.renderer.gl.blendFunc(mode[0], mode[1]);

    return true;
};

},{"./WebGLManager":38}],34:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    RenderTarget = require('../utils/RenderTarget'),
    CONST = require('../../../const'),
    Quad = require('../utils/Quad'),
    math =  require('../../../math');

/**
 * @class
 * @memberof PIXI
 * @extends WebGLManager
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function FilterManager(renderer)
{
    WebGLManager.call(this, renderer);

    /**
     * @member {any[]}
     */
    this.filterStack = [];

    this.filterStack.push({
        renderTarget:renderer.currentRenderTarget,
        filter:[],
        bounds:null
    });

    /**
     * @member {any[]}
     */
    this.texturePool = [];

    // listen for context and update necessary buffers
    //TODO make this dynamic!
    //TODO test this out by forces power of two?
    this.textureSize = new math.Rectangle( 0, 0, renderer.width, renderer.height );

    this.currentFrame = null;
}

FilterManager.prototype = Object.create(WebGLManager.prototype);
FilterManager.prototype.constructor = FilterManager;
module.exports = FilterManager;


/**
 * Called when there is a WebGL context change.
 *
 */
FilterManager.prototype.onContextChange = function ()
{
    this.texturePool.length = 0;

    var gl = this.renderer.gl;
    this.quad = new Quad(gl);
};

/**
 * @param renderer {WebGLRenderer}
 * @param buffer {ArrayBuffer}
 */
FilterManager.prototype.setFilterStack = function ( filterStack )
{
    this.filterStack = filterStack;
};

/**
 * Applies the filter and adds it to the current filter stack.
 *
 * @param filterBlock {object} the filter that will be pushed to the current filter stack
 */
FilterManager.prototype.pushFilter = function (target, filters)
{
    // get the bounds of the object..
    var bounds = target.filterArea || target.getBounds();
    //bounds = bounds.clone();

    // round off the rectangle to get a nice smoooooooth filter :)
    bounds.x = bounds.x | 0;
    bounds.y = bounds.y | 0;
    bounds.width = bounds.width | 0;
    bounds.height = bounds.height | 0;


    // padding!
    var padding = filters[0].padding | 0;
    bounds.x -= padding;
    bounds.y -= padding;
    bounds.width += padding * 2;
    bounds.height += padding * 2;


    if(this.renderer.currentRenderTarget.transform)
    {
        //TODO this will break if the renderTexture transform is anything other than a translation.
        //Will need to take the full matrix transform into acount..
        var transform = this.renderer.currentRenderTarget.transform;

        bounds.x += transform.tx;
        bounds.y += transform.ty;

        this.capFilterArea( bounds );

        bounds.x -= transform.tx;
        bounds.y -= transform.ty;
    }
    else
    {
         this.capFilterArea( bounds );
    }


    this.currentFrame = bounds;

    var texture = this.getRenderTarget();

    this.renderer.setRenderTarget(texture);

    // clear the texture..
    texture.clear();

    // TODO get rid of object creation!
    this.filterStack.push({
        renderTarget: texture,
        filter: filters
    });

};


/**
 * Removes the last filter from the filter stack and returns it.
 *
 */
FilterManager.prototype.popFilter = function ()
{
    var filterData = this.filterStack.pop();
    var previousFilterData = this.filterStack[this.filterStack.length-1];

    var input = filterData.renderTarget;

    var output = previousFilterData.renderTarget;

    // use program
    var gl = this.renderer.gl;


    this.currentFrame = input.frame;

    this.quad.map(this.textureSize, input.frame);


    // TODO.. this probably only needs to be done once!
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);

    var filters = filterData.filter;

    // assuming all filters follow the correct format??
    gl.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 2 * 4 * 4);
    gl.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, gl.FLOAT, false, 0, 4 * 4 * 4);

    if (filters.length === 1)
    {
        // TODO (cengler) - There has to be a better way then setting this each time?
        if (filters[0].uniforms.dimensions)
        {
            filters[0].uniforms.dimensions.value[0] = this.renderer.width;
            filters[0].uniforms.dimensions.value[1] = this.renderer.height;
            filters[0].uniforms.dimensions.value[2] = this.quad.vertices[0];
            filters[0].uniforms.dimensions.value[3] = this.quad.vertices[5];
        }

        filters[0].applyFilter( this.renderer, input, output );
        this.returnRenderTarget( input );

    }
    else
    {
        var flipTexture = input;
        var flopTexture = this.getRenderTarget(true);

        for (var i = 0; i < filters.length-1; i++)
        {
            var filter = filters[i];

            // TODO (cengler) - There has to be a better way then setting this each time?
            if (filter.uniforms.dimensions)
            {
                filter.uniforms.dimensions.value[0] = this.renderer.width;
                filter.uniforms.dimensions.value[1] = this.renderer.height;
                filter.uniforms.dimensions.value[2] = this.quad.vertices[0];
                filter.uniforms.dimensions.value[3] = this.quad.vertices[5];
            }

            filter.applyFilter( this.renderer, flipTexture, flopTexture );

            var temp = flipTexture;
            flipTexture = flopTexture;
            flopTexture = temp;
        }

        filters[filters.length-1].applyFilter( this.renderer, flipTexture, output );

        this.returnRenderTarget( flipTexture );
        this.returnRenderTarget( flopTexture );
    }

    return filterData.filter;
};

/**
 * Grabs an render target from the internal pool
 *
 * @param clear {boolean} Whether or not we need to clear the RenderTarget
 * @return {RenderTarget}
 */
FilterManager.prototype.getRenderTarget = function ( clear )
{
    var renderTarget = this.texturePool.pop() || new RenderTarget(this.renderer.gl, this.textureSize.width, this.textureSize.height, CONST.SCALE_MODES.LINEAR, this.renderer.resolution * CONST.FILTER_RESOLUTION);
    renderTarget.frame = this.currentFrame;

    if (clear)
    {
        renderTarget.clear(true);
    }

    return renderTarget;
};

/*
 * Returns a RenderTarget to the internal pool
 * @param renderTarget {RenderTarget} The RenderTarget we want to return to the pool
 */
FilterManager.prototype.returnRenderTarget = function (renderTarget)
{
    this.texturePool.push( renderTarget );
};

/*
 * Applies the filter
 * @param shader {Shader} The shader to upload
 * @param inputTarget {RenderTarget}
 * @param outputTarget {RenderTarget}
 * @param clear {boolean} Whether or not we want to clear the outputTarget
 */
FilterManager.prototype.applyFilter = function (shader, inputTarget, outputTarget, clear)
{
    var gl = this.renderer.gl;

    this.renderer.setRenderTarget(outputTarget);

    if (clear)
    {
        outputTarget.clear();
    }

    // set the shader
    this.renderer.shaderManager.setShader(shader);

    // TODO (cengler) - Can this be cached and not `toArray`ed each frame?
    shader.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(true);

    //TODO can this be optimised?
    shader.syncUniforms();
/*
    gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(shader.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 2 * 4 * 4);
    gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false, 0, 4 * 4 * 4);
*/

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, inputTarget.texture);

    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );
};

/*
 * Calculates the mapped matrix
 * @param filterArea {Rectangle} The filter area
 * @param sprite {Sprite} the target sprite
 * @param outputMatrix {Matrix} @alvin
 */
// TODO playing around here.. this is temporary - (will end up in the shader)
FilterManager.prototype.calculateMappedMatrix = function (filterArea, sprite, outputMatrix)
{
    var worldTransform = sprite.worldTransform.copy(math.Matrix.TEMP_MATRIX),
    texture = sprite._texture.baseTexture;

    var mappedMatrix = outputMatrix.identity();

    // scale..
    var ratio = this.textureSize.height / this.textureSize.width;

    mappedMatrix.translate(filterArea.x / this.textureSize.width, filterArea.y / this.textureSize.height );

    mappedMatrix.scale(1 , ratio);

    var translateScaleX = (this.textureSize.width / texture.width);
    var translateScaleY = (this.textureSize.height / texture.height);

    worldTransform.tx /= texture.width * translateScaleX;
    worldTransform.ty /= texture.width * translateScaleX;

    worldTransform.invert();

    mappedMatrix.prepend(worldTransform);

    // apply inverse scale..
    mappedMatrix.scale(1 , 1/ratio);

    mappedMatrix.scale( translateScaleX , translateScaleY );

    mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);

    return mappedMatrix;

    // Keeping the orginal as a reminder to me on how this works!
    //
    // var m = new math.Matrix();

    // // scale..
    // var ratio = this.textureSize.height / this.textureSize.width;

    // m.translate(filterArea.x / this.textureSize.width, filterArea.y / this.textureSize.height);


    // m.scale(1 , ratio);


    // var transform = wt.clone();

    // var translateScaleX = (this.textureSize.width / 620);
    // var translateScaleY = (this.textureSize.height / 380);

    // transform.tx /= 620 * translateScaleX;
    // transform.ty /= 620 * translateScaleX;

    // transform.invert();

    // transform.append(m);

    // // apply inverse scale..
    // transform.scale(1 , 1/ratio);

    // transform.scale( translateScaleX , translateScaleY );

    // return transform;
};

/*
 * Constrains the filter area to the texture size
 * @param filterArea {Rectangle} The filter area we want to cap
 */
FilterManager.prototype.capFilterArea = function (filterArea)
{
    if (filterArea.x < 0)
    {
        filterArea.width += filterArea.x;
        filterArea.x = 0;
    }

    if (filterArea.y < 0)
    {
        filterArea.height += filterArea.y;
        filterArea.y = 0;
    }

    if ( filterArea.x + filterArea.width > this.textureSize.width )
    {
        filterArea.width = this.textureSize.width - filterArea.x;
    }

    if ( filterArea.y + filterArea.height > this.textureSize.height )
    {
        filterArea.height = this.textureSize.height - filterArea.y;
    }
};

/*
 * Resizes all the render targets in the pool
 * @param width {number} the new width
 * @param height {number} the new height
 */
FilterManager.prototype.resize = function ( width, height )
{
    this.textureSize.width = width;
    this.textureSize.height = height;

    for (var i = 0; i < this.texturePool.length; i++)
    {
        this.texturePool[i].resize( width, height );
    }
};

/**
 * Destroys the filter and removes it from the filter stack.
 *
 */
FilterManager.prototype.destroy = function ()
{
    this.filterStack = null;
    this.offsetY = 0;

    // destroy textures
    for (var i = 0; i < this.texturePool.length; i++)
    {
        this.texturePool[i].destroy();
    }

    this.texturePool = null;
};

},{"../../../const":3,"../../../math":13,"../utils/Quad":44,"../utils/RenderTarget":45,"./WebGLManager":38}],35:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    AlphaMaskFilter = require('../filters/SpriteMaskFilter');

/**
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function MaskManager(renderer)
{
    WebGLManager.call(this, renderer);

    this.stencilStack = [];
    this.reverse = true;
    this.count = 0;

    this.alphaMaskPool = [];
}

MaskManager.prototype = Object.create(WebGLManager.prototype);
MaskManager.prototype.constructor = MaskManager;
module.exports = MaskManager;

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param graphics {Graphics}
 * @param webGLData {any[]}
 */
MaskManager.prototype.pushMask = function (target, maskData)
{
    if (maskData.texture)
    {
        this.pushSpriteMask(target, maskData);
    }
    else
    {
        this.pushStencilMask(target, maskData);
    }

};

/**
 * Removes the last mask from the mask stack and doesn't return it.
 * 
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.popMask = function (target, maskData)
{
    if (maskData.texture)
    {
        this.popSpriteMask(target, maskData);
    }
    else
    {
        this.popStencilMask(target, maskData);
    }
};

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.pushSpriteMask = function (target, maskData)
{
    var alphaMaskFilter = this.alphaMaskPool.pop();

    if (!alphaMaskFilter)
    {
        alphaMaskFilter = [new AlphaMaskFilter(maskData)];
    }

    this.renderer.filterManager.pushFilter(target, alphaMaskFilter);
};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 *
 */
MaskManager.prototype.popSpriteMask = function ()
{
    var filters = this.renderer.filterManager.popFilter();

    this.alphaMaskPool.push(filters);
};


/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.pushStencilMask = function (target, maskData)
{
    this.renderer.stencilManager.pushMask(maskData);
};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.popStencilMask = function (target, maskData)
{
    this.renderer.stencilManager.popMask(maskData);
};


},{"../filters/SpriteMaskFilter":32,"./WebGLManager":38}],36:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    TextureShader = require('../shaders/TextureShader'),
    ComplexPrimitiveShader = require('../shaders/ComplexPrimitiveShader'),
    PrimitiveShader = require('../shaders/PrimitiveShader'),
    utils = require('../../../utils');

/**
 * @class
 * @memberof PIXI
 * @extends WebGLManager
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function ShaderManager(renderer)
{
    WebGLManager.call(this, renderer);

    /**
     * @member {number}
     */
    this.maxAttibs = 10;

    /**
     * @member {any[]}
     */
    this.attribState = [];

    /**
     * @member {any[]}
     */
    this.tempAttribState = [];

    for (var i = 0; i < this.maxAttibs; i++)
    {
        this.attribState[i] = false;
    }

    /**
     * @member {any[]}
     */
    this.stack = [];

    /**
     * @member {number}
     * @private
     */
    this._currentId = -1;

    /**
     * @member {Shader}
     * @private
     */
    this.currentShader = null;

//    this.initPlugins();
}

ShaderManager.prototype = Object.create(WebGLManager.prototype);
ShaderManager.prototype.constructor = ShaderManager;
utils.pluginTarget.mixin(ShaderManager);

module.exports = ShaderManager;

/**
 * Called when there is a WebGL context change.
 *
 */
ShaderManager.prototype.onContextChange = function ()
{
    this.initPlugins();

    // TODO - Why are these not plugins? We can't decouple primitives unless they are....
    this.defaultShader = new TextureShader(this);
    this.primitiveShader = new PrimitiveShader(this);
    this.complexPrimitiveShader = new ComplexPrimitiveShader(this);
};

/**
 * Takes the attributes given in parameters and uploads them.
 *
 * @param attribs {Array} attribs
 */
ShaderManager.prototype.setAttribs = function (attribs)
{
    // reset temp state
    var i;

    for (i = 0; i < this.tempAttribState.length; i++)
    {
        this.tempAttribState[i] = false;
    }

    // set the new attribs
    for (var a in attribs)
    {
        this.tempAttribState[attribs[a]] = true;
    }

    var gl = this.renderer.gl;

    for (i = 0; i < this.attribState.length; i++)
    {
        if (this.attribState[i] !== this.tempAttribState[i])
        {
            this.attribState[i] = this.tempAttribState[i];

            if (this.attribState[i])
            {
                gl.enableVertexAttribArray(i);
            }
            else
            {
                gl.disableVertexAttribArray(i);
            }
        }
    }
};

/**
 * Sets the current shader.
 *
 * @param shader {Shader} the shader to upload
 */
ShaderManager.prototype.setShader = function (shader)
{
    if (this._currentId === shader.uuid)
    {
        return false;
    }

    this._currentId = shader.uuid;

    this.currentShader = shader;

    this.renderer.gl.useProgram(shader.program);
    this.setAttribs(shader.attributes);

    return true;
};

/**
 * Destroys this object.
 *
 */
ShaderManager.prototype.destroy = function ()
{
    WebGLManager.prototype.destroy.call(this);

    this.destroyPlugins();

    this.attribState = null;

    this.tempAttribState = null;
};

},{"../../../utils":57,"../shaders/ComplexPrimitiveShader":39,"../shaders/PrimitiveShader":40,"../shaders/TextureShader":42,"./WebGLManager":38}],37:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    utils = require('../../../utils');

/**
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLMaskManager(renderer)
{
    WebGLManager.call(this, renderer);
    this.stencilMaskStack = null;
}

WebGLMaskManager.prototype = Object.create(WebGLManager.prototype);
WebGLMaskManager.prototype.constructor = WebGLMaskManager;
module.exports = WebGLMaskManager;

/**
 * Changes the mask stack that is used by this manager
 * @param stencilMaskStack {StencilMaskStack} The mask stack 
 *
 */
WebGLMaskManager.prototype.setMaskStack = function ( stencilMaskStack )
{
    this.stencilMaskStack = stencilMaskStack;

    var gl = this.renderer.gl;

    if (stencilMaskStack.stencilStack.length === 0)
    {
        gl.disable(gl.STENCIL_TEST);
    }
    else
    {
        gl.enable(gl.STENCIL_TEST);
    }
};

/**
 * Applies the Mask and adds it to the current filter stack. @alvin
 * 
 * @param graphics {Graphics}
 * @param webGLData {any[]}
 */
WebGLMaskManager.prototype.pushStencil = function (graphics, webGLData)
{
    this.renderer.currentRenderTarget.attachStencilBuffer();

    var gl = this.renderer.gl,
        sms = this.stencilMaskStack;

    this.bindGraphics(graphics, webGLData, this.renderer);

    if (sms.stencilStack.length === 0)
    {
        gl.enable(gl.STENCIL_TEST);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        sms.reverse = true;
        sms.count = 0;
    }

    sms.stencilStack.push(webGLData);

    var level = sms.count;

    gl.colorMask(false, false, false, false);

    gl.stencilFunc(gl.ALWAYS,0,0xFF);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

    // draw the triangle strip!

    if (webGLData.mode === 1)
    {
        gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );

        if (sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        // draw a quad to increment..
        gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

        if (sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }

        sms.reverse = !sms.reverse;
    }
    else
    {
        if (!sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

        if (!sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }
    }

    gl.colorMask(true, true, true, true);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);

    sms.count++;
};

/**
 * TODO this does not belong here!
 *
 * @param graphics {Graphics}
 * @param webGLData {Array}
 */
WebGLMaskManager.prototype.bindGraphics = function (graphics, webGLData)
{
    //if (this._currentGraphics === graphics)return;
    this._currentGraphics = graphics;

    var gl = this.renderer.gl;

     // bind the graphics object..
    var shader;// = this.renderer.shaderManager.plugins.primitiveShader;

    if (webGLData.mode === 1)
    {
        shader = this.renderer.shaderManager.complexPrimitiveShader;

        this.renderer.shaderManager.setShader(shader);

        gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));

        gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));

        gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));

        gl.uniform3fv(shader.uniforms.color._location, webGLData.color);

        gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 2, 0);


        // now do the rest..
        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
    else
    {
        //this.renderer.shaderManager.activatePrimitiveShader();
        shader = this.renderer.shaderManager.primitiveShader;

        this.renderer.shaderManager.setShader( shader );

        gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));

        gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));

        gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));

        gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
        gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false,4 * 6, 2 * 4);

        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
};

/**
 * TODO @alvin
 * @param graphics {Graphics}
 * @param webGLData {Array}
 */
WebGLMaskManager.prototype.popStencil = function (graphics, webGLData)
{
    var gl = this.renderer.gl,
        sms = this.stencilMaskStack;

    sms.stencilStack.pop();

    sms.count--;

    if (sms.stencilStack.length === 0)
    {
        // the stack is empty!
        gl.disable(gl.STENCIL_TEST);

    }
    else
    {

        var level = sms.count;

        this.bindGraphics(graphics, webGLData, this.renderer);

        gl.colorMask(false, false, false, false);

        if (webGLData.mode === 1)
        {
            sms.reverse = !sms.reverse;

            if (sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            // draw a quad to increment..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

            gl.stencilFunc(gl.ALWAYS,0,0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

            // draw the triangle strip!
            gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );

            if (!sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }

        }
        else
        {
          //  console.log("<<>>")
            if (!sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

            if (!sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }
        }

        gl.colorMask(true, true, true, true);
        gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);


    }
};

/**
 * Destroys the mask stack.
 *
 */
WebGLMaskManager.prototype.destroy = function ()
{
    WebGLManager.prototype.destroy.call(this);

    this.stencilMaskStack.stencilStack = null;
};

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param maskData {any[]} The mask data structure to use
 */
WebGLMaskManager.prototype.pushMask = function (maskData)
{


    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

    if (maskData.dirty)
    {
        this.renderer.plugins.graphics.updateGraphics(maskData, this.renderer.gl);
    }

    if (!maskData._webGL[this.renderer.gl.id].data.length)
    {
        return;
    }

    this.pushStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0], this.renderer);
};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 *
 * @param maskData {any[]}
 */
WebGLMaskManager.prototype.popMask = function (maskData)
{
    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

    this.popStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0], this.renderer);
};


},{"../../../utils":57,"./WebGLManager":38}],38:[function(require,module,exports){
/**
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLManager(renderer)
{
    /**
     * The renderer this manager works for.
     *
     * @member {WebGLRenderer}
     */
    this.renderer = renderer;

    var self = this;
    this.renderer.on('context', this._onContextChangeFn = function(){

    	self.onContextChange();

    });
}

WebGLManager.prototype.constructor = WebGLManager;
module.exports = WebGLManager;

/**
 * Generic method called when there is a WebGL context change.
 *
 */
WebGLManager.prototype.onContextChange = function ()
{
	// do some codes init!
};

/**
 * Generic destroy methods to be overridden by the subclass
 *
 */
WebGLManager.prototype.destroy = function ()
{
    this.renderer.off('context', this._onContextChangeFn);

    this.renderer = null;
};

},{}],39:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @memberof PIXI
 * @extends Shader
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 */
function ComplexPrimitiveShader(shaderManager)
{
    Shader.call(this,
        shaderManager,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',

            'uniform mat3 translationMatrix;',
            'uniform mat3 projectionMatrix;',

            'uniform vec3 tint;',
            'uniform float alpha;',
            'uniform vec3 color;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
            '   vColor = vec4(color * alpha * tint, alpha);',//" * vec4(tint * alpha, alpha);',
            '}'
        ].join('\n'),
        // fragment shader
        [
            'precision mediump float;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_FragColor = vColor;',
            '}'
        ].join('\n'),
        // custom uniforms
        {
            tint:   { type: '3f', value: [0, 0, 0] },
            alpha:  { type: '1f', value: 0 },
            color:  { type: '3f', value: [0,0,0] },
            translationMatrix: { type: 'mat3', value: new Float32Array(9) },
            projectionMatrix: { type: 'mat3', value: new Float32Array(9) }
        },
        // attributes
        {
            aVertexPosition:0
        }
    );
}

ComplexPrimitiveShader.prototype = Object.create(Shader.prototype);
ComplexPrimitiveShader.prototype.constructor = ComplexPrimitiveShader;
module.exports = ComplexPrimitiveShader;

},{"./Shader":41}],40:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @memberof PIXI
 * @extends Shader
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 */
function PrimitiveShader(shaderManager)
{
    Shader.call(this,
        shaderManager,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            'attribute vec4 aColor;',

            'uniform mat3 translationMatrix;',
            'uniform mat3 projectionMatrix;',

            'uniform float alpha;',
            'uniform float flipY;',
            'uniform vec3 tint;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
            '   vColor = aColor * vec4(tint * alpha, alpha);',
            '}'
        ].join('\n'),
        // fragment shader
        [
            'precision mediump float;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_FragColor = vColor;',
            '}'
        ].join('\n'),
        // custom uniforms
        {
            tint:   { type: '3f', value: [0, 0, 0] },
            alpha:  { type: '1f', value: 0 },
            translationMatrix: { type: 'mat3', value: new Float32Array(9) },
            projectionMatrix: { type: 'mat3', value: new Float32Array(9) }
        },
        // custom attributes
        {
            aVertexPosition:0,
            aColor:0
        }
    );
}

PrimitiveShader.prototype = Object.create(Shader.prototype);
PrimitiveShader.prototype.constructor = PrimitiveShader;
module.exports = PrimitiveShader;

},{"./Shader":41}],41:[function(require,module,exports){
var utils = require('../../../utils'),
    CONST = require('../../../const');

/**
 * @class
 * @memberof PIXI
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 * @param [vertexSrc] {string} The source of the vertex shader.
 * @param [fragmentSrc] {string} The source of the fragment shader.
 * @param [uniforms] {object} Uniforms for this shader.
 * @param [attributes] {object} Attributes for this shader.
 */
function Shader(shaderManager, vertexSrc, fragmentSrc, uniforms, attributes)
{
    if (!vertexSrc || !fragmentSrc)
    {
         throw new Error('Pixi.js Error. Shader requires vertexSrc and fragmentSrc');
    }

    /**
     * A unique id
     * @member {number}
     * @readonly
     */
    this.uuid = utils.uuid();

    /**
     * The current WebGL drawing context
     * @member {WebGLRenderingContext}
     * @readonly
     */
    this.gl = shaderManager.renderer.gl;

    //TODO maybe we should pass renderer rather than shader manger?? food for thought..
    this.shaderManager = shaderManager;

    /**
     * The WebGL program.
     *
     * @member {WebGLProgram}
     * @readonly
     */
    this.program = null;

    /**
     * The uniforms as an object
     * @member {object}
     * @private
     */
    this.uniforms = uniforms || {};

    /**
     * The attributes as an object
     * @member {object}
     * @private
     */
    this.attributes = attributes || {};

    /**
     * Internal texture counter
     * @member {number}
     * @private
     */
    this.textureCount = 1;

    /**
     * The vertex shader as an array of strings
     *
     * @member {string}
     */
    this.vertexSrc = vertexSrc;

    /**
     * The fragment shader as an array of strings
     *
     * @member {string}
     */
    this.fragmentSrc = fragmentSrc;

    this.init();
}

Shader.prototype.constructor = Shader;
module.exports = Shader;

/*
 * Creates the shader and uses it
 *
 */
Shader.prototype.init = function ()
{
    this.compile();

    this.gl.useProgram(this.program);

    this.cacheUniformLocations(Object.keys(this.uniforms));
    this.cacheAttributeLocations(Object.keys(this.attributes));
};

/*
 * Caches the locations of the uniform for reuse
 * @param keys {string} the uniforms to cache
 */
Shader.prototype.cacheUniformLocations = function (keys)
{
    for (var i = 0; i < keys.length; ++i)
    {
        this.uniforms[keys[i]]._location = this.gl.getUniformLocation(this.program, keys[i]);
    }
};

/*
 * Caches the locations of the attribute for reuse
 * @param keys {string} the attributes to cache
 */
Shader.prototype.cacheAttributeLocations = function (keys)
{
    for (var i = 0; i < keys.length; ++i)
    {
        this.attributes[keys[i]] = this.gl.getAttribLocation(this.program, keys[i]);
    }

    // TODO: Check if this is needed anymore...

    // Begin worst hack eva //

    // WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?
    // maybe its something to do with the current state of the gl context.
    // I'm convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel
    // If theres any webGL people that know why could happen please help :)
    // if (this.attributes.aColor === -1){
    //     this.attributes.aColor = 2;
    // }

    // End worst hack eva //
};

/*
 * Attaches the shaders and creates the program
 * @return {WebGLProgram}
 */
Shader.prototype.compile = function ()
{
    var gl = this.gl;

    var glVertShader = this._glCompile(gl.VERTEX_SHADER, this.vertexSrc);
    var glFragShader = this._glCompile(gl.FRAGMENT_SHADER, this.fragmentSrc);

    var program = gl.createProgram();

    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);
    gl.linkProgram(program);

    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    {
        console.error('Pixi.js Error: Could not initialize shader.');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());

        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '')
        {
            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
    }

    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);

    return (this.program = program);
};

/*
Shader.prototype.buildSync = function ()
{
   // var str = ""

   // str =  "Shader.prototype.syncUniforms = function()";
   // str += "{\n";

    for (var key in this.uniforms)
    {
        var uniform = this.uniforms[key];

        Object.defineProperty(this, key, {

            get: function ()
            {
                return uniform.value
            },
            set: function (value)
            {
                this.setUniform(uniform, value);
            }
        });

        console.log( makePropSetter( key, " bloop", uniform.type )  )
  //      Object.def
        //    location = uniform._location,
          //  value = uniform.value,
            //i, il;

    //    str += "gl.uniform1i(this.uniforms."+ key +"._location, this.uniforms." + key + ".value );\n"

    }

}*/

/**
* Adds a new uniform
*
* @param uniform {Object} the new uniform to attach
*/
Shader.prototype.syncUniform = function (uniform)
{
    var location = uniform._location,
        value = uniform.value,
        gl = this.gl,
        i, il;

    switch (uniform.type)
    {
        // single int value
        case 'i':
        case '1i':
            gl.uniform1i(location, value);
            break;

        // single float value
        case 'f':
        case '1f':
            gl.uniform1f(location, value);
            break;

        // Float32Array(2) or JS Arrray
        case '2f':
            gl.uniform2f(location, value[0], value[1]);
            break;

        // Float32Array(3) or JS Arrray
        case '3f':
            gl.uniform3f(location, value[0], value[1], value[2]);
            break;

        // Float32Array(4) or JS Arrray
        case '4f':
            gl.uniform4f(location, value[0], value[1], value[2], value[3]);
            break;

        // a 2D Point object
        case 'v2':
            gl.uniform2f(location, value.x, value.y);
            break;

        // a 3D Point object
        case 'v3':
            gl.uniform3f(location, value.x, value.y, value.z);
            break;

        // a 4D Point object
        case 'v4':
            gl.uniform4f(location, value.x, value.y, value.z, value.w);
            break;

        // Int32Array or JS Array
        case '1iv':
            gl.uniform1iv(location, value);
            break;

        // Int32Array or JS Array
        case '2iv':
            gl.uniform2iv(location, value);
            break;

        // Int32Array or JS Array
        case '3iv':
            gl.uniform3iv(location, value);
            break;

        // Int32Array or JS Array
        case '4iv':
            gl.uniform4iv(location, value);
            break;

        // Float32Array or JS Array
        case '1fv':
            gl.uniform1fv(location, value);
            break;

        // Float32Array or JS Array
        case '2fv':
            gl.uniform2fv(location, value);
            break;

        // Float32Array or JS Array
        case '3fv':
            gl.uniform3fv(location, value);
            break;

        // Float32Array or JS Array
        case '4fv':
            gl.uniform4fv(location, value);
            break;

        // Float32Array or JS Array
        case 'm2':
        case 'mat2':
        case 'Matrix2fv':
            gl.uniformMatrix2fv(location, uniform.transpose, value);
            break;

        // Float32Array or JS Array
        case 'm3':
        case 'mat3':
        case 'Matrix3fv':

            gl.uniformMatrix3fv(location, uniform.transpose, value);
            break;

        // Float32Array or JS Array
        case 'm4':
        case 'mat4':
        case 'Matrix4fv':
            gl.uniformMatrix4fv(location, uniform.transpose, value);
            break;

        // a Color Value
        case 'c':
            if (typeof value === 'number')
            {
                value = utils.hex2rgb(value);
            }

            gl.uniform3f(location, value[0], value[1], value[2]);
            break;

        // flat array of integers (JS or typed array)
        case 'iv1':
            gl.uniform1iv(location, value);
            break;

        // flat array of integers with 3 x N size (JS or typed array)
        case 'iv':
            gl.uniform3iv(location, value);
            break;

        // flat array of floats (JS or typed array)
        case 'fv1':
            gl.uniform1fv(location, value);
            break;

        // flat array of floats with 3 x N size (JS or typed array)
        case 'fv':
            gl.uniform3fv(location, value);
            break;

        // array of 2D Point objects
        case 'v2v':
            if (!uniform._array)
            {
                uniform._array = new Float32Array(2 * value.length);
            }

            for (i = 0, il = value.length; i < il; ++i)
            {
                uniform._array[i * 2]       = value[i].x;
                uniform._array[i * 2 + 1]   = value[i].y;
            }

            gl.uniform2fv(location, uniform._array);
            break;

        // array of 3D Point objects
        case 'v3v':
            if (!uniform._array)
            {
                uniform._array = new Float32Array(3 * value.length);
            }

            for (i = 0, il = value.length; i < il; ++i)
            {
                uniform._array[i * 3]       = value[i].x;
                uniform._array[i * 3 + 1]   = value[i].y;
                uniform._array[i * 3 + 2]   = value[i].z;

            }

            gl.uniform3fv(location, uniform._array);
            break;

        // array of 4D Point objects
        case 'v4v':
            if (!uniform._array)
            {
                uniform._array = new Float32Array(4 * value.length);
            }

            for (i = 0, il = value.length; i < il; ++i)
            {
                uniform._array[i * 4]       = value[i].x;
                uniform._array[i * 4 + 1]   = value[i].y;
                uniform._array[i * 4 + 2]   = value[i].z;
                uniform._array[i * 4 + 3]   = value[i].w;

            }

            gl.uniform4fv(location, uniform._array);
            break;

        // PIXI.Texture
        case 't':
        case 'sampler2D':

            if (!uniform.value || !uniform.value.baseTexture.hasLoaded)
            {
                break;
            }

            // activate this texture
            gl.activeTexture(gl['TEXTURE' + this.textureCount]);

            var texture = uniform.value.baseTexture._glTextures[gl.id];

            if (!texture)
            {
                this.initSampler2D(uniform);
            }

            // bind the texture
            gl.bindTexture(gl.TEXTURE_2D, texture);

            // set uniform to texture index
            gl.uniform1i(uniform._location, this.textureCount);

            // increment next texture id
            this.textureCount++;

            break;

        default:
            window.console.warn('Pixi.js Shader Warning: Unknown uniform type: ' + uniform.type);
    }
};

/*
 * Updates the shader uniform values.
 */
Shader.prototype.syncUniforms = function ()
{
    this.textureCount = 1;

    for (var key in this.uniforms)
    {
        this.syncUniform(this.uniforms[key]);
    }
};


/**
 * Initialises a Sampler2D uniform (which may only be available later on after initUniforms once the texture has loaded)
 *
 */
Shader.prototype.initSampler2D = function (uniform)
{
    var gl = this.gl;

    var texture = uniform.value.baseTexture;

    if(!texture.hasLoaded)
    {
        return;
    }



    if (uniform.textureData)
    {

        //TODO move this...
        var data = uniform.textureData;

        texture._glTextures[gl.id] = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);
        // GLTexture = mag linear, min linear_mipmap_linear, wrap repeat + gl.generateMipmap(gl.TEXTURE_2D);
        // GLTextureLinear = mag/min linear, wrap clamp
        // GLTextureNearestRepeat = mag/min NEAREST, wrap repeat
        // GLTextureNearest = mag/min nearest, wrap clamp
        // AudioTexture = whatever + luminance + width 512, height 2, border 0
        // KeyTexture = whatever + luminance + width 256, height 2, border 0

        //  magFilter can be: gl.LINEAR, gl.LINEAR_MIPMAP_LINEAR or gl.NEAREST
        //  wrapS/T can be: gl.CLAMP_TO_EDGE or gl.REPEAT

        gl.texImage2D(gl.TEXTURE_2D, 0, data.luminance ? gl.LUMINANCE : gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, data.magFilter ? data.magFilter : gl.LINEAR );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, data.wrapS ? data.wrapS : gl.CLAMP_TO_EDGE );

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, data.wrapS ? data.wrapS : gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, data.wrapT ? data.wrapT : gl.CLAMP_TO_EDGE);
    }
    else
    {
        this.shaderManager.renderer.updateTexture(texture);
    }
};

/**
 * Destroys the shader.
 *
 */
Shader.prototype.destroy = function ()
{
    this.gl.deleteProgram(this.program);

    this.gl = null;
    this.uniforms = null;
    this.attributes = null;

    this.vertexSrc = null;
    this.fragmentSrc = null;
};

Shader.prototype._glCompile = function (type, src)
{
    var shader = this.gl.createShader(type);

    this.gl.shaderSource(shader, src);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
    {
        window.console.log(this.gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
};

},{"../../../const":3,"../../../utils":57}],42:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @memberof PIXI
 * @extends Shader
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 * @param [vertexSrc] {string} The source of the vertex shader.
 * @param [fragmentSrc] {string} The source of the fragment shader.
 * @param [customUniforms] {object} Custom uniforms to use to augment the built-in ones.
 * @param [fragmentSrc] {string} The source of the fragment shader.
 */
function TextureShader(shaderManager, vertexSrc, fragmentSrc, customUniforms, customAttributes)
{
    var uniforms = {

        uSampler:           { type: 'sampler2D', value: 0 },
        projectionMatrix:   { type: 'mat3', value: new Float32Array(1, 0, 0,
                                                                    0, 1, 0,
                                                                    0, 0, 1) }
    };

    if (customUniforms)
    {
        for (var u in customUniforms)
        {
            uniforms[u] = customUniforms[u];
        }
    }


    var attributes = {
        aVertexPosition:    0,
        aTextureCoord:      0,
        aColor:             0
    };

    if (customAttributes)
    {
        for (var a in customAttributes)
        {
            attributes[a] = customAttributes[a];
        }
    }

    /**
     * The vertex shader.
     * @member {Array}
     */
    vertexSrc = vertexSrc || TextureShader.defaultVertexSrc;

    /**
     * The fragment shader.
     * @member {Array}
     */
    fragmentSrc = fragmentSrc || TextureShader.defaultFragmentSrc;

    Shader.call(this, shaderManager, vertexSrc, fragmentSrc, uniforms, attributes);
}

// constructor
TextureShader.prototype = Object.create(Shader.prototype);
TextureShader.prototype.constructor = TextureShader;
module.exports = TextureShader;

TextureShader.defaultVertexSrc = [
    'precision lowp float;',
    'attribute vec2 aVertexPosition;',
    'attribute vec2 aTextureCoord;',
    'attribute vec4 aColor;',

    'uniform mat3 projectionMatrix;',

    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',

    'void main(void){',
    '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
    '   vTextureCoord = aTextureCoord;',
    '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);',
    '}'
].join('\n');

TextureShader.defaultFragmentSrc = [
    'precision lowp float;',

    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',

    'uniform sampler2D uSampler;',

    'void main(void){',
    '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
    '}'
].join('\n');

},{"./Shader":41}],43:[function(require,module,exports){
var WebGLManager = require('../managers/WebGLManager');

/**
 * Base for a common object renderer that can be used as a system renderer plugin.
 *
 * @class
 * @extends WebGLManager
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this object renderer works for.
 */
function ObjectRenderer(renderer)
{
    WebGLManager.call(this, renderer);
}


ObjectRenderer.prototype = Object.create(WebGLManager.prototype);
ObjectRenderer.prototype.constructor = ObjectRenderer;
module.exports = ObjectRenderer;

/**
 * Starts the renderer and sets the shader
 *
 */
ObjectRenderer.prototype.start = function ()
{
    // set the shader..
};

/**
 * Stops the renderer
 *
 */
ObjectRenderer.prototype.stop = function ()
{
    this.flush();
};

/**
 * flushes
 *
 */
ObjectRenderer.prototype.flush = function ()
{
    // flush!
};

/**
 * Renders an object
 *
 */
ObjectRenderer.prototype.render = function (object)
{
    // render the object
};

},{"../managers/WebGLManager":38}],44:[function(require,module,exports){
/**
 * Helper class to create a quad
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The gl context for this quad to use.
 */
function Quad(gl)
{
    /*
     * the current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

//    this.textures = new TextureUvs();

    /**
     * An array of vertices
     *
     * @member {Float32Array}
     */
    this.vertices = new Float32Array([
        0,0,
        200,0,
        200,200,
        0,200
    ]);

    /**
     * The Uvs of the quad
     *
     * @member {Float32Array}
     */
    this.uvs = new Float32Array([
        0,0,
        1,0,
        1,1,
        0,1
    ]);

//    var white = (0xFFFFFF >> 16) + (0xFFFFFF & 0xff00) + ((0xFFFFFF & 0xff) << 16) + (1 * 255 << 24);
    //TODO convert this to a 32 unsigned int array
    /**
     * The color components of the triangles
     *
     * @member {Float32Array}
     */
    this.colors = new Float32Array([
        1,1,1,1,
        1,1,1,1,
        1,1,1,1,
        1,1,1,1
    ]);

    /*
     * @member {Uint16Array} An array containing the indices of the vertices
     */
    this.indices = new Uint16Array([
        0, 1, 2, 0, 3, 2
    ]);

    /*
     * @member {WebGLBuffer} The vertex buffer
     */
    this.vertexBuffer = gl.createBuffer();

    /*
     * @member {WebGLBuffer} The index buffer
     */
    this.indexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, (8 + 8 + 16) * 4, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    this.upload();
}

Quad.prototype.constructor = Quad;

/**
 * Maps two Rectangle to the quad
 * @param rect {Rectangle} the first rectangle
 * @param rect2 {Rectangle} the second rectangle
 */
Quad.prototype.map = function(rect, rect2)
{
    var x = 0; //rect2.x / rect.width;
    var y = 0; //rect2.y / rect.height;

    this.uvs[0] = x;
    this.uvs[1] = y;

    this.uvs[2] = x + rect2.width / rect.width;
    this.uvs[3] = y;

    this.uvs[4] = x + rect2.width / rect.width;
    this.uvs[5] = y + rect2.height / rect.height;

    this.uvs[6] = x;
    this.uvs[7] = y + rect2.height / rect.height;

    /// -----
    x = rect2.x;
    y = rect2.y;

    this.vertices[0] = x;
    this.vertices[1] = y;

    this.vertices[2] = x + rect2.width;
    this.vertices[3] = y;

    this.vertices[4] = x + rect2.width;
    this.vertices[5] = y + rect2.height;

    this.vertices[6] = x;
    this.vertices[7] = y + rect2.height;

    this.upload();
};

/**
 * Binds the buffer and uploads the data
 */
Quad.prototype.upload = function()
{
    var gl = this.gl;

    // TODO could probably be pushed into one upload!
    gl.bindBuffer( gl.ARRAY_BUFFER, this.vertexBuffer );

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);

    gl.bufferSubData(gl.ARRAY_BUFFER, 8 * 4, this.uvs);

    gl.bufferSubData(gl.ARRAY_BUFFER, (8 + 8) * 4, this.colors);
};

module.exports = Quad;



},{}],45:[function(require,module,exports){
var math = require('../../../math'),
    utils = require('../../../utils'),
    CONST = require('../../../const'),
    //StencilManager = require('../managers/StencilManager'),
    StencilMaskStack = require('./StencilMaskStack');

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 * @param width {number} the horizontal range of the filter
 * @param height {number} the vertical range of the filter
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @param resolution {number} the current resolution
 * @param root {boolean} Whether this object is the root element or not
 */
var RenderTarget = function(gl, width, height, scaleMode, resolution, root)
{
    //TODO Resolution could go here ( eg low res blurs )

    /**
     * The current WebGL drawing context
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    // next time to create a frame buffer and texture

    /**
     * A frame buffer
     * @member {WebGLFrameBuffer}
     */
    this.frameBuffer = null;

    /**
     * @member {Texture}
     */
    this.texture = null;

    /**
     * The size of the object as a rectangle
     * @member {Rectangle}
     */
    this.size = new math.Rectangle(0, 0, 1, 1);

    /**
     * The current resolution
     * @member {number}
     */
    this.resolution = resolution || CONST.RESOLUTION;

    /**
     * The projection matrix
     * @member {Matrix}
     */
    this.projectionMatrix = new math.Matrix();

    /**
     * The object's transform
     * @member {Matrix}
     */
    this.transform = null;

    /**
     *
     * @member {Rectangle}
     */
    this.frame = null;

    /**
     * The stencil buffer stores masking data for the render target
     * @member {WebGLRenderBuffer}
     */
    this.stencilBuffer = null;

    /**
     * The data structure for the stencil masks
     * @member {StencilMaskStack}
     */
    this.stencilMaskStack = new StencilMaskStack();

    /**
     * Stores filter data for the render target
     * @member {Array}
     */
    this.filterStack = [
        {
            renderTarget:this,
            filter:[],
            bounds:this.size
        }
    ];


    /**
     * The scale mode
     * @member {number}
     * @default CONST.SCALE_MODES.DEFAULT
     */
    this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;

    /**
     * Whether this object is the root element or not
     * @member {boolean}
     */
    this.root = root;

    if (!this.root)
    {
       // this.flipY = true;
        this.frameBuffer = gl.createFramebuffer();

        /*
            A frame buffer needs a target to render to..
            create a texture and bind it attach it to the framebuffer..
         */

        this.texture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D,  this.texture);

        // set the scale properties of the texture..
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);

        // check to see if the texture is a power of two!
        var isPowerOfTwo = utils.isPowerOfTwo(width, height);

        //TODO for 99% of use cases if a texture is power of two we should tile the texture...
         if (!isPowerOfTwo)
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        else
        {

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer );
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
    }


    this.resize(width, height);
};

RenderTarget.prototype.constructor = RenderTarget;
module.exports = RenderTarget;

/**
* Clears the filter texture.
*
*/
RenderTarget.prototype.clear = function(bind)
{
    var gl = this.gl;
    if(bind)
    {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    }

    gl.clearColor(0,0,0,0);
    gl.clear(gl.COLOR_BUFFER_BIT);
};

/**
* Binds the stencil buffer.
*
*/
RenderTarget.prototype.attachStencilBuffer = function()
{

    if ( this.stencilBuffer )
    {
        return;
    }

    /*
        The stencil buffer is used for masking in pixi
        lets create one and then add attach it to the framebuffer..
     */
    if (!this.root)
    {
        var gl = this.gl;

        this.stencilBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencilBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL,  this.size.width * this.resolution  , this.size.height * this.resolution );
    }
};

/**
* Binds the buffers and initialises the viewport.
*
*/
RenderTarget.prototype.activate = function()
{
    //TOOD refactor usage of frame..
    var gl = this.gl;

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);

    var projectionFrame = this.frame || this.size;

    // TODO add a dirty flag to this of a setter for the frame?
    this.calculateProjection( projectionFrame );

    if(this.transform)
    {
        this.projectionMatrix.append(this.transform);
    }

    gl.viewport(0,0, projectionFrame.width * this.resolution, projectionFrame.height * this.resolution);
};

/**
* Updates the projection matrix based on a projection frame (which is a rectangle)
*
*/
RenderTarget.prototype.calculateProjection = function( projectionFrame )
{
    var pm = this.projectionMatrix;

    pm.identity();

    if (!this.root)
    {
        pm.a = 1 / projectionFrame.width*2;
        pm.d = 1 / projectionFrame.height*2;

        pm.tx = -1 - projectionFrame.x * pm.a;
        pm.ty = -1 - projectionFrame.y * pm.d;
    }
    else
    {
        pm.a = 1 / projectionFrame.width*2;
        pm.d = -1 / projectionFrame.height*2;

        pm.tx = -1 - projectionFrame.x * pm.a;
        pm.ty = 1 - projectionFrame.y * pm.d;
    }
};


/**
 * Resizes the texture to the specified width and height
 *
 * @param width {Number} the new width of the texture
 * @param height {Number} the new height of the texture
 */
RenderTarget.prototype.resize = function(width, height)
{
    width = width | 0;
    height = height | 0;

    if (this.size.width === width && this.size.height === height) {
        return;
    }

    this.size.width = width;
    this.size.height = height;

    if (!this.root)
    {
        var gl = this.gl;

        gl.bindTexture(gl.TEXTURE_2D,  this.texture);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  width * this.resolution, height * this.resolution , 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

        if (this.stencilBuffer )
        {
            // update the stencil buffer width and height
            gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL,  width * this.resolution, height * this.resolution );
        }
    }

    var projectionFrame = this.frame || this.size;

    this.calculateProjection( projectionFrame );
};

/**
 * Destroys the render target.
 *
 */
RenderTarget.prototype.destroy = function()
{
    var gl = this.gl;
    gl.deleteFramebuffer( this.frameBuffer );
    gl.deleteTexture( this.texture );

    this.frameBuffer = null;
    this.texture = null;
};

},{"../../../const":3,"../../../math":13,"../../../utils":57,"./StencilMaskStack":46}],46:[function(require,module,exports){
/**
 * Generic Mask Stack data structure
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function StencilMaskStack()
{
	/**
     * The actual stack
     *
     * @member {Array}
     */
    this.stencilStack = [];

    /**
     * TODO @alvin
     *
     * @member {boolean}
     */
    this.reverse = true;

    /**
     * Internal count
     *
     * @member {number}
     */
    this.count = 0;
}

StencilMaskStack.prototype.constructor = StencilMaskStack;
module.exports = StencilMaskStack;

},{}],47:[function(require,module,exports){
var math = require('../math'),
    Texture = require('../textures/Texture'),
    Container = require('../display/Container'),
    CanvasTinter = require('../renderers/canvas/utils/CanvasTinter'),
    utils = require('../utils'),
    CONST = require('../const'),
    tempPoint = new math.Point();

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * A sprite can be created directly from an image like this:
 *
 * ```js
 * var sprite = new PIXI.Sprite.fromImage('assets/image.png');
 * ```
 *
 * @class
 * @extends Container
 * @memberof PIXI
 * @param texture {Texture} The texture for this sprite
 */
function Sprite(texture)
{
    Container.call(this);

    /**
     * The anchor sets the origin point of the texture.
     * The default is 0,0 this means the texture's origin is the top left
     * Setting the anchor to 0.5,0.5 means the texture's origin is centered
     * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
     *
     * @member {Point}
     */
    this.anchor = new math.Point();

    /**
     * The texture that the sprite is using
     *
     * @member {Texture}
     * @private
     */
    this._texture = null;

    /**
     * The width of the sprite (this is initially set by the texture)
     *
     * @member {number}
     * @private
     */
    this._width = 0;

    /**
     * The height of the sprite (this is initially set by the texture)
     *
     * @member {number}
     * @private
     */
    this._height = 0;

    /**
     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
     *
     * @member {number}
     * @default [0xFFFFFF]
     */
    this.tint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the sprite. Apply a value of blendModes.NORMAL to reset the blend mode.
     *
     * @member {number}
     * @default CONST.BLEND_MODES.NORMAL;
     */
    this.blendMode = CONST.BLEND_MODES.NORMAL;

    /**
     * The shader that will be used to render the sprite. Set to null to remove a current shader.
     *
     * @member {AbstractFilter}
     */
    this.shader = null;

    /**
     * An internal cached value of the tint.
     *
     * @member {number}
     * @default [0xFFFFFF]
     */
    this.cachedTint = 0xFFFFFF;

    // call texture setter
    this.texture = texture || Texture.EMPTY;
}

// constructor
Sprite.prototype = Object.create(Container.prototype);
Sprite.prototype.constructor = Sprite;
module.exports = Sprite;

Object.defineProperties(Sprite.prototype, {
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    width: {
        get: function ()
        {
            return this.scale.x * this.texture._frame.width;
        },
        set: function (value)
        {
            this.scale.x = value / this.texture._frame.width;
            this._width = value;
        }
    },

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    height: {
        get: function ()
        {
            return  this.scale.y * this.texture._frame.height;
        },
        set: function (value)
        {
            this.scale.y = value / this.texture._frame.height;
            this._height = value;
        }
    },

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    texture: {
        get: function ()
        {
            return  this._texture;
        },
        set: function (value)
        {
            if (this._texture === value)
            {
                return;
            }

            this._texture = value;
            this.cachedTint = 0xFFFFFF;

            if (value)
            {
                // wait for the texture to load
                if (value.baseTexture.hasLoaded)
                {
                    this._onTextureUpdate();
                }
                else
                {
                    value.once('update', this._onTextureUpdate.bind(this));
                }
            }
        }
    }
});

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @private
 */
Sprite.prototype._onTextureUpdate = function ()
{
    // so if _width is 0 then width was not set..
    if (this._width)
    {
        this.scale.x = this._width / this.texture.frame.width;
    }

    if (this._height)
    {
        this.scale.y = this._height / this.texture.frame.height;
    }
};

/**
*
* Renders the object using the WebGL renderer
*
* @param renderer {WebGLRenderer}
*/
Sprite.prototype._renderWebGL = function (renderer)
{
    renderer.setObjectRenderer(renderer.plugins.sprite);
    renderer.plugins.sprite.render(this);
};

/**
 * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @param matrix {Matrix} the transformation matrix of the sprite
 * @return {Rectangle} the framing rectangle
 */
Sprite.prototype.getBounds = function (matrix)
{
    if(!this._currentBounds)
    {

        var width = this._texture._frame.width;
        var height = this._texture._frame.height;

        var w0 = width * (1-this.anchor.x);
        var w1 = width * -this.anchor.x;

        var h0 = height * (1-this.anchor.y);
        var h1 = height * -this.anchor.y;

        var worldTransform = matrix || this.worldTransform ;

        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;

        var minX,
            maxX,
            minY,
            maxY;

        if (b === 0 && c === 0)
        {
            // scale may be negative!
            if (a < 0)
            {
                a *= -1;
            }

            if (d < 0)
            {
                d *= -1;
            }

            // this means there is no rotation going on right? RIGHT?
            // if thats the case then we can avoid checking the bound values! yay
            minX = a * w1 + tx;
            maxX = a * w0 + tx;
            minY = d * h1 + ty;
            maxY = d * h0 + ty;
        }
        else
        {
            var x1 = a * w1 + c * h1 + tx;
            var y1 = d * h1 + b * w1 + ty;

            var x2 = a * w0 + c * h1 + tx;
            var y2 = d * h1 + b * w0 + ty;

            var x3 = a * w0 + c * h0 + tx;
            var y3 = d * h0 + b * w0 + ty;

            var x4 =  a * w1 + c * h0 + tx;
            var y4 =  d * h0 + b * w1 + ty;

            minX = x1;
            minX = x2 < minX ? x2 : minX;
            minX = x3 < minX ? x3 : minX;
            minX = x4 < minX ? x4 : minX;

            minY = y1;
            minY = y2 < minY ? y2 : minY;
            minY = y3 < minY ? y3 : minY;
            minY = y4 < minY ? y4 : minY;

            maxX = x1;
            maxX = x2 > maxX ? x2 : maxX;
            maxX = x3 > maxX ? x3 : maxX;
            maxX = x4 > maxX ? x4 : maxX;

            maxY = y1;
            maxY = y2 > maxY ? y2 : maxY;
            maxY = y3 > maxY ? y3 : maxY;
            maxY = y4 > maxY ? y4 : maxY;
        }

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;

        // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
        this._currentBounds = bounds;
    }

    return this._currentBounds;
};

Sprite.prototype.getLocalBounds = function ()
{
    this._bounds.x = -this._texture._frame.width * this.anchor.x;
    this._bounds.y = -this._texture._frame.height * this.anchor.y;
    this._bounds.width = this._texture._frame.width;
    this._bounds.height = this._texture._frame.height;
    return this._bounds;
};

/**
* Tests if a point is inside this sprite
*
* @param point {Point} the point to test
* @return {boolean} the result of the test
*/
Sprite.prototype.containsPoint = function( point )
{
    this.worldTransform.applyInverse(point,  tempPoint);

    var width = this._texture._frame.width;
    var height = this._texture._frame.height;
    var x1 = -width * this.anchor.x;
    var y1;

    if ( tempPoint.x > x1 && tempPoint.x < x1 + width )
    {
        y1 = -height * this.anchor.y;

        if ( tempPoint.y > y1 && tempPoint.y < y1 + height )
        {
            return true;
        }
    }

    return false;
};

/**
* Renders the object using the Canvas renderer
*
* @param renderer {CanvasRenderer} The renderer
*/
Sprite.prototype._renderCanvas = function (renderer)
{
    if (this.texture.crop.width <= 0 || this.texture.crop.height <= 0)
    {
        return;
    }

    if (this.blendMode !== renderer.currentBlendMode)
    {
        renderer.currentBlendMode = this.blendMode;
        renderer.context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
    }

    //  Ignore null sources
    if (this.texture.valid)
    {
        var texture = this._texture,
            wt = this.worldTransform,
            dx,
            dy,
            width,
            height;

        var resolution = texture.baseTexture.resolution / renderer.resolution;

        renderer.context.globalAlpha = this.worldAlpha;

        // If smoothingEnabled is supported and we need to change the smoothing property for this texture
        if (renderer.smoothProperty && renderer.currentScaleMode !== texture.baseTexture.scaleMode)
        {
            renderer.currentScaleMode = texture.baseTexture.scaleMode;
            renderer.context[renderer.smoothProperty] = (renderer.currentScaleMode === CONST.SCALE_MODES.LINEAR);
        }

        // If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions

        if(texture.rotate)
        {

            // cheeky rotation!
            var a = wt.a;
            var b = wt.b;

            wt.a  = -wt.c;
            wt.b  = -wt.d;
            wt.c  =  a;
            wt.d  =  b;

            width = texture.crop.height;
            height = texture.crop.width;

            dx = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
            dy = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
        }
        else
        {
            width = texture.crop.width;
            height = texture.crop.height;

            dx = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
            dy = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
        }



        // Allow for pixel rounding
        if (renderer.roundPixels)
        {
            renderer.context.setTransform(
                wt.a,
                wt.b,
                wt.c,
                wt.d,
                (wt.tx * renderer.resolution) | 0,
                (wt.ty * renderer.resolution) | 0
            );

            dx = dx | 0;
            dy = dy | 0;
        }
        else
        {

            renderer.context.setTransform(
                wt.a,
                wt.b,
                wt.c,
                wt.d,
                wt.tx * renderer.resolution,
                wt.ty * renderer.resolution
            );


        }

        if (this.tint !== 0xFFFFFF)
        {
            if (this.cachedTint !== this.tint)
            {
                this.cachedTint = this.tint;

                // TODO clean up caching - how to clean up the caches?
                this.tintedTexture = CanvasTinter.getTintedTexture(this, this.tint);
            }

            renderer.context.drawImage(
                this.tintedTexture,
                0,
                0,
                width,
                height,
                dx / resolution,
                dy / resolution,
                width / resolution,
                width / resolution
            );
        }
        else
        {
            renderer.context.drawImage(
                texture.baseTexture.source,
                texture.crop.x,
                texture.crop.y,
                width,
                height,
                dx / resolution,
                dy / resolution,
                width / resolution,
                height / resolution
            );
        }
    }
};

/**
 * Destroys this sprite and optionally its texture
 *
 * @param destroyTexture {boolean} Should it destroy the current texture of the sprite as well
 * @param destroyBaseTexture {boolean} Should it destroy the base texture of the sprite as well
 */
Sprite.prototype.destroy = function (destroyTexture, destroyBaseTexture)
{
    Container.prototype.destroy.call(this);

    this.anchor = null;

    if (destroyTexture)
    {
        this._texture.destroy(destroyBaseTexture);
    }

    this._texture = null;
    this.shader = null;
};

// some helper functions..

/**
 * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the frameId
 * @param [crossorigin=(auto)] {boolean} if you want to specify the cross-origin parameter
 * @param [scaleMode=scaleModes.DEFAULT] {number} if you want to specify the scale mode, see {@link SCALE_MODES} for possible values
 */
Sprite.fromFrame = function (frameId)
{
    var texture = utils.TextureCache[frameId];

    if (!texture)
    {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
    }

    return new Sprite(texture);
};

/**
 * Helper function that creates a sprite that will contain a texture based on an image url
 * If the image is not in the texture cache it will be loaded
 *
 * @static
 * @param imageId {String} The image url of the texture
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the image id
 */
Sprite.fromImage = function (imageId, crossorigin, scaleMode)
{
    return new Sprite(Texture.fromImage(imageId, crossorigin, scaleMode));
};

},{"../const":3,"../display/Container":4,"../math":13,"../renderers/canvas/utils/CanvasTinter":28,"../textures/Texture":51,"../utils":57}],48:[function(require,module,exports){
var ObjectRenderer = require('../../renderers/webgl/utils/ObjectRenderer'),
    Shader = require('../../renderers/webgl/shaders/Shader'),
    WebGLRenderer = require('../../renderers/webgl/WebGLRenderer'),
    CONST = require('../../const');

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's SpriteRenderer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/SpriteRenderer.java
 */

/**
 *
 * @class
 * @private
 * @memberof PIXI
 * @extends ObjectRenderer
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function SpriteRenderer(renderer)
{
    ObjectRenderer.call(this, renderer);

    /**
     *
     *
     * @member {number}
     */
    this.vertSize = 5;

    /**
     *
     *
     * @member {number}
     */
    this.vertByteSize = this.vertSize * 4;

    /**
     * The number of images in the SpriteBatch before it flushes.
     *
     * @member {number}
     */
    this.size = CONST.SPRITE_BATCH_SIZE; // 2000 is a nice balance between mobile / desktop

    // the total number of bytes in our batch
    var numVerts = this.size * 4 * this.vertByteSize;
    // the total number of indices in our batch
    var numIndices = this.size * 6;

    /**
     * Holds the vertices
     *
     * @member {ArrayBuffer}
     */
    this.vertices = new ArrayBuffer(numVerts);

    /**
     * View on the vertices as a Float32Array
     *
     * @member {Float32Array}
     */
    this.positions = new Float32Array(this.vertices);

    /**
     * Holds the color components
     *
     * @member {Uint32Array}
     */
    this.colors = new Uint32Array(this.vertices);

    /**
     * Holds the indices
     *
     * @member {Uint16Array}
     */
    this.indices = new Uint16Array(numIndices);

    /**
     *
     *
     * @member {number}
     */
    this.lastIndexCount = 0;

    for (var i=0, j=0; i < numIndices; i += 6, j += 4)
    {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }

    /**
     *
     *
     * @member {boolean}
     */
    this.drawing = false;

    /**
     *
     *
     * @member {number}
     */
    this.currentBatchSize = 0;

    /**
     *
     *
     * @member {BaseTexture}
     */
    this.currentBaseTexture = null;

    /**
     *
     *
     * @member {Array}
     */
    this.textures = [];

    /**
     *
     *
     * @member {Array}
     */
    this.blendModes = [];

    /**
     *
     *
     * @member {Array}
     */
    this.shaders = [];

    /**
     *
     *
     * @member {Array}
     */
    this.sprites = [];

    /**
     * The default shader that is used if a sprite doesn't have a more specific one.
     *
     * @member {Shader}
     */
    this.shader = null;

}

SpriteRenderer.prototype = Object.create(ObjectRenderer.prototype);
SpriteRenderer.prototype.constructor = SpriteRenderer;
module.exports = SpriteRenderer;

WebGLRenderer.registerPlugin('sprite', SpriteRenderer);

/**
 * Sets up the renderer context and necessary buffers.
 *
 * @private
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 */
SpriteRenderer.prototype.onContextChange = function ()
{
    var gl = this.renderer.gl;

    // setup default shader
    this.shader = this.renderer.shaderManager.defaultShader;

    // create a couple of buffers
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.

    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

    this.currentBlendMode = 99999;
};

/**
 * Renders the sprite object.
 *
 * @param sprite {Sprite} the sprite to render when using this spritebatch
 */
SpriteRenderer.prototype.render = function (sprite)
{
    var texture = sprite._texture;

    //TODO set blend modes..
    // check texture..
    if (this.currentBatchSize >= this.size)
    {
        this.flush();
        this.currentBaseTexture = texture.baseTexture;
    }

    // get the uvs for the texture
    var uvs = texture._uvs;

    // if the uvs have not updated then no point rendering just yet!
    if (!uvs)
    {
        return;
    }

    // TODO trim??
    var aX = sprite.anchor.x;
    var aY = sprite.anchor.y;

    var w0, w1, h0, h1;

    if (texture.trim)
    {
        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
        var trim = texture.trim;

        w1 = trim.x - aX * trim.width;
        w0 = w1 + texture.crop.width;

        h1 = trim.y - aY * trim.height;
        h0 = h1 + texture.crop.height;

    }
    else
    {
        w0 = (texture._frame.width ) * (1-aX);
        w1 = (texture._frame.width ) * -aX;

        h0 = texture._frame.height * (1-aY);
        h1 = texture._frame.height * -aY;
    }

    var index = this.currentBatchSize * this.vertByteSize;

    var worldTransform = sprite.worldTransform;

    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var colors = this.colors;
    var positions = this.positions;

    if (this.renderer.roundPixels)
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx | 0;
        positions[index+1] = d * h1 + b * w1 + ty | 0;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx | 0;
        positions[index+6] = d * h1 + b * w0 + ty | 0;

         // xy
        positions[index+10] = a * w0 + c * h0 + tx | 0;
        positions[index+11] = d * h0 + b * w0 + ty | 0;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx | 0;
        positions[index+16] = d * h0 + b * w1 + ty | 0;
    }
    else
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx;
        positions[index+1] = d * h1 + b * w1 + ty;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx;
        positions[index+6] = d * h1 + b * w0 + ty;

         // xy
        positions[index+10] = a * w0 + c * h0 + tx;
        positions[index+11] = d * h0 + b * w0 + ty;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx;
        positions[index+16] = d * h0 + b * w1 + ty;
    }

    // uv
    positions[index+2] = uvs.x0;
    positions[index+3] = uvs.y0;

    // uv
    positions[index+7] = uvs.x1;
    positions[index+8] = uvs.y1;

     // uv
    positions[index+12] = uvs.x2;
    positions[index+13] = uvs.y2;

    // uv
    positions[index+17] = uvs.x3;
    positions[index+18] = uvs.y3;

    // color and alpha
    var tint = sprite.tint;
    colors[index+4] = colors[index+9] = colors[index+14] = colors[index+19] = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);

    // increment the batchsize
    this.sprites[this.currentBatchSize++] = sprite;
};

/**
 * Renders the content and empties the current batch.
 *
 */
SpriteRenderer.prototype.flush = function ()
{
    // If the batch is length 0 then return as there is nothing to draw
    if (this.currentBatchSize === 0)
    {
        return;
    }

    var gl = this.renderer.gl;
    var shader;

    // upload the verts to the buffer
    if (this.currentBatchSize > ( this.size * 0.5 ) )
    {
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    }
    else
    {
        var view = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }

    var nextTexture, nextBlendMode, nextShader;
    var batchSize = 0;
    var start = 0;

    var currentBaseTexture = null;
    var currentBlendMode = this.renderer.blendModeManager.currentBlendMode;
    var currentShader = null;

    var blendSwap = false;
    var shaderSwap = false;
    var sprite;

    for (var i = 0, j = this.currentBatchSize; i < j; i++)
    {

        sprite = this.sprites[i];

        nextTexture = sprite._texture.baseTexture;
        nextBlendMode = sprite.blendMode;
        nextShader = sprite.shader || this.shader;

        blendSwap = currentBlendMode !== nextBlendMode;
        shaderSwap = currentShader !== nextShader; // should I use uuidS???

        if (currentBaseTexture !== nextTexture || blendSwap || shaderSwap)
        {
            this.renderBatch(currentBaseTexture, batchSize, start);

            start = i;
            batchSize = 0;
            currentBaseTexture = nextTexture;

            if (blendSwap)
            {
                currentBlendMode = nextBlendMode;
                this.renderer.blendModeManager.setBlendMode( currentBlendMode );
            }

            if (shaderSwap)
            {
                currentShader = nextShader;



                shader = currentShader.shaders ? currentShader.shaders[gl.id] : currentShader;

                if (!shader)
                {
                    shader = currentShader.getShader(this.renderer);

                }

                // set shader function???
                this.renderer.shaderManager.setShader(shader);

                //TODO - i KNOW this can be optimised! Once v3 is stable il look at this next...
                shader.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(true);
                //Make this a little more dynamic / intelligent!
                shader.syncUniforms();

                //TODO investigate some kind of texture state managment??
                // need to make sure this texture is the active one for all the batch swaps..
                gl.activeTexture(gl.TEXTURE0);

                // both thease only need to be set if they are changing..
                // set the projection
                //gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));


            }
        }

        batchSize++;
    }

    this.renderBatch(currentBaseTexture, batchSize, start);

    // then reset the batch!
    this.currentBatchSize = 0;
};

/**
 * Draws the currently batches sprites.
 *
 * @private
 * @param texture {Texture}
 * @param size {number}
 * @param startIndex {number}
 */
SpriteRenderer.prototype.renderBatch = function (texture, size, startIndex)
{
    if (size === 0)
    {
        return;
    }

    var gl = this.renderer.gl;

    if (!texture._glTextures[gl.id])
    {
        this.renderer.updateTexture(texture);
    }
    else
    {
        // bind the current texture
        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
    }

    // now draw those suckas!
    gl.drawElements(gl.TRIANGLES, size * 6, gl.UNSIGNED_SHORT, startIndex * 6 * 2);

    // increment the draw count
    this.renderer.drawCount++;
};

/**
 * Starts a new sprite batch.
 *
 */
SpriteRenderer.prototype.start = function ()
{
    var gl = this.renderer.gl;

    // bind the main texture


    // bind the buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    // this is the same for each shader?
    var stride =  this.vertByteSize;
    gl.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
    gl.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, gl.FLOAT, false, stride, 2 * 4);

    // color attributes will be interpreted as unsigned bytes and normalized
    gl.vertexAttribPointer(this.shader.attributes.aColor, 4, gl.UNSIGNED_BYTE, true, stride, 4 * 4);
};

/**
 * Destroys the SpriteBatch.
 *
 */
SpriteRenderer.prototype.destroy = function ()
{
    this.renderer.gl.deleteBuffer(this.vertexBuffer);
    this.renderer.gl.deleteBuffer(this.indexBuffer);

    this.shader.destroy();

    this.renderer = null;

    this.vertices = null;
    this.positions = null;
    this.colors = null;
    this.indices = null;

    this.vertexBuffer = null;
    this.indexBuffer = null;

    this.currentBaseTexture = null;

    this.drawing = false;

    this.textures = null;
    this.blendModes = null;
    this.shaders = null;
    this.sprites = null;
    this.shader = null;
};

},{"../../const":3,"../../renderers/webgl/WebGLRenderer":29,"../../renderers/webgl/shaders/Shader":41,"../../renderers/webgl/utils/ObjectRenderer":43}],49:[function(require,module,exports){
var utils = require('../utils'),
    CONST = require('../const');

/**
 * A texture stores the information that represents an image. All textures have a base texture.
 *
 * @class
 * @mixes eventTarget
 * @memberof PIXI
 * @param source {Image|Canvas} the source object of the texture.
 * @param [scaleMode=scaleModes.DEFAULT] {number} See {@link SCALE_MODES} for possible values
 * @param resolution {number} the resolution of the texture for devices with different pixel ratios
 */
function BaseTexture(source, scaleMode, resolution)
{
    this.uuid = utils.uuid();

    /**
     * The Resolution of the texture.
     *
     * @member {number}
     */
    this.resolution = resolution || 1;

    /**
     * The width of the base texture set when the image has loaded
     *
     * @member {number}
     * @readOnly
     */
    this.width = 100;

    /**
     * The height of the base texture set when the image has loaded
     *
     * @member {number}
     * @readOnly
     */
    this.height = 100;

    // TODO docs
    // used to store the actual dimensions of the source
    /**
     * Used to store the actual width of the source of this texture
     *
     * @member {number}
     * @readOnly
     */
    this.realWidth = 100;
    /**
     * Used to store the actual height of the source of this texture
     *
     * @member {number}
     * @readOnly
     */
    this.realHeight = 100;

    /**
     * The scale mode to apply when scaling this texture
     *
     * @member {{number}}
     * @default scaleModes.LINEAR
     */
    this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;

    /**
     * Set to true once the base texture has successfully loaded.
     *
     * This is never true if the underlying source fails to load or has no texture data.
     *
     * @member {boolean}
     * @readOnly
     */
    this.hasLoaded = false;

    /**
     * Set to true if the source is currently loading.
     *
     * If an Image source is loading the 'loaded' or 'error' event will be
     * dispatched when the operation ends. An underyling source that is
     * immediately-available bypasses loading entirely.
     *
     * @member {boolean}
     * @readonly
     */
    this.isLoading = false;

    /**
     * The image source that is used to create the texture.
     *
     * TODO: Make this a setter that calls loadSource();
     *
     * @member {Image|Canvas}
     * @readonly
     */
    this.source = null; // set in loadSource, if at all

    /**
     * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
     *
     * @member {boolean}
     * @default true
     */
    this.premultipliedAlpha = true;

    /**
     * @member {string}
     */
    this.imageUrl = null;

    /**
     * Wether or not the texture is a power of two, try to use power of two textures as much as you can
     * @member {boolean}
     * @private
     */
    this.isPowerOfTwo = false;

    // used for webGL

    /**
     *
     * Set this to true if a mipmap of this texture needs to be generated. This value needs to be set before the texture is used
     * Also the texture must be a power of two size to work
     *
     * @member {boolean}
     */
    this.mipmap = false;

    /**
     * A map of renderer IDs to webgl textures
     *
     * @member {object<number, WebGLTexture>}
     * @private
     */
    this._glTextures = [];

    // if no source passed don't try to load
    if (source)
    {
        this.loadSource(source);
    }

    /**
     * Fired when a not-immediately-available source finishes loading.
     *
     * @event loaded
     * @protected
     */

    /**
     * Fired when a not-immediately-available source fails to load.
     *
     * @event error
     * @protected
     */
}

BaseTexture.prototype.constructor = BaseTexture;
module.exports = BaseTexture;

utils.eventTarget.mixin(BaseTexture.prototype);

/**
 * Updates the texture on all the webgl renderers.
 *
 * @fires update
 */
BaseTexture.prototype.update = function () {
    this.emit('update', this);
};

/**
 * Load a source.
 *
 * If the source is not-immediately-available, such as an image that needs to be
 * downloaded, then the 'loaded' or 'error' event will be dispatched in the future
 * and `hasLoaded` will remain false after this call.
 *
 * The logic state after calling `loadSource` directly or indirectly (eg. `fromImage`, `new BaseTexture`) is:
 *
 *     if (texture.hasLoaded)
 {
 *        // texture ready for use
 *     } else if (texture.isLoading)
 {
 *        // listen to 'loaded' and/or 'error' events on texture
 *     } else {
 *        // not loading, not going to load UNLESS the source is reloaded
 *        // (it may still make sense to listen to the events)
 *     }
 *
 * @protected
 * @param source {Image|Canvas} the source object of the texture.
 */
BaseTexture.prototype.loadSource = function (source)
{
    var wasLoading = this.isLoading;
    this.hasLoaded = false;
    this.isLoading = false;

    if (wasLoading && this.source)
    {
        this.source.onload = null;
        this.source.onerror = null;
    }

    this.source = source;

    // Apply source if loaded. Otherwise setup appropriate loading monitors.
    if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height)
    {
        this._sourceLoaded();
    }
    else if (!source.getContext)
    {

        // Image fail / not ready
        this.isLoading = true;

        var scope = this;

        source.onload = function ()
        {
            source.onload = null;
            source.onerror = null;

            if (!scope.isLoading)
            {
                return;
            }

            scope.isLoading = false;
            scope._sourceLoaded();

            scope.emit('loaded', scope);
        };

        source.onerror = function ()
        {
            source.onload = null;
            source.onerror = null;

            if (!scope.isLoading)
            {
                return;
            }

            scope.isLoading = false;
            scope.emit('error', scope);
        };

        // Per http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element
        //   "The value of `complete` can thus change while a script is executing."
        // So complete needs to be re-checked after the callbacks have been added..
        // NOTE: complete will be true if the image has no src so best to check if the src is set.
        if (source.complete && source.src)
        {
            this.isLoading = false;

            // ..and if we're complete now, no need for callbacks
            source.onload = null;
            source.onerror = null;

            if (source.width && source.height)
            {
                this._sourceLoaded();

                // If any previous subscribers possible
                if (wasLoading)
                {
                    this.emit('loaded', this);
                }
            }
            else
            {
                // If any previous subscribers possible
                if (wasLoading)
                {
                    this.emit('error', this);
                }
            }
        }
    }
};

/**
 * Used internally to update the width, height, and some other tracking vars once
 * a source has successfully loaded.
 *
 * @private
 */
BaseTexture.prototype._sourceLoaded = function ()
{
    this.hasLoaded = true;

    this.realWidth = this.source.naturalWidth || this.source.width;
    this.realHeight = this.source.naturalHeight || this.source.height;

    this.width = this.realWidth / this.resolution;
    this.height = this.realHeight / this.resolution;


    this.isPowerOfTwo = utils.isPowerOfTwo(this.width, this.height);

    this.update();
};

/**
 * Destroys this base texture
 *
 */
BaseTexture.prototype.destroy = function ()
{
    if (this.imageUrl)
    {
        delete utils.BaseTextureCache[this.imageUrl];
        delete utils.TextureCache[this.imageUrl];

        this.imageUrl = null;

        if (!navigator.isCocoonJS)
        {
            this.source.src = '';
        }
    }
    else if (this.source && this.source._pixiId)
    {
        delete utils.BaseTextureCache[this.source._pixiId];
    }

    this.source = null;

    this.dispose();
};

/**
 * Frees the texture from WebGL memory without destroying this texture object.
 * This means you can still use the texture later which will upload it to GPU
 * memory again.
 *
 */
BaseTexture.prototype.dispose = function ()
{
    this.emit('dispose', this);
};

/**
 * Changes the source image of the texture.
 * The original source must be an Image element.
 *
 * @param newSrc {string} the path of the image
 */
BaseTexture.prototype.updateSourceImage = function (newSrc)
{
    this.source.src = newSrc;

    this.loadSource(this.source);
};

/**
 * Helper function that creates a base texture from the given image url.
 * If the image is not in the base texture cache it will be created and loaded.
 *
 * @static
 * @param imageUrl {string} The image url of the texture
 * @param [crossorigin=(auto)] {boolean} Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
 * @param [scaleMode=scaleModes.DEFAULT] {number} See {@link SCALE_MODES} for possible values
 * @return BaseTexture
 */
BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode)
{
    var baseTexture = utils.BaseTextureCache[imageUrl];

    if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0)
    {
        crossorigin = true;
    }

    if (!baseTexture)
    {
        // new Image() breaks tex loading in some versions of Chrome.
        // See https://code.google.com/p/chromium/issues/detail?id=238071
        var image = new Image();//document.createElement('img');
        if (crossorigin)
        {
            image.crossOrigin = '';
        }

        baseTexture = new BaseTexture(image, scaleMode);
        baseTexture.imageUrl = imageUrl;

        image.src = imageUrl;

        utils.BaseTextureCache[imageUrl] = baseTexture;

        // if there is an @2x at the end of the url we are going to assume its a highres image
        baseTexture.resolution = utils.getResolutionOfUrl(imageUrl);
    }

    return baseTexture;
};

/**
 * Helper function that creates a base texture from the given canvas element.
 *
 * @static
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return BaseTexture
 */
BaseTexture.fromCanvas = function (canvas, scaleMode)
{
    if (!canvas._pixiId)
    {
        canvas._pixiId = 'canvas_' + utils.uuid();
    }

    var baseTexture = utils.BaseTextureCache[canvas._pixiId];

    if (!baseTexture)
    {
        baseTexture = new BaseTexture(canvas, scaleMode);
        utils.BaseTextureCache[canvas._pixiId] = baseTexture;
    }

    return baseTexture;
};

},{"../const":3,"../utils":57}],50:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    Texture = require('./Texture'),
    RenderTarget = require('../renderers/webgl/utils/RenderTarget'),
    FilterManager = require('../renderers/webgl/managers/FilterManager'),
    CanvasBuffer = require('../renderers/canvas/utils/CanvasBuffer'),
    math = require('../math'),
    CONST = require('../const'),
    tempMatrix = new math.Matrix();

/**
 * A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * var renderTexture = new PIXI.RenderTexture(800, 600);
 * var sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderTexture.render(sprite);
 * ```
 *
 * The Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual
 * position a Container should be used:
 *
 * ```js
 * var doc = new Container();
 *
 * doc.addChild(sprite);
 *
 * renderTexture.render(doc);  // Renders to center of renderTexture
 * ```
 *
 * @class
 * @extends Texture
 * @memberof PIXI
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used for this RenderTexture
 * @param [width=100] {number} The width of the render texture
 * @param [height=100] {number} The height of the render texture
 * @param [scaleMode] {number} See {@link SCALE_MODES} for possible values
 * @param [resolution=1] {number} The resolution of the texture being generated
 */
function RenderTexture(renderer, width, height, scaleMode, resolution)
{
    if (!renderer)
    {
        throw new Error('Unable to create RenderTexture, you must pass a renderer into the constructor.');
    }

    width = width || 100;
    height = height || 100;
    resolution = resolution || CONST.RESOLUTION;

    /**
     * The base texture object that this texture uses
     *
     * @member {BaseTexture}
     */
    var baseTexture = new BaseTexture();
    baseTexture.width = width;
    baseTexture.height = height;
    baseTexture.resolution = resolution;
    baseTexture.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;
    baseTexture.hasLoaded = true;


    Texture.call(this,
        baseTexture,
        new math.Rectangle(0, 0, width, height)
    );


    /**
     * The with of the render texture
     *
     * @member {number}
     */
    this.width = width;

    /**
     * The height of the render texture
     *
     * @member {number}
     */
    this.height = height;

    /**
     * The Resolution of the texture.
     *
     * @member {number}
     */
    this.resolution = resolution;

    /**
     * The framing rectangle of the render texture
     *
     * @member {Rectangle}
     */
    //this._frame = new math.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @member {Rectangle}
     */
    //this.crop = new math.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);

    /**
     * Draw/render the given DisplayObject onto the texture.
     *
     * The displayObject and descendents are transformed during this operation.
     * If `updateTransform` is true then the transformations will be restored before the
     * method returns. Otherwise it is up to the calling code to correctly use or reset
     * the transformed display objects.
     *
     * The display object is always rendered with a worldAlpha value of 1.
     *
     * @method
     * @param displayObject {DisplayObject} The display object to render this texture on
     * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
     * @param [clear=false] {boolean} If true the texture will be cleared before the displayObject is drawn
     * @param [updateTransform=true] {boolean} If true the displayObject's worldTransform/worldAlpha and all children
     *  transformations will be restored. Not restoring this information will be a little faster.
     */
    this.render = null;

    /**
     * The renderer this RenderTexture uses. A RenderTexture can only belong to one renderer at the moment if its webGL.
     *
     * @member {CanvasRenderer|WebGLRenderer}
     */
    this.renderer = renderer;

    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        var gl = this.renderer.gl;

        this.textureBuffer = new RenderTarget(gl, this.width, this.height, null, this.resolution);//, this.baseTexture.scaleMode);
        this.baseTexture._glTextures[gl.id] =  this.textureBuffer.texture;

        //TODO refactor filter manager.. as really its no longer a manager if we use it here..
        this.filterManager = new FilterManager(this.renderer);
        this.filterManager.onContextChange();
        this.filterManager.resize(width, height);
        this.render = this.renderWebGL;

        // the creation of a filter manager unbinds the buffers..
        this.renderer.currentRenderer.start();
    }
    else
    {

        this.render = this.renderCanvas;
        this.textureBuffer = new CanvasBuffer(this.width* this.resolution, this.height* this.resolution);
        this.baseTexture.source = this.textureBuffer.canvas;
    }

    /**
     * @member {boolean}
     */
    this.valid = true;

    this._updateUvs();
}

RenderTexture.prototype = Object.create(Texture.prototype);
RenderTexture.prototype.constructor = RenderTexture;
module.exports = RenderTexture;

/**
 * Resizes the RenderTexture.
 *
 * @param width {number} The width to resize to.
 * @param height {number} The height to resize to.
 * @param updateBase {boolean} Should the baseTexture.width and height values be resized as well?
 */
RenderTexture.prototype.resize = function (width, height, updateBase)
{
    if (width === this.width && height === this.height)
    {
        return;
    }

    this.valid = (width > 0 && height > 0);

    this.width = this._frame.width = this.crop.width = width;
    this.height =  this._frame.height = this.crop.height = height;

    if (updateBase)
    {
        this.baseTexture.width = this.width;
        this.baseTexture.height = this.height;
    }

    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;
    }

    if (!this.valid)
    {
        return;
    }

    this.textureBuffer.resize(this.width * this.resolution, this.height * this.resolution);

    if(this.filterManager)
    {
        this.filterManager.resize(this.width, this.height);
    }
};

/**
 * Clears the RenderTexture.
 *
 */
RenderTexture.prototype.clear = function ()
{
    if (!this.valid)
    {
        return;
    }

    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
    }

    this.textureBuffer.clear();
};

/**
 * Internal method assigned to the `render` property if using a CanvasRenderer.
 *
 * @private
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
 * @param [clear=false] {boolean} If true the texture will be cleared before the displayObject is drawn
 * @param [updateTransform=true] {boolean} If true the displayObject's worldTransform/worldAlpha and all children
 *  transformations will be restored. Not restoring this information will be a little faster.
 */
RenderTexture.prototype.renderWebGL = function (displayObject, matrix, clear, updateTransform)
{
    if (!this.valid)
    {
        return;
    }

    //TODO this should be true by default
    updateTransform = !!updateTransform;

    this.textureBuffer.transform = matrix;


    // setWorld Alpha to ensure that the object is renderer at full opacity
    displayObject.worldAlpha = displayObject.alpha;

    if (updateTransform)
    {

        // reset the matrix of the displatyObject..
        displayObject.worldTransform.identity();

        displayObject.currentBounds = null;

        // Time to update all the children of the displayObject with the new matrix..
        var children = displayObject.children;
        var i, j;

        for (i = 0, j = children.length; i < j; ++i)
        {
            children[i].updateTransform();
        }
    }


   if (clear)
    {
        this.textureBuffer.clear();
    }

    //TODO rename textureBuffer to renderTarget..
    var temp =  this.renderer.filterManager;

    this.renderer.filterManager = this.filterManager;
    this.renderer.renderDisplayObject(displayObject, this.textureBuffer);

    this.renderer.filterManager = temp;


};


/**
 * Internal method assigned to the `render` property if using a CanvasRenderer.
 *
 * @private
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
 * @param [clear] {boolean} If true the texture will be cleared before the displayObject is drawn
 */
RenderTexture.prototype.renderCanvas = function (displayObject, matrix, clear, updateTransform)
{
    if (!this.valid)
    {
        return;
    }

    updateTransform = !!updateTransform;
    var cachedWt = displayObject.worldTransform;

    var wt = tempMatrix;

    wt.identity();

    if (matrix)
    {
        wt.append(matrix);
    }

    displayObject.worldTransform = wt;

    // setWorld Alpha to ensure that the object is renderer at full opacity
    displayObject.worldAlpha = 1;

    // Time to update all the children of the displayObject with the new matrix..
    var children = displayObject.children;
    var i, j;

    for (i = 0, j = children.length; i < j; ++i)
    {
        children[i].updateTransform();
    }

    if (clear)
    {
        this.textureBuffer.clear();
    }

    displayObject.worldTransform = cachedWt;

//    this.textureBuffer.
    var context = this.textureBuffer.context;

    var realResolution = this.renderer.resolution;

    this.renderer.resolution = this.resolution;

    this.renderer.renderDisplayObject(displayObject, context);

    this.renderer.resolution = realResolution;
 //   context.setTransform(1, 0, 0, 1, 0, 0);
   // context.fillStyle ="#FF0000"
//    context.fillRect(0, 0, 800, 600);

};

/**
 * Destroys this texture
 *
 * @param destroyBase {boolean} Whether to destroy the base texture as well
 */
RenderTexture.prototype.destroy = function ()
{
    Texture.prototype.destroy.call(this, true);

    this.textureBuffer.destroy();

    // destroy the filtermanager..
    if(this.filterManager)
    {
        this.filterManager.destroy();
    }

    this.renderer = null;
};

/**
 * Will return a HTML Image of the texture
 *
 * @return {Image}
 */
RenderTexture.prototype.getImage = function ()
{
    var image = new Image();
    image.src = this.getBase64();
    return image;
};

/**
 * Will return a a base64 encoded string of this texture. It works by calling RenderTexture.getCanvas and then running toDataURL on that.
 *
 * @return {string} A base64 encoded string of the texture.
 */
RenderTexture.prototype.getBase64 = function ()
{
    return this.getCanvas().toDataURL();
};

/**
 * Creates a Canvas element, renders this RenderTexture to it and then returns it.
 *
 * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
 */
RenderTexture.prototype.getCanvas = function ()
{
    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        var gl =  this.renderer.gl;
        var width = this.textureBuffer.width;
        var height = this.textureBuffer.height;

        var webGLPixels = new Uint8Array(4 * width * height);

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        var tempCanvas = new CanvasBuffer(width, height);
        var canvasData = tempCanvas.context.getImageData(0, 0, width, height);
        canvasData.data.set(webGLPixels);

        tempCanvas.context.putImageData(canvasData, 0, 0);

        return tempCanvas.canvas;
    }
    else
    {
        return this.textureBuffer.canvas;
    }
};

},{"../const":3,"../math":13,"../renderers/canvas/utils/CanvasBuffer":25,"../renderers/webgl/managers/FilterManager":34,"../renderers/webgl/utils/RenderTarget":45,"./BaseTexture":49,"./Texture":51}],51:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    VideoBaseTexture = require('./VideoBaseTexture'),
    TextureUvs = require('./TextureUvs'),
    eventTarget = require('../utils/eventTarget'),
    math = require('../math'),
    utils = require('../utils');

/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * var texture = PIXI.Texture.fromImage('assets/image.png');
 * var sprite1 = new PIXI.Sprite(texture);
 * var sprite2 = new PIXI.Sprite(texture);
 * ```
 *
 * @class
 * @mixes eventTarget
 * @memberof PIXI
 * @param baseTexture {BaseTexture} The base texture source to create the texture from
 * @param [frame] {Rectangle} The rectangle frame of the texture to show
 * @param [crop] {Rectangle} The area of original texture
 * @param [trim] {Rectangle} Trimmed texture rectangle
 * @param [rotate] {boolean} indicates whether the texture should be rotated by 90 degrees ( used by texture packer )
 */
function Texture(baseTexture, frame, crop, trim, rotate)
{
    /**
     * Does this Texture have any frame data assigned to it?
     *
     * @member {boolean}
     */
    this.noFrame = false;

    if (!frame)
    {
        this.noFrame = true;
        frame = new math.Rectangle(0, 0, 1, 1);
    }

    if (baseTexture instanceof Texture)
    {
        baseTexture = baseTexture.baseTexture;
    }

  //  console.log(frame);

    /**
     * The base texture that this texture uses.
     *
     * @member {BaseTexture}
     */
    this.baseTexture = baseTexture;

    /**
     * The frame specifies the region of the base texture that this texture uses
     *
     * @member {Rectangle}
     * @private
     */
    this._frame = frame;

    /**
     * The texture trim data.
     *
     * @member {Rectangle}
     */
    this.trim = trim;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    this.valid = false;

    /**
     * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
     *
     * @member {boolean}
     */
    this.requiresUpdate = false;

    /**
     * The WebGL UV data cache.
     *
     * @member {TextureUvs}
     * @private
     */
    this._uvs = null;

    /**
     * The width of the Texture in pixels.
     *
     * @member {number}
     */
    this.width = 0;

    /**
     * The height of the Texture in pixels.
     *
     * @member {number}
     */
    this.height = 0;

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @member {Rectangle}
     */
    this.crop = crop || frame;//new math.Rectangle(0, 0, 1, 1);

    /**
     * Indicates whether the texture should be rotated by 90 degrees
     *
     * @private
     * @member {boolean}
     */
    this.rotate = !!rotate;

    if (baseTexture.hasLoaded)
    {
        if (this.noFrame)
        {
            frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
        }
        this.frame = frame;
    }
    else
    {
        baseTexture.addEventListener('loaded', this.onBaseTextureLoaded.bind(this));
    }
}

Texture.prototype.constructor = Texture;
module.exports = Texture;

eventTarget.mixin(Texture.prototype);

Object.defineProperties(Texture.prototype, {
    frame: {
        get: function ()
        {
            return this._frame;
        },
        set: function (frame)
        {
            this._frame = frame;

            this.noFrame = false;

            this.width = frame.width;
            this.height = frame.height;



            if (!this.trim && !this.rotate && (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height))
            {
                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);
            }

            //this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;
            this.valid = frame && frame.width && frame.height && this.baseTexture.hasLoaded;

            if (this.trim)
            {

                this.width = this.trim.width;
                this.height = this.trim.height;
                this._frame.width = this.trim.width;
                this._frame.height = this.trim.height;
            }
            else
            {
                this.crop = frame;
            }

             if (this.valid)
            {
                this._updateUvs();
            }
        }
    }
});

/**
 * Updates this texture on the gpu.
 *
 */
Texture.prototype.update = function ()
{
    this.baseTexture.update();
};

/**
 * Called when the base texture is loaded
 *
 * @private
 */
Texture.prototype.onBaseTextureLoaded = function ()
{
    var baseTexture = this.baseTexture;
    baseTexture.removeEventListener('loaded', this.onLoaded);

    // TODO this code looks confusing.. boo to abusing getters and setterss!
    if (this.noFrame)
    {
        this.frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
    }
    else
    {
        this.frame = this._frame;
    }

    this.emit( 'update', this );
};

/**
 * Destroys this texture
 *
 * @param destroyBase {boolean} Whether to destroy the base texture as well
 */
Texture.prototype.destroy = function (destroyBase)
{
    if (destroyBase)
    {
        this.baseTexture.destroy();
    }

    this.valid = false;
};

Texture.prototype.clone = function ()
{
    return new Texture(this.baseTexture, this.frame, this.crop, this.trim, this.rotate);
};

/**
 * Updates the internal WebGL UV cache.
 *
 * @private
 */
Texture.prototype._updateUvs = function ()
{
    if (!this._uvs)
    {
        this._uvs = new TextureUvs();
    }

    this._uvs.set(this.crop, this.baseTexture, this.rotate);
};

/**
 * Helper function that creates a Texture object from the given image url.
 * If the image is not in the texture cache it will be  created and loaded.
 *
 * @static
 * @param imageUrl {string} The image url of the texture
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture} The newly created texture
 */
Texture.fromImage = function (imageUrl, crossorigin, scaleMode)
{
    var texture = utils.TextureCache[imageUrl];

    if (!texture)
    {
        texture = new Texture(BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
        utils.TextureCache[imageUrl] = texture;
    }

    return texture;
};

/**
 * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @return {Texture} The newly created texture
 */
Texture.fromFrame = function (frameId)
{
    var texture = utils.TextureCache[frameId];

    if (!texture)
    {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
    }

    return texture;
};

/**
 * Helper function that creates a new Texture based on the given canvas element.
 *
 * @static
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture}
 */
Texture.fromCanvas = function (canvas, scaleMode)
{
    return new Texture(BaseTexture.fromCanvas(canvas, scaleMode));
};

/**
 * Helper function that creates a new Texture based on the given video element.
 *
 * @static
 * @param video {HTMLVideoElement}
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture} A Texture
 */
Texture.fromVideo = function (video, scaleMode)
{
    return new Texture(VideoBaseTexture.baseTextureFromVideo(video, scaleMode));
};

Texture.fromVideoUrl = function (videoUrl, scaleMode)
{
    return new Texture(VideoBaseTexture.fromUrl(videoUrl, scaleMode));
};

/**
 * Adds a texture to the global utils.TextureCache. This cache is shared across the whole PIXI object.
 *
 * @static
 * @param texture {Texture} The Texture to add to the cache.
 * @param id {string} The id that the texture will be stored against.
 */
Texture.addTextureToCache = function (texture, id)
{
    utils.TextureCache[id] = texture;
};

/**
 * Remove a texture from the global utils.TextureCache.
 *
 * @static
 * @param id {string} The id of the texture to be removed
 * @return {Texture} The texture that was removed
 */
Texture.removeTextureFromCache = function (id)
{
    var texture = utils.TextureCache[id];

    delete utils.TextureCache[id];
    delete utils.BaseTextureCache[id];

    return texture;
};

Texture.emptyTexture = new Texture(new BaseTexture());

},{"../math":13,"../utils":57,"../utils/eventTarget":56,"./BaseTexture":49,"./TextureUvs":52,"./VideoBaseTexture":53}],52:[function(require,module,exports){

/**
 * A standard object to store the Uvs of a texture
 *
 * @class
 * @private
 */
function TextureUvs()
{
    this.x0 = 0;
    this.y0 = 0;

    this.x1 = 0;
    this.y1 = 0;

    this.x2 = 0;
    this.y2 = 0;

    this.x3 = 0;
    this.y3 = 0;
}

module.exports = TextureUvs;

/**
 * Sets the texture Uvs based on the given frame information
 * @param frame {Rectangle}
 * @param baseFrame {Rectangle}
 * @param rotate {boolean} Whether or not the frame is rotated
 * @private
 */
TextureUvs.prototype.set = function (frame, baseFrame, rotate)
{
    var tw = baseFrame.width;
    var th = baseFrame.height;

    if(rotate)
    {
        this.x0 = (frame.x + frame.height) / tw;
        this.y0 = frame.y / th;

        this.x1 = (frame.x + frame.height) / tw;
        this.y1 = (frame.y + frame.width) / th;

        this.x2 = frame.x / tw;
        this.y2 = (frame.y + frame.width) / th;

        this.x3 = frame.x / tw;
        this.y3 = frame.y / th;
    }
    else
    {

        this.x0 = frame.x / tw;
        this.y0 = frame.y / th;

        this.x1 = (frame.x + frame.width) / tw;
        this.y1 = frame.y / th;

        this.x2 = (frame.x + frame.width) / tw;
        this.y2 = (frame.y + frame.height) / th;

        this.x3 = frame.x / tw;
        this.y3 = (frame.y + frame.height) / th;
    }
};

},{}],53:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    utils = require('../utils');

/**
 * A texture of a [playing] Video.
 *
 * Video base textures mimic Pixi BaseTexture.from.... method in their creation process.
 *
 * This can be used in several ways, such as:
 *
 * ```js
 * var texture = PIXI.VideoBaseTexture.fromUrl('http://mydomain.com/video.mp4');
 *
 * var texture = PIXI.VideoBaseTexture.fromUrl({ src: 'http://mydomain.com/video.mp4', mime: 'video/mp4' });
 *
 * var texture = PIXI.VideoBaseTexture.fromUrls(['/video.webm', '/video.mp4']);
 *
 * var texture = PIXI.VideoBaseTexture.fromUrls([
 *     { src: '/video.webm', mime: 'video/webm' },
 *     { src: '/video.mp4', mime: 'video/mp4' }
 * ]);
 * ```
 *
 * See the ["deus" demo](http://www.goodboydigital.com/pixijs/examples/deus/).
 *
 * @class
 * @extends BaseTexture
 * @memberof PIXI
 * @param source {HTMLVideoElement}
 * @param [scaleMode] {number} See {@link SCALE_MODES} for possible values
 */
function VideoBaseTexture(source, scaleMode)
{
    if (!source)
    {
        throw new Error('No video source element specified.');
    }

    // hook in here to check if video is already available.
    // BaseTexture looks for a source.complete boolean, plus width & height.

    if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height)
    {
        source.complete = true;
    }

    BaseTexture.call(this, source, scaleMode);

    /**
     * Should the base texture automatically update itself, set to true by default
     *
     * @member {boolean}
     * @default true
     */
    this.autoUpdate = false;

    this._onUpdate = this._onUpdate.bind(this);
    this._onCanPlay = this._onCanPlay.bind(this);

    if (!source.complete)
    {
        source.addEventListener('canplay', this._onCanPlay);
        source.addEventListener('canplaythrough', this._onCanPlay);

        // started playing..
        source.addEventListener('play', this._onPlayStart.bind(this));
        source.addEventListener('pause', this._onPlayStop.bind(this));
    }

    this.__loaded = false;
}

VideoBaseTexture.prototype = Object.create(BaseTexture.prototype);
VideoBaseTexture.prototype.constructor = VideoBaseTexture;
module.exports = VideoBaseTexture;

/**
 * The internal update loop of the video base texture, only runs when autoUpdate is set to true
 * @private
 */
VideoBaseTexture.prototype._onUpdate = function ()
{
    if (this.autoUpdate)
    {
        window.requestAnimationFrame(this._onUpdate);
        this.update();
    }
};

/**
 * Runs the update loop when the video is ready to play
 * @private
 */
VideoBaseTexture.prototype._onPlayStart = function ()
{
    if (!this.autoUpdate)
    {
        window.requestAnimationFrame(this._onUpdate);
        this.autoUpdate = true;
    }
};

/**
 * Fired when a pause event is triggered, stops the update loop
 * @private
 */
VideoBaseTexture.prototype._onPlayStop = function ()
{
    this.autoUpdate = false;
};

/**
 * Fired when the video is loaded and ready to play
 * @private
 */
VideoBaseTexture.prototype._onCanPlay = function ()
{
    this.hasLoaded = true;

    if (this.source)
    {
        this.source.removeEventListener('canplay', this._onCanPlay);
        this.source.removeEventListener('canplaythrough', this._onCanPlay);

        this.width = this.source.videoWidth;
        this.height = this.source.videoHeight;

        this.source.play();

        // prevent multiple loaded dispatches..
        if (!this.__loaded)
        {
            this.__loaded = true;
            this.emit('loaded', this);
        }
    }
};

/**
 * Destroys this texture
 *
 */
VideoBaseTexture.prototype.destroy = function ()
{
    if (this.source && this.source._pixiId)
    {
        utils.BaseTextureCache[ this.source._pixiId ] = null;
        delete utils.BaseTextureCache[ this.source._pixiId ];

        this.source._pixiId = null;
        delete this.source._pixiId;
    }

    BaseTexture.prototype.destroy.call(this);
};

/**
 * Mimic Pixi BaseTexture.from.... method.
 *
 * @static
 * @param video {HTMLVideoElement}
 * @param scaleMode {number} See {@link SCALE_MODES} for possible values
 * @return {VideoBaseTexture}
 */
VideoBaseTexture.fromVideo = function (video, scaleMode)
{
    if (!video._pixiId)
    {
        video._pixiId = 'video_' + utils.uuid();
    }

    var baseTexture = utils.BaseTextureCache[video._pixiId];

    if (!baseTexture)
    {
        baseTexture = new VideoBaseTexture(video, scaleMode);
        utils.BaseTextureCache[ video._pixiId ] = baseTexture;
    }

    return baseTexture;
};

/**
 * Helper function that creates a new BaseTexture based on the given video element.
 * This BaseTexture can then be used to create a texture
 *
 * @static
 * @param videoSrc {string|object|string[]|object[]} The URL(s) for the video.
 * @param [videoSrc.src] {string} One of the source urls for the video
 * @param [videoSrc.mime] {string} The mimetype of the video (e.g. 'video/mp4'). If not specified
 *  the url's extension will be used as the second part of the mime type.
 * @param scaleMode {number} See {@link SCALE_MODES} for possible values
 * @return {VideoBaseTexture}
 */
VideoBaseTexture.fromUrl = function (videoSrc, scaleMode)
{
    var video = document.createElement('video');

    // array of objects or strings
    if (Array.isArray(videoSrc))
    {
        for (var i = 0; i < videoSrc.length; ++i)
        {
            video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
        }
    }
    // single object or string
    else
    {
        video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
    }

    video.load();
    video.play();

    return VideoBaseTexture.fromVideo(video, scaleMode);
};

VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;

function createSource(path, type)
{
    if (!type)
    {
        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
    }

    var source = document.createElement('source');

    source.src = path;
    source.type = type;

    return source;
}

},{"../utils":57,"./BaseTexture":49}],54:[function(require,module,exports){
/**
 * Creates an homogenous object for tracking events so users can know what to expect.
 *
 * @class
 * @memberof PIXI.utils
 * @param target {object} The target object that the event is called on
 * @param name {string} The string name of the event that was triggered
 * @param data {object} Arbitrary event data to pass along
 */
function EventData(target, name, data)
{
    // for duck typing in the ".on()" function
    this.__isEventObject = true;

    /**
     * Tracks the state of bubbling propagation. Do not
     * set this directly, instead use `event.stopPropagation()`
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    this.stopped = false;

    /**
     * Tracks the state of sibling listener propagation. Do not
     * set this directly, instead use `event.stopImmediatePropagation()`
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    this.stoppedImmediate = false;

    /**
     * The original target the event triggered on.
     *
     * @member {object}
     * @readonly
     */
    this.target = target;

    /**
     * The string name of the event that this represents.
     *
     * @member {string}
     * @readonly
     */
    this.type = name;

    /**
     * The data that was passed in with this event.
     *
     * @member {object}
     * @readonly
     */
    this.data = data;

    /**
     * The timestamp when the event occurred.
     *
     * @member {number}
     * @readonly
     */
    this.timeStamp = Date.now();
}

EventData.prototype.constructor = EventData;
module.exports = EventData;

/**
 * Stops the propagation of events up the scene graph (prevents bubbling).
 *
 */
EventData.prototype.stopPropagation = function stopPropagation()
{
    this.stopped = true;
};

/**
 * Stops the propagation of events to sibling listeners (no longer calls any listeners).
 *
 */
EventData.prototype.stopImmediatePropagation = function stopImmediatePropagation()
{
    this.stoppedImmediate = true;
};

},{}],55:[function(require,module,exports){
//TODO: Have Graphics use https://github.com/mattdesl/shape2d
// and https://github.com/mattdesl/shape2d-triangulate instead of custom code.

/*
    PolyK library
    url: http://polyk.ivank.net
    Released under MIT licence.

    Copyright (c) 2012 Ivan Kuckir

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    This is an amazing lib!

    Slightly modified by Mat Groves (matgroves.com);
*/

/**
 * Based on the Polyk library http://polyk.ivank.net released under MIT licence.
 * This is an amazing lib!
 * Slightly modified by Mat Groves (matgroves.com);
 *
 * @memberof PIXI.utils
 */
var PolyK = module.exports = {};

/**
 * Triangulates shapes for webGL graphic fills.
 *
 */
PolyK.Triangulate = function (p)
{
    var sign = true;

    var n = p.length >> 1;
    if (n < 3) return [];

    var tgs = [];
    var avl = [];
    for (var i = 0; i < n; i++) avl.push(i);

    i = 0;
    var al = n;
    while (al > 3)
    {
        var i0 = avl[(i+0)%al];
        var i1 = avl[(i+1)%al];
        var i2 = avl[(i+2)%al];

        var ax = p[2*i0],  ay = p[2*i0+1];
        var bx = p[2*i1],  by = p[2*i1+1];
        var cx = p[2*i2],  cy = p[2*i2+1];

        var earFound = false;
        if (PolyK._convex(ax, ay, bx, by, cx, cy, sign))
        {
            earFound = true;
            for (var j = 0; j < al; j++)
            {
                var vi = avl[j];
                if (vi === i0 || vi === i1 || vi === i2) continue;

                if (PolyK._PointInTriangle(p[2*vi], p[2*vi+1], ax, ay, bx, by, cx, cy))
                {
                    earFound = false;
                    break;
                }
            }
        }

        if (earFound)
        {
            tgs.push(i0, i1, i2);
            avl.splice((i+1)%al, 1);
            al--;
            i = 0;
        }
        else if (i++ > 3*al)
        {
            // need to flip flip reverse it!
            // reset!
            if (sign)
            {
                tgs = [];
                avl = [];
                for (i = 0; i < n; i++) avl.push(i);

                i = 0;
                al = n;

                sign = false;
            }
            else
            {
             //   window.console.log("PIXI Warning: shape too complex to fill");
                return null;
            }
        }
    }

    tgs.push(avl[0], avl[1], avl[2]);
    return tgs;
};

/**
 * Checks whether a point is within a triangle
 *
 * @param px {number} x coordinate of the point to test
 * @param py {number} y coordinate of the point to test
 * @param ax {number} x coordinate of the a point of the triangle
 * @param ay {number} y coordinate of the a point of the triangle
 * @param bx {number} x coordinate of the b point of the triangle
 * @param by {number} y coordinate of the b point of the triangle
 * @param cx {number} x coordinate of the c point of the triangle
 * @param cy {number} y coordinate of the c point of the triangle
 * @private
 * @return {boolean}
 */
PolyK._PointInTriangle = function (px, py, ax, ay, bx, by, cx, cy)
{
    var v0x = cx-ax;
    var v0y = cy-ay;
    var v1x = bx-ax;
    var v1y = by-ay;
    var v2x = px-ax;
    var v2y = py-ay;

    var dot00 = v0x*v0x+v0y*v0y;
    var dot01 = v0x*v1x+v0y*v1y;
    var dot02 = v0x*v2x+v0y*v2y;
    var dot11 = v1x*v1x+v1y*v1y;
    var dot12 = v1x*v2x+v1y*v2y;

    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    // Check if point is in triangle
    return (u >= 0) && (v >= 0) && (u + v < 1);
};

/**
 * Checks whether a shape is convex
 *
 * @private
 * @return {boolean}
 */
PolyK._convex = function (ax, ay, bx, by, cx, cy, sign)
{
    return ((ay-by)*(cx-bx) + (bx-ax)*(cy-by) >= 0) === sign;
};

},{}],56:[function(require,module,exports){
var EventData = require('./EventData');

var tempEventObject = new EventData(null, null, {});

/**
 * Mixins event emitter functionality to an object.
 *
 * @mixin
 * @memberof PIXI.utils
 * @example
 *      function MyEmitter() {}
 *
 *      eventTarget.mixin(MyEmitter.prototype);
 *
 *      var em = new MyEmitter();
 *      em.emit('eventName', 'some data', 'some more data', {}, null, ...);
 */
function eventTarget(obj)
{
    /**
     * Return a list of assigned event listeners.
     *
     * @memberof eventTarget
     * @param eventName {string} The events that should be listed.
     * @return {Array} An array of listener functions
     */
    obj.listeners = function listeners(eventName)
    {
        this._listeners = this._listeners || {};

        return this._listeners[eventName] ? this._listeners[eventName].slice() : [];
    };

    /**
     * Emit an event to all registered event listeners.
     *
     * @memberof eventTarget
     * @alias dispatchEvent
     * @param eventName {string} The name of the event.
     * @return {boolean} Indication if we've emitted an event.
     */
    obj.emit = obj.dispatchEvent = function emit(eventName, data)
    {
        this._listeners = this._listeners || {};

        // fast return when there are no listeners
        if (!this._listeners[eventName])
        {
            return;
        }

        //backwards compat with old method ".emit({ type: 'something' })"
        //lets not worry about old ways of using stuff for v3
        /*
        if (typeof eventName === 'object')
        {
            data = eventName;
            eventName = eventName.type;
        }
        */

        //ensure we are using a real pixi event
        //instead of creating a new object lets use an the temp one ( save new creation for each event )
        if ( !data || !data.__isEventObject )
        {
            tempEventObject.target=  this;
            tempEventObject.type = eventName;
            tempEventObject.data = data;

            data = tempEventObject;
        }

        //iterate the listeners
        var listeners = this._listeners[eventName].slice(0),
            length = listeners.length,
            fn = listeners[0],
            i;

        for (i = 0; i < length; fn = listeners[++i])
        {
            //call the event listener scope is currently determined by binding the listener
            //way faster than 'call'
            fn(data);

            //if "stopImmediatePropagation" is called, stop calling sibling events
            if (data.stoppedImmediate)
            {
                return this;
            }
        }

        //if "stopPropagation" is called then don't bubble the event
        if (data.stopped)
        {
            return this;
        }

        return this;
    };

    /**
     * Register a new EventListener for the given event.
     *
     * @memberof eventTarget
     * @alias addEventListener
     * @param eventName {string} Name of the event.
     * @param callback {Functon} fn Callback function.
     */
    obj.on = obj.addEventListener = function on(eventName, fn)
    {
        this._listeners = this._listeners || {};

        (this._listeners[eventName] = this._listeners[eventName] || [])
            .push(fn);

        return this;
    };

    /**
     * Add an EventListener that's only called once.
     *
     * @memberof eventTarget
     * @param eventName {string} Name of the event.
     * @param callback {Function} Callback function.
     */
    obj.once = function once(eventName, fn)
    {
        this._listeners = this._listeners || {};

        var self = this;
        function onceHandlerWrapper()
        {
            fn.apply(self.off(eventName, onceHandlerWrapper), arguments);
        }
        onceHandlerWrapper._originalHandler = fn;

        return this.on(eventName, onceHandlerWrapper);
    };

    /**
     * Remove event listeners.
     *
     * @memberof eventTarget
     * @alias removeEventListener
     * @param eventName {string} The event we want to remove.
     * @param callback {Function} The listener that we need to find.
     */
    obj.off = obj.removeEventListener = function off(eventName, fn)
    {
        this._listeners = this._listeners || {};

        if (!this._listeners[eventName])
        {
            return this;
        }

        var list = this._listeners[eventName],
            i = fn ? list.length : 0;

        while (i-- > 0)
        {
            if (list[i] === fn || list[i]._originalHandler === fn)
            {
                list.splice(i, 1);
            }
        }

        if (list.length === 0)
        {
            // delete causes deoptimization
            // lets set it to null
            this._listeners[eventName] = null;
        }

        return this;
    };

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @memberof eventTarget
     * @param eventName {string} The event you want to remove all listeners for.
     */
    obj.removeAllListeners = function removeAllListeners(eventName)
    {
        this._listeners = this._listeners || {};

        if (!this._listeners[eventName])
        {
            return this;
        }

        // delete causes deoptimization
        // lets set it to null
        this._listeners[eventName] = null;

        return this;
    };
}

module.exports = {
    /**
     * Mixes in the properties of the eventTarget into another object
     *
     * @param object {object} The obj to mix into
     */
    mixin: function mixin(obj)
    {
        eventTarget(obj);
    }
};

},{"./EventData":54}],57:[function(require,module,exports){
var CONST = require('../const');

/**
 * @namespace PIXI.utils
 */
var utils = module.exports = {
    _uid: 0,
    _saidHello: false,

    RAFramePolyfill:require('./requestAnimationFramePolyfill'),
    EventData:      require('./EventData'),
    eventTarget:    require('./eventTarget'),
    pluginTarget:   require('./pluginTarget'),
    PolyK:          require('./PolyK'),


    /**
     * Gets the next uuid
     *
     * @return {number} The next uuid to use.
     */
    uuid: function ()
    {
        return ++utils._uid;
    },

    /**
     * Converts a hex color number to an [R, G, B] array
     *
     * @param hex {number}
     * @return {number[]} An array representing the [R, G, B] of the color.
     */
    hex2rgb: function (hex, out)
    {
        out = out || [];

        out[0] = (hex >> 16 & 0xFF) / 255;
        out[1] = (hex >> 8 & 0xFF) / 255;
        out[2] = (hex & 0xFF) / 255;

        return out;
    },

    /**
     * Converts a hex color number to a string.
     *
     * @param hex {number}
     * @return {string} The string color.
     */
    hex2string: function (hex)
    {
        hex = hex.toString(16);
        hex = '000000'.substr(0, 6 - hex.length) + hex;

        return '#' + hex;
    },

    /**
     * Converts a color as an [R, G, B] array to a hex number
     *
     * @param rgb {number[]}
     * @return {number} The color number
     */
    rgb2hex: function (rgb)
    {
        return ((rgb[0]*255 << 16) + (rgb[1]*255 << 8) + rgb[2]*255);
    },

    /**
     * Checks whether the Canvas BlendModes are supported by the current browser
     *
     * @return {boolean} whether they are supported
     */
    canUseNewCanvasBlendModes: function ()
    {
        if (typeof document === 'undefined')
        {
            return false;
        }

        var pngHead = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/';
        var pngEnd = 'AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';

        var magenta = new Image();
        magenta.src = pngHead + 'AP804Oa6' + pngEnd;

        var yellow = new Image();
        yellow.src = pngHead + '/wCKxvRF' + pngEnd;

        var canvas = document.createElement('canvas');
        canvas.width = 6;
        canvas.height = 1;

        var context = canvas.getContext('2d');
        context.globalCompositeOperation = 'multiply';
        context.drawImage(magenta, 0, 0);
        context.drawImage(yellow, 2, 0);

        var data = context.getImageData(2,0,1,1).data;

        return (data[0] === 255 && data[1] === 0 && data[2] === 0);
    },

    /**
     * Given a number, this function returns the closest number that is a power of two
     * this function is taken from Starling Framework as its pretty neat ;)
     *
     * @param number {number}
     * @return {number} the closest number that is a power of two
     */
    getNextPowerOfTwo: function (number)
    {
        // see: http://en.wikipedia.org/wiki/Power_of_two#Fast_algorithm_to_check_if_a_positive_number_is_a_power_of_two
        if (number > 0 && (number & (number - 1)) === 0)
        {
            return number;
        }
        else
        {
            var result = 1;

            while (result < number)
            {
                result <<= 1;
            }

            return result;
        }
    },

    /**
     * checks if the given width and height make a power of two rectangle
     *
     * @param width {number}
     * @param height {number}
     * @return {boolean}
     */
    isPowerOfTwo: function (width, height)
    {
        return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
    },

    /**
     * get the resolution of an asset by looking for the prefix
     * used by spritesheets and image urls
     *
     * @param url {string} the image path
     * @return {boolean}
     */
    getResolutionOfUrl: function (url)
    {
        var resolution = CONST.RETINA_PREFIX.exec(url);

        if (resolution)
        {
           return parseFloat(resolution[1]);
        }

        return 1;
    },

    /**
     * Logs out the version and renderer information for this running instance of PIXI.
     * If you don't want to see this message you can set `PIXI.utils._saidHello = true;`
     * so the library thinks it already said it. Keep in mind that doing that will forever
     * makes you a jerk face.
     *
     * @param {string} type - The string renderer type to log.
     * @constant
     * @static
     */
    sayHello: function (type)
    {
        if (utils._saidHello)
        {
            return;
        }

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
        {
            var args = [
                '%c %c %c Pixi.js ' + CONST.VERSION + ' - ' + type + '  %c ' + ' %c ' + ' http://www.pixijs.com/  %c %c ♥%c♥%c♥ ',
                'background: #ff66a5',
                'background: #ff66a5',
                'color: #ff66a5; background: #030307;',
                'background: #ff66a5',
                'background: #ffc3dc',
                'background: #ff66a5',
                'color: #ff2424; background: #fff',
                'color: #ff2424; background: #fff',
                'color: #ff2424; background: #fff'
            ];

            window.console.log.apply(console, args); //jshint ignore:line
        }
        else if (window.console)
        {
            window.console.log('Pixi.js ' + CONST.VERSION + ' - ' + type + ' - http://www.pixijs.com/'); //jshint ignore:line
        }

        utils._saidHello = true;
    },

    TextureCache: {},
    BaseTextureCache: {}
};

},{"../const":3,"./EventData":54,"./PolyK":55,"./eventTarget":56,"./pluginTarget":58,"./requestAnimationFramePolyfill":59}],58:[function(require,module,exports){
/**
 * Mixins functionality to make an object have "plugins".
 *
 * @mixin
 * @memberof PIXI.utils
 * @param obj {object} The object to mix into.
 * @example
 *      function MyObject() {}
 *
 *      pluginTarget.mixin(MyObject);
 */
function pluginTarget(obj)
{
    obj.__plugins = {};

    /**
     * Adds a plugin to an object
     *
     * @param pluginName {string} The events that should be listed.
     * @param ctor {Object} ?? @alvin
     */
    obj.registerPlugin = function (pluginName, ctor)
    {
        obj.__plugins[pluginName] = ctor;
    };

    /**
     * Instantiates all the plugins of this object
     *
     */
    obj.prototype.initPlugins = function ()
    {
        this.plugins = this.plugins || {};

        for (var o in obj.__plugins)
        {
            this.plugins[o] = new (obj.__plugins[o])(this);
        }
    };

    /**
     * Removes all the plugins of this object
     *
     */
    obj.prototype.destroyPlugins = function ()
    {
        for (var o in this.plugins)
        {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }

        this.plugins = null;
    };
}


module.exports = {
    /**
     * Mixes in the properties of the pluginTarget into another object
     *
     * @param object {object} The obj to mix into
     */
    mixin: function mixin(obj)
    {
        pluginTarget(obj);
    }
};

},{}],59:[function(require,module,exports){
(function(window) {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    })(window);

},{}],60:[function(require,module,exports){

},{}],61:[function(require,module,exports){
module.exports={
  "name": "perenquenjs",
  "version": "1.0.0",
  "homepage": "http://perenquenjs.com",
  "description": "HTML5 Game Framework for mobile, web and desktop development.",
  "author": "Nazari Gonzalez <nazari.nz@gmail.com> (http://www.nazariglez.com)",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/Nazariglez/perenquenjs"
  },
  "bin": {
    "perenquen": "./cli/perenquen"
  },
  "private": true,
  "dependencies": {
    "browserify": "^9.0.3",
    "colors": "^1.0.3",
    "commander": "^2.6.0",
    "gulp": "^3.8.11",
    "gulp-cached": "^1.0.2",
    "gulp-jshint": "^1.9.2",
    "gulp-rename": "^1.2.0",
    "gulp-uglify": "^1.1.0",
    "require-dir": "^0.1.0",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^2.4.0"
  },
  "main": "./cli/perenquen",
  "browser": "./build/perenquen.js"
}

},{}],62:[function(require,module,exports){
var ctorName = require('./const').DEFAULT_CONSTRUCTOR_NAME;

/**
 * Just a basic class, does nothing. It's useful just to inherits from it.
 * @class
 * @memberof PQ
 */
function Class(){
    return this;
}

Class.prototype = {};
Class.prototype.constructor = Class;

/**
 * Extends a parent class with an object as a parameter, and return a new child class
 * @static
 * @param childProto {object}
 * @returns {Class}
 */
Class.extend = function(childProto){
    var child = function PQClass(){
        if(typeof this[ctorName] === "function") return this[ctorName].apply(this, arguments);
        return this;
    };
    child._super = this.prototype;
    child.prototype = Object.create(this.prototype);

    var inheritanceFn = function (name, fn) {
        console.log(name);
        return function () {
            var tmp = this._super;
            this._super = child._super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
        };
    };

    for(var pr in  childProto){
        if (childProto.hasOwnProperty(pr)) {
            var property = Object.getOwnPropertyDescriptor(childProto, pr);

            if (typeof property.value === "function"){
                if(child._super[pr] && typeof child._super[pr] === "function") {
                    property.value = inheritanceFn(pr, property.value);
                }else if(pr === ctorName){
                    property.value = inheritanceFn("constructor", property.value);
                }
            }

            Object.defineProperty(child.prototype, pr, property);
        }
    }

    child.extend = Class.extend;
    child.prototype.constructor = child;
    return child;
};

module.exports = Class;
},{"./const":65}],63:[function(require,module,exports){
var CONST = require('./const'),
    utils = require('./utils'),
    autoDetectRenderer = require('../../lib/pixi/src/core').autoDetectRenderer,
    WebGLRenderer = require('../../lib/pixi/src/core/renderers/webgl/WebGLRenderer'),
    SceneManager = require('./SceneManager');

/**
 * The main object of your game.
 * @class
 * @memberof PQ
 * @param width=800
 * @param height=600
 * @param [gameOptions] {object} Optional game parameters
 * @param [gameOptions.debug=false] {boolean} Show development info, default false
 * @param [gameOptions.frameLimit] {number} limit the elapsed time
 * @param [gameOptions.sayHello=true] {boolean} logs out the version, renderer, and audio type
 * @param [gameOptions.noWebAudio=false] {boolean} prevents selection of WebAudio type
 * @param [gameOptions.persistantData=true] {boolean} Use localStorage to save all you need
 * @param [gameOptions.stopAtVisibilityChange] {boolean} Pause the game when lost the focus, default true
 * @param [gameOptions.audioExts] {array} Force load audio files in this order
 * @param [gameOptions.noWebGL=false] {boolean} prevents selection of WebGL renderer, even if such is present
 * @param [rendererOptions] {object} Optional game parameters
 * @param [rendererOptions.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [rendererOptions.transparent=false] {boolean} If the render view is transparent, default false
 * @param [rendererOptions.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [rendererOptions.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
 *      need to call toDataUrl on the webgl context
 * @param [rendererOptions.resolution=1] {number} the resolution of the renderer
 */
function Game(width, height, gameOptions, rendererOptions){
    /**
     * The config of the game
     *
     * @member {object}
     * @default CONST.DEFAULT_GAME_OPTIONS
     */
    this.config = utils.defaultObject(CONST.DEFAULT_GAME_OPTIONS, gameOptions);
    utils._saidHello = !this.config.sayHello;
    rendererOptions = utils.defaultObject(CONST.DEFAULT_RENDER_OPTIONS, rendererOptions);

    /**
     * The id of requestAnimationFrame
     *
     * @member {number}
     */
    this.raf = -1;

    /**
     * The renderer width
     * @member {number}
     */
    this.width = width || 800;

    /**
     * The renderer height
     * @member {number}
     */
    this.height = height || 600;

    /**
     * Renderer in use
     * @member {WebGLRenderer|CanvasRenderer}
     */
    this.renderer = getRenderer(this.width, this.height, rendererOptions, this.config.noWebGL);
    this.resize(this.width, this.height);

    /**
     * The time between frames
     * @member {number}
     */
    this.frameElapsedTime = 0;

    /**
     * Last frame time
     * @member {number}
     */
    this.frameLastTime = 0;

    /**
     * The total game time
     * @member {number}
     */
    this.time = 0;

    /**
     * The delta time
     * @member {number}
     */
    this.delta = 0;

    /**
     * Whether the renderer is a webgl
     * @member {boolean}
     */
    this.isWebGL = (this.renderer instanceof WebGLRenderer);

    /**
     * The scene manager for this game
     * @member {SceneManager}
     */
    this.sceneManager = new SceneManager(this);

    if(this.config.stopAtVisibilityChange){
        utils.watchVisibilityChanges(this);
    }
}

Game.prototype.constructor = Game;

/**
 * Start the request animation frame
 * @returns {Game}
 */
Game.prototype.start = function(){
    this.updateTime();
    this.animate();
    //TODO: Unpause audio manager;
    return this;
};

/**
 * Stop the request animation frame
 * @returns {Game}
 */
Game.prototype.stop = function(){
    window.cancelAnimationFrame(this.raf);
    //TODO: pause audioManager
    return this;
};

/**
 * Draw and animate all the actors in the scene
 * @returns {Game}
 */
Game.prototype.animate = function(){
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
    this.updateTime();
    this.renderer.render(this.sceneManager);

    this.sceneManager.animate(this.time, this.delta);

    return this;
};

/**
 * Calculate all game times
 * @returns {Game}
 */
Game.prototype.updateTime = function(){
    var now = Date.now();
    var time = now - this.frameLastTime;
    this.frameElapsedTime = (time <= this.config.frameLimit) ? time : this.config.frameLimit;
    this.frameLastTime = now;
    this.delta = this.frameElapsedTime/1000;
    this.time += this.delta;

    return this;
};

/**
 * Resize the view using DOM Style
 * @param width {number}
 * @param height {number}
 * @returns {Game}
 */
Game.prototype.resize = function(width, height){
    var canvas = this.renderer.view;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    return this;
};


/**
 * Stop or start the game when the focus is in or out
 * @param hidden {boolean}
 * @returns {Game}
 */
Game.prototype.visibilityChange = function(hidden){
    if(this.config.stopAtVisibilityChange){
        if(hidden){
            this.stop();
        }else{
            this.start();
        }
    }
    return this;
};

module.exports = Game;

function getRenderer(width, height, options, noWebGL){
    if(navigator.isCocoonJS&&!options.view)options.view = window.document.createElement("screencanvas");

    var renderer = new autoDetectRenderer(width, height, options, noWebGL);
    window.document.body.appendChild(renderer.view);

    return renderer;
}
},{"../../lib/pixi/src/core":10,"../../lib/pixi/src/core/renderers/webgl/WebGLRenderer":29,"./SceneManager":64,"./const":65,"./utils":68}],64:[function(require,module,exports){
var Container = require('../../lib/pixi/src/core/display/Container'),
    Scene = require('../display/Scene');

/**
 * Manage and store all the scenes in the game
 *
 * @class
 * @memberof PQ
 * @param game {Game}
 */
function SceneManager(game){
    Container.call(this);

    /**
     *
     * @member {Game}
     */
    this.game = game;

    /**
     *
     * @member {array}
     */
    this.scenes = [];

    /**
     *
     * @member {Scene}
     */
    this.currentScene = null;
}

SceneManager.prototype = Object.create(Container.prototype);
SceneManager.prototype.constructor = SceneManager;

/**
 * Store a new scene
 *
 * @param scene {Scene}
 * @param [id] {string}
 * @returns {SceneManager}
 */
SceneManager.prototype.addScene = function(scene, id){
    if(id)scene.id = id;
    this.scenes.push(scene);
    return this;
};

/**
 * Animate the currentScene
 * @param gameTime {number}
 * @param delta {number}
 * @returns {SceneManager}
 */
SceneManager.prototype.animate = function(gameTime, delta){
    if(this.currentScene&&this.currentScene.animate){
        this.currentScene.animate(gameTime, delta);
    }

    return this;
};

/**
 * Set a scene to render and animate
 * @param scene {string|Scene}
 * @returns {SceneManager}
 */
SceneManager.prototype.setCurrentScene = function(scene){
    if(typeof scene === "string")scene = this.getSceneById(scene);
    scene.setManager(this);
    this.currentScene = scene;
    this.children.length = 0;
    this.addChild(scene);
    return this;
};

/**
 * Create a new scene, if the param id is not provided the id will be set automatically
 * @param [id] {string}
 * @returns {Scene}
 */
SceneManager.prototype.createScene = function(id){
    var scene = new Scene();
    scene.id = (id) ? id : 'id'+this.scenes.length;
    this.addScene(scene);

    return scene;
};

/**
 * Return the requested scene or null if don't exists
 * @param id {string}
 * @returns {null|Scene}
 */
SceneManager.prototype.getSceneById = function(id){
    var scene = null;
    for(var i = 0; i < this.scenes.length; i++){
        if(id === this.scenes[i].id){
            scene = this.scenes[i];
        }
    }
    return scene;
};

/**
 * Remove the scene from the array
 * @param scene {string|Scene}
 * @returns {SceneManager}
 */
SceneManager.prototype.removeScene = function(scene){
    if(typeof scene === "string")scene = this.getSceneById(scene);
    var index = this.scenes.indexOf(scene);
    if(index !== -1){
        this.scenes.splice(index,1);
    }
    return this;
};

/**
 * Remove all the scenes in this manager
 * @returns {SceneManager}
 */
SceneManager.prototype.removeAllScenes = function(){
    this.children.length = 0;
    this.scenes.length = 0;
    return this;
};


module.exports = SceneManager;
},{"../../lib/pixi/src/core/display/Container":4,"../display/Scene":71}],65:[function(require,module,exports){
var constants = require('../../lib/pixi/src/core/const');

/**
 * String of the current PQ version
 *
 * @static
 * @constant
 * @property {string} VERSION
 */
constants.VERSION = require('../../package.json').version;

/**
 * String of the current PIXI version
 * @constant
 * @property {string} PIXI_VERSION
 */
constants.PIXI_VERSION = require('../../lib/pixi/package.json').version;

/**
 * Constant to identify the Audio Type.
 *
 * @static
 * @constant
 * @property {object} AUDIO_TYPE
 * @property {number} AUDIO_TYPE.UNKNOWN
 * @property {number} AUDIO_TYPE.WEBAUDIO
 * @property {number} AUDIO_TYPE.HTMLAUDIO
 */
constants.AUDIO_TYPE = {
    UNKNOWN : 0,
    WEBAUDIO : 1,
    HTMLADUDIO : 2
};

/**
 * The default game options if none are supplied to {@link PQ.Game}
 *
 * @static
 * @constant
 * @property {object} DEFAULT_GAME_OPTIONS
 * @property {boolean} DEFAULT_RENDER_OPTIONS.debug=false
 * @property {boolean} DEFAULT_RENDER_OPTIONS.sayHello=true
 * @property {boolean} DEFAULT_RENDER_OPTIONS.noWebAudio=false
 * @property {boolean} DEFAULT_RENDER_OPTIONS.noWebGL=false
 * @property {number} DEFAULT_RENDER_OPTIONS.frameLimit=35
 * @property {boolean} DEFAULT_RENDER_OPTIONS.persistantData=true
 * @property {boolean} DEFAULT_RENDER_OPTIONS.stopAtVisibilityChange=true
 * @property {array} DEFAULT_RENDER_OPTIONS.audioExts
 * @property {boolean} DEFAULT_RENDER_OPTIONS.pauseOnVisibilityChange=true
 */
constants.DEFAULT_GAME_OPTIONS = {
    debug: false,
    sayHello: true,
    noWebAudio: false,
    noWebGL: false,
    frameLimit: 35, //TODO: Cambiar esto, puede confundir por fps y no ms, quizás definir numero de frame minimo?
    persistantData: true,
    stopAtVisibilityChange: true,
    audioExts: ['ogg', 'mp3', 'wav'],
    pauseOnVisibilityChange: true
};

/**
 * The default name for all the constructors when we use the custom class system
 *
 * @static
 * @constant
 * @property {string} DEFAULT_CONSTRUCTOR_NAME
 */
constants.DEFAULT_CONSTRUCTOR_NAME = "_init";

module.exports = constants;

},{"../../lib/pixi/package.json":2,"../../lib/pixi/src/core/const":3,"../../package.json":61}],66:[function(require,module,exports){
var addInherits = require('./utils').addInherits;

module.exports = function(core){
    addInherits(core.utils.Pool);
    addInherits(core.Graphics);
    addInherits(core.Scene);
    addInherits(core.Game);
    addInherits(core.SceneManager);

    return core;
};
},{"./utils":68}],67:[function(require,module,exports){
/**
 * Create a pool of objects to improve the performance and avoid the garbage collector
 * @class
 * @memberof PQ
 * @param objectConstructor {*}
 * @param args {array}
 * @param [num] {number}
 */
function Pool(objectConstructor, args, num){

    /**
     * All objects in this pool
     * @member {Array}
     */
    this.poolItems = [];

    /**
     * The 'constructor' for all objects in this pool
     * @member {*|Object}
     */
    this.objectConstructor = objectConstructor || Object;

    /**
     * Params to create the object
     * @member {array}
     */
    this.args = args || [];

    /**
     * Number of items to create
     * @member {number}
     */
    this.num = num;


    if(num)this.generateObjects(num);
    return this;
}

Pool.prototype.constructor = Pool;

/**
 * Get the pool length
 * @returns {Number}
 */
Pool.prototype.getLength = function(){
    return this.poolItems.length;
};

/**
 * Return an instance of the objects in the pool
 * @returns {*}
 */
Pool.prototype.getObject = function(){
    if(this.num && this.poolItems.length <= this.num*0.10){
        this.generateObjects(this.num);
    }else if(this.poolItems.length <= 0){
        return null;
    }

    var obj = this.poolItems.pop();
    if(obj.onPoolExit){
        obj.onPoolExit(this);
    }
    return obj;
};

/**
 * Put an instance in the pool list
 * @param obj {*}
 * @returns {Pool}
 */
Pool.prototype.putObject = function(obj){
    this.poolItems.unshift(obj);
    if(obj.onPoolEnter){
        obj.onPoolEnter(this);
    }
    return this;
};

/**
 * Generate and sotrage all the objects
 * @param num {number}
 * @returns {Pool}
 */
Pool.prototype.generateObjects = function(num){
    for(var i = 0; i < num; i++){
        this.poolItems.push(this.createNewObject());
    }
    return this;
};

/**
 * Create a new instances of the pool object with the arguments
 * @returns {*}
 */
Pool.prototype.createNewObject = function(){
    var scope = this;
    var obj;

    try {
        obj = new (Function.prototype.bind.apply(this.objectConstructor, ([null]).concat(this.args)))();
    }catch(e){
        obj = applyFix(this.objectConstructor, this.args);
    }

    obj.returnToPool = function(){
        scope.putObject(this);
        return this;
    };

    return obj;
};

module.exports = Pool;

function applyFix(obj, args){
    var ev = "Function('obj',";
    var fn = "\"return new obj(";

    for(var i = 0; i < args.length; i++){
        ev += "'a"+i+"',";
        fn += "a"+i;
        if(i !== args.length-1){
            fn += ",";
        }
    }

    fn += ")\"";
    ev += fn + ")";

    return (eval(ev)).apply(this, ([obj]).concat(args));
}
},{}],68:[function(require,module,exports){
var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils'),
    Pool = require('./Pool'),
    Class = require('../Class');

/**
 * logs out renderer type, audio type, and version
 */
utils.sayHello = function(){
    //TODO: RendererType, AudioType, Pixi credits
    if(!this._saidHello)console.log('Perenquen.js v'+CONST.VERSION + ' [http://perequenjs.com]');
};

/**
 * Set default parameters in child object with the parent values
 *
 * @param parent {object}
 * @param child {object}
 * @returns {object}
 */
utils.defaultObject = function(parent, child){
    parent = parent || {};
    child = child || {};
    for(var key in parent){
        child[key] = (child[key] !== undefined && child[key] !== null) ? child[key] : parent[key];
    }

    return child;
};

/**
 * Extend an object with the properties from other object
 * @param obj {object}
 * @param mixin {object}
 */
utils.mixin = function(obj, mixin){
    for(var key in mixin){
        obj.prototype[key] = mixin[key];
    }
};

/**
 * Provide the ability to inherits easily
 * @param obj
 */
utils.addInherits = function(obj){
    obj.extend = Class.extend;
};

/**
 * Watch when the browser lost the focus and notify the game object
 * @param game {Game}
 */
utils.watchVisibilityChanges = require('./visibilityChange');

utils.Pool = Pool;

module.exports = utils;
},{"../../../lib/pixi/src/core/utils":57,"../Class":62,"../const":65,"./Pool":67,"./visibilityChange":69}],69:[function(require,module,exports){
/**
 * Watch when the browser lost the focus and notify the game object
 * @param game {Game}
 */
module.exports = function(game){
    document.addEventListener(getVisibilityChange(), function() {
        var hidden = document.hidden || document.webkitHidden || document.mozHidden || document.msHidden;
        game.visibilityChange(!!hidden);
    }, false);
};

function getVisibilityChange(){
    if(typeof document.hidden !== 'undefined'){
        return 'visibilitychange';
    }else if(typeof document.webkitHidden !== 'undefined'){
        return 'webkitvisibilitychange';
    }else if(typeof document.mozHidden !== 'undefined'){
        return 'mozvisibilitychange';
    }else if(typeof document.msHidden !== 'undefined'){
        return 'msvisibilitychange';
    }
}

},{}],70:[function(require,module,exports){
var Graphics = require('../../lib/pixi/src/core/graphics/Graphics'),
    utils = require('../core/utils'),
    mixin = require('./mixin');

utils.mixin(Graphics, mixin);




module.exports = Graphics;
},{"../../lib/pixi/src/core/graphics/Graphics":6,"../core/utils":68,"./mixin":72}],71:[function(require,module,exports){
var Graphics = require('../../lib/pixi/src/core/graphics/Graphics');

function Scene(){
    Graphics.call(this);
    this._backgroundColor = null;
    this._backgroundColorDirty = false;

    this.manager = null;
}

Scene.prototype = Object.create(Graphics.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.setBackgroundColor = function(color){
    this.backgroundColor = color;
    return this;
};

Scene.prototype.setManager = function(manager){
    this.manager = manager;
    return this;
};

Scene.prototype.animate = function(gameTime, delta){
    if(this.update(gameTime, delta)){
        if(this._backgroundColorDirty){
            this.clear();
            if(typeof this.backgroundColor === "number"){
                this.beginFill(this.backgroundColor)
                    .drawRect(0,0,this.manager.game.width,this.manager.game.height)
                    .endFill();
            }
            this._backgroundColorDirty = false;
        }

        var len = this.children.length;
        for(var i = 0; i < len; i++){
            this.children[i].animate(gameTime, delta);
        }
    }

    return this;
};

Scene.prototype.update = function(gameTime, delta){
    return true;
};

Object.defineProperties(Scene.prototype, {
    backgroundColor : {
        get: function(){
            return this._backgroundColor;
        },
        set: function(color){
            this._backgroundColorDirty = true;
            this._backgroundColor = color;
        }
    }
});

module.exports = Scene;

},{"../../lib/pixi/src/core/graphics/Graphics":6}],72:[function(require,module,exports){
module.exports = {
    addTo: function(parent){
        if(parent)parent.addChild(this);
        return this;
    },

    update: function(gameTime, delta){
        return true;
    },

    animate: function(gameTime, delta){
        if(this.update(gameTime, delta)){
            //TODO: Animate

            var len = this.children.length;
            for(var i = 0; i < len; i++){
                this.children[i].animate(gameTime, delta);
            }
        }

        return this;
    }
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJsaWIvcGl4aS9wYWNrYWdlLmpzb24iLCJsaWIvcGl4aS9zcmMvY29yZS9jb25zdC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL2Rpc3BsYXkvQ29udGFpbmVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZGlzcGxheS9EaXNwbGF5T2JqZWN0LmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZ3JhcGhpY3MvR3JhcGhpY3MuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy9HcmFwaGljc0RhdGEuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy93ZWJnbC9HcmFwaGljc1JlbmRlcmVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZ3JhcGhpY3Mvd2ViZ2wvV2ViR0xHcmFwaGljc0RhdGEuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9pbmRleC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvTWF0cml4LmpzIiwibGliL3BpeGkvc3JjL2NvcmUvbWF0aC9Qb2ludC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvaW5kZXguanMiLCJsaWIvcGl4aS9zcmMvY29yZS9tYXRoL3NoYXBlcy9DaXJjbGUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9tYXRoL3NoYXBlcy9FbGxpcHNlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvbWF0aC9zaGFwZXMvUG9seWdvbi5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvc2hhcGVzL1JlY3RhbmdsZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvc2hhcGVzL1JvdW5kZWRSZWN0YW5nbGUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvUGFydGljbGVDb250YWluZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvd2ViZ2wvUGFydGljbGVCdWZmZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvd2ViZ2wvUGFydGljbGVSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3BhcnRpY2xlcy93ZWJnbC9QYXJ0aWNsZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9TeXN0ZW1SZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9jYW52YXMvQ2FudmFzUmVuZGVyZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0J1ZmZlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzR3JhcGhpY3MuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc01hc2tNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNUaW50ZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9maWx0ZXJzL0Fic3RyYWN0RmlsdGVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL2ZpbHRlcnMvRlhBQUZpbHRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9maWx0ZXJzL1Nwcml0ZU1hc2tGaWx0ZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvQmxlbmRNb2RlTWFuYWdlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9tYW5hZ2Vycy9GaWx0ZXJNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL01hc2tNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL1NoYWRlck1hbmFnZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvU3RlbmNpbE1hbmFnZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvV2ViR0xNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL3NoYWRlcnMvQ29tcGxleFByaW1pdGl2ZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1ByaW1pdGl2ZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1NoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1RleHR1cmVTaGFkZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvT2JqZWN0UmVuZGVyZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvUXVhZC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC91dGlscy9SZW5kZXJUYXJnZXQuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvU3RlbmNpbE1hc2tTdGFjay5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3Nwcml0ZXMvU3ByaXRlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvc3ByaXRlcy93ZWJnbC9TcHJpdGVSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3RleHR1cmVzL0Jhc2VUZXh0dXJlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdGV4dHVyZXMvUmVuZGVyVGV4dHVyZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3RleHR1cmVzL1RleHR1cmUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS90ZXh0dXJlcy9UZXh0dXJlVXZzLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdGV4dHVyZXMvVmlkZW9CYXNlVGV4dHVyZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL0V2ZW50RGF0YS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL1BvbHlLLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdXRpbHMvZXZlbnRUYXJnZXQuanMiLCJsaWIvcGl4aS9zcmMvY29yZS91dGlscy9pbmRleC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL3BsdWdpblRhcmdldC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL3JlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsInBhY2thZ2UuanNvbiIsInNyYy9jb3JlL0NsYXNzLmpzIiwic3JjL2NvcmUvR2FtZS5qcyIsInNyYy9jb3JlL1NjZW5lTWFuYWdlci5qcyIsInNyYy9jb3JlL2NvbnN0LmpzIiwic3JjL2NvcmUvaW5oZXJpdHMuanMiLCJzcmMvY29yZS91dGlscy9Qb29sLmpzIiwic3JjL2NvcmUvdXRpbHMvaW5kZXguanMiLCJzcmMvY29yZS91dGlscy92aXNpYmlsaXR5Q2hhbmdlLmpzIiwic3JjL2Rpc3BsYXkvR3JhcGhpY3MuanMiLCJzcmMvZGlzcGxheS9TY2VuZS5qcyIsInNyYy9kaXNwbGF5L21peGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzltQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM2dCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbmlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuL2NvcmUvY29uc3QnKTtcblxudmFyIGNvcmUgPSB7XG4gICAgQ2xhc3MgOiByZXF1aXJlKCcuL2NvcmUvQ2xhc3MnKSxcblxuICAgIHV0aWxzIDogcmVxdWlyZSgnLi9jb3JlL3V0aWxzJyksXG5cbiAgICBHYW1lIDogcmVxdWlyZSgnLi9jb3JlL0dhbWUnKSxcbiAgICBTY2VuZU1hbmFnZXIgOiByZXF1aXJlKCcuL2NvcmUvU2NlbmVNYW5hZ2VyJyksXG4gICAgU2NlbmUgOiByZXF1aXJlKCcuL2Rpc3BsYXkvU2NlbmUnKSxcbiAgICBHcmFwaGljcyA6IHJlcXVpcmUoJy4vZGlzcGxheS9HcmFwaGljcycpXG59O1xuXG4vL0FkZCBDb25zdGFudHMgdG8gdGhlIG1haW4gb2JqZWN0XG5mb3IodmFyIGtleSBpbiBDT05TVCkge1xuICAgIGNvcmVba2V5XSA9IENPTlNUW2tleV07XG59XG5cbi8vQWRkIGluaGVyaXRhbmNlIHN5c3RlbSwgYW5kIGV4cG9ydCB0aGUgY29yZVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvcmUvaW5oZXJpdHMnKShjb3JlKTsiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcInBpeGkuanNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMy4wLjAtcmMyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQaXhpLmpzIGlzIGEgZmFzdCBsaWdodHdlaWdodCAyRCBsaWJyYXJ5IHRoYXQgd29ya3MgYWNyb3NzIGFsbCBkZXZpY2VzLlwiLFxuICBcImF1dGhvclwiOiBcIk1hdCBHcm92ZXNcIixcbiAgXCJjb250cmlidXRvcnNcIjogW1xuICAgIFwiQ2hhZCBFbmdsZXIgPGNoYWRAcGFudGhlcmRldi5jb20+XCIsXG4gICAgXCJSaWNoYXJkIERhdmV5IDxyZGF2ZXlAZ21haWwuY29tPlwiXG4gIF0sXG4gIFwibWFpblwiOiBcIi4vc3JjL2luZGV4LmpzXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vZ29vZGJveWRpZ2l0YWwuY29tL1wiLFxuICBcImJ1Z3NcIjogXCJodHRwczovL2dpdGh1Yi5jb20vR29vZEJveURpZ2l0YWwvcGl4aS5qcy9pc3N1ZXNcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vR29vZEJveURpZ2l0YWwvcGl4aS5qcy5naXRcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcImd1bHAgdGVzdFwiLFxuICAgIFwiZG9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vanNkb2MgLWMgLi9ndWxwL3V0aWwvanNkb2MuY29uZi5qc29uXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl44LjAuMlwiLFxuICAgIFwiY2hhaVwiOiBcIl4xLjEwLjBcIixcbiAgICBcImRlbFwiOiBcIl4xLjEuMFwiLFxuICAgIFwiZXhvcmNpc3RcIjogXCJeMC4xLjZcIixcbiAgICBcImd1bHBcIjogXCJeMy44LjEwXCIsXG4gICAgXCJndWxwLWNhY2hlZFwiOiBcIl4xLjAuMVwiLFxuICAgIFwiZ3VscC1jb25jYXRcIjogXCJeMi41LjJcIixcbiAgICBcImd1bHAtZGVidWdcIjogXCJeMi4wLjBcIixcbiAgICBcImd1bHAtanNkb2NcIjogXCJeMC4xLjRcIixcbiAgICBcImd1bHAtanNoaW50XCI6IFwiXjEuOS4wXCIsXG4gICAgXCJndWxwLXBsdW1iZXJcIjogXCJeMC42LjZcIixcbiAgICBcImd1bHAtcmVuYW1lXCI6IFwiXjEuMi4wXCIsXG4gICAgXCJndWxwLXVnbGlmeVwiOiBcIl4xLjAuMlwiLFxuICAgIFwiZ3VscC11dGlsXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJpbmstZG9jc3RyYXBcIjogXCJeMC41LjJcIixcbiAgICBcImpzZG9jXCI6IFwiXjMuMy4wLWFscGhhMTNcIixcbiAgICBcImpzaGludC1zdW1tYXJ5XCI6IFwiXjAuNC4wXCIsXG4gICAgXCJrYXJtYVwiOiBcIl4wLjEyLjI4XCIsXG4gICAgXCJrYXJtYS1maXJlZm94LWxhdW5jaGVyXCI6IFwiXjAuMS4wXCIsXG4gICAgXCJrYXJtYS1tb2NoYVwiOiBcIl4wLjEuMTBcIixcbiAgICBcImthcm1hLXNwZWMtcmVwb3J0ZXJcIjogXCJeMC4wLjE2XCIsXG4gICAgXCJtaW5pbWlzdFwiOiBcIl4xLjEuMFwiLFxuICAgIFwibW9jaGFcIjogXCJeMi4xLjBcIixcbiAgICBcInJlcXVpcmUtZGlyXCI6IFwiXjAuMS4wXCIsXG4gICAgXCJydW4tc2VxdWVuY2VcIjogXCJeMS4wLjJcIixcbiAgICBcInZpbnlsLWJ1ZmZlclwiOiBcIl4xLjAuMFwiLFxuICAgIFwidmlueWwtc291cmNlLXN0cmVhbVwiOiBcIl4xLjAuMFwiLFxuICAgIFwid2F0Y2hpZnlcIjogXCJeMi4yLjFcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJhc3luY1wiOiBcIl4wLjkuMFwiLFxuICAgIFwicmVzb3VyY2UtbG9hZGVyXCI6IFwiXjEuMi4yXCIsXG4gICAgXCJicmZzXCI6IFwiXjEuMi4wXCJcbiAgfSxcbiAgXCJicm93c2VyaWZ5XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcImJyZnNcIlxuICAgIF1cbiAgfVxufVxuIiwiLyoqXG4gKiBDb25zdGFudCB2YWx1ZXMgdXNlZCBpbiBwaXhpXG4gKlxuICogQG1lbWJlcm9mIFBJWElcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLyoqXG4gICAgICogU3RyaW5nIG9mIHRoZSBjdXJyZW50IFBJWEkgdmVyc2lvblxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWRVJTSU9OXG4gICAgICovXG4gICAgVkVSU0lPTjogcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbixcblxuICAgIC8qKlxuICAgICAqIENvbnN0YW50IHRvIGlkZW50aWZ5IHRoZSBSZW5kZXJlciBUeXBlLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBSRU5ERVJFUl9UWVBFXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFJFTkRFUkVSX1RZUEUuVU5LTk9XTlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBSRU5ERVJFUl9UWVBFLldFQkdMXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFJFTkRFUkVSX1RZUEUuQ0FOVkFTXG4gICAgICovXG4gICAgUkVOREVSRVJfVFlQRToge1xuICAgICAgICBVTktOT1dOOiAgICAwLFxuICAgICAgICBXRUJHTDogICAgICAxLFxuICAgICAgICBDQU5WQVM6ICAgICAyXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhcmlvdXMgYmxlbmQgbW9kZXMgc3VwcG9ydGVkIGJ5IFBJWEkuIElNUE9SVEFOVCAtIFRoZSBXZWJHTCByZW5kZXJlciBvbmx5IHN1cHBvcnRzXG4gICAgICogdGhlIE5PUk1BTCwgQURELCBNVUxUSVBMWSBhbmQgU0NSRUVOIGJsZW5kIG1vZGVzLiBBbnl0aGluZyBlbHNlIHdpbGwgc2lsZW50bHkgYWN0IGxpa2VcbiAgICAgKiBOT1JNQUwuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IEJMRU5EX01PREVTXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLk5PUk1BTFxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5BRERcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuTVVMVElQTFlcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuU0NSRUVOXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLk9WRVJMQVlcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuREFSS0VOXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkxJR0hURU5cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuQ09MT1JfRE9ER0VcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuQ09MT1JfQlVSTlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5IQVJEX0xJR0hUXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLlNPRlRfTElHSFRcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuRElGRkVSRU5DRVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5FWENMVVNJT05cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuSFVFXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLlNBVFVSQVRJT05cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuQ09MT1JcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuTFVNSU5PU0lUWVxuICAgICAqL1xuICAgIEJMRU5EX01PREVTOiB7XG4gICAgICAgIE5PUk1BTDogICAgICAgICAwLFxuICAgICAgICBBREQ6ICAgICAgICAgICAgMSxcbiAgICAgICAgTVVMVElQTFk6ICAgICAgIDIsXG4gICAgICAgIFNDUkVFTjogICAgICAgICAzLFxuICAgICAgICBPVkVSTEFZOiAgICAgICAgNCxcbiAgICAgICAgREFSS0VOOiAgICAgICAgIDUsXG4gICAgICAgIExJR0hURU46ICAgICAgICA2LFxuICAgICAgICBDT0xPUl9ET0RHRTogICAgNyxcbiAgICAgICAgQ09MT1JfQlVSTjogICAgIDgsXG4gICAgICAgIEhBUkRfTElHSFQ6ICAgICA5LFxuICAgICAgICBTT0ZUX0xJR0hUOiAgICAgMTAsXG4gICAgICAgIERJRkZFUkVOQ0U6ICAgICAxMSxcbiAgICAgICAgRVhDTFVTSU9OOiAgICAgIDEyLFxuICAgICAgICBIVUU6ICAgICAgICAgICAgMTMsXG4gICAgICAgIFNBVFVSQVRJT046ICAgICAxNCxcbiAgICAgICAgQ09MT1I6ICAgICAgICAgIDE1LFxuICAgICAgICBMVU1JTk9TSVRZOiAgICAgMTZcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjYWxlIG1vZGVzIHRoYXQgYXJlIHN1cHBvcnRlZCBieSBwaXhpLlxuICAgICAqXG4gICAgICogVGhlIERFRkFVTFQgc2NhbGUgbW9kZSBhZmZlY3RzIHRoZSBkZWZhdWx0IHNjYWxpbmcgbW9kZSBvZiBmdXR1cmUgb3BlcmF0aW9ucy5cbiAgICAgKiBJdCBjYW4gYmUgcmUtYXNzaWduZWQgdG8gZWl0aGVyIExJTkVBUiBvciBORUFSRVNULCBkZXBlbmRpbmcgdXBvbiBzdWl0YWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0NBTEVfTU9ERVNcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gU0NBTEVfTU9ERVMuREVGQVVMVD1MSU5FQVJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gU0NBTEVfTU9ERVMuTElORUFSIFNtb290aCBzY2FsaW5nXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFNDQUxFX01PREVTLk5FQVJFU1QgUGl4ZWxhdGluZyBzY2FsaW5nXG4gICAgICovXG4gICAgU0NBTEVfTU9ERVM6IHtcbiAgICAgICAgREVGQVVMVDogICAgMCxcbiAgICAgICAgTElORUFSOiAgICAgMCxcbiAgICAgICAgTkVBUkVTVDogICAgMVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZml4IHRoYXQgZGVub3RlcyBhIFVSTCBpcyBmb3IgYSByZXRpbmEgYXNzZXRcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gUkVUSU5BX1BSRUZJWFxuICAgICAqL1xuICAgIC8vZXhhbXBsZTogJ0AyeCcsXG4gICAgUkVUSU5BX1BSRUZJWDogL0AoLispeC8sXG5cbiAgICBSRVNPTFVUSU9OOjEsXG5cbiAgICBGSUxURVJfUkVTT0xVVElPTjoxLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgcmVuZGVyIG9wdGlvbnMgaWYgbm9uZSBhcmUgc3VwcGxpZWQgdG8ge0BsaW5rIFBJWEkuV2ViR0xSZW5kZXJlcn1cbiAgICAgKiBvciB7QGxpbmsgUElYSS5DYW52YXNSZW5kZXJlcn0uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IERFRkFVTFRfUkVOREVSX09QVElPTlNcbiAgICAgKiBAcHJvcGVydHkge0hUTUxDYW52YXNFbGVtZW50fSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLnZpZXc9bnVsbFxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy50cmFuc3BhcmVudD1mYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5hbnRpYWxpYXM9ZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMuZm9yY2VGWEFBPWZhbHNlXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLnByZXNlcnZlRHJhd2luZ0J1ZmZlcj1mYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLnJlc29sdXRpb249MVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLmJhY2tncm91bmRDb2xvcj0weDAwMDAwMFxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5jbGVhckJlZm9yZVJlbmRlcj10cnVlXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLmF1dG9SZXNpemU9ZmFsc2VcbiAgICAgKi9cbiAgICBERUZBVUxUX1JFTkRFUl9PUFRJT05TOiB7XG4gICAgICAgIHZpZXc6IG51bGwsXG4gICAgICAgIHJlc29sdXRpb246IDEsXG4gICAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICAgIGZvcmNlRlhBQTogZmFsc2UsXG4gICAgICAgIGF1dG9SZXNpemU6IGZhbHNlLFxuICAgICAgICB0cmFuc3BhcmVudDogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwMDAwMDAsXG4gICAgICAgIGNsZWFyQmVmb3JlUmVuZGVyOiB0cnVlLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnN0YW50cyB0aGF0IGlkZW50aWZ5IHNoYXBlcywgbWFpbmx5IHRvIHByZXZlbnQgYGluc3RhbmNlb2ZgIGNhbGxzLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBTSEFQRVNcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0hBUEVTLlBPTFk9MFxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBTSEFQRVMuUkVDVD0xXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFNIQVBFUy5DSVJDPTJcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0hBUEVTLkVMSVA9M1xuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBTSEFQRVMuUlJFQz00XG4gICAgICovXG4gICAgU0hBUEVTOiB7XG4gICAgICAgIFBPTFk6IDAsXG4gICAgICAgIFJFQ1Q6IDEsXG4gICAgICAgIENJUkM6IDIsXG4gICAgICAgIEVMSVA6IDMsXG4gICAgICAgIFJSRUM6IDRcbiAgICB9LFxuXG4gICAgU1BSSVRFX0JBVENIX1NJWkU6IDIwMDAgLy9uaWNlIGJhbGFuY2UgYmV0d2VlbiBtb2JpbGUgYW5kIGRlc2t0b3AgbWFjaGluZXNcbn07XG4iLCJ2YXIgbWF0aCA9IHJlcXVpcmUoJy4uL21hdGgnKSxcbiAgICBEaXNwbGF5T2JqZWN0ID0gcmVxdWlyZSgnLi9EaXNwbGF5T2JqZWN0JyksXG4gICAgUmVuZGVyVGV4dHVyZSA9IHJlcXVpcmUoJy4uL3RleHR1cmVzL1JlbmRlclRleHR1cmUnKSxcbiAgICBfdGVtcE1hdHJpeCA9IG5ldyBtYXRoLk1hdHJpeCgpO1xuXG4vKipcbiAqIEEgQ29udGFpbmVyIHJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIGRpc3BsYXkgb2JqZWN0cy5cbiAqIEl0IGlzIHRoZSBiYXNlIGNsYXNzIG9mIGFsbCBkaXNwbGF5IG9iamVjdHMgdGhhdCBhY3QgYXMgYSBjb250YWluZXIgZm9yIG90aGVyIG9iamVjdHMuXG4gKlxuICpgYGBqc1xuICogdmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICogY29udGFpbmVyLmFkZENoaWxkKHNwcml0ZSk7XG4gKiBgYGBcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgRGlzcGxheU9iamVjdFxuICogQG1lbWJlcm9mIFBJWElcbiAqL1xuZnVuY3Rpb24gQ29udGFpbmVyKClcbntcbiAgICBEaXNwbGF5T2JqZWN0LmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXJyYXkgb2YgY2hpbGRyZW4gb2YgdGhpcyBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtEaXNwbGF5T2JqZWN0W119XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xufVxuXG4vLyBjb25zdHJ1Y3RvclxuQ29udGFpbmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGlzcGxheU9iamVjdC5wcm90b3R5cGUpO1xuQ29udGFpbmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnRhaW5lcjtcbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb250YWluZXIucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBDb250YWluZXIsIHNldHRpbmcgdGhpcyB3aWxsIGFjdHVhbGx5IG1vZGlmeSB0aGUgc2NhbGUgdG8gYWNoaWV2ZSB0aGUgdmFsdWUgc2V0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENvbnRhaW5lciNcbiAgICAgKi9cbiAgICB3aWR0aDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLnggKiB0aGlzLmdldExvY2FsQm91bmRzKCkud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMoKS53aWR0aDtcblxuICAgICAgICAgICAgaWYgKHdpZHRoICE9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHZhbHVlIC8gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZS54ID0gMTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIENvbnRhaW5lciwgc2V0dGluZyB0aGlzIHdpbGwgYWN0dWFsbHkgbW9kaWZ5IHRoZSBzY2FsZSB0byBhY2hpZXZlIHRoZSB2YWx1ZSBzZXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ29udGFpbmVyI1xuICAgICAqL1xuICAgIGhlaWdodDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAgdGhpcy5zY2FsZS55ICogdGhpcy5nZXRMb2NhbEJvdW5kcygpLmhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMoKS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChoZWlnaHQgIT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZS55ID0gdmFsdWUgLyBoZWlnaHQgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogQWRkcyBhIGNoaWxkIHRvIHRoZSBjb250YWluZXIuXG4gKlxuICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCB0byBhZGQgdG8gdGhlIGNvbnRhaW5lclxuICogQHJldHVybiB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRoYXQgd2FzIGFkZGVkLlxuICovXG5Db250YWluZXIucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkKVxue1xuICAgIHJldHVybiB0aGlzLmFkZENoaWxkQXQoY2hpbGQsIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGNoaWxkIHRvIHRoZSBjb250YWluZXIgYXQgYSBzcGVjaWZpZWQgaW5kZXguIElmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gKlxuICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdG8gYWRkXG4gKiBAcGFyYW0gaW5kZXgge051bWJlcn0gVGhlIGluZGV4IHRvIHBsYWNlIHRoZSBjaGlsZCBpblxuICogQHJldHVybiB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRoYXQgd2FzIGFkZGVkLlxuICovXG5Db250YWluZXIucHJvdG90eXBlLmFkZENoaWxkQXQgPSBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KVxue1xuICAgIC8vIHByZXZlbnQgYWRkaW5nIHNlbGYgYXMgY2hpbGRcbiAgICBpZiAoY2hpbGQgPT09IHRoaXMpXG4gICAge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gdGhpcy5jaGlsZHJlbi5sZW5ndGgpXG4gICAge1xuICAgICAgICBpZiAoY2hpbGQucGFyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjaGlsZCArICdhZGRDaGlsZEF0OiBUaGUgaW5kZXggJysgaW5kZXggKycgc3VwcGxpZWQgaXMgb3V0IG9mIGJvdW5kcyAnICsgdGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xuICAgIH1cbn07XG5cbi8qKlxuICogU3dhcHMgdGhlIHBvc2l0aW9uIG9mIDIgRGlzcGxheSBPYmplY3RzIHdpdGhpbiB0aGlzIGNvbnRhaW5lci5cbiAqXG4gKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9XG4gKiBAcGFyYW0gY2hpbGQyIHtEaXNwbGF5T2JqZWN0fVxuICovXG5Db250YWluZXIucHJvdG90eXBlLnN3YXBDaGlsZHJlbiA9IGZ1bmN0aW9uIChjaGlsZCwgY2hpbGQyKVxue1xuICAgIGlmIChjaGlsZCA9PT0gY2hpbGQyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbmRleDEgPSB0aGlzLmdldENoaWxkSW5kZXgoY2hpbGQpO1xuICAgIHZhciBpbmRleDIgPSB0aGlzLmdldENoaWxkSW5kZXgoY2hpbGQyKTtcblxuICAgIGlmIChpbmRleDEgPCAwIHx8IGluZGV4MiA8IDApXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N3YXBDaGlsZHJlbjogQm90aCB0aGUgc3VwcGxpZWQgRGlzcGxheU9iamVjdHMgbXVzdCBiZSBjaGlsZHJlbiBvZiB0aGUgY2FsbGVyLicpO1xuICAgIH1cblxuICAgIHRoaXMuY2hpbGRyZW5baW5kZXgxXSA9IGNoaWxkMjtcbiAgICB0aGlzLmNoaWxkcmVuW2luZGV4Ml0gPSBjaGlsZDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggcG9zaXRpb24gb2YgYSBjaGlsZCBEaXNwbGF5T2JqZWN0IGluc3RhbmNlXG4gKlxuICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCBpbnN0YW5jZSB0byBpZGVudGlmeVxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgaW5kZXggcG9zaXRpb24gb2YgdGhlIGNoaWxkIGRpc3BsYXkgb2JqZWN0IHRvIGlkZW50aWZ5XG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q2hpbGRJbmRleCA9IGZ1bmN0aW9uIChjaGlsZClcbntcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHN1cHBsaWVkIERpc3BsYXlPYmplY3QgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBjYWxsZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG59O1xuXG4vKipcbiAqIENoYW5nZXMgdGhlIHBvc2l0aW9uIG9mIGFuIGV4aXN0aW5nIGNoaWxkIGluIHRoZSBkaXNwbGF5IG9iamVjdCBjb250YWluZXJcbiAqXG4gKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCBEaXNwbGF5T2JqZWN0IGluc3RhbmNlIGZvciB3aGljaCB5b3Ugd2FudCB0byBjaGFuZ2UgdGhlIGluZGV4IG51bWJlclxuICogQHBhcmFtIGluZGV4IHtOdW1iZXJ9IFRoZSByZXN1bHRpbmcgaW5kZXggbnVtYmVyIGZvciB0aGUgY2hpbGQgZGlzcGxheSBvYmplY3RcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5zZXRDaGlsZEluZGV4ID0gZnVuY3Rpb24gKGNoaWxkLCBpbmRleClcbntcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc3VwcGxpZWQgaW5kZXggaXMgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmdldENoaWxkSW5kZXgoY2hpbGQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoY3VycmVudEluZGV4LCAxKTsgLy9yZW1vdmUgZnJvbSBvbGQgcG9zaXRpb25cbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpOyAvL2FkZCBhdCBuZXcgcG9zaXRpb25cbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY2hpbGQgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICpcbiAqIEBwYXJhbSBpbmRleCB7TnVtYmVyfSBUaGUgaW5kZXggdG8gZ2V0IHRoZSBjaGlsZCBhdFxuICogQHJldHVybiB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIGF0IHRoZSBnaXZlbiBpbmRleCwgaWYgYW55LlxuICovXG5Db250YWluZXIucHJvdG90eXBlLmdldENoaWxkQXQgPSBmdW5jdGlvbiAoaW5kZXgpXG57XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmNoaWxkcmVuLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0Q2hpbGRBdDogU3VwcGxpZWQgaW5kZXggJyArIGluZGV4ICsgJyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgY2hpbGQgbGlzdCwgb3IgdGhlIHN1cHBsaWVkIERpc3BsYXlPYmplY3QgaXMgbm90IGEgY2hpbGQgb2YgdGhlIGNhbGxlcicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIGNoaWxkIGZyb20gdGhlIGNvbnRhaW5lci5cbiAqXG4gKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9IFRoZSBEaXNwbGF5T2JqZWN0IHRvIHJlbW92ZVxuICogQHJldHVybiB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRoYXQgd2FzIHJlbW92ZWQuXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpXG57XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlQ2hpbGRBdChpbmRleCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBjaGlsZCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5kZXggcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIGluZGV4IHtOdW1iZXJ9IFRoZSBpbmRleCB0byBnZXQgdGhlIGNoaWxkIGZyb21cbiAqIEByZXR1cm4ge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0aGF0IHdhcyByZW1vdmVkLlxuICovXG5Db250YWluZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkQXQgPSBmdW5jdGlvbiAoaW5kZXgpXG57XG4gICAgdmFyIGNoaWxkID0gdGhpcy5nZXRDaGlsZEF0KGluZGV4KTtcblxuICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgcmV0dXJuIGNoaWxkO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIHRoaXMgY29udGFpbmVyIHRoYXQgYXJlIHdpdGhpbiB0aGUgYmVnaW4gYW5kIGVuZCBpbmRleGVzLlxuICpcbiAqIEBwYXJhbSBiZWdpbkluZGV4IHtOdW1iZXJ9IFRoZSBiZWdpbm5pbmcgcG9zaXRpb24uIERlZmF1bHQgdmFsdWUgaXMgMC5cbiAqIEBwYXJhbSBlbmRJbmRleCB7TnVtYmVyfSBUaGUgZW5kaW5nIHBvc2l0aW9uLiBEZWZhdWx0IHZhbHVlIGlzIHNpemUgb2YgdGhlIGNvbnRhaW5lci5cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uIChiZWdpbkluZGV4LCBlbmRJbmRleClcbntcbiAgICB2YXIgYmVnaW4gPSBiZWdpbkluZGV4IHx8IDA7XG4gICAgdmFyIGVuZCA9IHR5cGVvZiBlbmRJbmRleCA9PT0gJ251bWJlcicgPyBlbmRJbmRleCA6IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciByYW5nZSA9IGVuZCAtIGJlZ2luO1xuXG4gICAgaWYgKHJhbmdlID4gMCAmJiByYW5nZSA8PSBlbmQpXG4gICAge1xuICAgICAgICB2YXIgcmVtb3ZlZCA9IHRoaXMuY2hpbGRyZW4uc3BsaWNlKGJlZ2luLCByYW5nZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmVkLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVkW2ldLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVtb3ZlZDtcbiAgICB9XG4gICAgZWxzZSBpZiAocmFuZ2UgPT09IDAgJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdyZW1vdmVDaGlsZHJlbjogbnVtZXJpYyB2YWx1ZXMgYXJlIG91dHNpZGUgdGhlIGFjY2VwdGFibGUgcmFuZ2UuJyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVc2VmdWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdGV4dHVyZSBvZiB0aGUgZGlzcGxheSBvYmplY3QgdGhhdCBjYW4gdGhlbiBiZSB1c2VkIHRvIGNyZWF0ZSBzcHJpdGVzXG4gKiBUaGlzIGNhbiBiZSBxdWl0ZSB1c2VmdWwgaWYgeW91ciBkaXNwbGF5T2JqZWN0IGlzIHN0YXRpYyAvIGNvbXBsaWNhdGVkIGFuZCBuZWVkcyB0byBiZSByZXVzZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcnxXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdXNlZCB0byBnZW5lcmF0ZSB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSByZXNvbHV0aW9uIHtOdW1iZXJ9IFRoZSByZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlIGJlaW5nIGdlbmVyYXRlZFxuICogQHBhcmFtIHNjYWxlTW9kZSB7TnVtYmVyfSBTZWUge0BsaW5rIFNDQUxFX01PREVTfSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtUZXh0dXJlfSBhIHRleHR1cmUgb2YgdGhlIGRpc3BsYXkgb2JqZWN0XG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuZ2VuZXJhdGVUZXh0dXJlID0gZnVuY3Rpb24gKHJlbmRlcmVyLCByZXNvbHV0aW9uLCBzY2FsZU1vZGUpXG57XG4gICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMoKTtcblxuICAgIHZhciByZW5kZXJUZXh0dXJlID0gbmV3IFJlbmRlclRleHR1cmUocmVuZGVyZXIsIGJvdW5kcy53aWR0aCB8IDAsIGJvdW5kcy5oZWlnaHQgfCAwLCByZW5kZXJlciwgc2NhbGVNb2RlLCByZXNvbHV0aW9uKTtcblxuICAgIF90ZW1wTWF0cml4LnR4ID0gLWJvdW5kcy54O1xuICAgIF90ZW1wTWF0cml4LnR5ID0gLWJvdW5kcy55O1xuXG4gICAgcmVuZGVyVGV4dHVyZS5yZW5kZXIodGhpcywgX3RlbXBNYXRyaXgpO1xuXG4gICAgcmV0dXJuIHJlbmRlclRleHR1cmU7XG59O1xuXG4vKlxuICogVXBkYXRlcyB0aGUgdHJhbnNmb3JtIG9uIGFsbCBjaGlsZHJlbiBvZiB0aGlzIGNvbnRhaW5lciBmb3IgcmVuZGVyaW5nXG4gKlxuICogQHByaXZhdGVcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS51cGRhdGVUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICghdGhpcy52aXNpYmxlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybSgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5baV0udXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgfVxufTtcblxuLy8gcGVyZm9ybWFuY2UgaW5jcmVhc2UgdG8gYXZvaWQgdXNpbmcgY2FsbC4uICgxMHggZmFzdGVyKVxuQ29udGFpbmVyLnByb3RvdHlwZS5jb250YWluZXJVcGRhdGVUcmFuc2Zvcm0gPSBDb250YWluZXIucHJvdG90eXBlLnVwZGF0ZVRyYW5zZm9ybTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgQ29udGFpbmVyIGFzIGEgcmVjdGFuZ2xlLiBUaGUgYm91bmRzIGNhbGN1bGF0aW9uIHRha2VzIGFsbCB2aXNpYmxlIGNoaWxkcmVuIGludG8gY29uc2lkZXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IFRoZSByZWN0YW5ndWxhciBib3VuZGluZyBhcmVhXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgICBpZighdGhpcy5fY3VycmVudEJvdW5kcylcbiAgICB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbWF0aC5SZWN0YW5nbGUuRU1QVFk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPIHRoZSBib3VuZHMgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsY3VsYXRlZCB0aGlzIHJlbmRlciBzZXNzaW9uIHNvIHJldHVybiB3aGF0IHdlIGhhdmVcblxuICAgICAgICB2YXIgbWluWCA9IEluZmluaXR5O1xuICAgICAgICB2YXIgbWluWSA9IEluZmluaXR5O1xuXG4gICAgICAgIHZhciBtYXhYID0gLUluZmluaXR5O1xuICAgICAgICB2YXIgbWF4WSA9IC1JbmZpbml0eTtcblxuICAgICAgICB2YXIgY2hpbGRCb3VuZHM7XG4gICAgICAgIHZhciBjaGlsZE1heFg7XG4gICAgICAgIHZhciBjaGlsZE1heFk7XG5cbiAgICAgICAgdmFyIGNoaWxkVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIGlmICghY2hpbGQudmlzaWJsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRWaXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgY2hpbGRCb3VuZHMgPSB0aGlzLmNoaWxkcmVuW2ldLmdldEJvdW5kcygpO1xuXG4gICAgICAgICAgICBtaW5YID0gbWluWCA8IGNoaWxkQm91bmRzLnggPyBtaW5YIDogY2hpbGRCb3VuZHMueDtcbiAgICAgICAgICAgIG1pblkgPSBtaW5ZIDwgY2hpbGRCb3VuZHMueSA/IG1pblkgOiBjaGlsZEJvdW5kcy55O1xuXG4gICAgICAgICAgICBjaGlsZE1heFggPSBjaGlsZEJvdW5kcy53aWR0aCArIGNoaWxkQm91bmRzLng7XG4gICAgICAgICAgICBjaGlsZE1heFkgPSBjaGlsZEJvdW5kcy5oZWlnaHQgKyBjaGlsZEJvdW5kcy55O1xuXG4gICAgICAgICAgICBtYXhYID0gbWF4WCA+IGNoaWxkTWF4WCA/IG1heFggOiBjaGlsZE1heFg7XG4gICAgICAgICAgICBtYXhZID0gbWF4WSA+IGNoaWxkTWF4WSA/IG1heFkgOiBjaGlsZE1heFk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkVmlzaWJsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGguUmVjdGFuZ2xlLkVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuX2JvdW5kcztcblxuICAgICAgICBib3VuZHMueCA9IG1pblg7XG4gICAgICAgIGJvdW5kcy55ID0gbWluWTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gbWF4WCAtIG1pblg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBtYXhZIC0gbWluWTtcblxuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gYm91bmRzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIG5vbi1nbG9iYWwgbG9jYWwgYm91bmRzIG9mIHRoZSBDb250YWluZXIgYXMgYSByZWN0YW5nbGUuXG4gKiBUaGUgY2FsY3VsYXRpb24gdGFrZXMgYWxsIHZpc2libGUgY2hpbGRyZW4gaW50byBjb25zaWRlcmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gVGhlIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGFyZWFcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5nZXRMb2NhbEJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIG1hdHJpeENhY2hlID0gdGhpcy53b3JsZFRyYW5zZm9ybTtcblxuICAgIHRoaXMud29ybGRUcmFuc2Zvcm0gPSBtYXRoLk1hdHJpeC5JREVOVElUWTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAge1xuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgIH1cblxuICAgIHRoaXMud29ybGRUcmFuc2Zvcm0gPSBtYXRyaXhDYWNoZTtcblxuICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCk7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgV2ViR0wgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuICovXG5Db250YWluZXIucHJvdG90eXBlLnJlbmRlcldlYkdMID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuXG4gICAgLy8gaWYgdGhlIG9iamVjdCBpcyBub3QgdmlzaWJsZSBvciB0aGUgYWxwaGEgaXMgMCB0aGVuIG5vIG5lZWQgdG8gcmVuZGVyIHRoaXMgZWxlbWVudFxuICAgIGlmICghdGhpcy52aXNpYmxlIHx8IHRoaXMud29ybGRBbHBoYSA8PSAwIHx8ICF0aGlzLnJlbmRlcmFibGUpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGksIGo7XG5cbiAgICAvLyBkbyBhIHF1aWNrIGNoZWNrIHRvIHNlZSBpZiB0aGlzIGVsZW1lbnQgaGFzIGEgbWFzayBvciBhIGZpbHRlci5cbiAgICBpZiAodGhpcy5fbWFzayB8fCB0aGlzLl9maWx0ZXJzKVxuICAgIHtcbiAgICAgICAgcmVuZGVyZXIuY3VycmVudFJlbmRlcmVyLmZsdXNoKCk7XG5cbiAgICAgICAgLy8gcHVzaCBmaWx0ZXIgZmlyc3QgYXMgd2UgbmVlZCB0byBlbnN1cmUgdGhlIHN0ZW5jaWwgYnVmZmVyIGlzIGNvcnJlY3QgZm9yIGFueSBtYXNraW5nXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJzKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5maWx0ZXJNYW5hZ2VyLnB1c2hGaWx0ZXIodGhpcywgdGhpcy5fZmlsdGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbWFzaylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIubWFza01hbmFnZXIucHVzaE1hc2sodGhpcywgdGhpcy5fbWFzayk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJlci5jdXJyZW50UmVuZGVyZXIuc3RhcnQoKTtcblxuICAgICAgICAvLyBhZGQgdGhpcyBvYmplY3QgdG8gdGhlIGJhdGNoLCBvbmx5IHJlbmRlcmVkIGlmIGl0IGhhcyBhIHRleHR1cmUuXG4gICAgICAgIHRoaXMuX3JlbmRlcldlYkdMKHJlbmRlcmVyKTtcblxuICAgICAgICAvLyBub3cgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBhbmQgbWFrZSBzdXJlIHRoZXkgZ2V0IHJlbmRlcmVkXG4gICAgICAgIGZvciAoaSA9IDAsIGogPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZW5kZXJXZWJHTChyZW5kZXJlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJlci5jdXJyZW50UmVuZGVyZXIuZmx1c2goKTtcblxuICAgICAgICBpZiAodGhpcy5fbWFzaylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIubWFza01hbmFnZXIucG9wTWFzayh0aGlzLCB0aGlzLl9tYXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJzKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5maWx0ZXJNYW5hZ2VyLnBvcEZpbHRlcigpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyZXIuY3VycmVudFJlbmRlcmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuX3JlbmRlcldlYkdMKHJlbmRlcmVyKTtcblxuICAgICAgICAvLyBzaW1wbGUgcmVuZGVyIGNoaWxkcmVuIVxuICAgICAgICBmb3IgKGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0ucmVuZGVyV2ViR0wocmVuZGVyZXIpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBUbyBiZSBvdmVycmlkZGVuIGJ5IHRoZSBzdWJjbGFzc1xuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyXG4gKiBAcHJpdmF0ZVxuICovXG5Db250YWluZXIucHJvdG90eXBlLl9yZW5kZXJXZWJHTCA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICAvLyB0aGlzIGlzIHdoZXJlIGNvbnRlbnQgaXRzZWxmIGdldHMgcmVuZGVyZWQuLi5cbn07XG5cbi8qKlxuICogVG8gYmUgb3ZlcnJpZGRlbiBieSB0aGUgc3ViY2xhc3NcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfSBUaGUgcmVuZGVyZXJcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuX3JlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICAvLyB0aGlzIGlzIHdoZXJlIGNvbnRlbnQgaXRzZWxmIGdldHMgcmVuZGVyZWQuLi5cbn07XG5cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIENhbnZhcyByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuICovXG5Db250YWluZXIucHJvdG90eXBlLnJlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICAvLyBpZiBub3QgdmlzaWJsZSBvciB0aGUgYWxwaGEgaXMgMCB0aGVuIG5vIG5lZWQgdG8gcmVuZGVyIHRoaXNcbiAgICBpZiAoIXRoaXMudmlzaWJsZSB8fCB0aGlzLmFscGhhIDw9IDAgfHwgIXRoaXMucmVuZGVyYWJsZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWFzaylcbiAgICB7XG4gICAgICAgIHJlbmRlcmVyLm1hc2tNYW5hZ2VyLnB1c2hNYXNrKHRoaXMuX21hc2ssIHJlbmRlcmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJDYW52YXMocmVuZGVyZXIpO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAge1xuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnJlbmRlckNhbnZhcyhyZW5kZXJlcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21hc2spXG4gICAge1xuICAgICAgICByZW5kZXJlci5tYXNrTWFuYWdlci5wb3BNYXNrKHJlbmRlcmVyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBjb250YWluZXJcbiAqIEBwYXJhbSBkZXN0cm95Q2hpbGRyZW4ge2Jvb2xlYW59IGlmIHNldCB0byB0cnVlLCBhbGwgdGhlIGNoaWxkcmVuIHdpbGwgaGF2ZSB0aGVpciBkZXN0cm95IG1ldGhvZCBjYWxsZWQgYXMgd2VsbFxuICovXG5Db250YWluZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZGVzdHJveUNoaWxkcmVuKVxue1xuICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblxuICAgIGlmKGRlc3Ryb3lDaGlsZHJlbilcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG59O1xuIiwidmFyIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpLFxuICAgIFJlbmRlclRleHR1cmUgPSByZXF1aXJlKCcuLi90ZXh0dXJlcy9SZW5kZXJUZXh0dXJlJyksXG4gICAgX3RlbXBNYXRyaXggPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYWxsIG9iamVjdHMgdGhhdCBhcmUgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAqIFRoaXMgaXMgYW4gYWJzdHJhY3QgY2xhc3MgYW5kIHNob3VsZCBub3QgYmUgdXNlZCBvbiBpdHMgb3duIHJhdGhlciBpdCBzaG91bGQgYmUgZXh0ZW5kZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG5mdW5jdGlvbiBEaXNwbGF5T2JqZWN0KClcbntcbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgb2JqZWN0IHJlbGF0aXZlIHRvIHRoZSBsb2NhbCBjb29yZGluYXRlcyBvZiB0aGUgcGFyZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7UG9pbnR9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBtYXRoLlBvaW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NhbGUgZmFjdG9yIG9mIHRoZSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtQb2ludH1cbiAgICAgKi9cbiAgICB0aGlzLnNjYWxlID0gbmV3IG1hdGguUG9pbnQoMSwgMSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGl2b3QgcG9pbnQgb2YgdGhlIGRpc3BsYXlPYmplY3QgdGhhdCBpdCByb3RhdGVzIGFyb3VuZFxuICAgICAqXG4gICAgICogQG1lbWJlciB7UG9pbnR9XG4gICAgICovXG4gICAgdGhpcy5waXZvdCA9IG5ldyBtYXRoLlBvaW50KDAsIDApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJvdGF0aW9uIG9mIHRoZSBvYmplY3QgaW4gcmFkaWFucy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcGFjaXR5IG9mIHRoZSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbHBoYSA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmlzaWJpbGl0eSBvZiB0aGUgb2JqZWN0LiBJZiBmYWxzZSB0aGUgb2JqZWN0IHdpbGwgbm90IGJlIGRyYXduLCBhbmRcbiAgICAgKiB0aGUgdXBkYXRlVHJhbnNmb3JtIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIENhbiB0aGlzIG9iamVjdCBiZSByZW5kZXJlZCwgaWYgZmFsc2UgdGhlIG9iamVjdCB3aWxsIG5vdCBiZSBkcmF3biBidXQgdGhlIHVwZGF0ZVRyYW5zZm9ybVxuICAgICAqIG1ldGhvZHMgd2lsbCBzdGlsbCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSBvYmplY3QgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhpcyBkaXNwbGF5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0NvbnRhaW5lcn1cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbXVsdGlwbGllZCBhbHBoYSBvZiB0aGUgZGlzcGxheU9iamVjdFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMud29ybGRBbHBoYSA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHRyYW5zZm9ybSBvZiB0aGUgb2JqZWN0IGJhc2VkIG9uIHdvcmxkIChwYXJlbnQpIGZhY3RvcnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge01hdHJpeH1cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cbiAgICB0aGlzLndvcmxkVHJhbnNmb3JtID0gbmV3IG1hdGguTWF0cml4KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXJlYSB0aGUgZmlsdGVyIGlzIGFwcGxpZWQgdG8uIFRoaXMgaXMgdXNlZCBhcyBtb3JlIG9mIGFuIG9wdGltaXNhdGlvblxuICAgICAqIHJhdGhlciB0aGFuIGZpZ3VyaW5nIG91dCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZGlzcGxheU9iamVjdCBlYWNoIGZyYW1lIHlvdSBjYW4gc2V0IHRoaXMgcmVjdGFuZ2xlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXJBcmVhID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIGNhY2hlZCBzaW4gcm90YXRpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NyID0gMDtcblxuICAgIC8qKlxuICAgICAqIGNhY2hlZCBjb3Mgcm90YXRpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NyID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmlnaW5hbCwgY2FjaGVkIGJvdW5kcyBvZiB0aGUgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9ib3VuZHMgPSBuZXcgbWF0aC5SZWN0YW5nbGUoMCwgMCwgMSwgMSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbW9zdCB1cC10by1kYXRlIGJvdW5kcyBvZiB0aGUgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmlnaW5hbCwgY2FjaGVkIG1hc2sgb2YgdGhlIG9iamVjdFxuICAgICAqXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWFzayA9IG51bGw7XG5cbiAgICAvL1RPRE8gcmVuYW1lIHRvIF9pc01hc2tcbiAgIC8vIHRoaXMuaXNNYXNrID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZWQgaW50ZXJuYWwgZmxhZy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jYWNoZUFzQml0bWFwID0gZmFsc2U7XG4gICAgdGhpcy5fY2FjaGVkT2JqZWN0ID0gbnVsbDtcbn1cblxuLy8gY29uc3RydWN0b3JcbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGlzcGxheU9iamVjdDtcbnV0aWxzLmV2ZW50VGFyZ2V0Lm1peGluKERpc3BsYXlPYmplY3QucHJvdG90eXBlKTtcbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheU9iamVjdDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRGlzcGxheU9iamVjdC5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGRpc3BsYXlPYmplY3Qgb24gdGhlIHggYXhpcyByZWxhdGl2ZSB0byB0aGUgbG9jYWwgY29vcmRpbmF0ZXMgb2YgdGhlIHBhcmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGlzcGxheU9iamVjdCNcbiAgICAgKi9cbiAgICB4OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZGlzcGxheU9iamVjdCBvbiB0aGUgeSBheGlzIHJlbGF0aXZlIHRvIHRoZSBsb2NhbCBjb29yZGluYXRlcyBvZiB0aGUgcGFyZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEaXNwbGF5T2JqZWN0I1xuICAgICAqL1xuICAgIHk6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSBzcHJpdGUgaXMgZ2xvYmFsbHkgdmlzaWJsZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIERpc3BsYXlPYmplY3QjXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgd29ybGRWaXNpYmxlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLnZpc2libGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50O1xuICAgICAgICAgICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBtYXNrIGZvciB0aGUgZGlzcGxheU9iamVjdC4gQSBtYXNrIGlzIGFuIG9iamVjdCB0aGF0IGxpbWl0cyB0aGUgdmlzaWJpbGl0eSBvZiBhbiBvYmplY3QgdG8gdGhlIHNoYXBlIG9mIHRoZSBtYXNrIGFwcGxpZWQgdG8gaXQuXG4gICAgICogSW4gUElYSSBhIHJlZ3VsYXIgbWFzayBtdXN0IGJlIGEgUElYSS5HcmFwaGljcyBvYmplY3QuIFRoaXMgYWxsb3dzIGZvciBtdWNoIGZhc3RlciBtYXNraW5nIGluIGNhbnZhcyBhcyBpdCB1dGlsaXNlcyBzaGFwZSBjbGlwcGluZy5cbiAgICAgKiBUbyByZW1vdmUgYSBtYXNrLCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBudWxsLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7R3JhcGhpY3N9XG4gICAgICogQG1lbWJlcm9mIERpc3BsYXlPYmplY3QjXG4gICAgICovXG4gICAgbWFzazoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXNrO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hc2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFzay5yZW5kZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbWFzayA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fbWFzaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrLnJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBmaWx0ZXJzIGZvciB0aGUgZGlzcGxheU9iamVjdC5cbiAgICAgKiAqIElNUE9SVEFOVDogVGhpcyBpcyBhIHdlYkdMIG9ubHkgZmVhdHVyZSBhbmQgd2lsbCBiZSBpZ25vcmVkIGJ5IHRoZSBjYW52YXMgcmVuZGVyZXIuXG4gICAgICogVG8gcmVtb3ZlIGZpbHRlcnMgc2ltcGx5IHNldCB0aGlzIHByb3BlcnR5IHRvICdudWxsJ1xuICAgICAqXG4gICAgICogQG1lbWJlciB7RmlsdGVyW119XG4gICAgICogQG1lbWJlcm9mIERpc3BsYXlPYmplY3QjXG4gICAgICovXG4gICAgZmlsdGVyczoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJzICYmIHRoaXMuX2ZpbHRlcnMuc2xpY2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcnMgPSB2YWx1ZSAmJiB2YWx1ZS5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxuLypcbiAqIFVwZGF0ZXMgdGhlIG9iamVjdCB0cmFuc2Zvcm0gZm9yIHJlbmRlcmluZ1xuICpcbiAqIFRPRE8gLSBPcHRpbWl6YXRpb24gcGFzcyFcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS51cGRhdGVUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKVxue1xuXG4gICAgLy8gY3JlYXRlIHNvbWUgbWF0cml4IHJlZnMgZm9yIGVhc3kgYWNjZXNzXG4gICAgdmFyIHB0ID0gdGhpcy5wYXJlbnQud29ybGRUcmFuc2Zvcm07XG4gICAgdmFyIHd0ID0gdGhpcy53b3JsZFRyYW5zZm9ybTtcblxuICAgIC8vIHRlbXBvcmFyeSBtYXRyaXggdmFyaWFibGVzXG4gICAgdmFyIGEsIGIsIGMsIGQsIHR4LCB0eTtcblxuICAgIC8vIHNvIGlmIHJvdGF0aW9uIGlzIGJldHdlZW4gMCB0aGVuIHdlIGNhbiBzaW1wbGlmeSB0aGUgbXVsdGlwbGljYXRpb24gcHJvY2Vzcy4uLlxuICAgIGlmICh0aGlzLnJvdGF0aW9uICUgbWF0aC5QSV8yKVxuICAgIHtcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSByb3RhdGlvbiBpcyB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgcmVuZGVyLiBUaGlzIG1lYW5zIHdlIG9ubHkgbmVlZCB0byB1c2Ugc2luIGFuZCBjb3Mgd2hlbiByb3RhdGlvbiBhY3R1YWxseSBjaGFuZ2VzXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uICE9PSB0aGlzLnJvdGF0aW9uQ2FjaGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25DYWNoZSA9IHRoaXMucm90YXRpb247XG4gICAgICAgICAgICB0aGlzLl9zciA9IE1hdGguc2luKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fY3IgPSBNYXRoLmNvcyh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCB0aGUgbWF0cml4IHZhbHVlcyBvZiB0aGUgZGlzcGxheW9iamVjdCBiYXNlZCBvbiBpdHMgdHJhbnNmb3JtIHByb3BlcnRpZXMuLlxuICAgICAgICBhICA9ICB0aGlzLl9jciAqIHRoaXMuc2NhbGUueDtcbiAgICAgICAgYiAgPSAgdGhpcy5fc3IgKiB0aGlzLnNjYWxlLng7XG4gICAgICAgIGMgID0gLXRoaXMuX3NyICogdGhpcy5zY2FsZS55O1xuICAgICAgICBkICA9ICB0aGlzLl9jciAqIHRoaXMuc2NhbGUueTtcbiAgICAgICAgdHggPSAgdGhpcy5wb3NpdGlvbi54O1xuICAgICAgICB0eSA9ICB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIHBpdm90Li4gbm90IG9mdGVuIHVzZWQgc28gZ2VhcmVkIHRvd2FyZHMgdGhhdCBmYWN0IVxuICAgICAgICBpZiAodGhpcy5waXZvdC54IHx8IHRoaXMucGl2b3QueSlcbiAgICAgICAge1xuICAgICAgICAgICAgdHggLT0gdGhpcy5waXZvdC54ICogYSArIHRoaXMucGl2b3QueSAqIGM7XG4gICAgICAgICAgICB0eSAtPSB0aGlzLnBpdm90LnggKiBiICsgdGhpcy5waXZvdC55ICogZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmNhdCB0aGUgcGFyZW50IG1hdHJpeCB3aXRoIHRoZSBvYmplY3RzIHRyYW5zZm9ybS5cbiAgICAgICAgd3QuYSAgPSBhICAqIHB0LmEgKyBiICAqIHB0LmM7XG4gICAgICAgIHd0LmIgID0gYSAgKiBwdC5iICsgYiAgKiBwdC5kO1xuICAgICAgICB3dC5jICA9IGMgICogcHQuYSArIGQgICogcHQuYztcbiAgICAgICAgd3QuZCAgPSBjICAqIHB0LmIgKyBkICAqIHB0LmQ7XG4gICAgICAgIHd0LnR4ID0gdHggKiBwdC5hICsgdHkgKiBwdC5jICsgcHQudHg7XG4gICAgICAgIHd0LnR5ID0gdHggKiBwdC5iICsgdHkgKiBwdC5kICsgcHQudHk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vIGxldHMgZG8gdGhlIGZhc3QgdmVyc2lvbiBhcyB3ZSBrbm93IHRoZXJlIGlzIG5vIHJvdGF0aW9uLi5cbiAgICAgICAgYSAgPSB0aGlzLnNjYWxlLng7XG4gICAgICAgIGQgID0gdGhpcy5zY2FsZS55O1xuXG4gICAgICAgIHR4ID0gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5waXZvdC54ICogYTtcbiAgICAgICAgdHkgPSB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnBpdm90LnkgKiBkO1xuXG4gICAgICAgIHd0LmEgID0gYSAgKiBwdC5hO1xuICAgICAgICB3dC5iICA9IGEgICogcHQuYjtcbiAgICAgICAgd3QuYyAgPSBkICAqIHB0LmM7XG4gICAgICAgIHd0LmQgID0gZCAgKiBwdC5kO1xuICAgICAgICB3dC50eCA9IHR4ICogcHQuYSArIHR5ICogcHQuYyArIHB0LnR4O1xuICAgICAgICB3dC50eSA9IHR4ICogcHQuYiArIHR5ICogcHQuZCArIHB0LnR5O1xuICAgIH1cblxuICAgIC8vIG11bHRpcGx5IHRoZSBhbHBoYXMuLlxuICAgIHRoaXMud29ybGRBbHBoYSA9IHRoaXMuYWxwaGEgKiB0aGlzLnBhcmVudC53b3JsZEFscGhhO1xuXG4gICAgLy8gcmVzZXQgdGhlIGJvdW5kcyBlYWNoIHRpbWUgdGhpcyBpcyBjYWxsZWQhXG4gICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG59O1xuXG4vLyBwZXJmb3JtYW5jZSBpbmNyZWFzZSB0byBhdm9pZCB1c2luZyBjYWxsLi4gKDEweCBmYXN0ZXIpXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5kaXNwbGF5T2JqZWN0VXBkYXRlVHJhbnNmb3JtID0gRGlzcGxheU9iamVjdC5wcm90b3R5cGUudXBkYXRlVHJhbnNmb3JtO1xuXG4vKipcbiAqXG4gKlxuICogUmV0cmlldmVzIHRoZSBib3VuZHMgb2YgdGhlIGRpc3BsYXlPYmplY3QgYXMgYSByZWN0YW5nbGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIG1hdHJpeCB7TWF0cml4fVxuICogQHJldHVybiB7UmVjdGFuZ2xlfSB0aGUgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYXJlYVxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAobWF0cml4KVxue1xuICAgIHJldHVybiBtYXRoLlJlY3RhbmdsZS5FTVBUWTtcbn07XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBsb2NhbCBib3VuZHMgb2YgdGhlIGRpc3BsYXlPYmplY3QgYXMgYSByZWN0YW5nbGUgb2JqZWN0XG4gKlxuICogQHJldHVybiB7UmVjdGFuZ2xlfSB0aGUgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYXJlYVxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5nZXRMb2NhbEJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKG1hdGguTWF0cml4LklERU5USVRZKTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZ2xvYmFsIHBvc2l0aW9uIG9mIHRoZSBkaXNwbGF5IG9iamVjdFxuICpcbiAqIEBwYXJhbSBwb3NpdGlvbiB7UG9pbnR9IFRoZSB3b3JsZCBvcmlnaW4gdG8gY2FsY3VsYXRlIGZyb21cbiAqIEByZXR1cm4ge1BvaW50fSBBIHBvaW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uIG9mIHRoaXMgb2JqZWN0XG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLnRvR2xvYmFsID0gZnVuY3Rpb24gKHBvc2l0aW9uKVxue1xuICAgIC8vIGRvbid0IG5lZWQgdG8gdXBkYXRlIHRoZSBsb3RcbiAgICB0aGlzLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0oKTtcbiAgICByZXR1cm4gdGhpcy53b3JsZFRyYW5zZm9ybS5hcHBseShwb3NpdGlvbik7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxvY2FsIHBvc2l0aW9uIG9mIHRoZSBkaXNwbGF5IG9iamVjdCByZWxhdGl2ZSB0byBhbm90aGVyIHBvaW50XG4gKlxuICogQHBhcmFtIHBvc2l0aW9uIHtQb2ludH0gVGhlIHdvcmxkIG9yaWdpbiB0byBjYWxjdWxhdGUgZnJvbVxuICogQHBhcmFtIFtmcm9tXSB7RGlzcGxheU9iamVjdH0gVGhlIERpc3BsYXlPYmplY3QgdG8gY2FsY3VsYXRlIHRoZSBnbG9iYWwgcG9zaXRpb24gZnJvbVxuICogQHJldHVybiB7UG9pbnR9IEEgcG9pbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24gb2YgdGhpcyBvYmplY3RcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUudG9Mb2NhbCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgZnJvbSlcbntcbiAgICBpZiAoZnJvbSlcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uID0gZnJvbS50b0dsb2JhbChwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gZG9uJ3QgbmVlZCB0byB1cGRhdGUgdGhlIGxvdFxuICAgIHRoaXMuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgIHJldHVybiB0aGlzLndvcmxkVHJhbnNmb3JtLmFwcGx5SW52ZXJzZShwb3NpdGlvbik7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgV2ViR0wgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuICogQHByaXZhdGVcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUucmVuZGVyV2ViR0wgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgLy8gT1ZFUldSSVRFO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIENhbnZhcyByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuICogQHByaXZhdGVcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUucmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIC8vIE9WRVJXUklURTtcbn07XG4vKipcbiAqIFVzZWZ1bCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB0ZXh0dXJlIG9mIHRoZSBkaXNwbGF5IG9iamVjdCB0aGF0IGNhbiB0aGVuIGJlIHVzZWQgdG8gY3JlYXRlIHNwcml0ZXNcbiAqIFRoaXMgY2FuIGJlIHF1aXRlIHVzZWZ1bCBpZiB5b3VyIGRpc3BsYXlPYmplY3QgaXMgc3RhdGljIC8gY29tcGxpY2F0ZWQgYW5kIG5lZWRzIHRvIGJlIHJldXNlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfFdlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB1c2VkIHRvIGdlbmVyYXRlIHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHJlc29sdXRpb24ge051bWJlcn0gVGhlIHJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUgYmVpbmcgZ2VuZXJhdGVkXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtOdW1iZXJ9IFNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4ge1RleHR1cmV9IGEgdGV4dHVyZSBvZiB0aGUgZGlzcGxheSBvYmplY3RcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuZ2VuZXJhdGVUZXh0dXJlID0gZnVuY3Rpb24gKHJlbmRlcmVyLCByZXNvbHV0aW9uLCBzY2FsZU1vZGUpXG57XG4gICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMoKTtcblxuICAgIHZhciByZW5kZXJUZXh0dXJlID0gbmV3IFJlbmRlclRleHR1cmUocmVuZGVyZXIsIGJvdW5kcy53aWR0aCB8IDAsIGJvdW5kcy5oZWlnaHQgfCAwLCByZW5kZXJlciwgc2NhbGVNb2RlLCByZXNvbHV0aW9uKTtcblxuICAgIF90ZW1wTWF0cml4LnR4ID0gLWJvdW5kcy54O1xuICAgIF90ZW1wTWF0cml4LnR5ID0gLWJvdW5kcy55O1xuXG4gICAgcmVuZGVyVGV4dHVyZS5yZW5kZXIodGhpcywgX3RlbXBNYXRyaXgpO1xuXG4gICAgcmV0dXJuIHJlbmRlclRleHR1cmU7XG59O1xuXG4vKipcbiAqIEJhc2UgZGVzdHJveSBtZXRob2QgZm9yIGdlbmVyaWMgZGlzcGxheSBvYmplY3RzXG4gKlxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcblxuICAgIHRoaXMucG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuc2NhbGUgPSBudWxsO1xuICAgIHRoaXMucGl2b3QgPSBudWxsO1xuXG4gICAgdGhpcy5fYm91bmRzID0gbnVsbDtcbiAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB0aGlzLl9tYXNrID0gbnVsbDtcblxuICAgIHRoaXMud29ybGRUcmFuc2Zvcm0gPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyQXJlYSA9IG51bGw7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IG51bGw7XG59O1xuIiwidmFyIENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQ29udGFpbmVyJyksXG4gICAgU3ByaXRlID0gcmVxdWlyZSgnLi4vc3ByaXRlcy9TcHJpdGUnKSxcbiAgICBUZXh0dXJlID0gcmVxdWlyZSgnLi4vdGV4dHVyZXMvVGV4dHVyZScpLFxuICAgIENhbnZhc0J1ZmZlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzQnVmZmVyJyksXG4gICAgQ2FudmFzR3JhcGhpY3MgPSByZXF1aXJlKCcuLi9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0dyYXBoaWNzJyksXG4gICAgR3JhcGhpY3NEYXRhID0gcmVxdWlyZSgnLi9HcmFwaGljc0RhdGEnKSxcbiAgICBtYXRoID0gcmVxdWlyZSgnLi4vbWF0aCcpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKSxcbiAgICB0ZW1wUG9pbnQgPSBuZXcgbWF0aC5Qb2ludCgpO1xuXG4vKipcbiAqIFRoZSBHcmFwaGljcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHVzZWQgdG8gZHJhdyBwcmltaXRpdmUgc2hhcGVzIHN1Y2ggYXMgbGluZXMsIGNpcmNsZXMgYW5kXG4gKiByZWN0YW5nbGVzIHRvIHRoZSBkaXNwbGF5LCBhbmQgdG8gY29sb3IgYW5kIGZpbGwgdGhlbS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIENvbnRhaW5lclxuICogQG1lbWJlcm9mIFBJWElcbiAqL1xuZnVuY3Rpb24gR3JhcGhpY3MoKVxue1xuICAgIENvbnRhaW5lci5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFscGhhIHZhbHVlIHVzZWQgd2hlbiBmaWxsaW5nIHRoZSBHcmFwaGljcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHRoaXMuZmlsbEFscGhhID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCAodGhpY2tuZXNzKSBvZiBhbnkgbGluZXMgZHJhd24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMubGluZVdpZHRoID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBvZiBhbnkgbGluZXMgZHJhd24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMubGluZUNvbG9yID0gMDtcblxuICAgIC8qKlxuICAgICAqIEdyYXBoaWNzIGRhdGFcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0dyYXBoaWNzRGF0YVtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5ncmFwaGljc0RhdGEgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW50IGFwcGxpZWQgdG8gdGhlIGdyYXBoaWMgc2hhcGUuIFRoaXMgaXMgYSBoZXggdmFsdWUuIEFwcGx5IGEgdmFsdWUgb2YgMHhGRkZGRkYgdG8gcmVzZXQgdGhlIHRpbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMHhGRkZGRkZcbiAgICAgKi9cbiAgICB0aGlzLnRpbnQgPSAweEZGRkZGRjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmV2aW91cyB0aW50IGFwcGxpZWQgdG8gdGhlIGdyYXBoaWMgc2hhcGUuIFVzZWQgdG8gY29tcGFyZSB0byB0aGUgY3VycmVudCB0aW50IGFuZCBjaGVjayBpZiB0aGVyZXMgY2hhbmdlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGRlZmF1bHQgMHhGRkZGRkZcbiAgICAgKi9cbiAgICB0aGlzLl9wcmV2VGludCA9IDB4RkZGRkZGO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJsZW5kIG1vZGUgdG8gYmUgYXBwbGllZCB0byB0aGUgZ3JhcGhpYyBzaGFwZS4gQXBwbHkgYSB2YWx1ZSBvZiBibGVuZE1vZGVzLk5PUk1BTCB0byByZXNldCB0aGUgYmxlbmQgbW9kZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCBDT05TVC5CTEVORF9NT0RFUy5OT1JNQUw7XG4gICAgICovXG4gICAgdGhpcy5ibGVuZE1vZGUgPSBDT05TVC5CTEVORF9NT0RFUy5OT1JNQUw7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHBhdGhcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0dyYXBoaWNzRGF0YX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudFBhdGggPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgY29udGFpbmluZyBzb21lIFdlYkdMLXJlbGF0ZWQgcHJvcGVydGllcyB1c2VkIGJ5IHRoZSBXZWJHTCByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge29iamVjdDxudW1iZXIsIG9iamVjdD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAvLyBUT0RPIC0gX3dlYmdsIHNob3VsZCB1c2UgYSBwcm90b3R5cGUgb2JqZWN0LCBub3QgYSByYW5kb20gdW5kb2N1bWVudGVkIG9iamVjdC4uLlxuICAgIHRoaXMuX3dlYkdMID0ge307XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgc2hhcGUgaXMgYmVpbmcgdXNlZCBhcyBhIG1hc2suXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNNYXNrID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm91bmRzJyBwYWRkaW5nIHVzZWQgZm9yIGJvdW5kcyBjYWxjdWxhdGlvbi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmJvdW5kc1BhZGRpbmcgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWNoZSBvZiB0aGUgbG9jYWwgYm91bmRzIHRvIHByZXZlbnQgcmVjYWxjdWxhdGlvbi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsQm91bmRzID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsMCwxLDEpO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byBkZXRlY3QgaWYgdGhlIGdyYXBoaWNzIG9iamVjdCBoYXMgY2hhbmdlZC4gSWYgdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGVuIHRoZSBncmFwaGljc1xuICAgICAqIG9iamVjdCB3aWxsIGJlIHJlY2FsY3VsYXRlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZGV0ZWN0IGlmIHRoZSBXZWJHTCBncmFwaGljcyBvYmplY3QgaGFzIGNoYW5nZWQuIElmIHRoaXMgaXMgc2V0IHRvIHRydWUgdGhlbiB0aGVcbiAgICAgKiBncmFwaGljcyBvYmplY3Qgd2lsbCBiZSByZWNhbGN1bGF0ZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5nbERpcnR5ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGRldGVjdCBpZiB0aGUgY2FjaGVkIHNwcml0ZSBvYmplY3QgbmVlZHMgdG8gYmUgdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNhY2hlZFNwcml0ZURpcnR5ID0gZmFsc2U7XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5HcmFwaGljcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbnRhaW5lci5wcm90b3R5cGUpO1xuR3JhcGhpY3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR3JhcGhpY3M7XG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoaWNzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhHcmFwaGljcy5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBXaGVuIGNhY2hlQXNCaXRtYXAgaXMgc2V0IHRvIHRydWUgdGhlIGdyYXBoaWNzIG9iamVjdCB3aWxsIGJlIHJlbmRlcmVkIGFzIGlmIGl0IHdhcyBhIHNwcml0ZS5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3VyIGdyYXBoaWNzIGVsZW1lbnQgZG9lcyBub3QgY2hhbmdlIG9mdGVuLCBhcyBpdCB3aWxsIHNwZWVkIHVwIHRoZSByZW5kZXJpbmdcbiAgICAgKiBvZiB0aGUgb2JqZWN0IGluIGV4Y2hhbmdlIGZvciB0YWtpbmcgdXAgdGV4dHVyZSBtZW1vcnkuIEl0IGlzIGFsc28gdXNlZnVsIGlmIHlvdSBuZWVkIHRoZSBncmFwaGljc1xuICAgICAqIG9iamVjdCB0byBiZSBhbnRpLWFsaWFzZWQsIGJlY2F1c2UgaXQgd2lsbCBiZSByZW5kZXJlZCB1c2luZyBjYW52YXMuIFRoaXMgaXMgbm90IHJlY29tbWVuZGVkIGlmXG4gICAgICogeW91IGFyZSBjb25zdGFudGx5IHJlZHJhd2luZyB0aGUgZ3JhcGhpY3MgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEdyYXBoaWNzI1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBHcmFwaGljcyBvYmplY3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhpcyBvbmUuXG4gKlxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGNsb25lID0gbmV3IEdyYXBoaWNzKCk7XG5cbiAgICBjbG9uZS5yZW5kZXJhYmxlICAgID0gdGhpcy5yZW5kZXJhYmxlO1xuICAgIGNsb25lLmZpbGxBbHBoYSAgICAgPSB0aGlzLmZpbGxBbHBoYTtcbiAgICBjbG9uZS5saW5lV2lkdGggICAgID0gdGhpcy5saW5lV2lkdGg7XG4gICAgY2xvbmUubGluZUNvbG9yICAgICA9IHRoaXMubGluZUNvbG9yO1xuICAgIGNsb25lLnRpbnQgICAgICAgICAgPSB0aGlzLnRpbnQ7XG4gICAgY2xvbmUuYmxlbmRNb2RlICAgICA9IHRoaXMuYmxlbmRNb2RlO1xuICAgIGNsb25lLmlzTWFzayAgICAgICAgPSB0aGlzLmlzTWFzaztcbiAgICBjbG9uZS5ib3VuZHNQYWRkaW5nID0gdGhpcy5ib3VuZHNQYWRkaW5nO1xuICAgIGNsb25lLmRpcnR5ICAgICAgICAgPSB0aGlzLmRpcnR5O1xuICAgIGNsb25lLmdsRGlydHkgICAgICAgPSB0aGlzLmdsRGlydHk7XG4gICAgY2xvbmUuY2FjaGVkU3ByaXRlRGlydHkgPSB0aGlzLmNhY2hlZFNwcml0ZURpcnR5O1xuXG4gICAgLy8gY29weSBncmFwaGljcyBkYXRhXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdyYXBoaWNzRGF0YS5sZW5ndGg7ICsraSlcbiAgICB7XG4gICAgICAgIGNsb25lLmdyYXBoaWNzRGF0YS5wdXNoKHRoaXMuZ3JhcGhpY3NEYXRhLmNsb25lKCkpO1xuICAgIH1cblxuICAgIGNsb25lLmN1cnJlbnRQYXRoID0gY2xvbmUuZ3JhcGhpY3NEYXRhW2Nsb25lLmdyYXBoaWNzRGF0YS5sZW5ndGggLSAxXTtcblxuICAgIGNsb25lLnVwZGF0ZUxvY2FsQm91bmRzKCk7XG5cbiAgICByZXR1cm4gY2xvbmU7XG59O1xuXG4vKipcbiAqIFNwZWNpZmllcyB0aGUgbGluZSBzdHlsZSB1c2VkIGZvciBzdWJzZXF1ZW50IGNhbGxzIHRvIEdyYXBoaWNzIG1ldGhvZHMgc3VjaCBhcyB0aGUgbGluZVRvKCkgbWV0aG9kIG9yIHRoZSBkcmF3Q2lyY2xlKCkgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBsaW5lV2lkdGgge251bWJlcn0gd2lkdGggb2YgdGhlIGxpbmUgdG8gZHJhdywgd2lsbCB1cGRhdGUgdGhlIG9iamVjdHMgc3RvcmVkIHN0eWxlXG4gKiBAcGFyYW0gY29sb3Ige251bWJlcn0gY29sb3Igb2YgdGhlIGxpbmUgdG8gZHJhdywgd2lsbCB1cGRhdGUgdGhlIG9iamVjdHMgc3RvcmVkIHN0eWxlXG4gKiBAcGFyYW0gYWxwaGEge251bWJlcn0gYWxwaGEgb2YgdGhlIGxpbmUgdG8gZHJhdywgd2lsbCB1cGRhdGUgdGhlIG9iamVjdHMgc3RvcmVkIHN0eWxlXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmxpbmVTdHlsZSA9IGZ1bmN0aW9uIChsaW5lV2lkdGgsIGNvbG9yLCBhbHBoYSlcbntcbiAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCAwO1xuICAgIHRoaXMubGluZUNvbG9yID0gY29sb3IgfHwgMDtcbiAgICB0aGlzLmxpbmVBbHBoYSA9IChhcmd1bWVudHMubGVuZ3RoIDwgMykgPyAxIDogYWxwaGE7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50UGF0aClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGhhbGZ3YXkgdGhyb3VnaCBhIGxpbmU/IHN0YXJ0IGEgbmV3IG9uZSFcbiAgICAgICAgICAgIHRoaXMuZHJhd1NoYXBlKCBuZXcgbWF0aC5Qb2x5Z29uKCB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5zbGljZSgtMikgKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgaXRzIGVtcHR5IHNvIGxldHMganVzdCBzZXQgdGhlIGxpbmUgcHJvcGVydGllc1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGgubGluZUNvbG9yID0gdGhpcy5saW5lQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmxpbmVBbHBoYSA9IHRoaXMubGluZUFscGhhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE1vdmVzIHRoZSBjdXJyZW50IGRyYXdpbmcgcG9zaXRpb24gdG8geCwgeS5cbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSB0aGUgWCBjb29yZGluYXRlIHRvIG1vdmUgdG9cbiAqIEBwYXJhbSB5IHtudW1iZXJ9IHRoZSBZIGNvb3JkaW5hdGUgdG8gbW92ZSB0b1xuICogQHJldHVybiB7R3JhcGhpY3N9XG4gICovXG5HcmFwaGljcy5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgdGhpcy5kcmF3U2hhcGUobmV3IG1hdGguUG9seWdvbihbeCx5XSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERyYXdzIGEgbGluZSB1c2luZyB0aGUgY3VycmVudCBsaW5lIHN0eWxlIGZyb20gdGhlIGN1cnJlbnQgZHJhd2luZyBwb3NpdGlvbiB0byAoeCwgeSk7XG4gKiBUaGUgY3VycmVudCBkcmF3aW5nIHBvc2l0aW9uIGlzIHRoZW4gc2V0IHRvICh4LCB5KS5cbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSB0aGUgWCBjb29yZGluYXRlIHRvIGRyYXcgdG9cbiAqIEBwYXJhbSB5IHtudW1iZXJ9IHRoZSBZIGNvb3JkaW5hdGUgdG8gZHJhdyB0b1xuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5saW5lVG8gPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5wdXNoKHgsIHkpO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcG9pbnRzIGZvciBhIHF1YWRyYXRpYyBiZXppZXIgY3VydmUgYW5kIHRoZW4gZHJhd3MgaXQuXG4gKiBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzg1MDk3L2hvdy1kby1pLWltcGxlbWVudC1hLWJlemllci1jdXJ2ZS1pbi1jXG4gKlxuICogQHBhcmFtIGNwWCB7bnVtYmVyfSBDb250cm9sIHBvaW50IHhcbiAqIEBwYXJhbSBjcFkge251bWJlcn0gQ29udHJvbCBwb2ludCB5XG4gKiBAcGFyYW0gdG9YIHtudW1iZXJ9IERlc3RpbmF0aW9uIHBvaW50IHhcbiAqIEBwYXJhbSB0b1kge251bWJlcn0gRGVzdGluYXRpb24gcG9pbnQgeVxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5xdWFkcmF0aWNDdXJ2ZVRvID0gZnVuY3Rpb24gKGNwWCwgY3BZLCB0b1gsIHRvWSlcbntcbiAgICBpZiAodGhpcy5jdXJyZW50UGF0aClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzID0gWzAsIDBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMubW92ZVRvKDAsMCk7XG4gICAgfVxuXG4gICAgdmFyIHhhLFxuICAgICAgICB5YSxcbiAgICAgICAgbiA9IDIwLFxuICAgICAgICBwb2ludHMgPSB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cztcblxuICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgdmFyIGZyb21YID0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMl07XG4gICAgdmFyIGZyb21ZID0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMV07XG5cbiAgICB2YXIgaiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbjsgKytpKVxuICAgIHtcbiAgICAgICAgaiA9IGkgLyBuO1xuXG4gICAgICAgIHhhID0gZnJvbVggKyAoIChjcFggLSBmcm9tWCkgKiBqICk7XG4gICAgICAgIHlhID0gZnJvbVkgKyAoIChjcFkgLSBmcm9tWSkgKiBqICk7XG5cbiAgICAgICAgcG9pbnRzLnB1c2goIHhhICsgKCAoKGNwWCArICggKHRvWCAtIGNwWCkgKiBqICkpIC0geGEpICogaiApLFxuICAgICAgICAgICAgICAgICAgICAgeWEgKyAoICgoY3BZICsgKCAodG9ZIC0gY3BZKSAqIGogKSkgLSB5YSkgKiBqICkgKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHBvaW50cyBmb3IgYSBiZXppZXIgY3VydmUgYW5kIHRoZW4gZHJhd3MgaXQuXG4gKlxuICogQHBhcmFtIGNwWCB7bnVtYmVyfSBDb250cm9sIHBvaW50IHhcbiAqIEBwYXJhbSBjcFkge251bWJlcn0gQ29udHJvbCBwb2ludCB5XG4gKiBAcGFyYW0gY3BYMiB7bnVtYmVyfSBTZWNvbmQgQ29udHJvbCBwb2ludCB4XG4gKiBAcGFyYW0gY3BZMiB7bnVtYmVyfSBTZWNvbmQgQ29udHJvbCBwb2ludCB5XG4gKiBAcGFyYW0gdG9YIHtudW1iZXJ9IERlc3RpbmF0aW9uIHBvaW50IHhcbiAqIEBwYXJhbSB0b1kge251bWJlcn0gRGVzdGluYXRpb24gcG9pbnQgeVxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5iZXppZXJDdXJ2ZVRvID0gZnVuY3Rpb24gKGNwWCwgY3BZLCBjcFgyLCBjcFkyLCB0b1gsIHRvWSlcbntcbiAgICBpZiAodGhpcy5jdXJyZW50UGF0aClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzID0gWzAsIDBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMubW92ZVRvKDAsMCk7XG4gICAgfVxuXG4gICAgdmFyIG4gPSAyMCxcbiAgICAgICAgZHQsXG4gICAgICAgIGR0MixcbiAgICAgICAgZHQzLFxuICAgICAgICB0MixcbiAgICAgICAgdDMsXG4gICAgICAgIHBvaW50cyA9IHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzO1xuXG4gICAgdmFyIGZyb21YID0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMl07XG4gICAgdmFyIGZyb21ZID0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMV07XG5cbiAgICB2YXIgaiA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBuOyArK2kpXG4gICAge1xuICAgICAgICBqID0gaSAvIG47XG5cbiAgICAgICAgZHQgPSAoMSAtIGopO1xuICAgICAgICBkdDIgPSBkdCAqIGR0O1xuICAgICAgICBkdDMgPSBkdDIgKiBkdDtcblxuICAgICAgICB0MiA9IGogKiBqO1xuICAgICAgICB0MyA9IHQyICogajtcblxuICAgICAgICBwb2ludHMucHVzaCggZHQzICogZnJvbVggKyAzICogZHQyICogaiAqIGNwWCArIDMgKiBkdCAqIHQyICogY3BYMiArIHQzICogdG9YLFxuICAgICAgICAgICAgICAgICAgICAgZHQzICogZnJvbVkgKyAzICogZHQyICogaiAqIGNwWSArIDMgKiBkdCAqIHQyICogY3BZMiArIHQzICogdG9ZKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUaGUgYXJjVG8oKSBtZXRob2QgY3JlYXRlcyBhbiBhcmMvY3VydmUgYmV0d2VlbiB0d28gdGFuZ2VudHMgb24gdGhlIGNhbnZhcy5cbiAqXG4gKiBcImJvcnJvd2VkXCIgZnJvbSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Z4Y2FudmFzLyAtIHRoYW5rcyBnb29nbGUhXG4gKlxuICogQHBhcmFtIHgxIHtudW1iZXJ9IFRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJjXG4gKiBAcGFyYW0geTEge251bWJlcn0gVGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcmNcbiAqIEBwYXJhbSB4MiB7bnVtYmVyfSBUaGUgeC1jb29yZGluYXRlIG9mIHRoZSBlbmQgb2YgdGhlIGFyY1xuICogQHBhcmFtIHkyIHtudW1iZXJ9IFRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGVuZCBvZiB0aGUgYXJjXG4gKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9IFRoZSByYWRpdXMgb2YgdGhlIGFyY1xuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5hcmNUbyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgcmFkaXVzKVxue1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMucHVzaCh4MSwgeTEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMubW92ZVRvKHgxLCB5MSk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLFxuICAgICAgICBmcm9tWCA9IHBvaW50c1twb2ludHMubGVuZ3RoLTJdLFxuICAgICAgICBmcm9tWSA9IHBvaW50c1twb2ludHMubGVuZ3RoLTFdLFxuICAgICAgICBhMSA9IGZyb21ZIC0geTEsXG4gICAgICAgIGIxID0gZnJvbVggLSB4MSxcbiAgICAgICAgYTIgPSB5MiAgIC0geTEsXG4gICAgICAgIGIyID0geDIgICAtIHgxLFxuICAgICAgICBtbSA9IE1hdGguYWJzKGExICogYjIgLSBiMSAqIGEyKTtcblxuICAgIGlmIChtbSA8IDEuMGUtOCB8fCByYWRpdXMgPT09IDApXG4gICAge1xuICAgICAgICBpZiAocG9pbnRzW3BvaW50cy5sZW5ndGgtMl0gIT09IHgxIHx8IHBvaW50c1twb2ludHMubGVuZ3RoLTFdICE9PSB5MSlcbiAgICAgICAge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goeDEsIHkxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB2YXIgZGQgPSBhMSAqIGExICsgYjEgKiBiMSxcbiAgICAgICAgICAgIGNjID0gYTIgKiBhMiArIGIyICogYjIsXG4gICAgICAgICAgICB0dCA9IGExICogYTIgKyBiMSAqIGIyLFxuICAgICAgICAgICAgazEgPSByYWRpdXMgKiBNYXRoLnNxcnQoZGQpIC8gbW0sXG4gICAgICAgICAgICBrMiA9IHJhZGl1cyAqIE1hdGguc3FydChjYykgLyBtbSxcbiAgICAgICAgICAgIGoxID0gazEgKiB0dCAvIGRkLFxuICAgICAgICAgICAgajIgPSBrMiAqIHR0IC8gY2MsXG4gICAgICAgICAgICBjeCA9IGsxICogYjIgKyBrMiAqIGIxLFxuICAgICAgICAgICAgY3kgPSBrMSAqIGEyICsgazIgKiBhMSxcbiAgICAgICAgICAgIHB4ID0gYjEgKiAoazIgKyBqMSksXG4gICAgICAgICAgICBweSA9IGExICogKGsyICsgajEpLFxuICAgICAgICAgICAgcXggPSBiMiAqIChrMSArIGoyKSxcbiAgICAgICAgICAgIHF5ID0gYTIgKiAoazEgKyBqMiksXG4gICAgICAgICAgICBzdGFydEFuZ2xlID0gTWF0aC5hdGFuMihweSAtIGN5LCBweCAtIGN4KSxcbiAgICAgICAgICAgIGVuZEFuZ2xlICAgPSBNYXRoLmF0YW4yKHF5IC0gY3ksIHF4IC0gY3gpO1xuXG4gICAgICAgIHRoaXMuYXJjKGN4ICsgeDEsIGN5ICsgeTEsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGIxICogYTIgPiBiMiAqIGExKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUaGUgYXJjIG1ldGhvZCBjcmVhdGVzIGFuIGFyYy9jdXJ2ZSAodXNlZCB0byBjcmVhdGUgY2lyY2xlcywgb3IgcGFydHMgb2YgY2lyY2xlcykuXG4gKlxuICogQHBhcmFtIGN4IHtudW1iZXJ9IFRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgY2lyY2xlXG4gKiBAcGFyYW0gY3kge251bWJlcn0gVGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGVcbiAqIEBwYXJhbSByYWRpdXMge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlXG4gKiBAcGFyYW0gc3RhcnRBbmdsZSB7bnVtYmVyfSBUaGUgc3RhcnRpbmcgYW5nbGUsIGluIHJhZGlhbnMgKDAgaXMgYXQgdGhlIDMgbydjbG9jayBwb3NpdGlvbiBvZiB0aGUgYXJjJ3MgY2lyY2xlKVxuICogQHBhcmFtIGVuZEFuZ2xlIHtudW1iZXJ9IFRoZSBlbmRpbmcgYW5nbGUsIGluIHJhZGlhbnNcbiAqIEBwYXJhbSBhbnRpY2xvY2t3aXNlIHtib29sZWFufSBPcHRpb25hbC4gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRyYXdpbmcgc2hvdWxkIGJlIGNvdW50ZXJjbG9ja3dpc2Ugb3IgY2xvY2t3aXNlLiBGYWxzZSBpcyBkZWZhdWx0LCBhbmQgaW5kaWNhdGVzIGNsb2Nrd2lzZSwgd2hpbGUgdHJ1ZSBpbmRpY2F0ZXMgY291bnRlci1jbG9ja3dpc2UuXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmFyYyA9IGZ1bmN0aW9uKGN4LCBjeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSlcbntcbiAgICB2YXIgc3RhcnRYID0gY3ggKyBNYXRoLmNvcyhzdGFydEFuZ2xlKSAqIHJhZGl1cztcbiAgICB2YXIgc3RhcnRZID0gY3kgKyBNYXRoLnNpbihzdGFydEFuZ2xlKSAqIHJhZGl1cztcbiAgICB2YXIgcG9pbnRzO1xuXG4gICAgaWYoIHRoaXMuY3VycmVudFBhdGggKVxuICAgIHtcbiAgICAgICAgcG9pbnRzID0gdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHM7XG5cbiAgICAgICAgaWYocG9pbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goc3RhcnRYLCBzdGFydFkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIHBvaW50c1twb2ludHMubGVuZ3RoLTJdICE9PSBzdGFydFggfHwgcG9pbnRzW3BvaW50cy5sZW5ndGgtMV0gIT09IHN0YXJ0WSlcbiAgICAgICAge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goc3RhcnRYLCBzdGFydFkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgICAgcG9pbnRzID0gdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHM7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0QW5nbGUgPT09IGVuZEFuZ2xlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYoICFhbnRpY2xvY2t3aXNlICYmIGVuZEFuZ2xlIDw9IHN0YXJ0QW5nbGUgKVxuICAgIHtcbiAgICAgICAgZW5kQW5nbGUgKz0gTWF0aC5QSSAqIDI7XG4gICAgfVxuICAgIGVsc2UgaWYoIGFudGljbG9ja3dpc2UgJiYgc3RhcnRBbmdsZSA8PSBlbmRBbmdsZSApXG4gICAge1xuICAgICAgICBzdGFydEFuZ2xlICs9IE1hdGguUEkgKiAyO1xuICAgIH1cblxuICAgIHZhciBzd2VlcCA9IGFudGljbG9ja3dpc2UgPyAoc3RhcnRBbmdsZSAtIGVuZEFuZ2xlKSAqLTEgOiAoZW5kQW5nbGUgLSBzdGFydEFuZ2xlKTtcbiAgICB2YXIgc2VncyA9ICBNYXRoLmNlaWwoIE1hdGguYWJzKHN3ZWVwKS8gKE1hdGguUEkgKiAyKSApICogNDA7XG5cbiAgICBpZiggc3dlZXAgPT09IDAgKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHRoZXRhID0gc3dlZXAvKHNlZ3MqMik7XG4gICAgdmFyIHRoZXRhMiA9IHRoZXRhKjI7XG5cbiAgICB2YXIgY1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICAgIHZhciBzVGhldGEgPSBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICB2YXIgc2VnTWludXMgPSBzZWdzIC0gMTtcblxuICAgIHZhciByZW1haW5kZXIgPSAoIHNlZ01pbnVzICUgMSApIC8gc2VnTWludXM7XG5cbiAgICBmb3IodmFyIGk9MDsgaTw9c2VnTWludXM7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciByZWFsID0gIGkgKyByZW1haW5kZXIgKiBpO1xuXG5cbiAgICAgICAgdmFyIGFuZ2xlID0gKCh0aGV0YSkgKyBzdGFydEFuZ2xlICsgKHRoZXRhMiAqIHJlYWwpKTtcblxuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgdmFyIHMgPSAtTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIHBvaW50cy5wdXNoKCggKGNUaGV0YSAqICBjKSArIChzVGhldGEgKiBzKSApICogcmFkaXVzICsgY3gsXG4gICAgICAgICAgICAgICAgICAgICggKGNUaGV0YSAqIC1zKSArIChzVGhldGEgKiBjKSApICogcmFkaXVzICsgY3kpO1xuICAgIH1cblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNwZWNpZmllcyBhIHNpbXBsZSBvbmUtY29sb3IgZmlsbCB0aGF0IHN1YnNlcXVlbnQgY2FsbHMgdG8gb3RoZXIgR3JhcGhpY3MgbWV0aG9kc1xuICogKHN1Y2ggYXMgbGluZVRvKCkgb3IgZHJhd0NpcmNsZSgpKSB1c2Ugd2hlbiBkcmF3aW5nLlxuICpcbiAqIEBwYXJhbSBjb2xvciB7bnVtYmVyfSB0aGUgY29sb3Igb2YgdGhlIGZpbGxcbiAqIEBwYXJhbSBhbHBoYSB7bnVtYmVyfSB0aGUgYWxwaGEgb2YgdGhlIGZpbGxcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuYmVnaW5GaWxsID0gZnVuY3Rpb24gKGNvbG9yLCBhbHBoYSlcbntcbiAgICB0aGlzLmZpbGxpbmcgPSB0cnVlO1xuICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3IgfHwgMDtcbiAgICB0aGlzLmZpbGxBbHBoYSA9IChhbHBoYSA9PT0gdW5kZWZpbmVkKSA/IDEgOiBhbHBoYTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLmxlbmd0aCA8PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmZpbGwgPSB0aGlzLmZpbGxpbmc7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmZpbGxDb2xvciA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5maWxsQWxwaGEgPSB0aGlzLmZpbGxBbHBoYTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQXBwbGllcyBhIGZpbGwgdG8gdGhlIGxpbmVzIGFuZCBzaGFwZXMgdGhhdCB3ZXJlIGFkZGVkIHNpbmNlIHRoZSBsYXN0IGNhbGwgdG8gdGhlIGJlZ2luRmlsbCgpIG1ldGhvZC5cbiAqXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmVuZEZpbGwgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuZmlsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmlsbENvbG9yID0gbnVsbDtcbiAgICB0aGlzLmZpbGxBbHBoYSA9IDE7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZCBvZiB0aGUgdG9wLWxlZnQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFRoZSB3aWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IFRoZSBoZWlnaHQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5kcmF3UmVjdCA9IGZ1bmN0aW9uICggeCwgeSwgd2lkdGgsIGhlaWdodCApXG57XG4gICAgdGhpcy5kcmF3U2hhcGUobmV3IG1hdGguUmVjdGFuZ2xlKHgseSwgd2lkdGgsIGhlaWdodCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZCBvZiB0aGUgdG9wLWxlZnQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmQgb2YgdGhlIHRvcC1sZWZ0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgd2lkdGggb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSByYWRpdXMge251bWJlcn0gUmFkaXVzIG9mIHRoZSByZWN0YW5nbGUgY29ybmVyc1xuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZHJhd1JvdW5kZWRSZWN0ID0gZnVuY3Rpb24gKCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMgKVxue1xuICAgIHRoaXMuZHJhd1NoYXBlKG5ldyBtYXRoLlJvdW5kZWRSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRHJhd3MgYSBjaXJjbGUuXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGVcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgY2lyY2xlXG4gKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9IFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5kcmF3Q2lyY2xlID0gZnVuY3Rpb24gKHgsIHksIHJhZGl1cylcbntcbiAgICB0aGlzLmRyYXdTaGFwZShuZXcgbWF0aC5DaXJjbGUoeCx5LCByYWRpdXMpKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEcmF3cyBhbiBlbGxpcHNlLlxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgZWxsaXBzZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBlbGxpcHNlXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gVGhlIGhhbGYgd2lkdGggb2YgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gVGhlIGhhbGYgaGVpZ2h0IG9mIHRoZSBlbGxpcHNlXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmRyYXdFbGxpcHNlID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgdGhpcy5kcmF3U2hhcGUobmV3IG1hdGguRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRHJhd3MgYSBwb2x5Z29uIHVzaW5nIHRoZSBnaXZlbiBwYXRoLlxuICpcbiAqIEBwYXJhbSBwYXRoIHtBcnJheX0gVGhlIHBhdGggZGF0YSB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgcG9seWdvbi5cbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZHJhd1BvbHlnb24gPSBmdW5jdGlvbiAocGF0aClcbntcbiAgICBpZiAoIShwYXRoIGluc3RhbmNlb2YgQXJyYXkpKVxuICAgIHtcbiAgICAgICAgcGF0aCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3U2hhcGUobmV3IG1hdGguUG9seWdvbihwYXRoKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBncmFwaGljcyB0aGF0IHdlcmUgZHJhd24gdG8gdGhpcyBHcmFwaGljcyBvYmplY3QsIGFuZCByZXNldHMgZmlsbCBhbmQgbGluZSBzdHlsZSBzZXR0aW5ncy5cbiAqXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmxpbmVXaWR0aCA9IDA7XG4gICAgdGhpcy5maWxsaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyRGlydHkgPSB0cnVlO1xuICAgIHRoaXMuZ3JhcGhpY3NEYXRhID0gW107XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVXNlZnVsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHRleHR1cmUgb2YgdGhlIGdyYXBoaWNzIG9iamVjdCB0aGF0IGNhbiB0aGVuIGJlIHVzZWQgdG8gY3JlYXRlIHNwcml0ZXNcbiAqIFRoaXMgY2FuIGJlIHF1aXRlIHVzZWZ1bCBpZiB5b3VyIGdlb21ldHJ5IGlzIGNvbXBsaWNhdGVkIGFuZCBuZWVkcyB0byBiZSByZXVzZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQHBhcmFtIHJlc29sdXRpb24ge251bWJlcn0gVGhlIHJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUgYmVpbmcgZ2VuZXJhdGVkXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNob3VsZCBiZSBvbmUgb2YgdGhlIHNjYWxlTW9kZSBjb25zdHNcbiAqIEByZXR1cm4ge1RleHR1cmV9IGEgdGV4dHVyZSBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5nZW5lcmF0ZVRleHR1cmUgPSBmdW5jdGlvbiAocmVzb2x1dGlvbiwgc2NhbGVNb2RlKVxue1xuICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uIHx8IDE7XG5cbiAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblxuICAgIHZhciBjYW52YXNCdWZmZXIgPSBuZXcgQ2FudmFzQnVmZmVyKGJvdW5kcy53aWR0aCAqIHJlc29sdXRpb24sIGJvdW5kcy5oZWlnaHQgKiByZXNvbHV0aW9uKTtcblxuICAgIHZhciB0ZXh0dXJlID0gVGV4dHVyZS5mcm9tQ2FudmFzKGNhbnZhc0J1ZmZlci5jYW52YXMsIHNjYWxlTW9kZSk7XG4gICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcblxuICAgIGNhbnZhc0J1ZmZlci5jb250ZXh0LnNjYWxlKHJlc29sdXRpb24sIHJlc29sdXRpb24pO1xuXG4gICAgY2FudmFzQnVmZmVyLmNvbnRleHQudHJhbnNsYXRlKC1ib3VuZHMueCwtYm91bmRzLnkpO1xuXG4gICAgQ2FudmFzR3JhcGhpY3MucmVuZGVyR3JhcGhpY3ModGhpcywgY2FudmFzQnVmZmVyLmNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRleHR1cmU7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgV2ViR0wgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5fcmVuZGVyV2ViR0wgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgLy8gaWYgdGhlIHNwcml0ZSBpcyBub3QgdmlzaWJsZSBvciB0aGUgYWxwaGEgaXMgMCB0aGVuIG5vIG5lZWQgdG8gcmVuZGVyIHRoaXMgZWxlbWVudFxuXG4gICAgLy8gdGhpcyBjb2RlIG1heSBzdGlsbCBiZSBuZWVkZWQgc28gbGVhdmluZyBmb3Igbm93Li5cbiAgICAvL1xuICAgIC8qXG4gICAgaWYgKHRoaXMuX2NhY2hlQXNCaXRtYXApXG4gICAge1xuICAgICAgICBpZiAodGhpcy5kaXJ0eSB8fCB0aGlzLmNhY2hlZFNwcml0ZURpcnR5KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUNhY2hlZFNwcml0ZSgpO1xuXG4gICAgICAgICAgICAvLyB3ZSB3aWxsIGFsc28gbmVlZCB0byB1cGRhdGUgdGhlIHRleHR1cmUgb24gdGhlIGdwdSB0b28hXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlZFNwcml0ZVRleHR1cmUoKTtcblxuICAgICAgICAgICAgdGhpcy5jYWNoZWRTcHJpdGVEaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLndvcmxkQWxwaGEgPSB0aGlzLndvcmxkQWxwaGE7XG5cbiAgICAgICAgU3ByaXRlLnByb3RvdHlwZS5yZW5kZXJXZWJHTC5jYWxsKHRoaXMuX2NhY2hlZFNwcml0ZSwgcmVuZGVyZXIpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAqL1xuXG4gICAgaWYgKHRoaXMuZ2xEaXJ0eSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsRGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXJlci5zZXRPYmplY3RSZW5kZXJlcihyZW5kZXJlci5wbHVnaW5zLmdyYXBoaWNzKTtcbiAgICByZW5kZXJlci5wbHVnaW5zLmdyYXBoaWNzLnJlbmRlcih0aGlzKTtcblxufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIENhbnZhcyByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuX3JlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICBpZiAodGhpcy5pc01hc2sgPT09IHRydWUpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHRpbnQgaGFzIGNoYW5nZWQsIHNldCB0aGUgZ3JhcGhpY3Mgb2JqZWN0IHRvIGRpcnR5LlxuICAgIGlmICh0aGlzLl9wcmV2VGludCAhPT0gdGhpcy50aW50KSB7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wcmV2VGludCA9IHRoaXMudGludDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2FjaGVBc0JpdG1hcClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5IHx8IHRoaXMuY2FjaGVkU3ByaXRlRGlydHkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlQ2FjaGVkU3ByaXRlKCk7XG5cbiAgICAgICAgICAgIC8vIHdlIHdpbGwgYWxzbyBuZWVkIHRvIHVwZGF0ZSB0aGUgdGV4dHVyZVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZWRTcHJpdGVUZXh0dXJlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVkU3ByaXRlRGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5hbHBoYSA9IHRoaXMuYWxwaGE7XG5cbiAgICAgICAgU3ByaXRlLnByb3RvdHlwZS5fcmVuZGVyQ2FudmFzLmNhbGwodGhpcy5fY2FjaGVkU3ByaXRlLCByZW5kZXJlcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLndvcmxkVHJhbnNmb3JtO1xuXG4gICAgICAgIGlmICh0aGlzLmJsZW5kTW9kZSAhPT0gcmVuZGVyZXIuY3VycmVudEJsZW5kTW9kZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIuY3VycmVudEJsZW5kTW9kZSA9IHRoaXMuYmxlbmRNb2RlO1xuICAgICAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSByZW5kZXJlci5ibGVuZE1vZGVzW3JlbmRlcmVyLmN1cnJlbnRCbGVuZE1vZGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc29sdXRpb24gPSByZW5kZXJlci5yZXNvbHV0aW9uO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgICAgIHRyYW5zZm9ybS5hICogcmVzb2x1dGlvbixcbiAgICAgICAgICAgIHRyYW5zZm9ybS5iICogcmVzb2x1dGlvbixcbiAgICAgICAgICAgIHRyYW5zZm9ybS5jICogcmVzb2x1dGlvbixcbiAgICAgICAgICAgIHRyYW5zZm9ybS5kICogcmVzb2x1dGlvbixcbiAgICAgICAgICAgIHRyYW5zZm9ybS50eCAqIHJlc29sdXRpb24sXG4gICAgICAgICAgICB0cmFuc2Zvcm0udHkgKiByZXNvbHV0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgQ2FudmFzR3JhcGhpY3MucmVuZGVyR3JhcGhpY3ModGhpcywgY29udGV4dCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgZ3JhcGhpYyBzaGFwZSBhcyBhIHJlY3RhbmdsZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IHRoZSByZWN0YW5ndWxhciBib3VuZGluZyBhcmVhXG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAobWF0cml4KVxue1xuICAgIGlmKCF0aGlzLl9jdXJyZW50Qm91bmRzKVxuICAgIHtcblxuICAgICAgICAvLyByZXR1cm4gYW4gZW1wdHkgb2JqZWN0IGlmIHRoZSBpdGVtIGlzIGEgbWFzayFcbiAgICAgICAgaWYgKCF0aGlzLnJlbmRlcmFibGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRoLlJlY3RhbmdsZS5FTVBUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsQm91bmRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2xEaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNhY2hlZFNwcml0ZURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3VuZHMgPSB0aGlzLl9sb2NhbEJvdW5kcztcblxuICAgICAgICB2YXIgdzAgPSBib3VuZHMueDtcbiAgICAgICAgdmFyIHcxID0gYm91bmRzLndpZHRoICsgYm91bmRzLng7XG5cbiAgICAgICAgdmFyIGgwID0gYm91bmRzLnk7XG4gICAgICAgIHZhciBoMSA9IGJvdW5kcy5oZWlnaHQgKyBib3VuZHMueTtcblxuICAgICAgICB2YXIgd29ybGRUcmFuc2Zvcm0gPSBtYXRyaXggfHwgdGhpcy53b3JsZFRyYW5zZm9ybTtcblxuICAgICAgICB2YXIgYSA9IHdvcmxkVHJhbnNmb3JtLmE7XG4gICAgICAgIHZhciBiID0gd29ybGRUcmFuc2Zvcm0uYjtcbiAgICAgICAgdmFyIGMgPSB3b3JsZFRyYW5zZm9ybS5jO1xuICAgICAgICB2YXIgZCA9IHdvcmxkVHJhbnNmb3JtLmQ7XG4gICAgICAgIHZhciB0eCA9IHdvcmxkVHJhbnNmb3JtLnR4O1xuICAgICAgICB2YXIgdHkgPSB3b3JsZFRyYW5zZm9ybS50eTtcblxuICAgICAgICB2YXIgeDEgPSBhICogdzEgKyBjICogaDEgKyB0eDtcbiAgICAgICAgdmFyIHkxID0gZCAqIGgxICsgYiAqIHcxICsgdHk7XG5cbiAgICAgICAgdmFyIHgyID0gYSAqIHcwICsgYyAqIGgxICsgdHg7XG4gICAgICAgIHZhciB5MiA9IGQgKiBoMSArIGIgKiB3MCArIHR5O1xuXG4gICAgICAgIHZhciB4MyA9IGEgKiB3MCArIGMgKiBoMCArIHR4O1xuICAgICAgICB2YXIgeTMgPSBkICogaDAgKyBiICogdzAgKyB0eTtcblxuICAgICAgICB2YXIgeDQgPSAgYSAqIHcxICsgYyAqIGgwICsgdHg7XG4gICAgICAgIHZhciB5NCA9ICBkICogaDAgKyBiICogdzEgKyB0eTtcblxuICAgICAgICB2YXIgbWF4WCA9IHgxO1xuICAgICAgICB2YXIgbWF4WSA9IHkxO1xuXG4gICAgICAgIHZhciBtaW5YID0geDE7XG4gICAgICAgIHZhciBtaW5ZID0geTE7XG5cbiAgICAgICAgbWluWCA9IHgyIDwgbWluWCA/IHgyIDogbWluWDtcbiAgICAgICAgbWluWCA9IHgzIDwgbWluWCA/IHgzIDogbWluWDtcbiAgICAgICAgbWluWCA9IHg0IDwgbWluWCA/IHg0IDogbWluWDtcblxuICAgICAgICBtaW5ZID0geTIgPCBtaW5ZID8geTIgOiBtaW5ZO1xuICAgICAgICBtaW5ZID0geTMgPCBtaW5ZID8geTMgOiBtaW5ZO1xuICAgICAgICBtaW5ZID0geTQgPCBtaW5ZID8geTQgOiBtaW5ZO1xuXG4gICAgICAgIG1heFggPSB4MiA+IG1heFggPyB4MiA6IG1heFg7XG4gICAgICAgIG1heFggPSB4MyA+IG1heFggPyB4MyA6IG1heFg7XG4gICAgICAgIG1heFggPSB4NCA+IG1heFggPyB4NCA6IG1heFg7XG5cbiAgICAgICAgbWF4WSA9IHkyID4gbWF4WSA/IHkyIDogbWF4WTtcbiAgICAgICAgbWF4WSA9IHkzID4gbWF4WSA/IHkzIDogbWF4WTtcbiAgICAgICAgbWF4WSA9IHk0ID4gbWF4WSA/IHk0IDogbWF4WTtcblxuICAgICAgICB0aGlzLl9ib3VuZHMueCA9IG1pblg7XG4gICAgICAgIHRoaXMuX2JvdW5kcy53aWR0aCA9IG1heFggLSBtaW5YO1xuXG4gICAgICAgIHRoaXMuX2JvdW5kcy55ID0gbWluWTtcbiAgICAgICAgdGhpcy5fYm91bmRzLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSB0aGlzLl9ib3VuZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHM7XG59O1xuXG4vKipcbiogVGVzdHMgaWYgYSBwb2ludCBpcyBpbnNpZGUgdGhpcyBncmFwaGljcyBvYmplY3RcbipcbiogQHBhcmFtIHBvaW50IHtQb2ludH0gdGhlIHBvaW50IHRvIHRlc3RcbiogQHJldHVybiB7Ym9vbGVhbn0gdGhlIHJlc3VsdCBvZiB0aGUgdGVzdFxuKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5jb250YWluc1BvaW50ID0gZnVuY3Rpb24oIHBvaW50IClcbntcbiAgICB0aGlzLndvcmxkVHJhbnNmb3JtLmFwcGx5SW52ZXJzZShwb2ludCwgIHRlbXBQb2ludCk7XG5cbiAgICB2YXIgZ3JhcGhpY3NEYXRhID0gdGhpcy5ncmFwaGljc0RhdGE7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBoaWNzRGF0YS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBkYXRhID0gZ3JhcGhpY3NEYXRhW2ldO1xuXG4gICAgICAgIGlmICghZGF0YS5maWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgZGVhbCB3aXRoIGZpbGxzLi5cbiAgICAgICAgaWYgKGRhdGEuc2hhcGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICggZGF0YS5zaGFwZS5jb250YWlucyggdGVtcFBvaW50LngsIHRlbXBQb2ludC55ICkgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGJvdW5kcyBvZiB0aGUgb2JqZWN0XG4gKlxuICovXG5HcmFwaGljcy5wcm90b3R5cGUudXBkYXRlTG9jYWxCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBtaW5YID0gSW5maW5pdHk7XG4gICAgdmFyIG1heFggPSAtSW5maW5pdHk7XG5cbiAgICB2YXIgbWluWSA9IEluZmluaXR5O1xuICAgIHZhciBtYXhZID0gLUluZmluaXR5O1xuXG4gICAgaWYgKHRoaXMuZ3JhcGhpY3NEYXRhLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHZhciBzaGFwZSwgcG9pbnRzLCB4LCB5LCB3LCBoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ncmFwaGljc0RhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5ncmFwaGljc0RhdGFbaV07XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcbiAgICAgICAgICAgIHZhciBsaW5lV2lkdGggPSBkYXRhLmxpbmVXaWR0aDtcbiAgICAgICAgICAgIHNoYXBlID0gZGF0YS5zaGFwZTtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IENPTlNULlNIQVBFUy5SRUNUIHx8IHR5cGUgPT09IENPTlNULlNIQVBFUy5SUkVDKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHggPSBzaGFwZS54IC0gbGluZVdpZHRoLzI7XG4gICAgICAgICAgICAgICAgeSA9IHNoYXBlLnkgLSBsaW5lV2lkdGgvMjtcbiAgICAgICAgICAgICAgICB3ID0gc2hhcGUud2lkdGggKyBsaW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgaCA9IHNoYXBlLmhlaWdodCArIGxpbmVXaWR0aDtcblxuICAgICAgICAgICAgICAgIG1pblggPSB4IDwgbWluWCA/IHggOiBtaW5YO1xuICAgICAgICAgICAgICAgIG1heFggPSB4ICsgdyA+IG1heFggPyB4ICsgdyA6IG1heFg7XG5cbiAgICAgICAgICAgICAgICBtaW5ZID0geSA8IG1pblkgPyB5IDogbWluWTtcbiAgICAgICAgICAgICAgICBtYXhZID0geSArIGggPiBtYXhZID8geSArIGggOiBtYXhZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gQ09OU1QuU0hBUEVTLkNJUkMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeCA9IHNoYXBlLng7XG4gICAgICAgICAgICAgICAgeSA9IHNoYXBlLnk7XG4gICAgICAgICAgICAgICAgdyA9IHNoYXBlLnJhZGl1cyArIGxpbmVXaWR0aC8yO1xuICAgICAgICAgICAgICAgIGggPSBzaGFwZS5yYWRpdXMgKyBsaW5lV2lkdGgvMjtcblxuICAgICAgICAgICAgICAgIG1pblggPSB4IC0gdyA8IG1pblggPyB4IC0gdyA6IG1pblg7XG4gICAgICAgICAgICAgICAgbWF4WCA9IHggKyB3ID4gbWF4WCA/IHggKyB3IDogbWF4WDtcblxuICAgICAgICAgICAgICAgIG1pblkgPSB5IC0gaCA8IG1pblkgPyB5IC0gaCA6IG1pblk7XG4gICAgICAgICAgICAgICAgbWF4WSA9IHkgKyBoID4gbWF4WSA/IHkgKyBoIDogbWF4WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IENPTlNULlNIQVBFUy5FTElQKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHggPSBzaGFwZS54O1xuICAgICAgICAgICAgICAgIHkgPSBzaGFwZS55O1xuICAgICAgICAgICAgICAgIHcgPSBzaGFwZS53aWR0aCArIGxpbmVXaWR0aC8yO1xuICAgICAgICAgICAgICAgIGggPSBzaGFwZS5oZWlnaHQgKyBsaW5lV2lkdGgvMjtcblxuICAgICAgICAgICAgICAgIG1pblggPSB4IC0gdyA8IG1pblggPyB4IC0gdyA6IG1pblg7XG4gICAgICAgICAgICAgICAgbWF4WCA9IHggKyB3ID4gbWF4WCA/IHggKyB3IDogbWF4WDtcblxuICAgICAgICAgICAgICAgIG1pblkgPSB5IC0gaCA8IG1pblkgPyB5IC0gaCA6IG1pblk7XG4gICAgICAgICAgICAgICAgbWF4WSA9IHkgKyBoID4gbWF4WSA/IHkgKyBoIDogbWF4WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBQT0xZXG4gICAgICAgICAgICAgICAgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqICs9IDIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4ID0gcG9pbnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICB5ID0gcG9pbnRzW2orMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbWluWCA9IHgtbGluZVdpZHRoIDwgbWluWCA/IHgtbGluZVdpZHRoIDogbWluWDtcbiAgICAgICAgICAgICAgICAgICAgbWF4WCA9IHgrbGluZVdpZHRoID4gbWF4WCA/IHgrbGluZVdpZHRoIDogbWF4WDtcblxuICAgICAgICAgICAgICAgICAgICBtaW5ZID0geS1saW5lV2lkdGggPCBtaW5ZID8geS1saW5lV2lkdGggOiBtaW5ZO1xuICAgICAgICAgICAgICAgICAgICBtYXhZID0geStsaW5lV2lkdGggPiBtYXhZID8geStsaW5lV2lkdGggOiBtYXhZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBtaW5YID0gMDtcbiAgICAgICAgbWF4WCA9IDA7XG4gICAgICAgIG1pblkgPSAwO1xuICAgICAgICBtYXhZID0gMDtcbiAgICB9XG5cbiAgICB2YXIgcGFkZGluZyA9IHRoaXMuYm91bmRzUGFkZGluZztcblxuICAgIHRoaXMuX2xvY2FsQm91bmRzLnggPSBtaW5YIC0gcGFkZGluZztcbiAgICB0aGlzLl9sb2NhbEJvdW5kcy53aWR0aCA9IChtYXhYIC0gbWluWCkgKyBwYWRkaW5nICogMjtcblxuICAgIHRoaXMuX2xvY2FsQm91bmRzLnkgPSBtaW5ZIC0gcGFkZGluZztcbiAgICB0aGlzLl9sb2NhbEJvdW5kcy5oZWlnaHQgPSAobWF4WSAtIG1pblkpICsgcGFkZGluZyAqIDI7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgY2FjaGVkIHNwcml0ZSB3aGVuIHRoZSBzcHJpdGUgaGFzIGNhY2hlQXNCaXRtYXAgPSB0cnVlXG4gKlxuICogQHByaXZhdGVcbiAqL1xuLypcbkdyYXBoaWNzLnByb3RvdHlwZS5fZ2VuZXJhdGVDYWNoZWRTcHJpdGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBib3VuZHMgPSB0aGlzLmdldExvY2FsQm91bmRzKCk7XG5cbiAgICBpZiAoIXRoaXMuX2NhY2hlZFNwcml0ZSlcbiAgICB7XG4gICAgICAgIHZhciBjYW52YXNCdWZmZXIgPSBuZXcgQ2FudmFzQnVmZmVyKGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gVGV4dHVyZS5mcm9tQ2FudmFzKGNhbnZhc0J1ZmZlci5jYW52YXMpO1xuXG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSk7XG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5idWZmZXIgPSBjYW52YXNCdWZmZXI7XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLndvcmxkVHJhbnNmb3JtID0gdGhpcy53b3JsZFRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmJ1ZmZlci5yZXNpemUoYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBsZXZlcmFnZSB0aGUgYW5jaG9yIHRvIGFjY291bnQgZm9yIHRoZSBvZmZzZXQgb2YgdGhlIGVsZW1lbnRcbiAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYW5jaG9yLnggPSAtKCBib3VuZHMueCAvIGJvdW5kcy53aWR0aCApO1xuICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5hbmNob3IueSA9IC0oIGJvdW5kcy55IC8gYm91bmRzLmhlaWdodCApO1xuXG4gICAgLy8gdGhpcy5fY2FjaGVkU3ByaXRlLmJ1ZmZlci5jb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYnVmZmVyLmNvbnRleHQudHJhbnNsYXRlKC1ib3VuZHMueCwtYm91bmRzLnkpO1xuXG4gICAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgYWxwaGEgb2YgdGhlIGdyYXBoaWNzIHRvIDEgZm9yIHRoZSByZW5kZXIuLlxuICAgIHRoaXMud29ybGRBbHBoYSA9IDE7XG5cbiAgICAvLyBub3cgcmVuZGVyIHRoZSBncmFwaGljLi5cbiAgICBDYW52YXNHcmFwaGljcy5yZW5kZXJHcmFwaGljcyh0aGlzLCB0aGlzLl9jYWNoZWRTcHJpdGUuYnVmZmVyLmNvbnRleHQpO1xuXG4gICAgdGhpcy5fY2FjaGVkU3ByaXRlLmFscGhhID0gdGhpcy5hbHBoYTtcbn07XG4qL1xuLyoqXG4gKiBVcGRhdGVzIHRleHR1cmUgc2l6ZSBiYXNlZCBvbiBjYW52YXMgc2l6ZVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbi8qXG5HcmFwaGljcy5wcm90b3R5cGUudXBkYXRlQ2FjaGVkU3ByaXRlVGV4dHVyZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGNhY2hlZFNwcml0ZSA9IHRoaXMuX2NhY2hlZFNwcml0ZTtcbiAgICB2YXIgdGV4dHVyZSA9IGNhY2hlZFNwcml0ZS50ZXh0dXJlO1xuICAgIHZhciBjYW52YXMgPSBjYWNoZWRTcHJpdGUuYnVmZmVyLmNhbnZhcztcblxuICAgIHRleHR1cmUuYmFzZVRleHR1cmUud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRleHR1cmUuY3JvcC53aWR0aCA9IHRleHR1cmUuZnJhbWUud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgdGV4dHVyZS5jcm9wLmhlaWdodCA9IHRleHR1cmUuZnJhbWUuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgIGNhY2hlZFNwcml0ZS5fd2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY2FjaGVkU3ByaXRlLl9oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgLy8gdXBkYXRlIHRoZSBkaXJ0eSBiYXNlIHRleHR1cmVzXG4gICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5kaXJ0eSgpO1xufTsqL1xuXG4vKipcbiAqIERlc3Ryb3lzIGEgcHJldmlvdXMgY2FjaGVkIHNwcml0ZS5cbiAqXG4gKi9cbi8qXG5HcmFwaGljcy5wcm90b3R5cGUuZGVzdHJveUNhY2hlZFNwcml0ZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5fY2FjaGVkU3ByaXRlLnRleHR1cmUuZGVzdHJveSh0cnVlKTtcblxuICAgIC8vIGxldCB0aGUgZ2MgY29sbGVjdCB0aGUgdW51c2VkIHNwcml0ZVxuICAgIC8vIFRPRE8gY291bGQgYmUgb2JqZWN0IHBvb2xlZCFcbiAgICB0aGlzLl9jYWNoZWRTcHJpdGUgPSBudWxsO1xufTsqL1xuXG4vKipcbiAqIERyYXdzIHRoZSBnaXZlbiBzaGFwZSB0byB0aGlzIEdyYXBoaWNzIG9iamVjdC4gQ2FuIGJlIGFueSBvZiBDaXJjbGUsIFJlY3RhbmdsZSwgRWxsaXBzZSwgTGluZSBvciBQb2x5Z29uLlxuICpcbiAqIEBwYXJhbSBzaGFwZSB7Q2lyY2xlfFJlY3RhbmdsZXxFbGxpcHNlfExpbmV8UG9seWdvbn0gVGhlIHNoYXBlIG9iamVjdCB0byBkcmF3LlxuICogQHJldHVybiB7R3JhcGhpY3NEYXRhfSBUaGUgZ2VuZXJhdGVkIEdyYXBoaWNzRGF0YSBvYmplY3QuXG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5kcmF3U2hhcGUgPSBmdW5jdGlvbiAoc2hhcGUpXG57XG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgpXG4gICAge1xuICAgICAgICAvLyBjaGVjayBjdXJyZW50IHBhdGghXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5sZW5ndGggPD0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljc0RhdGEucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQYXRoID0gbnVsbDtcblxuICAgIHZhciBkYXRhID0gbmV3IEdyYXBoaWNzRGF0YSh0aGlzLmxpbmVXaWR0aCwgdGhpcy5saW5lQ29sb3IsIHRoaXMubGluZUFscGhhLCB0aGlzLmZpbGxDb2xvciwgdGhpcy5maWxsQWxwaGEsIHRoaXMuZmlsbGluZywgc2hhcGUpO1xuXG4gICAgdGhpcy5ncmFwaGljc0RhdGEucHVzaChkYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5QT0xZKVxuICAgIHtcbiAgICAgICAgZGF0YS5zaGFwZS5jbG9zZWQgPSB0aGlzLmZpbGxpbmc7XG4gICAgICAgIHRoaXMuY3VycmVudFBhdGggPSBkYXRhO1xuICAgIH1cblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59O1xuIiwiLyoqXG4gKiBBIEdyYXBoaWNzRGF0YSBvYmplY3QuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIGxpbmVXaWR0aCB7bnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIGxpbmUgdG8gZHJhd1xuICogQHBhcmFtIGxpbmVDb2xvciB7bnVtYmVyfSB0aGUgY29sb3Igb2YgdGhlIGxpbmUgdG8gZHJhd1xuICogQHBhcmFtIGxpbmVBbHBoYSB7bnVtYmVyfSB0aGUgYWxwaGEgb2YgdGhlIGxpbmUgdG8gZHJhd1xuICogQHBhcmFtIGZpbGxDb2xvciB7bnVtYmVyfSB0aGUgY29sb3Igb2YgdGhlIGZpbGxcbiAqIEBwYXJhbSBmaWxsQWxwaGEge251bWJlcn0gdGhlIGFscGhhIG9mIHRoZSBmaWxsXG4gKiBAcGFyYW0gZmlsbCAgICAgIHtib29sZWFufSB3aGV0aGVyIG9yIG5vdCB0aGUgc2hhcGUgaXMgZmlsbGVkIHdpdGggYSBjb2xvdXJcbiAqIEBwYXJhbSBzaGFwZSAgICAge0NpcmNsZXxSZWN0YW5nbGV8RWxsaXBzZXxMaW5lfFBvbHlnb259IFRoZSBzaGFwZSBvYmplY3QgdG8gZHJhdy5cbiAqL1xuZnVuY3Rpb24gR3JhcGhpY3NEYXRhKGxpbmVXaWR0aCwgbGluZUNvbG9yLCBsaW5lQWxwaGEsIGZpbGxDb2xvciwgZmlsbEFscGhhLCBmaWxsLCBzaGFwZSlcbntcbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgbGluZSB0byBkcmF3XG4gICAgICovXG4gICAgdGhpcy5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG5cbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHRoZSBjb2xvciBvZiB0aGUgbGluZSB0byBkcmF3XG4gICAgICovXG4gICAgdGhpcy5saW5lQ29sb3IgPSBsaW5lQ29sb3I7XG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSB0aGUgYWxwaGEgb2YgdGhlIGxpbmUgdG8gZHJhd1xuICAgICAqL1xuICAgIHRoaXMubGluZUFscGhhID0gbGluZUFscGhhO1xuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gY2FjaGVkIHRpbnQgb2YgdGhlIGxpbmUgdG8gZHJhd1xuICAgICAqL1xuICAgIHRoaXMuX2xpbmVUaW50ID0gbGluZUNvbG9yO1xuXG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSB0aGUgY29sb3Igb2YgdGhlIGZpbGxcbiAgICAgKi9cbiAgICB0aGlzLmZpbGxDb2xvciA9IGZpbGxDb2xvcjtcblxuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gdGhlIGFscGhhIG9mIHRoZSBmaWxsXG4gICAgICovXG4gICAgdGhpcy5maWxsQWxwaGEgPSBmaWxsQWxwaGE7XG5cbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IGNhY2hlZCB0aW50IG9mIHRoZSBmaWxsXG4gICAgICovXG4gICAgdGhpcy5fZmlsbFRpbnQgPSBmaWxsQ29sb3I7XG5cbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSB3aGV0aGVyIG9yIG5vdCB0aGUgc2hhcGUgaXMgZmlsbGVkIHdpdGggYSBjb2xvdXJcbiAgICAgKi9cbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuXG4gICAgLyogXG4gICAgICogQG1lbWJlciB7Q2lyY2xlfFJlY3RhbmdsZXxFbGxpcHNlfExpbmV8UG9seWdvbn0gVGhlIHNoYXBlIG9iamVjdCB0byBkcmF3LlxuICAgICAqL1xuICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcblxuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gVGhlIHR5cGUgb2YgdGhlIHNoYXBlLCBzZWUgdGhlIENvbnN0LlNoYXBlcyBmaWxlIGZvciBhbGwgdGhlIGV4aXN0aW5nIHR5cGVzLCBcbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBzaGFwZS50eXBlO1xufVxuXG5HcmFwaGljc0RhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR3JhcGhpY3NEYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBHcmFwaGljc0RhdGE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBHcmFwaGljc0RhdGEgb2JqZWN0IHdpdGggdGhlIHNhbWUgdmFsdWVzIGFzIHRoaXMgb25lLlxuICpcbiAqIEByZXR1cm4ge0dyYXBoaWNzRGF0YX1cbiAqL1xuR3JhcGhpY3NEYXRhLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBHcmFwaGljc0RhdGEoXG4gICAgICAgIHRoaXMubGluZVdpZHRoLFxuICAgICAgICB0aGlzLmxpbmVDb2xvcixcbiAgICAgICAgdGhpcy5saW5lQWxwaGEsXG4gICAgICAgIHRoaXMuZmlsbENvbG9yLFxuICAgICAgICB0aGlzLmZpbGxBbHBoYSxcbiAgICAgICAgdGhpcy5maWxsLFxuICAgICAgICB0aGlzLnNoYXBlXG4gICAgKTtcbn07XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi8uLi9tYXRoJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpLFxuICAgIE9iamVjdFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL3V0aWxzL09iamVjdFJlbmRlcmVyJyksXG4gICAgV2ViR0xSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVycy93ZWJnbC9XZWJHTFJlbmRlcmVyJyksXG4gICAgV2ViR0xHcmFwaGljc0RhdGEgPSByZXF1aXJlKCcuL1dlYkdMR3JhcGhpY3NEYXRhJyk7XG5cbi8qKlxuICogUmVuZGVycyB0aGUgZ3JhcGhpY3Mgb2JqZWN0LlxuICpcbiAqIEBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAZXh0ZW5kcyBPYmplY3RSZW5kZXJlclxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBvYmplY3QgcmVuZGVyZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBHcmFwaGljc1JlbmRlcmVyKHJlbmRlcmVyKVxue1xuICAgIE9iamVjdFJlbmRlcmVyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgdGhpcy5ncmFwaGljc0RhdGFQb29sID0gW107XG5cbiAgICB0aGlzLnByaW1pdGl2ZVNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5jb21wbGV4UHJpbWl0aXZlU2hhZGVyID0gbnVsbDtcbn1cblxuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdFJlbmRlcmVyLnByb3RvdHlwZSk7XG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdyYXBoaWNzUmVuZGVyZXI7XG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoaWNzUmVuZGVyZXI7XG5cbldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ2dyYXBoaWNzJywgR3JhcGhpY3NSZW5kZXJlcik7XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBXZWJHTCBjb250ZXh0IGNoYW5nZVxuICpcbiAqIEBwcml2YXRlXG4gKlxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbigpXG57XG5cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyByZW5kZXJlci5cbiAqXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZ3JhcGhpY3NEYXRhUG9vbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSBncmFwaGljcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCB0byByZW5kZXIuXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGdyYXBoaWNzKVxue1xuICAgIHZhciByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgdmFyIGdsID0gcmVuZGVyZXIuZ2w7XG5cbiAgICB2YXIgc2hhZGVyID0gcmVuZGVyZXIuc2hhZGVyTWFuYWdlci5wbHVnaW5zLnByaW1pdGl2ZVNoYWRlcixcbiAgICAgICAgd2ViR0xEYXRhO1xuXG4gICAgaWYgKGdyYXBoaWNzLmRpcnR5KVxuICAgIHtcbiAgICAgICAgdGhpcy51cGRhdGVHcmFwaGljcyhncmFwaGljcywgZ2wpO1xuICAgIH1cblxuICAgIHZhciB3ZWJHTCA9IGdyYXBoaWNzLl93ZWJHTFtnbC5pZF07XG5cbiAgICAvLyBUaGlzICBjb3VsZCBiZSBzcGVlZGVkIHVwIGZvciBzdXJlIVxuXG4gICAgcmVuZGVyZXIuYmxlbmRNb2RlTWFuYWdlci5zZXRCbGVuZE1vZGUoIGdyYXBoaWNzLmJsZW5kTW9kZSApO1xuXG4vLyAgICB2YXIgbWF0cml4ID0gIGdyYXBoaWNzLndvcmxkVHJhbnNmb3JtLmNsb25lKCk7XG4vLyAgICB2YXIgbWF0cml4ID0gIHJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC5jbG9uZSgpO1xuLy8gICAgbWF0cml4LmFwcGVuZChncmFwaGljcy53b3JsZFRyYW5zZm9ybSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdlYkdMLmRhdGEubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZiAod2ViR0wuZGF0YVtpXS5tb2RlID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICB3ZWJHTERhdGEgPSB3ZWJHTC5kYXRhW2ldO1xuXG4gICAgICAgICAgICByZW5kZXJlci5zdGVuY2lsTWFuYWdlci5wdXNoU3RlbmNpbChncmFwaGljcywgd2ViR0xEYXRhLCByZW5kZXJlcik7XG5cbiAgICAgICAgICAgIC8vIHJlbmRlciBxdWFkLi5cbiAgICAgICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9GQU4sIDQsIGdsLlVOU0lHTkVEX1NIT1JULCAoIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCAtIDQgKSAqIDIgKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIuc3RlbmNpbE1hbmFnZXIucG9wU3RlbmNpbChncmFwaGljcywgd2ViR0xEYXRhLCByZW5kZXJlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB3ZWJHTERhdGEgPSB3ZWJHTC5kYXRhW2ldO1xuXG5cbiAgICAgICAgICAgIHNoYWRlciA9IHJlbmRlcmVyLnNoYWRlck1hbmFnZXIucHJpbWl0aXZlU2hhZGVyO1xuXG4gICAgICAgICAgICByZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlciggc2hhZGVyICk7Ly9hY3RpdmF0ZVByaW1pdGl2ZVNoYWRlcigpO1xuXG4gICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KHNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCBncmFwaGljcy53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpKTtcblxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCByZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnByb2plY3Rpb25NYXRyaXgudG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYoc2hhZGVyLnVuaWZvcm1zLnRpbnQuX2xvY2F0aW9uLCB1dGlscy5oZXgycmdiKGdyYXBoaWNzLnRpbnQpKTtcblxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKHNoYWRlci51bmlmb3Jtcy5hbHBoYS5fbG9jYXRpb24sIGdyYXBoaWNzLndvcmxkQWxwaGEpO1xuXG5cbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB3ZWJHTERhdGEuYnVmZmVyKTtcblxuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgNCAqIDYsIDApO1xuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hQ29sb3IsIDQsIGdsLkZMT0FULCBmYWxzZSw0ICogNiwgMiAqIDQpO1xuXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGluZGV4IGJ1ZmZlciFcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHdlYkdMRGF0YS5pbmRleEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVfU1RSSVAsICB3ZWJHTERhdGEuaW5kaWNlcy5sZW5ndGgsIGdsLlVOU0lHTkVEX1NIT1JULCAwICk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGdyYXBoaWNzIG9iamVjdFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3NEYXRhIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCB0byB1cGRhdGVcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUudXBkYXRlR3JhcGhpY3MgPSBmdW5jdGlvbihncmFwaGljcylcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgIC8vIGdldCB0aGUgY29udGV4dHMgZ3JhcGhpY3Mgb2JqZWN0XG4gICAgdmFyIHdlYkdMID0gZ3JhcGhpY3MuX3dlYkdMW2dsLmlkXTtcblxuICAgIC8vIGlmIHRoZSBncmFwaGljcyBvYmplY3QgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdlYkdMIGNvbnRleHQgdGltZSB0byBjcmVhdGUgaXQhXG4gICAgaWYgKCF3ZWJHTClcbiAgICB7XG4gICAgICAgIHdlYkdMID0gZ3JhcGhpY3MuX3dlYkdMW2dsLmlkXSA9IHtsYXN0SW5kZXg6MCwgZGF0YTpbXSwgZ2w6Z2x9O1xuICAgIH1cblxuICAgIC8vIGZsYWcgdGhlIGdyYXBoaWNzIGFzIG5vdCBkaXJ0eSBhcyB3ZSBhcmUgYWJvdXQgdG8gdXBkYXRlIGl0Li4uXG4gICAgZ3JhcGhpY3MuZGlydHkgPSBmYWxzZTtcblxuICAgIHZhciBpO1xuXG4gICAgLy8gaWYgdGhlIHVzZXIgY2xlYXJlZCB0aGUgZ3JhcGhpY3Mgb2JqZWN0IHdlIHdpbGwgbmVlZCB0byBjbGVhciBldmVyeSBvYmplY3RcbiAgICBpZiAoZ3JhcGhpY3MuY2xlYXJEaXJ0eSlcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmNsZWFyRGlydHkgPSBmYWxzZTtcblxuICAgICAgICAvLyBsb3AgdGhyb3VnaCBhbmQgcmV0dXJuIGFsbCB0aGUgd2ViR0xEYXRhcyB0byB0aGUgb2JqZWN0IHBvb2wgc28gdGhhbiBjYW4gYmUgcmV1c2VkIGxhdGVyIG9uXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB3ZWJHTC5kYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZ3JhcGhpY3NEYXRhID0gd2ViR0wuZGF0YVtpXTtcbiAgICAgICAgICAgIGdyYXBoaWNzRGF0YS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljc0RhdGFQb29sLnB1c2goIGdyYXBoaWNzRGF0YSApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIGFycmF5IGFuZCByZXNldCB0aGUgaW5kZXguLlxuICAgICAgICB3ZWJHTC5kYXRhID0gW107XG4gICAgICAgIHdlYkdMLmxhc3RJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHdlYkdMRGF0YTtcblxuICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgZ3JhcGhpY3MgZGF0YXMgYW5kIGNvbnN0cnVjdCBlYWNoIG9uZS4uXG4gICAgLy8gaWYgdGhlIG9iamVjdCBpcyBhIGNvbXBsZXggZmlsbCB0aGVuIHRoZSBuZXcgc3RlbmNpbCBidWZmZXIgdGVjaG5pcXVlIHdpbGwgYmUgdXNlZFxuICAgIC8vIG90aGVyIHdpc2UgZ3JhcGhpY3Mgb2JqZWN0cyB3aWxsIGJlIHB1c2hlZCBpbnRvIGEgYmF0Y2guLlxuICAgIGZvciAoaSA9IHdlYkdMLmxhc3RJbmRleDsgaSA8IGdyYXBoaWNzLmdyYXBoaWNzRGF0YS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBkYXRhID0gZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhW2ldO1xuXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5QT0xZKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGFkZCB0aGUgcG9pbnRzIHRoZSB0aGUgZ3JhcGhpY3Mgb2JqZWN0Li5cbiAgICAgICAgICAgIGRhdGEucG9pbnRzID0gZGF0YS5zaGFwZS5wb2ludHMuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnNoYXBlLmNsb3NlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSB0aGUgcG9seSBpZiB0aGUgdmFsdWUgaXMgdHJ1ZSFcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wb2ludHNbMF0gIT09IGRhdGEucG9pbnRzW2RhdGEucG9pbnRzLmxlbmd0aC0yXSB8fCBkYXRhLnBvaW50c1sxXSAhPT0gZGF0YS5wb2ludHNbZGF0YS5wb2ludHMubGVuZ3RoLTFdKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wb2ludHMucHVzaChkYXRhLnBvaW50c1swXSwgZGF0YS5wb2ludHNbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTUFLRSBTVVJFIFdFIEhBVkUgVEhFIENPUlJFQ1QgVFlQRS4uXG4gICAgICAgICAgICBpZiAoZGF0YS5maWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBvaW50cy5sZW5ndGggPj0gNilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnBvaW50cy5sZW5ndGggPCA2ICogMilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2ViR0xEYXRhID0gdGhpcy5zd2l0Y2hNb2RlKHdlYkdMLCAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbkRyYXdVc2luZ1NpbXBsZSA9IHRoaXMuYnVpbGRQb2x5KGRhdGEsIHdlYkdMRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNhbkRyYXdVc2luZ1NpbXBsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuRHJhd1VzaW5nU2ltcGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCI8Pj4+XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViR0xEYXRhID0gdGhpcy5zd2l0Y2hNb2RlKHdlYkdMLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQ29tcGxleFBvbHkoZGF0YSwgd2ViR0xEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2ViR0xEYXRhID0gdGhpcy5zd2l0Y2hNb2RlKHdlYkdMLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRDb21wbGV4UG9seShkYXRhLCB3ZWJHTERhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lV2lkdGggPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdlYkdMRGF0YSA9IHRoaXMuc3dpdGNoTW9kZSh3ZWJHTCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZExpbmUoZGF0YSwgd2ViR0xEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdlYkdMRGF0YSA9IHRoaXMuc3dpdGNoTW9kZSh3ZWJHTCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5SRUNUKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRSZWN0YW5nbGUoZGF0YSwgd2ViR0xEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLkNJUkMgfHwgZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuRUxJUClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQ2lyY2xlKGRhdGEsIHdlYkdMRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5SUkVDKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRSb3VuZGVkUmVjdGFuZ2xlKGRhdGEsIHdlYkdMRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3ZWJHTC5sYXN0SW5kZXgrKztcbiAgICB9XG5cbiAgICAvLyB1cGxvYWQgYWxsIHRoZSBkaXJ0eSBkYXRhLi4uXG4gICAgZm9yIChpID0gMDsgaSA8IHdlYkdMLmRhdGEubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB3ZWJHTERhdGEgPSB3ZWJHTC5kYXRhW2ldO1xuXG4gICAgICAgIGlmICh3ZWJHTERhdGEuZGlydHkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdlYkdMRGF0YS51cGxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICpcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHdlYkdMIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IHRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICogQHBhcmFtIHR5cGUge251bWJlcn0gVE9ETyBAQWx2aW5cbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuc3dpdGNoTW9kZSA9IGZ1bmN0aW9uICh3ZWJHTCwgdHlwZSlcbntcbiAgICB2YXIgd2ViR0xEYXRhO1xuXG4gICAgaWYgKCF3ZWJHTC5kYXRhLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHdlYkdMRGF0YSA9IHRoaXMuZ3JhcGhpY3NEYXRhUG9vbC5wb3AoKSB8fCBuZXcgV2ViR0xHcmFwaGljc0RhdGEod2ViR0wuZ2wpO1xuICAgICAgICB3ZWJHTERhdGEubW9kZSA9IHR5cGU7XG4gICAgICAgIHdlYkdMLmRhdGEucHVzaCh3ZWJHTERhdGEpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB3ZWJHTERhdGEgPSB3ZWJHTC5kYXRhW3dlYkdMLmRhdGEubGVuZ3RoLTFdO1xuXG4gICAgICAgIGlmICgod2ViR0xEYXRhLnBvaW50cy5sZW5ndGggPiAzMjAwMDApIHx8IHdlYkdMRGF0YS5tb2RlICE9PSB0eXBlIHx8IHR5cGUgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdlYkdMRGF0YSA9IHRoaXMuZ3JhcGhpY3NEYXRhUG9vbC5wb3AoKSB8fCBuZXcgV2ViR0xHcmFwaGljc0RhdGEod2ViR0wuZ2wpO1xuICAgICAgICAgICAgd2ViR0xEYXRhLm1vZGUgPSB0eXBlO1xuICAgICAgICAgICAgd2ViR0wuZGF0YS5wdXNoKHdlYkdMRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3ZWJHTERhdGEuZGlydHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHdlYkdMRGF0YTtcbn07XG5cbi8qKlxuICogQnVpbGRzIGEgcmVjdGFuZ2xlIHRvIGRyYXdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzRGF0YSB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gd2ViR0xEYXRhIHtvYmplY3R9IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgd2ViR0wtc3BlY2lmaWMgaW5mb3JtYXRpb24gdG8gY3JlYXRlIHRoaXMgc2hhcGVcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuYnVpbGRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpXG57XG4gICAgLy8gLS0tIC8vXG4gICAgLy8gbmVlZCB0byBjb252ZXJ0IHBvaW50cyB0byBhIG5pY2UgcmVndWxhciBkYXRhXG4gICAgLy9cbiAgICB2YXIgcmVjdERhdGEgPSBncmFwaGljc0RhdGEuc2hhcGU7XG4gICAgdmFyIHggPSByZWN0RGF0YS54O1xuICAgIHZhciB5ID0gcmVjdERhdGEueTtcbiAgICB2YXIgd2lkdGggPSByZWN0RGF0YS53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gcmVjdERhdGEuaGVpZ2h0O1xuXG4gICAgaWYgKGdyYXBoaWNzRGF0YS5maWxsKVxuICAgIHtcbiAgICAgICAgdmFyIGNvbG9yID0gdXRpbHMuaGV4MnJnYihncmFwaGljc0RhdGEuZmlsbENvbG9yKTtcbiAgICAgICAgdmFyIGFscGhhID0gZ3JhcGhpY3NEYXRhLmZpbGxBbHBoYTtcblxuICAgICAgICB2YXIgciA9IGNvbG9yWzBdICogYWxwaGE7XG4gICAgICAgIHZhciBnID0gY29sb3JbMV0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGIgPSBjb2xvclsyXSAqIGFscGhhO1xuXG4gICAgICAgIHZhciB2ZXJ0cyA9IHdlYkdMRGF0YS5wb2ludHM7XG4gICAgICAgIHZhciBpbmRpY2VzID0gd2ViR0xEYXRhLmluZGljZXM7XG5cbiAgICAgICAgdmFyIHZlcnRQb3MgPSB2ZXJ0cy5sZW5ndGgvNjtcblxuICAgICAgICAvLyBzdGFydFxuICAgICAgICB2ZXJ0cy5wdXNoKHgsIHkpO1xuICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICB2ZXJ0cy5wdXNoKHggKyB3aWR0aCwgeSk7XG4gICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgIHZlcnRzLnB1c2goeCAsIHkgKyBoZWlnaHQpO1xuICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICB2ZXJ0cy5wdXNoKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgIC8vIGluc2VydCAyIGRlYWQgdHJpYW5nbGVzLi5cbiAgICAgICAgaW5kaWNlcy5wdXNoKHZlcnRQb3MsIHZlcnRQb3MsIHZlcnRQb3MrMSwgdmVydFBvcysyLCB2ZXJ0UG9zKzMsIHZlcnRQb3MrMyk7XG4gICAgfVxuXG4gICAgaWYgKGdyYXBoaWNzRGF0YS5saW5lV2lkdGgpXG4gICAge1xuICAgICAgICB2YXIgdGVtcFBvaW50cyA9IGdyYXBoaWNzRGF0YS5wb2ludHM7XG5cbiAgICAgICAgZ3JhcGhpY3NEYXRhLnBvaW50cyA9IFt4LCB5LFxuICAgICAgICAgICAgICAgICAgeCArIHdpZHRoLCB5LFxuICAgICAgICAgICAgICAgICAgeCArIHdpZHRoLCB5ICsgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgeCwgeSArIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgIHgsIHldO1xuXG5cbiAgICAgICAgdGhpcy5idWlsZExpbmUoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpO1xuXG4gICAgICAgIGdyYXBoaWNzRGF0YS5wb2ludHMgPSB0ZW1wUG9pbnRzO1xuICAgIH1cbn07XG5cbi8qKlxuICogQnVpbGRzIGEgcm91bmRlZCByZWN0YW5nbGUgdG8gZHJhd1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3NEYXRhIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB3ZWJHTERhdGEge29iamVjdH0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSB3ZWJHTC1zcGVjaWZpYyBpbmZvcm1hdGlvbiB0byBjcmVhdGUgdGhpcyBzaGFwZVxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5idWlsZFJvdW5kZWRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpXG57XG4gICAgdmFyIHJyZWN0RGF0YSA9IGdyYXBoaWNzRGF0YS5zaGFwZTtcbiAgICB2YXIgeCA9IHJyZWN0RGF0YS54O1xuICAgIHZhciB5ID0gcnJlY3REYXRhLnk7XG4gICAgdmFyIHdpZHRoID0gcnJlY3REYXRhLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBycmVjdERhdGEuaGVpZ2h0O1xuXG4gICAgdmFyIHJhZGl1cyA9IHJyZWN0RGF0YS5yYWRpdXM7XG5cbiAgICB2YXIgcmVjUG9pbnRzID0gW107XG4gICAgcmVjUG9pbnRzLnB1c2goeCwgeSArIHJhZGl1cyk7XG4gICAgcmVjUG9pbnRzID0gcmVjUG9pbnRzLmNvbmNhdCh0aGlzLnF1YWRyYXRpY0JlemllckN1cnZlKHgsIHkgKyBoZWlnaHQgLSByYWRpdXMsIHgsIHkgKyBoZWlnaHQsIHggKyByYWRpdXMsIHkgKyBoZWlnaHQpKTtcbiAgICByZWNQb2ludHMgPSByZWNQb2ludHMuY29uY2F0KHRoaXMucXVhZHJhdGljQmV6aWVyQ3VydmUoeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cykpO1xuICAgIHJlY1BvaW50cyA9IHJlY1BvaW50cy5jb25jYXQodGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZSh4ICsgd2lkdGgsIHkgKyByYWRpdXMsIHggKyB3aWR0aCwgeSwgeCArIHdpZHRoIC0gcmFkaXVzLCB5KSk7XG4gICAgcmVjUG9pbnRzID0gcmVjUG9pbnRzLmNvbmNhdCh0aGlzLnF1YWRyYXRpY0JlemllckN1cnZlKHggKyByYWRpdXMsIHksIHgsIHksIHgsIHkgKyByYWRpdXMpKTtcblxuICAgIGlmIChncmFwaGljc0RhdGEuZmlsbClcbiAgICB7XG4gICAgICAgIHZhciBjb2xvciA9IHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3NEYXRhLmZpbGxDb2xvcik7XG4gICAgICAgIHZhciBhbHBoYSA9IGdyYXBoaWNzRGF0YS5maWxsQWxwaGE7XG5cbiAgICAgICAgdmFyIHIgPSBjb2xvclswXSAqIGFscGhhO1xuICAgICAgICB2YXIgZyA9IGNvbG9yWzFdICogYWxwaGE7XG4gICAgICAgIHZhciBiID0gY29sb3JbMl0gKiBhbHBoYTtcblxuICAgICAgICB2YXIgdmVydHMgPSB3ZWJHTERhdGEucG9pbnRzO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IHdlYkdMRGF0YS5pbmRpY2VzO1xuXG4gICAgICAgIHZhciB2ZWNQb3MgPSB2ZXJ0cy5sZW5ndGgvNjtcblxuICAgICAgICAvL1RPRE8gdXNlIHRoaXMgaHR0cHM6Ly9naXRodWIuY29tL21hcGJveC9lYXJjdXRcbiAgICAgICAgdmFyIHRyaWFuZ2xlcyA9IHV0aWxzLlBvbHlLLlRyaWFuZ3VsYXRlKHJlY1BvaW50cyk7XG5cbiAgICAgICAgLy9cblxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmlhbmdsZXMubGVuZ3RoOyBpKz0zKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2ldICsgdmVjUG9zKTtcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaV0gKyB2ZWNQb3MpO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpKzFdICsgdmVjUG9zKTtcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaSsyXSArIHZlY1Bvcyk7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2krMl0gKyB2ZWNQb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlY1BvaW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmVydHMucHVzaChyZWNQb2ludHNbaV0sIHJlY1BvaW50c1srK2ldLCByLCBnLCBiLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ3JhcGhpY3NEYXRhLmxpbmVXaWR0aClcbiAgICB7XG4gICAgICAgIHZhciB0ZW1wUG9pbnRzID0gZ3JhcGhpY3NEYXRhLnBvaW50cztcblxuICAgICAgICBncmFwaGljc0RhdGEucG9pbnRzID0gcmVjUG9pbnRzO1xuXG4gICAgICAgIHRoaXMuYnVpbGRMaW5lKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKTtcblxuICAgICAgICBncmFwaGljc0RhdGEucG9pbnRzID0gdGVtcFBvaW50cztcbiAgICB9XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcG9pbnRzIGZvciBhIHF1YWRyYXRpYyBiZXppZXIgY3VydmUuIChoZWxwZXIgZnVuY3Rpb24uLilcbiAqIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODUwOTcvaG93LWRvLWktaW1wbGVtZW50LWEtYmV6aWVyLWN1cnZlLWluLWNcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGZyb21YIHtudW1iZXJ9IE9yaWdpbiBwb2ludCB4XG4gKiBAcGFyYW0gZnJvbVkge251bWJlcn0gT3JpZ2luIHBvaW50IHhcbiAqIEBwYXJhbSBjcFgge251bWJlcn0gQ29udHJvbCBwb2ludCB4XG4gKiBAcGFyYW0gY3BZIHtudW1iZXJ9IENvbnRyb2wgcG9pbnQgeVxuICogQHBhcmFtIHRvWCB7bnVtYmVyfSBEZXN0aW5hdGlvbiBwb2ludCB4XG4gKiBAcGFyYW0gdG9ZIHtudW1iZXJ9IERlc3RpbmF0aW9uIHBvaW50IHlcbiAqIEByZXR1cm4ge251bWJlcltdfSBhbiBhcnJheSBvZiBwb2ludHNcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUucXVhZHJhdGljQmV6aWVyQ3VydmUgPSBmdW5jdGlvbiAoZnJvbVgsIGZyb21ZLCBjcFgsIGNwWSwgdG9YLCB0b1kpXG57XG5cbiAgICB2YXIgeGEsXG4gICAgICAgIHlhLFxuICAgICAgICB4YixcbiAgICAgICAgeWIsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIG4gPSAyMCxcbiAgICAgICAgcG9pbnRzID0gW107XG5cbiAgICBmdW5jdGlvbiBnZXRQdChuMSAsIG4yLCBwZXJjKSB7XG4gICAgICAgIHZhciBkaWZmID0gbjIgLSBuMTtcblxuICAgICAgICByZXR1cm4gbjEgKyAoIGRpZmYgKiBwZXJjICk7XG4gICAgfVxuXG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IG47IGkrKyApIHtcbiAgICAgICAgaiA9IGkgLyBuO1xuXG4gICAgICAgIC8vIFRoZSBHcmVlbiBMaW5lXG4gICAgICAgIHhhID0gZ2V0UHQoIGZyb21YICwgY3BYICwgaiApO1xuICAgICAgICB5YSA9IGdldFB0KCBmcm9tWSAsIGNwWSAsIGogKTtcbiAgICAgICAgeGIgPSBnZXRQdCggY3BYICwgdG9YICwgaiApO1xuICAgICAgICB5YiA9IGdldFB0KCBjcFkgLCB0b1kgLCBqICk7XG5cbiAgICAgICAgLy8gVGhlIEJsYWNrIERvdFxuICAgICAgICB4ID0gZ2V0UHQoIHhhICwgeGIgLCBqICk7XG4gICAgICAgIHkgPSBnZXRQdCggeWEgLCB5YiAsIGogKTtcblxuICAgICAgICBwb2ludHMucHVzaCh4LCB5KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbn07XG5cbi8qKlxuICogQnVpbGRzIGEgY2lyY2xlIHRvIGRyYXdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzRGF0YSB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgdG8gZHJhd1xuICogQHBhcmFtIHdlYkdMRGF0YSB7b2JqZWN0fSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHdlYkdMLXNwZWNpZmljIGluZm9ybWF0aW9uIHRvIGNyZWF0ZSB0aGlzIHNoYXBlXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmJ1aWxkQ2lyY2xlID0gZnVuY3Rpb24gKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKVxue1xuICAgIC8vIG5lZWQgdG8gY29udmVydCBwb2ludHMgdG8gYSBuaWNlIHJlZ3VsYXIgZGF0YVxuICAgIHZhciBjaXJjbGVEYXRhID0gZ3JhcGhpY3NEYXRhLnNoYXBlO1xuICAgIHZhciB4ID0gY2lyY2xlRGF0YS54O1xuICAgIHZhciB5ID0gY2lyY2xlRGF0YS55O1xuICAgIHZhciB3aWR0aDtcbiAgICB2YXIgaGVpZ2h0O1xuXG4gICAgLy8gVE9ETyAtIGJpdCBoYWNreT8/XG4gICAgaWYgKGdyYXBoaWNzRGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuQ0lSQylcbiAgICB7XG4gICAgICAgIHdpZHRoID0gY2lyY2xlRGF0YS5yYWRpdXM7XG4gICAgICAgIGhlaWdodCA9IGNpcmNsZURhdGEucmFkaXVzO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB3aWR0aCA9IGNpcmNsZURhdGEud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGNpcmNsZURhdGEuaGVpZ2h0O1xuICAgIH1cblxuICAgIHZhciB0b3RhbFNlZ3MgPSA0MDtcbiAgICB2YXIgc2VnID0gKE1hdGguUEkgKiAyKSAvIHRvdGFsU2VncyA7XG5cbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpZiAoZ3JhcGhpY3NEYXRhLmZpbGwpXG4gICAge1xuICAgICAgICB2YXIgY29sb3IgPSB1dGlscy5oZXgycmdiKGdyYXBoaWNzRGF0YS5maWxsQ29sb3IpO1xuICAgICAgICB2YXIgYWxwaGEgPSBncmFwaGljc0RhdGEuZmlsbEFscGhhO1xuXG4gICAgICAgIHZhciByID0gY29sb3JbMF0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGcgPSBjb2xvclsxXSAqIGFscGhhO1xuICAgICAgICB2YXIgYiA9IGNvbG9yWzJdICogYWxwaGE7XG5cbiAgICAgICAgdmFyIHZlcnRzID0gd2ViR0xEYXRhLnBvaW50cztcbiAgICAgICAgdmFyIGluZGljZXMgPSB3ZWJHTERhdGEuaW5kaWNlcztcblxuICAgICAgICB2YXIgdmVjUG9zID0gdmVydHMubGVuZ3RoLzY7XG5cbiAgICAgICAgaW5kaWNlcy5wdXNoKHZlY1Bvcyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvdGFsU2VncyArIDEgOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZlcnRzLnB1c2goeCx5LCByLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIHZlcnRzLnB1c2goeCArIE1hdGguc2luKHNlZyAqIGkpICogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgIHkgKyBNYXRoLmNvcyhzZWcgKiBpKSAqIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgciwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godmVjUG9zKyssIHZlY1BvcysrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGljZXMucHVzaCh2ZWNQb3MtMSk7XG4gICAgfVxuXG4gICAgaWYgKGdyYXBoaWNzRGF0YS5saW5lV2lkdGgpXG4gICAge1xuICAgICAgICB2YXIgdGVtcFBvaW50cyA9IGdyYXBoaWNzRGF0YS5wb2ludHM7XG5cbiAgICAgICAgZ3JhcGhpY3NEYXRhLnBvaW50cyA9IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b3RhbFNlZ3MgKyAxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdyYXBoaWNzRGF0YS5wb2ludHMucHVzaCh4ICsgTWF0aC5zaW4oc2VnICogaSkgKiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ICsgTWF0aC5jb3Moc2VnICogaSkgKiBoZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZExpbmUoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpO1xuXG4gICAgICAgIGdyYXBoaWNzRGF0YS5wb2ludHMgPSB0ZW1wUG9pbnRzO1xuICAgIH1cbn07XG5cbi8qKlxuICogQnVpbGRzIGEgbGluZSB0byBkcmF3XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljc0RhdGEge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3NhcnkgcHJvcGVydGllc1xuICogQHBhcmFtIHdlYkdMRGF0YSB7b2JqZWN0fSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHdlYkdMLXNwZWNpZmljIGluZm9ybWF0aW9uIHRvIGNyZWF0ZSB0aGlzIHNoYXBlXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmJ1aWxkTGluZSA9IGZ1bmN0aW9uIChncmFwaGljc0RhdGEsIHdlYkdMRGF0YSlcbntcbiAgICAvLyBUT0RPIE9QVElNSVNFIVxuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcG9pbnRzID0gZ3JhcGhpY3NEYXRhLnBvaW50cztcblxuICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBsaW5lIHdpZHRoIGlzIGFuIG9kZCBudW1iZXIgYWRkIDAuNSB0byBhbGlnbiB0byBhIHdob2xlIHBpeGVsXG4gICAgaWYgKGdyYXBoaWNzRGF0YS5saW5lV2lkdGglMilcbiAgICB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvaW50c1tpXSArPSAwLjU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgZmlyc3QgYW5kIGxhc3QgcG9pbnQuLiBmaWd1cmUgb3V0IHRoZSBtaWRkbGUhXG4gICAgdmFyIGZpcnN0UG9pbnQgPSBuZXcgbWF0aC5Qb2ludChwb2ludHNbMF0sIHBvaW50c1sxXSk7XG4gICAgdmFyIGxhc3RQb2ludCA9IG5ldyBtYXRoLlBvaW50KHBvaW50c1twb2ludHMubGVuZ3RoIC0gMl0sIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pO1xuXG4gICAgLy8gaWYgdGhlIGZpcnN0IHBvaW50IGlzIHRoZSBsYXN0IHBvaW50IC0gZ29ubmEgaGF2ZSBpc3N1ZXMgOilcbiAgICBpZiAoZmlyc3RQb2ludC54ID09PSBsYXN0UG9pbnQueCAmJiBmaXJzdFBvaW50LnkgPT09IGxhc3RQb2ludC55KVxuICAgIHtcbiAgICAgICAgLy8gbmVlZCB0byBjbG9uZSBhcyB3ZSBhcmUgZ29pbmcgdG8gc2xpZ2h0bHkgbW9kaWZ5IHRoZSBzaGFwZS4uXG4gICAgICAgIHBvaW50cyA9IHBvaW50cy5zbGljZSgpO1xuXG4gICAgICAgIHBvaW50cy5wb3AoKTtcbiAgICAgICAgcG9pbnRzLnBvcCgpO1xuXG4gICAgICAgIGxhc3RQb2ludCA9IG5ldyBtYXRoLlBvaW50KHBvaW50c1twb2ludHMubGVuZ3RoIC0gMl0sIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pO1xuXG4gICAgICAgIHZhciBtaWRQb2ludFggPSBsYXN0UG9pbnQueCArIChmaXJzdFBvaW50LnggLSBsYXN0UG9pbnQueCkgKjAuNTtcbiAgICAgICAgdmFyIG1pZFBvaW50WSA9IGxhc3RQb2ludC55ICsgKGZpcnN0UG9pbnQueSAtIGxhc3RQb2ludC55KSAqMC41O1xuXG4gICAgICAgIHBvaW50cy51bnNoaWZ0KG1pZFBvaW50WCwgbWlkUG9pbnRZKTtcbiAgICAgICAgcG9pbnRzLnB1c2gobWlkUG9pbnRYLCBtaWRQb2ludFkpO1xuICAgIH1cblxuICAgIHZhciB2ZXJ0cyA9IHdlYkdMRGF0YS5wb2ludHM7XG4gICAgdmFyIGluZGljZXMgPSB3ZWJHTERhdGEuaW5kaWNlcztcbiAgICB2YXIgbGVuZ3RoID0gcG9pbnRzLmxlbmd0aCAvIDI7XG4gICAgdmFyIGluZGV4Q291bnQgPSBwb2ludHMubGVuZ3RoO1xuICAgIHZhciBpbmRleFN0YXJ0ID0gdmVydHMubGVuZ3RoLzY7XG5cbiAgICAvLyBEUkFXIHRoZSBMaW5lXG4gICAgdmFyIHdpZHRoID0gZ3JhcGhpY3NEYXRhLmxpbmVXaWR0aCAvIDI7XG5cbiAgICAvLyBzb3J0IGNvbG9yXG4gICAgdmFyIGNvbG9yID0gdXRpbHMuaGV4MnJnYihncmFwaGljc0RhdGEubGluZUNvbG9yKTtcbiAgICB2YXIgYWxwaGEgPSBncmFwaGljc0RhdGEubGluZUFscGhhO1xuICAgIHZhciByID0gY29sb3JbMF0gKiBhbHBoYTtcbiAgICB2YXIgZyA9IGNvbG9yWzFdICogYWxwaGE7XG4gICAgdmFyIGIgPSBjb2xvclsyXSAqIGFscGhhO1xuXG4gICAgdmFyIHB4LCBweSwgcDF4LCBwMXksIHAyeCwgcDJ5LCBwM3gsIHAzeTtcbiAgICB2YXIgcGVycHgsIHBlcnB5LCBwZXJwMngsIHBlcnAyeSwgcGVycDN4LCBwZXJwM3k7XG4gICAgdmFyIGExLCBiMSwgYzEsIGEyLCBiMiwgYzI7XG4gICAgdmFyIGRlbm9tLCBwZGlzdCwgZGlzdDtcblxuICAgIHAxeCA9IHBvaW50c1swXTtcbiAgICBwMXkgPSBwb2ludHNbMV07XG5cbiAgICBwMnggPSBwb2ludHNbMl07XG4gICAgcDJ5ID0gcG9pbnRzWzNdO1xuXG4gICAgcGVycHggPSAtKHAxeSAtIHAyeSk7XG4gICAgcGVycHkgPSAgcDF4IC0gcDJ4O1xuXG4gICAgZGlzdCA9IE1hdGguc3FydChwZXJweCpwZXJweCArIHBlcnB5KnBlcnB5KTtcblxuICAgIHBlcnB4IC89IGRpc3Q7XG4gICAgcGVycHkgLz0gZGlzdDtcbiAgICBwZXJweCAqPSB3aWR0aDtcbiAgICBwZXJweSAqPSB3aWR0aDtcblxuICAgIC8vIHN0YXJ0XG4gICAgdmVydHMucHVzaChwMXggLSBwZXJweCAsIHAxeSAtIHBlcnB5LFxuICAgICAgICAgICAgICAgIHIsIGcsIGIsIGFscGhhKTtcblxuICAgIHZlcnRzLnB1c2gocDF4ICsgcGVycHggLCBwMXkgKyBwZXJweSxcbiAgICAgICAgICAgICAgICByLCBnLCBiLCBhbHBoYSk7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuZ3RoLTE7IGkrKylcbiAgICB7XG4gICAgICAgIHAxeCA9IHBvaW50c1soaS0xKSoyXTtcbiAgICAgICAgcDF5ID0gcG9pbnRzWyhpLTEpKjIgKyAxXTtcblxuICAgICAgICBwMnggPSBwb2ludHNbKGkpKjJdO1xuICAgICAgICBwMnkgPSBwb2ludHNbKGkpKjIgKyAxXTtcblxuICAgICAgICBwM3ggPSBwb2ludHNbKGkrMSkqMl07XG4gICAgICAgIHAzeSA9IHBvaW50c1soaSsxKSoyICsgMV07XG5cbiAgICAgICAgcGVycHggPSAtKHAxeSAtIHAyeSk7XG4gICAgICAgIHBlcnB5ID0gcDF4IC0gcDJ4O1xuXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQocGVycHgqcGVycHggKyBwZXJweSpwZXJweSk7XG4gICAgICAgIHBlcnB4IC89IGRpc3Q7XG4gICAgICAgIHBlcnB5IC89IGRpc3Q7XG4gICAgICAgIHBlcnB4ICo9IHdpZHRoO1xuICAgICAgICBwZXJweSAqPSB3aWR0aDtcblxuICAgICAgICBwZXJwMnggPSAtKHAyeSAtIHAzeSk7XG4gICAgICAgIHBlcnAyeSA9IHAyeCAtIHAzeDtcblxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KHBlcnAyeCpwZXJwMnggKyBwZXJwMnkqcGVycDJ5KTtcbiAgICAgICAgcGVycDJ4IC89IGRpc3Q7XG4gICAgICAgIHBlcnAyeSAvPSBkaXN0O1xuICAgICAgICBwZXJwMnggKj0gd2lkdGg7XG4gICAgICAgIHBlcnAyeSAqPSB3aWR0aDtcblxuICAgICAgICBhMSA9ICgtcGVycHkgKyBwMXkpIC0gKC1wZXJweSArIHAyeSk7XG4gICAgICAgIGIxID0gKC1wZXJweCArIHAyeCkgLSAoLXBlcnB4ICsgcDF4KTtcbiAgICAgICAgYzEgPSAoLXBlcnB4ICsgcDF4KSAqICgtcGVycHkgKyBwMnkpIC0gKC1wZXJweCArIHAyeCkgKiAoLXBlcnB5ICsgcDF5KTtcbiAgICAgICAgYTIgPSAoLXBlcnAyeSArIHAzeSkgLSAoLXBlcnAyeSArIHAyeSk7XG4gICAgICAgIGIyID0gKC1wZXJwMnggKyBwMngpIC0gKC1wZXJwMnggKyBwM3gpO1xuICAgICAgICBjMiA9ICgtcGVycDJ4ICsgcDN4KSAqICgtcGVycDJ5ICsgcDJ5KSAtICgtcGVycDJ4ICsgcDJ4KSAqICgtcGVycDJ5ICsgcDN5KTtcblxuICAgICAgICBkZW5vbSA9IGExKmIyIC0gYTIqYjE7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbm9tKSA8IDAuMSApXG4gICAgICAgIHtcblxuICAgICAgICAgICAgZGVub20rPTEwLjE7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHAyeCAtIHBlcnB4ICwgcDJ5IC0gcGVycHksXG4gICAgICAgICAgICAgICAgciwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHAyeCArIHBlcnB4ICwgcDJ5ICsgcGVycHksXG4gICAgICAgICAgICAgICAgciwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB4ID0gKGIxKmMyIC0gYjIqYzEpL2Rlbm9tO1xuICAgICAgICBweSA9IChhMipjMSAtIGExKmMyKS9kZW5vbTtcblxuXG4gICAgICAgIHBkaXN0ID0gKHB4IC1wMngpICogKHB4IC1wMngpICsgKHB5IC1wMnkpICsgKHB5IC1wMnkpO1xuXG5cbiAgICAgICAgaWYgKHBkaXN0ID4gMTQwICogMTQwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZXJwM3ggPSBwZXJweCAtIHBlcnAyeDtcbiAgICAgICAgICAgIHBlcnAzeSA9IHBlcnB5IC0gcGVycDJ5O1xuXG4gICAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KHBlcnAzeCpwZXJwM3ggKyBwZXJwM3kqcGVycDN5KTtcbiAgICAgICAgICAgIHBlcnAzeCAvPSBkaXN0O1xuICAgICAgICAgICAgcGVycDN5IC89IGRpc3Q7XG4gICAgICAgICAgICBwZXJwM3ggKj0gd2lkdGg7XG4gICAgICAgICAgICBwZXJwM3kgKj0gd2lkdGg7XG5cbiAgICAgICAgICAgIHZlcnRzLnB1c2gocDJ4IC0gcGVycDN4LCBwMnkgLXBlcnAzeSk7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgdmVydHMucHVzaChwMnggKyBwZXJwM3gsIHAyeSArcGVycDN5KTtcbiAgICAgICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHAyeCAtIHBlcnAzeCwgcDJ5IC1wZXJwM3kpO1xuICAgICAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIGluZGV4Q291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcblxuICAgICAgICAgICAgdmVydHMucHVzaChweCAsIHB5KTtcbiAgICAgICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHAyeCAtIChweC1wMngpLCBwMnkgLSAocHkgLSBwMnkpKTtcbiAgICAgICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcDF4ID0gcG9pbnRzWyhsZW5ndGgtMikqMl07XG4gICAgcDF5ID0gcG9pbnRzWyhsZW5ndGgtMikqMiArIDFdO1xuXG4gICAgcDJ4ID0gcG9pbnRzWyhsZW5ndGgtMSkqMl07XG4gICAgcDJ5ID0gcG9pbnRzWyhsZW5ndGgtMSkqMiArIDFdO1xuXG4gICAgcGVycHggPSAtKHAxeSAtIHAyeSk7XG4gICAgcGVycHkgPSBwMXggLSBwMng7XG5cbiAgICBkaXN0ID0gTWF0aC5zcXJ0KHBlcnB4KnBlcnB4ICsgcGVycHkqcGVycHkpO1xuICAgIHBlcnB4IC89IGRpc3Q7XG4gICAgcGVycHkgLz0gZGlzdDtcbiAgICBwZXJweCAqPSB3aWR0aDtcbiAgICBwZXJweSAqPSB3aWR0aDtcblxuICAgIHZlcnRzLnB1c2gocDJ4IC0gcGVycHggLCBwMnkgLSBwZXJweSk7XG4gICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICB2ZXJ0cy5wdXNoKHAyeCArIHBlcnB4ICwgcDJ5ICsgcGVycHkpO1xuICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgaW5kaWNlcy5wdXNoKGluZGV4U3RhcnQpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGluZGV4Q291bnQ7IGkrKylcbiAgICB7XG4gICAgICAgIGluZGljZXMucHVzaChpbmRleFN0YXJ0KyspO1xuICAgIH1cblxuICAgIGluZGljZXMucHVzaChpbmRleFN0YXJ0LTEpO1xufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBjb21wbGV4IHBvbHlnb24gdG8gZHJhd1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3NEYXRhIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB3ZWJHTERhdGEge29iamVjdH0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSB3ZWJHTC1zcGVjaWZpYyBpbmZvcm1hdGlvbiB0byBjcmVhdGUgdGhpcyBzaGFwZVxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5idWlsZENvbXBsZXhQb2x5ID0gZnVuY3Rpb24gKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKVxue1xuICAgIC8vVE9ETyAtIG5vIG5lZWQgdG8gY29weSB0aGlzIGFzIGl0IGdldHMgdHVybmVkIGludG8gYSBGTG9hdDMyQXJyYXkgYW55d2F5cy4uXG4gICAgdmFyIHBvaW50cyA9IGdyYXBoaWNzRGF0YS5wb2ludHMuc2xpY2UoKTtcblxuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgNilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnZXQgZmlyc3QgYW5kIGxhc3QgcG9pbnQuLiBmaWd1cmUgb3V0IHRoZSBtaWRkbGUhXG4gICAgdmFyIGluZGljZXMgPSB3ZWJHTERhdGEuaW5kaWNlcztcbiAgICB3ZWJHTERhdGEucG9pbnRzID0gcG9pbnRzO1xuICAgIHdlYkdMRGF0YS5hbHBoYSA9IGdyYXBoaWNzRGF0YS5maWxsQWxwaGE7XG4gICAgd2ViR0xEYXRhLmNvbG9yID0gdXRpbHMuaGV4MnJnYihncmFwaGljc0RhdGEuZmlsbENvbG9yKTtcblxuICAgIC8vIGNhbGNsYXRlIHRoZSBib3VuZHMuLlxuICAgIHZhciBtaW5YID0gSW5maW5pdHk7XG4gICAgdmFyIG1heFggPSAtSW5maW5pdHk7XG5cbiAgICB2YXIgbWluWSA9IEluZmluaXR5O1xuICAgIHZhciBtYXhZID0gLUluZmluaXR5O1xuXG4gICAgdmFyIHgseTtcblxuICAgIC8vIGdldCBzaXplLi5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrPTIpXG4gICAge1xuICAgICAgICB4ID0gcG9pbnRzW2ldO1xuICAgICAgICB5ID0gcG9pbnRzW2krMV07XG5cbiAgICAgICAgbWluWCA9IHggPCBtaW5YID8geCA6IG1pblg7XG4gICAgICAgIG1heFggPSB4ID4gbWF4WCA/IHggOiBtYXhYO1xuXG4gICAgICAgIG1pblkgPSB5IDwgbWluWSA/IHkgOiBtaW5ZO1xuICAgICAgICBtYXhZID0geSA+IG1heFkgPyB5IDogbWF4WTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYSBxdWFkIHRvIHRoZSBlbmQgY29zIHRoZXJlIGlzIG5vIHBvaW50IG1ha2luZyBhbm90aGVyIGJ1ZmZlciFcbiAgICBwb2ludHMucHVzaChtaW5YLCBtaW5ZLFxuICAgICAgICAgICAgICAgIG1heFgsIG1pblksXG4gICAgICAgICAgICAgICAgbWF4WCwgbWF4WSxcbiAgICAgICAgICAgICAgICBtaW5YLCBtYXhZKTtcblxuICAgIC8vIHB1c2ggYSBxdWFkIG9udG8gdGhlIGVuZC4uXG5cbiAgICAvL1RPRE8gLSB0aGlzIGFpbnQgbmVlZGVkIVxuICAgIHZhciBsZW5ndGggPSBwb2ludHMubGVuZ3RoIC8gMjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpbmRpY2VzLnB1c2goIGkgKTtcbiAgICB9XG5cbn07XG5cbi8qKlxuICogQnVpbGRzIGEgcG9seWdvbiB0byBkcmF3XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljc0RhdGEge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3NhcnkgcHJvcGVydGllc1xuICogQHBhcmFtIHdlYkdMRGF0YSB7b2JqZWN0fSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHdlYkdMLXNwZWNpZmljIGluZm9ybWF0aW9uIHRvIGNyZWF0ZSB0aGlzIHNoYXBlXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmJ1aWxkUG9seSA9IGZ1bmN0aW9uIChncmFwaGljc0RhdGEsIHdlYkdMRGF0YSlcbntcbiAgICB2YXIgcG9pbnRzID0gZ3JhcGhpY3NEYXRhLnBvaW50cztcblxuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgNilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnZXQgZmlyc3QgYW5kIGxhc3QgcG9pbnQuLiBmaWd1cmUgb3V0IHRoZSBtaWRkbGUhXG4gICAgdmFyIHZlcnRzID0gd2ViR0xEYXRhLnBvaW50cztcbiAgICB2YXIgaW5kaWNlcyA9IHdlYkdMRGF0YS5pbmRpY2VzO1xuXG4gICAgdmFyIGxlbmd0aCA9IHBvaW50cy5sZW5ndGggLyAyO1xuXG4gICAgLy8gc29ydCBjb2xvclxuICAgIHZhciBjb2xvciA9IHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3NEYXRhLmZpbGxDb2xvcik7XG4gICAgdmFyIGFscGhhID0gZ3JhcGhpY3NEYXRhLmZpbGxBbHBoYTtcbiAgICB2YXIgciA9IGNvbG9yWzBdICogYWxwaGE7XG4gICAgdmFyIGcgPSBjb2xvclsxXSAqIGFscGhhO1xuICAgIHZhciBiID0gY29sb3JbMl0gKiBhbHBoYTtcblxuICAgIHZhciB0cmlhbmdsZXMgPSB1dGlscy5Qb2x5Sy5Ucmlhbmd1bGF0ZShwb2ludHMpO1xuXG4gICAgaWYgKCF0cmlhbmdsZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2ZXJ0UG9zID0gdmVydHMubGVuZ3RoIC8gNjtcblxuICAgIHZhciBpID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0cmlhbmdsZXMubGVuZ3RoOyBpKz0zKVxuICAgIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpXSArIHZlcnRQb3MpO1xuICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2ldICsgdmVydFBvcyk7XG4gICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaSsxXSArIHZlcnRQb3MpO1xuICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2krMl0gK3ZlcnRQb3MpO1xuICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2krMl0gKyB2ZXJ0UG9zKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2ZXJ0cy5wdXNoKHBvaW50c1tpICogMl0sIHBvaW50c1tpICogMiArIDFdLFxuICAgICAgICAgICAgICAgICAgIHIsIGcsIGIsIGFscGhhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvKipcbiAqIEFuIG9iamVjdCBjb250YWluaW5nIFdlYkdMIHNwZWNpZmljIHByb3BlcnRpZXMgdG8gYmUgdXNlZCBieSB0aGUgV2ViR0wgcmVuZGVyZXJcbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBXZWJHTEdyYXBoaWNzRGF0YShnbCkge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9XG4gICAgICovXG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgLy9UT0RPIGRvZXMgdGhpcyBuZWVkIHRvIGJlIHNwbGl0IGJlZm9yZSB1cGxvZGluZz8/XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgY29sb3IgY29tcG9uZW50cyAocixnLGIpXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jb2xvciA9IFswLDAsMF07IC8vIGNvbG9yIHNwbGl0IVxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgcG9pbnRzIHRvIGRyYXdcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGljZXMgb2YgdGhlIHZlcnRpY2VzXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5pbmRpY2VzID0gW107XG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gYnVmZmVyXG4gICAgICogQG1lbWJlciB7V2ViR0xCdWZmZXJ9XG4gICAgICovXG4gICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBidWZmZXJcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEJ1ZmZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICAvKipcbiAgICAgKiB0b2RvIEBhbHZpblxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGUgPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFscGhhIG9mIHRoZSBncmFwaGljc1xuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFscGhhID0gMTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhpcyBncmFwaGljcyBpcyBkaXJ0eSBvciBub3RcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xufVxuXG5XZWJHTEdyYXBoaWNzRGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXZWJHTEdyYXBoaWNzRGF0YTtcbm1vZHVsZS5leHBvcnRzID0gV2ViR0xHcmFwaGljc0RhdGE7XG5cbi8qKlxuICogUmVzZXRzIHRoZSB2ZXJ0aWNlcyBhbmQgdGhlIGluZGljZXNcbiAqL1xuV2ViR0xHcmFwaGljc0RhdGEucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5pbmRpY2VzID0gW107XG59O1xuXG4vKipcbiAqIEJpbmRzIHRoZSBidWZmZXJzIGFuZCB1cGxvYWRzIHRoZSBkYXRhXG4gKi9cbldlYkdMR3JhcGhpY3NEYXRhLnByb3RvdHlwZS51cGxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuLy8gICAgdGhpcy5sYXN0SW5kZXggPSBncmFwaGljcy5ncmFwaGljc0RhdGEubGVuZ3RoO1xuICAgIHRoaXMuZ2xQb2ludHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucG9pbnRzKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMuZ2xQb2ludHMsIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHRoaXMuZ2xJbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuaW5kaWNlcyk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmdsSW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xufTtcbiIsIi8qKlxuICogQGZpbGUgICAgICAgIE1haW4gZXhwb3J0IG9mIHRoZSBQSVhJIGNvcmUgbGlicmFyeVxuICogQGF1dGhvciAgICAgIE1hdCBHcm92ZXMgPG1hdEBnb29kYm95ZGlnaXRhbC5jb20+XG4gKiBAY29weXJpZ2h0ICAgMjAxMy0yMDE1IEdvb2RCb3lEaWdpdGFsXG4gKiBAbGljZW5zZSAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29kQm95RGlnaXRhbC9waXhpLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0V8TUlUIExpY2Vuc2V9XG4gKi9cblxuLyoqXG4gKiBAbmFtZXNwYWNlIFBJWElcbiAqL1xudmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyB1dGlsc1xuICAgIHV0aWxzOiByZXF1aXJlKCcuL3V0aWxzJyksXG4gICAgbWF0aDogcmVxdWlyZSgnLi9tYXRoJyksXG4gICAgQ09OU1Q6IHJlcXVpcmUoJy4vY29uc3QnKSxcblxuICAgIC8vIGRpc3BsYXlcbiAgICBEaXNwbGF5T2JqZWN0OiAgICAgICAgICByZXF1aXJlKCcuL2Rpc3BsYXkvRGlzcGxheU9iamVjdCcpLFxuICAgIENvbnRhaW5lcjogICAgICAgICAgICAgIHJlcXVpcmUoJy4vZGlzcGxheS9Db250YWluZXInKSxcblxuICAgIC8vIGxlZ2FjeS4uXG4gICAgU3RhZ2U6ICAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9kaXNwbGF5L0NvbnRhaW5lcicpLFxuICAgIERpc3BsYXlPYmplY3RDb250YWluZXI6IHJlcXVpcmUoJy4vZGlzcGxheS9Db250YWluZXInKSxcblxuICAgIFNwcml0ZTogICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vc3ByaXRlcy9TcHJpdGUnKSxcbiAgICBQYXJ0aWNsZUNvbnRhaW5lcjogICAgICByZXF1aXJlKCcuL3BhcnRpY2xlcy9QYXJ0aWNsZUNvbnRhaW5lcicpLFxuICAgIFNwcml0ZVJlbmRlcmVyOiAgICAgICAgIHJlcXVpcmUoJy4vc3ByaXRlcy93ZWJnbC9TcHJpdGVSZW5kZXJlcicpLFxuICAgIFBhcnRpY2xlUmVuZGVyZXI6ICAgICAgIHJlcXVpcmUoJy4vcGFydGljbGVzL3dlYmdsL1BhcnRpY2xlUmVuZGVyZXInKSxcblxuICAgIC8vIHByaW1pdGl2ZXNcbiAgICBHcmFwaGljczogICAgICAgICAgICAgICByZXF1aXJlKCcuL2dyYXBoaWNzL0dyYXBoaWNzJyksXG4gICAgR3JhcGhpY3NEYXRhOiAgICAgICAgICAgcmVxdWlyZSgnLi9ncmFwaGljcy9HcmFwaGljc0RhdGEnKSxcbiAgICBHcmFwaGljc1JlbmRlcmVyOiAgICAgICByZXF1aXJlKCcuL2dyYXBoaWNzL3dlYmdsL0dyYXBoaWNzUmVuZGVyZXInKSxcblxuICAgIC8vIHRleHR1cmVzXG4gICAgVGV4dHVyZTogICAgICAgICAgICAgICAgcmVxdWlyZSgnLi90ZXh0dXJlcy9UZXh0dXJlJyksXG4gICAgQmFzZVRleHR1cmU6ICAgICAgICAgICAgcmVxdWlyZSgnLi90ZXh0dXJlcy9CYXNlVGV4dHVyZScpLFxuICAgIFJlbmRlclRleHR1cmU6ICAgICAgICAgIHJlcXVpcmUoJy4vdGV4dHVyZXMvUmVuZGVyVGV4dHVyZScpLFxuICAgIFZpZGVvQmFzZVRleHR1cmU6ICAgICAgIHJlcXVpcmUoJy4vdGV4dHVyZXMvVmlkZW9CYXNlVGV4dHVyZScpLFxuXG4gICAgLy8gcmVuZGVyZXJzIC0gY2FudmFzXG4gICAgQ2FudmFzUmVuZGVyZXI6ICAgICAgICAgcmVxdWlyZSgnLi9yZW5kZXJlcnMvY2FudmFzL0NhbnZhc1JlbmRlcmVyJyksXG4gICAgQ2FudmFzR3JhcGhpY3M6ICAgICAgICAgcmVxdWlyZSgnLi9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0dyYXBoaWNzJyksXG4gICAgQ2FudmFzQnVmZmVyOiAgICAgICAgICAgcmVxdWlyZSgnLi9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0J1ZmZlcicpLFxuXG4gICAgLy8gcmVuZGVyZXJzIC0gd2ViZ2xcbiAgICBXZWJHTFJlbmRlcmVyOiAgICAgICAgICByZXF1aXJlKCcuL3JlbmRlcmVycy93ZWJnbC9XZWJHTFJlbmRlcmVyJyksXG4gICAgU2hhZGVyTWFuYWdlcjogICAgICAgICAgcmVxdWlyZSgnLi9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvU2hhZGVyTWFuYWdlcicpLFxuICAgIFNoYWRlcjogICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vcmVuZGVyZXJzL3dlYmdsL3NoYWRlcnMvU2hhZGVyJyksXG5cbiAgICAvLyBmaWx0ZXJzIC0gd2ViZ2xcbiAgICBBYnN0cmFjdEZpbHRlcjogICAgICAgICByZXF1aXJlKCcuL3JlbmRlcmVycy93ZWJnbC9maWx0ZXJzL0Fic3RyYWN0RmlsdGVyJyksXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGhlbHBlciBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHdoaWNoIHJlbmRlcmVyIHlvdSBzaG91bGQgYmUgdXNpbmcuXG4gICAgICogV2ViR0wgaXMgdGhlIHByZWZlcnJlZCByZW5kZXJlciBhcyBpdCBpcyBhIGxvdCBmYXN0ZXIuIElmIHdlYkdMIGlzIG5vdCBzdXBwb3J0ZWQgYnlcbiAgICAgKiB0aGUgYnJvd3NlciB0aGVuIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYSBjYW52YXMgcmVuZGVyZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB3aWR0aD04MDAge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSByZW5kZXJlcnMgdmlld1xuICAgICAqIEBwYXJhbSBoZWlnaHQ9NjAwIHtudW1iZXJ9IHRoZSBoZWlnaHQgb2YgdGhlIHJlbmRlcmVycyB2aWV3XG4gICAgICogQHBhcmFtIFtvcHRpb25zXSB7b2JqZWN0fSBUaGUgb3B0aW9uYWwgcmVuZGVyZXIgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSBbb3B0aW9ucy52aWV3XSB7SFRNTENhbnZhc0VsZW1lbnR9IHRoZSBjYW52YXMgdG8gdXNlIGFzIGEgdmlldywgb3B0aW9uYWxcbiAgICAgKiBAcGFyYW0gW29wdGlvbnMudHJhbnNwYXJlbnQ9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgdHJhbnNwYXJlbnQsIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcGFyYW0gW29wdGlvbnMuYW50aWFsaWFzPWZhbHNlXSB7Ym9vbGVhbn0gc2V0cyBhbnRpYWxpYXMgKG9ubHkgYXBwbGljYWJsZSBpbiBjaHJvbWUgYXQgdGhlIG1vbWVudClcbiAgICAgKiBAcGFyYW0gW29wdGlvbnMucHJlc2VydmVEcmF3aW5nQnVmZmVyPWZhbHNlXSB7Ym9vbGVhbn0gZW5hYmxlcyBkcmF3aW5nIGJ1ZmZlciBwcmVzZXJ2YXRpb24sIGVuYWJsZSB0aGlzIGlmIHlvdVxuICAgICAqICAgICAgbmVlZCB0byBjYWxsIHRvRGF0YVVybCBvbiB0aGUgd2ViZ2wgY29udGV4dFxuICAgICAqIEBwYXJhbSBbb3B0aW9ucy5yZXNvbHV0aW9uPTFdIHtudW1iZXJ9IHRoZSByZXNvbHV0aW9uIG9mIHRoZSByZW5kZXJlciwgcmV0aW5hIHdvdWxkIGJlIDJcbiAgICAgKiBAcGFyYW0gW25vV2ViR0w9ZmFsc2VdIHtib29sZWFufSBwcmV2ZW50cyBzZWxlY3Rpb24gb2YgV2ViR0wgcmVuZGVyZXIsIGV2ZW4gaWYgc3VjaCBpcyBwcmVzZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtXZWJHTFJlbmRlcmVyfENhbnZhc1JlbmRlcmVyfSBSZXR1cm5zIFdlYkdMIHJlbmRlcmVyIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIENhbnZhc1JlbmRlcmVyXG4gICAgICovXG4gICAgYXV0b0RldGVjdFJlbmRlcmVyOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgb3B0aW9ucywgbm9XZWJHTClcbiAgICB7XG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgODAwO1xuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgNjAwO1xuXG4gICAgICAgIGlmICghbm9XZWJHTCAmJiBjaGVja1dlYkdMKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgY29yZS5XZWJHTFJlbmRlcmVyKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBjb3JlLkNhbnZhc1JlbmRlcmVyKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuICAgIH1cbn07XG5cbi8vIGFkZCBjb25zdGFudHMgdG8gZXhwb3J0XG52YXIgQ09OU1QgPSByZXF1aXJlKCcuL2NvbnN0Jyk7XG5cbmZvciAodmFyIGMgaW4gQ09OU1QpIHtcbiAgICBjb3JlW2NdID0gQ09OU1RbY107XG59XG5cblxudmFyIGNvbnRleHRPcHRpb25zID0geyBzdGVuY2lsOiB0cnVlIH07XG5cbmZ1bmN0aW9uIGNoZWNrV2ViR0woKVxue1xuICAgIHRyeVxuICAgIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIGNvbnRleHRPcHRpb25zKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgY29udGV4dE9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiAhIShnbCAmJiBnbC5nZXRDb250ZXh0QXR0cmlidXRlcygpLnN0ZW5jaWwpO1xuICAgIH1cbiAgICBjYXRjaCAoZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJ2YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG5cbi8qKlxuICogVGhlIHBpeGkgTWF0cml4IGNsYXNzIGFzIGFuIG9iamVjdCwgd2hpY2ggbWFrZXMgaXQgYSBsb3QgZmFzdGVyLFxuICogaGVyZSBpcyBhIHJlcHJlc2VudGF0aW9uIG9mIGl0IDpcbiAqIHwgYSB8IGIgfCB0eHxcbiAqIHwgYyB8IGQgfCB0eXxcbiAqIHwgMCB8IDAgfCAxIHxcbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJLm1hdGhcbiAqL1xuZnVuY3Rpb24gTWF0cml4KClcbntcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHRoaXMuYSA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMuYiA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMuYyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHRoaXMuZCA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMudHggPSAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnR5ID0gMDtcbn1cblxuTWF0cml4LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1hdHJpeDtcbm1vZHVsZS5leHBvcnRzID0gTWF0cml4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBNYXRyaXggb2JqZWN0IGJhc2VkIG9uIHRoZSBnaXZlbiBhcnJheS4gVGhlIEVsZW1lbnQgdG8gTWF0cml4IG1hcHBpbmcgb3JkZXIgaXMgYXMgZm9sbG93czpcbiAqXG4gKiBhID0gYXJyYXlbMF1cbiAqIGIgPSBhcnJheVsxXVxuICogYyA9IGFycmF5WzNdXG4gKiBkID0gYXJyYXlbNF1cbiAqIHR4ID0gYXJyYXlbMl1cbiAqIHR5ID0gYXJyYXlbNV1cbiAqXG4gKiBAcGFyYW0gYXJyYXkge251bWJlcltdfSBUaGUgYXJyYXkgdGhhdCB0aGUgbWF0cml4IHdpbGwgYmUgcG9wdWxhdGVkIGZyb20uXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KVxue1xuICAgIHRoaXMuYSA9IGFycmF5WzBdO1xuICAgIHRoaXMuYiA9IGFycmF5WzFdO1xuICAgIHRoaXMuYyA9IGFycmF5WzNdO1xuICAgIHRoaXMuZCA9IGFycmF5WzRdO1xuICAgIHRoaXMudHggPSBhcnJheVsyXTtcbiAgICB0aGlzLnR5ID0gYXJyYXlbNV07XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgZnJvbSB0aGUgY3VycmVudCBNYXRyaXggb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB0cmFuc3Bvc2Uge2Jvb2xlYW59IFdoZXRoZXIgd2UgbmVlZCB0byB0cmFuc3Bvc2UgdGhlIG1hdHJpeCBvciBub3RcbiAqIEByZXR1cm4ge251bWJlcltdfSB0aGUgbmV3bHkgY3JlYXRlZCBhcnJheSB3aGljaCBjb250YWlucyB0aGUgbWF0cml4XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICh0cmFuc3Bvc2UpXG57XG4gICAgaWYgKCF0aGlzLmFycmF5KVxuICAgIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoOSk7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcblxuICAgIGlmICh0cmFuc3Bvc2UpXG4gICAge1xuICAgICAgICBhcnJheVswXSA9IHRoaXMuYTtcbiAgICAgICAgYXJyYXlbMV0gPSB0aGlzLmI7XG4gICAgICAgIGFycmF5WzJdID0gMDtcbiAgICAgICAgYXJyYXlbM10gPSB0aGlzLmM7XG4gICAgICAgIGFycmF5WzRdID0gdGhpcy5kO1xuICAgICAgICBhcnJheVs1XSA9IDA7XG4gICAgICAgIGFycmF5WzZdID0gdGhpcy50eDtcbiAgICAgICAgYXJyYXlbN10gPSB0aGlzLnR5O1xuICAgICAgICBhcnJheVs4XSA9IDE7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGFycmF5WzBdID0gdGhpcy5hO1xuICAgICAgICBhcnJheVsxXSA9IHRoaXMuYztcbiAgICAgICAgYXJyYXlbMl0gPSB0aGlzLnR4O1xuICAgICAgICBhcnJheVszXSA9IHRoaXMuYjtcbiAgICAgICAgYXJyYXlbNF0gPSB0aGlzLmQ7XG4gICAgICAgIGFycmF5WzVdID0gdGhpcy50eTtcbiAgICAgICAgYXJyYXlbNl0gPSAwO1xuICAgICAgICBhcnJheVs3XSA9IDA7XG4gICAgICAgIGFycmF5WzhdID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59O1xuXG4vKipcbiAqIEdldCBhIG5ldyBwb3NpdGlvbiB3aXRoIHRoZSBjdXJyZW50IHRyYW5zZm9ybWF0aW9uIGFwcGxpZWQuXG4gKiBDYW4gYmUgdXNlZCB0byBnbyBmcm9tIGEgY2hpbGQncyBjb29yZGluYXRlIHNwYWNlIHRvIHRoZSB3b3JsZCBjb29yZGluYXRlIHNwYWNlLiAoZS5nLiByZW5kZXJpbmcpXG4gKlxuICogQHBhcmFtIHBvcyB7UG9pbnR9IFRoZSBvcmlnaW5cbiAqIEBwYXJhbSBbbmV3UG9zXSB7UG9pbnR9IFRoZSBwb2ludCB0aGF0IHRoZSBuZXcgcG9zaXRpb24gaXMgYXNzaWduZWQgdG8gKGFsbG93ZWQgdG8gYmUgc2FtZSBhcyBpbnB1dClcbiAqIEByZXR1cm4ge1BvaW50fSBUaGUgbmV3IHBvaW50LCB0cmFuc2Zvcm1lZCB0aHJvdWdoIHRoaXMgbWF0cml4XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAocG9zLCBuZXdQb3MpXG57XG4gICAgbmV3UG9zID0gbmV3UG9zIHx8IG5ldyBQb2ludCgpO1xuXG4gICAgdmFyIHggPSBwb3MueDtcbiAgICB2YXIgeSA9IHBvcy55O1xuXG4gICAgbmV3UG9zLnggPSB0aGlzLmEgKiB4ICsgdGhpcy5jICogeSArIHRoaXMudHg7XG4gICAgbmV3UG9zLnkgPSB0aGlzLmIgKiB4ICsgdGhpcy5kICogeSArIHRoaXMudHk7XG5cbiAgICByZXR1cm4gbmV3UG9zO1xufTtcblxuLyoqXG4gKiBHZXQgYSBuZXcgcG9zaXRpb24gd2l0aCB0aGUgaW52ZXJzZSBvZiB0aGUgY3VycmVudCB0cmFuc2Zvcm1hdGlvbiBhcHBsaWVkLlxuICogQ2FuIGJlIHVzZWQgdG8gZ28gZnJvbSB0aGUgd29ybGQgY29vcmRpbmF0ZSBzcGFjZSB0byBhIGNoaWxkJ3MgY29vcmRpbmF0ZSBzcGFjZS4gKGUuZy4gaW5wdXQpXG4gKlxuICogQHBhcmFtIHBvcyB7UG9pbnR9IFRoZSBvcmlnaW5cbiAqIEBwYXJhbSBbbmV3UG9zXSB7UG9pbnR9IFRoZSBwb2ludCB0aGF0IHRoZSBuZXcgcG9zaXRpb24gaXMgYXNzaWduZWQgdG8gKGFsbG93ZWQgdG8gYmUgc2FtZSBhcyBpbnB1dClcbiAqIEByZXR1cm4ge1BvaW50fSBUaGUgbmV3IHBvaW50LCBpbnZlcnNlLXRyYW5zZm9ybWVkIHRocm91Z2ggdGhpcyBtYXRyaXhcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hcHBseUludmVyc2UgPSBmdW5jdGlvbiAocG9zLCBuZXdQb3MpXG57XG4gICAgbmV3UG9zID0gbmV3UG9zIHx8IG5ldyBQb2ludCgpO1xuXG4gICAgdmFyIGlkID0gMSAvICh0aGlzLmEgKiB0aGlzLmQgKyB0aGlzLmMgKiAtdGhpcy5iKTtcblxuICAgIHZhciB4ID0gcG9zLng7XG4gICAgdmFyIHkgPSBwb3MueTtcblxuICAgIG5ld1Bvcy54ID0gdGhpcy5kICogaWQgKiB4ICsgLXRoaXMuYyAqIGlkICogeSArICh0aGlzLnR5ICogdGhpcy5jIC0gdGhpcy50eCAqIHRoaXMuZCkgKiBpZDtcbiAgICBuZXdQb3MueSA9IHRoaXMuYSAqIGlkICogeSArIC10aGlzLmIgKiBpZCAqIHggKyAoLXRoaXMudHkgKiB0aGlzLmEgKyB0aGlzLnR4ICogdGhpcy5iKSAqIGlkO1xuXG4gICAgcmV0dXJuIG5ld1Bvcztcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbWF0cml4IG9uIHRoZSB4IGFuZCB5LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHJldHVybiB7TWF0cml4fSBUaGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIHRoaXMudHggKz0geDtcbiAgICB0aGlzLnR5ICs9IHk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQXBwbGllcyBhIHNjYWxlIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBtYXRyaXguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIGFtb3VudCB0byBzY2FsZSBob3Jpem9udGFsbHlcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSBhbW91bnQgdG8gc2NhbGUgdmVydGljYWxseVxuICogQHJldHVybiB7TWF0cml4fSBUaGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgdGhpcy5hICo9IHg7XG4gICAgdGhpcy5kICo9IHk7XG4gICAgdGhpcy5jICo9IHg7XG4gICAgdGhpcy5iICo9IHk7XG4gICAgdGhpcy50eCAqPSB4O1xuICAgIHRoaXMudHkgKj0geTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIEFwcGxpZXMgYSByb3RhdGlvbiB0cmFuc2Zvcm1hdGlvbiB0byB0aGUgbWF0cml4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSAtIFRoZSBhbmdsZSBpbiByYWRpYW5zLlxuICogQHJldHVybiB7TWF0cml4fSBUaGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChhbmdsZSlcbntcbiAgICB2YXIgY29zID0gTWF0aC5jb3MoIGFuZ2xlICk7XG4gICAgdmFyIHNpbiA9IE1hdGguc2luKCBhbmdsZSApO1xuXG4gICAgdmFyIGExID0gdGhpcy5hO1xuICAgIHZhciBjMSA9IHRoaXMuYztcbiAgICB2YXIgdHgxID0gdGhpcy50eDtcblxuICAgIHRoaXMuYSA9IGExICogY29zLXRoaXMuYiAqIHNpbjtcbiAgICB0aGlzLmIgPSBhMSAqIHNpbit0aGlzLmIgKiBjb3M7XG4gICAgdGhpcy5jID0gYzEgKiBjb3MtdGhpcy5kICogc2luO1xuICAgIHRoaXMuZCA9IGMxICogc2luK3RoaXMuZCAqIGNvcztcbiAgICB0aGlzLnR4ID0gdHgxICogY29zIC0gdGhpcy50eSAqIHNpbjtcbiAgICB0aGlzLnR5ID0gdHgxICogc2luICsgdGhpcy50eSAqIGNvcztcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBcHBlbmRzIHRoZSBnaXZlbiBNYXRyaXggdG8gdGhpcyBNYXRyaXguXG4gKlxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHJldHVybiB7TWF0cml4fSBUaGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChtYXRyaXgpXG57XG4gICAgdmFyIGExID0gdGhpcy5hO1xuICAgIHZhciBiMSA9IHRoaXMuYjtcbiAgICB2YXIgYzEgPSB0aGlzLmM7XG4gICAgdmFyIGQxID0gdGhpcy5kO1xuXG4gICAgdGhpcy5hICA9IG1hdHJpeC5hICogYTEgKyBtYXRyaXguYiAqIGMxO1xuICAgIHRoaXMuYiAgPSBtYXRyaXguYSAqIGIxICsgbWF0cml4LmIgKiBkMTtcbiAgICB0aGlzLmMgID0gbWF0cml4LmMgKiBhMSArIG1hdHJpeC5kICogYzE7XG4gICAgdGhpcy5kICA9IG1hdHJpeC5jICogYjEgKyBtYXRyaXguZCAqIGQxO1xuXG4gICAgdGhpcy50eCA9IG1hdHJpeC50eCAqIGExICsgbWF0cml4LnR5ICogYzEgKyB0aGlzLnR4O1xuICAgIHRoaXMudHkgPSBtYXRyaXgudHggKiBiMSArIG1hdHJpeC50eSAqIGQxICsgdGhpcy50eTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQcmVwZW5kcyB0aGUgZ2l2ZW4gTWF0cml4IHRvIHRoaXMgTWF0cml4LlxuICpcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEByZXR1cm4ge01hdHJpeH0gVGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24obWF0cml4KVxue1xuICAgIHZhciB0eDEgPSB0aGlzLnR4O1xuXG4gICAgaWYgKG1hdHJpeC5hICE9PSAxIHx8IG1hdHJpeC5iICE9PSAwIHx8IG1hdHJpeC5jICE9PSAwIHx8IG1hdHJpeC5kICE9PSAxKVxuICAgIHtcbiAgICAgICAgdmFyIGExID0gdGhpcy5hO1xuICAgICAgICB2YXIgYzEgPSB0aGlzLmM7XG4gICAgICAgIHRoaXMuYSAgPSBhMSptYXRyaXguYSt0aGlzLmIqbWF0cml4LmM7XG4gICAgICAgIHRoaXMuYiAgPSBhMSptYXRyaXguYit0aGlzLmIqbWF0cml4LmQ7XG4gICAgICAgIHRoaXMuYyAgPSBjMSptYXRyaXguYSt0aGlzLmQqbWF0cml4LmM7XG4gICAgICAgIHRoaXMuZCAgPSBjMSptYXRyaXguYit0aGlzLmQqbWF0cml4LmQ7XG4gICAgfVxuXG4gICAgdGhpcy50eCA9IHR4MSptYXRyaXguYSt0aGlzLnR5Km1hdHJpeC5jK21hdHJpeC50eDtcbiAgICB0aGlzLnR5ID0gdHgxKm1hdHJpeC5iK3RoaXMudHkqbWF0cml4LmQrbWF0cml4LnR5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEludmVydHMgdGhpcyBtYXRyaXhcbiAqXG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaW52ZXJ0ID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciBhMSA9IHRoaXMuYTtcbiAgICB2YXIgYjEgPSB0aGlzLmI7XG4gICAgdmFyIGMxID0gdGhpcy5jO1xuICAgIHZhciBkMSA9IHRoaXMuZDtcbiAgICB2YXIgdHgxID0gdGhpcy50eDtcbiAgICB2YXIgbiA9IGExKmQxLWIxKmMxO1xuXG4gICAgdGhpcy5hID0gZDEvbjtcbiAgICB0aGlzLmIgPSAtYjEvbjtcbiAgICB0aGlzLmMgPSAtYzEvbjtcbiAgICB0aGlzLmQgPSBhMS9uO1xuICAgIHRoaXMudHggPSAoYzEqdGhpcy50eS1kMSp0eDEpL247XG4gICAgdGhpcy50eSA9IC0oYTEqdGhpcy50eS1iMSp0eDEpL247XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqXG4gKiBSZXNldHMgdGhpcyBNYXRpeCB0byBhbiBpZGVudGl0eSAoZGVmYXVsdCkgbWF0cml4LlxuICpcbiAqIEByZXR1cm4ge01hdHJpeH0gVGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pZGVudGl0eSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5hID0gMTtcbiAgICB0aGlzLmIgPSAwO1xuICAgIHRoaXMuYyA9IDA7XG4gICAgdGhpcy5kID0gMTtcbiAgICB0aGlzLnR4ID0gMDtcbiAgICB0aGlzLnR5ID0gMDtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IE1hdHJpeCBvYmplY3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhpcyBvbmUuXG4gKlxuICogQHJldHVybiB7TWF0cml4fSBBIGNvcHkgb2YgdGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICBtYXRyaXguYSA9IHRoaXMuYTtcbiAgICBtYXRyaXguYiA9IHRoaXMuYjtcbiAgICBtYXRyaXguYyA9IHRoaXMuYztcbiAgICBtYXRyaXguZCA9IHRoaXMuZDtcbiAgICBtYXRyaXgudHggPSB0aGlzLnR4O1xuICAgIG1hdHJpeC50eSA9IHRoaXMudHk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xufTtcblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIG1hdHJpeCB0byBiZSB0aGUgc2FtZSBhcyB0aGUgb25lcyBpbiB0aGlzIG1hdHJpeFxuICpcbiAqIEByZXR1cm4ge01hdHJpeH0gVGhlIG1hdHJpeCBnaXZlbiBpbiBwYXJhbWV0ZXIgd2l0aCBpdHMgdmFsdWVzIHVwZGF0ZWQuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIChtYXRyaXgpXG57XG4gICAgbWF0cml4LmEgPSB0aGlzLmE7XG4gICAgbWF0cml4LmIgPSB0aGlzLmI7XG4gICAgbWF0cml4LmMgPSB0aGlzLmM7XG4gICAgbWF0cml4LmQgPSB0aGlzLmQ7XG4gICAgbWF0cml4LnR4ID0gdGhpcy50eDtcbiAgICBtYXRyaXgudHkgPSB0aGlzLnR5O1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbn07XG5cbi8qKlxuICogQSBkZWZhdWx0IChpZGVudGl0eSkgbWF0cml4XG4gKi9cbk1hdHJpeC5JREVOVElUWSA9IG5ldyBNYXRyaXgoKTtcbi8qKlxuICogQSB0ZW1wIG1hdHJpeFxuICovXG5NYXRyaXguVEVNUF9NQVRSSVggPSBuZXcgTWF0cml4KCk7XG4iLCIvKipcbiAqIFRoZSBQb2ludCBvYmplY3QgcmVwcmVzZW50cyBhIGxvY2F0aW9uIGluIGEgdHdvLWRpbWVuc2lvbmFsIGNvb3JkaW5hdGUgc3lzdGVtLCB3aGVyZSB4IHJlcHJlc2VudHNcbiAqIHRoZSBob3Jpem9udGFsIGF4aXMgYW5kIHkgcmVwcmVzZW50cyB0aGUgdmVydGljYWwgYXhpcy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJLm1hdGhcbiAqIEBwYXJhbSBbeD0wXSB7bnVtYmVyfSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQgb24gdGhlIHggYXhpc1xuICogQHBhcmFtIFt5PTBdIHtudW1iZXJ9IHBvc2l0aW9uIG9mIHRoZSBwb2ludCBvbiB0aGUgeSBheGlzXG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpXG57XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnggPSB4IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueSA9IHkgfHwgMDtcbn1cblxuUG9pbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUG9pbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHBvaW50XG4gKlxuICogQHJldHVybiB7UG9pbnR9IGEgY29weSBvZiB0aGUgcG9pbnRcbiAqL1xuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgcG9pbnQgdG8gYSBuZXcgeCBhbmQgeSBwb3NpdGlvbi5cbiAqIElmIHkgaXMgb21pdHRlZCwgYm90aCB4IGFuZCB5IHdpbGwgYmUgc2V0IHRvIHguXG4gKlxuICogQHBhcmFtIFt4PTBdIHtudW1iZXJ9IHBvc2l0aW9uIG9mIHRoZSBwb2ludCBvbiB0aGUgeCBheGlzXG4gKiBAcGFyYW0gW3k9MF0ge251bWJlcn0gcG9zaXRpb24gb2YgdGhlIHBvaW50IG9uIHRoZSB5IGF4aXNcbiAqL1xuUG9pbnQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICB0aGlzLnkgPSB5IHx8ICggKHkgIT09IDApID8gdGhpcy54IDogMCApIDtcbn07XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgUElYSS5tYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQSV8yIC0gVHdvIFBpXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIFBJXzI6IE1hdGguUEkgKiAyLFxuXG4gICAgLyoqXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFJBRF9UT19ERUcgLSBDb25zdGFudCBjb252ZXJzaW9uIGZhY3RvciBmb3IgY29udmVydGluZyByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgUkFEX1RPX0RFRzogMTgwIC8gTWF0aC5QSSxcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBERUdfVE9fUkFEIC0gQ29uc3RhbnQgY29udmVyc2lvbiBmYWN0b3IgZm9yIGNvbnZlcnRpbmcgZGVncmVlcyB0byByYWRpYW5zXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIERFR19UT19SQUQ6IE1hdGguUEkgLyAxODAsXG5cbiAgICBQb2ludDogICAgICByZXF1aXJlKCcuL1BvaW50JyksXG4gICAgTWF0cml4OiAgICAgcmVxdWlyZSgnLi9NYXRyaXgnKSxcblxuICAgIENpcmNsZTogICAgIHJlcXVpcmUoJy4vc2hhcGVzL0NpcmNsZScpLFxuICAgIEVsbGlwc2U6ICAgIHJlcXVpcmUoJy4vc2hhcGVzL0VsbGlwc2UnKSxcbiAgICBQb2x5Z29uOiAgICByZXF1aXJlKCcuL3NoYXBlcy9Qb2x5Z29uJyksXG4gICAgUmVjdGFuZ2xlOiAgcmVxdWlyZSgnLi9zaGFwZXMvUmVjdGFuZ2xlJyksXG4gICAgUm91bmRlZFJlY3RhbmdsZTogcmVxdWlyZSgnLi9zaGFwZXMvUm91bmRlZFJlY3RhbmdsZScpXG59O1xuIiwidmFyIFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBDaXJjbGUgb2JqZWN0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgYSBoaXQgYXJlYSBmb3IgZGlzcGxheU9iamVjdHNcbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhpcyBjaXJjbGVcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGlzIGNpcmNsZVxuICogQHBhcmFtIHJhZGl1cyB7bnVtYmVyfSBUaGUgcmFkaXVzIG9mIHRoZSBjaXJjbGVcbiAqL1xuZnVuY3Rpb24gQ2lyY2xlKHgsIHksIHJhZGl1cylcbntcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueCA9IHggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy55ID0geSB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIG9iamVjdCwgbWFpbmx5IHVzZWQgdG8gYXZvaWQgYGluc3RhbmNlb2ZgIGNoZWNrc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IENPTlNULlNIQVBFUy5DSVJDO1xufVxuXG5DaXJjbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2lyY2xlO1xubW9kdWxlLmV4cG9ydHMgPSBDaXJjbGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgQ2lyY2xlIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7Q2lyY2xlfSBhIGNvcHkgb2YgdGhlIENpcmNsZVxuICovXG5DaXJjbGUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IENpcmNsZSh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMpO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBnaXZlbiBhcmUgY29udGFpbmVkIHdpdGhpbiB0aGlzIGNpcmNsZVxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHgveSBjb29yZGluYXRlcyBhcmUgd2l0aGluIHRoaXMgQ2lyY2xlXG4gKi9cbkNpcmNsZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICBpZiAodGhpcy5yYWRpdXMgPD0gMClcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgZHggPSAodGhpcy54IC0geCksXG4gICAgICAgIGR5ID0gKHRoaXMueSAtIHkpLFxuICAgICAgICByMiA9IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXM7XG5cbiAgICBkeCAqPSBkeDtcbiAgICBkeSAqPSBkeTtcblxuICAgIHJldHVybiAoZHggKyBkeSA8PSByMik7XG59O1xuXG4vKipcbiogUmV0dXJucyB0aGUgZnJhbWluZyByZWN0YW5nbGUgb2YgdGhlIGNpcmNsZSBhcyBhIFJlY3RhbmdsZSBvYmplY3RcbipcbiogQHJldHVybiB7UmVjdGFuZ2xlfSB0aGUgZnJhbWluZyByZWN0YW5nbGVcbiovXG5DaXJjbGUucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54IC0gdGhpcy5yYWRpdXMsIHRoaXMueSAtIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cyAqIDIsIHRoaXMucmFkaXVzICogMik7XG59O1xuIiwidmFyIFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBFbGxpcHNlIG9iamVjdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgaGl0IGFyZWEgZm9yIGRpc3BsYXlPYmplY3RzXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBlbGxpcHNlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgaGFsZiB3aWR0aCBvZiB0aGlzIGVsbGlwc2VcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gVGhlIGhhbGYgaGVpZ2h0IG9mIHRoaXMgZWxsaXBzZVxuICovXG5mdW5jdGlvbiBFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnggPSB4IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueSA9IHkgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0LCBtYWlubHkgdXNlZCB0byBhdm9pZCBgaW5zdGFuY2VvZmAgY2hlY2tzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gQ09OU1QuU0hBUEVTLkVMSVA7XG59XG5cbkVsbGlwc2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRWxsaXBzZTtcbm1vZHVsZS5leHBvcnRzID0gRWxsaXBzZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyBFbGxpcHNlIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7RWxsaXBzZX0gYSBjb3B5IG9mIHRoZSBlbGxpcHNlXG4gKi9cbkVsbGlwc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IEVsbGlwc2UodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgZ2l2ZW4gYXJlIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBlbGxpcHNlXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgeC95IGNvb3JkcyBhcmUgd2l0aGluIHRoaXMgZWxsaXBzZVxuICovXG5FbGxpcHNlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIGlmICh0aGlzLndpZHRoIDw9IDAgfHwgdGhpcy5oZWlnaHQgPD0gMClcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL25vcm1hbGl6ZSB0aGUgY29vcmRzIHRvIGFuIGVsbGlwc2Ugd2l0aCBjZW50ZXIgMCwwXG4gICAgdmFyIG5vcm14ID0gKCh4IC0gdGhpcy54KSAvIHRoaXMud2lkdGgpLFxuICAgICAgICBub3JteSA9ICgoeSAtIHRoaXMueSkgLyB0aGlzLmhlaWdodCk7XG5cbiAgICBub3JteCAqPSBub3JteDtcbiAgICBub3JteSAqPSBub3JteTtcblxuICAgIHJldHVybiAobm9ybXggKyBub3JteSA8PSAxKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnJhbWluZyByZWN0YW5nbGUgb2YgdGhlIGVsbGlwc2UgYXMgYSBSZWN0YW5nbGUgb2JqZWN0XG4gKlxuICogQHJldHVybiB7UmVjdGFuZ2xlfSB0aGUgZnJhbWluZyByZWN0YW5nbGVcbiAqL1xuRWxsaXBzZS5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnggLSB0aGlzLndpZHRoLCB0aGlzLnkgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xufTtcbiIsInZhciBQb2ludCA9IHJlcXVpcmUoJy4uL1BvaW50JyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBwb2ludHMge1BvaW50W118bnVtYmVyW118Li4uUG9pbnR8Li4ubnVtYmVyfSBUaGlzIGNhbiBiZSBhbiBhcnJheSBvZiBQb2ludHMgdGhhdCBmb3JtIHRoZSBwb2x5Z29uLFxuICogICAgICBhIGZsYXQgYXJyYXkgb2YgbnVtYmVycyB0aGF0IHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgW3gseSwgeCx5LCAuLi5dLCBvciB0aGUgYXJndW1lbnRzIHBhc3NlZCBjYW4gYmVcbiAqICAgICAgYWxsIHRoZSBwb2ludHMgb2YgdGhlIHBvbHlnb24gZS5nLiBgbmV3IFBJWEkuUG9seWdvbihuZXcgUElYSS5Qb2ludCgpLCBuZXcgUElYSS5Qb2ludCgpLCAuLi4pYCwgb3IgdGhlXG4gKiAgICAgIGFyZ3VtZW50cyBwYXNzZWQgY2FuIGJlIGZsYXQgeCx5IHZhbHVlcyBlLmcuIGBuZXcgUG9seWdvbih4LHksIHgseSwgeCx5LCAuLi4pYCB3aGVyZSBgeGAgYW5kIGB5YCBhcmVcbiAqICAgICAgTnVtYmVycy5cbiAqL1xuZnVuY3Rpb24gUG9seWdvbihwb2ludHMpXG57XG4gICAgLy9pZiBwb2ludHMgaXNuJ3QgYW4gYXJyYXksIHVzZSBhcmd1bWVudHMgYXMgdGhlIGFycmF5XG4gICAgaWYgKCEocG9pbnRzIGluc3RhbmNlb2YgQXJyYXkpKVxuICAgIHtcbiAgICAgICAgcG9pbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvL2lmIHRoaXMgaXMgYW4gYXJyYXkgb2YgcG9pbnRzLCBjb252ZXJ0IGl0IHRvIGEgZmxhdCBhcnJheSBvZiBudW1iZXJzXG4gICAgaWYgKHBvaW50c1swXSBpbnN0YW5jZW9mIFBvaW50KVxuICAgIHtcbiAgICAgICAgdmFyIHAgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcG9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAucHVzaChwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9pbnRzID0gcDtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB0aGUgcG9pbnRzIG9mIHRoaXMgcG9seWdvblxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyW119XG4gICAgICovXG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0LCBtYWlubHkgdXNlZCB0byBhdm9pZCBgaW5zdGFuY2VvZmAgY2hlY2tzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gQ09OU1QuU0hBUEVTLlBPTFk7XG59XG5cblBvbHlnb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUG9seWdvbjtcbm1vZHVsZS5leHBvcnRzID0gUG9seWdvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyBwb2x5Z29uXG4gKlxuICogQHJldHVybiB7UG9seWdvbn0gYSBjb3B5IG9mIHRoZSBwb2x5Z29uXG4gKi9cblBvbHlnb24ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IFBvbHlnb24odGhpcy5wb2ludHMuc2xpY2UoKSk7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGFyZSBjb250YWluZWQgd2l0aGluIHRoaXMgcG9seWdvblxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHgveSBjb29yZGluYXRlcyBhcmUgd2l0aGluIHRoaXMgcG9seWdvblxuICovXG5Qb2x5Z29uLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcblxuICAgIC8vIHVzZSBzb21lIHJheWNhc3RpbmcgdG8gdGVzdCBoaXRzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL3BvaW50LWluLXBvbHlnb24vYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5wb2ludHMubGVuZ3RoIC8gMjtcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gbGVuZ3RoIC0gMTsgaSA8IGxlbmd0aDsgaiA9IGkrKylcbiAgICB7XG4gICAgICAgIHZhciB4aSA9IHRoaXMucG9pbnRzW2kgKiAyXSwgeWkgPSB0aGlzLnBvaW50c1tpICogMiArIDFdLFxuICAgICAgICAgICAgeGogPSB0aGlzLnBvaW50c1tqICogMl0sIHlqID0gdGhpcy5wb2ludHNbaiAqIDIgKyAxXSxcbiAgICAgICAgICAgIGludGVyc2VjdCA9ICgoeWkgPiB5KSAhPT0gKHlqID4geSkpICYmICh4IDwgKHhqIC0geGkpICogKHkgLSB5aSkgLyAoeWogLSB5aSkgKyB4aSk7XG5cbiAgICAgICAgaWYgKGludGVyc2VjdClcbiAgICAgICAge1xuICAgICAgICAgICAgaW5zaWRlID0gIWluc2lkZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnNpZGU7XG59O1xuIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiB0aGUgUmVjdGFuZ2xlIG9iamVjdCBpcyBhbiBhcmVhIGRlZmluZWQgYnkgaXRzIHBvc2l0aW9uLCBhcyBpbmRpY2F0ZWQgYnkgaXRzIHRvcC1sZWZ0IGNvcm5lciBwb2ludCAoeCwgeSkgYW5kIGJ5IGl0cyB3aWR0aCBhbmQgaXRzIGhlaWdodC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSB1cHBlci1sZWZ0IGNvcm5lciBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSB1cHBlci1sZWZ0IGNvcm5lciBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gVGhlIG92ZXJhbGwgd2lkdGggb2YgdGhpcyByZWN0YW5nbGVcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gVGhlIG92ZXJhbGwgaGVpZ2h0IG9mIHRoaXMgcmVjdGFuZ2xlXG4gKi9cbmZ1bmN0aW9uIFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxue1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy54ID0geCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnkgPSB5IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIG9iamVjdCwgbWFpbmx5IHVzZWQgdG8gYXZvaWQgYGluc3RhbmNlb2ZgIGNoZWNrc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IENPTlNULlNIQVBFUy5SRUNUO1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVjdGFuZ2xlO1xubW9kdWxlLmV4cG9ydHMgPSBSZWN0YW5nbGU7XG5cbi8qKlxuICogQSBjb25zdGFudCBlbXB0eSByZWN0YW5nbGUuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0YW50XG4gKi9cblJlY3RhbmdsZS5FTVBUWSA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgMCwgMCk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyBSZWN0YW5nbGVcbiAqXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IGEgY29weSBvZiB0aGUgcmVjdGFuZ2xlXG4gKi9cblJlY3RhbmdsZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGdpdmVuIGFyZSBjb250YWluZWQgd2l0aGluIHRoaXMgUmVjdGFuZ2xlXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgeC95IGNvb3JkaW5hdGVzIGFyZSB3aXRoaW4gdGhpcyBSZWN0YW5nbGVcbiAqL1xuUmVjdGFuZ2xlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIGlmICh0aGlzLndpZHRoIDw9IDAgfHwgdGhpcy5oZWlnaHQgPD0gMClcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8IHRoaXMueCArIHRoaXMud2lkdGgpXG4gICAge1xuICAgICAgICBpZiAoeSA+PSB0aGlzLnkgJiYgeSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG4iLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBSb3VuZGVkIFJlY3RhbmdsZSBvYmplY3QgaXMgYW4gYXJlYSB0aGF0IGhhcyBuaWNlIHJvdW5kZWQgY29ybmVycywgYXMgaW5kaWNhdGVkIGJ5IGl0cyB0b3AtbGVmdCBjb3JuZXIgcG9pbnQgKHgsIHkpIGFuZCBieSBpdHMgd2lkdGggYW5kIGl0cyBoZWlnaHQgYW5kIGl0cyByYWRpdXMuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgdXBwZXItbGVmdCBjb3JuZXIgb2YgdGhlIHJvdW5kZWQgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSB1cHBlci1sZWZ0IGNvcm5lciBvZiB0aGUgcm91bmRlZCByZWN0YW5nbGVcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgb3ZlcmFsbCB3aWR0aCBvZiB0aGlzIHJvdW5kZWQgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IFRoZSBvdmVyYWxsIGhlaWdodCBvZiB0aGlzIHJvdW5kZWQgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9IENvbnRyb2xzIHRoZSByYWRpdXMgb2YgdGhlIHJvdW5kZWQgY29ybmVyc1xuICovXG5mdW5jdGlvbiBSb3VuZGVkUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueCA9IHggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy55ID0geSB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAqL1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDIwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIG9iamVjdCwgbWFpbmx5IHVzZWQgdG8gYXZvaWQgYGluc3RhbmNlb2ZgIGNoZWNrc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IENPTlNULlNIQVBFUy5SUkVDO1xufVxuXG5Sb3VuZGVkUmVjdGFuZ2xlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJvdW5kZWRSZWN0YW5nbGU7XG5tb2R1bGUuZXhwb3J0cyA9IFJvdW5kZWRSZWN0YW5nbGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgUm91bmRlZCBSZWN0YW5nbGVcbiAqXG4gKiBAcmV0dXJuIHtSb3VuZGVkUmVjdGFuZ2xlfSBhIGNvcHkgb2YgdGhlIHJvdW5kZWQgcmVjdGFuZ2xlXG4gKi9cblJvdW5kZWRSZWN0YW5nbGUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IFJvdW5kZWRSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnJhZGl1cyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGdpdmVuIGFyZSBjb250YWluZWQgd2l0aGluIHRoaXMgUm91bmRlZCBSZWN0YW5nbGVcbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSB4L3kgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiB0aGlzIFJvdW5kZWQgUmVjdGFuZ2xlXG4gKi9cblJvdW5kZWRSZWN0YW5nbGUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCB8fCB0aGlzLmhlaWdodCA8PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9IHRoaXMueCArIHRoaXMud2lkdGgpXG4gICAge1xuICAgICAgICBpZiAoeSA+PSB0aGlzLnkgJiYgeSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQ29udGFpbmVyJyk7XG5cbi8qKlxuICogVGhlIFBhcnRpY2xlQ29udGFpbmVyIGNsYXNzIGlzIGEgcmVhbGx5IGZhc3QgdmVyc2lvbiBvZiB0aGUgQ29udGFpbmVyIGJ1aWx0IHNvbGVseSBmb3Igc3BlZWQsXG4gKiBzbyB1c2Ugd2hlbiB5b3UgbmVlZCBhIGxvdCBvZiBzcHJpdGVzIG9yIHBhcnRpY2xlcy4gVGhlIHRyYWRlb2ZmIG9mIHRoZSBQYXJ0aWNsZUNvbnRhaW5lciBpcyB0aGF0IGFkdmFuY2VkXG4gKiBmdW5jdGlvbmFsaXR5IHdpbGwgbm90IHdvcmsuIFBhcnRpY2xlQ29udGFpbmVyIGltcGxlbWVudHMgb25seSB0aGUgYmFzaWMgb2JqZWN0IHRyYW5zZm9ybSAocG9zaXRpb24sIHNjYWxlLCByb3RhdGlvbikuXG4gKiBBbnkgb3RoZXIgZnVuY3Rpb25hbGl0eSBsaWtlIHRpbnRpbmcsIG1hc2tpbmcsIGV0YyB3aWxsIG5vdCB3b3JrIG9uIHNwcml0ZXMgaW4gdGhpcyBiYXRjaC5cbiAqXG4gKiBJdCdzIGV4dHJlbWVseSBlYXN5IHRvIHVzZSA6XG4gKlxuICogYGBganNcbiAqIHZhciBjb250YWluZXIgPSBuZXcgUGFydGljbGVDb250YWluZXIoKTtcbiAqXG4gKiBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgKytpKVxuICoge1xuICogICAgIHZhciBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUuZnJvbUltYWdlKFwibXlJbWFnZS5wbmdcIik7XG4gKiAgICAgY29udGFpbmVyLmFkZENoaWxkKHNwcml0ZSk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBbmQgaGVyZSB5b3UgaGF2ZSBhIGh1bmRyZWQgc3ByaXRlcyB0aGF0IHdpbGwgYmUgcmVuZGVyZXIgYXQgdGhlIHNwZWVkIG9mIGxpZ2h0LlxuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgQ29udGFpbmVyXG4gKiBAbWVtYmVyb2YgUElYSVxuICpcbiAqIEBwYXJhbSBzaXplIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaW1hZ2VzIGluIHRoZSBTcHJpdGVCYXRjaCBiZWZvcmUgaXQgZmx1c2hlcy5cbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIHtvYmplY3R9IFRoZSBwcm9wZXJ0aWVzIHRvIGJlIHVwbG9hZGVkXG4gKi9cbmZ1bmN0aW9uIFBhcnRpY2xlQ29udGFpbmVyKHNpemUsIHByb3BlcnRpZXMpXG57XG4gICAgQ29udGFpbmVyLmNhbGwodGhpcyk7XG5cbiAgICAvLyBzZXQgcHJvcGVydGllcyB0byBiZSBkeW5hbWljICh0cnVlKSAvIHN0YXRpYyAoZmFsc2UpXG4gICAgLy8gVE9ETyB0aGlzIGNvdWxkIGJlIGVhc2llciB0byB1bmRlcnN0YW5kIVxuICAgIC8qIHRoaXMuX3Byb3BlcnRpZXMgPSB7XG4gICAgICAgIHNjYWxlIDogZmFsc2UsXG4gICAgICAgIHBvc2l0aW9uIDogdHJ1ZSxcbiAgICAgICAgcm90YXRpb24gOiBmYWxzZSxcbiAgICAgICAgdXZzIDogZmFsc2UsXG4gICAgICAgIGFscGhhIDogZmFsc2VcbiAgICAgKiB9XG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgW2ZhbHNlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zaXplID0gc2l6ZSB8fCAxNTAwMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1dlYkdMQnVmZmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYnVmZmVycyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdXBkYXRlU3RhdGljID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgdGhpcy5pbnRlcmFjdGl2ZUNoaWxkcmVuID0gZmFsc2U7XG5cbn1cblxuUGFydGljbGVDb250YWluZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb250YWluZXIucHJvdG90eXBlKTtcblBhcnRpY2xlQ29udGFpbmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcnRpY2xlQ29udGFpbmVyO1xubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZUNvbnRhaW5lcjtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBvYmplY3QgdHJhbnNmb3JtIGZvciByZW5kZXJpbmdcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5QYXJ0aWNsZUNvbnRhaW5lci5wcm90b3R5cGUudXBkYXRlVHJhbnNmb3JtID0gZnVuY3Rpb24gKClcbntcbiAgICAvLyBUT0RPIGRvbid0IG5lZWQgdG8hXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0VXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgLy8gIFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZS51cGRhdGVUcmFuc2Zvcm0uY2FsbCggdGhpcyApO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250YWluZXIgdXNpbmcgdGhlIFdlYkdMIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgd2ViZ2wgcmVuZGVyZXJcbiAqIEBwcml2YXRlXG4gKi9cblBhcnRpY2xlQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXJXZWJHTCA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICBpZiAoIXRoaXMudmlzaWJsZSB8fCB0aGlzLndvcmxkQWxwaGEgPD0gMCB8fCAhdGhpcy5jaGlsZHJlbi5sZW5ndGggfHwgIXRoaXMucmVuZGVyYWJsZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZW5kZXJlci5zZXRPYmplY3RSZW5kZXJlciggcmVuZGVyZXIucGx1Z2lucy5wYXJ0aWNsZSApO1xuICAgIHJlbmRlcmVyLnBsdWdpbnMucGFydGljbGUucmVuZGVyKCB0aGlzICk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSBjaGlsZCB0byB0aGlzIHBhcnRpY2xlIGNvbnRhaW5lciBhdCBhIHNwZWNpZmllZCBpbmRleC4gSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAqXG4gKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0byBhZGRcbiAqIEBwYXJhbSBpbmRleCB7TnVtYmVyfSBUaGUgaW5kZXggdG8gcGxhY2UgdGhlIGNoaWxkIGluXG4gKiBAcmV0dXJuIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdGhhdCB3YXMgYWRkZWQuXG4gKi9cblBhcnRpY2xlQ29udGFpbmVyLnByb3RvdHlwZS5hZGRDaGlsZEF0ID0gZnVuY3Rpb24gKGNoaWxkLCBpbmRleClcbntcbiAgICAvLyBwcmV2ZW50IGFkZGluZyBzZWxmIGFzIGNoaWxkXG4gICAgaWYgKGNoaWxkID09PSB0aGlzKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcblxuICAgICAgICB0aGlzLl91cGRhdGVTdGF0aWMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNoaWxkICsgJ2FkZENoaWxkQXQ6IFRoZSBpbmRleCAnKyBpbmRleCArJyBzdXBwbGllZCBpcyBvdXQgb2YgYm91bmRzICcgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgY2hpbGQgZnJvbSB0aGUgc3BlY2lmaWVkIGluZGV4IHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSBpbmRleCB7TnVtYmVyfSBUaGUgaW5kZXggdG8gZ2V0IHRoZSBjaGlsZCBmcm9tXG4gKiBAcmV0dXJuIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdGhhdCB3YXMgcmVtb3ZlZC5cbiAqL1xuUGFydGljbGVDb250YWluZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkQXQgPSBmdW5jdGlvbiAoaW5kZXgpXG57XG4gICAgdmFyIGNoaWxkID0gdGhpcy5nZXRDaGlsZEF0KGluZGV4KTtcblxuICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRpYyA9IHRydWU7XG5cbiAgICByZXR1cm4gY2hpbGQ7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgQ2FudmFzIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcn0gVGhlIGNhbnZhcyByZW5kZXJlclxuICogQHByaXZhdGVcbiAqL1xuUGFydGljbGVDb250YWluZXIucHJvdG90eXBlLnJlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICBpZiAoIXRoaXMudmlzaWJsZSB8fCB0aGlzLndvcmxkQWxwaGEgPD0gMCB8fCAhdGhpcy5jaGlsZHJlbi5sZW5ndGggfHwgIXRoaXMucmVuZGVyYWJsZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XG4gICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMud29ybGRUcmFuc2Zvcm07XG4gICAgdmFyIGlzUm90YXRlZCA9IHRydWU7XG5cbiAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gdGhpcy53b3JsZEFscGhhO1xuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0VXBkYXRlVHJhbnNmb3JtKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyArK2kpXG4gICAge1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQudmlzaWJsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZnJhbWUgPSBjaGlsZC50ZXh0dXJlLmZyYW1lO1xuXG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSB0aGlzLndvcmxkQWxwaGEgKiBjaGlsZC5hbHBoYTtcblxuICAgICAgICBpZiAoY2hpbGQucm90YXRpb24gJSAoTWF0aC5QSSAqIDIpID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBmYXN0ZXN0ICB3YXkgdG8gb3B0aW1pc2UhIC0gaWYgcm90YXRpb24gaXMgMCB0aGVuIHdlIGNhbiBhdm9pZCBhbnkga2luZCBvZiBzZXRUcmFuc2Zvcm0gY2FsbFxuICAgICAgICAgICAgaWYgKGlzUm90YXRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLmEsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5iLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uYyxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLmQsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS50eCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLnR5XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlzUm90YXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjaGlsZC50ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgICAgICAgICBmcmFtZS54LFxuICAgICAgICAgICAgICAgIGZyYW1lLnksXG4gICAgICAgICAgICAgICAgZnJhbWUud2lkdGgsXG4gICAgICAgICAgICAgICAgZnJhbWUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICgoY2hpbGQuYW5jaG9yLngpICogKC1mcmFtZS53aWR0aCAqIGNoaWxkLnNjYWxlLngpICsgY2hpbGQucG9zaXRpb24ueCAgKyAwLjUpIHwgMCxcbiAgICAgICAgICAgICAgICAoKGNoaWxkLmFuY2hvci55KSAqICgtZnJhbWUuaGVpZ2h0ICogY2hpbGQuc2NhbGUueSkgKyBjaGlsZC5wb3NpdGlvbi55ICArIDAuNSkgfCAwLFxuICAgICAgICAgICAgICAgIGZyYW1lLndpZHRoICogY2hpbGQuc2NhbGUueCxcbiAgICAgICAgICAgICAgICBmcmFtZS5oZWlnaHQgKiBjaGlsZC5zY2FsZS55XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFpc1JvdGF0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNSb3RhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybSgpO1xuXG4gICAgICAgICAgICB2YXIgY2hpbGRUcmFuc2Zvcm0gPSBjaGlsZC53b3JsZFRyYW5zZm9ybTtcblxuICAgICAgICAgICAgaWYgKHJlbmRlcmVyLnJvdW5kUGl4ZWxzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5hLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5iLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5jLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5kLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS50eCB8IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLnR5IHwgMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmEsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmMsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmQsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLnR4LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS50eVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGNoaWxkLnRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLFxuICAgICAgICAgICAgICAgIGZyYW1lLngsXG4gICAgICAgICAgICAgICAgZnJhbWUueSxcbiAgICAgICAgICAgICAgICBmcmFtZS53aWR0aCxcbiAgICAgICAgICAgICAgICBmcmFtZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgKChjaGlsZC5hbmNob3IueCkgKiAoLWZyYW1lLndpZHRoKSArIDAuNSkgfCAwLFxuICAgICAgICAgICAgICAgICgoY2hpbGQuYW5jaG9yLnkpICogKC1mcmFtZS5oZWlnaHQpICsgMC41KSB8IDAsXG4gICAgICAgICAgICAgICAgZnJhbWUud2lkdGgsXG4gICAgICAgICAgICAgICAgZnJhbWUuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlxuLyoqXG4gKiBAYXV0aG9yIE1hdCBHcm92ZXNcbiAqXG4gKiBCaWcgdGhhbmtzIHRvIHRoZSB2ZXJ5IGNsZXZlciBNYXR0IERlc0xhdXJpZXJzIDxtYXR0ZGVzbD4gaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL1xuICogZm9yIGNyZWF0aW5nIHRoZSBvcmlnaW5hbCBwaXhpIHZlcnNpb24hXG4gKiBBbHNvIGEgdGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9iY2hldmFsaWVyIGZvciB0d2Vha2luZyB0aGUgdGludCBhbmQgYWxwaGEgc28gdGhhdCB0aGV5IG5vdyBzaGFyZSA0IGJ5dGVzIG9uIHRoZSB2ZXJ0ZXggYnVmZmVyXG4gKlxuICogSGVhdmlseSBpbnNwaXJlZCBieSBMaWJHRFgncyBQYXJ0aWNsZUJ1ZmZlcjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9saWJnZHgvbGliZ2R4L2Jsb2IvbWFzdGVyL2dkeC9zcmMvY29tL2JhZGxvZ2ljL2dkeC9ncmFwaGljcy9nMmQvUGFydGljbGVCdWZmZXIuamF2YVxuICovXG5cbi8qKlxuICpcbiAqIEBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIHNwcml0ZSBiYXRjaCB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIFBhcnRpY2xlQnVmZmVyKGdsLCBwcm9wZXJ0aWVzLCBzaXplKVxue1xuICAgIC8qKlxuICAgICAqIHRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyaW5nQ29udGV4dH1cbiAgICAgKi9cbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudmVydFNpemUgPSAyO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRCeXRlU2l6ZSA9IHRoaXMudmVydFNpemUgKiA0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpbWFnZXMgaW4gdGhlIFNwcml0ZUJhdGNoIGJlZm9yZSBpdCBmbHVzaGVzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuZHluYW1pY1Byb3BlcnRpZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5zdGF0aWNQcm9wZXJ0aWVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuXG4gICAgICAgIGlmKHByb3BlcnR5LmR5bmFtaWMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1Byb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRpY1Byb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN0YXRpY1N0cmlkZSA9IDA7XG4gICAgdGhpcy5zdGF0aWNCdWZmZXIgPSBudWxsO1xuICAgIHRoaXMuc3RhdGljRGF0YSA9IG51bGw7XG5cbiAgICB0aGlzLmR5bmFtaWNTdHJpZGUgPSAwO1xuICAgIHRoaXMuZHluYW1pY0J1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5keW5hbWljRGF0YSA9IG51bGw7XG5cbiAgICB0aGlzLmluaXRCdWZmZXJzKCk7XG5cbn1cblxuUGFydGljbGVCdWZmZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFydGljbGVCdWZmZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlQnVmZmVyO1xuXG4vKipcbiAqIFNldHMgdXAgdGhlIHJlbmRlcmVyIGNvbnRleHQgYW5kIG5lY2Vzc2FyeSBidWZmZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gKi9cblBhcnRpY2xlQnVmZmVyLnByb3RvdHlwZS5pbml0QnVmZmVycyA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICB2YXIgaTtcbiAgICB2YXIgcHJvcGVydHk7XG5cbiAgICB2YXIgZHluYW1pY09mZnNldCA9IDA7XG4gICAgdGhpcy5keW5hbWljU3RyaWRlID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcHJvcGVydHkgPSB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzW2ldO1xuXG4gICAgICAgIHByb3BlcnR5Lm9mZnNldCA9IGR5bmFtaWNPZmZzZXQ7XG4gICAgICAgIGR5bmFtaWNPZmZzZXQgKz0gcHJvcGVydHkuc2l6ZTtcbiAgICAgICAgdGhpcy5keW5hbWljU3RyaWRlICs9IHByb3BlcnR5LnNpemU7XG4gICAgfVxuXG4gICAgdGhpcy5keW5hbWljRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoIHRoaXMuc2l6ZSAqIHRoaXMuZHluYW1pY1N0cmlkZSAqIDQpO1xuICAgIHRoaXMuZHluYW1pY0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuZHluYW1pY0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMuZHluYW1pY0RhdGEsIGdsLkRZTkFNSUNfRFJBVyk7XG5cblxuICAgIC8vIHN0YXRpYyAvL1xuICAgIHZhciBzdGF0aWNPZmZzZXQgPSAwO1xuICAgIHRoaXMuc3RhdGljU3RyaWRlID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnN0YXRpY1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBwcm9wZXJ0eSA9IHRoaXMuc3RhdGljUHJvcGVydGllc1tpXTtcblxuICAgICAgICBwcm9wZXJ0eS5vZmZzZXQgPSBzdGF0aWNPZmZzZXQ7XG4gICAgICAgIHN0YXRpY09mZnNldCArPSBwcm9wZXJ0eS5zaXplO1xuICAgICAgICB0aGlzLnN0YXRpY1N0cmlkZSArPSBwcm9wZXJ0eS5zaXplO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGljRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoIHRoaXMuc2l6ZSAqIHRoaXMuc3RhdGljU3RyaWRlICogNCk7XG4gICAgdGhpcy5zdGF0aWNCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnN0YXRpY0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMuc3RhdGljRGF0YSwgZ2wuRFlOQU1JQ19EUkFXKTtcblxufTtcblxuUGFydGljbGVCdWZmZXIucHJvdG90eXBlLnVwbG9hZER5bmFtaWMgPSBmdW5jdGlvbihjaGlsZHJlbiwgc3RhcnRJbmRleCwgYW1vdW50KVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZHluYW1pY1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzW2ldO1xuICAgICAgICBwcm9wZXJ0eS51cGxvYWRGdW5jdGlvbihjaGlsZHJlbiwgc3RhcnRJbmRleCwgYW1vdW50LCB0aGlzLmR5bmFtaWNEYXRhLCB0aGlzLmR5bmFtaWNTdHJpZGUsIHByb3BlcnR5Lm9mZnNldCk7XG4gICAgfVxuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuZHluYW1pY0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMuZHluYW1pY0RhdGEpO1xufTtcblxuUGFydGljbGVCdWZmZXIucHJvdG90eXBlLnVwbG9hZFN0YXRpYyA9IGZ1bmN0aW9uKGNoaWxkcmVuLCBzdGFydEluZGV4LCBhbW91bnQpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0aWNQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5zdGF0aWNQcm9wZXJ0aWVzW2ldO1xuICAgICAgICBwcm9wZXJ0eS51cGxvYWRGdW5jdGlvbihjaGlsZHJlbiwgc3RhcnRJbmRleCwgYW1vdW50LCB0aGlzLnN0YXRpY0RhdGEsIHRoaXMuc3RhdGljU3RyaWRlLCBwcm9wZXJ0eS5vZmZzZXQpO1xuICAgIH1cblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnN0YXRpY0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMuc3RhdGljRGF0YSk7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIG5ldyBzcHJpdGUgYmF0Y2guXG4gKlxuICovXG5QYXJ0aWNsZUJ1ZmZlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICB2YXIgaSwgcHJvcGVydHk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5keW5hbWljQnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcHJvcGVydHkgPSB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzW2ldO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHByb3BlcnR5LmF0dHJpYnV0ZSwgcHJvcGVydHkuc2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCB0aGlzLmR5bmFtaWNTdHJpZGUgKiA0LCBwcm9wZXJ0eS5vZmZzZXQgKiA0KTtcbiAgICB9XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5zdGF0aWNCdWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc3RhdGljUHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHByb3BlcnR5ID0gdGhpcy5zdGF0aWNQcm9wZXJ0aWVzW2ldO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHByb3BlcnR5LmF0dHJpYnV0ZSwgcHJvcGVydHkuc2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCB0aGlzLnN0YXRpY1N0cmlkZSAqIDQsIHByb3BlcnR5Lm9mZnNldCAqIDQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIFNwcml0ZUJhdGNoLlxuICpcbiAqL1xuUGFydGljbGVCdWZmZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vVE9ETyBpbXBsZW1lbnQgdGhpcyA6KSB0byBidXN5IG1ha2luZyB0aGUgZnVuIGJpdHMuLlxufTtcbiIsInZhciBPYmplY3RSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVycy93ZWJnbC91dGlscy9PYmplY3RSZW5kZXJlcicpLFxuICAgIFdlYkdMUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xSZW5kZXJlcicpLFxuICAgIFBhcnRpY2xlU2hhZGVyID0gcmVxdWlyZSgnLi9QYXJ0aWNsZVNoYWRlcicpLFxuICAgIFBhcnRpY2xlQnVmZmVyID0gcmVxdWlyZSgnLi9QYXJ0aWNsZUJ1ZmZlcicpLFxuICAgIG1hdGggICAgICAgICAgICA9IHJlcXVpcmUoJy4uLy4uL21hdGgnKTtcblxuLyoqXG4gKiBAYXV0aG9yIE1hdCBHcm92ZXNcbiAqXG4gKiBCaWcgdGhhbmtzIHRvIHRoZSB2ZXJ5IGNsZXZlciBNYXR0IERlc0xhdXJpZXJzIDxtYXR0ZGVzbD4gaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL1xuICogZm9yIGNyZWF0aW5nIHRoZSBvcmlnaW5hbCBwaXhpIHZlcnNpb24hXG4gKiBBbHNvIGEgdGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9iY2hldmFsaWVyIGZvciB0d2Vha2luZyB0aGUgdGludCBhbmQgYWxwaGEgc28gdGhhdCB0aGV5IG5vdyBzaGFyZSA0IGJ5dGVzIG9uIHRoZSB2ZXJ0ZXggYnVmZmVyXG4gKlxuICogSGVhdmlseSBpbnNwaXJlZCBieSBMaWJHRFgncyBQYXJ0aWNsZVJlbmRlcmVyOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpYmdkeC9saWJnZHgvYmxvYi9tYXN0ZXIvZ2R4L3NyYy9jb20vYmFkbG9naWMvZ2R4L2dyYXBoaWNzL2cyZC9QYXJ0aWNsZVJlbmRlcmVyLmphdmFcbiAqL1xuXG4vKipcbiAqXG4gKiBAY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBzcHJpdGUgYmF0Y2ggd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZVJlbmRlcmVyKHJlbmRlcmVyKVxue1xuICAgIE9iamVjdFJlbmRlcmVyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGltYWdlcyBpbiB0aGUgUGFydGljbGUgYmVmb3JlIGl0IGZsdXNoZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaXplID0gMTUwMDA7Ly9DT05TVC5TUFJJVEVfQkFUQ0hfU0laRTsgLy8gMjAwMCBpcyBhIG5pY2UgYmFsYW5jZSBiZXR3ZWVuIG1vYmlsZSAvIGRlc2t0b3BcblxuICAgIHZhciBudW1JbmRpY2VzID0gdGhpcy5zaXplICogNjtcblxuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIGluZGljZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1VpbnQxNkFycmF5fVxuICAgICAqL1xuICAgIHRoaXMuaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShudW1JbmRpY2VzKTtcblxuICAgIGZvciAodmFyIGk9MCwgaj0wOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpXG4gICAge1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDBdID0gaiArIDA7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMV0gPSBqICsgMTtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAyXSA9IGogKyAyO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDNdID0gaiArIDA7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgNF0gPSBqICsgMjtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyA1XSA9IGogKyAzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHNoYWRlciB0aGF0IGlzIHVzZWQgaWYgYSBzcHJpdGUgZG9lc24ndCBoYXZlIGEgbW9yZSBzcGVjaWZpYyBvbmUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuXG4gICAgdGhpcy50ZW1wTWF0cml4ID0gbmV3IG1hdGguTWF0cml4KCk7XG5cblxuXG5cbn1cblxuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdFJlbmRlcmVyLnByb3RvdHlwZSk7XG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcnRpY2xlUmVuZGVyZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlUmVuZGVyZXI7XG5cbldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ3BhcnRpY2xlJywgUGFydGljbGVSZW5kZXJlcik7XG5cbi8qKlxuICogV2hlbiB0aGVyZSBpcyBhIFdlYkdMIGNvbnRleHQgY2hhbmdlXG4gKlxuICogQHByaXZhdGVcbiAqXG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLm9uQ29udGV4dENoYW5nZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIC8vIHNldHVwIGRlZmF1bHQgc2hhZGVyXG4gICAgdGhpcy5zaGFkZXIgPSBuZXcgUGFydGljbGVTaGFkZXIodGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyKTtcblxuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIC8vIDY1NTM1IGlzIG1heCBpbmRleCwgc28gNjU1MzUgLyA2ID0gMTA5MjIuXG5cbiAgICAvL3VwbG9hZCB0aGUgaW5kZXggZGF0YVxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuXG5cbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXG4gICAgLy92ZXJ0aWNlc0RhdGFcbiAgICB7XG4gICAgICAgIGF0dHJpYnV0ZTp0aGlzLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbixcbiAgICAgICAgZHluYW1pYzpmYWxzZSxcbiAgICAgICAgc2l6ZToyLFxuICAgICAgICB1cGxvYWRGdW5jdGlvbjp0aGlzLnVwbG9hZFZlcnRpY2VzLFxuICAgICAgICBvZmZzZXQ6MFxuICAgIH0sXG4gICAgLy8gcG9zaXRpb25EYXRhXG4gICAge1xuICAgICAgICBhdHRyaWJ1dGU6dGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hUG9zaXRpb25Db29yZCxcbiAgICAgICAgZHluYW1pYzp0cnVlLFxuICAgICAgICBzaXplOjIsXG4gICAgICAgIHVwbG9hZEZ1bmN0aW9uOnRoaXMudXBsb2FkUG9zaXRpb24sXG4gICAgICAgIG9mZnNldDowXG4gICAgfSxcbiAgICAvLyByb3RhdGlvbkRhdGFcbiAgICB7XG4gICAgICAgIGF0dHJpYnV0ZTp0aGlzLnNoYWRlci5hdHRyaWJ1dGVzLmFSb3RhdGlvbixcbiAgICAgICAgZHluYW1pYzpmYWxzZSxcbiAgICAgICAgc2l6ZToxLFxuICAgICAgICB1cGxvYWRGdW5jdGlvbjp0aGlzLnVwbG9hZFJvdGF0aW9uLFxuICAgICAgICBvZmZzZXQ6MFxuICAgIH0sXG4gICAgLy91IHZzRGF0YVxuICAgIHtcbiAgICAgICAgYXR0cmlidXRlOnRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCxcbiAgICAgICAgZHluYW1pYzpmYWxzZSxcbiAgICAgICAgc2l6ZToyLFxuICAgICAgICB1cGxvYWRGdW5jdGlvbjp0aGlzLnVwbG9hZFV2cyxcbiAgICAgICAgb2Zmc2V0OjBcbiAgICB9LFxuICAgIC8vIGFscGhhRGF0YVxuICAgIHtcbiAgICAgICAgYXR0cmlidXRlOnRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYUNvbG9yLFxuICAgICAgICBkeW5hbWljOmZhbHNlLFxuICAgICAgICBzaXplOjEsXG4gICAgICAgIHVwbG9hZEZ1bmN0aW9uOnRoaXMudXBsb2FkQWxwaGEsXG4gICAgICAgIG9mZnNldDowXG4gICAgfV07XG5cbn07XG5cbi8qKlxuICogU3RhcnRzIGEgbmV3IHNwcml0ZSBiYXRjaC5cbiAqXG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgLy8gYmluZCB0aGUgbWFpbiB0ZXh0dXJlXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG5cbiAgICAvLyBiaW5kIHRoZSBidWZmZXJzXG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcblxuICAgIHZhciBzaGFkZXIgPSB0aGlzLnNoYWRlcjtcblxuICAgIHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5zZXRTaGFkZXIoc2hhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBzcHJpdGUgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBjb250YWluZXIge0NvbnRhaW5lcnxTcHJpdGV9IHRoZSBzcHJpdGUgdG8gcmVuZGVyIHVzaW5nIHRoaXMgUGFydGljbGVSZW5kZXJlclxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoIGNvbnRhaW5lciApXG57XG4gICAgdmFyIGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuLFxuICAgICAgICB0b3RhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICBtYXhTaXplID0gY29udGFpbmVyLl9zaXplO1xuXG4gICAgaWYodG90YWxDaGlsZHJlbiA9PT0gMClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZih0b3RhbENoaWxkcmVuID4gbWF4U2l6ZSlcbiAgICB7XG4gICAgICAgIHRvdGFsQ2hpbGRyZW4gPSBtYXhTaXplO1xuICAgIH1cblxuICAgIGlmKCFjb250YWluZXIuX2J1ZmZlcnMpXG4gICAge1xuICAgICAgICBjb250YWluZXIuX2J1ZmZlcnMgPSB0aGlzLmdlbmVyYXRlQnVmZmVycyggY29udGFpbmVyICk7XG4gICAgfVxuXG5cblxuICAgIC8vIGlmIHRoZSB1dnMgaGF2ZSBub3QgdXBkYXRlZCB0aGVuIG5vIHBvaW50IHJlbmRlcmluZyBqdXN0IHlldCFcbiAgICAvL3RoaXMucmVuZGVyZXIuYmxlbmRNb2RlTWFuYWdlci5zZXRCbGVuZE1vZGUoc3ByaXRlLmJsZW5kTW9kZSk7XG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIHZhciBtID0gIGNvbnRhaW5lci53b3JsZFRyYW5zZm9ybS5jb3B5KCB0aGlzLnRlbXBNYXRyaXggKTtcbiAgICBtLnByZXBlbmQoIHRoaXMucmVuZGVyZXIuY3VycmVudFJlbmRlclRhcmdldC5wcm9qZWN0aW9uTWF0cml4ICk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDNmdih0aGlzLnNoYWRlci51bmlmb3Jtcy5wcm9qZWN0aW9uTWF0cml4Ll9sb2NhdGlvbiwgZmFsc2UsIG0udG9BcnJheSh0cnVlKSk7XG5cbiAgICAvLyBpZiB0aGlzIHZhcmlhYmxlIGlzIHRydWUgdGhlbiB3ZSB3aWxsIHVwbG9hZCB0aGUgc3RhdGljIGNvbnRlbnRzIGFzIHdlbGwgYXMgdGhlIGR5bmFtaWMgY29udGVuc1xuICAgIHZhciB1cGxvYWRTdGF0aWMgPSBjb250YWluZXIuX3VwZGF0ZVN0YXRpYztcblxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgdGV4dHVyZSBpcyBib3VuZC4uXG4gICAgdmFyIGJhc2VUZXh0dXJlID0gY2hpbGRyZW5bMF0uX3RleHR1cmUuYmFzZVRleHR1cmU7XG5cbiAgICBpZiAoIWJhc2VUZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSlcbiAgICB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIudXBkYXRlVGV4dHVyZShiYXNlVGV4dHVyZSk7XG4gICAgICAgIGlmKCF0aGlzLnByb3BlcnRpZXNbMF0uZHluYW1pYyB8fCAhdGhpcy5wcm9wZXJ0aWVzWzNdLmR5bmFtaWMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVwbG9hZFN0YXRpYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgYmFzZVRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdKTtcbiAgICB9XG5cbiAgICAvLyBub3cgbGV0cyB1cGxvYWQgYW5kIHJlbmRlciB0aGUgYnVmZmVycy4uXG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxDaGlsZHJlbjsgaSs9dGhpcy5zaXplKVxuICAgIHtcbiAgICAgICAgIHZhciBhbW91bnQgPSAoIHRvdGFsQ2hpbGRyZW4gLSBpKTtcbiAgICAgICAgaWYoYW1vdW50ID4gdGhpcy5zaXplKVxuICAgICAgICB7XG4gICAgICAgICAgICBhbW91bnQgPSB0aGlzLnNpemU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYnVmZmVyID0gY29udGFpbmVyLl9idWZmZXJzW2orK107XG5cbiAgICAgICAgLy8gd2UgYWx3YXlzIHVwbG9hZCB0aGUgZHluYW1pY1xuICAgICAgICBidWZmZXIudXBsb2FkRHluYW1pYyhjaGlsZHJlbiwgaSwgYW1vdW50KTtcblxuICAgICAgICAvLyB3ZSBvbmx5IHVwbG9hZCB0aGUgc3RhdGljIGNvbnRlbnQgd2hlbiB3ZSBoYXZlIHRvIVxuICAgICAgICBpZih1cGxvYWRTdGF0aWMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJ1ZmZlci51cGxvYWRTdGF0aWMoY2hpbGRyZW4sIGksIGFtb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiaW5kIHRoZSBidWZmZXJcbiAgICAgICAgYnVmZmVyLmJpbmQoIHRoaXMuc2hhZGVyICk7XG5cbiAgICAgICAgIC8vIG5vdyBkcmF3IHRob3NlIHN1Y2thcyFcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgYW1vdW50ICogNiwgZ2wuVU5TSUdORURfU0hPUlQsIDApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmRyYXdDb3VudCsrO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5fdXBkYXRlU3RhdGljID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgb25lIHBhcnRpY2xlIGJ1ZmZlciBmb3IgZWFjaCBjaGlsZCBpbiB0aGUgY29udGFpbmVyIHdlIHdhbnQgdG8gcmVuZGVyIGFuZCB1cGRhdGVzIGludGVybmFsIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0gY29udGFpbmVyIHtDb250YWluZXJ8U3ByaXRlfSB0aGUgc3ByaXRlIHRvIHJlbmRlciB1c2luZyB0aGlzIFBhcnRpY2xlUmVuZGVyZXJcbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUuZ2VuZXJhdGVCdWZmZXJzID0gZnVuY3Rpb24gKCBjb250YWluZXIgKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2wsXG4gICAgICAgIGJ1ZmZlcnMgPSBbXSxcbiAgICAgICAgc2l6ZSA9IGNvbnRhaW5lci5fc2l6ZSxcbiAgICAgICAgaTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgcHJvcGVydGllcyB0byBtYXRjaCB0aGUgc3RhdGUgb2YgdGhlIGNvbnRhaW5lci4uXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbnRhaW5lci5fcHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1tpXS5keW5hbWljID0gY29udGFpbmVyLl9wcm9wZXJ0aWVzW2ldO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpICs9IHRoaXMuc2l6ZSlcbiAgICB7XG4gICAgICAgIGJ1ZmZlcnMucHVzaCggbmV3IFBhcnRpY2xlQnVmZmVyKGdsLCAgdGhpcy5wcm9wZXJ0aWVzLCB0aGlzLnNpemUsIHRoaXMuc2hhZGVyKSApO1xuICAgIH1cblxuICAgIHJldHVybiBidWZmZXJzO1xufTtcblxuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4ge0FycmF5fSB0aGUgYXJyYXkgb2YgZGlzcGxheSBvYmplY3RzIHRvIHJlbmRlclxuICogQHBhcmFtIHN0YXJ0SW5kZXgge251bWJlcn0gdGhlIGluZGV4IHRvIHN0YXJ0IGZyb20gaW4gdGhlIGNoaWxkcmVuIGFycmF5XG4gKiBAcGFyYW0gYW1vdW50IHtudW1iZXJ9IHRoZSBhbW91bnQgb2YgY2hpbGRyZW4gdGhhdCB3aWxsIGhhdmUgdGhlaXIgdmVydGljZXMgdXBsb2FkZWRcbiAqIEBwYXJhbSBhcnJheSB7QXJyYXl9XG4gKiBAcGFyYW0gc3RyaWRlIHtudW1iZXJ9XG4gKiBAcGFyYW0gb2Zmc2V0IHtudW1iZXJ9XG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLnVwbG9hZFZlcnRpY2VzID0gZnVuY3Rpb24gKGNoaWxkcmVuLCBzdGFydEluZGV4LCBhbW91bnQsIGFycmF5LCBzdHJpZGUsIG9mZnNldClcbntcbiAgICB2YXIgc3ByaXRlLFxuICAgICAgICB0ZXh0dXJlLFxuICAgICAgICB0cmltLFxuICAgICAgICBzeCxcbiAgICAgICAgc3ksXG4gICAgICAgIHcwLCB3MSwgaDAsIGgxO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuXG4gICAgICAgIHNwcml0ZSA9IGNoaWxkcmVuW3N0YXJ0SW5kZXggKyBpXTtcbiAgICAgICAgdGV4dHVyZSA9IHNwcml0ZS5fdGV4dHVyZTtcbiAgICAgICAgc3ggPSBzcHJpdGUuc2NhbGUueDtcbiAgICAgICAgc3kgPSBzcHJpdGUuc2NhbGUueTtcblxuICAgICAgICBpZiAodGV4dHVyZS50cmltKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3ByaXRlIGlzIHRyaW1tZWQgdGhlbiB3ZSBuZWVkIHRvIGFkZCB0aGUgZXh0cmEgc3BhY2UgYmVmb3JlIHRyYW5zZm9ybWluZyB0aGUgc3ByaXRlIGNvb3Jkcy4uXG4gICAgICAgICAgICB0cmltID0gdGV4dHVyZS50cmltO1xuXG4gICAgICAgICAgICB3MSA9IHRyaW0ueCAtIHNwcml0ZS5hbmNob3IueCAqIHRyaW0ud2lkdGg7XG4gICAgICAgICAgICB3MCA9IHcxICsgdGV4dHVyZS5jcm9wLndpZHRoO1xuXG4gICAgICAgICAgICBoMSA9IHRyaW0ueSAtIHNwcml0ZS5hbmNob3IueSAqIHRyaW0uaGVpZ2h0O1xuICAgICAgICAgICAgaDAgPSBoMSArIHRleHR1cmUuY3JvcC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB3MCA9ICh0ZXh0dXJlLl9mcmFtZS53aWR0aCApICogKDEtc3ByaXRlLmFuY2hvci54KTtcbiAgICAgICAgICAgIHcxID0gKHRleHR1cmUuX2ZyYW1lLndpZHRoICkgKiAtc3ByaXRlLmFuY2hvci54O1xuXG4gICAgICAgICAgICBoMCA9IHRleHR1cmUuX2ZyYW1lLmhlaWdodCAqICgxLXNwcml0ZS5hbmNob3IueSk7XG4gICAgICAgICAgICBoMSA9IHRleHR1cmUuX2ZyYW1lLmhlaWdodCAqIC1zcHJpdGUuYW5jaG9yLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheVtvZmZzZXRdID0gdzEgKiBzeDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSBoMSAqIHN5O1xuXG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZV0gPSB3MCAqIHN4O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKyAxXSA9IGgxICogc3k7XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMl0gPSB3MCAqIHN4O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyICsgMV0gPSBoMCAqIHN5O1xuXG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDNdID0gdzEgKiBzeDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMyArIDFdID0gaDAgKiBzeTtcblxuICAgICAgICBvZmZzZXQgKz0gc3RyaWRlICogNDtcbiAgICB9XG5cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjaGlsZHJlbiB7QXJyYXl9IHRoZSBhcnJheSBvZiBkaXNwbGF5IG9iamVjdHMgdG8gcmVuZGVyXG4gKiBAcGFyYW0gc3RhcnRJbmRleCB7bnVtYmVyfSB0aGUgaW5kZXggdG8gc3RhcnQgZnJvbSBpbiB0aGUgY2hpbGRyZW4gYXJyYXlcbiAqIEBwYXJhbSBhbW91bnQge251bWJlcn0gdGhlIGFtb3VudCBvZiBjaGlsZHJlbiB0aGF0IHdpbGwgaGF2ZSB0aGVpciBwb3NpdGlvbnMgdXBsb2FkZWRcbiAqIEBwYXJhbSBhcnJheSB7QXJyYXl9XG4gKiBAcGFyYW0gc3RyaWRlIHtudW1iZXJ9XG4gKiBAcGFyYW0gb2Zmc2V0IHtudW1iZXJ9XG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLnVwbG9hZFBvc2l0aW9uID0gZnVuY3Rpb24gKGNoaWxkcmVuLHN0YXJ0SW5kZXgsIGFtb3VudCwgYXJyYXksIHN0cmlkZSwgb2Zmc2V0KVxue1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50OyBpKyspXG4gICAge1xuICAgICAgICB2YXIgc3ByaXRlUG9zaXRpb24gPSBjaGlsZHJlbltzdGFydEluZGV4ICsgaV0ucG9zaXRpb247XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0XSA9IHNwcml0ZVBvc2l0aW9uLng7XG4gICAgICAgIGFycmF5W29mZnNldCArIDFdID0gc3ByaXRlUG9zaXRpb24ueTtcblxuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGVdID0gc3ByaXRlUG9zaXRpb24ueDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICsgMV0gPSBzcHJpdGVQb3NpdGlvbi55O1xuXG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDJdID0gc3ByaXRlUG9zaXRpb24ueDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMiArIDFdID0gc3ByaXRlUG9zaXRpb24ueTtcblxuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzXSA9IHNwcml0ZVBvc2l0aW9uLng7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDMgKyAxXSA9IHNwcml0ZVBvc2l0aW9uLnk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHN0cmlkZSAqIDQ7XG4gICAgfVxuXG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4ge0FycmF5fSB0aGUgYXJyYXkgb2YgZGlzcGxheSBvYmplY3RzIHRvIHJlbmRlclxuICogQHBhcmFtIHN0YXJ0SW5kZXgge251bWJlcn0gdGhlIGluZGV4IHRvIHN0YXJ0IGZyb20gaW4gdGhlIGNoaWxkcmVuIGFycmF5XG4gKiBAcGFyYW0gYW1vdW50IHtudW1iZXJ9IHRoZSBhbW91bnQgb2YgY2hpbGRyZW4gdGhhdCB3aWxsIGhhdmUgdGhlaXIgcm90YXRpb24gdXBsb2FkZWRcbiAqIEBwYXJhbSBhcnJheSB7QXJyYXl9XG4gKiBAcGFyYW0gc3RyaWRlIHtudW1iZXJ9XG4gKiBAcGFyYW0gb2Zmc2V0IHtudW1iZXJ9XG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLnVwbG9hZFJvdGF0aW9uID0gZnVuY3Rpb24gKGNoaWxkcmVuLHN0YXJ0SW5kZXgsIGFtb3VudCwgYXJyYXksIHN0cmlkZSwgb2Zmc2V0KVxue1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50OyBpKyspXG4gICAge1xuICAgICAgICB2YXIgc3ByaXRlUm90YXRpb24gPSBjaGlsZHJlbltzdGFydEluZGV4ICsgaV0ucm90YXRpb247XG5cblxuICAgICAgICBhcnJheVtvZmZzZXRdID0gc3ByaXRlUm90YXRpb247XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZV0gPSBzcHJpdGVSb3RhdGlvbjtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMl0gPSBzcHJpdGVSb3RhdGlvbjtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogM10gPSBzcHJpdGVSb3RhdGlvbjtcblxuICAgICAgICBvZmZzZXQgKz0gc3RyaWRlICogNDtcbiAgICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4ge0FycmF5fSB0aGUgYXJyYXkgb2YgZGlzcGxheSBvYmplY3RzIHRvIHJlbmRlclxuICogQHBhcmFtIHN0YXJ0SW5kZXgge251bWJlcn0gdGhlIGluZGV4IHRvIHN0YXJ0IGZyb20gaW4gdGhlIGNoaWxkcmVuIGFycmF5XG4gKiBAcGFyYW0gYW1vdW50IHtudW1iZXJ9IHRoZSBhbW91bnQgb2YgY2hpbGRyZW4gdGhhdCB3aWxsIGhhdmUgdGhlaXIgVXZzIHVwbG9hZGVkXG4gKiBAcGFyYW0gYXJyYXkge0FycmF5fVxuICogQHBhcmFtIHN0cmlkZSB7bnVtYmVyfVxuICogQHBhcmFtIG9mZnNldCB7bnVtYmVyfVxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS51cGxvYWRVdnMgPSBmdW5jdGlvbiAoY2hpbGRyZW4sc3RhcnRJbmRleCwgYW1vdW50LCBhcnJheSwgc3RyaWRlLCBvZmZzZXQpXG57XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciB0ZXh0dXJlVXZzID0gY2hpbGRyZW5bc3RhcnRJbmRleCArIGldLl90ZXh0dXJlLl91dnM7XG5cbiAgICAgICAgaWYgKHRleHR1cmVVdnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFycmF5W29mZnNldF0gPSB0ZXh0dXJlVXZzLngwO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSB0ZXh0dXJlVXZzLnkwO1xuXG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGVdID0gdGV4dHVyZVV2cy54MTtcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSArIDFdID0gdGV4dHVyZVV2cy55MTtcblxuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMl0gPSB0ZXh0dXJlVXZzLngyO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMiArIDFdID0gdGV4dHVyZVV2cy55MjtcblxuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogM10gPSB0ZXh0dXJlVXZzLngzO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMyArIDFdID0gdGV4dHVyZVV2cy55MztcblxuICAgICAgICAgICAgb2Zmc2V0ICs9IHN0cmlkZSAqIDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvL1RPRE8geW91IGtub3cgdGhpcyBjYW4gYmUgZWFzaWVyIVxuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0XSA9IDA7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyAxXSA9IDA7XG5cbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZV0gPSAwO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICsgMV0gPSAwO1xuXG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyXSA9IDA7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyICsgMV0gPSAwO1xuXG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzXSA9IDA7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzICsgMV0gPSAwO1xuXG4gICAgICAgICAgICBvZmZzZXQgKz0gc3RyaWRlICogNDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjaGlsZHJlbiB7QXJyYXl9IHRoZSBhcnJheSBvZiBkaXNwbGF5IG9iamVjdHMgdG8gcmVuZGVyXG4gKiBAcGFyYW0gc3RhcnRJbmRleCB7bnVtYmVyfSB0aGUgaW5kZXggdG8gc3RhcnQgZnJvbSBpbiB0aGUgY2hpbGRyZW4gYXJyYXlcbiAqIEBwYXJhbSBhbW91bnQge251bWJlcn0gdGhlIGFtb3VudCBvZiBjaGlsZHJlbiB0aGF0IHdpbGwgaGF2ZSB0aGVpciBhbHBoYSB1cGxvYWRlZFxuICogQHBhcmFtIGFycmF5IHtBcnJheX1cbiAqIEBwYXJhbSBzdHJpZGUge251bWJlcn1cbiAqIEBwYXJhbSBvZmZzZXQge251bWJlcn1cbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUudXBsb2FkQWxwaGEgPSBmdW5jdGlvbiAoY2hpbGRyZW4sc3RhcnRJbmRleCwgYW1vdW50LCBhcnJheSwgc3RyaWRlLCBvZmZzZXQpXG57XG4gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50OyBpKyspXG4gICAgIHtcbiAgICAgICAgdmFyIHNwcml0ZUFscGhhID0gY2hpbGRyZW5bc3RhcnRJbmRleCArIGldLmFscGhhO1xuXG4gICAgICAgIGFycmF5W29mZnNldF0gPSBzcHJpdGVBbHBoYTtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlXSA9IHNwcml0ZUFscGhhO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyXSA9IHNwcml0ZUFscGhhO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzXSA9IHNwcml0ZUFscGhhO1xuXG4gICAgICAgIG9mZnNldCArPSBzdHJpZGUgKiA0O1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgUGFydGljbGUuXG4gKlxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcblxuICAgIHRoaXMuc2hhZGVyLmRlc3Ryb3koKTtcblxuICAgIC8vVE9ETyBpbXBsZW1lbnQgdGhpcyFcbn07XG4iLCJ2YXIgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1RleHR1cmVTaGFkZXInKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIFRleHR1cmVTaGFkZXJcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gUGFydGljbGVTaGFkZXIoc2hhZGVyTWFuYWdlcilcbntcbiAgICBUZXh0dXJlU2hhZGVyLmNhbGwodGhpcyxcbiAgICAgICAgc2hhZGVyTWFuYWdlcixcbiAgICAgICAgLy8gdmVydGV4IHNoYWRlclxuICAgICAgICBbXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uOycsXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDsnLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSBmbG9hdCBhQ29sb3I7JyxcblxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFQb3NpdGlvbkNvb3JkOycsXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVNjYWxlOycsXG4gICAgICAgICAgICAnYXR0cmlidXRlIGZsb2F0IGFSb3RhdGlvbjsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgICAgICAgICAndmFyeWluZyBmbG9hdCB2Q29sb3I7JyxcblxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKXsnLFxuICAgICAgICAgICAgJyAgIHZlYzIgdiA9IGFWZXJ0ZXhQb3NpdGlvbjsnLFxuXG4gICAgICAgICAgICAnICAgdi54ID0gKGFWZXJ0ZXhQb3NpdGlvbi54KSAqIGNvcyhhUm90YXRpb24pIC0gKGFWZXJ0ZXhQb3NpdGlvbi55KSAqIHNpbihhUm90YXRpb24pOycsXG4gICAgICAgICAgICAnICAgdi55ID0gKGFWZXJ0ZXhQb3NpdGlvbi54KSAqIHNpbihhUm90YXRpb24pICsgKGFWZXJ0ZXhQb3NpdGlvbi55KSAqIGNvcyhhUm90YXRpb24pOycsXG4gICAgICAgICAgICAnICAgdiA9IHYgKyBhUG9zaXRpb25Db29yZDsnLFxuXG4gICAgICAgICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdmVjMyh2LCAxLjApKS54eSwgMC4wLCAxLjApOycsXG5cbiAgICAgICAgICAgICcgICB2VGV4dHVyZUNvb3JkID0gYVRleHR1cmVDb29yZDsnLFxuICAgICAgICAgICAgJyAgIHZDb2xvciA9IGFDb2xvcjsnLFxuICAgICAgICAgICAgJ30nXG4gICAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAgIC8vIGhlbGxvXG4gICAgICAgICBbXG4gICAgICAgICAgICAncHJlY2lzaW9uIGxvd3AgZmxvYXQ7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgICAgICAgICAndmFyeWluZyBmbG9hdCB2Q29sb3I7JyxcblxuICAgICAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCl7JyxcbiAgICAgICAgICAgICcgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpICogdkNvbG9yIDsnLFxuICAgICAgICAgICAgJ30nXG4gICAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAgIC8vIGN1c3RvbSB1bmlmb3Jtc1xuICAgICAgICBudWxsLFxuICAgICAgICAvLyBjdXN0b20gYXR0cmlidXRlc1xuICAgICAgICB7XG4gICAgICAgICAgICBhUG9zaXRpb25Db29yZDogMCxcbiAgICAgICAgICAgLy8gYVNjYWxlOiAgICAgICAgIDAsXG4gICAgICAgICAgICBhUm90YXRpb246ICAgICAgMFxuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFRFTVAgSEFDS1xuXG59XG5cblBhcnRpY2xlU2hhZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVGV4dHVyZVNoYWRlci5wcm90b3R5cGUpO1xuUGFydGljbGVTaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFydGljbGVTaGFkZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVTaGFkZXI7XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBDYW52YXNSZW5kZXJlciBkcmF3cyB0aGUgc2NlbmUgYW5kIGFsbCBpdHMgY29udGVudCBvbnRvIGEgMmQgY2FudmFzLiBUaGlzIHJlbmRlcmVyIHNob3VsZCBiZSB1c2VkIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHdlYkdMLlxuICogRG9uJ3QgZm9yZ2V0IHRvIGFkZCB0aGUgQ2FudmFzUmVuZGVyZXIudmlldyB0byB5b3VyIERPTSBvciB5b3Ugd2lsbCBub3Qgc2VlIGFueXRoaW5nIDopXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHN5c3RlbSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgc3lzdGVtIHRoaXMgcmVuZGVyZXIgaXMgZm9yLlxuICogQHBhcmFtIFt3aWR0aD04MDBdIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqIEBwYXJhbSBbaGVpZ2h0PTYwMF0ge251bWJlcn0gdGhlIGhlaWdodCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqIEBwYXJhbSBbb3B0aW9uc10ge29iamVjdH0gVGhlIG9wdGlvbmFsIHJlbmRlcmVyIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBbb3B0aW9ucy52aWV3XSB7SFRNTENhbnZhc0VsZW1lbnR9IHRoZSBjYW52YXMgdG8gdXNlIGFzIGEgdmlldywgb3B0aW9uYWxcbiAqIEBwYXJhbSBbb3B0aW9ucy50cmFuc3BhcmVudD1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyB0cmFuc3BhcmVudCwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtvcHRpb25zLmF1dG9SZXNpemU9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgYXV0b21hdGljYWxseSByZXNpemVkLCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0gW29wdGlvbnMuYW50aWFsaWFzPWZhbHNlXSB7Ym9vbGVhbn0gc2V0cyBhbnRpYWxpYXMgKG9ubHkgYXBwbGljYWJsZSBpbiBjaHJvbWUgYXQgdGhlIG1vbWVudClcbiAqIEBwYXJhbSBbb3B0aW9ucy5yZXNvbHV0aW9uPTFdIHtudW1iZXJ9IHRoZSByZXNvbHV0aW9uIG9mIHRoZSByZW5kZXJlciByZXRpbmEgd291bGQgYmUgMlxuICogQHBhcmFtIFtvcHRpb25zLmNsZWFyQmVmb3JlUmVuZGVyPXRydWVdIHtib29sZWFufSBUaGlzIHNldHMgaWYgdGhlIENhbnZhc1JlbmRlcmVyIHdpbGwgY2xlYXIgdGhlIGNhbnZhcyBvclxuICogICAgICBub3QgYmVmb3JlIHRoZSBuZXcgcmVuZGVyIHBhc3MuXG4gKi9cbmZ1bmN0aW9uIFN5c3RlbVJlbmRlcmVyKHN5c3RlbSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucylcbntcbiAgICB1dGlscy5zYXlIZWxsbyhzeXN0ZW0pO1xuXG4gICAgLy8gcHJlcGFyZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpIGluIENPTlNULkRFRkFVTFRfUkVOREVSX09QVElPTlMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tpXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1tpXSA9IENPTlNULkRFRkFVTFRfUkVOREVSX09QVElPTlNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgb3B0aW9ucyA9IENPTlNULkRFRkFVTFRfUkVOREVSX09QVElPTlM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7UkVOREVSRVJfVFlQRX1cbiAgICAgKiBAZGVmYXVsdCBDT05ULlJFTkRFUkVSX1RZUEUuVU5LTk9XTlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IENPTlNULlJFTkRFUkVSX1RZUEUuVU5LTk9XTjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIHZpZXdcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCA4MDBcbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgODAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY2FudmFzIHZpZXdcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCA2MDBcbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FudmFzIGVsZW1lbnQgdGhhdCBldmVyeXRoaW5nIGlzIGRyYXduIHRvXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtIVE1MQ2FudmFzRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLnZpZXcgPSBvcHRpb25zLnZpZXcgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gb3B0aW9ucy5yZXNvbHV0aW9uO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcmVuZGVyIHZpZXcgaXMgdHJhbnNwYXJlbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy50cmFuc3BhcmVudCA9IG9wdGlvbnMudHJhbnNwYXJlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSByZW5kZXIgdmlldyBzaG91bGQgYmUgcmVzaXplZCBhdXRvbWF0aWNhbGx5XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b1Jlc2l6ZSA9IG9wdGlvbnMuYXV0b1Jlc2l6ZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRyYWNrcyB0aGUgYmxlbmQgbW9kZXMgdXNlZnVsIGZvciB0aGlzIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7b2JqZWN0PHN0cmluZywgbWl4ZWQ+fVxuICAgICAqL1xuICAgIHRoaXMuYmxlbmRNb2RlcyA9IG51bGw7XG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFRPRE86IENvbWJpbmUgdGhlc2UhXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHByZXNlcnZlRHJhd2luZ0J1ZmZlciBmbGFnIGFmZmVjdHMgd2hldGhlciBvciBub3QgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdGVuY2lsIGJ1ZmZlciBpcyByZXRhaW5lZCBhZnRlciByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHJlc2VydmVEcmF3aW5nQnVmZmVyID0gb3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHNldHMgaWYgdGhlIENhbnZhc1JlbmRlcmVyIHdpbGwgY2xlYXIgdGhlIGNhbnZhcyBvciBub3QgYmVmb3JlIHRoZSBuZXcgcmVuZGVyIHBhc3MuXG4gICAgICogSWYgdGhlIHNjZW5lIGlzIE5PVCB0cmFuc3BhcmVudCBQaXhpIHdpbGwgdXNlIGEgY2FudmFzIHNpemVkIGZpbGxSZWN0IG9wZXJhdGlvbiBldmVyeSBmcmFtZSB0byBzZXQgdGhlIGNhbnZhcyBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgICAqIElmIHRoZSBzY2VuZSBpcyB0cmFuc3BhcmVudCBQaXhpIHdpbGwgdXNlIGNsZWFyUmVjdCB0byBjbGVhciB0aGUgY2FudmFzIGV2ZXJ5IGZyYW1lLlxuICAgICAqIERpc2FibGUgdGhpcyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UuIEZvciBleGFtcGxlIGlmIHlvdXIgZ2FtZSBoYXMgYSBjYW52YXMgZmlsbGluZyBiYWNrZ3JvdW5kIGltYWdlIHlvdSBvZnRlbiBkb24ndCBuZWVkIHRoaXMgc2V0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdFxuICAgICAqL1xuICAgIHRoaXMuY2xlYXJCZWZvcmVSZW5kZXIgPSBvcHRpb25zLmNsZWFyQmVmb3JlUmVuZGVyO1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8qKlxuICAgICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIGFzIGEgbnVtYmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gMHhGRkZGRkY7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFja2dyb3VuZCBjb2xvciBhcyBhbiBbUiwgRywgQl0gYXJyYXkuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvclJnYiA9IFsxLCAxLCAxXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIGFzIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFja2dyb3VuZENvbG9yU3RyaW5nID0gJyMwMDAwMDAnO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCB0aGlzLl9iYWNrZ3JvdW5kQ29sb3I7IC8vIHJ1biBiZyBjb2xvciBzZXR0ZXJcblxuICAgIC8qKlxuICAgICAqIFRoaXMgdGVtcG9yYXJ5IGRpc3BsYXkgb2JqZWN0IHVzZWQgYXMgdGhlIHBhcmVudCBvZiB0aGUgY3VycmVudGx5IGJlaW5nIHJlbmRlcmVkIGl0ZW1cbiAgICAgKiBAbWVtYmVyIHtEaXNwbGF5T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcERpc3BsYXlPYmplY3RQYXJlbnQgPSB7d29ybGRUcmFuc2Zvcm06bmV3IG1hdGguTWF0cml4KCksIHdvcmxkQWxwaGE6MSwgY2hpbGRyZW46W119O1xuXG4gICAgLy9cbiAgICB0aGlzLl9sYXN0T2JqZWN0UmVuZGVyZWQgPSB0aGlzLl90ZW1wRGlzcGxheU9iamVjdFBhcmVudDtcbn1cblxuLy8gY29uc3RydWN0b3JcblN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5c3RlbVJlbmRlcmVyO1xubW9kdWxlLmV4cG9ydHMgPSBTeXN0ZW1SZW5kZXJlcjtcblxudXRpbHMuZXZlbnRUYXJnZXQubWl4aW4oU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogVGhlIGJhY2tncm91bmQgY29sb3IgdG8gZmlsbCBpZiBub3QgdHJhbnNwYXJlbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3lzdGVtUmVuZGVyZXIjXG4gICAgICovXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IHZhbDtcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvclN0cmluZyA9IHV0aWxzLmhleDJzdHJpbmcodmFsKTtcbiAgICAgICAgICAgIHV0aWxzLmhleDJyZ2IodmFsLCB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JSZ2IpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogUmVzaXplcyB0aGUgY2FudmFzIHZpZXcgdG8gdGhlIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0XG4gKlxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IHRoZSBuZXcgd2lkdGggb2YgdGhlIGNhbnZhcyB2aWV3XG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IHRoZSBuZXcgaGVpZ2h0IG9mIHRoZSBjYW52YXMgdmlld1xuICovXG5TeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGggKiB0aGlzLnJlc29sdXRpb247XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiB0aGlzLnJlc29sdXRpb247XG5cbiAgICB0aGlzLnZpZXcud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIHRoaXMudmlldy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgIGlmICh0aGlzLmF1dG9SZXNpemUpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoIC8gdGhpcy5yZXNvbHV0aW9uICsgJ3B4JztcbiAgICAgICAgdGhpcy52aWV3LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0IC8gdGhpcy5yZXNvbHV0aW9uICsgJ3B4JztcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgZXZlcnl0aGluZyBmcm9tIHRoZSByZW5kZXJlciBhbmQgb3B0aW9uYWxseSByZW1vdmVzIHRoZSBDYW52YXMgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIFtyZW1vdmVWaWV3PWZhbHNlXSB7Ym9vbGVhbn0gUmVtb3ZlcyB0aGUgQ2FudmFzIGVsZW1lbnQgZnJvbSB0aGUgRE9NLlxuICovXG5TeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChyZW1vdmVWaWV3KSB7XG4gICAgaWYgKHJlbW92ZVZpZXcgJiYgdGhpcy52aWV3LnBhcmVudClcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy52aWV3KTtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5SRU5ERVJFUl9UWVBFLlVOS05PV047XG5cbiAgICB0aGlzLndpZHRoID0gMDtcbiAgICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgICB0aGlzLnZpZXcgPSBudWxsO1xuXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gMDtcblxuICAgIHRoaXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcblxuICAgIHRoaXMuYXV0b1Jlc2l6ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5ibGVuZE1vZGVzID0gbnVsbDtcblxuICAgIHRoaXMucHJlc2VydmVEcmF3aW5nQnVmZmVyID0gZmFsc2U7XG4gICAgdGhpcy5jbGVhckJlZm9yZVJlbmRlciA9IGZhbHNlO1xuXG4gICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gMDtcbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JSZ2IgPSBudWxsO1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvclN0cmluZyA9IG51bGw7XG59O1xuIiwidmFyIFN5c3RlbVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vU3lzdGVtUmVuZGVyZXInKSxcbiAgICBDYW52YXNNYXNrTWFuYWdlciA9IHJlcXVpcmUoJy4vdXRpbHMvQ2FudmFzTWFza01hbmFnZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyksXG4gICAgbWF0aCA9IHJlcXVpcmUoJy4uLy4uL21hdGgnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogVGhlIENhbnZhc1JlbmRlcmVyIGRyYXdzIHRoZSBzY2VuZSBhbmQgYWxsIGl0cyBjb250ZW50IG9udG8gYSAyZCBjYW52YXMuIFRoaXMgcmVuZGVyZXIgc2hvdWxkIGJlIHVzZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgd2ViR0wuXG4gKiBEb24ndCBmb3JnZXQgdG8gYWRkIHRoZSBDYW52YXNSZW5kZXJlci52aWV3IHRvIHlvdXIgRE9NIG9yIHlvdSB3aWxsIG5vdCBzZWUgYW55dGhpbmcgOilcbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAZXh0ZW5kcyBTeXN0ZW1SZW5kZXJlclxuICogQHBhcmFtIFt3aWR0aD04MDBdIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqIEBwYXJhbSBbaGVpZ2h0PTYwMF0ge251bWJlcn0gdGhlIGhlaWdodCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqIEBwYXJhbSBbb3B0aW9uc10ge29iamVjdH0gVGhlIG9wdGlvbmFsIHJlbmRlcmVyIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBbb3B0aW9ucy52aWV3XSB7SFRNTENhbnZhc0VsZW1lbnR9IHRoZSBjYW52YXMgdG8gdXNlIGFzIGEgdmlldywgb3B0aW9uYWxcbiAqIEBwYXJhbSBbb3B0aW9ucy50cmFuc3BhcmVudD1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyB0cmFuc3BhcmVudCwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtvcHRpb25zLmF1dG9SZXNpemU9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgYXV0b21hdGljYWxseSByZXNpemVkLCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0gW29wdGlvbnMuYW50aWFsaWFzPWZhbHNlXSB7Ym9vbGVhbn0gc2V0cyBhbnRpYWxpYXMgKG9ubHkgYXBwbGljYWJsZSBpbiBjaHJvbWUgYXQgdGhlIG1vbWVudClcbiAqIEBwYXJhbSBbb3B0aW9ucy5yZXNvbHV0aW9uPTFdIHtudW1iZXJ9IHRoZSByZXNvbHV0aW9uIG9mIHRoZSByZW5kZXJlciByZXRpbmEgd291bGQgYmUgMlxuICogQHBhcmFtIFtvcHRpb25zLmNsZWFyQmVmb3JlUmVuZGVyPXRydWVdIHtib29sZWFufSBUaGlzIHNldHMgaWYgdGhlIENhbnZhc1JlbmRlcmVyIHdpbGwgY2xlYXIgdGhlIGNhbnZhcyBvclxuICogICAgICBub3QgYmVmb3JlIHRoZSBuZXcgcmVuZGVyIHBhc3MuXG4gKi9cbmZ1bmN0aW9uIENhbnZhc1JlbmRlcmVyKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpXG57XG4gICAgU3lzdGVtUmVuZGVyZXIuY2FsbCh0aGlzLCAnQ2FudmFzJywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5SRU5ERVJFUl9UWVBFLkNBTlZBUztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYW52YXMgMmQgY29udGV4dCB0aGF0IGV2ZXJ5dGhpbmcgaXMgZHJhd24gd2l0aC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLnZpZXcuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiB0aGlzLnRyYW5zcGFyZW50IH0pO1xuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBmbGFnIGNvbnRyb2xsaW5nIGNhbnZhcyByZWZyZXNoLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZnJlc2ggPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSW5zdGFuY2Ugb2YgYSBDYW52YXNNYXNrTWFuYWdlciwgaGFuZGxlcyBtYXNraW5nIHdoZW4gdXNpbmcgdGhlIGNhbnZhcyByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0NhbnZhc01hc2tNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubWFza01hbmFnZXIgPSBuZXcgQ2FudmFzTWFza01hbmFnZXIoKTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUgUGl4aSB3aWxsIE1hdGguZmxvb3IoKSB4L3kgdmFsdWVzIHdoZW4gcmVuZGVyaW5nLCBzdG9wcGluZyBwaXhlbCBpbnRlcnBvbGF0aW9uLlxuICAgICAqIEhhbmR5IGZvciBjcmlzcCBwaXhlbCBhcnQgYW5kIHNwZWVkIG9uIGxlZ2FjeSBkZXZpY2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJvdW5kUGl4ZWxzID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGFjdGl2ZSBzY2FsZSBtb2RlIGZvciB0aGlzIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7U0NBTEVfTU9ERX1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRTY2FsZU1vZGUgPSBDT05TVC5TQ0FMRV9NT0RFUy5ERUZBVUxUO1xuXG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBhY3RpdmUgYmxlbmQgbW9kZSBmb3IgdGhpcyByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1NDQUxFX01PREV9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50QmxlbmRNb2RlID0gQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbnZhcyBwcm9wZXJ0eSB1c2VkIHRvIHNldCB0aGUgY2FudmFzIHNtb290aGluZyBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNtb290aFByb3BlcnR5ID0gJ2ltYWdlU21vb3RoaW5nRW5hYmxlZCc7XG5cbiAgICBpZiAoIXRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zbW9vdGhQcm9wZXJ0eSA9ICd3ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udGV4dC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoUHJvcGVydHkgPSAnbW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRleHQub0ltYWdlU21vb3RoaW5nRW5hYmxlZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zbW9vdGhQcm9wZXJ0eSA9ICdvSW1hZ2VTbW9vdGhpbmdFbmFibGVkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRleHQubXNJbWFnZVNtb290aGluZ0VuYWJsZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoUHJvcGVydHkgPSAnbXNJbWFnZVNtb290aGluZ0VuYWJsZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbml0UGx1Z2lucygpO1xuXG4gICAgdGhpcy5fbWFwQmxlbmRNb2RlcygpO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyB0ZW1wb3JhcnkgZGlzcGxheSBvYmplY3QgdXNlZCBhcyB0aGUgcGFyZW50IG9mIHRoZSBjdXJyZW50bHkgYmVpbmcgcmVuZGVyZWQgaXRlbVxuICAgICAqXG4gICAgICogQG1lbWJlciB7RGlzcGxheU9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBEaXNwbGF5T2JqZWN0UGFyZW50ID0ge1xuICAgICAgICB3b3JsZFRyYW5zZm9ybTogbmV3IG1hdGguTWF0cml4KCksXG4gICAgICAgIHdvcmxkQWxwaGE6IDFcbiAgICB9O1xuXG5cbiAgICB0aGlzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbn1cblxuLy8gY29uc3RydWN0b3JcbkNhbnZhc1JlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlKTtcbkNhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENhbnZhc1JlbmRlcmVyO1xubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNSZW5kZXJlcjtcbnV0aWxzLnBsdWdpblRhcmdldC5taXhpbihDYW52YXNSZW5kZXJlcik7XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHRvIHRoaXMgY2FudmFzIHZpZXdcbiAqXG4gKiBAcGFyYW0gb2JqZWN0IHtEaXNwbGF5T2JqZWN0fSB0aGUgb2JqZWN0IHRvIGJlIHJlbmRlcmVkXG4gKi9cbkNhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAob2JqZWN0KVxue1xuICAgIHZhciBjYWNoZVBhcmVudCA9IG9iamVjdC5wYXJlbnQ7XG5cbiAgICB0aGlzLl9sYXN0T2JqZWN0UmVuZGVyZWQgPSBvYmplY3Q7XG5cbiAgICBvYmplY3QucGFyZW50ID0gdGhpcy5fdGVtcERpc3BsYXlPYmplY3RQYXJlbnQ7XG5cbiAgICAvLyB1cGRhdGUgdGhlIHNjZW5lIGdyYXBoXG4gICAgb2JqZWN0LnVwZGF0ZVRyYW5zZm9ybSgpO1xuXG4gICAgb2JqZWN0LnBhcmVudCA9IGNhY2hlUGFyZW50O1xuXG4gICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcblxuICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG5cbiAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSBDT05TVC5CTEVORF9NT0RFUy5OT1JNQUw7XG4gICAgdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5OT1JNQUxdO1xuXG4gICAgaWYgKG5hdmlnYXRvci5pc0NvY29vbkpTICYmIHRoaXMudmlldy5zY3JlZW5jYW52YXMpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xlYXJCZWZvcmVSZW5kZXIpXG4gICAge1xuICAgICAgICBpZiAodGhpcy50cmFuc3BhcmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fYmFja2dyb3VuZENvbG9yU3RyaW5nO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGggLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckRpc3BsYXlPYmplY3Qob2JqZWN0LCB0aGlzLmNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGV2ZXJ5dGhpbmcgZnJvbSB0aGUgcmVuZGVyZXIgYW5kIG9wdGlvbmFsbHkgcmVtb3ZlcyB0aGUgQ2FudmFzIERPTSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBbcmVtb3ZlVmlldz1mYWxzZV0ge2Jvb2xlYW59IFJlbW92ZXMgdGhlIENhbnZhcyBlbGVtZW50IGZyb20gdGhlIERPTS5cbiAqL1xuQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVtb3ZlVmlldylcbntcbiAgICB0aGlzLmRlc3Ryb3lQbHVnaW5zKCk7XG5cbiAgICAvLyBjYWxsIHRoZSBiYXNlIGRlc3Ryb3lcbiAgICBTeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMsIHJlbW92ZVZpZXcpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcblxuICAgIHRoaXMucmVmcmVzaCA9IHRydWU7XG5cbiAgICB0aGlzLm1hc2tNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICB0aGlzLm1hc2tNYW5hZ2VyID0gbnVsbDtcblxuICAgIHRoaXMucm91bmRQaXhlbHMgPSBmYWxzZTtcblxuICAgIHRoaXMuY3VycmVudFNjYWxlTW9kZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50QmxlbmRNb2RlID0gMDtcblxuICAgIHRoaXMuc21vb3RoUHJvcGVydHkgPSBudWxsO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgZGlzcGxheSBvYmplY3RcbiAqXG4gKiBAcGFyYW0gZGlzcGxheU9iamVjdCB7RGlzcGxheU9iamVjdH0gVGhlIGRpc3BsYXlPYmplY3QgdG8gcmVuZGVyXG4gKiBAcHJpdmF0ZVxuICovXG5DYW52YXNSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyRGlzcGxheU9iamVjdCA9IGZ1bmN0aW9uIChkaXNwbGF5T2JqZWN0LCBjb250ZXh0KVxue1xuICAgIHZhciB0ZW1wQ29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgZGlzcGxheU9iamVjdC5yZW5kZXJDYW52YXModGhpcyk7XG4gICAgdGhpcy5jb250ZXh0ID0gdGVtcENvbnRleHQ7XG59O1xuXG4vKipcbiAqIE1hcHMgUGl4aSBibGVuZCBtb2RlcyB0byBjYW52YXMgYmxlbmQgbW9kZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlLl9tYXBCbGVuZE1vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAoIXRoaXMuYmxlbmRNb2RlcylcbiAgICB7XG4gICAgICAgIHRoaXMuYmxlbmRNb2RlcyA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5jYW5Vc2VOZXdDYW52YXNCbGVuZE1vZGVzKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5OT1JNQUxdICAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQUREXSAgICAgICAgICAgPSAnbGlnaHRlcic7IC8vSVMgVEhJUyBPSz8/P1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk1VTFRJUExZXSAgICAgID0gJ211bHRpcGx5JztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TQ1JFRU5dICAgICAgICA9ICdzY3JlZW4nO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk9WRVJMQVldICAgICAgID0gJ292ZXJsYXknO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkRBUktFTl0gICAgICAgID0gJ2Rhcmtlbic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTElHSFRFTl0gICAgICAgPSAnbGlnaHRlbic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JfRE9ER0VdICAgPSAnY29sb3ItZG9kZ2UnO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SX0JVUk5dICAgID0gJ2NvbG9yLWJ1cm4nO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkhBUkRfTElHSFRdICAgID0gJ2hhcmQtbGlnaHQnO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNPRlRfTElHSFRdICAgID0gJ3NvZnQtbGlnaHQnO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkRJRkZFUkVOQ0VdICAgID0gJ2RpZmZlcmVuY2UnO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkVYQ0xVU0lPTl0gICAgID0gJ2V4Y2x1c2lvbic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuSFVFXSAgICAgICAgICAgPSAnaHVlJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TQVRVUkFUSU9OXSAgICA9ICdzYXR1cmF0aW9uJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl0gICAgICAgICA9ICdjb2xvcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTFVNSU5PU0lUWV0gICAgPSAnbHVtaW5vc2l0eSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgY29vbCBuZXcgYmxlbmQgbW9kZXMgaW4gY2FudmFzICdjb3VnaCcgaWUgJ2NvdWdoJ1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk5PUk1BTF0gICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5BRERdICAgICAgICAgICA9ICdsaWdodGVyJzsgLy9JUyBUSElTIE9LPz8/XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTVVMVElQTFldICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNDUkVFTl0gICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5PVkVSTEFZXSAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuREFSS0VOXSAgICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkxJR0hURU5dICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl9ET0RHRV0gICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JfQlVSTl0gICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkhBUkRfTElHSFRdICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TT0ZUX0xJR0hUXSAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuRElGRkVSRU5DRV0gICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkVYQ0xVU0lPTl0gICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5IVUVdICAgICAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU0FUVVJBVElPTl0gICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SXSAgICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5MVU1JTk9TSVRZXSAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgQ2FudmFzIGVsZW1lbnQgb2YgdGhlIGdpdmVuIHNpemUuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IHRoZSB3aWR0aCBmb3IgdGhlIG5ld2x5IGNyZWF0ZWQgY2FudmFzXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IHRoZSBoZWlnaHQgZm9yIHRoZSBuZXdseSBjcmVhdGVkIGNhbnZhc1xuICovXG5mdW5jdGlvbiBDYW52YXNCdWZmZXIod2lkdGgsIGhlaWdodClcbntcbiAgICAvKipcbiAgICAgKiBUaGUgQ2FudmFzIG9iamVjdCB0aGF0IGJlbG9uZ3MgdG8gdGhpcyBDYW52YXNCdWZmZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtIVE1MQ2FudmFzRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgLyoqXG4gICAgICogQSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgb2JqZWN0IHJlcHJlc2VudGluZyBhIHR3by1kaW1lbnNpb25hbCByZW5kZXJpbmcgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59XG5cbkNhbnZhc0J1ZmZlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDYW52YXNCdWZmZXI7XG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0J1ZmZlcjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2FudmFzQnVmZmVyLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIGJ1ZmZlciBpbiBwaXhlbHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENhbnZhc0J1ZmZlciNcbiAgICAgKi9cbiAgICB3aWR0aDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY2FudmFzIGJ1ZmZlciBpbiBwaXhlbHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENhbnZhc0J1ZmZlciNcbiAgICAgKi9cbiAgICBoZWlnaHQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIENsZWFycyB0aGUgY2FudmFzIHRoYXQgd2FzIGNyZWF0ZWQgYnkgdGhlIENhbnZhc0J1ZmZlciBjbGFzcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5DYW52YXNCdWZmZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbn07XG5cbi8qKlxuICogUmVzaXplcyB0aGUgY2FudmFzIHRvIHRoZSBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodC5cbiAqXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIG5ldyB3aWR0aCBvZiB0aGUgY2FudmFzXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IHRoZSBuZXcgaGVpZ2h0IG9mIHRoZSBjYW52YXNcbiAqL1xuQ2FudmFzQnVmZmVyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodClcbntcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyBjYW52YXMuXG4gKlxuICovXG5DYW52YXNCdWZmZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5jYW52YXMgPSBudWxsO1xufTtcbiIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogQSBzZXQgb2YgZnVuY3Rpb25zIHVzZWQgYnkgdGhlIGNhbnZhcyByZW5kZXJlciB0byBkcmF3IHRoZSBwcmltaXRpdmUgZ3JhcGhpY3MgZGF0YS5cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKi9cbnZhciBDYW52YXNHcmFwaGljcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8qXG4gKiBSZW5kZXJzIGEgR3JhcGhpY3Mgb2JqZWN0IHRvIGEgY2FudmFzLlxuICpcbiAqIEBwYXJhbSBncmFwaGljcyB7R3JhcGhpY3N9IHRoZSBhY3R1YWwgZ3JhcGhpY3Mgb2JqZWN0IHRvIHJlbmRlclxuICogQHBhcmFtIGNvbnRleHQge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gdGhlIDJkIGRyYXdpbmcgbWV0aG9kIG9mIHRoZSBjYW52YXNcbiAqL1xuQ2FudmFzR3JhcGhpY3MucmVuZGVyR3JhcGhpY3MgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIGNvbnRleHQpXG57XG4gICAgdmFyIHdvcmxkQWxwaGEgPSBncmFwaGljcy53b3JsZEFscGhhO1xuXG4gICAgaWYgKGdyYXBoaWNzLmRpcnR5KVxuICAgIHtcbiAgICAgICAgdGhpcy51cGRhdGVHcmFwaGljc1RpbnQoZ3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5kaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGRhdGEgPSBncmFwaGljcy5ncmFwaGljc0RhdGFbaV07XG4gICAgICAgIHZhciBzaGFwZSA9IGRhdGEuc2hhcGU7XG5cbiAgICAgICAgdmFyIGZpbGxDb2xvciA9IGRhdGEuX2ZpbGxUaW50O1xuICAgICAgICB2YXIgbGluZUNvbG9yID0gZGF0YS5fbGluZVRpbnQ7XG5cbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBkYXRhLmxpbmVXaWR0aDtcblxuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUE9MWSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcblxuICAgICAgICAgICAgdmFyIHBvaW50cyA9IHNoYXBlLnBvaW50cztcblxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9pbnRzWzBdLCBwb2ludHNbMV0pO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqPTE7IGogPCBwb2ludHMubGVuZ3RoLzI7IGorKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhwb2ludHNbaiAqIDJdLCBwb2ludHNbaiAqIDIgKyAxXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaGFwZS5jbG9zZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocG9pbnRzWzBdLCBwb2ludHNbMV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgYW5kIGxhc3QgcG9pbnQgYXJlIHRoZSBzYW1lIGNsb3NlIHRoZSBwYXRoIC0gbXVjaCBuZWF0ZXIgOilcbiAgICAgICAgICAgIGlmIChwb2ludHNbMF0gPT09IHBvaW50c1twb2ludHMubGVuZ3RoLTJdICYmIHBvaW50c1sxXSA9PT0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEuZmlsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5maWxsQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGZpbGxDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxpbmVXaWR0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5saW5lQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggbGluZUNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUkVDVClcbiAgICAgICAge1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5maWxsQ29sb3IgfHwgZGF0YS5maWxsQ29sb3IgPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEuZmlsbEFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBmaWxsQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChzaGFwZS54LCBzaGFwZS55LCBzaGFwZS53aWR0aCwgc2hhcGUuaGVpZ2h0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGluZVdpZHRoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmxpbmVBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBsaW5lQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VSZWN0KHNoYXBlLngsIHNoYXBlLnksIHNoYXBlLndpZHRoLCBzaGFwZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLkNJUkMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFRPRE8gLSBuZWVkIHRvIGJlIFVuZGVmaW5lZCFcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyhzaGFwZS54LCBzaGFwZS55LCBzaGFwZS5yYWRpdXMsMCwyKk1hdGguUEkpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZmlsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5maWxsQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGZpbGxDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxpbmVXaWR0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5saW5lQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggbGluZUNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuRUxJUClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZWxsaXBzZSBjb2RlIHRha2VuIGZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjE3Mjc5OC9ob3ctdG8tZHJhdy1hbi1vdmFsLWluLWh0bWw1LWNhbnZhc1xuXG4gICAgICAgICAgICB2YXIgdyA9IHNoYXBlLndpZHRoICogMjtcbiAgICAgICAgICAgIHZhciBoID0gc2hhcGUuaGVpZ2h0ICogMjtcblxuICAgICAgICAgICAgdmFyIHggPSBzaGFwZS54IC0gdy8yO1xuICAgICAgICAgICAgdmFyIHkgPSBzaGFwZS55IC0gaC8yO1xuXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgICAgICB2YXIga2FwcGEgPSAwLjU1MjI4NDgsXG4gICAgICAgICAgICAgICAgb3ggPSAodyAvIDIpICoga2FwcGEsIC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IGhvcml6b250YWxcbiAgICAgICAgICAgICAgICBveSA9IChoIC8gMikgKiBrYXBwYSwgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgdmVydGljYWxcbiAgICAgICAgICAgICAgICB4ZSA9IHggKyB3LCAgICAgICAgICAgLy8geC1lbmRcbiAgICAgICAgICAgICAgICB5ZSA9IHkgKyBoLCAgICAgICAgICAgLy8geS1lbmRcbiAgICAgICAgICAgICAgICB4bSA9IHggKyB3IC8gMiwgICAgICAgLy8geC1taWRkbGVcbiAgICAgICAgICAgICAgICB5bSA9IHkgKyBoIC8gMjsgICAgICAgLy8geS1taWRkbGVcblxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oeCwgeW0pO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgsIHltIC0gb3ksIHhtIC0gb3gsIHksIHhtLCB5KTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4bSArIG94LCB5LCB4ZSwgeW0gLSBveSwgeGUsIHltKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4ZSwgeW0gKyBveSwgeG0gKyBveCwgeWUsIHhtLCB5ZSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeG0gLSBveCwgeWUsIHgsIHltICsgb3ksIHgsIHltKTtcblxuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZmlsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5maWxsQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGZpbGxDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxpbmVXaWR0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5saW5lQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggbGluZUNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUlJFQylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHJ4ID0gc2hhcGUueDtcbiAgICAgICAgICAgIHZhciByeSA9IHNoYXBlLnk7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gc2hhcGUucmFkaXVzO1xuXG4gICAgICAgICAgICB2YXIgbWF4UmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIHwgMDtcbiAgICAgICAgICAgIHJhZGl1cyA9IHJhZGl1cyA+IG1heFJhZGl1cyA/IG1heFJhZGl1cyA6IHJhZGl1cztcblxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHJ4LCByeSArIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCwgcnkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4LCByeSArIGhlaWdodCwgcnggKyByYWRpdXMsIHJ5ICsgaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4ICsgd2lkdGggLSByYWRpdXMsIHJ5ICsgaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCArIHdpZHRoLCByeSArIGhlaWdodCwgcnggKyB3aWR0aCwgcnkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocnggKyB3aWR0aCwgcnkgKyByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4ICsgd2lkdGgsIHJ5LCByeCArIHdpZHRoIC0gcmFkaXVzLCByeSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCArIHJhZGl1cywgcnkpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4LCByeSwgcngsIHJ5ICsgcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmZpbGxDb2xvciB8fCBkYXRhLmZpbGxDb2xvciA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5maWxsQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGZpbGxDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGluZVdpZHRoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmxpbmVBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBsaW5lQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qXG4gKiBSZW5kZXJzIGEgZ3JhcGhpY3MgbWFza1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfSB0aGUgZ3JhcGhpY3Mgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIGEgbWFza1xuICogQHBhcmFtIGNvbnRleHQge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gdGhlIGNvbnRleHQgMmQgbWV0aG9kIG9mIHRoZSBjYW52YXNcbiAqL1xuQ2FudmFzR3JhcGhpY3MucmVuZGVyR3JhcGhpY3NNYXNrID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBjb250ZXh0KVxue1xuICAgIHZhciBsZW4gPSBncmFwaGljcy5ncmFwaGljc0RhdGEubGVuZ3RoO1xuXG4gICAgaWYgKGxlbiA9PT0gMClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBkYXRhID0gZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhW2ldO1xuICAgICAgICB2YXIgc2hhcGUgPSBkYXRhLnNoYXBlO1xuXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5QT0xZKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHZhciBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHBvaW50c1swXSwgcG9pbnRzWzFdKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaj0xOyBqIDwgcG9pbnRzLmxlbmd0aC8yOyBqKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocG9pbnRzW2ogKiAyXSwgcG9pbnRzW2ogKiAyICsgMV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgYW5kIGxhc3QgcG9pbnQgYXJlIHRoZSBzYW1lIGNsb3NlIHRoZSBwYXRoIC0gbXVjaCBuZWF0ZXIgOilcbiAgICAgICAgICAgIGlmIChwb2ludHNbMF0gPT09IHBvaW50c1twb2ludHMubGVuZ3RoLTJdICYmIHBvaW50c1sxXSA9PT0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJFQ1QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVjdChzaGFwZS54LCBzaGFwZS55LCBzaGFwZS53aWR0aCwgc2hhcGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuQ0lSQylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gVE9ETyAtIG5lZWQgdG8gYmUgVW5kZWZpbmVkIVxuICAgICAgICAgICAgY29udGV4dC5hcmMoc2hhcGUueCwgc2hhcGUueSwgc2hhcGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLkVMSVApXG4gICAgICAgIHtcblxuICAgICAgICAgICAgLy8gZWxsaXBzZSBjb2RlIHRha2VuIGZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjE3Mjc5OC9ob3ctdG8tZHJhdy1hbi1vdmFsLWluLWh0bWw1LWNhbnZhc1xuXG4gICAgICAgICAgICB2YXIgdyA9IHNoYXBlLndpZHRoICogMjtcbiAgICAgICAgICAgIHZhciBoID0gc2hhcGUuaGVpZ2h0ICogMjtcblxuICAgICAgICAgICAgdmFyIHggPSBzaGFwZS54IC0gdy8yO1xuICAgICAgICAgICAgdmFyIHkgPSBzaGFwZS55IC0gaC8yO1xuXG4gICAgICAgICAgICB2YXIga2FwcGEgPSAwLjU1MjI4NDgsXG4gICAgICAgICAgICAgICAgb3ggPSAodyAvIDIpICoga2FwcGEsIC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IGhvcml6b250YWxcbiAgICAgICAgICAgICAgICBveSA9IChoIC8gMikgKiBrYXBwYSwgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgdmVydGljYWxcbiAgICAgICAgICAgICAgICB4ZSA9IHggKyB3LCAgICAgICAgICAgLy8geC1lbmRcbiAgICAgICAgICAgICAgICB5ZSA9IHkgKyBoLCAgICAgICAgICAgLy8geS1lbmRcbiAgICAgICAgICAgICAgICB4bSA9IHggKyB3IC8gMiwgICAgICAgLy8geC1taWRkbGVcbiAgICAgICAgICAgICAgICB5bSA9IHkgKyBoIC8gMjsgICAgICAgLy8geS1taWRkbGVcblxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oeCwgeW0pO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgsIHltIC0gb3ksIHhtIC0gb3gsIHksIHhtLCB5KTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4bSArIG94LCB5LCB4ZSwgeW0gLSBveSwgeGUsIHltKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4ZSwgeW0gKyBveSwgeG0gKyBveCwgeWUsIHhtLCB5ZSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeG0gLSBveCwgeWUsIHgsIHltICsgb3ksIHgsIHltKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUlJFQylcbiAgICAgICAge1xuXG4gICAgICAgICAgICB2YXIgcnggPSBzaGFwZS54O1xuICAgICAgICAgICAgdmFyIHJ5ID0gc2hhcGUueTtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBzaGFwZS5yYWRpdXM7XG5cbiAgICAgICAgICAgIHZhciBtYXhSYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgfCAwO1xuICAgICAgICAgICAgcmFkaXVzID0gcmFkaXVzID4gbWF4UmFkaXVzID8gbWF4UmFkaXVzIDogcmFkaXVzO1xuXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhyeCwgcnkgKyByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocngsIHJ5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCwgcnkgKyBoZWlnaHQsIHJ4ICsgcmFkaXVzLCByeSArIGhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCArIHdpZHRoIC0gcmFkaXVzLCByeSArIGhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocnggKyB3aWR0aCwgcnkgKyBoZWlnaHQsIHJ4ICsgd2lkdGgsIHJ5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4ICsgd2lkdGgsIHJ5ICsgcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCArIHdpZHRoLCByeSwgcnggKyB3aWR0aCAtIHJhZGl1cywgcnkpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocnggKyByYWRpdXMsIHJ5KTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCwgcnksIHJ4LCByeSArIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLypcbiAqIFVwZGF0ZXMgdGhlIHRpbnQgb2YgYSBncmFwaGljcyBvYmplY3RcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc30gdGhlIGdyYXBoaWNzIHRoYXQgd2lsbCBoYXZlIGl0cyB0aW50IHVwZGF0ZWRcbiAqIFxuICovXG5DYW52YXNHcmFwaGljcy51cGRhdGVHcmFwaGljc1RpbnQgPSBmdW5jdGlvbiAoZ3JhcGhpY3MpXG57XG4gICAgaWYgKGdyYXBoaWNzLnRpbnQgPT09IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0aW50UiA9IChncmFwaGljcy50aW50ID4+IDE2ICYgMHhGRikgLyAyNTU7XG4gICAgdmFyIHRpbnRHID0gKGdyYXBoaWNzLnRpbnQgPj4gOCAmIDB4RkYpIC8gMjU1O1xuICAgIHZhciB0aW50QiA9IChncmFwaGljcy50aW50ICYgMHhGRikvIDI1NTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGRhdGEgPSBncmFwaGljcy5ncmFwaGljc0RhdGFbaV07XG5cbiAgICAgICAgdmFyIGZpbGxDb2xvciA9IGRhdGEuZmlsbENvbG9yIHwgMDtcbiAgICAgICAgdmFyIGxpbmVDb2xvciA9IGRhdGEubGluZUNvbG9yIHwgMDtcblxuICAgICAgICAvKlxuICAgICAgICB2YXIgY29sb3JSID0gKGZpbGxDb2xvciA+PiAxNiAmIDB4RkYpIC8gMjU1O1xuICAgICAgICB2YXIgY29sb3JHID0gKGZpbGxDb2xvciA+PiA4ICYgMHhGRikgLyAyNTU7XG4gICAgICAgIHZhciBjb2xvckIgPSAoZmlsbENvbG9yICYgMHhGRikgLyAyNTU7XG5cbiAgICAgICAgY29sb3JSICo9IHRpbnRSO1xuICAgICAgICBjb2xvckcgKj0gdGludEc7XG4gICAgICAgIGNvbG9yQiAqPSB0aW50QjtcblxuICAgICAgICBmaWxsQ29sb3IgPSAoKGNvbG9yUioyNTUgPDwgMTYpICsgKGNvbG9yRyoyNTUgPDwgOCkgKyBjb2xvckIqMjU1KTtcblxuICAgICAgICBjb2xvclIgPSAobGluZUNvbG9yID4+IDE2ICYgMHhGRikgLyAyNTU7XG4gICAgICAgIGNvbG9yRyA9IChsaW5lQ29sb3IgPj4gOCAmIDB4RkYpIC8gMjU1O1xuICAgICAgICBjb2xvckIgPSAobGluZUNvbG9yICYgMHhGRikgLyAyNTU7XG5cbiAgICAgICAgY29sb3JSICo9IHRpbnRSO1xuICAgICAgICBjb2xvckcgKj0gdGludEc7XG4gICAgICAgIGNvbG9yQiAqPSB0aW50QjtcblxuICAgICAgICBsaW5lQ29sb3IgPSAoKGNvbG9yUioyNTUgPDwgMTYpICsgKGNvbG9yRyoyNTUgPDwgOCkgKyBjb2xvckIqMjU1KTtcbiAgICAgICAgKi9cblxuICAgICAgICAvLyBzdXBlciBpbmxpbmUgY29zIGltIGFuIG9wdGltaXphdGlvbiBOQVpJIDopXG4gICAgICAgIGRhdGEuX2ZpbGxUaW50ID0gKCgoZmlsbENvbG9yID4+IDE2ICYgMHhGRikgLyAyNTUgKiB0aW50UioyNTUgPDwgMTYpICsgKChmaWxsQ29sb3IgPj4gOCAmIDB4RkYpIC8gMjU1ICogdGludEcqMjU1IDw8IDgpICsgIChmaWxsQ29sb3IgJiAweEZGKSAvIDI1NSAqIHRpbnRCKjI1NSk7XG4gICAgICAgIGRhdGEuX2xpbmVUaW50ID0gKCgobGluZUNvbG9yID4+IDE2ICYgMHhGRikgLyAyNTUgKiB0aW50UioyNTUgPDwgMTYpICsgKChsaW5lQ29sb3IgPj4gOCAmIDB4RkYpIC8gMjU1ICogdGludEcqMjU1IDw8IDgpICsgIChsaW5lQ29sb3IgJiAweEZGKSAvIDI1NSAqIHRpbnRCKjI1NSk7XG5cbiAgICB9XG59O1xuXG4iLCJ2YXIgQ2FudmFzR3JhcGhpY3MgPSByZXF1aXJlKCcuL0NhbnZhc0dyYXBoaWNzJyk7XG5cbi8qKlxuICogQSBzZXQgb2YgZnVuY3Rpb25zIHVzZWQgdG8gaGFuZGxlIG1hc2tpbmcuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG5mdW5jdGlvbiBDYW52YXNNYXNrTWFuYWdlcigpXG57fVxuXG5DYW52YXNNYXNrTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDYW52YXNNYXNrTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzTWFza01hbmFnZXI7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgYWRkcyBpdCB0byB0aGUgY3VycmVudCBzdGFjayBvZiBtYXNrcy5cbiAqXG4gKiBAcGFyYW0gbWFza0RhdGEge29iamVjdH0gdGhlIG1hc2tEYXRhIHRoYXQgd2lsbCBiZSBwdXNoZWRcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcnxDYW52YXNSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIGNvbnRleHQgdG8gdXNlLlxuICovXG5DYW52YXNNYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaE1hc2sgPSBmdW5jdGlvbiAobWFza0RhdGEsIHJlbmRlcmVyKVxue1xuXG4gICAgcmVuZGVyZXIuY29udGV4dC5zYXZlKCk7XG5cbiAgICB2YXIgY2FjaGVBbHBoYSA9IG1hc2tEYXRhLmFscGhhO1xuICAgIHZhciB0cmFuc2Zvcm0gPSBtYXNrRGF0YS53b3JsZFRyYW5zZm9ybTtcbiAgICB2YXIgcmVzb2x1dGlvbiA9IHJlbmRlcmVyLnJlc29sdXRpb247XG5cbiAgICByZW5kZXJlci5jb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgdHJhbnNmb3JtLmEgKiByZXNvbHV0aW9uLFxuICAgICAgICB0cmFuc2Zvcm0uYiAqIHJlc29sdXRpb24sXG4gICAgICAgIHRyYW5zZm9ybS5jICogcmVzb2x1dGlvbixcbiAgICAgICAgdHJhbnNmb3JtLmQgKiByZXNvbHV0aW9uLFxuICAgICAgICB0cmFuc2Zvcm0udHggKiByZXNvbHV0aW9uLFxuICAgICAgICB0cmFuc2Zvcm0udHkgKiByZXNvbHV0aW9uXG4gICAgKTtcblxuICAgIC8vVE9ETyBzdXBvcnQgc3ByaXRlIGFscGhhIG1hc2tzPz9cbiAgICAvL2xvdHMgb2YgZWZmb3J0IHJlcXVpcmVkLiBJZiBkZW1hbmQgaXMgZ3JlYXQgZW5vdWdoLi5cbiAgICBpZighbWFza0RhdGEudGV4dHVyZSlcbiAgICB7XG4gICAgICAgIENhbnZhc0dyYXBoaWNzLnJlbmRlckdyYXBoaWNzTWFzayhtYXNrRGF0YSwgcmVuZGVyZXIuY29udGV4dCk7XG4gICAgICAgIHJlbmRlcmVyLmNvbnRleHQuY2xpcCgpO1xuICAgIH1cblxuICAgIG1hc2tEYXRhLndvcmxkQWxwaGEgPSBjYWNoZUFscGhhO1xufTtcblxuLyoqXG4gKiBSZXN0b3JlcyB0aGUgY3VycmVudCBkcmF3aW5nIGNvbnRleHQgdG8gdGhlIHN0YXRlIGl0IHdhcyBiZWZvcmUgdGhlIG1hc2sgd2FzIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfENhbnZhc1JlbmRlcmVyfSBUaGUgcmVuZGVyZXIgY29udGV4dCB0byB1c2UuXG4gKi9cbkNhbnZhc01hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BNYXNrID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIHJlbmRlcmVyLmNvbnRleHQucmVzdG9yZSgpO1xufTtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVXRpbGl0eSBtZXRob2RzIGZvciBTcHJpdGUvVGV4dHVyZSB0aW50aW5nLlxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBJWElcbiAqL1xudmFyIENhbnZhc1RpbnRlciA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8qKlxuICogQmFzaWNhbGx5IHRoaXMgbWV0aG9kIGp1c3QgbmVlZHMgYSBzcHJpdGUgYW5kIGEgY29sb3IgYW5kIHRpbnRzIHRoZSBzcHJpdGUgd2l0aCB0aGUgZ2l2ZW4gY29sb3IuXG4gKlxuICogQHBhcmFtIHNwcml0ZSB7U3ByaXRlfSB0aGUgc3ByaXRlIHRvIHRpbnRcbiAqIEBwYXJhbSBjb2xvciB7bnVtYmVyfSB0aGUgY29sb3IgdG8gdXNlIHRvIHRpbnQgdGhlIHNwcml0ZSB3aXRoXG4gKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudH0gVGhlIHRpbnRlZCBjYW52YXNcbiAqL1xuQ2FudmFzVGludGVyLmdldFRpbnRlZFRleHR1cmUgPSBmdW5jdGlvbiAoc3ByaXRlLCBjb2xvcilcbntcbiAgICB2YXIgdGV4dHVyZSA9IHNwcml0ZS50ZXh0dXJlO1xuXG4gICAgY29sb3IgPSBDYW52YXNUaW50ZXIucm91bmRDb2xvcihjb2xvcik7XG5cbiAgICB2YXIgc3RyaW5nQ29sb3IgPSAnIycgKyAoJzAwMDAwJyArICggY29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG5cbiAgICB0ZXh0dXJlLnRpbnRDYWNoZSA9IHRleHR1cmUudGludENhY2hlIHx8IHt9O1xuXG4gICAgaWYgKHRleHR1cmUudGludENhY2hlW3N0cmluZ0NvbG9yXSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0ZXh0dXJlLnRpbnRDYWNoZVtzdHJpbmdDb2xvcl07XG4gICAgfVxuXG4gICAgIC8vIGNsb25lIHRleHR1cmUuLlxuICAgIHZhciBjYW52YXMgPSBDYW52YXNUaW50ZXIuY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgLy9DYW52YXNUaW50ZXIudGludFdpdGhQZXJQaXhlbCh0ZXh0dXJlLCBzdHJpbmdDb2xvciwgY2FudmFzKTtcbiAgICBDYW52YXNUaW50ZXIudGludE1ldGhvZCh0ZXh0dXJlLCBjb2xvciwgY2FudmFzKTtcblxuICAgIGlmIChDYW52YXNUaW50ZXIuY29udmVydFRpbnRUb0ltYWdlKVxuICAgIHtcbiAgICAgICAgLy8gaXMgdGhpcyBiZXR0ZXI/XG4gICAgICAgIHZhciB0aW50SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGludEltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcblxuICAgICAgICB0ZXh0dXJlLnRpbnRDYWNoZVtzdHJpbmdDb2xvcl0gPSB0aW50SW1hZ2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRleHR1cmUudGludENhY2hlW3N0cmluZ0NvbG9yXSA9IGNhbnZhcztcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5vdCBjb252ZXJ0aW5nIHRoZSB0ZXh0dXJlIHRvIGFuIGltYWdlIHRoZW4gd2UgbmVlZCB0byBsb3NlIHRoZSByZWZlcmVuY2UgdG8gdGhlIGNhbnZhc1xuICAgICAgICBDYW52YXNUaW50ZXIuY2FudmFzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FudmFzO1xufTtcblxuLyoqXG4gKiBUaW50IGEgdGV4dHVyZSB1c2luZyB0aGUgJ211bHRpcGx5JyBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9IHRoZSB0ZXh0dXJlIHRvIHRpbnRcbiAqIEBwYXJhbSBjb2xvciB7bnVtYmVyfSB0aGUgY29sb3IgdG8gdXNlIHRvIHRpbnQgdGhlIHNwcml0ZSB3aXRoXG4gKiBAcGFyYW0gY2FudmFzIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGN1cnJlbnQgY2FudmFzXG4gKi9cbkNhbnZhc1RpbnRlci50aW50V2l0aE11bHRpcGx5ID0gZnVuY3Rpb24gKHRleHR1cmUsIGNvbG9yLCBjYW52YXMpXG57XG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXG4gICAgdmFyIGNyb3AgPSB0ZXh0dXJlLmNyb3A7XG5cbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjcm9wLndpZHRoLCBjcm9wLmhlaWdodCk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG5cbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2UsXG4gICAgICAgIGNyb3AueCxcbiAgICAgICAgY3JvcC55LFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHRcbiAgICApO1xuXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tYXRvcCc7XG5cbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2UsXG4gICAgICAgIGNyb3AueCxcbiAgICAgICAgY3JvcC55LFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHRcbiAgICApO1xufTtcblxuLyoqXG4gKiBUaW50IGEgdGV4dHVyZSB1c2luZyB0aGUgJ292ZXJsYXknIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGV4dHVyZSB7VGV4dHVyZX0gdGhlIHRleHR1cmUgdG8gdGludFxuICogQHBhcmFtIGNvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciB0byB1c2UgdG8gdGludCB0aGUgc3ByaXRlIHdpdGhcbiAqIEBwYXJhbSBjYW52YXMge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY3VycmVudCBjYW52YXNcbiAqL1xuQ2FudmFzVGludGVyLnRpbnRXaXRoT3ZlcmxheSA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBjb2xvciwgY2FudmFzKVxue1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcblxuICAgIHZhciBjcm9wID0gdGV4dHVyZS5jcm9wO1xuXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBjb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNyb3Aud2lkdGgsIGNyb3AuaGVpZ2h0KTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWF0b3AnO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgY3JvcC54LFxuICAgICAgICBjcm9wLnksXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodFxuICAgICk7XG5cbiAgICAvLyBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5Jztcbn07XG5cbi8qKlxuICogVGludCBhIHRleHR1cmUgcGl4ZWwgcGVyIHBpeGVsLlxuICpcbiAqIEBwYXJhbSB0ZXh0dXJlIHtUZXh0dXJlfSB0aGUgdGV4dHVyZSB0byB0aW50XG4gKiBAcGFyYW0gY29sb3Ige251bWJlcn0gdGhlIGNvbG9yIHRvIHVzZSB0byB0aW50IHRoZSBzcHJpdGUgd2l0aFxuICogQHBhcmFtIGNhbnZhcyB7SFRNTENhbnZhc0VsZW1lbnR9IHRoZSBjdXJyZW50IGNhbnZhc1xuICovXG5DYW52YXNUaW50ZXIudGludFdpdGhQZXJQaXhlbCA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBjb2xvciwgY2FudmFzKVxue1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcblxuICAgIHZhciBjcm9wID0gdGV4dHVyZS5jcm9wO1xuXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2UsXG4gICAgICAgIGNyb3AueCxcbiAgICAgICAgY3JvcC55LFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHRcbiAgICApO1xuXG4gICAgdmFyIHJnYlZhbHVlcyA9IHV0aWxzLmhleDJyZ2IoY29sb3IpO1xuICAgIHZhciByID0gcmdiVmFsdWVzWzBdLCBnID0gcmdiVmFsdWVzWzFdLCBiID0gcmdiVmFsdWVzWzJdO1xuXG4gICAgdmFyIHBpeGVsRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNyb3Aud2lkdGgsIGNyb3AuaGVpZ2h0KTtcblxuICAgIHZhciBwaXhlbHMgPSBwaXhlbERhdGEuZGF0YTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aDsgaSArPSA0KVxuICAgIHtcbiAgICAgICAgcGl4ZWxzW2krMF0gKj0gcjtcbiAgICAgICAgcGl4ZWxzW2krMV0gKj0gZztcbiAgICAgICAgcGl4ZWxzW2krMl0gKj0gYjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnB1dEltYWdlRGF0YShwaXhlbERhdGEsIDAsIDApO1xufTtcblxuLyoqXG4gKiBSb3VuZHMgdGhlIHNwZWNpZmllZCBjb2xvciBhY2NvcmRpbmcgdG8gdGhlIENhbnZhc1RpbnRlci5jYWNoZVN0ZXBzUGVyQ29sb3JDaGFubmVsLlxuICpcbiAqIEBwYXJhbSBjb2xvciB7bnVtYmVyfSB0aGUgY29sb3IgdG8gcm91bmQsIHNob3VsZCBiZSBhIGhleCBjb2xvclxuICovXG5DYW52YXNUaW50ZXIucm91bmRDb2xvciA9IGZ1bmN0aW9uIChjb2xvcilcbntcbiAgICB2YXIgc3RlcCA9IENhbnZhc1RpbnRlci5jYWNoZVN0ZXBzUGVyQ29sb3JDaGFubmVsO1xuXG4gICAgdmFyIHJnYlZhbHVlcyA9IHV0aWxzLmhleDJyZ2IoY29sb3IpO1xuXG4gICAgcmdiVmFsdWVzWzBdID0gTWF0aC5taW4oMjU1LCAocmdiVmFsdWVzWzBdIC8gc3RlcCkgKiBzdGVwKTtcbiAgICByZ2JWYWx1ZXNbMV0gPSBNYXRoLm1pbigyNTUsIChyZ2JWYWx1ZXNbMV0gLyBzdGVwKSAqIHN0ZXApO1xuICAgIHJnYlZhbHVlc1syXSA9IE1hdGgubWluKDI1NSwgKHJnYlZhbHVlc1syXSAvIHN0ZXApICogc3RlcCk7XG5cbiAgICByZXR1cm4gdXRpbHMucmdiMmhleChyZ2JWYWx1ZXMpO1xufTtcblxuLyoqXG4gKiBOdW1iZXIgb2Ygc3RlcHMgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIGEgY2FwIHdoZW4gcm91bmRpbmcgY29sb3JzLlxuICpcbiAqIEBtZW1iZXJcbiAqL1xuQ2FudmFzVGludGVyLmNhY2hlU3RlcHNQZXJDb2xvckNoYW5uZWwgPSA4O1xuXG4vKipcbiAqIFRpbnQgY2FjaGUgYm9vbGVhbiBmbGFnLlxuICpcbiAqIEBtZW1iZXJcbiAqL1xuQ2FudmFzVGludGVyLmNvbnZlcnRUaW50VG9JbWFnZSA9IGZhbHNlO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBDYW52YXMgQmxlbmRNb2RlcyBhcmUgc3VwcG9ydGVkLCBjb25zZXF1ZW50bHkgdGhlIGFiaWxpdHkgdG8gdGludCB1c2luZyB0aGUgbXVsdGlwbHkgbWV0aG9kLlxuICpcbiAqIEBtZW1iZXJcbiAqL1xuQ2FudmFzVGludGVyLmNhblVzZU11bHRpcGx5ID0gdXRpbHMuY2FuVXNlTmV3Q2FudmFzQmxlbmRNb2RlcygpO1xuXG4vKipcbiAqIFRoZSB0aW50aW5nIG1ldGhvZCB0aGF0IHdpbGwgYmUgdXNlZC5cbiAqXG4gKi9cbkNhbnZhc1RpbnRlci50aW50TWV0aG9kID0gQ2FudmFzVGludGVyLmNhblVzZU11bHRpcGx5ID8gQ2FudmFzVGludGVyLnRpbnRXaXRoTXVsdGlwbHkgOiAgQ2FudmFzVGludGVyLnRpbnRXaXRoUGVyUGl4ZWw7XG4iLCJ2YXIgU3lzdGVtUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9TeXN0ZW1SZW5kZXJlcicpLFxuICAgIFNoYWRlck1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXJzL1NoYWRlck1hbmFnZXInKSxcbiAgICBNYXNrTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcnMvTWFza01hbmFnZXInKSxcbiAgICBTdGVuY2lsTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcnMvU3RlbmNpbE1hbmFnZXInKSxcbiAgICBGaWx0ZXJNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2Vycy9GaWx0ZXJNYW5hZ2VyJyksXG4gICAgQmxlbmRNb2RlTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcnMvQmxlbmRNb2RlTWFuYWdlcicpLFxuICAgIFJlbmRlclRhcmdldCA9IHJlcXVpcmUoJy4vdXRpbHMvUmVuZGVyVGFyZ2V0JyksXG4gICAgT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuL3V0aWxzL09iamVjdFJlbmRlcmVyJyksXG4gICAgRlhBQUZpbHRlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9GWEFBRmlsdGVyJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBUaGUgV2ViR0xSZW5kZXJlciBkcmF3cyB0aGUgc2NlbmUgYW5kIGFsbCBpdHMgY29udGVudCBvbnRvIGEgd2ViR0wgZW5hYmxlZCBjYW52YXMuIFRoaXMgcmVuZGVyZXJcbiAqIHNob3VsZCBiZSB1c2VkIGZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgd2ViR0wuIFRoaXMgUmVuZGVyIHdvcmtzIGJ5IGF1dG9tYXRpY2FsbHkgbWFuYWdpbmcgd2ViR0xCYXRjaHMuXG4gKiBTbyBubyBuZWVkIGZvciBTcHJpdGUgQmF0Y2hlcyBvciBTcHJpdGUgQ2xvdWRzLlxuICogRG9uJ3QgZm9yZ2V0IHRvIGFkZCB0aGUgdmlldyB0byB5b3VyIERPTSBvciB5b3Ugd2lsbCBub3Qgc2VlIGFueXRoaW5nIDopXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU3lzdGVtUmVuZGVyZXJcbiAqIEBwYXJhbSBbd2lkdGg9MF0ge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgdmlld1xuICogQHBhcmFtIFtoZWlnaHQ9MF0ge251bWJlcn0gdGhlIGhlaWdodCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqIEBwYXJhbSBbb3B0aW9uc10ge29iamVjdH0gVGhlIG9wdGlvbmFsIHJlbmRlcmVyIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBbb3B0aW9ucy52aWV3XSB7SFRNTENhbnZhc0VsZW1lbnR9IHRoZSBjYW52YXMgdG8gdXNlIGFzIGEgdmlldywgb3B0aW9uYWxcbiAqIEBwYXJhbSBbb3B0aW9ucy50cmFuc3BhcmVudD1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyB0cmFuc3BhcmVudCwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtvcHRpb25zLmF1dG9SZXNpemU9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgYXV0b21hdGljYWxseSByZXNpemVkLCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0gW29wdGlvbnMuYW50aWFsaWFzPWZhbHNlXSB7Ym9vbGVhbn0gc2V0cyBhbnRpYWxpYXMuIElmIG5vdCBhdmFpbGFibGUgbmF0aXZlbHkgdGhlbiBGWEFBIGFudGlhbGlhc2luZyBpcyB1c2VkXG4gKiBAcGFyYW0gW29wdGlvbnMuZm9yY2VGWEFBPWZhbHNlXSB7Ym9vbGVhbn0gZm9yY2VzIEZYQUEgYW50aWFsaWFzaW5nIHRvIGJlIHVzZWQgb3ZlciBuYXRpdmUuIEZYQUEgaXMgZmFzdGVyLCBidXQgbWF5IG5vdCBhbHdheXMgbG9rIGFzIGdyZWF0XG4gKiBAcGFyYW0gW29wdGlvbnMucmVzb2x1dGlvbj0xXSB7bnVtYmVyfSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyZXIgcmV0aW5hIHdvdWxkIGJlIDJcbiAqIEBwYXJhbSBbb3B0aW9ucy5jbGVhckJlZm9yZVJlbmRlcj10cnVlXSB7Ym9vbGVhbn0gVGhpcyBzZXRzIGlmIHRoZSBDYW52YXNSZW5kZXJlciB3aWxsIGNsZWFyIHRoZSBjYW52YXMgb3JcbiAqICAgICAgbm90IGJlZm9yZSB0aGUgbmV3IHJlbmRlciBwYXNzLlxuICogQHBhcmFtIFtvcHRpb25zLnByZXNlcnZlRHJhd2luZ0J1ZmZlcj1mYWxzZV0ge2Jvb2xlYW59IGVuYWJsZXMgZHJhd2luZyBidWZmZXIgcHJlc2VydmF0aW9uLCBlbmFibGUgdGhpcyBpZlxuICogICAgICB5b3UgbmVlZCB0byBjYWxsIHRvRGF0YVVybCBvbiB0aGUgd2ViZ2wgY29udGV4dC5cbiAqL1xuZnVuY3Rpb24gV2ViR0xSZW5kZXJlcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKVxue1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgU3lzdGVtUmVuZGVyZXIuY2FsbCh0aGlzLCAnV2ViR0wnLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoaXMgcmVuZGVyZXIgYXMgYSBzdGFuZGFyZGlzZWQgY29uc3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IENPTlNULlJFTkRFUkVSX1RZUEUuV0VCR0w7XG5cbiAgICB0aGlzLmhhbmRsZUNvbnRleHRMb3N0ID0gdGhpcy5oYW5kbGVDb250ZXh0TG9zdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ29udGV4dFJlc3RvcmVkID0gdGhpcy5oYW5kbGVDb250ZXh0UmVzdG9yZWQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX3VwZGF0ZVRleHR1cmVCb3VuZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoZS50YXJnZXQpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2Rlc3Ryb3lUZXh0dXJlQm91bmQgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdGhpcy5kZXN0cm95VGV4dHVyZShlLnRhcmdldCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy52aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dGxvc3QnLCB0aGlzLmhhbmRsZUNvbnRleHRMb3N0LCBmYWxzZSk7XG4gICAgdGhpcy52aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgdGhpcy5oYW5kbGVDb250ZXh0UmVzdG9yZWQsIGZhbHNlKTtcblxuICAgIC8vVE9ETyBwb3NzaWJpbGl0eSB0byBmb3JjZSBGWEFBIGFzIGl0IG1heSBvZmZlciBiZXR0ZXIgcGVyZm9ybWFuY2U/XG4gICAgLyoqXG4gICAgICogRG9lcyBpdCB1c2UgRlhBQSA/XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdXNlRlhBQSA9ICEhb3B0aW9ucy5mb3JjZUZYQUEgJiYgb3B0aW9ucy5hbnRpYWxpYXM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZnhhYSBmaWx0ZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0ZYQUFGaWx0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9GWEFBRmlsdGVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25zIHBhc3NlZCBpbiB0byBjcmVhdGUgYSBuZXcgd2ViZ2wgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRleHRPcHRpb25zID0ge1xuICAgICAgICBhbHBoYTogdGhpcy50cmFuc3BhcmVudCxcbiAgICAgICAgYW50aWFsaWFzOiBvcHRpb25zLmFudGlhbGlhcyxcbiAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiB0aGlzLnRyYW5zcGFyZW50ICYmIHRoaXMudHJhbnNwYXJlbnQgIT09ICdub3RNdWx0aXBsaWVkJyxcbiAgICAgICAgc3RlbmNpbDogdHJ1ZSxcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBvcHRpb25zLnByZXNlcnZlRHJhd2luZ0J1ZmZlclxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb3VudGVyIGZvciB0aGUgbnVtYmVyIG9mIGRyYXdzIG1hZGUgZWFjaCBmcmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZHJhd0NvdW50ID0gMDtcblxuICAgIC8qKlxuICAgICAqIERlYWxzIHdpdGggbWFuYWdpbmcgdGhlIHNoYWRlciBwcm9ncmFtcyBhbmQgdGhlaXIgYXR0cmlicy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1NoYWRlck1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaGFkZXJNYW5hZ2VyID0gbmV3IFNoYWRlck1hbmFnZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBNYW5hZ2VzIHRoZSBtYXNrcyB1c2luZyB0aGUgc3RlbmNpbCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtNYXNrTWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLm1hc2tNYW5hZ2VyID0gbmV3IE1hc2tNYW5hZ2VyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogTWFuYWdlcyB0aGUgc3RlbmNpbCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtTdGVuY2lsTWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0ZW5jaWxNYW5hZ2VyID0gbmV3IFN0ZW5jaWxNYW5hZ2VyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogTWFuYWdlcyB0aGUgZmlsdGVycy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0ZpbHRlck1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gbmV3IEZpbHRlck1hbmFnZXIodGhpcyk7XG5cblxuICAgIC8qKlxuICAgICAqIE1hbmFnZXMgdGhlIGJsZW5kTW9kZXNcbiAgICAgKiBAbWVtYmVyIHtCbGVuZE1vZGVNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuYmxlbmRNb2RlTWFuYWdlciA9IG5ldyBCbGVuZE1vZGVNYW5hZ2VyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIGN1cnJlbnQgcmVuZGVyIHRhcmdldFxuICAgICAqIEBtZW1iZXIge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDtcblxuICAgIC8qKlxuICAgICAqIG9iamVjdCByZW5kZXJlciBAYWx2aW5cbiAgICAgKiBAbWVtYmVyIHtPYmplY3RSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJlciA9IG5ldyBPYmplY3RSZW5kZXJlcih0aGlzKTtcblxuICAgIHRoaXMuaW5pdFBsdWdpbnMoKTtcblxuICAgICAvLyBpbml0aWFsaXplIHRoZSBjb250ZXh0IHNvIGl0IGlzIHJlYWR5IGZvciB0aGUgbWFuYWdlcnMuXG4gICAgdGhpcy5faW5pdENvbnRleHQoKTtcblxuICAgIC8vIG1hcCBzb21lIHdlYkdMIGJsZW5kIG1vZGVzLi5cbiAgICB0aGlzLl9tYXBCbGVuZE1vZGVzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiByZW5kZXIgdGFyZ2V0c1xuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyVGFyZ2V0U3RhY2sgPSBbXTtcbn1cblxuLy8gY29uc3RydWN0b3JcbldlYkdMUmVuZGVyZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUpO1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXZWJHTFJlbmRlcmVyO1xubW9kdWxlLmV4cG9ydHMgPSBXZWJHTFJlbmRlcmVyO1xudXRpbHMucGx1Z2luVGFyZ2V0Lm1peGluKFdlYkdMUmVuZGVyZXIpO1xuXG5XZWJHTFJlbmRlcmVyLmdsQ29udGV4dElkID0gMDtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBXZWJHTCBjb250ZXh0XG4gKiBAcHJpdmF0ZVxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5faW5pdENvbnRleHQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMudmlldy5nZXRDb250ZXh0KCd3ZWJnbCcsIHRoaXMuX2NvbnRleHRPcHRpb25zKSB8fCB0aGlzLnZpZXcuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgdGhpcy5fY29udGV4dE9wdGlvbnMpO1xuICAgIHRoaXMuZ2wgPSBnbDtcblxuICAgIGlmICghZ2wpXG4gICAge1xuICAgICAgICAvLyBmYWlsLCBub3QgYWJsZSB0byBnZXQgYSBjb250ZXh0XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgd2ViR0wuIFRyeSB1c2luZyB0aGUgY2FudmFzIHJlbmRlcmVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5nbENvbnRleHRJZCA9IFdlYkdMUmVuZGVyZXIuZ2xDb250ZXh0SWQrKztcbiAgICBnbC5pZCA9IHRoaXMuZ2xDb250ZXh0SWQ7XG4gICAgZ2wucmVuZGVyZXIgPSB0aGlzO1xuXG4gICAgLy8gc2V0IHVwIHRoZSBkZWZhdWx0IHBpeGkgc2V0dGluZ3MuLlxuICAgIGdsLmRpc2FibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgZ2wuZGlzYWJsZShnbC5DVUxMX0ZBQ0UpO1xuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG5cbiAgICB0aGlzLnJlbmRlclRhcmdldCA9IG5ldyBSZW5kZXJUYXJnZXQodGhpcy5nbCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIG51bGwsIHRoaXMucmVzb2x1dGlvbiwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVtaXQoJ2NvbnRleHQnLCBnbCk7XG5cbiAgICAvLyBzZXR1cCB0aGUgd2lkdGgvaGVpZ2h0IHByb3BlcnRpZXMgYW5kIGdsIHZpZXdwb3J0XG4gICAgdGhpcy5yZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgaWYoIXRoaXMuX3VzZUZYQUEpXG4gICAge1xuICAgICAgICB0aGlzLl91c2VGWEFBID0gKCB0aGlzLl9jb250ZXh0T3B0aW9ucy5hbnRpYWxpYXMgJiYgISBnbC5nZXRDb250ZXh0QXR0cmlidXRlcygpLmFudGlhbGlhcyApO1xuICAgIH1cblxuXG4gICAgaWYodGhpcy5fdXNlRlhBQSlcbiAgICB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4oJ0ZYQUEgYW50aWFsaWFzaW5nIGJlaW5nIHVzZWQgaW5zdGVhZCBvZiBuYXRpdmUgYW50aWFsaWFzaW5nJyk7XG4gICAgICAgIHRoaXMuX0ZYQUFGaWx0ZXIgPSBbbmV3IEZYQUFGaWx0ZXIoKV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdG8gaXRzIHdlYkdMIHZpZXdcbiAqXG4gKiBAcGFyYW0gb2JqZWN0IHtEaXNwbGF5T2JqZWN0fSB0aGUgb2JqZWN0IHRvIGJlIHJlbmRlcmVkXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChvYmplY3QpXG57XG4gICAgLy8gbm8gcG9pbnQgcmVuZGVyaW5nIGlmIG91ciBjb250ZXh0IGhhcyBiZWVuIGJsb3duIHVwIVxuICAgIGlmICh0aGlzLmdsLmlzQ29udGV4dExvc3QoKSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0T2JqZWN0UmVuZGVyZWQgPSBvYmplY3Q7XG5cbiAgICBpZih0aGlzLl91c2VGWEFBKVxuICAgIHtcbiAgICAgICAgdGhpcy5fRlhBQUZpbHRlclswXS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnggPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLl9GWEFBRmlsdGVyWzBdLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUueSA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBvYmplY3QuZmlsdGVyQXJlYSA9IHRoaXMucmVuZGVyVGFyZ2V0LnNpemU7XG4gICAgICAgIG9iamVjdC5maWx0ZXJzID0gdGhpcy5fRlhBQUZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIgY2FjaGVQYXJlbnQgPSBvYmplY3QucGFyZW50O1xuICAgIG9iamVjdC5wYXJlbnQgPSB0aGlzLl90ZW1wRGlzcGxheU9iamVjdFBhcmVudDtcblxuICAgIC8vIHVwZGF0ZSB0aGUgc2NlbmUgZ3JhcGhcbiAgICBvYmplY3QudXBkYXRlVHJhbnNmb3JtKCk7XG5cbiAgICBvYmplY3QucGFyZW50ID0gY2FjaGVQYXJlbnQ7XG5cbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgLy8gbWFrZSBzdXJlIHdlIGFyZSBib3VuZCB0byB0aGUgbWFpbiBmcmFtZSBidWZmZXJcbiAgICB0aGlzLnNldFJlbmRlclRhcmdldCh0aGlzLnJlbmRlclRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5jbGVhckJlZm9yZVJlbmRlcilcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zcGFyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuY2xlYXJDb2xvcih0aGlzLl9iYWNrZ3JvdW5kQ29sb3JSZ2JbMF0sIHRoaXMuX2JhY2tncm91bmRDb2xvclJnYlsxXSwgdGhpcy5fYmFja2dyb3VuZENvbG9yUmdiWzJdLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyRGlzcGxheU9iamVjdChvYmplY3QsIHRoaXMucmVuZGVyVGFyZ2V0KTsvL3RoaXMucHJvamVjdGlvbik7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSBEaXNwbGF5IE9iamVjdC5cbiAqXG4gKiBAcGFyYW0gZGlzcGxheU9iamVjdCB7RGlzcGxheU9iamVjdH0gVGhlIERpc3BsYXlPYmplY3QgdG8gcmVuZGVyXG4gKiBAcGFyYW0gcmVuZGVyVGFyZ2V0IHtSZW5kZXJUYXJnZXR9IFRoZSByZW5kZXIgdGFyZ2V0IHRvIHVzZSB0byByZW5kZXIgdGhpcyBkaXNwbGF5IG9iamVjdFxuICpcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyRGlzcGxheU9iamVjdCA9IGZ1bmN0aW9uIChkaXNwbGF5T2JqZWN0LCByZW5kZXJUYXJnZXQpLy9wcm9qZWN0aW9uLCBidWZmZXIpXG57XG4gICAgLy8gVE9ETyBpcyB0aGlzIG5lZWRlZC4uLlxuICAgIC8vdGhpcy5ibGVuZE1vZGVNYW5hZ2VyLnNldEJsZW5kTW9kZShDT05TVC5CTEVORF9NT0RFUy5OT1JNQUwpO1xuICAgIHRoaXMuc2V0UmVuZGVyVGFyZ2V0KHJlbmRlclRhcmdldCk7XG5cbiAgICAvLyBzdGFydCB0aGUgZmlsdGVyIG1hbmFnZXJcbiAgICB0aGlzLmZpbHRlck1hbmFnZXIuc2V0RmlsdGVyU3RhY2soIHJlbmRlclRhcmdldC5maWx0ZXJTdGFjayApO1xuXG4gICAgLy8gcmVuZGVyIHRoZSBzY2VuZSFcbiAgICBkaXNwbGF5T2JqZWN0LnJlbmRlcldlYkdMKHRoaXMpO1xuXG4gICAgLy8gZmluaXNoIHRoZSBjdXJyZW50IHJlbmRlcmVyLi5cbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJlci5mbHVzaCgpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBjdXJyZW50IHJlbmRlcmVyIHRvIHRoZSBvbmUgZ2l2ZW4gaW4gcGFyYW1ldGVyXG4gKlxuICogQHBhcmFtIG9iamVjdFJlbmRlcmVyIHtPYmplY3R9IFRPRE8gQGFsdmluXG4gKlxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5zZXRPYmplY3RSZW5kZXJlciA9IGZ1bmN0aW9uIChvYmplY3RSZW5kZXJlcilcbntcbiAgICBpZiAodGhpcy5jdXJyZW50UmVuZGVyZXIgPT09IG9iamVjdFJlbmRlcmVyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFJlbmRlcmVyLnN0b3AoKTtcbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJlciA9IG9iamVjdFJlbmRlcmVyO1xuICAgIHRoaXMuY3VycmVudFJlbmRlcmVyLnN0YXJ0KCk7XG59O1xuXG4vKipcbiAqIENoYW5nZXMgdGhlIGN1cnJlbnQgcmVuZGVyIHRhcmdldCB0byB0aGUgb25lIGdpdmVuIGluIHBhcmFtZXRlclxuICpcbiAqIEBwYXJhbSByZW5kZXJUYXJnZXQge1JlbmRlclRhcmdldH0gdGhlIG5ldyByZW5kZXIgdGFyZ2V0XG4gKlxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5zZXRSZW5kZXJUYXJnZXQgPSBmdW5jdGlvbiAocmVuZGVyVGFyZ2V0KVxue1xuICAgIGlmKCB0aGlzLmN1cnJlbnRSZW5kZXJUYXJnZXQgPT09IHJlbmRlclRhcmdldClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVE9ETyAtIG1heWJlIGRvd24gdGhlIGxpbmUgdGhpcyBzaG91bGQgYmUgYSBwdXNoIHBvcyB0aGluZz8gTGVhdmluZyBmb3Igbm93IHRob3VnaC5cbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJUYXJnZXQgPSByZW5kZXJUYXJnZXQ7XG4gICAgdGhpcy5jdXJyZW50UmVuZGVyVGFyZ2V0LmFjdGl2YXRlKCk7XG4gICAgdGhpcy5zdGVuY2lsTWFuYWdlci5zZXRNYXNrU3RhY2soIHJlbmRlclRhcmdldC5zdGVuY2lsTWFza1N0YWNrICk7XG59O1xuXG5cbi8qKlxuICogUmVzaXplcyB0aGUgd2ViR0wgdmlldyB0byB0aGUgc3BlY2lmaWVkIHdpZHRoIGFuZCBoZWlnaHQuXG4gKlxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IHRoZSBuZXcgd2lkdGggb2YgdGhlIHdlYkdMIHZpZXdcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gdGhlIG5ldyBoZWlnaHQgb2YgdGhlIHdlYkdMIHZpZXdcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpXG57XG4gICAgU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAvLyBjb25zb2xlLmxvZyh3aWR0aClcbiAgICB0aGlzLmZpbHRlck1hbmFnZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyVGFyZ2V0LnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBpZih0aGlzLmN1cnJlbnRSZW5kZXJUYXJnZXQgPT09IHRoaXMucmVuZGVyVGFyZ2V0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJUYXJnZXQuYWN0aXZhdGUoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYW5kL29yIENyZWF0ZXMgYSBXZWJHTCB0ZXh0dXJlIGZvciB0aGUgcmVuZGVyZXIncyBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB0ZXh0dXJlIHtCYXNlVGV4dHVyZXxUZXh0dXJlfSB0aGUgdGV4dHVyZSB0byB1cGRhdGVcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUudXBkYXRlVGV4dHVyZSA9IGZ1bmN0aW9uICh0ZXh0dXJlKVxue1xuICAgIHRleHR1cmUgPSB0ZXh0dXJlLmJhc2VUZXh0dXJlIHx8IHRleHR1cmU7XG5cbiAgICBpZiAoIXRleHR1cmUuaGFzTG9hZGVkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICBpZiAoIXRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdKVxuICAgIHtcbiAgICAgICAgdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0gPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIHRleHR1cmUub24oJ3VwZGF0ZScsIHRoaXMuX3VwZGF0ZVRleHR1cmVCb3VuZCk7XG4gICAgICAgIHRleHR1cmUub24oJ2Rpc3Bvc2UnLCB0aGlzLl9kZXN0cm95VGV4dHVyZUJvdW5kKTtcbiAgICB9XG5cblxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdKTtcblxuICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgdGV4dHVyZS5wcmVtdWx0aXBsaWVkQWxwaGEpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgdGV4dHVyZS5zb3VyY2UpO1xuXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIHRleHR1cmUuc2NhbGVNb2RlID09PSBDT05TVC5TQ0FMRV9NT0RFUy5MSU5FQVIgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUKTtcblxuXG4gICAgaWYgKHRleHR1cmUubWlwbWFwICYmIHRleHR1cmUuaXNQb3dlck9mVHdvKVxuICAgIHtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHRleHR1cmUuc2NhbGVNb2RlID09PSBDT05TVC5TQ0FMRV9NT0RFUy5MSU5FQVIgPyBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUiA6IGdsLk5FQVJFU1RfTUlQTUFQX05FQVJFU1QpO1xuICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHRleHR1cmUuc2NhbGVNb2RlID09PSBDT05TVC5TQ0FMRV9NT0RFUy5MSU5FQVIgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUKTtcbiAgICB9XG5cbiAgICBpZiAoIXRleHR1cmUuaXNQb3dlck9mVHdvKVxuICAgIHtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5SRVBFQVQpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5SRVBFQVQpO1xuICAgIH1cblxuICAgIHJldHVybiAgdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF07XG59O1xuXG4vKipcbiAqIERlbGV0ZXMgdGhlIHRleHR1cmUgZnJvbSBXZWJHTFxuICpcbiAqIEBwYXJhbSB0ZXh0dXJlIHtCYXNlVGV4dHVyZXxUZXh0dXJlfSB0aGUgdGV4dHVyZSB0byBkZXN0cm95XG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3lUZXh0dXJlID0gZnVuY3Rpb24gKHRleHR1cmUpXG57XG4gICAgdGV4dHVyZSA9IHRleHR1cmUuYmFzZVRleHR1cmUgfHwgdGV4dHVyZTtcblxuICAgIGlmICghdGV4dHVyZS5oYXNMb2FkZWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRleHR1cmUuX2dsVGV4dHVyZXNbdGhpcy5nbC5pZF0pXG4gICAge1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGV4dHVyZS5fZ2xUZXh0dXJlc1t0aGlzLmdsLmlkXSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGVzIGEgbG9zdCB3ZWJnbCBjb250ZXh0XG4gKlxuICogQHBhcmFtIGV2ZW50IHtFdmVudH1cbiAqIEBwcml2YXRlXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLmhhbmRsZUNvbnRleHRMb3N0ID0gZnVuY3Rpb24gKGV2ZW50KVxue1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgYSByZXN0b3JlZCB3ZWJnbCBjb250ZXh0XG4gKlxuICogQHBhcmFtIGV2ZW50IHtFdmVudH1cbiAqIEBwcml2YXRlXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLmhhbmRsZUNvbnRleHRSZXN0b3JlZCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5faW5pdENvbnRleHQoKTtcblxuICAgIC8vIGVtcHR5IGFsbCB0aGUgb2xkIGdsIHRleHR1cmVzIGFzIHRoZXkgYXJlIHVzZWxlc3Mgbm93XG4gICAgZm9yICh2YXIga2V5IGluIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGUpXG4gICAge1xuICAgICAgICB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW2tleV0uX2dsVGV4dHVyZXMubGVuZ3RoID0gMDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgZXZlcnl0aGluZyBmcm9tIHRoZSByZW5kZXJlciAoZXZlbnQgbGlzdGVuZXJzLCBzcHJpdGViYXRjaCwgZXRjLi4uKVxuICpcbiAqIEBwYXJhbSBbcmVtb3ZlVmlldz1mYWxzZV0ge2Jvb2xlYW59IFJlbW92ZXMgdGhlIENhbnZhcyBlbGVtZW50IGZyb20gdGhlIERPTS5cbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChyZW1vdmVWaWV3KVxue1xuICAgIHRoaXMuZGVzdHJveVBsdWdpbnMoKTtcblxuICAgIC8vIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICB0aGlzLnZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0bG9zdCcsIHRoaXMuaGFuZGxlQ29udGV4dExvc3QpO1xuICAgIHRoaXMudmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsIHRoaXMuaGFuZGxlQ29udGV4dFJlc3RvcmVkKTtcblxuICAgIC8vIGNhbGwgYmFzZSBkZXN0cm95XG4gICAgU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzLCByZW1vdmVWaWV3KTtcblxuICAgIHRoaXMudXVpZCA9IDA7XG5cbiAgICAvLyBkZXN0cm95IHRoZSBtYW5hZ2Vyc1xuICAgIHRoaXMuc2hhZGVyTWFuYWdlci5kZXN0cm95KCk7XG4gICAgdGhpcy5tYXNrTWFuYWdlci5kZXN0cm95KCk7XG4gICAgdGhpcy5zdGVuY2lsTWFuYWdlci5kZXN0cm95KCk7XG4gICAgdGhpcy5maWx0ZXJNYW5hZ2VyLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuc2hhZGVyTWFuYWdlciA9IG51bGw7XG4gICAgdGhpcy5tYXNrTWFuYWdlciA9IG51bGw7XG4gICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLmJsZW5kTW9kZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgdGhpcy5oYW5kbGVDb250ZXh0TG9zdCA9IG51bGw7XG4gICAgdGhpcy5oYW5kbGVDb250ZXh0UmVzdG9yZWQgPSBudWxsO1xuXG4gICAgdGhpcy5fY29udGV4dE9wdGlvbnMgPSBudWxsO1xuXG4gICAgdGhpcy5kcmF3Q291bnQgPSAwO1xuXG4gICAgdGhpcy5nbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIE1hcHMgUGl4aSBibGVuZCBtb2RlcyB0byBXZWJHTCBibGVuZCBtb2Rlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5fbWFwQmxlbmRNb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIGlmICghdGhpcy5ibGVuZE1vZGVzKVxuICAgIHtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzID0ge307XG5cbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk5PUk1BTF0gICAgICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5BRERdICAgICAgICAgICA9IFtnbC5TUkNfQUxQSEEsIGdsLkRTVF9BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5NVUxUSVBMWV0gICAgICA9IFtnbC5EU1RfQ09MT1IsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU0NSRUVOXSAgICAgICAgPSBbZ2wuU1JDX0FMUEhBLCBnbC5PTkVdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuT1ZFUkxBWV0gICAgICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkRBUktFTl0gICAgICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5MSUdIVEVOXSAgICAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JfRE9ER0VdICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SX0JVUk5dICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5IQVJEX0xJR0hUXSAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU09GVF9MSUdIVF0gICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkRJRkZFUkVOQ0VdICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5FWENMVVNJT05dICAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuSFVFXSAgICAgICAgICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNBVFVSQVRJT05dICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl0gICAgICAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTFVNSU5PU0lUWV0gICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICB9XG59O1xuIiwidmFyIERlZmF1bHRTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXJzL1RleHR1cmVTaGFkZXInKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciBjcmVhdGluZyBhIFBJWEkgZmlsdGVyLiBDdXJyZW50bHkgb25seSBXZWJHTCBzdXBwb3J0cyBmaWx0ZXJzLlxuICogSWYgeW91IHdhbnQgdG8gbWFrZSBhIGN1c3RvbSBmaWx0ZXIgdGhpcyBzaG91bGQgYmUgeW91ciBiYXNlIGNsYXNzLlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSB2ZXJ0ZXhTcmMge3N0cmluZ3xzdHJpbmdbXX0gVGhlIHZlcnRleCBzaGFkZXIgc291cmNlIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKiBAcGFyYW0gZnJhZ21lbnRTcmMge3N0cmluZ3xzdHJpbmdbXX0gVGhlIGZyYWdtZW50IHNoYWRlciBzb3VyY2UgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqIEBwYXJhbSB1bmlmb3JtcyB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdW5pZm9ybXMgZm9yIHRoaXMgZmlsdGVyLlxuICovXG5mdW5jdGlvbiBBYnN0cmFjdEZpbHRlcih2ZXJ0ZXhTcmMsIGZyYWdtZW50U3JjLCB1bmlmb3JtcylcbntcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHNoYWRlcnNcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2hhZGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGV4dHJhIHBhZGRpbmcgdGhhdCB0aGUgZmlsdGVyIG1pZ2h0IG5lZWRcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5wYWRkaW5nID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlmb3JtcyBhcyBhbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVuaWZvcm1zID0gdW5pZm9ybXMgfHwge307XG5cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2RlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZlcnRleFNyYyA9IHZlcnRleFNyYyB8fCBEZWZhdWx0U2hhZGVyLmRlZmF1bHRWZXJ0ZXhTcmM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29kZSBvZiB0aGUgZnJhbWVudCBzaGFkZXJcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZnJhZ21lbnRTcmMgPSBmcmFnbWVudFNyYyB8fCBEZWZhdWx0U2hhZGVyLmRlZmF1bHRGcmFnbWVudFNyYztcblxuICAgIC8vVE9ETyBhIHJlbWluZGVyIC0gd291bGQgYmUgY29vbCB0byBoYXZlIGxvd2VyIHJlcyBmaWx0ZXJzIGFzIHRoaXMgd291bGQgZ2l2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UuXG5cbiAgICAvL3R5cGVvZiBmcmFnbWVudFNyYyA9PT0gJ3N0cmluZycgPyBmcmFnbWVudFNyYy5zcGxpdCgnJykgOiAoZnJhZ21lbnRTcmMgfHwgW10pO1xuXG59XG5cbkFic3RyYWN0RmlsdGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFic3RyYWN0RmlsdGVyO1xubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdEZpbHRlcjtcblxuLypcbiAqIEdyYWJzIGEgc2hhZGVyIGZyb20gdGhlIGN1cnJlbnQgcmVuZGVyZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRvIHJldHJpZXZlIHRoZSBzaGFkZXIgZnJvbVxuICpcbiAqL1xuQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlLmdldFNoYWRlciA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICB2YXIgZ2wgPSByZW5kZXJlci5nbDtcblxuICAgIHZhciBzaGFkZXIgPSB0aGlzLnNoYWRlcnNbZ2wuaWRdO1xuXG4gICAgaWYgKCFzaGFkZXIpXG4gICAge1xuICAgICAgICBzaGFkZXIgPSBuZXcgRGVmYXVsdFNoYWRlcihyZW5kZXJlci5zaGFkZXJNYW5hZ2VyLFxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTcmMsXG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50U3JjLFxuICAgICAgICAgICAgdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2hhZGVyc1tnbC5pZF0gPSBzaGFkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlcjtcbn07XG5cbi8qXG4gKiBBcHBsaWVzIHRoZSBmaWx0ZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRvIHJldHJpZXZlIHRoZSBmaWx0ZXIgZnJvbVxuICogQHBhcmFtIGlucHV0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gb3V0cHV0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gY2xlYXIge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHdlIHdhbnQgdG8gY2xlYXIgdGhlIG91dHB1dFRhcmdldFxuICovXG5BYnN0cmFjdEZpbHRlci5wcm90b3R5cGUuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIGlucHV0LCBvdXRwdXQsIGNsZWFyKVxue1xuICAgIHZhciBzaGFkZXIgPSB0aGlzLmdldFNoYWRlcihyZW5kZXJlcik7XG5cbiAgICByZW5kZXJlci5maWx0ZXJNYW5hZ2VyLmFwcGx5RmlsdGVyKHNoYWRlciwgaW5wdXQsIG91dHB1dCwgY2xlYXIpO1xufTtcblxuLyoqXG4gKiBTeW5jcyBhIHVuaWZvcm0gYmV0d2VlbiB0aGUgY2xhc3Mgb2JqZWN0IGFuZCB0aGUgc2hhZGVycy5cbiAqXG4gKi9cbkFic3RyYWN0RmlsdGVyLnByb3RvdHlwZS5zeW5jVW5pZm9ybSA9IGZ1bmN0aW9uICh1bmlmb3JtKVxue1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5zaGFkZXJzLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICB7XG4gICAgICAgIHRoaXMuc2hhZGVyc1tpXS5zeW5jVW5pZm9ybSh1bmlmb3JtKTtcbiAgICB9XG59O1xuXG4vKlxuQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGZyYW1lQnVmZmVyKVxue1xuICAgIC8vIFRPRE8gOilcbn07XG4qL1xuIiwidmFyIEFic3RyYWN0RmlsdGVyID0gcmVxdWlyZSgnLi9BYnN0cmFjdEZpbHRlcicpO1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG4vKipcbiAqXG4gKiBCYXNpYyBGWEFBIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIHRoZSBjb2RlIG9uIGdlZWtzM2QuY29tIHdpdGggdGhlXG4gKiBtb2RpZmljYXRpb24gdGhhdCB0aGUgdGV4dHVyZTJETG9kIHN0dWZmIHdhcyByZW1vdmVkIHNpbmNlIGl0J3NcbiAqIHVuc3VwcG9ydGVkIGJ5IFdlYkdMLlxuICpcbiAqIC0tXG4gKiBGcm9tOlxuICogaHR0cHM6Ly9naXRodWIuY29tL21pdHN1aGlrby93ZWJnbC1tZWluY3JhZnRcbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIEFic3RyYWN0RmlsdGVyXG4gKiBAbWVtYmVyb2YgUElYSVxuICpcbiAqL1xuZnVuY3Rpb24gRlhBQUZpbHRlcigpXG57XG4gICAgQWJzdHJhY3RGaWx0ZXIuY2FsbCh0aGlzLFxuICAgICAgICAvLyB2ZXJ0ZXggc2hhZGVyXG4gICAgICAgIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL0ZYQUEudmVydCcsICd1dGY4JyksXG4gICAgICAgIC8vIGZyYWdtZW50IHNoYWRlclxuICAgICAgICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9GWEFBLmZyYWcnLCAndXRmOCcpLFxuICAgICAgICAvLyB1bmlmb3Jtc1xuICAgICAgICB7XG4gICAgICAgICAgICByZXNvbHV0aW9uOiB7IHR5cGU6ICd2MicsIHZhbHVlOiB7IHg6IDEsIHk6IDEgfSB9XG4gICAgICAgIH1cbiAgICApO1xuXG59XG5cbkZYQUFGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdEZpbHRlci5wcm90b3R5cGUpO1xuRlhBQUZpbHRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGWEFBRmlsdGVyO1xubW9kdWxlLmV4cG9ydHMgPSBGWEFBRmlsdGVyO1xuXG5GWEFBRmlsdGVyLnByb3RvdHlwZS5hcHBseUZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJlciwgaW5wdXQsIG91dHB1dClcbntcbiAgICB2YXIgZmlsdGVyTWFuYWdlciA9IHJlbmRlcmVyLmZpbHRlck1hbmFnZXI7XG5cbiAgICB2YXIgc2hhZGVyID0gdGhpcy5nZXRTaGFkZXIoIHJlbmRlcmVyICk7XG4gICAgIC8vIGRyYXcgdGhlIGZpbHRlci4uLlxuICAgIGZpbHRlck1hbmFnZXIuYXBwbHlGaWx0ZXIoc2hhZGVyLCBpbnB1dCwgb3V0cHV0KTtcbn07XG4iLCJ2YXIgQWJzdHJhY3RGaWx0ZXIgPSByZXF1aXJlKCcuL0Fic3RyYWN0RmlsdGVyJyksXG4gICAgbWF0aCA9ICByZXF1aXJlKCcuLi8uLi8uLi9tYXRoJyk7XG5cbi8vIGZzIG5lZWRzIHRvIGJlIGRlY2FscmVkIGFsb25lIGZvciBicmZzIHRvIHBpY2sgaXQgdXAgcHJvcGVybHkuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG4vKipcbiAqIFRoZSBTcHJpdGVNYXNrRmlsdGVyIGNsYXNzXG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBBYnN0cmFjdEZpbHRlclxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBzcHJpdGUge1Nwcml0ZX0gdGhlIHRhcmdldCBzcHJpdGVcbiAqL1xuZnVuY3Rpb24gU3ByaXRlTWFza0ZpbHRlcihzcHJpdGUpXG57XG4gICAgdmFyIG1hc2tNYXRyaXggPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuICAgIEFic3RyYWN0RmlsdGVyLmNhbGwodGhpcyxcbiAgICAgICAgZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvc3ByaXRlTWFza0ZpbHRlci52ZXJ0JywgJ3V0ZjgnKSxcbiAgICAgICAgZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvc3ByaXRlTWFza0ZpbHRlci5mcmFnJywgJ3V0ZjgnKSxcbiAgICAgICAge1xuICAgICAgICAgICAgbWFzazogICAgICAgICAgIHsgdHlwZTogJ3NhbXBsZXIyRCcsIHZhbHVlOiBzcHJpdGUuX3RleHR1cmUgfSxcbiAgICAgICAgICAgIGFscGhhOiAgICAgICAgICB7IHR5cGU6ICdmJywgdmFsdWU6IDF9LFxuICAgICAgICAgICAgb3RoZXJNYXRyaXg6ICAgIHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbWFza01hdHJpeC50b0FycmF5KHRydWUpIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLm1hc2tTcHJpdGUgPSBzcHJpdGU7XG4gICAgdGhpcy5tYXNrTWF0cml4ID0gbWFza01hdHJpeDtcbn1cblxuU3ByaXRlTWFza0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RmlsdGVyLnByb3RvdHlwZSk7XG5TcHJpdGVNYXNrRmlsdGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcml0ZU1hc2tGaWx0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZU1hc2tGaWx0ZXI7XG5cbi8qKlxuICogQXBwbGllcyB0aGUgZmlsdGVyID8gQGFsdmluXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBBIHJlZmVyZW5jZSB0byB0aGUgV2ViR0wgcmVuZGVyZXJcbiAqIEBwYXJhbSBpbnB1dCB7UmVuZGVyVGFyZ2V0fVxuICogQHBhcmFtIG91dHB1dCB7UmVuZGVyVGFyZ2V0fVxuICovXG5TcHJpdGVNYXNrRmlsdGVyLnByb3RvdHlwZS5hcHBseUZpbHRlciA9IGZ1bmN0aW9uIChyZW5kZXJlciwgaW5wdXQsIG91dHB1dClcbntcbiAgICB2YXIgZmlsdGVyTWFuYWdlciA9IHJlbmRlcmVyLmZpbHRlck1hbmFnZXI7XG5cbiAgICB0aGlzLnVuaWZvcm1zLm1hc2sudmFsdWUgPSB0aGlzLm1hc2tTcHJpdGUuX3RleHR1cmU7XG5cbiAgICBmaWx0ZXJNYW5hZ2VyLmNhbGN1bGF0ZU1hcHBlZE1hdHJpeChpbnB1dC5mcmFtZSwgdGhpcy5tYXNrU3ByaXRlLCB0aGlzLm1hc2tNYXRyaXgpO1xuXG4gICAgdGhpcy51bmlmb3Jtcy5vdGhlck1hdHJpeC52YWx1ZSA9IHRoaXMubWFza01hdHJpeC50b0FycmF5KHRydWUpO1xuICAgIHRoaXMudW5pZm9ybXMuYWxwaGEudmFsdWUgPSB0aGlzLm1hc2tTcHJpdGUud29ybGRBbHBoYTtcblxuICAgIHZhciBzaGFkZXIgPSB0aGlzLmdldFNoYWRlcihyZW5kZXJlcik7XG4gICAgIC8vIGRyYXcgdGhlIGZpbHRlci4uLlxuICAgIGZpbHRlck1hbmFnZXIuYXBwbHlGaWx0ZXIoc2hhZGVyLCBpbnB1dCwgb3V0cHV0KTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3ByaXRlTWFza0ZpbHRlci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dHVyZSB1c2VkIGZvciB0aGUgZGlzcGxhY2VtZW50IG1hcC4gTXVzdCBiZSBwb3dlciBvZiAyIHNpemVkIHRleHR1cmUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtUZXh0dXJlfVxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGVNYXNrRmlsdGVyI1xuICAgICAqL1xuICAgIG1hcDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLm1hc2sudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zLm1hc2sudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2Zmc2V0IHVzZWQgdG8gbW92ZSB0aGUgZGlzcGxhY2VtZW50IG1hcC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1BvaW50fVxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGVNYXNrRmlsdGVyI1xuICAgICAqL1xuICAgIG9mZnNldDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybXMub2Zmc2V0LnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zLm9mZnNldC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJ2YXIgV2ViR0xNYW5hZ2VyID0gcmVxdWlyZSgnLi9XZWJHTE1hbmFnZXInKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAZXh0ZW5kcyBXZWJHbE1hbmFnZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgbWFuYWdlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIEJsZW5kTW9kZU1hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IDk5OTk5O1xufVxuXG5CbGVuZE1vZGVNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5CbGVuZE1vZGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJsZW5kTW9kZU1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IEJsZW5kTW9kZU1hbmFnZXI7XG5cbi8qKlxuICogU2V0cy11cCB0aGUgZ2l2ZW4gYmxlbmRNb2RlIGZyb20gV2ViR0wncyBwb2ludCBvZiB2aWV3LlxuICpcbiAqIEBwYXJhbSBibGVuZE1vZGUge251bWJlcn0gdGhlIGJsZW5kTW9kZSwgc2hvdWxkIGJlIGEgUGl4aSBjb25zdCwgc3VjaCBhcyBCbGVuZE1vZGVzLkFERFxuICovXG5CbGVuZE1vZGVNYW5hZ2VyLnByb3RvdHlwZS5zZXRCbGVuZE1vZGUgPSBmdW5jdGlvbiAoYmxlbmRNb2RlKVxue1xuICAgIGlmICh0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPT09IGJsZW5kTW9kZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSBibGVuZE1vZGU7XG5cbiAgICB2YXIgbW9kZSA9IHRoaXMucmVuZGVyZXIuYmxlbmRNb2Rlc1t0aGlzLmN1cnJlbnRCbGVuZE1vZGVdO1xuICAgIHRoaXMucmVuZGVyZXIuZ2wuYmxlbmRGdW5jKG1vZGVbMF0sIG1vZGVbMV0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4vV2ViR0xNYW5hZ2VyJyksXG4gICAgUmVuZGVyVGFyZ2V0ID0gcmVxdWlyZSgnLi4vdXRpbHMvUmVuZGVyVGFyZ2V0JyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi8uLi9jb25zdCcpLFxuICAgIFF1YWQgPSByZXF1aXJlKCcuLi91dGlscy9RdWFkJyksXG4gICAgbWF0aCA9ICByZXF1aXJlKCcuLi8uLi8uLi9tYXRoJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgV2ViR0xNYW5hZ2VyXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBGaWx0ZXJNYW5hZ2VyKHJlbmRlcmVyKVxue1xuICAgIFdlYkdMTWFuYWdlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyU3RhY2sgPSBbXTtcblxuICAgIHRoaXMuZmlsdGVyU3RhY2sucHVzaCh7XG4gICAgICAgIHJlbmRlclRhcmdldDpyZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LFxuICAgICAgICBmaWx0ZXI6W10sXG4gICAgICAgIGJvdW5kczpudWxsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnlbXX1cbiAgICAgKi9cbiAgICB0aGlzLnRleHR1cmVQb29sID0gW107XG5cbiAgICAvLyBsaXN0ZW4gZm9yIGNvbnRleHQgYW5kIHVwZGF0ZSBuZWNlc3NhcnkgYnVmZmVyc1xuICAgIC8vVE9ETyBtYWtlIHRoaXMgZHluYW1pYyFcbiAgICAvL1RPRE8gdGVzdCB0aGlzIG91dCBieSBmb3JjZXMgcG93ZXIgb2YgdHdvP1xuICAgIHRoaXMudGV4dHVyZVNpemUgPSBuZXcgbWF0aC5SZWN0YW5nbGUoIDAsIDAsIHJlbmRlcmVyLndpZHRoLCByZW5kZXJlci5oZWlnaHQgKTtcblxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gbnVsbDtcbn1cblxuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdlYkdMTWFuYWdlci5wcm90b3R5cGUpO1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWx0ZXJNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJNYW5hZ2VyO1xuXG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBXZWJHTCBjb250ZXh0IGNoYW5nZS5cbiAqXG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLm9uQ29udGV4dENoYW5nZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy50ZXh0dXJlUG9vbC5sZW5ndGggPSAwO1xuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICB0aGlzLnF1YWQgPSBuZXcgUXVhZChnbCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn1cbiAqIEBwYXJhbSBidWZmZXIge0FycmF5QnVmZmVyfVxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5zZXRGaWx0ZXJTdGFjayA9IGZ1bmN0aW9uICggZmlsdGVyU3RhY2sgKVxue1xuICAgIHRoaXMuZmlsdGVyU3RhY2sgPSBmaWx0ZXJTdGFjaztcbn07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgZmlsdGVyIGFuZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IGZpbHRlciBzdGFjay5cbiAqXG4gKiBAcGFyYW0gZmlsdGVyQmxvY2sge29iamVjdH0gdGhlIGZpbHRlciB0aGF0IHdpbGwgYmUgcHVzaGVkIHRvIHRoZSBjdXJyZW50IGZpbHRlciBzdGFja1xuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5wdXNoRmlsdGVyID0gZnVuY3Rpb24gKHRhcmdldCwgZmlsdGVycylcbntcbiAgICAvLyBnZXQgdGhlIGJvdW5kcyBvZiB0aGUgb2JqZWN0Li5cbiAgICB2YXIgYm91bmRzID0gdGFyZ2V0LmZpbHRlckFyZWEgfHwgdGFyZ2V0LmdldEJvdW5kcygpO1xuICAgIC8vYm91bmRzID0gYm91bmRzLmNsb25lKCk7XG5cbiAgICAvLyByb3VuZCBvZmYgdGhlIHJlY3RhbmdsZSB0byBnZXQgYSBuaWNlIHNtb29vb29vb3RoIGZpbHRlciA6KVxuICAgIGJvdW5kcy54ID0gYm91bmRzLnggfCAwO1xuICAgIGJvdW5kcy55ID0gYm91bmRzLnkgfCAwO1xuICAgIGJvdW5kcy53aWR0aCA9IGJvdW5kcy53aWR0aCB8IDA7XG4gICAgYm91bmRzLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgfCAwO1xuXG5cbiAgICAvLyBwYWRkaW5nIVxuICAgIHZhciBwYWRkaW5nID0gZmlsdGVyc1swXS5wYWRkaW5nIHwgMDtcbiAgICBib3VuZHMueCAtPSBwYWRkaW5nO1xuICAgIGJvdW5kcy55IC09IHBhZGRpbmc7XG4gICAgYm91bmRzLndpZHRoICs9IHBhZGRpbmcgKiAyO1xuICAgIGJvdW5kcy5oZWlnaHQgKz0gcGFkZGluZyAqIDI7XG5cblxuICAgIGlmKHRoaXMucmVuZGVyZXIuY3VycmVudFJlbmRlclRhcmdldC50cmFuc2Zvcm0pXG4gICAge1xuICAgICAgICAvL1RPRE8gdGhpcyB3aWxsIGJyZWFrIGlmIHRoZSByZW5kZXJUZXh0dXJlIHRyYW5zZm9ybSBpcyBhbnl0aGluZyBvdGhlciB0aGFuIGEgdHJhbnNsYXRpb24uXG4gICAgICAgIC8vV2lsbCBuZWVkIHRvIHRha2UgdGhlIGZ1bGwgbWF0cml4IHRyYW5zZm9ybSBpbnRvIGFjb3VudC4uXG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQudHJhbnNmb3JtO1xuXG4gICAgICAgIGJvdW5kcy54ICs9IHRyYW5zZm9ybS50eDtcbiAgICAgICAgYm91bmRzLnkgKz0gdHJhbnNmb3JtLnR5O1xuXG4gICAgICAgIHRoaXMuY2FwRmlsdGVyQXJlYSggYm91bmRzICk7XG5cbiAgICAgICAgYm91bmRzLnggLT0gdHJhbnNmb3JtLnR4O1xuICAgICAgICBib3VuZHMueSAtPSB0cmFuc2Zvcm0udHk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgICB0aGlzLmNhcEZpbHRlckFyZWEoIGJvdW5kcyApO1xuICAgIH1cblxuXG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSBib3VuZHM7XG5cbiAgICB2YXIgdGV4dHVyZSA9IHRoaXMuZ2V0UmVuZGVyVGFyZ2V0KCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFJlbmRlclRhcmdldCh0ZXh0dXJlKTtcblxuICAgIC8vIGNsZWFyIHRoZSB0ZXh0dXJlLi5cbiAgICB0ZXh0dXJlLmNsZWFyKCk7XG5cbiAgICAvLyBUT0RPIGdldCByaWQgb2Ygb2JqZWN0IGNyZWF0aW9uIVxuICAgIHRoaXMuZmlsdGVyU3RhY2sucHVzaCh7XG4gICAgICAgIHJlbmRlclRhcmdldDogdGV4dHVyZSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXJzXG4gICAgfSk7XG5cbn07XG5cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBsYXN0IGZpbHRlciBmcm9tIHRoZSBmaWx0ZXIgc3RhY2sgYW5kIHJldHVybnMgaXQuXG4gKlxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5wb3BGaWx0ZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBmaWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJTdGFjay5wb3AoKTtcbiAgICB2YXIgcHJldmlvdXNGaWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJTdGFja1t0aGlzLmZpbHRlclN0YWNrLmxlbmd0aC0xXTtcblxuICAgIHZhciBpbnB1dCA9IGZpbHRlckRhdGEucmVuZGVyVGFyZ2V0O1xuXG4gICAgdmFyIG91dHB1dCA9IHByZXZpb3VzRmlsdGVyRGF0YS5yZW5kZXJUYXJnZXQ7XG5cbiAgICAvLyB1c2UgcHJvZ3JhbVxuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cblxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5wdXQuZnJhbWU7XG5cbiAgICB0aGlzLnF1YWQubWFwKHRoaXMudGV4dHVyZVNpemUsIGlucHV0LmZyYW1lKTtcblxuXG4gICAgLy8gVE9ETy4uIHRoaXMgcHJvYmFibHkgb25seSBuZWVkcyB0byBiZSBkb25lIG9uY2UhXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMucXVhZC52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMucXVhZC5pbmRleEJ1ZmZlcik7XG5cbiAgICB2YXIgZmlsdGVycyA9IGZpbHRlckRhdGEuZmlsdGVyO1xuXG4gICAgLy8gYXNzdW1pbmcgYWxsIGZpbHRlcnMgZm9sbG93IHRoZSBjb3JyZWN0IGZvcm1hdD8/XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuZGVmYXVsdFNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5kZWZhdWx0U2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAyICogNCAqIDQpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLmRlZmF1bHRTaGFkZXIuYXR0cmlidXRlcy5hQ29sb3IsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgNCAqIDQgKiA0KTtcblxuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMSlcbiAgICB7XG4gICAgICAgIC8vIFRPRE8gKGNlbmdsZXIpIC0gVGhlcmUgaGFzIHRvIGJlIGEgYmV0dGVyIHdheSB0aGVuIHNldHRpbmcgdGhpcyBlYWNoIHRpbWU/XG4gICAgICAgIGlmIChmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbHRlcnNbMF0udW5pZm9ybXMuZGltZW5zaW9ucy52YWx1ZVswXSA9IHRoaXMucmVuZGVyZXIud2lkdGg7XG4gICAgICAgICAgICBmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMV0gPSB0aGlzLnJlbmRlcmVyLmhlaWdodDtcbiAgICAgICAgICAgIGZpbHRlcnNbMF0udW5pZm9ybXMuZGltZW5zaW9ucy52YWx1ZVsyXSA9IHRoaXMucXVhZC52ZXJ0aWNlc1swXTtcbiAgICAgICAgICAgIGZpbHRlcnNbMF0udW5pZm9ybXMuZGltZW5zaW9ucy52YWx1ZVszXSA9IHRoaXMucXVhZC52ZXJ0aWNlc1s1XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcnNbMF0uYXBwbHlGaWx0ZXIoIHRoaXMucmVuZGVyZXIsIGlucHV0LCBvdXRwdXQgKTtcbiAgICAgICAgdGhpcy5yZXR1cm5SZW5kZXJUYXJnZXQoIGlucHV0ICk7XG5cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdmFyIGZsaXBUZXh0dXJlID0gaW5wdXQ7XG4gICAgICAgIHZhciBmbG9wVGV4dHVyZSA9IHRoaXMuZ2V0UmVuZGVyVGFyZ2V0KHRydWUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGgtMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gZmlsdGVyc1tpXTtcblxuICAgICAgICAgICAgLy8gVE9ETyAoY2VuZ2xlcikgLSBUaGVyZSBoYXMgdG8gYmUgYSBiZXR0ZXIgd2F5IHRoZW4gc2V0dGluZyB0aGlzIGVhY2ggdGltZT9cbiAgICAgICAgICAgIGlmIChmaWx0ZXIudW5pZm9ybXMuZGltZW5zaW9ucylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIudW5pZm9ybXMuZGltZW5zaW9ucy52YWx1ZVswXSA9IHRoaXMucmVuZGVyZXIud2lkdGg7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMV0gPSB0aGlzLnJlbmRlcmVyLmhlaWdodDtcbiAgICAgICAgICAgICAgICBmaWx0ZXIudW5pZm9ybXMuZGltZW5zaW9ucy52YWx1ZVsyXSA9IHRoaXMucXVhZC52ZXJ0aWNlc1swXTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIudW5pZm9ybXMuZGltZW5zaW9ucy52YWx1ZVszXSA9IHRoaXMucXVhZC52ZXJ0aWNlc1s1XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsdGVyLmFwcGx5RmlsdGVyKCB0aGlzLnJlbmRlcmVyLCBmbGlwVGV4dHVyZSwgZmxvcFRleHR1cmUgKTtcblxuICAgICAgICAgICAgdmFyIHRlbXAgPSBmbGlwVGV4dHVyZTtcbiAgICAgICAgICAgIGZsaXBUZXh0dXJlID0gZmxvcFRleHR1cmU7XG4gICAgICAgICAgICBmbG9wVGV4dHVyZSA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJzW2ZpbHRlcnMubGVuZ3RoLTFdLmFwcGx5RmlsdGVyKCB0aGlzLnJlbmRlcmVyLCBmbGlwVGV4dHVyZSwgb3V0cHV0ICk7XG5cbiAgICAgICAgdGhpcy5yZXR1cm5SZW5kZXJUYXJnZXQoIGZsaXBUZXh0dXJlICk7XG4gICAgICAgIHRoaXMucmV0dXJuUmVuZGVyVGFyZ2V0KCBmbG9wVGV4dHVyZSApO1xuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJEYXRhLmZpbHRlcjtcbn07XG5cbi8qKlxuICogR3JhYnMgYW4gcmVuZGVyIHRhcmdldCBmcm9tIHRoZSBpbnRlcm5hbCBwb29sXG4gKlxuICogQHBhcmFtIGNsZWFyIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB3ZSBuZWVkIHRvIGNsZWFyIHRoZSBSZW5kZXJUYXJnZXRcbiAqIEByZXR1cm4ge1JlbmRlclRhcmdldH1cbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUuZ2V0UmVuZGVyVGFyZ2V0ID0gZnVuY3Rpb24gKCBjbGVhciApXG57XG4gICAgdmFyIHJlbmRlclRhcmdldCA9IHRoaXMudGV4dHVyZVBvb2wucG9wKCkgfHwgbmV3IFJlbmRlclRhcmdldCh0aGlzLnJlbmRlcmVyLmdsLCB0aGlzLnRleHR1cmVTaXplLndpZHRoLCB0aGlzLnRleHR1cmVTaXplLmhlaWdodCwgQ09OU1QuU0NBTEVfTU9ERVMuTElORUFSLCB0aGlzLnJlbmRlcmVyLnJlc29sdXRpb24gKiBDT05TVC5GSUxURVJfUkVTT0xVVElPTik7XG4gICAgcmVuZGVyVGFyZ2V0LmZyYW1lID0gdGhpcy5jdXJyZW50RnJhbWU7XG5cbiAgICBpZiAoY2xlYXIpXG4gICAge1xuICAgICAgICByZW5kZXJUYXJnZXQuY2xlYXIodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclRhcmdldDtcbn07XG5cbi8qXG4gKiBSZXR1cm5zIGEgUmVuZGVyVGFyZ2V0IHRvIHRoZSBpbnRlcm5hbCBwb29sXG4gKiBAcGFyYW0gcmVuZGVyVGFyZ2V0IHtSZW5kZXJUYXJnZXR9IFRoZSBSZW5kZXJUYXJnZXQgd2Ugd2FudCB0byByZXR1cm4gdG8gdGhlIHBvb2xcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUucmV0dXJuUmVuZGVyVGFyZ2V0ID0gZnVuY3Rpb24gKHJlbmRlclRhcmdldClcbntcbiAgICB0aGlzLnRleHR1cmVQb29sLnB1c2goIHJlbmRlclRhcmdldCApO1xufTtcblxuLypcbiAqIEFwcGxpZXMgdGhlIGZpbHRlclxuICogQHBhcmFtIHNoYWRlciB7U2hhZGVyfSBUaGUgc2hhZGVyIHRvIHVwbG9hZFxuICogQHBhcmFtIGlucHV0VGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gb3V0cHV0VGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gY2xlYXIge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHdlIHdhbnQgdG8gY2xlYXIgdGhlIG91dHB1dFRhcmdldFxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5hcHBseUZpbHRlciA9IGZ1bmN0aW9uIChzaGFkZXIsIGlucHV0VGFyZ2V0LCBvdXRwdXRUYXJnZXQsIGNsZWFyKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFJlbmRlclRhcmdldChvdXRwdXRUYXJnZXQpO1xuXG4gICAgaWYgKGNsZWFyKVxuICAgIHtcbiAgICAgICAgb3V0cHV0VGFyZ2V0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBzaGFkZXJcbiAgICB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuc2V0U2hhZGVyKHNoYWRlcik7XG5cbiAgICAvLyBUT0RPIChjZW5nbGVyKSAtIENhbiB0aGlzIGJlIGNhY2hlZCBhbmQgbm90IGB0b0FycmF5YGVkIGVhY2ggZnJhbWU/XG4gICAgc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXgudmFsdWUgPSB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpO1xuXG4gICAgLy9UT0RPIGNhbiB0aGlzIGJlIG9wdGltaXNlZD9cbiAgICBzaGFkZXIuc3luY1VuaWZvcm1zKCk7XG4vKlxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAyICogNCAqIDQpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYUNvbG9yLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDQgKiA0ICogNCk7XG4qL1xuXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgaW5wdXRUYXJnZXQudGV4dHVyZSk7XG5cbiAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCA2LCBnbC5VTlNJR05FRF9TSE9SVCwgMCApO1xufTtcblxuLypcbiAqIENhbGN1bGF0ZXMgdGhlIG1hcHBlZCBtYXRyaXhcbiAqIEBwYXJhbSBmaWx0ZXJBcmVhIHtSZWN0YW5nbGV9IFRoZSBmaWx0ZXIgYXJlYVxuICogQHBhcmFtIHNwcml0ZSB7U3ByaXRlfSB0aGUgdGFyZ2V0IHNwcml0ZVxuICogQHBhcmFtIG91dHB1dE1hdHJpeCB7TWF0cml4fSBAYWx2aW5cbiAqL1xuLy8gVE9ETyBwbGF5aW5nIGFyb3VuZCBoZXJlLi4gdGhpcyBpcyB0ZW1wb3JhcnkgLSAod2lsbCBlbmQgdXAgaW4gdGhlIHNoYWRlcilcbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmNhbGN1bGF0ZU1hcHBlZE1hdHJpeCA9IGZ1bmN0aW9uIChmaWx0ZXJBcmVhLCBzcHJpdGUsIG91dHB1dE1hdHJpeClcbntcbiAgICB2YXIgd29ybGRUcmFuc2Zvcm0gPSBzcHJpdGUud29ybGRUcmFuc2Zvcm0uY29weShtYXRoLk1hdHJpeC5URU1QX01BVFJJWCksXG4gICAgdGV4dHVyZSA9IHNwcml0ZS5fdGV4dHVyZS5iYXNlVGV4dHVyZTtcblxuICAgIHZhciBtYXBwZWRNYXRyaXggPSBvdXRwdXRNYXRyaXguaWRlbnRpdHkoKTtcblxuICAgIC8vIHNjYWxlLi5cbiAgICB2YXIgcmF0aW8gPSB0aGlzLnRleHR1cmVTaXplLmhlaWdodCAvIHRoaXMudGV4dHVyZVNpemUud2lkdGg7XG5cbiAgICBtYXBwZWRNYXRyaXgudHJhbnNsYXRlKGZpbHRlckFyZWEueCAvIHRoaXMudGV4dHVyZVNpemUud2lkdGgsIGZpbHRlckFyZWEueSAvIHRoaXMudGV4dHVyZVNpemUuaGVpZ2h0ICk7XG5cbiAgICBtYXBwZWRNYXRyaXguc2NhbGUoMSAsIHJhdGlvKTtcblxuICAgIHZhciB0cmFuc2xhdGVTY2FsZVggPSAodGhpcy50ZXh0dXJlU2l6ZS53aWR0aCAvIHRleHR1cmUud2lkdGgpO1xuICAgIHZhciB0cmFuc2xhdGVTY2FsZVkgPSAodGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgLyB0ZXh0dXJlLmhlaWdodCk7XG5cbiAgICB3b3JsZFRyYW5zZm9ybS50eCAvPSB0ZXh0dXJlLndpZHRoICogdHJhbnNsYXRlU2NhbGVYO1xuICAgIHdvcmxkVHJhbnNmb3JtLnR5IC89IHRleHR1cmUud2lkdGggKiB0cmFuc2xhdGVTY2FsZVg7XG5cbiAgICB3b3JsZFRyYW5zZm9ybS5pbnZlcnQoKTtcblxuICAgIG1hcHBlZE1hdHJpeC5wcmVwZW5kKHdvcmxkVHJhbnNmb3JtKTtcblxuICAgIC8vIGFwcGx5IGludmVyc2Ugc2NhbGUuLlxuICAgIG1hcHBlZE1hdHJpeC5zY2FsZSgxICwgMS9yYXRpbyk7XG5cbiAgICBtYXBwZWRNYXRyaXguc2NhbGUoIHRyYW5zbGF0ZVNjYWxlWCAsIHRyYW5zbGF0ZVNjYWxlWSApO1xuXG4gICAgbWFwcGVkTWF0cml4LnRyYW5zbGF0ZShzcHJpdGUuYW5jaG9yLngsIHNwcml0ZS5hbmNob3IueSk7XG5cbiAgICByZXR1cm4gbWFwcGVkTWF0cml4O1xuXG4gICAgLy8gS2VlcGluZyB0aGUgb3JnaW5hbCBhcyBhIHJlbWluZGVyIHRvIG1lIG9uIGhvdyB0aGlzIHdvcmtzIVxuICAgIC8vXG4gICAgLy8gdmFyIG0gPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuICAgIC8vIC8vIHNjYWxlLi5cbiAgICAvLyB2YXIgcmF0aW8gPSB0aGlzLnRleHR1cmVTaXplLmhlaWdodCAvIHRoaXMudGV4dHVyZVNpemUud2lkdGg7XG5cbiAgICAvLyBtLnRyYW5zbGF0ZShmaWx0ZXJBcmVhLnggLyB0aGlzLnRleHR1cmVTaXplLndpZHRoLCBmaWx0ZXJBcmVhLnkgLyB0aGlzLnRleHR1cmVTaXplLmhlaWdodCk7XG5cblxuICAgIC8vIG0uc2NhbGUoMSAsIHJhdGlvKTtcblxuXG4gICAgLy8gdmFyIHRyYW5zZm9ybSA9IHd0LmNsb25lKCk7XG5cbiAgICAvLyB2YXIgdHJhbnNsYXRlU2NhbGVYID0gKHRoaXMudGV4dHVyZVNpemUud2lkdGggLyA2MjApO1xuICAgIC8vIHZhciB0cmFuc2xhdGVTY2FsZVkgPSAodGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgLyAzODApO1xuXG4gICAgLy8gdHJhbnNmb3JtLnR4IC89IDYyMCAqIHRyYW5zbGF0ZVNjYWxlWDtcbiAgICAvLyB0cmFuc2Zvcm0udHkgLz0gNjIwICogdHJhbnNsYXRlU2NhbGVYO1xuXG4gICAgLy8gdHJhbnNmb3JtLmludmVydCgpO1xuXG4gICAgLy8gdHJhbnNmb3JtLmFwcGVuZChtKTtcblxuICAgIC8vIC8vIGFwcGx5IGludmVyc2Ugc2NhbGUuLlxuICAgIC8vIHRyYW5zZm9ybS5zY2FsZSgxICwgMS9yYXRpbyk7XG5cbiAgICAvLyB0cmFuc2Zvcm0uc2NhbGUoIHRyYW5zbGF0ZVNjYWxlWCAsIHRyYW5zbGF0ZVNjYWxlWSApO1xuXG4gICAgLy8gcmV0dXJuIHRyYW5zZm9ybTtcbn07XG5cbi8qXG4gKiBDb25zdHJhaW5zIHRoZSBmaWx0ZXIgYXJlYSB0byB0aGUgdGV4dHVyZSBzaXplXG4gKiBAcGFyYW0gZmlsdGVyQXJlYSB7UmVjdGFuZ2xlfSBUaGUgZmlsdGVyIGFyZWEgd2Ugd2FudCB0byBjYXBcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUuY2FwRmlsdGVyQXJlYSA9IGZ1bmN0aW9uIChmaWx0ZXJBcmVhKVxue1xuICAgIGlmIChmaWx0ZXJBcmVhLnggPCAwKVxuICAgIHtcbiAgICAgICAgZmlsdGVyQXJlYS53aWR0aCArPSBmaWx0ZXJBcmVhLng7XG4gICAgICAgIGZpbHRlckFyZWEueCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckFyZWEueSA8IDApXG4gICAge1xuICAgICAgICBmaWx0ZXJBcmVhLmhlaWdodCArPSBmaWx0ZXJBcmVhLnk7XG4gICAgICAgIGZpbHRlckFyZWEueSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKCBmaWx0ZXJBcmVhLnggKyBmaWx0ZXJBcmVhLndpZHRoID4gdGhpcy50ZXh0dXJlU2l6ZS53aWR0aCApXG4gICAge1xuICAgICAgICBmaWx0ZXJBcmVhLndpZHRoID0gdGhpcy50ZXh0dXJlU2l6ZS53aWR0aCAtIGZpbHRlckFyZWEueDtcbiAgICB9XG5cbiAgICBpZiAoIGZpbHRlckFyZWEueSArIGZpbHRlckFyZWEuaGVpZ2h0ID4gdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgKVxuICAgIHtcbiAgICAgICAgZmlsdGVyQXJlYS5oZWlnaHQgPSB0aGlzLnRleHR1cmVTaXplLmhlaWdodCAtIGZpbHRlckFyZWEueTtcbiAgICB9XG59O1xuXG4vKlxuICogUmVzaXplcyBhbGwgdGhlIHJlbmRlciB0YXJnZXRzIGluIHRoZSBwb29sXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIG5ldyB3aWR0aFxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgbmV3IGhlaWdodFxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKVxue1xuICAgIHRoaXMudGV4dHVyZVNpemUud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnRleHR1cmVTaXplLmhlaWdodCA9IGhlaWdodDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlUG9vbC5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMudGV4dHVyZVBvb2xbaV0ucmVzaXplKCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgZmlsdGVyIGFuZCByZW1vdmVzIGl0IGZyb20gdGhlIGZpbHRlciBzdGFjay5cbiAqXG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuZmlsdGVyU3RhY2sgPSBudWxsO1xuICAgIHRoaXMub2Zmc2V0WSA9IDA7XG5cbiAgICAvLyBkZXN0cm95IHRleHR1cmVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHR1cmVQb29sLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlUG9vbFtpXS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0dXJlUG9vbCA9IG51bGw7XG59O1xuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4vV2ViR0xNYW5hZ2VyJyksXG4gICAgQWxwaGFNYXNrRmlsdGVyID0gcmVxdWlyZSgnLi4vZmlsdGVycy9TcHJpdGVNYXNrRmlsdGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gTWFza01hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgdGhpcy5zdGVuY2lsU3RhY2sgPSBbXTtcbiAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgIHRoaXMuY291bnQgPSAwO1xuXG4gICAgdGhpcy5hbHBoYU1hc2tQb29sID0gW107XG59XG5cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5NYXNrTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNYXNrTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gTWFza01hbmFnZXI7XG5cbi8qKlxuICogQXBwbGllcyB0aGUgTWFzayBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2suXG4gKlxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc31cbiAqIEBwYXJhbSB3ZWJHTERhdGEge2FueVtdfVxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaE1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCBtYXNrRGF0YSlcbntcbiAgICBpZiAobWFza0RhdGEudGV4dHVyZSlcbiAgICB7XG4gICAgICAgIHRoaXMucHVzaFNwcml0ZU1hc2sodGFyZ2V0LCBtYXNrRGF0YSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMucHVzaFN0ZW5jaWxNYXNrKHRhcmdldCwgbWFza0RhdGEpO1xuICAgIH1cblxufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBsYXN0IG1hc2sgZnJvbSB0aGUgbWFzayBzdGFjayBhbmQgZG9lc24ndCByZXR1cm4gaXQuXG4gKiBcbiAqIEBwYXJhbSB0YXJnZXQge1JlbmRlclRhcmdldH1cbiAqIEBwYXJhbSBtYXNrRGF0YSB7YW55W119XG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BNYXNrID0gZnVuY3Rpb24gKHRhcmdldCwgbWFza0RhdGEpXG57XG4gICAgaWYgKG1hc2tEYXRhLnRleHR1cmUpXG4gICAge1xuICAgICAgICB0aGlzLnBvcFNwcml0ZU1hc2sodGFyZ2V0LCBtYXNrRGF0YSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMucG9wU3RlbmNpbE1hc2sodGFyZ2V0LCBtYXNrRGF0YSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBNYXNrIGFuZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IGZpbHRlciBzdGFjay5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gbWFza0RhdGEge2FueVtdfVxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaFNwcml0ZU1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCBtYXNrRGF0YSlcbntcbiAgICB2YXIgYWxwaGFNYXNrRmlsdGVyID0gdGhpcy5hbHBoYU1hc2tQb29sLnBvcCgpO1xuXG4gICAgaWYgKCFhbHBoYU1hc2tGaWx0ZXIpXG4gICAge1xuICAgICAgICBhbHBoYU1hc2tGaWx0ZXIgPSBbbmV3IEFscGhhTWFza0ZpbHRlcihtYXNrRGF0YSldO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuZmlsdGVyTWFuYWdlci5wdXNoRmlsdGVyKHRhcmdldCwgYWxwaGFNYXNrRmlsdGVyKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCBkb2Vzbid0IHJldHVybiBpdC5cbiAqXG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BTcHJpdGVNYXNrID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZmlsdGVycyA9IHRoaXMucmVuZGVyZXIuZmlsdGVyTWFuYWdlci5wb3BGaWx0ZXIoKTtcblxuICAgIHRoaXMuYWxwaGFNYXNrUG9vbC5wdXNoKGZpbHRlcnMpO1xufTtcblxuXG4vKipcbiAqIEFwcGxpZXMgdGhlIE1hc2sgYW5kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgZmlsdGVyIHN0YWNrLlxuICpcbiAqIEBwYXJhbSB0YXJnZXQge1JlbmRlclRhcmdldH1cbiAqIEBwYXJhbSBtYXNrRGF0YSB7YW55W119XG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wdXNoU3RlbmNpbE1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCBtYXNrRGF0YSlcbntcbiAgICB0aGlzLnJlbmRlcmVyLnN0ZW5jaWxNYW5hZ2VyLnB1c2hNYXNrKG1hc2tEYXRhKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCBkb2Vzbid0IHJldHVybiBpdC5cbiAqIEBwYXJhbSB0YXJnZXQge1JlbmRlclRhcmdldH1cbiAqIEBwYXJhbSBtYXNrRGF0YSB7YW55W119XG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BTdGVuY2lsTWFzayA9IGZ1bmN0aW9uICh0YXJnZXQsIG1hc2tEYXRhKVxue1xuICAgIHRoaXMucmVuZGVyZXIuc3RlbmNpbE1hbmFnZXIucG9wTWFzayhtYXNrRGF0YSk7XG59O1xuXG4iLCJ2YXIgV2ViR0xNYW5hZ2VyID0gcmVxdWlyZSgnLi9XZWJHTE1hbmFnZXInKSxcbiAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVycy9UZXh0dXJlU2hhZGVyJyksXG4gICAgQ29tcGxleFByaW1pdGl2ZVNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcnMvQ29tcGxleFByaW1pdGl2ZVNoYWRlcicpLFxuICAgIFByaW1pdGl2ZVNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcnMvUHJpbWl0aXZlU2hhZGVyJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscycpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFdlYkdMTWFuYWdlclxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gU2hhZGVyTWFuYWdlcihyZW5kZXJlcilcbntcbiAgICBXZWJHTE1hbmFnZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5tYXhBdHRpYnMgPSAxMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfVxuICAgICAqL1xuICAgIHRoaXMuYXR0cmliU3RhdGUgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfVxuICAgICAqL1xuICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4QXR0aWJzOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLmF0dHJpYlN0YXRlW2ldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55W119XG4gICAgICovXG4gICAgdGhpcy5zdGFjayA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY3VycmVudElkID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRTaGFkZXIgPSBudWxsO1xuXG4vLyAgICB0aGlzLmluaXRQbHVnaW5zKCk7XG59XG5cblNoYWRlck1hbmFnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXZWJHTE1hbmFnZXIucHJvdG90eXBlKTtcblNoYWRlck1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2hhZGVyTWFuYWdlcjtcbnV0aWxzLnBsdWdpblRhcmdldC5taXhpbihTaGFkZXJNYW5hZ2VyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXJNYW5hZ2VyO1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgV2ViR0wgY29udGV4dCBjaGFuZ2UuXG4gKlxuICovXG5TaGFkZXJNYW5hZ2VyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuaW5pdFBsdWdpbnMoKTtcblxuICAgIC8vIFRPRE8gLSBXaHkgYXJlIHRoZXNlIG5vdCBwbHVnaW5zPyBXZSBjYW4ndCBkZWNvdXBsZSBwcmltaXRpdmVzIHVubGVzcyB0aGV5IGFyZS4uLi5cbiAgICB0aGlzLmRlZmF1bHRTaGFkZXIgPSBuZXcgVGV4dHVyZVNoYWRlcih0aGlzKTtcbiAgICB0aGlzLnByaW1pdGl2ZVNoYWRlciA9IG5ldyBQcmltaXRpdmVTaGFkZXIodGhpcyk7XG4gICAgdGhpcy5jb21wbGV4UHJpbWl0aXZlU2hhZGVyID0gbmV3IENvbXBsZXhQcmltaXRpdmVTaGFkZXIodGhpcyk7XG59O1xuXG4vKipcbiAqIFRha2VzIHRoZSBhdHRyaWJ1dGVzIGdpdmVuIGluIHBhcmFtZXRlcnMgYW5kIHVwbG9hZHMgdGhlbS5cbiAqXG4gKiBAcGFyYW0gYXR0cmlicyB7QXJyYXl9IGF0dHJpYnNcbiAqL1xuU2hhZGVyTWFuYWdlci5wcm90b3R5cGUuc2V0QXR0cmlicyA9IGZ1bmN0aW9uIChhdHRyaWJzKVxue1xuICAgIC8vIHJlc2V0IHRlbXAgc3RhdGVcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRlbXBBdHRyaWJTdGF0ZS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlW2ldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBuZXcgYXR0cmlic1xuICAgIGZvciAodmFyIGEgaW4gYXR0cmlicylcbiAgICB7XG4gICAgICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlW2F0dHJpYnNbYV1dID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYXR0cmliU3RhdGUubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJTdGF0ZVtpXSAhPT0gdGhpcy50ZW1wQXR0cmliU3RhdGVbaV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmliU3RhdGVbaV0gPSB0aGlzLnRlbXBBdHRyaWJTdGF0ZVtpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmliU3RhdGVbaV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHNoYWRlci5cbiAqXG4gKiBAcGFyYW0gc2hhZGVyIHtTaGFkZXJ9IHRoZSBzaGFkZXIgdG8gdXBsb2FkXG4gKi9cblNoYWRlck1hbmFnZXIucHJvdG90eXBlLnNldFNoYWRlciA9IGZ1bmN0aW9uIChzaGFkZXIpXG57XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRJZCA9PT0gc2hhZGVyLnV1aWQpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudElkID0gc2hhZGVyLnV1aWQ7XG5cbiAgICB0aGlzLmN1cnJlbnRTaGFkZXIgPSBzaGFkZXI7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmdsLnVzZVByb2dyYW0oc2hhZGVyLnByb2dyYW0pO1xuICAgIHRoaXMuc2V0QXR0cmlicyhzaGFkZXIuYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyBvYmplY3QuXG4gKlxuICovXG5TaGFkZXJNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICBXZWJHTE1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZGVzdHJveVBsdWdpbnMoKTtcblxuICAgIHRoaXMuYXR0cmliU3RhdGUgPSBudWxsO1xuXG4gICAgdGhpcy50ZW1wQXR0cmliU3RhdGUgPSBudWxsO1xufTtcbiIsInZhciBXZWJHTE1hbmFnZXIgPSByZXF1aXJlKCcuL1dlYkdMTWFuYWdlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBXZWJHTE1hc2tNYW5hZ2VyKHJlbmRlcmVyKVxue1xuICAgIFdlYkdMTWFuYWdlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcbiAgICB0aGlzLnN0ZW5jaWxNYXNrU3RhY2sgPSBudWxsO1xufVxuXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFdlYkdMTWFza01hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFdlYkdMTWFza01hbmFnZXI7XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgbWFzayBzdGFjayB0aGF0IGlzIHVzZWQgYnkgdGhpcyBtYW5hZ2VyXG4gKiBAcGFyYW0gc3RlbmNpbE1hc2tTdGFjayB7U3RlbmNpbE1hc2tTdGFja30gVGhlIG1hc2sgc3RhY2sgXG4gKlxuICovXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5zZXRNYXNrU3RhY2sgPSBmdW5jdGlvbiAoIHN0ZW5jaWxNYXNrU3RhY2sgKVxue1xuICAgIHRoaXMuc3RlbmNpbE1hc2tTdGFjayA9IHN0ZW5jaWxNYXNrU3RhY2s7XG5cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgaWYgKHN0ZW5jaWxNYXNrU3RhY2suc3RlbmNpbFN0YWNrLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGdsLmRpc2FibGUoZ2wuU1RFTkNJTF9URVNUKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBNYXNrIGFuZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IGZpbHRlciBzdGFjay4gQGFsdmluXG4gKiBcbiAqIEBwYXJhbSBncmFwaGljcyB7R3JhcGhpY3N9XG4gKiBAcGFyYW0gd2ViR0xEYXRhIHthbnlbXX1cbiAqL1xuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaFN0ZW5jaWwgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHdlYkdMRGF0YSlcbntcbiAgICB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQuYXR0YWNoU3RlbmNpbEJ1ZmZlcigpO1xuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbCxcbiAgICAgICAgc21zID0gdGhpcy5zdGVuY2lsTWFza1N0YWNrO1xuXG4gICAgdGhpcy5iaW5kR3JhcGhpY3MoZ3JhcGhpY3MsIHdlYkdMRGF0YSwgdGhpcy5yZW5kZXJlcik7XG5cbiAgICBpZiAoc21zLnN0ZW5jaWxTdGFjay5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICBnbC5lbmFibGUoZ2wuU1RFTkNJTF9URVNUKTtcbiAgICAgICAgZ2wuY2xlYXIoZ2wuU1RFTkNJTF9CVUZGRVJfQklUKTtcbiAgICAgICAgc21zLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICBzbXMuY291bnQgPSAwO1xuICAgIH1cblxuICAgIHNtcy5zdGVuY2lsU3RhY2sucHVzaCh3ZWJHTERhdGEpO1xuXG4gICAgdmFyIGxldmVsID0gc21zLmNvdW50O1xuXG4gICAgZ2wuY29sb3JNYXNrKGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcblxuICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkFMV0FZUywwLDB4RkYpO1xuICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5WRVJUKTtcblxuICAgIC8vIGRyYXcgdGhlIHRyaWFuZ2xlIHN0cmlwIVxuXG4gICAgaWYgKHdlYkdMRGF0YS5tb2RlID09PSAxKVxuICAgIHtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCAtIDQsIGdsLlVOU0lHTkVEX1NIT1JULCAwICk7XG5cbiAgICAgICAgaWYgKHNtcy5yZXZlcnNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwgMHhGRiAtIGxldmVsLCAweEZGKTtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuREVDUik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCxsZXZlbCwgMHhGRik7XG4gICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLklOQ1IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZHJhdyBhIHF1YWQgdG8gaW5jcmVtZW50Li5cbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgNCwgZ2wuVU5TSUdORURfU0hPUlQsICggd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoIC0gNCApICogMiApO1xuXG4gICAgICAgIGlmIChzbXMucmV2ZXJzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsMHhGRi0obGV2ZWwrMSksIDB4RkYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwrMSwgMHhGRik7XG4gICAgICAgIH1cblxuICAgICAgICBzbXMucmV2ZXJzZSA9ICFzbXMucmV2ZXJzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgaWYgKCFzbXMucmV2ZXJzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsIDB4RkYgLSBsZXZlbCwgMHhGRik7XG4gICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLkRFQ1IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwsIDB4RkYpO1xuICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5JTkNSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9TVFJJUCwgIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCwgZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcblxuICAgICAgICBpZiAoIXNtcy5yZXZlcnNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwweEZGLShsZXZlbCsxKSwgMHhGRik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCxsZXZlbCsxLCAweEZGKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLktFRVApO1xuXG4gICAgc21zLmNvdW50Kys7XG59O1xuXG4vKipcbiAqIFRPRE8gdGhpcyBkb2VzIG5vdCBiZWxvbmcgaGVyZSFcbiAqXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfVxuICogQHBhcmFtIHdlYkdMRGF0YSB7QXJyYXl9XG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLmJpbmRHcmFwaGljcyA9IGZ1bmN0aW9uIChncmFwaGljcywgd2ViR0xEYXRhKVxue1xuICAgIC8vaWYgKHRoaXMuX2N1cnJlbnRHcmFwaGljcyA9PT0gZ3JhcGhpY3MpcmV0dXJuO1xuICAgIHRoaXMuX2N1cnJlbnRHcmFwaGljcyA9IGdyYXBoaWNzO1xuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgICAvLyBiaW5kIHRoZSBncmFwaGljcyBvYmplY3QuLlxuICAgIHZhciBzaGFkZXI7Ly8gPSB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIucGx1Z2lucy5wcmltaXRpdmVTaGFkZXI7XG5cbiAgICBpZiAod2ViR0xEYXRhLm1vZGUgPT09IDEpXG4gICAge1xuICAgICAgICBzaGFkZXIgPSB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuY29tcGxleFByaW1pdGl2ZVNoYWRlcjtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuc2V0U2hhZGVyKHNoYWRlcik7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgZ3JhcGhpY3Mud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpKTtcblxuICAgICAgICBnbC51bmlmb3JtM2Z2KHNoYWRlci51bmlmb3Jtcy50aW50Ll9sb2NhdGlvbiwgdXRpbHMuaGV4MnJnYihncmFwaGljcy50aW50KSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybTNmdihzaGFkZXIudW5pZm9ybXMuY29sb3IuX2xvY2F0aW9uLCB3ZWJHTERhdGEuY29sb3IpO1xuXG4gICAgICAgIGdsLnVuaWZvcm0xZihzaGFkZXIudW5pZm9ybXMuYWxwaGEuX2xvY2F0aW9uLCBncmFwaGljcy53b3JsZEFscGhhKTtcblxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgd2ViR0xEYXRhLmJ1ZmZlcik7XG5cbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgNCAqIDIsIDApO1xuXG5cbiAgICAgICAgLy8gbm93IGRvIHRoZSByZXN0Li5cbiAgICAgICAgLy8gc2V0IHRoZSBpbmRleCBidWZmZXIhXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHdlYkdMRGF0YS5pbmRleEJ1ZmZlcik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLmFjdGl2YXRlUHJpbWl0aXZlU2hhZGVyKCk7XG4gICAgICAgIHNoYWRlciA9IHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5wcmltaXRpdmVTaGFkZXI7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlciggc2hhZGVyICk7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgZ3JhcGhpY3Mud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpKTtcblxuICAgICAgICBnbC51bmlmb3JtM2Z2KHNoYWRlci51bmlmb3Jtcy50aW50Ll9sb2NhdGlvbiwgdXRpbHMuaGV4MnJnYihncmFwaGljcy50aW50KSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybTFmKHNoYWRlci51bmlmb3Jtcy5hbHBoYS5fbG9jYXRpb24sIGdyYXBoaWNzLndvcmxkQWxwaGEpO1xuXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB3ZWJHTERhdGEuYnVmZmVyKTtcblxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCA0ICogNiwgMCk7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYUNvbG9yLCA0LCBnbC5GTE9BVCwgZmFsc2UsNCAqIDYsIDIgKiA0KTtcblxuICAgICAgICAvLyBzZXQgdGhlIGluZGV4IGJ1ZmZlciFcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgd2ViR0xEYXRhLmluZGV4QnVmZmVyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRPRE8gQGFsdmluXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfVxuICogQHBhcmFtIHdlYkdMRGF0YSB7QXJyYXl9XG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLnBvcFN0ZW5jaWwgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHdlYkdMRGF0YSlcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsLFxuICAgICAgICBzbXMgPSB0aGlzLnN0ZW5jaWxNYXNrU3RhY2s7XG5cbiAgICBzbXMuc3RlbmNpbFN0YWNrLnBvcCgpO1xuXG4gICAgc21zLmNvdW50LS07XG5cbiAgICBpZiAoc21zLnN0ZW5jaWxTdGFjay5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICAvLyB0aGUgc3RhY2sgaXMgZW1wdHkhXG4gICAgICAgIGdsLmRpc2FibGUoZ2wuU1RFTkNJTF9URVNUKTtcblxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuXG4gICAgICAgIHZhciBsZXZlbCA9IHNtcy5jb3VudDtcblxuICAgICAgICB0aGlzLmJpbmRHcmFwaGljcyhncmFwaGljcywgd2ViR0xEYXRhLCB0aGlzLnJlbmRlcmVyKTtcblxuICAgICAgICBnbC5jb2xvck1hc2soZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIGlmICh3ZWJHTERhdGEubW9kZSA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgc21zLnJldmVyc2UgPSAhc21zLnJldmVyc2U7XG5cbiAgICAgICAgICAgIGlmIChzbXMucmV2ZXJzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwgMHhGRiAtIChsZXZlbCsxKSwgMHhGRik7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5JTkNSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCxsZXZlbCsxLCAweEZGKTtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLkRFQ1IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkcmF3IGEgcXVhZCB0byBpbmNyZW1lbnQuLlxuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgNCwgZ2wuVU5TSUdORURfU0hPUlQsICggd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoIC0gNCApICogMiApO1xuXG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5BTFdBWVMsMCwweEZGKTtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5WRVJUKTtcblxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgdHJpYW5nbGUgc3RyaXAhXG4gICAgICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVfRkFOLCAgd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoIC0gNCwgZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcblxuICAgICAgICAgICAgaWYgKCFzbXMucmV2ZXJzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwweEZGLShsZXZlbCksIDB4RkYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLGxldmVsLCAweEZGKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIjw8Pj5cIilcbiAgICAgICAgICAgIGlmICghc21zLnJldmVyc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsIDB4RkYgLSAobGV2ZWwrMSksIDB4RkYpO1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5DUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwrMSwgMHhGRik7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5ERUNSKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX1NUUklQLCAgd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoLCBnbC5VTlNJR05FRF9TSE9SVCwgMCApO1xuXG4gICAgICAgICAgICBpZiAoIXNtcy5yZXZlcnNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLDB4RkYtKGxldmVsKSwgMHhGRik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwsIDB4RkYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2wuY29sb3JNYXNrKHRydWUsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLktFRVApO1xuXG5cbiAgICB9XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBtYXNrIHN0YWNrLlxuICpcbiAqL1xuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgV2ViR0xNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnN0ZW5jaWxNYXNrU3RhY2suc3RlbmNpbFN0YWNrID0gbnVsbDtcbn07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgTWFzayBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2suXG4gKlxuICogQHBhcmFtIG1hc2tEYXRhIHthbnlbXX0gVGhlIG1hc2sgZGF0YSBzdHJ1Y3R1cmUgdG8gdXNlXG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLnB1c2hNYXNrID0gZnVuY3Rpb24gKG1hc2tEYXRhKVxue1xuXG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldE9iamVjdFJlbmRlcmVyKHRoaXMucmVuZGVyZXIucGx1Z2lucy5ncmFwaGljcyk7XG5cbiAgICBpZiAobWFza0RhdGEuZGlydHkpXG4gICAge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuZ3JhcGhpY3MudXBkYXRlR3JhcGhpY3MobWFza0RhdGEsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgIH1cblxuICAgIGlmICghbWFza0RhdGEuX3dlYkdMW3RoaXMucmVuZGVyZXIuZ2wuaWRdLmRhdGEubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHVzaFN0ZW5jaWwobWFza0RhdGEsIG1hc2tEYXRhLl93ZWJHTFt0aGlzLnJlbmRlcmVyLmdsLmlkXS5kYXRhWzBdLCB0aGlzLnJlbmRlcmVyKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCBkb2Vzbid0IHJldHVybiBpdC5cbiAqXG4gKiBAcGFyYW0gbWFza0RhdGEge2FueVtdfVxuICovXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BNYXNrID0gZnVuY3Rpb24gKG1hc2tEYXRhKVxue1xuICAgIHRoaXMucmVuZGVyZXIuc2V0T2JqZWN0UmVuZGVyZXIodGhpcy5yZW5kZXJlci5wbHVnaW5zLmdyYXBoaWNzKTtcblxuICAgIHRoaXMucG9wU3RlbmNpbChtYXNrRGF0YSwgbWFza0RhdGEuX3dlYkdMW3RoaXMucmVuZGVyZXIuZ2wuaWRdLmRhdGFbMF0sIHRoaXMucmVuZGVyZXIpO1xufTtcblxuIiwiLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBXZWJHTE1hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVyIHRoaXMgbWFuYWdlciB3b3JrcyBmb3IuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnJlbmRlcmVyLm9uKCdjb250ZXh0JywgdGhpcy5fb25Db250ZXh0Q2hhbmdlRm4gPSBmdW5jdGlvbigpe1xuXG4gICAgXHRzZWxmLm9uQ29udGV4dENoYW5nZSgpO1xuXG4gICAgfSk7XG59XG5cbldlYkdMTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXZWJHTE1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFdlYkdMTWFuYWdlcjtcblxuLyoqXG4gKiBHZW5lcmljIG1ldGhvZCBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIFdlYkdMIGNvbnRleHQgY2hhbmdlLlxuICpcbiAqL1xuV2ViR0xNYW5hZ2VyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuXHQvLyBkbyBzb21lIGNvZGVzIGluaXQhXG59O1xuXG4vKipcbiAqIEdlbmVyaWMgZGVzdHJveSBtZXRob2RzIHRvIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHN1YmNsYXNzXG4gKlxuICovXG5XZWJHTE1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMucmVuZGVyZXIub2ZmKCdjb250ZXh0JywgdGhpcy5fb25Db250ZXh0Q2hhbmdlRm4pO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG59O1xuIiwidmFyIFNoYWRlciA9IHJlcXVpcmUoJy4vU2hhZGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU2hhZGVyXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gQ29tcGxleFByaW1pdGl2ZVNoYWRlcihzaGFkZXJNYW5hZ2VyKVxue1xuICAgIFNoYWRlci5jYWxsKHRoaXMsXG4gICAgICAgIHNoYWRlck1hbmFnZXIsXG4gICAgICAgIC8vIHZlcnRleCBzaGFkZXJcbiAgICAgICAgW1xuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4OycsXG4gICAgICAgICAgICAndW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7JyxcblxuICAgICAgICAgICAgJ3VuaWZvcm0gdmVjMyB0aW50OycsXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCBhbHBoYTsnLFxuICAgICAgICAgICAgJ3VuaWZvcm0gdmVjMyBjb2xvcjsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiwgMS4wKSkueHksIDAuMCwgMS4wKTsnLFxuICAgICAgICAgICAgJyAgIHZDb2xvciA9IHZlYzQoY29sb3IgKiBhbHBoYSAqIHRpbnQsIGFscGhhKTsnLC8vXCIgKiB2ZWM0KHRpbnQgKiBhbHBoYSwgYWxwaGEpOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gZnJhZ21lbnQgc2hhZGVyXG4gICAgICAgIFtcbiAgICAgICAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gdkNvbG9yOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gY3VzdG9tIHVuaWZvcm1zXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpbnQ6ICAgeyB0eXBlOiAnM2YnLCB2YWx1ZTogWzAsIDAsIDBdIH0sXG4gICAgICAgICAgICBhbHBoYTogIHsgdHlwZTogJzFmJywgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgIGNvbG9yOiAgeyB0eXBlOiAnM2YnLCB2YWx1ZTogWzAsMCwwXSB9LFxuICAgICAgICAgICAgdHJhbnNsYXRpb25NYXRyaXg6IHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheSg5KSB9LFxuICAgICAgICAgICAgcHJvamVjdGlvbk1hdHJpeDogeyB0eXBlOiAnbWF0MycsIHZhbHVlOiBuZXcgRmxvYXQzMkFycmF5KDkpIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICB7XG4gICAgICAgICAgICBhVmVydGV4UG9zaXRpb246MFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuQ29tcGxleFByaW1pdGl2ZVNoYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNoYWRlci5wcm90b3R5cGUpO1xuQ29tcGxleFByaW1pdGl2ZVNoYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb21wbGV4UHJpbWl0aXZlU2hhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBDb21wbGV4UHJpbWl0aXZlU2hhZGVyO1xuIiwidmFyIFNoYWRlciA9IHJlcXVpcmUoJy4vU2hhZGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU2hhZGVyXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gUHJpbWl0aXZlU2hhZGVyKHNoYWRlck1hbmFnZXIpXG57XG4gICAgU2hhZGVyLmNhbGwodGhpcyxcbiAgICAgICAgc2hhZGVyTWFuYWdlcixcbiAgICAgICAgLy8gdmVydGV4IHNoYWRlclxuICAgICAgICBbXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uOycsXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzQgYUNvbG9yOycsXG5cbiAgICAgICAgICAgICd1bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCBhbHBoYTsnLFxuICAgICAgICAgICAgJ3VuaWZvcm0gZmxvYXQgZmxpcFk7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIHZlYzMgdGludDsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiwgMS4wKSkueHksIDAuMCwgMS4wKTsnLFxuICAgICAgICAgICAgJyAgIHZDb2xvciA9IGFDb2xvciAqIHZlYzQodGludCAqIGFscGhhLCBhbHBoYSk7JyxcbiAgICAgICAgICAgICd9J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgICAvLyBmcmFnbWVudCBzaGFkZXJcbiAgICAgICAgW1xuICAgICAgICAgICAgJ3ByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OycsXG5cbiAgICAgICAgICAgICd2YXJ5aW5nIHZlYzQgdkNvbG9yOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCl7JyxcbiAgICAgICAgICAgICcgICBnbF9GcmFnQ29sb3IgPSB2Q29sb3I7JyxcbiAgICAgICAgICAgICd9J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgICAvLyBjdXN0b20gdW5pZm9ybXNcbiAgICAgICAge1xuICAgICAgICAgICAgdGludDogICB7IHR5cGU6ICczZicsIHZhbHVlOiBbMCwgMCwgMF0gfSxcbiAgICAgICAgICAgIGFscGhhOiAgeyB0eXBlOiAnMWYnLCB2YWx1ZTogMCB9LFxuICAgICAgICAgICAgdHJhbnNsYXRpb25NYXRyaXg6IHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheSg5KSB9LFxuICAgICAgICAgICAgcHJvamVjdGlvbk1hdHJpeDogeyB0eXBlOiAnbWF0MycsIHZhbHVlOiBuZXcgRmxvYXQzMkFycmF5KDkpIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gY3VzdG9tIGF0dHJpYnV0ZXNcbiAgICAgICAge1xuICAgICAgICAgICAgYVZlcnRleFBvc2l0aW9uOjAsXG4gICAgICAgICAgICBhQ29sb3I6MFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuUHJpbWl0aXZlU2hhZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2hhZGVyLnByb3RvdHlwZSk7XG5QcmltaXRpdmVTaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHJpbWl0aXZlU2hhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBQcmltaXRpdmVTaGFkZXI7XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqIEBwYXJhbSBbdmVydGV4U3JjXSB7c3RyaW5nfSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxuICogQHBhcmFtIFtmcmFnbWVudFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIFt1bmlmb3Jtc10ge29iamVjdH0gVW5pZm9ybXMgZm9yIHRoaXMgc2hhZGVyLlxuICogQHBhcmFtIFthdHRyaWJ1dGVzXSB7b2JqZWN0fSBBdHRyaWJ1dGVzIGZvciB0aGlzIHNoYWRlci5cbiAqL1xuZnVuY3Rpb24gU2hhZGVyKHNoYWRlck1hbmFnZXIsIHZlcnRleFNyYywgZnJhZ21lbnRTcmMsIHVuaWZvcm1zLCBhdHRyaWJ1dGVzKVxue1xuICAgIGlmICghdmVydGV4U3JjIHx8ICFmcmFnbWVudFNyYylcbiAgICB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BpeGkuanMgRXJyb3IuIFNoYWRlciByZXF1aXJlcyB2ZXJ0ZXhTcmMgYW5kIGZyYWdtZW50U3JjJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB1bmlxdWUgaWRcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy51dWlkID0gdXRpbHMudXVpZCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gICAgICogQG1lbWJlciB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuZ2wgPSBzaGFkZXJNYW5hZ2VyLnJlbmRlcmVyLmdsO1xuXG4gICAgLy9UT0RPIG1heWJlIHdlIHNob3VsZCBwYXNzIHJlbmRlcmVyIHJhdGhlciB0aGFuIHNoYWRlciBtYW5nZXI/PyBmb29kIGZvciB0aG91Z2h0Li5cbiAgICB0aGlzLnNoYWRlck1hbmFnZXIgPSBzaGFkZXJNYW5hZ2VyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFdlYkdMIHByb2dyYW0uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFByb2dyYW19XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlmb3JtcyBhcyBhbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVuaWZvcm1zID0gdW5pZm9ybXMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXR0cmlidXRlcyBhcyBhbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgdGV4dHVyZSBjb3VudGVyXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50ZXh0dXJlQ291bnQgPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRleCBzaGFkZXIgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmVydGV4U3JjID0gdmVydGV4U3JjO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZyYWdtZW50IHNoYWRlciBhcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5mcmFnbWVudFNyYyA9IGZyYWdtZW50U3JjO1xuXG4gICAgdGhpcy5pbml0KCk7XG59XG5cblNoYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTaGFkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuLypcbiAqIENyZWF0ZXMgdGhlIHNoYWRlciBhbmQgdXNlcyBpdFxuICpcbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmNvbXBpbGUoKTtcblxuICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuXG4gICAgdGhpcy5jYWNoZVVuaWZvcm1Mb2NhdGlvbnMoT2JqZWN0LmtleXModGhpcy51bmlmb3JtcykpO1xuICAgIHRoaXMuY2FjaGVBdHRyaWJ1dGVMb2NhdGlvbnMoT2JqZWN0LmtleXModGhpcy5hdHRyaWJ1dGVzKSk7XG59O1xuXG4vKlxuICogQ2FjaGVzIHRoZSBsb2NhdGlvbnMgb2YgdGhlIHVuaWZvcm0gZm9yIHJldXNlXG4gKiBAcGFyYW0ga2V5cyB7c3RyaW5nfSB0aGUgdW5pZm9ybXMgdG8gY2FjaGVcbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5jYWNoZVVuaWZvcm1Mb2NhdGlvbnMgPSBmdW5jdGlvbiAoa2V5cylcbntcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAge1xuICAgICAgICB0aGlzLnVuaWZvcm1zW2tleXNbaV1dLl9sb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwga2V5c1tpXSk7XG4gICAgfVxufTtcblxuLypcbiAqIENhY2hlcyB0aGUgbG9jYXRpb25zIG9mIHRoZSBhdHRyaWJ1dGUgZm9yIHJldXNlXG4gKiBAcGFyYW0ga2V5cyB7c3RyaW5nfSB0aGUgYXR0cmlidXRlcyB0byBjYWNoZVxuICovXG5TaGFkZXIucHJvdG90eXBlLmNhY2hlQXR0cmlidXRlTG9jYXRpb25zID0gZnVuY3Rpb24gKGtleXMpXG57XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxuICAgIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW2tleXNbaV1dID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sIGtleXNbaV0pO1xuICAgIH1cblxuICAgIC8vIFRPRE86IENoZWNrIGlmIHRoaXMgaXMgbmVlZGVkIGFueW1vcmUuLi5cblxuICAgIC8vIEJlZ2luIHdvcnN0IGhhY2sgZXZhIC8vXG5cbiAgICAvLyBXSFk/Pz8gT05MWSBvbiBteSBjaHJvbWUgcGl4ZWwgdGhlIGxpbmUgYWJvdmUgcmV0dXJucyAtMSB3aGVuIHVzaW5nIGZpbHRlcnM/XG4gICAgLy8gbWF5YmUgaXRzIHNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBnbCBjb250ZXh0LlxuICAgIC8vIEknbSBjb252aW5jZWQgdGhpcyBpcyBhIGJ1ZyBpbiB0aGUgY2hyb21lIGJyb3dzZXIgYXMgdGhlcmUgaXMgTk8gcmVhc29uIHdoeSB0aGlzIHNob3VsZCBiZSByZXR1cm5pbmcgLTEgZXNwZWNpYWxseSBhcyBpdCBvbmx5IG1hbmlmZXN0cyBvbiBteSBjaHJvbWUgcGl4ZWxcbiAgICAvLyBJZiB0aGVyZXMgYW55IHdlYkdMIHBlb3BsZSB0aGF0IGtub3cgd2h5IGNvdWxkIGhhcHBlbiBwbGVhc2UgaGVscCA6KVxuICAgIC8vIGlmICh0aGlzLmF0dHJpYnV0ZXMuYUNvbG9yID09PSAtMSl7XG4gICAgLy8gICAgIHRoaXMuYXR0cmlidXRlcy5hQ29sb3IgPSAyO1xuICAgIC8vIH1cblxuICAgIC8vIEVuZCB3b3JzdCBoYWNrIGV2YSAvL1xufTtcblxuLypcbiAqIEF0dGFjaGVzIHRoZSBzaGFkZXJzIGFuZCBjcmVhdGVzIHRoZSBwcm9ncmFtXG4gKiBAcmV0dXJuIHtXZWJHTFByb2dyYW19XG4gKi9cblNoYWRlci5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIHZhciBnbFZlcnRTaGFkZXIgPSB0aGlzLl9nbENvbXBpbGUoZ2wuVkVSVEVYX1NIQURFUiwgdGhpcy52ZXJ0ZXhTcmMpO1xuICAgIHZhciBnbEZyYWdTaGFkZXIgPSB0aGlzLl9nbENvbXBpbGUoZ2wuRlJBR01FTlRfU0hBREVSLCB0aGlzLmZyYWdtZW50U3JjKTtcblxuICAgIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsVmVydFNoYWRlcik7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsRnJhZ1NoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAvLyBpZiBsaW5raW5nIGZhaWxzLCB0aGVuIGxvZyBhbmQgY2xlYW51cFxuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpXG4gICAge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdQaXhpLmpzIEVycm9yOiBDb3VsZCBub3QgaW5pdGlhbGl6ZSBzaGFkZXIuJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dsLlZBTElEQVRFX1NUQVRVUycsIGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuVkFMSURBVEVfU1RBVFVTKSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dsLmdldEVycm9yKCknLCBnbC5nZXRFcnJvcigpKTtcblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHByb2dyYW0gaW5mbyBsb2csIGxvZyBpdFxuICAgICAgICBpZiAoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkgIT09ICcnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BpeGkuanMgV2FybmluZzogZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coKScsIGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHByb2dyYW0gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIHNvbWUgc2hhZGVyc1xuICAgIGdsLmRlbGV0ZVNoYWRlcihnbFZlcnRTaGFkZXIpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihnbEZyYWdTaGFkZXIpO1xuXG4gICAgcmV0dXJuICh0aGlzLnByb2dyYW0gPSBwcm9ncmFtKTtcbn07XG5cbi8qXG5TaGFkZXIucHJvdG90eXBlLmJ1aWxkU3luYyA9IGZ1bmN0aW9uICgpXG57XG4gICAvLyB2YXIgc3RyID0gXCJcIlxuXG4gICAvLyBzdHIgPSAgXCJTaGFkZXIucHJvdG90eXBlLnN5bmNVbmlmb3JtcyA9IGZ1bmN0aW9uKClcIjtcbiAgIC8vIHN0ciArPSBcIntcXG5cIjtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnVuaWZvcm1zKVxuICAgIHtcbiAgICAgICAgdmFyIHVuaWZvcm0gPSB0aGlzLnVuaWZvcm1zW2tleV07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaWZvcm0udmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVuaWZvcm0odW5pZm9ybSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyggbWFrZVByb3BTZXR0ZXIoIGtleSwgXCIgYmxvb3BcIiwgdW5pZm9ybS50eXBlICkgIClcbiAgLy8gICAgICBPYmplY3QuZGVmXG4gICAgICAgIC8vICAgIGxvY2F0aW9uID0gdW5pZm9ybS5fbG9jYXRpb24sXG4gICAgICAgICAgLy8gIHZhbHVlID0gdW5pZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIC8vaSwgaWw7XG5cbiAgICAvLyAgICBzdHIgKz0gXCJnbC51bmlmb3JtMWkodGhpcy51bmlmb3Jtcy5cIisga2V5ICtcIi5fbG9jYXRpb24sIHRoaXMudW5pZm9ybXMuXCIgKyBrZXkgKyBcIi52YWx1ZSApO1xcblwiXG5cbiAgICB9XG5cbn0qL1xuXG4vKipcbiogQWRkcyBhIG5ldyB1bmlmb3JtXG4qXG4qIEBwYXJhbSB1bmlmb3JtIHtPYmplY3R9IHRoZSBuZXcgdW5pZm9ybSB0byBhdHRhY2hcbiovXG5TaGFkZXIucHJvdG90eXBlLnN5bmNVbmlmb3JtID0gZnVuY3Rpb24gKHVuaWZvcm0pXG57XG4gICAgdmFyIGxvY2F0aW9uID0gdW5pZm9ybS5fbG9jYXRpb24sXG4gICAgICAgIHZhbHVlID0gdW5pZm9ybS52YWx1ZSxcbiAgICAgICAgZ2wgPSB0aGlzLmdsLFxuICAgICAgICBpLCBpbDtcblxuICAgIHN3aXRjaCAodW5pZm9ybS50eXBlKVxuICAgIHtcbiAgICAgICAgLy8gc2luZ2xlIGludCB2YWx1ZVxuICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgY2FzZSAnMWknOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBzaW5nbGUgZmxvYXQgdmFsdWVcbiAgICAgICAgY2FzZSAnZic6XG4gICAgICAgIGNhc2UgJzFmJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5KDIpIG9yIEpTIEFycnJheVxuICAgICAgICBjYXNlICcyZic6XG4gICAgICAgICAgICBnbC51bmlmb3JtMmYobG9jYXRpb24sIHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkoMykgb3IgSlMgQXJycmF5XG4gICAgICAgIGNhc2UgJzNmJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZihsb2NhdGlvbiwgdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkoNCkgb3IgSlMgQXJycmF5XG4gICAgICAgIGNhc2UgJzRmJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm00Zihsb2NhdGlvbiwgdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSwgdmFsdWVbM10pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gYSAyRCBQb2ludCBvYmplY3RcbiAgICAgICAgY2FzZSAndjInOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTJmKGxvY2F0aW9uLCB2YWx1ZS54LCB2YWx1ZS55KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGEgM0QgUG9pbnQgb2JqZWN0XG4gICAgICAgIGNhc2UgJ3YzJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZihsb2NhdGlvbiwgdmFsdWUueCwgdmFsdWUueSwgdmFsdWUueik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhIDREIFBvaW50IG9iamVjdFxuICAgICAgICBjYXNlICd2NCc6XG4gICAgICAgICAgICBnbC51bmlmb3JtNGYobG9jYXRpb24sIHZhbHVlLngsIHZhbHVlLnksIHZhbHVlLnosIHZhbHVlLncpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICcxaXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICcyaXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICczaXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICc0aXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5IG9yIEpTIEFycmF5XG4gICAgICAgIGNhc2UgJzFmdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnMmZ2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0yZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEZsb2F0MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICczZnYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5IG9yIEpTIEFycmF5XG4gICAgICAgIGNhc2UgJzRmdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnbTInOlxuICAgICAgICBjYXNlICdtYXQyJzpcbiAgICAgICAgY2FzZSAnTWF0cml4MmZ2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIHVuaWZvcm0udHJhbnNwb3NlLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnbTMnOlxuICAgICAgICBjYXNlICdtYXQzJzpcbiAgICAgICAgY2FzZSAnTWF0cml4M2Z2JzpcblxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgdW5pZm9ybS50cmFuc3Bvc2UsIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEZsb2F0MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICdtNCc6XG4gICAgICAgIGNhc2UgJ21hdDQnOlxuICAgICAgICBjYXNlICdNYXRyaXg0ZnYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgdW5pZm9ybS50cmFuc3Bvc2UsIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGEgQ29sb3IgVmFsdWVcbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHV0aWxzLmhleDJyZ2IodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbC51bmlmb3JtM2YobG9jYXRpb24sIHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gZmxhdCBhcnJheSBvZiBpbnRlZ2VycyAoSlMgb3IgdHlwZWQgYXJyYXkpXG4gICAgICAgIGNhc2UgJ2l2MSc6XG4gICAgICAgICAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBmbGF0IGFycmF5IG9mIGludGVnZXJzIHdpdGggMyB4IE4gc2l6ZSAoSlMgb3IgdHlwZWQgYXJyYXkpXG4gICAgICAgIGNhc2UgJ2l2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGZsYXQgYXJyYXkgb2YgZmxvYXRzIChKUyBvciB0eXBlZCBhcnJheSlcbiAgICAgICAgY2FzZSAnZnYxJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGZsYXQgYXJyYXkgb2YgZmxvYXRzIHdpdGggMyB4IE4gc2l6ZSAoSlMgb3IgdHlwZWQgYXJyYXkpXG4gICAgICAgIGNhc2UgJ2Z2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGFycmF5IG9mIDJEIFBvaW50IG9iamVjdHNcbiAgICAgICAgY2FzZSAndjJ2JzpcbiAgICAgICAgICAgIGlmICghdW5pZm9ybS5fYXJyYXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDIgKiB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBpbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGlsOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDJdICAgICAgID0gdmFsdWVbaV0ueDtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogMiArIDFdICAgPSB2YWx1ZVtpXS55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB1bmlmb3JtLl9hcnJheSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhcnJheSBvZiAzRCBQb2ludCBvYmplY3RzXG4gICAgICAgIGNhc2UgJ3Yzdic6XG4gICAgICAgICAgICBpZiAoIXVuaWZvcm0uX2FycmF5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5ID0gbmV3IEZsb2F0MzJBcnJheSgzICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMCwgaWwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBpbDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiAzXSAgICAgICA9IHZhbHVlW2ldLng7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDMgKyAxXSAgID0gdmFsdWVbaV0ueTtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogMyArIDJdICAgPSB2YWx1ZVtpXS56O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHVuaWZvcm0uX2FycmF5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGFycmF5IG9mIDREIFBvaW50IG9iamVjdHNcbiAgICAgICAgY2FzZSAndjR2JzpcbiAgICAgICAgICAgIGlmICghdW5pZm9ybS5fYXJyYXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDQgKiB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBpbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGlsOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDRdICAgICAgID0gdmFsdWVbaV0ueDtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogNCArIDFdICAgPSB2YWx1ZVtpXS55O1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiA0ICsgMl0gICA9IHZhbHVlW2ldLno7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDQgKyAzXSAgID0gdmFsdWVbaV0udztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB1bmlmb3JtLl9hcnJheSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBQSVhJLlRleHR1cmVcbiAgICAgICAgY2FzZSAndCc6XG4gICAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG5cbiAgICAgICAgICAgIGlmICghdW5pZm9ybS52YWx1ZSB8fCAhdW5pZm9ybS52YWx1ZS5iYXNlVGV4dHVyZS5oYXNMb2FkZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFjdGl2YXRlIHRoaXMgdGV4dHVyZVxuICAgICAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbFsnVEVYVFVSRScgKyB0aGlzLnRleHR1cmVDb3VudF0pO1xuXG4gICAgICAgICAgICB2YXIgdGV4dHVyZSA9IHVuaWZvcm0udmFsdWUuYmFzZVRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdO1xuXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2FtcGxlcjJEKHVuaWZvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBiaW5kIHRoZSB0ZXh0dXJlXG4gICAgICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICAgICAgICAgICAgLy8gc2V0IHVuaWZvcm0gdG8gdGV4dHVyZSBpbmRleFxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKHVuaWZvcm0uX2xvY2F0aW9uLCB0aGlzLnRleHR1cmVDb3VudCk7XG5cbiAgICAgICAgICAgIC8vIGluY3JlbWVudCBuZXh0IHRleHR1cmUgaWRcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZUNvdW50Kys7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS53YXJuKCdQaXhpLmpzIFNoYWRlciBXYXJuaW5nOiBVbmtub3duIHVuaWZvcm0gdHlwZTogJyArIHVuaWZvcm0udHlwZSk7XG4gICAgfVxufTtcblxuLypcbiAqIFVwZGF0ZXMgdGhlIHNoYWRlciB1bmlmb3JtIHZhbHVlcy5cbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5zeW5jVW5pZm9ybXMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMudGV4dHVyZUNvdW50ID0gMTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnVuaWZvcm1zKVxuICAgIHtcbiAgICAgICAgdGhpcy5zeW5jVW5pZm9ybSh0aGlzLnVuaWZvcm1zW2tleV0pO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBJbml0aWFsaXNlcyBhIFNhbXBsZXIyRCB1bmlmb3JtICh3aGljaCBtYXkgb25seSBiZSBhdmFpbGFibGUgbGF0ZXIgb24gYWZ0ZXIgaW5pdFVuaWZvcm1zIG9uY2UgdGhlIHRleHR1cmUgaGFzIGxvYWRlZClcbiAqXG4gKi9cblNoYWRlci5wcm90b3R5cGUuaW5pdFNhbXBsZXIyRCA9IGZ1bmN0aW9uICh1bmlmb3JtKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICB2YXIgdGV4dHVyZSA9IHVuaWZvcm0udmFsdWUuYmFzZVRleHR1cmU7XG5cbiAgICBpZighdGV4dHVyZS5oYXNMb2FkZWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cblxuICAgIGlmICh1bmlmb3JtLnRleHR1cmVEYXRhKVxuICAgIHtcblxuICAgICAgICAvL1RPRE8gbW92ZSB0aGlzLi4uXG4gICAgICAgIHZhciBkYXRhID0gdW5pZm9ybS50ZXh0dXJlRGF0YTtcblxuICAgICAgICB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSk7XG5cbiAgICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCB0ZXh0dXJlLnByZW11bHRpcGxpZWRBbHBoYSk7XG4gICAgICAgIC8vIEdMVGV4dHVyZSA9IG1hZyBsaW5lYXIsIG1pbiBsaW5lYXJfbWlwbWFwX2xpbmVhciwgd3JhcCByZXBlYXQgKyBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcbiAgICAgICAgLy8gR0xUZXh0dXJlTGluZWFyID0gbWFnL21pbiBsaW5lYXIsIHdyYXAgY2xhbXBcbiAgICAgICAgLy8gR0xUZXh0dXJlTmVhcmVzdFJlcGVhdCA9IG1hZy9taW4gTkVBUkVTVCwgd3JhcCByZXBlYXRcbiAgICAgICAgLy8gR0xUZXh0dXJlTmVhcmVzdCA9IG1hZy9taW4gbmVhcmVzdCwgd3JhcCBjbGFtcFxuICAgICAgICAvLyBBdWRpb1RleHR1cmUgPSB3aGF0ZXZlciArIGx1bWluYW5jZSArIHdpZHRoIDUxMiwgaGVpZ2h0IDIsIGJvcmRlciAwXG4gICAgICAgIC8vIEtleVRleHR1cmUgPSB3aGF0ZXZlciArIGx1bWluYW5jZSArIHdpZHRoIDI1NiwgaGVpZ2h0IDIsIGJvcmRlciAwXG5cbiAgICAgICAgLy8gIG1hZ0ZpbHRlciBjYW4gYmU6IGdsLkxJTkVBUiwgZ2wuTElORUFSX01JUE1BUF9MSU5FQVIgb3IgZ2wuTkVBUkVTVFxuICAgICAgICAvLyAgd3JhcFMvVCBjYW4gYmU6IGdsLkNMQU1QX1RPX0VER0Ugb3IgZ2wuUkVQRUFUXG5cbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBkYXRhLmx1bWluYW5jZSA/IGdsLkxVTUlOQU5DRSA6IGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHRleHR1cmUuc291cmNlKTtcblxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZGF0YS5tYWdGaWx0ZXIgPyBkYXRhLm1hZ0ZpbHRlciA6IGdsLkxJTkVBUiApO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZGF0YS53cmFwUyA/IGRhdGEud3JhcFMgOiBnbC5DTEFNUF9UT19FREdFICk7XG5cbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZGF0YS53cmFwUyA/IGRhdGEud3JhcFMgOiBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZGF0YS53cmFwVCA/IGRhdGEud3JhcFQgOiBnbC5DTEFNUF9UT19FREdFKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5zaGFkZXJNYW5hZ2VyLnJlbmRlcmVyLnVwZGF0ZVRleHR1cmUodGV4dHVyZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgc2hhZGVyLlxuICpcbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcblxuICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgIHRoaXMudW5pZm9ybXMgPSBudWxsO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IG51bGw7XG5cbiAgICB0aGlzLnZlcnRleFNyYyA9IG51bGw7XG4gICAgdGhpcy5mcmFnbWVudFNyYyA9IG51bGw7XG59O1xuXG5TaGFkZXIucHJvdG90eXBlLl9nbENvbXBpbGUgPSBmdW5jdGlvbiAodHlwZSwgc3JjKVxue1xuICAgIHZhciBzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc3JjKTtcbiAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgIGlmICghdGhpcy5nbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmdsLkNPTVBJTEVfU1RBVFVTKSlcbiAgICB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLmdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG59O1xuIiwidmFyIFNoYWRlciA9IHJlcXVpcmUoJy4vU2hhZGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU2hhZGVyXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqIEBwYXJhbSBbdmVydGV4U3JjXSB7c3RyaW5nfSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxuICogQHBhcmFtIFtmcmFnbWVudFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIFtjdXN0b21Vbmlmb3Jtc10ge29iamVjdH0gQ3VzdG9tIHVuaWZvcm1zIHRvIHVzZSB0byBhdWdtZW50IHRoZSBidWlsdC1pbiBvbmVzLlxuICogQHBhcmFtIFtmcmFnbWVudFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICovXG5mdW5jdGlvbiBUZXh0dXJlU2hhZGVyKHNoYWRlck1hbmFnZXIsIHZlcnRleFNyYywgZnJhZ21lbnRTcmMsIGN1c3RvbVVuaWZvcm1zLCBjdXN0b21BdHRyaWJ1dGVzKVxue1xuICAgIHZhciB1bmlmb3JtcyA9IHtcblxuICAgICAgICB1U2FtcGxlcjogICAgICAgICAgIHsgdHlwZTogJ3NhbXBsZXIyRCcsIHZhbHVlOiAwIH0sXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXg6ICAgeyB0eXBlOiAnbWF0MycsIHZhbHVlOiBuZXcgRmxvYXQzMkFycmF5KDEsIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEpIH1cbiAgICB9O1xuXG4gICAgaWYgKGN1c3RvbVVuaWZvcm1zKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgdSBpbiBjdXN0b21Vbmlmb3JtcylcbiAgICAgICAge1xuICAgICAgICAgICAgdW5pZm9ybXNbdV0gPSBjdXN0b21Vbmlmb3Jtc1t1XTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGFWZXJ0ZXhQb3NpdGlvbjogICAgMCxcbiAgICAgICAgYVRleHR1cmVDb29yZDogICAgICAwLFxuICAgICAgICBhQ29sb3I6ICAgICAgICAgICAgIDBcbiAgICB9O1xuXG4gICAgaWYgKGN1c3RvbUF0dHJpYnV0ZXMpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBhIGluIGN1c3RvbUF0dHJpYnV0ZXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNbYV0gPSBjdXN0b21BdHRyaWJ1dGVzW2FdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRleCBzaGFkZXIuXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdmVydGV4U3JjID0gdmVydGV4U3JjIHx8IFRleHR1cmVTaGFkZXIuZGVmYXVsdFZlcnRleFNyYztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmcmFnbWVudCBzaGFkZXIuXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgZnJhZ21lbnRTcmMgPSBmcmFnbWVudFNyYyB8fCBUZXh0dXJlU2hhZGVyLmRlZmF1bHRGcmFnbWVudFNyYztcblxuICAgIFNoYWRlci5jYWxsKHRoaXMsIHNoYWRlck1hbmFnZXIsIHZlcnRleFNyYywgZnJhZ21lbnRTcmMsIHVuaWZvcm1zLCBhdHRyaWJ1dGVzKTtcbn1cblxuLy8gY29uc3RydWN0b3JcblRleHR1cmVTaGFkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaGFkZXIucHJvdG90eXBlKTtcblRleHR1cmVTaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGV4dHVyZVNoYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNoYWRlcjtcblxuVGV4dHVyZVNoYWRlci5kZWZhdWx0VmVydGV4U3JjID0gW1xuICAgICdwcmVjaXNpb24gbG93cCBmbG9hdDsnLFxuICAgICdhdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247JyxcbiAgICAnYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDsnLFxuICAgICdhdHRyaWJ1dGUgdmVjNCBhQ29sb3I7JyxcblxuICAgICd1bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDsnLFxuXG4gICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgJ3ZhcnlpbmcgdmVjNCB2Q29sb3I7JyxcblxuICAgICd2b2lkIG1haW4odm9pZCl7JyxcbiAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24sIDEuMCkpLnh5LCAwLjAsIDEuMCk7JyxcbiAgICAnICAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7JyxcbiAgICAnICAgdkNvbG9yID0gdmVjNChhQ29sb3IucmdiICogYUNvbG9yLmEsIGFDb2xvci5hKTsnLFxuICAgICd9J1xuXS5qb2luKCdcXG4nKTtcblxuVGV4dHVyZVNoYWRlci5kZWZhdWx0RnJhZ21lbnRTcmMgPSBbXG4gICAgJ3ByZWNpc2lvbiBsb3dwIGZsb2F0OycsXG5cbiAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsXG5cbiAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgJyAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZCkgKiB2Q29sb3IgOycsXG4gICAgJ30nXG5dLmpvaW4oJ1xcbicpO1xuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4uL21hbmFnZXJzL1dlYkdMTWFuYWdlcicpO1xuXG4vKipcbiAqIEJhc2UgZm9yIGEgY29tbW9uIG9iamVjdCByZW5kZXJlciB0aGF0IGNhbiBiZSB1c2VkIGFzIGEgc3lzdGVtIHJlbmRlcmVyIHBsdWdpbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIFdlYkdMTWFuYWdlclxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgb2JqZWN0IHJlbmRlcmVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gT2JqZWN0UmVuZGVyZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xufVxuXG5cbk9iamVjdFJlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPYmplY3RSZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0UmVuZGVyZXI7XG5cbi8qKlxuICogU3RhcnRzIHRoZSByZW5kZXJlciBhbmQgc2V0cyB0aGUgc2hhZGVyXG4gKlxuICovXG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIHNldCB0aGUgc2hhZGVyLi5cbn07XG5cbi8qKlxuICogU3RvcHMgdGhlIHJlbmRlcmVyXG4gKlxuICovXG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5mbHVzaCgpO1xufTtcblxuLyoqXG4gKiBmbHVzaGVzXG4gKlxuICovXG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIGZsdXNoIVxufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG9iamVjdFxuICpcbiAqL1xuT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChvYmplY3QpXG57XG4gICAgLy8gcmVuZGVyIHRoZSBvYmplY3Rcbn07XG4iLCIvKipcbiAqIEhlbHBlciBjbGFzcyB0byBjcmVhdGUgYSBxdWFkXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGdsIGNvbnRleHQgZm9yIHRoaXMgcXVhZCB0byB1c2UuXG4gKi9cbmZ1bmN0aW9uIFF1YWQoZ2wpXG57XG4gICAgLypcbiAgICAgKiB0aGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyaW5nQ29udGV4dH1cbiAgICAgKi9cbiAgICB0aGlzLmdsID0gZ2w7XG5cbi8vICAgIHRoaXMudGV4dHVyZXMgPSBuZXcgVGV4dHVyZVV2cygpO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdmVydGljZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Zsb2F0MzJBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDAsMCxcbiAgICAgICAgMjAwLDAsXG4gICAgICAgIDIwMCwyMDAsXG4gICAgICAgIDAsMjAwXG4gICAgXSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgVXZzIG9mIHRoZSBxdWFkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtGbG9hdDMyQXJyYXl9XG4gICAgICovXG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMCwwLFxuICAgICAgICAxLDAsXG4gICAgICAgIDEsMSxcbiAgICAgICAgMCwxXG4gICAgXSk7XG5cbi8vICAgIHZhciB3aGl0ZSA9ICgweEZGRkZGRiA+PiAxNikgKyAoMHhGRkZGRkYgJiAweGZmMDApICsgKCgweEZGRkZGRiAmIDB4ZmYpIDw8IDE2KSArICgxICogMjU1IDw8IDI0KTtcbiAgICAvL1RPRE8gY29udmVydCB0aGlzIHRvIGEgMzIgdW5zaWduZWQgaW50IGFycmF5XG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIGNvbXBvbmVudHMgb2YgdGhlIHRyaWFuZ2xlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7RmxvYXQzMkFycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDEsMSwxLDEsXG4gICAgICAgIDEsMSwxLDEsXG4gICAgICAgIDEsMSwxLDEsXG4gICAgICAgIDEsMSwxLDFcbiAgICBdKTtcblxuICAgIC8qXG4gICAgICogQG1lbWJlciB7VWludDE2QXJyYXl9IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGluZGljZXMgb2YgdGhlIHZlcnRpY2VzXG4gICAgICovXG4gICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAgICAgMCwgMSwgMiwgMCwgMywgMlxuICAgIF0pO1xuXG4gICAgLypcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEJ1ZmZlcn0gVGhlIHZlcnRleCBidWZmZXJcbiAgICAgKi9cbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLypcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEJ1ZmZlcn0gVGhlIGluZGV4IGJ1ZmZlclxuICAgICAqL1xuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsICg4ICsgOCArIDE2KSAqIDQsIGdsLkRZTkFNSUNfRFJBVyk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHRoaXMudXBsb2FkKCk7XG59XG5cblF1YWQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUXVhZDtcblxuLyoqXG4gKiBNYXBzIHR3byBSZWN0YW5nbGUgdG8gdGhlIHF1YWRcbiAqIEBwYXJhbSByZWN0IHtSZWN0YW5nbGV9IHRoZSBmaXJzdCByZWN0YW5nbGVcbiAqIEBwYXJhbSByZWN0MiB7UmVjdGFuZ2xlfSB0aGUgc2Vjb25kIHJlY3RhbmdsZVxuICovXG5RdWFkLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbihyZWN0LCByZWN0MilcbntcbiAgICB2YXIgeCA9IDA7IC8vcmVjdDIueCAvIHJlY3Qud2lkdGg7XG4gICAgdmFyIHkgPSAwOyAvL3JlY3QyLnkgLyByZWN0LmhlaWdodDtcblxuICAgIHRoaXMudXZzWzBdID0geDtcbiAgICB0aGlzLnV2c1sxXSA9IHk7XG5cbiAgICB0aGlzLnV2c1syXSA9IHggKyByZWN0Mi53aWR0aCAvIHJlY3Qud2lkdGg7XG4gICAgdGhpcy51dnNbM10gPSB5O1xuXG4gICAgdGhpcy51dnNbNF0gPSB4ICsgcmVjdDIud2lkdGggLyByZWN0LndpZHRoO1xuICAgIHRoaXMudXZzWzVdID0geSArIHJlY3QyLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuXG4gICAgdGhpcy51dnNbNl0gPSB4O1xuICAgIHRoaXMudXZzWzddID0geSArIHJlY3QyLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuXG4gICAgLy8vIC0tLS0tXG4gICAgeCA9IHJlY3QyLng7XG4gICAgeSA9IHJlY3QyLnk7XG5cbiAgICB0aGlzLnZlcnRpY2VzWzBdID0geDtcbiAgICB0aGlzLnZlcnRpY2VzWzFdID0geTtcblxuICAgIHRoaXMudmVydGljZXNbMl0gPSB4ICsgcmVjdDIud2lkdGg7XG4gICAgdGhpcy52ZXJ0aWNlc1szXSA9IHk7XG5cbiAgICB0aGlzLnZlcnRpY2VzWzRdID0geCArIHJlY3QyLndpZHRoO1xuICAgIHRoaXMudmVydGljZXNbNV0gPSB5ICsgcmVjdDIuaGVpZ2h0O1xuXG4gICAgdGhpcy52ZXJ0aWNlc1s2XSA9IHg7XG4gICAgdGhpcy52ZXJ0aWNlc1s3XSA9IHkgKyByZWN0Mi5oZWlnaHQ7XG5cbiAgICB0aGlzLnVwbG9hZCgpO1xufTtcblxuLyoqXG4gKiBCaW5kcyB0aGUgYnVmZmVyIGFuZCB1cGxvYWRzIHRoZSBkYXRhXG4gKi9cblF1YWQucHJvdG90eXBlLnVwbG9hZCA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgLy8gVE9ETyBjb3VsZCBwcm9iYWJseSBiZSBwdXNoZWQgaW50byBvbmUgdXBsb2FkIVxuICAgIGdsLmJpbmRCdWZmZXIoIGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIgKTtcblxuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnZlcnRpY2VzKTtcblxuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCA4ICogNCwgdGhpcy51dnMpO1xuXG4gICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsICg4ICsgOCkgKiA0LCB0aGlzLmNvbG9ycyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YWQ7XG5cblxuIiwidmFyIG1hdGggPSByZXF1aXJlKCcuLi8uLi8uLi9tYXRoJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QnKSxcbiAgICAvL1N0ZW5jaWxNYW5hZ2VyID0gcmVxdWlyZSgnLi4vbWFuYWdlcnMvU3RlbmNpbE1hbmFnZXInKSxcbiAgICBTdGVuY2lsTWFza1N0YWNrID0gcmVxdWlyZSgnLi9TdGVuY2lsTWFza1N0YWNrJyk7XG5cbi8qKlxuICogQGF1dGhvciBNYXQgR3JvdmVzIGh0dHA6Ly9tYXRncm92ZXMuY29tLyBARG9vcm1hdDIzXG4gKi9cblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIGhvcml6b250YWwgcmFuZ2Ugb2YgdGhlIGZpbHRlclxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgdmVydGljYWwgcmFuZ2Ugb2YgdGhlIGZpbHRlclxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge3sjY3Jvc3NMaW5rIFwiUElYSS9zY2FsZU1vZGVzOnByb3BlcnR5XCJ9fVBJWEkuc2NhbGVNb2Rlc3t7L2Nyb3NzTGlua319IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEBwYXJhbSByZXNvbHV0aW9uIHtudW1iZXJ9IHRoZSBjdXJyZW50IHJlc29sdXRpb25cbiAqIEBwYXJhbSByb290IHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIHRoZSByb290IGVsZW1lbnQgb3Igbm90XG4gKi9cbnZhciBSZW5kZXJUYXJnZXQgPSBmdW5jdGlvbihnbCwgd2lkdGgsIGhlaWdodCwgc2NhbGVNb2RlLCByZXNvbHV0aW9uLCByb290KVxue1xuICAgIC8vVE9ETyBSZXNvbHV0aW9uIGNvdWxkIGdvIGhlcmUgKCBlZyBsb3cgcmVzIGJsdXJzIClcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyaW5nQ29udGV4dH1cbiAgICAgKi9cbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICAvLyBuZXh0IHRpbWUgdG8gY3JlYXRlIGEgZnJhbWUgYnVmZmVyIGFuZCB0ZXh0dXJlXG5cbiAgICAvKipcbiAgICAgKiBBIGZyYW1lIGJ1ZmZlclxuICAgICAqIEBtZW1iZXIge1dlYkdMRnJhbWVCdWZmZXJ9XG4gICAgICovXG4gICAgdGhpcy5mcmFtZUJ1ZmZlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUZXh0dXJlfVxuICAgICAqL1xuICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgb2JqZWN0IGFzIGEgcmVjdGFuZ2xlXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqL1xuICAgIHRoaXMuc2l6ZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCAxLCAxKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJlc29sdXRpb25cbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbiB8fCBDT05TVC5SRVNPTFVUSU9OO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb2plY3Rpb24gbWF0cml4XG4gICAgICogQG1lbWJlciB7TWF0cml4fVxuICAgICAqL1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBtYXRoLk1hdHJpeCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9iamVjdCdzIHRyYW5zZm9ybVxuICAgICAqIEBtZW1iZXIge01hdHJpeH1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGVuY2lsIGJ1ZmZlciBzdG9yZXMgbWFza2luZyBkYXRhIGZvciB0aGUgcmVuZGVyIHRhcmdldFxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyQnVmZmVyfVxuICAgICAqL1xuICAgIHRoaXMuc3RlbmNpbEJ1ZmZlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHRoZSBzdGVuY2lsIG1hc2tzXG4gICAgICogQG1lbWJlciB7U3RlbmNpbE1hc2tTdGFja31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZW5jaWxNYXNrU3RhY2sgPSBuZXcgU3RlbmNpbE1hc2tTdGFjaygpO1xuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIGZpbHRlciBkYXRhIGZvciB0aGUgcmVuZGVyIHRhcmdldFxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyU3RhY2sgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlclRhcmdldDp0aGlzLFxuICAgICAgICAgICAgZmlsdGVyOltdLFxuICAgICAgICAgICAgYm91bmRzOnRoaXMuc2l6ZVxuICAgICAgICB9XG4gICAgXTtcblxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjYWxlIG1vZGVcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgQ09OU1QuU0NBTEVfTU9ERVMuREVGQVVMVFxuICAgICAqL1xuICAgIHRoaXMuc2NhbGVNb2RlID0gc2NhbGVNb2RlIHx8IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFQ7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIHRoZSByb290IGVsZW1lbnQgb3Igbm90XG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSByb290O1xuXG4gICAgaWYgKCF0aGlzLnJvb3QpXG4gICAge1xuICAgICAgIC8vIHRoaXMuZmxpcFkgPSB0cnVlO1xuICAgICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQSBmcmFtZSBidWZmZXIgbmVlZHMgYSB0YXJnZXQgdG8gcmVuZGVyIHRvLi5cbiAgICAgICAgICAgIGNyZWF0ZSBhIHRleHR1cmUgYW5kIGJpbmQgaXQgYXR0YWNoIGl0IHRvIHRoZSBmcmFtZWJ1ZmZlci4uXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCAgdGhpcy50ZXh0dXJlKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHNjYWxlIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuLlxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgc2NhbGVNb2RlID09PSBDT05TVC5TQ0FMRV9NT0RFUy5MSU5FQVIgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHNjYWxlTW9kZSA9PT0gQ09OU1QuU0NBTEVfTU9ERVMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSB0ZXh0dXJlIGlzIGEgcG93ZXIgb2YgdHdvIVxuICAgICAgICB2YXIgaXNQb3dlck9mVHdvID0gdXRpbHMuaXNQb3dlck9mVHdvKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vVE9ETyBmb3IgOTklIG9mIHVzZSBjYXNlcyBpZiBhIHRleHR1cmUgaXMgcG93ZXIgb2YgdHdvIHdlIHNob3VsZCB0aWxlIHRoZSB0ZXh0dXJlLi4uXG4gICAgICAgICBpZiAoIWlzUG93ZXJPZlR3bylcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcblxuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuUkVQRUFUKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLlJFUEVBVCk7XG4gICAgICAgIH1cblxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIgKTtcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUsIDApO1xuICAgIH1cblxuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG59O1xuXG5SZW5kZXJUYXJnZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVuZGVyVGFyZ2V0O1xubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJUYXJnZXQ7XG5cbi8qKlxuKiBDbGVhcnMgdGhlIGZpbHRlciB0ZXh0dXJlLlxuKlxuKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihiaW5kKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgaWYoYmluZClcbiAgICB7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XG4gICAgfVxuXG4gICAgZ2wuY2xlYXJDb2xvcigwLDAsMCwwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbn07XG5cbi8qKlxuKiBCaW5kcyB0aGUgc3RlbmNpbCBidWZmZXIuXG4qXG4qL1xuUmVuZGVyVGFyZ2V0LnByb3RvdHlwZS5hdHRhY2hTdGVuY2lsQnVmZmVyID0gZnVuY3Rpb24oKVxue1xuXG4gICAgaWYgKCB0aGlzLnN0ZW5jaWxCdWZmZXIgKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFRoZSBzdGVuY2lsIGJ1ZmZlciBpcyB1c2VkIGZvciBtYXNraW5nIGluIHBpeGlcbiAgICAgICAgbGV0cyBjcmVhdGUgb25lIGFuZCB0aGVuIGFkZCBhdHRhY2ggaXQgdG8gdGhlIGZyYW1lYnVmZmVyLi5cbiAgICAgKi9cbiAgICBpZiAoIXRoaXMucm9vdClcbiAgICB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICAgICAgdGhpcy5zdGVuY2lsQnVmZmVyID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCB0aGlzLnN0ZW5jaWxCdWZmZXIpO1xuICAgICAgICBnbC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULCBnbC5SRU5ERVJCVUZGRVIsIHRoaXMuc3RlbmNpbEJ1ZmZlcik7XG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9TVEVOQ0lMLCAgdGhpcy5zaXplLndpZHRoICogdGhpcy5yZXNvbHV0aW9uICAsIHRoaXMuc2l6ZS5oZWlnaHQgKiB0aGlzLnJlc29sdXRpb24gKTtcbiAgICB9XG59O1xuXG4vKipcbiogQmluZHMgdGhlIGJ1ZmZlcnMgYW5kIGluaXRpYWxpc2VzIHRoZSB2aWV3cG9ydC5cbipcbiovXG5SZW5kZXJUYXJnZXQucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKVxue1xuICAgIC8vVE9PRCByZWZhY3RvciB1c2FnZSBvZiBmcmFtZS4uXG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XG5cbiAgICB2YXIgcHJvamVjdGlvbkZyYW1lID0gdGhpcy5mcmFtZSB8fCB0aGlzLnNpemU7XG5cbiAgICAvLyBUT0RPIGFkZCBhIGRpcnR5IGZsYWcgdG8gdGhpcyBvZiBhIHNldHRlciBmb3IgdGhlIGZyYW1lP1xuICAgIHRoaXMuY2FsY3VsYXRlUHJvamVjdGlvbiggcHJvamVjdGlvbkZyYW1lICk7XG5cbiAgICBpZih0aGlzLnRyYW5zZm9ybSlcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeC5hcHBlbmQodGhpcy50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGdsLnZpZXdwb3J0KDAsMCwgcHJvamVjdGlvbkZyYW1lLndpZHRoICogdGhpcy5yZXNvbHV0aW9uLCBwcm9qZWN0aW9uRnJhbWUuaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uKTtcbn07XG5cbi8qKlxuKiBVcGRhdGVzIHRoZSBwcm9qZWN0aW9uIG1hdHJpeCBiYXNlZCBvbiBhIHByb2plY3Rpb24gZnJhbWUgKHdoaWNoIGlzIGEgcmVjdGFuZ2xlKVxuKlxuKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUuY2FsY3VsYXRlUHJvamVjdGlvbiA9IGZ1bmN0aW9uKCBwcm9qZWN0aW9uRnJhbWUgKVxue1xuICAgIHZhciBwbSA9IHRoaXMucHJvamVjdGlvbk1hdHJpeDtcblxuICAgIHBtLmlkZW50aXR5KCk7XG5cbiAgICBpZiAoIXRoaXMucm9vdClcbiAgICB7XG4gICAgICAgIHBtLmEgPSAxIC8gcHJvamVjdGlvbkZyYW1lLndpZHRoKjI7XG4gICAgICAgIHBtLmQgPSAxIC8gcHJvamVjdGlvbkZyYW1lLmhlaWdodCoyO1xuXG4gICAgICAgIHBtLnR4ID0gLTEgLSBwcm9qZWN0aW9uRnJhbWUueCAqIHBtLmE7XG4gICAgICAgIHBtLnR5ID0gLTEgLSBwcm9qZWN0aW9uRnJhbWUueSAqIHBtLmQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHBtLmEgPSAxIC8gcHJvamVjdGlvbkZyYW1lLndpZHRoKjI7XG4gICAgICAgIHBtLmQgPSAtMSAvIHByb2plY3Rpb25GcmFtZS5oZWlnaHQqMjtcblxuICAgICAgICBwbS50eCA9IC0xIC0gcHJvamVjdGlvbkZyYW1lLnggKiBwbS5hO1xuICAgICAgICBwbS50eSA9IDEgLSBwcm9qZWN0aW9uRnJhbWUueSAqIHBtLmQ7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIFJlc2l6ZXMgdGhlIHRleHR1cmUgdG8gdGhlIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0XG4gKlxuICogQHBhcmFtIHdpZHRoIHtOdW1iZXJ9IHRoZSBuZXcgd2lkdGggb2YgdGhlIHRleHR1cmVcbiAqIEBwYXJhbSBoZWlnaHQge051bWJlcn0gdGhlIG5ldyBoZWlnaHQgb2YgdGhlIHRleHR1cmVcbiAqL1xuUmVuZGVyVGFyZ2V0LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KVxue1xuICAgIHdpZHRoID0gd2lkdGggfCAwO1xuICAgIGhlaWdodCA9IGhlaWdodCB8IDA7XG5cbiAgICBpZiAodGhpcy5zaXplLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLnNpemUuaGVpZ2h0ID09PSBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2l6ZS53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuc2l6ZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMucm9vdClcbiAgICB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgIHRoaXMudGV4dHVyZSk7XG5cbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCAgd2lkdGggKiB0aGlzLnJlc29sdXRpb24sIGhlaWdodCAqIHRoaXMucmVzb2x1dGlvbiAsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0ZW5jaWxCdWZmZXIgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0ZW5jaWwgYnVmZmVyIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCB0aGlzLnN0ZW5jaWxCdWZmZXIpO1xuICAgICAgICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShnbC5SRU5ERVJCVUZGRVIsIGdsLkRFUFRIX1NURU5DSUwsICB3aWR0aCAqIHRoaXMucmVzb2x1dGlvbiwgaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvamVjdGlvbkZyYW1lID0gdGhpcy5mcmFtZSB8fCB0aGlzLnNpemU7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZVByb2plY3Rpb24oIHByb2plY3Rpb25GcmFtZSApO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcmVuZGVyIHRhcmdldC5cbiAqXG4gKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgIGdsLmRlbGV0ZUZyYW1lYnVmZmVyKCB0aGlzLmZyYW1lQnVmZmVyICk7XG4gICAgZ2wuZGVsZXRlVGV4dHVyZSggdGhpcy50ZXh0dXJlICk7XG5cbiAgICB0aGlzLmZyYW1lQnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xufTtcbiIsIi8qKlxuICogR2VuZXJpYyBNYXNrIFN0YWNrIGRhdGEgc3RydWN0dXJlXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBTdGVuY2lsTWFza1N0YWNrKClcbntcblx0LyoqXG4gICAgICogVGhlIGFjdHVhbCBzdGFja1xuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5zdGVuY2lsU3RhY2sgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8gQGFsdmluXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmV2ZXJzZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBjb3VudFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY291bnQgPSAwO1xufVxuXG5TdGVuY2lsTWFza1N0YWNrLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0ZW5jaWxNYXNrU3RhY2s7XG5tb2R1bGUuZXhwb3J0cyA9IFN0ZW5jaWxNYXNrU3RhY2s7XG4iLCJ2YXIgbWF0aCA9IHJlcXVpcmUoJy4uL21hdGgnKSxcbiAgICBUZXh0dXJlID0gcmVxdWlyZSgnLi4vdGV4dHVyZXMvVGV4dHVyZScpLFxuICAgIENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQ29udGFpbmVyJyksXG4gICAgQ2FudmFzVGludGVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNUaW50ZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpLFxuICAgIHRlbXBQb2ludCA9IG5ldyBtYXRoLlBvaW50KCk7XG5cbi8qKlxuICogVGhlIFNwcml0ZSBvYmplY3QgaXMgdGhlIGJhc2UgZm9yIGFsbCB0ZXh0dXJlZCBvYmplY3RzIHRoYXQgYXJlIHJlbmRlcmVkIHRvIHRoZSBzY3JlZW5cbiAqXG4gKiBBIHNwcml0ZSBjYW4gYmUgY3JlYXRlZCBkaXJlY3RseSBmcm9tIGFuIGltYWdlIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9pbWFnZS5wbmcnKTtcbiAqIGBgYFxuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgQ29udGFpbmVyXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9IFRoZSB0ZXh0dXJlIGZvciB0aGlzIHNwcml0ZVxuICovXG5mdW5jdGlvbiBTcHJpdGUodGV4dHVyZSlcbntcbiAgICBDb250YWluZXIuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbmNob3Igc2V0cyB0aGUgb3JpZ2luIHBvaW50IG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqIFRoZSBkZWZhdWx0IGlzIDAsMCB0aGlzIG1lYW5zIHRoZSB0ZXh0dXJlJ3Mgb3JpZ2luIGlzIHRoZSB0b3AgbGVmdFxuICAgICAqIFNldHRpbmcgdGhlIGFuY2hvciB0byAwLjUsMC41IG1lYW5zIHRoZSB0ZXh0dXJlJ3Mgb3JpZ2luIGlzIGNlbnRlcmVkXG4gICAgICogU2V0dGluZyB0aGUgYW5jaG9yIHRvIDEsMSB3b3VsZCBtZWFuIHRoZSB0ZXh0dXJlJ3Mgb3JpZ2luIHBvaW50IHdpbGwgYmUgdGhlIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1BvaW50fVxuICAgICAqL1xuICAgIHRoaXMuYW5jaG9yID0gbmV3IG1hdGguUG9pbnQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0dXJlIHRoYXQgdGhlIHNwcml0ZSBpcyB1c2luZ1xuICAgICAqXG4gICAgICogQG1lbWJlciB7VGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBzcHJpdGUgKHRoaXMgaXMgaW5pdGlhbGx5IHNldCBieSB0aGUgdGV4dHVyZSlcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3dpZHRoID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHNwcml0ZSAodGhpcyBpcyBpbml0aWFsbHkgc2V0IGJ5IHRoZSB0ZXh0dXJlKVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGVpZ2h0ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW50IGFwcGxpZWQgdG8gdGhlIHNwcml0ZS4gVGhpcyBpcyBhIGhleCB2YWx1ZS4gQSB2YWx1ZSBvZiAweEZGRkZGRiB3aWxsIHJlbW92ZSBhbnkgdGludCBlZmZlY3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgWzB4RkZGRkZGXVxuICAgICAqL1xuICAgIHRoaXMudGludCA9IDB4RkZGRkZGO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJsZW5kIG1vZGUgdG8gYmUgYXBwbGllZCB0byB0aGUgc3ByaXRlLiBBcHBseSBhIHZhbHVlIG9mIGJsZW5kTW9kZXMuTk9STUFMIHRvIHJlc2V0IHRoZSBibGVuZCBtb2RlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcbiAgICAgKi9cbiAgICB0aGlzLmJsZW5kTW9kZSA9IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaGFkZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBzcHJpdGUuIFNldCB0byBudWxsIHRvIHJlbW92ZSBhIGN1cnJlbnQgc2hhZGVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7QWJzdHJhY3RGaWx0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgY2FjaGVkIHZhbHVlIG9mIHRoZSB0aW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IFsweEZGRkZGRl1cbiAgICAgKi9cbiAgICB0aGlzLmNhY2hlZFRpbnQgPSAweEZGRkZGRjtcblxuICAgIC8vIGNhbGwgdGV4dHVyZSBzZXR0ZXJcbiAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlIHx8IFRleHR1cmUuRU1QVFk7XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5TcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb250YWluZXIucHJvdG90eXBlKTtcblNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpdGU7XG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3ByaXRlLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgc3ByaXRlLCBzZXR0aW5nIHRoaXMgd2lsbCBhY3R1YWxseSBtb2RpZnkgdGhlIHNjYWxlIHRvIGFjaGlldmUgdGhlIHZhbHVlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlclxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGUjXG4gICAgICovXG4gICAgd2lkdGg6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS54ICogdGhpcy50ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHZhbHVlIC8gdGhpcy50ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgc3ByaXRlLCBzZXR0aW5nIHRoaXMgd2lsbCBhY3R1YWxseSBtb2RpZnkgdGhlIHNjYWxlIHRvIGFjaGlldmUgdGhlIHZhbHVlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlclxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGUjXG4gICAgICovXG4gICAgaGVpZ2h0OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICB0aGlzLnNjYWxlLnkgKiB0aGlzLnRleHR1cmUuX2ZyYW1lLmhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHZhbHVlIC8gdGhpcy50ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBzcHJpdGUsIHNldHRpbmcgdGhpcyB3aWxsIGFjdHVhbGx5IG1vZGlmeSB0aGUgc2NhbGUgdG8gYWNoaWV2ZSB0aGUgdmFsdWUgc2V0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQG1lbWJlcm9mIFNwcml0ZSNcbiAgICAgKi9cbiAgICB0ZXh0dXJlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICB0aGlzLl90ZXh0dXJlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RleHR1cmUgPT09IHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRUaW50ID0gMHhGRkZGRkY7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgdGV4dHVyZSB0byBsb2FkXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmJhc2VUZXh0dXJlLmhhc0xvYWRlZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uVGV4dHVyZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5vbmNlKCd1cGRhdGUnLCB0aGlzLl9vblRleHR1cmVVcGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogV2hlbiB0aGUgdGV4dHVyZSBpcyB1cGRhdGVkLCB0aGlzIGV2ZW50IHdpbGwgZmlyZSB0byB1cGRhdGUgdGhlIHNjYWxlIGFuZCBmcmFtZVxuICpcbiAqIEBwcml2YXRlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuX29uVGV4dHVyZVVwZGF0ZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gc28gaWYgX3dpZHRoIGlzIDAgdGhlbiB3aWR0aCB3YXMgbm90IHNldC4uXG4gICAgaWYgKHRoaXMuX3dpZHRoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gdGhpcy5fd2lkdGggLyB0aGlzLnRleHR1cmUuZnJhbWUud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hlaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMuc2NhbGUueSA9IHRoaXMuX2hlaWdodCAvIHRoaXMudGV4dHVyZS5mcmFtZS5oZWlnaHQ7XG4gICAgfVxufTtcblxuLyoqXG4qXG4qIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgV2ViR0wgcmVuZGVyZXJcbipcbiogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfVxuKi9cblNwcml0ZS5wcm90b3R5cGUuX3JlbmRlcldlYkdMID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIHJlbmRlcmVyLnNldE9iamVjdFJlbmRlcmVyKHJlbmRlcmVyLnBsdWdpbnMuc3ByaXRlKTtcbiAgICByZW5kZXJlci5wbHVnaW5zLnNwcml0ZS5yZW5kZXIodGhpcyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvdW5kcyBvZiB0aGUgU3ByaXRlIGFzIGEgcmVjdGFuZ2xlLiBUaGUgYm91bmRzIGNhbGN1bGF0aW9uIHRha2VzIHRoZSB3b3JsZFRyYW5zZm9ybSBpbnRvIGFjY291bnQuXG4gKlxuICogQHBhcmFtIG1hdHJpeCB7TWF0cml4fSB0aGUgdHJhbnNmb3JtYXRpb24gbWF0cml4IG9mIHRoZSBzcHJpdGVcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gdGhlIGZyYW1pbmcgcmVjdGFuZ2xlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKG1hdHJpeClcbntcbiAgICBpZighdGhpcy5fY3VycmVudEJvdW5kcylcbiAgICB7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fdGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl90ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIHcwID0gd2lkdGggKiAoMS10aGlzLmFuY2hvci54KTtcbiAgICAgICAgdmFyIHcxID0gd2lkdGggKiAtdGhpcy5hbmNob3IueDtcblxuICAgICAgICB2YXIgaDAgPSBoZWlnaHQgKiAoMS10aGlzLmFuY2hvci55KTtcbiAgICAgICAgdmFyIGgxID0gaGVpZ2h0ICogLXRoaXMuYW5jaG9yLnk7XG5cbiAgICAgICAgdmFyIHdvcmxkVHJhbnNmb3JtID0gbWF0cml4IHx8IHRoaXMud29ybGRUcmFuc2Zvcm0gO1xuXG4gICAgICAgIHZhciBhID0gd29ybGRUcmFuc2Zvcm0uYTtcbiAgICAgICAgdmFyIGIgPSB3b3JsZFRyYW5zZm9ybS5iO1xuICAgICAgICB2YXIgYyA9IHdvcmxkVHJhbnNmb3JtLmM7XG4gICAgICAgIHZhciBkID0gd29ybGRUcmFuc2Zvcm0uZDtcbiAgICAgICAgdmFyIHR4ID0gd29ybGRUcmFuc2Zvcm0udHg7XG4gICAgICAgIHZhciB0eSA9IHdvcmxkVHJhbnNmb3JtLnR5O1xuXG4gICAgICAgIHZhciBtaW5YLFxuICAgICAgICAgICAgbWF4WCxcbiAgICAgICAgICAgIG1pblksXG4gICAgICAgICAgICBtYXhZO1xuXG4gICAgICAgIGlmIChiID09PSAwICYmIGMgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHNjYWxlIG1heSBiZSBuZWdhdGl2ZSFcbiAgICAgICAgICAgIGlmIChhIDwgMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhICo9IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZCA8IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZCAqPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhpcyBtZWFucyB0aGVyZSBpcyBubyByb3RhdGlvbiBnb2luZyBvbiByaWdodD8gUklHSFQ/XG4gICAgICAgICAgICAvLyBpZiB0aGF0cyB0aGUgY2FzZSB0aGVuIHdlIGNhbiBhdm9pZCBjaGVja2luZyB0aGUgYm91bmQgdmFsdWVzISB5YXlcbiAgICAgICAgICAgIG1pblggPSBhICogdzEgKyB0eDtcbiAgICAgICAgICAgIG1heFggPSBhICogdzAgKyB0eDtcbiAgICAgICAgICAgIG1pblkgPSBkICogaDEgKyB0eTtcbiAgICAgICAgICAgIG1heFkgPSBkICogaDAgKyB0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB4MSA9IGEgKiB3MSArIGMgKiBoMSArIHR4O1xuICAgICAgICAgICAgdmFyIHkxID0gZCAqIGgxICsgYiAqIHcxICsgdHk7XG5cbiAgICAgICAgICAgIHZhciB4MiA9IGEgKiB3MCArIGMgKiBoMSArIHR4O1xuICAgICAgICAgICAgdmFyIHkyID0gZCAqIGgxICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgICAgIHZhciB4MyA9IGEgKiB3MCArIGMgKiBoMCArIHR4O1xuICAgICAgICAgICAgdmFyIHkzID0gZCAqIGgwICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgICAgIHZhciB4NCA9ICBhICogdzEgKyBjICogaDAgKyB0eDtcbiAgICAgICAgICAgIHZhciB5NCA9ICBkICogaDAgKyBiICogdzEgKyB0eTtcblxuICAgICAgICAgICAgbWluWCA9IHgxO1xuICAgICAgICAgICAgbWluWCA9IHgyIDwgbWluWCA/IHgyIDogbWluWDtcbiAgICAgICAgICAgIG1pblggPSB4MyA8IG1pblggPyB4MyA6IG1pblg7XG4gICAgICAgICAgICBtaW5YID0geDQgPCBtaW5YID8geDQgOiBtaW5YO1xuXG4gICAgICAgICAgICBtaW5ZID0geTE7XG4gICAgICAgICAgICBtaW5ZID0geTIgPCBtaW5ZID8geTIgOiBtaW5ZO1xuICAgICAgICAgICAgbWluWSA9IHkzIDwgbWluWSA/IHkzIDogbWluWTtcbiAgICAgICAgICAgIG1pblkgPSB5NCA8IG1pblkgPyB5NCA6IG1pblk7XG5cbiAgICAgICAgICAgIG1heFggPSB4MTtcbiAgICAgICAgICAgIG1heFggPSB4MiA+IG1heFggPyB4MiA6IG1heFg7XG4gICAgICAgICAgICBtYXhYID0geDMgPiBtYXhYID8geDMgOiBtYXhYO1xuICAgICAgICAgICAgbWF4WCA9IHg0ID4gbWF4WCA/IHg0IDogbWF4WDtcblxuICAgICAgICAgICAgbWF4WSA9IHkxO1xuICAgICAgICAgICAgbWF4WSA9IHkyID4gbWF4WSA/IHkyIDogbWF4WTtcbiAgICAgICAgICAgIG1heFkgPSB5MyA+IG1heFkgPyB5MyA6IG1heFk7XG4gICAgICAgICAgICBtYXhZID0geTQgPiBtYXhZID8geTQgOiBtYXhZO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuX2JvdW5kcztcblxuICAgICAgICBib3VuZHMueCA9IG1pblg7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IG1heFggLSBtaW5YO1xuXG4gICAgICAgIGJvdW5kcy55ID0gbWluWTtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuXG4gICAgICAgIC8vIHN0b3JlIGEgcmVmZXJlbmNlIHNvIHRoYXQgaWYgdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhZ2FpbiBpbiB0aGUgcmVuZGVyIGN5Y2xlIHdlIGRvIG5vdCBoYXZlIHRvIHJlY2FsY3VsYXRlXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBib3VuZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHM7XG59O1xuXG5TcHJpdGUucHJvdG90eXBlLmdldExvY2FsQm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLl9ib3VuZHMueCA9IC10aGlzLl90ZXh0dXJlLl9mcmFtZS53aWR0aCAqIHRoaXMuYW5jaG9yLng7XG4gICAgdGhpcy5fYm91bmRzLnkgPSAtdGhpcy5fdGV4dHVyZS5fZnJhbWUuaGVpZ2h0ICogdGhpcy5hbmNob3IueTtcbiAgICB0aGlzLl9ib3VuZHMud2lkdGggPSB0aGlzLl90ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICB0aGlzLl9ib3VuZHMuaGVpZ2h0ID0gdGhpcy5fdGV4dHVyZS5fZnJhbWUuaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzLl9ib3VuZHM7XG59O1xuXG4vKipcbiogVGVzdHMgaWYgYSBwb2ludCBpcyBpbnNpZGUgdGhpcyBzcHJpdGVcbipcbiogQHBhcmFtIHBvaW50IHtQb2ludH0gdGhlIHBvaW50IHRvIHRlc3RcbiogQHJldHVybiB7Ym9vbGVhbn0gdGhlIHJlc3VsdCBvZiB0aGUgdGVzdFxuKi9cblNwcml0ZS5wcm90b3R5cGUuY29udGFpbnNQb2ludCA9IGZ1bmN0aW9uKCBwb2ludCApXG57XG4gICAgdGhpcy53b3JsZFRyYW5zZm9ybS5hcHBseUludmVyc2UocG9pbnQsICB0ZW1wUG9pbnQpO1xuXG4gICAgdmFyIHdpZHRoID0gdGhpcy5fdGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuX3RleHR1cmUuX2ZyYW1lLmhlaWdodDtcbiAgICB2YXIgeDEgPSAtd2lkdGggKiB0aGlzLmFuY2hvci54O1xuICAgIHZhciB5MTtcblxuICAgIGlmICggdGVtcFBvaW50LnggPiB4MSAmJiB0ZW1wUG9pbnQueCA8IHgxICsgd2lkdGggKVxuICAgIHtcbiAgICAgICAgeTEgPSAtaGVpZ2h0ICogdGhpcy5hbmNob3IueTtcblxuICAgICAgICBpZiAoIHRlbXBQb2ludC55ID4geTEgJiYgdGVtcFBvaW50LnkgPCB5MSArIGhlaWdodCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4qIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgQ2FudmFzIHJlbmRlcmVyXG4qXG4qIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuKi9cblNwcml0ZS5wcm90b3R5cGUuX3JlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICBpZiAodGhpcy50ZXh0dXJlLmNyb3Aud2lkdGggPD0gMCB8fCB0aGlzLnRleHR1cmUuY3JvcC5oZWlnaHQgPD0gMClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ibGVuZE1vZGUgIT09IHJlbmRlcmVyLmN1cnJlbnRCbGVuZE1vZGUpXG4gICAge1xuICAgICAgICByZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGU7XG4gICAgICAgIHJlbmRlcmVyLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gcmVuZGVyZXIuYmxlbmRNb2Rlc1tyZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlXTtcbiAgICB9XG5cbiAgICAvLyAgSWdub3JlIG51bGwgc291cmNlc1xuICAgIGlmICh0aGlzLnRleHR1cmUudmFsaWQpXG4gICAge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuX3RleHR1cmUsXG4gICAgICAgICAgICB3dCA9IHRoaXMud29ybGRUcmFuc2Zvcm0sXG4gICAgICAgICAgICBkeCxcbiAgICAgICAgICAgIGR5LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ7XG5cbiAgICAgICAgdmFyIHJlc29sdXRpb24gPSB0ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb24gLyByZW5kZXJlci5yZXNvbHV0aW9uO1xuXG4gICAgICAgIHJlbmRlcmVyLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSB0aGlzLndvcmxkQWxwaGE7XG5cbiAgICAgICAgLy8gSWYgc21vb3RoaW5nRW5hYmxlZCBpcyBzdXBwb3J0ZWQgYW5kIHdlIG5lZWQgdG8gY2hhbmdlIHRoZSBzbW9vdGhpbmcgcHJvcGVydHkgZm9yIHRoaXMgdGV4dHVyZVxuICAgICAgICBpZiAocmVuZGVyZXIuc21vb3RoUHJvcGVydHkgJiYgcmVuZGVyZXIuY3VycmVudFNjYWxlTW9kZSAhPT0gdGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLmN1cnJlbnRTY2FsZU1vZGUgPSB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmNvbnRleHRbcmVuZGVyZXIuc21vb3RoUHJvcGVydHldID0gKHJlbmRlcmVyLmN1cnJlbnRTY2FsZU1vZGUgPT09IENPTlNULlNDQUxFX01PREVTLkxJTkVBUik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgdGV4dHVyZSBpcyB0cmltbWVkIHdlIG9mZnNldCBieSB0aGUgdHJpbSB4L3ksIG90aGVyd2lzZSB3ZSB1c2UgdGhlIGZyYW1lIGRpbWVuc2lvbnNcblxuICAgICAgICBpZih0ZXh0dXJlLnJvdGF0ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAvLyBjaGVla3kgcm90YXRpb24hXG4gICAgICAgICAgICB2YXIgYSA9IHd0LmE7XG4gICAgICAgICAgICB2YXIgYiA9IHd0LmI7XG5cbiAgICAgICAgICAgIHd0LmEgID0gLXd0LmM7XG4gICAgICAgICAgICB3dC5iICA9IC13dC5kO1xuICAgICAgICAgICAgd3QuYyAgPSAgYTtcbiAgICAgICAgICAgIHd0LmQgID0gIGI7XG5cbiAgICAgICAgICAgIHdpZHRoID0gdGV4dHVyZS5jcm9wLmhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRleHR1cmUuY3JvcC53aWR0aDtcblxuICAgICAgICAgICAgZHggPSAodGV4dHVyZS50cmltKSA/IHRleHR1cmUudHJpbS55IC0gdGhpcy5hbmNob3IueSAqIHRleHR1cmUudHJpbS5oZWlnaHQgOiB0aGlzLmFuY2hvci55ICogLXRleHR1cmUuX2ZyYW1lLmhlaWdodDtcbiAgICAgICAgICAgIGR5ID0gKHRleHR1cmUudHJpbSkgPyB0ZXh0dXJlLnRyaW0ueCAtIHRoaXMuYW5jaG9yLnggKiB0ZXh0dXJlLnRyaW0ud2lkdGggOiB0aGlzLmFuY2hvci54ICogLXRleHR1cmUuX2ZyYW1lLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGggPSB0ZXh0dXJlLmNyb3Aud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSB0ZXh0dXJlLmNyb3AuaGVpZ2h0O1xuXG4gICAgICAgICAgICBkeCA9ICh0ZXh0dXJlLnRyaW0pID8gdGV4dHVyZS50cmltLnggLSB0aGlzLmFuY2hvci54ICogdGV4dHVyZS50cmltLndpZHRoIDogdGhpcy5hbmNob3IueCAqIC10ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICAgICAgICAgIGR5ID0gKHRleHR1cmUudHJpbSkgPyB0ZXh0dXJlLnRyaW0ueSAtIHRoaXMuYW5jaG9yLnkgKiB0ZXh0dXJlLnRyaW0uaGVpZ2h0IDogdGhpcy5hbmNob3IueSAqIC10ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gQWxsb3cgZm9yIHBpeGVsIHJvdW5kaW5nXG4gICAgICAgIGlmIChyZW5kZXJlci5yb3VuZFBpeGVscylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICAgICAgd3QuYSxcbiAgICAgICAgICAgICAgICB3dC5iLFxuICAgICAgICAgICAgICAgIHd0LmMsXG4gICAgICAgICAgICAgICAgd3QuZCxcbiAgICAgICAgICAgICAgICAod3QudHggKiByZW5kZXJlci5yZXNvbHV0aW9uKSB8IDAsXG4gICAgICAgICAgICAgICAgKHd0LnR5ICogcmVuZGVyZXIucmVzb2x1dGlvbikgfCAwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkeCA9IGR4IHwgMDtcbiAgICAgICAgICAgIGR5ID0gZHkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuXG4gICAgICAgICAgICByZW5kZXJlci5jb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgICAgICAgICB3dC5hLFxuICAgICAgICAgICAgICAgIHd0LmIsXG4gICAgICAgICAgICAgICAgd3QuYyxcbiAgICAgICAgICAgICAgICB3dC5kLFxuICAgICAgICAgICAgICAgIHd0LnR4ICogcmVuZGVyZXIucmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICB3dC50eSAqIHJlbmRlcmVyLnJlc29sdXRpb25cbiAgICAgICAgICAgICk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGludCAhPT0gMHhGRkZGRkYpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlZFRpbnQgIT09IHRoaXMudGludClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlZFRpbnQgPSB0aGlzLnRpbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPIGNsZWFuIHVwIGNhY2hpbmcgLSBob3cgdG8gY2xlYW4gdXAgdGhlIGNhY2hlcz9cbiAgICAgICAgICAgICAgICB0aGlzLnRpbnRlZFRleHR1cmUgPSBDYW52YXNUaW50ZXIuZ2V0VGludGVkVGV4dHVyZSh0aGlzLCB0aGlzLnRpbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXJlci5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICB0aGlzLnRpbnRlZFRleHR1cmUsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBkeCAvIHJlc29sdXRpb24sXG4gICAgICAgICAgICAgICAgZHkgLyByZXNvbHV0aW9uLFxuICAgICAgICAgICAgICAgIHdpZHRoIC8gcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICB3aWR0aCAvIHJlc29sdXRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmNyb3AueCxcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmNyb3AueSxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgZHggLyByZXNvbHV0aW9uLFxuICAgICAgICAgICAgICAgIGR5IC8gcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICB3aWR0aCAvIHJlc29sdXRpb24sXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC8gcmVzb2x1dGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyBzcHJpdGUgYW5kIG9wdGlvbmFsbHkgaXRzIHRleHR1cmVcbiAqXG4gKiBAcGFyYW0gZGVzdHJveVRleHR1cmUge2Jvb2xlYW59IFNob3VsZCBpdCBkZXN0cm95IHRoZSBjdXJyZW50IHRleHR1cmUgb2YgdGhlIHNwcml0ZSBhcyB3ZWxsXG4gKiBAcGFyYW0gZGVzdHJveUJhc2VUZXh0dXJlIHtib29sZWFufSBTaG91bGQgaXQgZGVzdHJveSB0aGUgYmFzZSB0ZXh0dXJlIG9mIHRoZSBzcHJpdGUgYXMgd2VsbFxuICovXG5TcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZGVzdHJveVRleHR1cmUsIGRlc3Ryb3lCYXNlVGV4dHVyZSlcbntcbiAgICBDb250YWluZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuYW5jaG9yID0gbnVsbDtcblxuICAgIGlmIChkZXN0cm95VGV4dHVyZSlcbiAgICB7XG4gICAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveShkZXN0cm95QmFzZVRleHR1cmUpO1xuICAgIH1cblxuICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcbn07XG5cbi8vIHNvbWUgaGVscGVyIGZ1bmN0aW9ucy4uXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHNwcml0ZSB0aGF0IHdpbGwgY29udGFpbiBhIHRleHR1cmUgZnJvbSB0aGUgVGV4dHVyZUNhY2hlIGJhc2VkIG9uIHRoZSBmcmFtZUlkXG4gKiBUaGUgZnJhbWUgaWRzIGFyZSBjcmVhdGVkIHdoZW4gYSBUZXh0dXJlIHBhY2tlciBmaWxlIGhhcyBiZWVuIGxvYWRlZFxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBmcmFtZUlkIHtTdHJpbmd9IFRoZSBmcmFtZSBJZCBvZiB0aGUgdGV4dHVyZSBpbiB0aGUgY2FjaGVcbiAqIEByZXR1cm4ge1Nwcml0ZX0gQSBuZXcgU3ByaXRlIHVzaW5nIGEgdGV4dHVyZSBmcm9tIHRoZSB0ZXh0dXJlIGNhY2hlIG1hdGNoaW5nIHRoZSBmcmFtZUlkXG4gKiBAcGFyYW0gW2Nyb3Nzb3JpZ2luPShhdXRvKV0ge2Jvb2xlYW59IGlmIHlvdSB3YW50IHRvIHNwZWNpZnkgdGhlIGNyb3NzLW9yaWdpbiBwYXJhbWV0ZXJcbiAqIEBwYXJhbSBbc2NhbGVNb2RlPXNjYWxlTW9kZXMuREVGQVVMVF0ge251bWJlcn0gaWYgeW91IHdhbnQgdG8gc3BlY2lmeSB0aGUgc2NhbGUgbW9kZSwgc2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICovXG5TcHJpdGUuZnJvbUZyYW1lID0gZnVuY3Rpb24gKGZyYW1lSWQpXG57XG4gICAgdmFyIHRleHR1cmUgPSB1dGlscy5UZXh0dXJlQ2FjaGVbZnJhbWVJZF07XG5cbiAgICBpZiAoIXRleHR1cmUpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmcmFtZUlkIFwiJyArIGZyYW1lSWQgKyAnXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHRleHR1cmUgY2FjaGUgJyArIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgU3ByaXRlKHRleHR1cmUpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgc3ByaXRlIHRoYXQgd2lsbCBjb250YWluIGEgdGV4dHVyZSBiYXNlZCBvbiBhbiBpbWFnZSB1cmxcbiAqIElmIHRoZSBpbWFnZSBpcyBub3QgaW4gdGhlIHRleHR1cmUgY2FjaGUgaXQgd2lsbCBiZSBsb2FkZWRcbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gaW1hZ2VJZCB7U3RyaW5nfSBUaGUgaW1hZ2UgdXJsIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcmV0dXJuIHtTcHJpdGV9IEEgbmV3IFNwcml0ZSB1c2luZyBhIHRleHR1cmUgZnJvbSB0aGUgdGV4dHVyZSBjYWNoZSBtYXRjaGluZyB0aGUgaW1hZ2UgaWRcbiAqL1xuU3ByaXRlLmZyb21JbWFnZSA9IGZ1bmN0aW9uIChpbWFnZUlkLCBjcm9zc29yaWdpbiwgc2NhbGVNb2RlKVxue1xuICAgIHJldHVybiBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbUltYWdlKGltYWdlSWQsIGNyb3Nzb3JpZ2luLCBzY2FsZU1vZGUpKTtcbn07XG4iLCJ2YXIgT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvT2JqZWN0UmVuZGVyZXInKSxcbiAgICBTaGFkZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvc2hhZGVycy9TaGFkZXInKSxcbiAgICBXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL1dlYkdMUmVuZGVyZXInKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogQGF1dGhvciBNYXQgR3JvdmVzXG4gKlxuICogQmlnIHRoYW5rcyB0byB0aGUgdmVyeSBjbGV2ZXIgTWF0dCBEZXNMYXVyaWVycyA8bWF0dGRlc2w+IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9cbiAqIGZvciBjcmVhdGluZyB0aGUgb3JpZ2luYWwgcGl4aSB2ZXJzaW9uIVxuICogQWxzbyBhIHRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vYmNoZXZhbGllciBmb3IgdHdlYWtpbmcgdGhlIHRpbnQgYW5kIGFscGhhIHNvIHRoYXQgdGhleSBub3cgc2hhcmUgNCBieXRlcyBvbiB0aGUgdmVydGV4IGJ1ZmZlclxuICpcbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnkgTGliR0RYJ3MgU3ByaXRlUmVuZGVyZXI6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGliZ2R4L2xpYmdkeC9ibG9iL21hc3Rlci9nZHgvc3JjL2NvbS9iYWRsb2dpYy9nZHgvZ3JhcGhpY3MvZzJkL1Nwcml0ZVJlbmRlcmVyLmphdmFcbiAqL1xuXG4vKipcbiAqXG4gKiBAY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgT2JqZWN0UmVuZGVyZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgc3ByaXRlIGJhdGNoIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gU3ByaXRlUmVuZGVyZXIocmVuZGVyZXIpXG57XG4gICAgT2JqZWN0UmVuZGVyZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudmVydFNpemUgPSA1O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRCeXRlU2l6ZSA9IHRoaXMudmVydFNpemUgKiA0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpbWFnZXMgaW4gdGhlIFNwcml0ZUJhdGNoIGJlZm9yZSBpdCBmbHVzaGVzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuc2l6ZSA9IENPTlNULlNQUklURV9CQVRDSF9TSVpFOyAvLyAyMDAwIGlzIGEgbmljZSBiYWxhbmNlIGJldHdlZW4gbW9iaWxlIC8gZGVza3RvcFxuXG4gICAgLy8gdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBpbiBvdXIgYmF0Y2hcbiAgICB2YXIgbnVtVmVydHMgPSB0aGlzLnNpemUgKiA0ICogdGhpcy52ZXJ0Qnl0ZVNpemU7XG4gICAgLy8gdGhlIHRvdGFsIG51bWJlciBvZiBpbmRpY2VzIGluIG91ciBiYXRjaFxuICAgIHZhciBudW1JbmRpY2VzID0gdGhpcy5zaXplICogNjtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSB2ZXJ0aWNlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXlCdWZmZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBBcnJheUJ1ZmZlcihudW1WZXJ0cyk7XG5cbiAgICAvKipcbiAgICAgKiBWaWV3IG9uIHRoZSB2ZXJ0aWNlcyBhcyBhIEZsb2F0MzJBcnJheVxuICAgICAqXG4gICAgICogQG1lbWJlciB7RmxvYXQzMkFycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKTtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjb2xvciBjb21wb25lbnRzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtVaW50MzJBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLnZlcnRpY2VzKTtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBpbmRpY2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtVaW50MTZBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmluZGljZXMgPSBuZXcgVWludDE2QXJyYXkobnVtSW5kaWNlcyk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubGFzdEluZGV4Q291bnQgPSAwO1xuXG4gICAgZm9yICh2YXIgaT0wLCBqPTA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNClcbiAgICB7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMF0gPSBqICsgMDtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAxXSA9IGogKyAxO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDJdID0gaiArIDI7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgM10gPSBqICsgMDtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyA0XSA9IGogKyAyO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDVdID0gaiArIDM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5kcmF3aW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEJhdGNoU2l6ZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7QmFzZVRleHR1cmV9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50QmFzZVRleHR1cmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmJsZW5kTW9kZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnNoYWRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnNwcml0ZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHNoYWRlciB0aGF0IGlzIHVzZWQgaWYgYSBzcHJpdGUgZG9lc24ndCBoYXZlIGEgbW9yZSBzcGVjaWZpYyBvbmUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuXG59XG5cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlKTtcblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcml0ZVJlbmRlcmVyO1xubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVSZW5kZXJlcjtcblxuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignc3ByaXRlJywgU3ByaXRlUmVuZGVyZXIpO1xuXG4vKipcbiAqIFNldHMgdXAgdGhlIHJlbmRlcmVyIGNvbnRleHQgYW5kIG5lY2Vzc2FyeSBidWZmZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gKi9cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAvLyBzZXR1cCBkZWZhdWx0IHNoYWRlclxuICAgIHRoaXMuc2hhZGVyID0gdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLmRlZmF1bHRTaGFkZXI7XG5cbiAgICAvLyBjcmVhdGUgYSBjb3VwbGUgb2YgYnVmZmVyc1xuICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLy8gNjU1MzUgaXMgbWF4IGluZGV4LCBzbyA2NTUzNSAvIDYgPSAxMDkyMi5cblxuICAgIC8vdXBsb2FkIHRoZSBpbmRleCBkYXRhXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRpY2VzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgdGhpcy5jdXJyZW50QmxlbmRNb2RlID0gOTk5OTk7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHNwcml0ZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHNwcml0ZSB7U3ByaXRlfSB0aGUgc3ByaXRlIHRvIHJlbmRlciB3aGVuIHVzaW5nIHRoaXMgc3ByaXRlYmF0Y2hcbiAqL1xuU3ByaXRlUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChzcHJpdGUpXG57XG4gICAgdmFyIHRleHR1cmUgPSBzcHJpdGUuX3RleHR1cmU7XG5cbiAgICAvL1RPRE8gc2V0IGJsZW5kIG1vZGVzLi5cbiAgICAvLyBjaGVjayB0ZXh0dXJlLi5cbiAgICBpZiAodGhpcy5jdXJyZW50QmF0Y2hTaXplID49IHRoaXMuc2l6ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFzZVRleHR1cmUgPSB0ZXh0dXJlLmJhc2VUZXh0dXJlO1xuICAgIH1cblxuICAgIC8vIGdldCB0aGUgdXZzIGZvciB0aGUgdGV4dHVyZVxuICAgIHZhciB1dnMgPSB0ZXh0dXJlLl91dnM7XG5cbiAgICAvLyBpZiB0aGUgdXZzIGhhdmUgbm90IHVwZGF0ZWQgdGhlbiBubyBwb2ludCByZW5kZXJpbmcganVzdCB5ZXQhXG4gICAgaWYgKCF1dnMpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETyB0cmltPz9cbiAgICB2YXIgYVggPSBzcHJpdGUuYW5jaG9yLng7XG4gICAgdmFyIGFZID0gc3ByaXRlLmFuY2hvci55O1xuXG4gICAgdmFyIHcwLCB3MSwgaDAsIGgxO1xuXG4gICAgaWYgKHRleHR1cmUudHJpbSlcbiAgICB7XG4gICAgICAgIC8vIGlmIHRoZSBzcHJpdGUgaXMgdHJpbW1lZCB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZSBleHRyYSBzcGFjZSBiZWZvcmUgdHJhbnNmb3JtaW5nIHRoZSBzcHJpdGUgY29vcmRzLi5cbiAgICAgICAgdmFyIHRyaW0gPSB0ZXh0dXJlLnRyaW07XG5cbiAgICAgICAgdzEgPSB0cmltLnggLSBhWCAqIHRyaW0ud2lkdGg7XG4gICAgICAgIHcwID0gdzEgKyB0ZXh0dXJlLmNyb3Aud2lkdGg7XG5cbiAgICAgICAgaDEgPSB0cmltLnkgLSBhWSAqIHRyaW0uaGVpZ2h0O1xuICAgICAgICBoMCA9IGgxICsgdGV4dHVyZS5jcm9wLmhlaWdodDtcblxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB3MCA9ICh0ZXh0dXJlLl9mcmFtZS53aWR0aCApICogKDEtYVgpO1xuICAgICAgICB3MSA9ICh0ZXh0dXJlLl9mcmFtZS53aWR0aCApICogLWFYO1xuXG4gICAgICAgIGgwID0gdGV4dHVyZS5fZnJhbWUuaGVpZ2h0ICogKDEtYVkpO1xuICAgICAgICBoMSA9IHRleHR1cmUuX2ZyYW1lLmhlaWdodCAqIC1hWTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmN1cnJlbnRCYXRjaFNpemUgKiB0aGlzLnZlcnRCeXRlU2l6ZTtcblxuICAgIHZhciB3b3JsZFRyYW5zZm9ybSA9IHNwcml0ZS53b3JsZFRyYW5zZm9ybTtcblxuICAgIHZhciBhID0gd29ybGRUcmFuc2Zvcm0uYTtcbiAgICB2YXIgYiA9IHdvcmxkVHJhbnNmb3JtLmI7XG4gICAgdmFyIGMgPSB3b3JsZFRyYW5zZm9ybS5jO1xuICAgIHZhciBkID0gd29ybGRUcmFuc2Zvcm0uZDtcbiAgICB2YXIgdHggPSB3b3JsZFRyYW5zZm9ybS50eDtcbiAgICB2YXIgdHkgPSB3b3JsZFRyYW5zZm9ybS50eTtcblxuICAgIHZhciBjb2xvcnMgPSB0aGlzLmNvbG9ycztcbiAgICB2YXIgcG9zaXRpb25zID0gdGhpcy5wb3NpdGlvbnM7XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci5yb3VuZFBpeGVscylcbiAgICB7XG4gICAgICAgIC8vIHh5XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleF0gPSBhICogdzEgKyBjICogaDEgKyB0eCB8IDA7XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxXSA9IGQgKiBoMSArIGIgKiB3MSArIHR5IHwgMDtcblxuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrNV0gPSBhICogdzAgKyBjICogaDEgKyB0eCB8IDA7XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCs2XSA9IGQgKiBoMSArIGIgKiB3MCArIHR5IHwgMDtcblxuICAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzEwXSA9IGEgKiB3MCArIGMgKiBoMCArIHR4IHwgMDtcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzExXSA9IGQgKiBoMCArIGIgKiB3MCArIHR5IHwgMDtcblxuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTVdID0gYSAqIHcxICsgYyAqIGgwICsgdHggfCAwO1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTZdID0gZCAqIGgwICsgYiAqIHcxICsgdHkgfCAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXhdID0gYSAqIHcxICsgYyAqIGgxICsgdHg7XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxXSA9IGQgKiBoMSArIGIgKiB3MSArIHR5O1xuXG4gICAgICAgIC8vIHh5XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCs1XSA9IGEgKiB3MCArIGMgKiBoMSArIHR4O1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrNl0gPSBkICogaDEgKyBiICogdzAgKyB0eTtcblxuICAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzEwXSA9IGEgKiB3MCArIGMgKiBoMCArIHR4O1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTFdID0gZCAqIGgwICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzE1XSA9IGEgKiB3MSArIGMgKiBoMCArIHR4O1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTZdID0gZCAqIGgwICsgYiAqIHcxICsgdHk7XG4gICAgfVxuXG4gICAgLy8gdXZcbiAgICBwb3NpdGlvbnNbaW5kZXgrMl0gPSB1dnMueDA7XG4gICAgcG9zaXRpb25zW2luZGV4KzNdID0gdXZzLnkwO1xuXG4gICAgLy8gdXZcbiAgICBwb3NpdGlvbnNbaW5kZXgrN10gPSB1dnMueDE7XG4gICAgcG9zaXRpb25zW2luZGV4KzhdID0gdXZzLnkxO1xuXG4gICAgIC8vIHV2XG4gICAgcG9zaXRpb25zW2luZGV4KzEyXSA9IHV2cy54MjtcbiAgICBwb3NpdGlvbnNbaW5kZXgrMTNdID0gdXZzLnkyO1xuXG4gICAgLy8gdXZcbiAgICBwb3NpdGlvbnNbaW5kZXgrMTddID0gdXZzLngzO1xuICAgIHBvc2l0aW9uc1tpbmRleCsxOF0gPSB1dnMueTM7XG5cbiAgICAvLyBjb2xvciBhbmQgYWxwaGFcbiAgICB2YXIgdGludCA9IHNwcml0ZS50aW50O1xuICAgIGNvbG9yc1tpbmRleCs0XSA9IGNvbG9yc1tpbmRleCs5XSA9IGNvbG9yc1tpbmRleCsxNF0gPSBjb2xvcnNbaW5kZXgrMTldID0gKHRpbnQgPj4gMTYpICsgKHRpbnQgJiAweGZmMDApICsgKCh0aW50ICYgMHhmZikgPDwgMTYpICsgKHNwcml0ZS53b3JsZEFscGhhICogMjU1IDw8IDI0KTtcblxuICAgIC8vIGluY3JlbWVudCB0aGUgYmF0Y2hzaXplXG4gICAgdGhpcy5zcHJpdGVzW3RoaXMuY3VycmVudEJhdGNoU2l6ZSsrXSA9IHNwcml0ZTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBhbmQgZW1wdGllcyB0aGUgY3VycmVudCBiYXRjaC5cbiAqXG4gKi9cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gSWYgdGhlIGJhdGNoIGlzIGxlbmd0aCAwIHRoZW4gcmV0dXJuIGFzIHRoZXJlIGlzIG5vdGhpbmcgdG8gZHJhd1xuICAgIGlmICh0aGlzLmN1cnJlbnRCYXRjaFNpemUgPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICB2YXIgc2hhZGVyO1xuXG4gICAgLy8gdXBsb2FkIHRoZSB2ZXJ0cyB0byB0aGUgYnVmZmVyXG4gICAgaWYgKHRoaXMuY3VycmVudEJhdGNoU2l6ZSA+ICggdGhpcy5zaXplICogMC41ICkgKVxuICAgIHtcbiAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMudmVydGljZXMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB2YXIgdmlldyA9IHRoaXMucG9zaXRpb25zLnN1YmFycmF5KDAsIHRoaXMuY3VycmVudEJhdGNoU2l6ZSAqIHRoaXMudmVydEJ5dGVTaXplKTtcbiAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHZpZXcpO1xuICAgIH1cblxuICAgIHZhciBuZXh0VGV4dHVyZSwgbmV4dEJsZW5kTW9kZSwgbmV4dFNoYWRlcjtcbiAgICB2YXIgYmF0Y2hTaXplID0gMDtcbiAgICB2YXIgc3RhcnQgPSAwO1xuXG4gICAgdmFyIGN1cnJlbnRCYXNlVGV4dHVyZSA9IG51bGw7XG4gICAgdmFyIGN1cnJlbnRCbGVuZE1vZGUgPSB0aGlzLnJlbmRlcmVyLmJsZW5kTW9kZU1hbmFnZXIuY3VycmVudEJsZW5kTW9kZTtcbiAgICB2YXIgY3VycmVudFNoYWRlciA9IG51bGw7XG5cbiAgICB2YXIgYmxlbmRTd2FwID0gZmFsc2U7XG4gICAgdmFyIHNoYWRlclN3YXAgPSBmYWxzZTtcbiAgICB2YXIgc3ByaXRlO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLmN1cnJlbnRCYXRjaFNpemU7IGkgPCBqOyBpKyspXG4gICAge1xuXG4gICAgICAgIHNwcml0ZSA9IHRoaXMuc3ByaXRlc1tpXTtcblxuICAgICAgICBuZXh0VGV4dHVyZSA9IHNwcml0ZS5fdGV4dHVyZS5iYXNlVGV4dHVyZTtcbiAgICAgICAgbmV4dEJsZW5kTW9kZSA9IHNwcml0ZS5ibGVuZE1vZGU7XG4gICAgICAgIG5leHRTaGFkZXIgPSBzcHJpdGUuc2hhZGVyIHx8IHRoaXMuc2hhZGVyO1xuXG4gICAgICAgIGJsZW5kU3dhcCA9IGN1cnJlbnRCbGVuZE1vZGUgIT09IG5leHRCbGVuZE1vZGU7XG4gICAgICAgIHNoYWRlclN3YXAgPSBjdXJyZW50U2hhZGVyICE9PSBuZXh0U2hhZGVyOyAvLyBzaG91bGQgSSB1c2UgdXVpZFM/Pz9cblxuICAgICAgICBpZiAoY3VycmVudEJhc2VUZXh0dXJlICE9PSBuZXh0VGV4dHVyZSB8fCBibGVuZFN3YXAgfHwgc2hhZGVyU3dhcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJCYXRjaChjdXJyZW50QmFzZVRleHR1cmUsIGJhdGNoU2l6ZSwgc3RhcnQpO1xuXG4gICAgICAgICAgICBzdGFydCA9IGk7XG4gICAgICAgICAgICBiYXRjaFNpemUgPSAwO1xuICAgICAgICAgICAgY3VycmVudEJhc2VUZXh0dXJlID0gbmV4dFRleHR1cmU7XG5cbiAgICAgICAgICAgIGlmIChibGVuZFN3YXApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJsZW5kTW9kZSA9IG5leHRCbGVuZE1vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5ibGVuZE1vZGVNYW5hZ2VyLnNldEJsZW5kTW9kZSggY3VycmVudEJsZW5kTW9kZSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hhZGVyU3dhcClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hhZGVyID0gbmV4dFNoYWRlcjtcblxuXG5cbiAgICAgICAgICAgICAgICBzaGFkZXIgPSBjdXJyZW50U2hhZGVyLnNoYWRlcnMgPyBjdXJyZW50U2hhZGVyLnNoYWRlcnNbZ2wuaWRdIDogY3VycmVudFNoYWRlcjtcblxuICAgICAgICAgICAgICAgIGlmICghc2hhZGVyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyID0gY3VycmVudFNoYWRlci5nZXRTaGFkZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgc2hhZGVyIGZ1bmN0aW9uPz8/XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlcihzaGFkZXIpO1xuXG4gICAgICAgICAgICAgICAgLy9UT0RPIC0gaSBLTk9XIHRoaXMgY2FuIGJlIG9wdGltaXNlZCEgT25jZSB2MyBpcyBzdGFibGUgaWwgbG9vayBhdCB0aGlzIG5leHQuLi5cbiAgICAgICAgICAgICAgICBzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC52YWx1ZSA9IHRoaXMucmVuZGVyZXIuY3VycmVudFJlbmRlclRhcmdldC5wcm9qZWN0aW9uTWF0cml4LnRvQXJyYXkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy9NYWtlIHRoaXMgYSBsaXR0bGUgbW9yZSBkeW5hbWljIC8gaW50ZWxsaWdlbnQhXG4gICAgICAgICAgICAgICAgc2hhZGVyLnN5bmNVbmlmb3JtcygpO1xuXG4gICAgICAgICAgICAgICAgLy9UT0RPIGludmVzdGlnYXRlIHNvbWUga2luZCBvZiB0ZXh0dXJlIHN0YXRlIG1hbmFnbWVudD8/XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBtYWtlIHN1cmUgdGhpcyB0ZXh0dXJlIGlzIHRoZSBhY3RpdmUgb25lIGZvciBhbGwgdGhlIGJhdGNoIHN3YXBzLi5cbiAgICAgICAgICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcblxuICAgICAgICAgICAgICAgIC8vIGJvdGggdGhlYXNlIG9ubHkgbmVlZCB0byBiZSBzZXQgaWYgdGhleSBhcmUgY2hhbmdpbmcuLlxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgcHJvamVjdGlvblxuICAgICAgICAgICAgICAgIC8vZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiYXRjaFNpemUrKztcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckJhdGNoKGN1cnJlbnRCYXNlVGV4dHVyZSwgYmF0Y2hTaXplLCBzdGFydCk7XG5cbiAgICAvLyB0aGVuIHJlc2V0IHRoZSBiYXRjaCFcbiAgICB0aGlzLmN1cnJlbnRCYXRjaFNpemUgPSAwO1xufTtcblxuLyoqXG4gKiBEcmF3cyB0aGUgY3VycmVudGx5IGJhdGNoZXMgc3ByaXRlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9XG4gKiBAcGFyYW0gc2l6ZSB7bnVtYmVyfVxuICogQHBhcmFtIHN0YXJ0SW5kZXgge251bWJlcn1cbiAqL1xuU3ByaXRlUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckJhdGNoID0gZnVuY3Rpb24gKHRleHR1cmUsIHNpemUsIHN0YXJ0SW5kZXgpXG57XG4gICAgaWYgKHNpemUgPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIGlmICghdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pXG4gICAge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnVwZGF0ZVRleHR1cmUodGV4dHVyZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vIGJpbmQgdGhlIGN1cnJlbnQgdGV4dHVyZVxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSk7XG4gICAgfVxuXG4gICAgLy8gbm93IGRyYXcgdGhvc2Ugc3Vja2FzIVxuICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIHNpemUgKiA2LCBnbC5VTlNJR05FRF9TSE9SVCwgc3RhcnRJbmRleCAqIDYgKiAyKTtcblxuICAgIC8vIGluY3JlbWVudCB0aGUgZHJhdyBjb3VudFxuICAgIHRoaXMucmVuZGVyZXIuZHJhd0NvdW50Kys7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIG5ldyBzcHJpdGUgYmF0Y2guXG4gKlxuICovXG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAvLyBiaW5kIHRoZSBtYWluIHRleHR1cmVcblxuXG4gICAgLy8gYmluZCB0aGUgYnVmZmVyc1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG5cbiAgICAvLyB0aGlzIGlzIHRoZSBzYW1lIGZvciBlYWNoIHNoYWRlcj9cbiAgICB2YXIgc3RyaWRlID0gIHRoaXMudmVydEJ5dGVTaXplO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCAwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUsIDIgKiA0KTtcblxuICAgIC8vIGNvbG9yIGF0dHJpYnV0ZXMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyB1bnNpZ25lZCBieXRlcyBhbmQgbm9ybWFsaXplZFxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hQ29sb3IsIDQsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIHN0cmlkZSwgNCAqIDQpO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgU3ByaXRlQmF0Y2guXG4gKlxuICovXG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5yZW5kZXJlci5nbC5kZWxldGVCdWZmZXIodGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuaW5kZXhCdWZmZXIpO1xuXG4gICAgdGhpcy5zaGFkZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gbnVsbDtcbiAgICB0aGlzLnBvc2l0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5jb2xvcnMgPSBudWxsO1xuICAgIHRoaXMuaW5kaWNlcyA9IG51bGw7XG5cbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLmN1cnJlbnRCYXNlVGV4dHVyZSA9IG51bGw7XG5cbiAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMudGV4dHVyZXMgPSBudWxsO1xuICAgIHRoaXMuYmxlbmRNb2RlcyA9IG51bGw7XG4gICAgdGhpcy5zaGFkZXJzID0gbnVsbDtcbiAgICB0aGlzLnNwcml0ZXMgPSBudWxsO1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcbn07XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcblxuLyoqXG4gKiBBIHRleHR1cmUgc3RvcmVzIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHJlcHJlc2VudHMgYW4gaW1hZ2UuIEFsbCB0ZXh0dXJlcyBoYXZlIGEgYmFzZSB0ZXh0dXJlLlxuICpcbiAqIEBjbGFzc1xuICogQG1peGVzIGV2ZW50VGFyZ2V0XG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHNvdXJjZSB7SW1hZ2V8Q2FudmFzfSB0aGUgc291cmNlIG9iamVjdCBvZiB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSBbc2NhbGVNb2RlPXNjYWxlTW9kZXMuREVGQVVMVF0ge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHBhcmFtIHJlc29sdXRpb24ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUgZm9yIGRldmljZXMgd2l0aCBkaWZmZXJlbnQgcGl4ZWwgcmF0aW9zXG4gKi9cbmZ1bmN0aW9uIEJhc2VUZXh0dXJlKHNvdXJjZSwgc2NhbGVNb2RlLCByZXNvbHV0aW9uKVxue1xuICAgIHRoaXMudXVpZCA9IHV0aWxzLnV1aWQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBSZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc29sdXRpb24gfHwgMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgYmFzZSB0ZXh0dXJlIHNldCB3aGVuIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IDEwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGJhc2UgdGV4dHVyZSBzZXQgd2hlbiB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuXG4gICAgLy8gVE9ETyBkb2NzXG4gICAgLy8gdXNlZCB0byBzdG9yZSB0aGUgYWN0dWFsIGRpbWVuc2lvbnMgb2YgdGhlIHNvdXJjZVxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gc3RvcmUgdGhlIGFjdHVhbCB3aWR0aCBvZiB0aGUgc291cmNlIG9mIHRoaXMgdGV4dHVyZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMucmVhbFdpZHRoID0gMTAwO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gc3RvcmUgdGhlIGFjdHVhbCBoZWlnaHQgb2YgdGhlIHNvdXJjZSBvZiB0aGlzIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnJlYWxIZWlnaHQgPSAxMDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NhbGUgbW9kZSB0byBhcHBseSB3aGVuIHNjYWxpbmcgdGhpcyB0ZXh0dXJlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHt7bnVtYmVyfX1cbiAgICAgKiBAZGVmYXVsdCBzY2FsZU1vZGVzLkxJTkVBUlxuICAgICAqL1xuICAgIHRoaXMuc2NhbGVNb2RlID0gc2NhbGVNb2RlIHx8IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFQ7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSBvbmNlIHRoZSBiYXNlIHRleHR1cmUgaGFzIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG5ldmVyIHRydWUgaWYgdGhlIHVuZGVybHlpbmcgc291cmNlIGZhaWxzIHRvIGxvYWQgb3IgaGFzIG5vIHRleHR1cmUgZGF0YS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy5oYXNMb2FkZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIGlmIHRoZSBzb3VyY2UgaXMgY3VycmVudGx5IGxvYWRpbmcuXG4gICAgICpcbiAgICAgKiBJZiBhbiBJbWFnZSBzb3VyY2UgaXMgbG9hZGluZyB0aGUgJ2xvYWRlZCcgb3IgJ2Vycm9yJyBldmVudCB3aWxsIGJlXG4gICAgICogZGlzcGF0Y2hlZCB3aGVuIHRoZSBvcGVyYXRpb24gZW5kcy4gQW4gdW5kZXJ5bGluZyBzb3VyY2UgdGhhdCBpc1xuICAgICAqIGltbWVkaWF0ZWx5LWF2YWlsYWJsZSBieXBhc3NlcyBsb2FkaW5nIGVudGlyZWx5LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGltYWdlIHNvdXJjZSB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogVE9ETzogTWFrZSB0aGlzIGEgc2V0dGVyIHRoYXQgY2FsbHMgbG9hZFNvdXJjZSgpO1xuICAgICAqXG4gICAgICogQG1lbWJlciB7SW1hZ2V8Q2FudmFzfVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuc291cmNlID0gbnVsbDsgLy8gc2V0IGluIGxvYWRTb3VyY2UsIGlmIGF0IGFsbFxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgaWYgUkdCIGNoYW5uZWxzIHNob3VsZCBiZSBwcmUtbXVsdGlwbGllZCBieSBBbHBoYSAgKFdlYkdMIG9ubHkpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICB0aGlzLnByZW11bHRpcGxpZWRBbHBoYSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5pbWFnZVVybCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXZXRoZXIgb3Igbm90IHRoZSB0ZXh0dXJlIGlzIGEgcG93ZXIgb2YgdHdvLCB0cnkgdG8gdXNlIHBvd2VyIG9mIHR3byB0ZXh0dXJlcyBhcyBtdWNoIGFzIHlvdSBjYW5cbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc1Bvd2VyT2ZUd28gPSBmYWxzZTtcblxuICAgIC8vIHVzZWQgZm9yIHdlYkdMXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHRydWUgaWYgYSBtaXBtYXAgb2YgdGhpcyB0ZXh0dXJlIG5lZWRzIHRvIGJlIGdlbmVyYXRlZC4gVGhpcyB2YWx1ZSBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIHRoZSB0ZXh0dXJlIGlzIHVzZWRcbiAgICAgKiBBbHNvIHRoZSB0ZXh0dXJlIG11c3QgYmUgYSBwb3dlciBvZiB0d28gc2l6ZSB0byB3b3JrXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubWlwbWFwID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiByZW5kZXJlciBJRHMgdG8gd2ViZ2wgdGV4dHVyZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge29iamVjdDxudW1iZXIsIFdlYkdMVGV4dHVyZT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbFRleHR1cmVzID0gW107XG5cbiAgICAvLyBpZiBubyBzb3VyY2UgcGFzc2VkIGRvbid0IHRyeSB0byBsb2FkXG4gICAgaWYgKHNvdXJjZSlcbiAgICB7XG4gICAgICAgIHRoaXMubG9hZFNvdXJjZShzb3VyY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSBub3QtaW1tZWRpYXRlbHktYXZhaWxhYmxlIHNvdXJjZSBmaW5pc2hlcyBsb2FkaW5nLlxuICAgICAqXG4gICAgICogQGV2ZW50IGxvYWRlZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSBub3QtaW1tZWRpYXRlbHktYXZhaWxhYmxlIHNvdXJjZSBmYWlscyB0byBsb2FkLlxuICAgICAqXG4gICAgICogQGV2ZW50IGVycm9yXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xufVxuXG5CYXNlVGV4dHVyZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlVGV4dHVyZTtcbm1vZHVsZS5leHBvcnRzID0gQmFzZVRleHR1cmU7XG5cbnV0aWxzLmV2ZW50VGFyZ2V0Lm1peGluKEJhc2VUZXh0dXJlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgdGV4dHVyZSBvbiBhbGwgdGhlIHdlYmdsIHJlbmRlcmVycy5cbiAqXG4gKiBAZmlyZXMgdXBkYXRlXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzKTtcbn07XG5cbi8qKlxuICogTG9hZCBhIHNvdXJjZS5cbiAqXG4gKiBJZiB0aGUgc291cmNlIGlzIG5vdC1pbW1lZGlhdGVseS1hdmFpbGFibGUsIHN1Y2ggYXMgYW4gaW1hZ2UgdGhhdCBuZWVkcyB0byBiZVxuICogZG93bmxvYWRlZCwgdGhlbiB0aGUgJ2xvYWRlZCcgb3IgJ2Vycm9yJyBldmVudCB3aWxsIGJlIGRpc3BhdGNoZWQgaW4gdGhlIGZ1dHVyZVxuICogYW5kIGBoYXNMb2FkZWRgIHdpbGwgcmVtYWluIGZhbHNlIGFmdGVyIHRoaXMgY2FsbC5cbiAqXG4gKiBUaGUgbG9naWMgc3RhdGUgYWZ0ZXIgY2FsbGluZyBgbG9hZFNvdXJjZWAgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSAoZWcuIGBmcm9tSW1hZ2VgLCBgbmV3IEJhc2VUZXh0dXJlYCkgaXM6XG4gKlxuICogICAgIGlmICh0ZXh0dXJlLmhhc0xvYWRlZClcbiB7XG4gKiAgICAgICAgLy8gdGV4dHVyZSByZWFkeSBmb3IgdXNlXG4gKiAgICAgfSBlbHNlIGlmICh0ZXh0dXJlLmlzTG9hZGluZylcbiB7XG4gKiAgICAgICAgLy8gbGlzdGVuIHRvICdsb2FkZWQnIGFuZC9vciAnZXJyb3InIGV2ZW50cyBvbiB0ZXh0dXJlXG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgICAvLyBub3QgbG9hZGluZywgbm90IGdvaW5nIHRvIGxvYWQgVU5MRVNTIHRoZSBzb3VyY2UgaXMgcmVsb2FkZWRcbiAqICAgICAgICAvLyAoaXQgbWF5IHN0aWxsIG1ha2Ugc2Vuc2UgdG8gbGlzdGVuIHRvIHRoZSBldmVudHMpXG4gKiAgICAgfVxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBwYXJhbSBzb3VyY2Uge0ltYWdlfENhbnZhc30gdGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIHRleHR1cmUuXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS5sb2FkU291cmNlID0gZnVuY3Rpb24gKHNvdXJjZSlcbntcbiAgICB2YXIgd2FzTG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh3YXNMb2FkaW5nICYmIHRoaXMuc291cmNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5zb3VyY2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2Uub25lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAvLyBBcHBseSBzb3VyY2UgaWYgbG9hZGVkLiBPdGhlcndpc2Ugc2V0dXAgYXBwcm9wcmlhdGUgbG9hZGluZyBtb25pdG9ycy5cbiAgICBpZiAoKHRoaXMuc291cmNlLmNvbXBsZXRlIHx8IHRoaXMuc291cmNlLmdldENvbnRleHQpICYmIHRoaXMuc291cmNlLndpZHRoICYmIHRoaXMuc291cmNlLmhlaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMuX3NvdXJjZUxvYWRlZCgpO1xuICAgIH1cbiAgICBlbHNlIGlmICghc291cmNlLmdldENvbnRleHQpXG4gICAge1xuXG4gICAgICAgIC8vIEltYWdlIGZhaWwgLyBub3QgcmVhZHlcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXM7XG5cbiAgICAgICAgc291cmNlLm9ubG9hZCA9IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgc291cmNlLm9uZXJyb3IgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIXNjb3BlLmlzTG9hZGluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGUuX3NvdXJjZUxvYWRlZCgpO1xuXG4gICAgICAgICAgICBzY29wZS5lbWl0KCdsb2FkZWQnLCBzY29wZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc291cmNlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHNvdXJjZS5vbmVycm9yID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCFzY29wZS5pc0xvYWRpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlLmVtaXQoJ2Vycm9yJywgc2NvcGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9lbWJlZGRlZC1jb250ZW50LTAuaHRtbCN0aGUtaW1nLWVsZW1lbnRcbiAgICAgICAgLy8gICBcIlRoZSB2YWx1ZSBvZiBgY29tcGxldGVgIGNhbiB0aHVzIGNoYW5nZSB3aGlsZSBhIHNjcmlwdCBpcyBleGVjdXRpbmcuXCJcbiAgICAgICAgLy8gU28gY29tcGxldGUgbmVlZHMgdG8gYmUgcmUtY2hlY2tlZCBhZnRlciB0aGUgY2FsbGJhY2tzIGhhdmUgYmVlbiBhZGRlZC4uXG4gICAgICAgIC8vIE5PVEU6IGNvbXBsZXRlIHdpbGwgYmUgdHJ1ZSBpZiB0aGUgaW1hZ2UgaGFzIG5vIHNyYyBzbyBiZXN0IHRvIGNoZWNrIGlmIHRoZSBzcmMgaXMgc2V0LlxuICAgICAgICBpZiAoc291cmNlLmNvbXBsZXRlICYmIHNvdXJjZS5zcmMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIC4uYW5kIGlmIHdlJ3JlIGNvbXBsZXRlIG5vdywgbm8gbmVlZCBmb3IgY2FsbGJhY2tzXG4gICAgICAgICAgICBzb3VyY2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHNvdXJjZS5vbmVycm9yID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHNvdXJjZS53aWR0aCAmJiBzb3VyY2UuaGVpZ2h0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZUxvYWRlZCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IHByZXZpb3VzIHN1YnNjcmliZXJzIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgaWYgKHdhc0xvYWRpbmcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2xvYWRlZCcsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgcHJldmlvdXMgc3Vic2NyaWJlcnMgcG9zc2libGVcbiAgICAgICAgICAgICAgICBpZiAod2FzTG9hZGluZylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFVzZWQgaW50ZXJuYWxseSB0byB1cGRhdGUgdGhlIHdpZHRoLCBoZWlnaHQsIGFuZCBzb21lIG90aGVyIHRyYWNraW5nIHZhcnMgb25jZVxuICogYSBzb3VyY2UgaGFzIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuQmFzZVRleHR1cmUucHJvdG90eXBlLl9zb3VyY2VMb2FkZWQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuaGFzTG9hZGVkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVhbFdpZHRoID0gdGhpcy5zb3VyY2UubmF0dXJhbFdpZHRoIHx8IHRoaXMuc291cmNlLndpZHRoO1xuICAgIHRoaXMucmVhbEhlaWdodCA9IHRoaXMuc291cmNlLm5hdHVyYWxIZWlnaHQgfHwgdGhpcy5zb3VyY2UuaGVpZ2h0O1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMucmVhbFdpZHRoIC8gdGhpcy5yZXNvbHV0aW9uO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5yZWFsSGVpZ2h0IC8gdGhpcy5yZXNvbHV0aW9uO1xuXG5cbiAgICB0aGlzLmlzUG93ZXJPZlR3byA9IHV0aWxzLmlzUG93ZXJPZlR3byh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGlzIGJhc2UgdGV4dHVyZVxuICpcbiAqL1xuQmFzZVRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICh0aGlzLmltYWdlVXJsKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbdGhpcy5pbWFnZVVybF07XG4gICAgICAgIGRlbGV0ZSB1dGlscy5UZXh0dXJlQ2FjaGVbdGhpcy5pbWFnZVVybF07XG5cbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IG51bGw7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0b3IuaXNDb2Nvb25KUylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2Uuc3JjID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UuX3BpeGlJZClcbiAgICB7XG4gICAgICAgIGRlbGV0ZSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW3RoaXMuc291cmNlLl9waXhpSWRdO1xuICAgIH1cblxuICAgIHRoaXMuc291cmNlID0gbnVsbDtcblxuICAgIHRoaXMuZGlzcG9zZSgpO1xufTtcblxuLyoqXG4gKiBGcmVlcyB0aGUgdGV4dHVyZSBmcm9tIFdlYkdMIG1lbW9yeSB3aXRob3V0IGRlc3Ryb3lpbmcgdGhpcyB0ZXh0dXJlIG9iamVjdC5cbiAqIFRoaXMgbWVhbnMgeW91IGNhbiBzdGlsbCB1c2UgdGhlIHRleHR1cmUgbGF0ZXIgd2hpY2ggd2lsbCB1cGxvYWQgaXQgdG8gR1BVXG4gKiBtZW1vcnkgYWdhaW4uXG4gKlxuICovXG5CYXNlVGV4dHVyZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5lbWl0KCdkaXNwb3NlJywgdGhpcyk7XG59O1xuXG4vKipcbiAqIENoYW5nZXMgdGhlIHNvdXJjZSBpbWFnZSBvZiB0aGUgdGV4dHVyZS5cbiAqIFRoZSBvcmlnaW5hbCBzb3VyY2UgbXVzdCBiZSBhbiBJbWFnZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBuZXdTcmMge3N0cmluZ30gdGhlIHBhdGggb2YgdGhlIGltYWdlXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS51cGRhdGVTb3VyY2VJbWFnZSA9IGZ1bmN0aW9uIChuZXdTcmMpXG57XG4gICAgdGhpcy5zb3VyY2Uuc3JjID0gbmV3U3JjO1xuXG4gICAgdGhpcy5sb2FkU291cmNlKHRoaXMuc291cmNlKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIGJhc2UgdGV4dHVyZSBmcm9tIHRoZSBnaXZlbiBpbWFnZSB1cmwuXG4gKiBJZiB0aGUgaW1hZ2UgaXMgbm90IGluIHRoZSBiYXNlIHRleHR1cmUgY2FjaGUgaXQgd2lsbCBiZSBjcmVhdGVkIGFuZCBsb2FkZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGltYWdlVXJsIHtzdHJpbmd9IFRoZSBpbWFnZSB1cmwgb2YgdGhlIHRleHR1cmVcbiAqIEBwYXJhbSBbY3Jvc3NvcmlnaW49KGF1dG8pXSB7Ym9vbGVhbn0gU2hvdWxkIHVzZSBhbm9ueW1vdXMgQ09SUz8gRGVmYXVsdHMgdG8gdHJ1ZSBpZiB0aGUgVVJMIGlzIG5vdCBhIGRhdGEtVVJJLlxuICogQHBhcmFtIFtzY2FsZU1vZGU9c2NhbGVNb2Rlcy5ERUZBVUxUXSB7bnVtYmVyfSBTZWUge0BsaW5rIFNDQUxFX01PREVTfSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIEJhc2VUZXh0dXJlXG4gKi9cbkJhc2VUZXh0dXJlLmZyb21JbWFnZSA9IGZ1bmN0aW9uIChpbWFnZVVybCwgY3Jvc3NvcmlnaW4sIHNjYWxlTW9kZSlcbntcbiAgICB2YXIgYmFzZVRleHR1cmUgPSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW2ltYWdlVXJsXTtcblxuICAgIGlmIChjcm9zc29yaWdpbiA9PT0gdW5kZWZpbmVkICYmIGltYWdlVXJsLmluZGV4T2YoJ2RhdGE6JykgIT09IDApXG4gICAge1xuICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFiYXNlVGV4dHVyZSlcbiAgICB7XG4gICAgICAgIC8vIG5ldyBJbWFnZSgpIGJyZWFrcyB0ZXggbG9hZGluZyBpbiBzb21lIHZlcnNpb25zIG9mIENocm9tZS5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yMzgwNzFcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7Ly9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKGNyb3Nzb3JpZ2luKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFzZVRleHR1cmUgPSBuZXcgQmFzZVRleHR1cmUoaW1hZ2UsIHNjYWxlTW9kZSk7XG4gICAgICAgIGJhc2VUZXh0dXJlLmltYWdlVXJsID0gaW1hZ2VVcmw7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG5cbiAgICAgICAgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtpbWFnZVVybF0gPSBiYXNlVGV4dHVyZTtcblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBAMnggYXQgdGhlIGVuZCBvZiB0aGUgdXJsIHdlIGFyZSBnb2luZyB0byBhc3N1bWUgaXRzIGEgaGlnaHJlcyBpbWFnZVxuICAgICAgICBiYXNlVGV4dHVyZS5yZXNvbHV0aW9uID0gdXRpbHMuZ2V0UmVzb2x1dGlvbk9mVXJsKGltYWdlVXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZVRleHR1cmU7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBiYXNlIHRleHR1cmUgZnJvbSB0aGUgZ2l2ZW4gY2FudmFzIGVsZW1lbnQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGNhbnZhcyB7Q2FudmFzfSBUaGUgY2FudmFzIGVsZW1lbnQgc291cmNlIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNlZSB7eyNjcm9zc0xpbmsgXCJQSVhJL3NjYWxlTW9kZXM6cHJvcGVydHlcIn19c2NhbGVNb2Rlc3t7L2Nyb3NzTGlua319IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4gQmFzZVRleHR1cmVcbiAqL1xuQmFzZVRleHR1cmUuZnJvbUNhbnZhcyA9IGZ1bmN0aW9uIChjYW52YXMsIHNjYWxlTW9kZSlcbntcbiAgICBpZiAoIWNhbnZhcy5fcGl4aUlkKVxuICAgIHtcbiAgICAgICAgY2FudmFzLl9waXhpSWQgPSAnY2FudmFzXycgKyB1dGlscy51dWlkKCk7XG4gICAgfVxuXG4gICAgdmFyIGJhc2VUZXh0dXJlID0gdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtjYW52YXMuX3BpeGlJZF07XG5cbiAgICBpZiAoIWJhc2VUZXh0dXJlKVxuICAgIHtcbiAgICAgICAgYmFzZVRleHR1cmUgPSBuZXcgQmFzZVRleHR1cmUoY2FudmFzLCBzY2FsZU1vZGUpO1xuICAgICAgICB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW2NhbnZhcy5fcGl4aUlkXSA9IGJhc2VUZXh0dXJlO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlVGV4dHVyZTtcbn07XG4iLCJ2YXIgQmFzZVRleHR1cmUgPSByZXF1aXJlKCcuL0Jhc2VUZXh0dXJlJyksXG4gICAgVGV4dHVyZSA9IHJlcXVpcmUoJy4vVGV4dHVyZScpLFxuICAgIFJlbmRlclRhcmdldCA9IHJlcXVpcmUoJy4uL3JlbmRlcmVycy93ZWJnbC91dGlscy9SZW5kZXJUYXJnZXQnKSxcbiAgICBGaWx0ZXJNYW5hZ2VyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL0ZpbHRlck1hbmFnZXInKSxcbiAgICBDYW52YXNCdWZmZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0J1ZmZlcicpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpLFxuICAgIHRlbXBNYXRyaXggPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuLyoqXG4gKiBBIFJlbmRlclRleHR1cmUgaXMgYSBzcGVjaWFsIHRleHR1cmUgdGhhdCBhbGxvd3MgYW55IFBpeGkgZGlzcGxheSBvYmplY3QgdG8gYmUgcmVuZGVyZWQgdG8gaXQuXG4gKlxuICogX19IaW50X186IEFsbCBEaXNwbGF5T2JqZWN0cyAoaS5lLiBTcHJpdGVzKSB0aGF0IHJlbmRlciB0byBhIFJlbmRlclRleHR1cmUgc2hvdWxkIGJlIHByZWxvYWRlZFxuICogb3RoZXJ3aXNlIGJsYWNrIHJlY3RhbmdsZXMgd2lsbCBiZSBkcmF3biBpbnN0ZWFkLlxuICpcbiAqIEEgUmVuZGVyVGV4dHVyZSB0YWtlcyBhIHNuYXBzaG90IG9mIGFueSBEaXNwbGF5IE9iamVjdCBnaXZlbiB0byBpdHMgcmVuZGVyIG1ldGhvZC4gVGhlIHBvc2l0aW9uXG4gKiBhbmQgcm90YXRpb24gb2YgdGhlIGdpdmVuIERpc3BsYXkgT2JqZWN0cyBpcyBpZ25vcmVkLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlbmRlclRleHR1cmUgPSBuZXcgUElYSS5SZW5kZXJUZXh0dXJlKDgwMCwgNjAwKTtcbiAqIHZhciBzcHJpdGUgPSBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoXCJzcGluT2JqXzAxLnBuZ1wiKTtcbiAqXG4gKiBzcHJpdGUucG9zaXRpb24ueCA9IDgwMC8yO1xuICogc3ByaXRlLnBvc2l0aW9uLnkgPSA2MDAvMjtcbiAqIHNwcml0ZS5hbmNob3IueCA9IDAuNTtcbiAqIHNwcml0ZS5hbmNob3IueSA9IDAuNTtcbiAqXG4gKiByZW5kZXJUZXh0dXJlLnJlbmRlcihzcHJpdGUpO1xuICogYGBgXG4gKlxuICogVGhlIFNwcml0ZSBpbiB0aGlzIGNhc2Ugd2lsbCBiZSByZW5kZXJlZCB0byBhIHBvc2l0aW9uIG9mIDAsMC4gVG8gcmVuZGVyIHRoaXMgc3ByaXRlIGF0IGl0cyBhY3R1YWxcbiAqIHBvc2l0aW9uIGEgQ29udGFpbmVyIHNob3VsZCBiZSB1c2VkOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgZG9jID0gbmV3IENvbnRhaW5lcigpO1xuICpcbiAqIGRvYy5hZGRDaGlsZChzcHJpdGUpO1xuICpcbiAqIHJlbmRlclRleHR1cmUucmVuZGVyKGRvYyk7ICAvLyBSZW5kZXJzIHRvIGNlbnRlciBvZiByZW5kZXJUZXh0dXJlXG4gKiBgYGBcbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIFRleHR1cmVcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfFdlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB1c2VkIGZvciB0aGlzIFJlbmRlclRleHR1cmVcbiAqIEBwYXJhbSBbd2lkdGg9MTAwXSB7bnVtYmVyfSBUaGUgd2lkdGggb2YgdGhlIHJlbmRlciB0ZXh0dXJlXG4gKiBAcGFyYW0gW2hlaWdodD0xMDBdIHtudW1iZXJ9IFRoZSBoZWlnaHQgb2YgdGhlIHJlbmRlciB0ZXh0dXJlXG4gKiBAcGFyYW0gW3NjYWxlTW9kZV0ge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHBhcmFtIFtyZXNvbHV0aW9uPTFdIHtudW1iZXJ9IFRoZSByZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlIGJlaW5nIGdlbmVyYXRlZFxuICovXG5mdW5jdGlvbiBSZW5kZXJUZXh0dXJlKHJlbmRlcmVyLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZU1vZGUsIHJlc29sdXRpb24pXG57XG4gICAgaWYgKCFyZW5kZXJlcilcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGNyZWF0ZSBSZW5kZXJUZXh0dXJlLCB5b3UgbXVzdCBwYXNzIGEgcmVuZGVyZXIgaW50byB0aGUgY29uc3RydWN0b3IuJyk7XG4gICAgfVxuXG4gICAgd2lkdGggPSB3aWR0aCB8fCAxMDA7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDEwMDtcbiAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbiB8fCBDT05TVC5SRVNPTFVUSU9OO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgdGV4dHVyZSBvYmplY3QgdGhhdCB0aGlzIHRleHR1cmUgdXNlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7QmFzZVRleHR1cmV9XG4gICAgICovXG4gICAgdmFyIGJhc2VUZXh0dXJlID0gbmV3IEJhc2VUZXh0dXJlKCk7XG4gICAgYmFzZVRleHR1cmUud2lkdGggPSB3aWR0aDtcbiAgICBiYXNlVGV4dHVyZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgYmFzZVRleHR1cmUucmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG4gICAgYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gc2NhbGVNb2RlIHx8IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFQ7XG4gICAgYmFzZVRleHR1cmUuaGFzTG9hZGVkID0gdHJ1ZTtcblxuXG4gICAgVGV4dHVyZS5jYWxsKHRoaXMsXG4gICAgICAgIGJhc2VUZXh0dXJlLFxuICAgICAgICBuZXcgbWF0aC5SZWN0YW5nbGUoMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICApO1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2l0aCBvZiB0aGUgcmVuZGVyIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByZW5kZXIgdGV4dHVyZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIFJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmcmFtaW5nIHJlY3RhbmdsZSBvZiB0aGUgcmVuZGVyIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICAvL3RoaXMuX2ZyYW1lID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnJlc29sdXRpb24sIHRoaXMuaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGFyZWEgb2YgdGhlIEJhc2VUZXh0dXJlIGltYWdlIHRvIGFjdHVhbGx5IGNvcHkgdG8gdGhlIENhbnZhcyAvIFdlYkdMIHdoZW4gcmVuZGVyaW5nLFxuICAgICAqIGlycmVzcGVjdGl2ZSBvZiB0aGUgYWN0dWFsIGZyYW1lIHNpemUgb3IgcGxhY2VtZW50ICh3aGljaCBjYW4gYmUgaW5mbHVlbmNlZCBieSB0cmltbWVkIHRleHR1cmUgYXRsYXNlcylcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICAvL3RoaXMuY3JvcCA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCB0aGlzLndpZHRoICogdGhpcy5yZXNvbHV0aW9uLCB0aGlzLmhlaWdodCAqIHRoaXMucmVzb2x1dGlvbik7XG5cbiAgICAvKipcbiAgICAgKiBEcmF3L3JlbmRlciB0aGUgZ2l2ZW4gRGlzcGxheU9iamVjdCBvbnRvIHRoZSB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogVGhlIGRpc3BsYXlPYmplY3QgYW5kIGRlc2NlbmRlbnRzIGFyZSB0cmFuc2Zvcm1lZCBkdXJpbmcgdGhpcyBvcGVyYXRpb24uXG4gICAgICogSWYgYHVwZGF0ZVRyYW5zZm9ybWAgaXMgdHJ1ZSB0aGVuIHRoZSB0cmFuc2Zvcm1hdGlvbnMgd2lsbCBiZSByZXN0b3JlZCBiZWZvcmUgdGhlXG4gICAgICogbWV0aG9kIHJldHVybnMuIE90aGVyd2lzZSBpdCBpcyB1cCB0byB0aGUgY2FsbGluZyBjb2RlIHRvIGNvcnJlY3RseSB1c2Ugb3IgcmVzZXRcbiAgICAgKiB0aGUgdHJhbnNmb3JtZWQgZGlzcGxheSBvYmplY3RzLlxuICAgICAqXG4gICAgICogVGhlIGRpc3BsYXkgb2JqZWN0IGlzIGFsd2F5cyByZW5kZXJlZCB3aXRoIGEgd29ybGRBbHBoYSB2YWx1ZSBvZiAxLlxuICAgICAqXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSBkaXNwbGF5T2JqZWN0IHtEaXNwbGF5T2JqZWN0fSBUaGUgZGlzcGxheSBvYmplY3QgdG8gcmVuZGVyIHRoaXMgdGV4dHVyZSBvblxuICAgICAqIEBwYXJhbSBbbWF0cml4XSB7TWF0cml4fSBPcHRpb25hbCBtYXRyaXggdG8gYXBwbHkgdG8gdGhlIGRpc3BsYXkgb2JqZWN0IGJlZm9yZSByZW5kZXJpbmcuXG4gICAgICogQHBhcmFtIFtjbGVhcj1mYWxzZV0ge2Jvb2xlYW59IElmIHRydWUgdGhlIHRleHR1cmUgd2lsbCBiZSBjbGVhcmVkIGJlZm9yZSB0aGUgZGlzcGxheU9iamVjdCBpcyBkcmF3blxuICAgICAqIEBwYXJhbSBbdXBkYXRlVHJhbnNmb3JtPXRydWVdIHtib29sZWFufSBJZiB0cnVlIHRoZSBkaXNwbGF5T2JqZWN0J3Mgd29ybGRUcmFuc2Zvcm0vd29ybGRBbHBoYSBhbmQgYWxsIGNoaWxkcmVuXG4gICAgICogIHRyYW5zZm9ybWF0aW9ucyB3aWxsIGJlIHJlc3RvcmVkLiBOb3QgcmVzdG9yaW5nIHRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZSBhIGxpdHRsZSBmYXN0ZXIuXG4gICAgICovXG4gICAgdGhpcy5yZW5kZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVyIHRoaXMgUmVuZGVyVGV4dHVyZSB1c2VzLiBBIFJlbmRlclRleHR1cmUgY2FuIG9ubHkgYmVsb25nIHRvIG9uZSByZW5kZXJlciBhdCB0aGUgbW9tZW50IGlmIGl0cyB3ZWJHTC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0NhbnZhc1JlbmRlcmVyfFdlYkdMUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIudHlwZSA9PT0gQ09OU1QuUkVOREVSRVJfVFlQRS5XRUJHTClcbiAgICB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlQnVmZmVyID0gbmV3IFJlbmRlclRhcmdldChnbCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIG51bGwsIHRoaXMucmVzb2x1dGlvbik7Ly8sIHRoaXMuYmFzZVRleHR1cmUuc2NhbGVNb2RlKTtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0gPSAgdGhpcy50ZXh0dXJlQnVmZmVyLnRleHR1cmU7XG5cbiAgICAgICAgLy9UT0RPIHJlZmFjdG9yIGZpbHRlciBtYW5hZ2VyLi4gYXMgcmVhbGx5IGl0cyBubyBsb25nZXIgYSBtYW5hZ2VyIGlmIHdlIHVzZSBpdCBoZXJlLi5cbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gbmV3IEZpbHRlck1hbmFnZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5vbkNvbnRleHRDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlcldlYkdMO1xuXG4gICAgICAgIC8vIHRoZSBjcmVhdGlvbiBvZiBhIGZpbHRlciBtYW5hZ2VyIHVuYmluZHMgdGhlIGJ1ZmZlcnMuLlxuICAgICAgICB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJlci5zdGFydCgpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXJDYW52YXM7XG4gICAgICAgIHRoaXMudGV4dHVyZUJ1ZmZlciA9IG5ldyBDYW52YXNCdWZmZXIodGhpcy53aWR0aCogdGhpcy5yZXNvbHV0aW9uLCB0aGlzLmhlaWdodCogdGhpcy5yZXNvbHV0aW9uKTtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS5zb3VyY2UgPSB0aGlzLnRleHR1cmVCdWZmZXIuY2FudmFzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy52YWxpZCA9IHRydWU7XG5cbiAgICB0aGlzLl91cGRhdGVVdnMoKTtcbn1cblxuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRleHR1cmUucHJvdG90eXBlKTtcblJlbmRlclRleHR1cmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVuZGVyVGV4dHVyZTtcbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyVGV4dHVyZTtcblxuLyoqXG4gKiBSZXNpemVzIHRoZSBSZW5kZXJUZXh0dXJlLlxuICpcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgd2lkdGggdG8gcmVzaXplIHRvLlxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgaGVpZ2h0IHRvIHJlc2l6ZSB0by5cbiAqIEBwYXJhbSB1cGRhdGVCYXNlIHtib29sZWFufSBTaG91bGQgdGhlIGJhc2VUZXh0dXJlLndpZHRoIGFuZCBoZWlnaHQgdmFsdWVzIGJlIHJlc2l6ZWQgYXMgd2VsbD9cbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHVwZGF0ZUJhc2UpXG57XG4gICAgaWYgKHdpZHRoID09PSB0aGlzLndpZHRoICYmIGhlaWdodCA9PT0gdGhpcy5oZWlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52YWxpZCA9ICh3aWR0aCA+IDAgJiYgaGVpZ2h0ID4gMCk7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5fZnJhbWUud2lkdGggPSB0aGlzLmNyb3Aud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9ICB0aGlzLl9mcmFtZS5oZWlnaHQgPSB0aGlzLmNyb3AuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgaWYgKHVwZGF0ZUJhc2UpXG4gICAge1xuICAgICAgICB0aGlzLmJhc2VUZXh0dXJlLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci50eXBlID09PSBDT05TVC5SRU5ERVJFUl9UWVBFLldFQkdMKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uLnggPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uLnkgPSAtdGhpcy5oZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGlmICghdGhpcy52YWxpZClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHR1cmVCdWZmZXIucmVzaXplKHRoaXMud2lkdGggKiB0aGlzLnJlc29sdXRpb24sIHRoaXMuaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uKTtcblxuICAgIGlmKHRoaXMuZmlsdGVyTWFuYWdlcilcbiAgICB7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5yZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBSZW5kZXJUZXh0dXJlLlxuICpcbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICghdGhpcy52YWxpZClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci50eXBlID09PSBDT05TVC5SRU5ERVJFUl9UWVBFLldFQkdMKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5yZW5kZXJlci5nbC5GUkFNRUJVRkZFUiwgdGhpcy50ZXh0dXJlQnVmZmVyLmZyYW1lQnVmZmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHR1cmVCdWZmZXIuY2xlYXIoKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgbWV0aG9kIGFzc2lnbmVkIHRvIHRoZSBgcmVuZGVyYCBwcm9wZXJ0eSBpZiB1c2luZyBhIENhbnZhc1JlbmRlcmVyLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZGlzcGxheU9iamVjdCB7RGlzcGxheU9iamVjdH0gVGhlIGRpc3BsYXkgb2JqZWN0IHRvIHJlbmRlciB0aGlzIHRleHR1cmUgb25cbiAqIEBwYXJhbSBbbWF0cml4XSB7TWF0cml4fSBPcHRpb25hbCBtYXRyaXggdG8gYXBwbHkgdG8gdGhlIGRpc3BsYXkgb2JqZWN0IGJlZm9yZSByZW5kZXJpbmcuXG4gKiBAcGFyYW0gW2NsZWFyPWZhbHNlXSB7Ym9vbGVhbn0gSWYgdHJ1ZSB0aGUgdGV4dHVyZSB3aWxsIGJlIGNsZWFyZWQgYmVmb3JlIHRoZSBkaXNwbGF5T2JqZWN0IGlzIGRyYXduXG4gKiBAcGFyYW0gW3VwZGF0ZVRyYW5zZm9ybT10cnVlXSB7Ym9vbGVhbn0gSWYgdHJ1ZSB0aGUgZGlzcGxheU9iamVjdCdzIHdvcmxkVHJhbnNmb3JtL3dvcmxkQWxwaGEgYW5kIGFsbCBjaGlsZHJlblxuICogIHRyYW5zZm9ybWF0aW9ucyB3aWxsIGJlIHJlc3RvcmVkLiBOb3QgcmVzdG9yaW5nIHRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZSBhIGxpdHRsZSBmYXN0ZXIuXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLnJlbmRlcldlYkdMID0gZnVuY3Rpb24gKGRpc3BsYXlPYmplY3QsIG1hdHJpeCwgY2xlYXIsIHVwZGF0ZVRyYW5zZm9ybSlcbntcbiAgICBpZiAoIXRoaXMudmFsaWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9UT0RPIHRoaXMgc2hvdWxkIGJlIHRydWUgYnkgZGVmYXVsdFxuICAgIHVwZGF0ZVRyYW5zZm9ybSA9ICEhdXBkYXRlVHJhbnNmb3JtO1xuXG4gICAgdGhpcy50ZXh0dXJlQnVmZmVyLnRyYW5zZm9ybSA9IG1hdHJpeDtcblxuXG4gICAgLy8gc2V0V29ybGQgQWxwaGEgdG8gZW5zdXJlIHRoYXQgdGhlIG9iamVjdCBpcyByZW5kZXJlciBhdCBmdWxsIG9wYWNpdHlcbiAgICBkaXNwbGF5T2JqZWN0LndvcmxkQWxwaGEgPSBkaXNwbGF5T2JqZWN0LmFscGhhO1xuXG4gICAgaWYgKHVwZGF0ZVRyYW5zZm9ybSlcbiAgICB7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIG1hdHJpeCBvZiB0aGUgZGlzcGxhdHlPYmplY3QuLlxuICAgICAgICBkaXNwbGF5T2JqZWN0LndvcmxkVHJhbnNmb3JtLmlkZW50aXR5KCk7XG5cbiAgICAgICAgZGlzcGxheU9iamVjdC5jdXJyZW50Qm91bmRzID0gbnVsbDtcblxuICAgICAgICAvLyBUaW1lIHRvIHVwZGF0ZSBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNwbGF5T2JqZWN0IHdpdGggdGhlIG5ldyBtYXRyaXguLlxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBkaXNwbGF5T2JqZWN0LmNoaWxkcmVuO1xuICAgICAgICB2YXIgaSwgajtcblxuICAgICAgICBmb3IgKGkgPSAwLCBqID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZHJlbltpXS51cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICBpZiAoY2xlYXIpXG4gICAge1xuICAgICAgICB0aGlzLnRleHR1cmVCdWZmZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvL1RPRE8gcmVuYW1lIHRleHR1cmVCdWZmZXIgdG8gcmVuZGVyVGFyZ2V0Li5cbiAgICB2YXIgdGVtcCA9ICB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXI7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXIgPSB0aGlzLmZpbHRlck1hbmFnZXI7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXJEaXNwbGF5T2JqZWN0KGRpc3BsYXlPYmplY3QsIHRoaXMudGV4dHVyZUJ1ZmZlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXIgPSB0ZW1wO1xuXG5cbn07XG5cblxuLyoqXG4gKiBJbnRlcm5hbCBtZXRob2QgYXNzaWduZWQgdG8gdGhlIGByZW5kZXJgIHByb3BlcnR5IGlmIHVzaW5nIGEgQ2FudmFzUmVuZGVyZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBkaXNwbGF5T2JqZWN0IHtEaXNwbGF5T2JqZWN0fSBUaGUgZGlzcGxheSBvYmplY3QgdG8gcmVuZGVyIHRoaXMgdGV4dHVyZSBvblxuICogQHBhcmFtIFttYXRyaXhdIHtNYXRyaXh9IE9wdGlvbmFsIG1hdHJpeCB0byBhcHBseSB0byB0aGUgZGlzcGxheSBvYmplY3QgYmVmb3JlIHJlbmRlcmluZy5cbiAqIEBwYXJhbSBbY2xlYXJdIHtib29sZWFufSBJZiB0cnVlIHRoZSB0ZXh0dXJlIHdpbGwgYmUgY2xlYXJlZCBiZWZvcmUgdGhlIGRpc3BsYXlPYmplY3QgaXMgZHJhd25cbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUucmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKGRpc3BsYXlPYmplY3QsIG1hdHJpeCwgY2xlYXIsIHVwZGF0ZVRyYW5zZm9ybSlcbntcbiAgICBpZiAoIXRoaXMudmFsaWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNmb3JtID0gISF1cGRhdGVUcmFuc2Zvcm07XG4gICAgdmFyIGNhY2hlZFd0ID0gZGlzcGxheU9iamVjdC53b3JsZFRyYW5zZm9ybTtcblxuICAgIHZhciB3dCA9IHRlbXBNYXRyaXg7XG5cbiAgICB3dC5pZGVudGl0eSgpO1xuXG4gICAgaWYgKG1hdHJpeClcbiAgICB7XG4gICAgICAgIHd0LmFwcGVuZChtYXRyaXgpO1xuICAgIH1cblxuICAgIGRpc3BsYXlPYmplY3Qud29ybGRUcmFuc2Zvcm0gPSB3dDtcblxuICAgIC8vIHNldFdvcmxkIEFscGhhIHRvIGVuc3VyZSB0aGF0IHRoZSBvYmplY3QgaXMgcmVuZGVyZXIgYXQgZnVsbCBvcGFjaXR5XG4gICAgZGlzcGxheU9iamVjdC53b3JsZEFscGhhID0gMTtcblxuICAgIC8vIFRpbWUgdG8gdXBkYXRlIGFsbCB0aGUgY2hpbGRyZW4gb2YgdGhlIGRpc3BsYXlPYmplY3Qgd2l0aCB0aGUgbmV3IG1hdHJpeC4uXG4gICAgdmFyIGNoaWxkcmVuID0gZGlzcGxheU9iamVjdC5jaGlsZHJlbjtcbiAgICB2YXIgaSwgajtcblxuICAgIGZvciAoaSA9IDAsIGogPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAge1xuICAgICAgICBjaGlsZHJlbltpXS51cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICB9XG5cbiAgICBpZiAoY2xlYXIpXG4gICAge1xuICAgICAgICB0aGlzLnRleHR1cmVCdWZmZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5T2JqZWN0LndvcmxkVHJhbnNmb3JtID0gY2FjaGVkV3Q7XG5cbi8vICAgIHRoaXMudGV4dHVyZUJ1ZmZlci5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMudGV4dHVyZUJ1ZmZlci5jb250ZXh0O1xuXG4gICAgdmFyIHJlYWxSZXNvbHV0aW9uID0gdGhpcy5yZW5kZXJlci5yZXNvbHV0aW9uO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZXNvbHV0aW9uID0gdGhpcy5yZXNvbHV0aW9uO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXJEaXNwbGF5T2JqZWN0KGRpc3BsYXlPYmplY3QsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZXNvbHV0aW9uID0gcmVhbFJlc29sdXRpb247XG4gLy8gICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgIC8vIGNvbnRleHQuZmlsbFN0eWxlID1cIiNGRjAwMDBcIlxuLy8gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG5cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyB0ZXh0dXJlXG4gKlxuICogQHBhcmFtIGRlc3Ryb3lCYXNlIHtib29sZWFufSBXaGV0aGVyIHRvIGRlc3Ryb3kgdGhlIGJhc2UgdGV4dHVyZSBhcyB3ZWxsXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIFRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzLCB0cnVlKTtcblxuICAgIHRoaXMudGV4dHVyZUJ1ZmZlci5kZXN0cm95KCk7XG5cbiAgICAvLyBkZXN0cm95IHRoZSBmaWx0ZXJtYW5hZ2VyLi5cbiAgICBpZih0aGlzLmZpbHRlck1hbmFnZXIpXG4gICAge1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xufTtcblxuLyoqXG4gKiBXaWxsIHJldHVybiBhIEhUTUwgSW1hZ2Ugb2YgdGhlIHRleHR1cmVcbiAqXG4gKiBAcmV0dXJuIHtJbWFnZX1cbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHRoaXMuZ2V0QmFzZTY0KCk7XG4gICAgcmV0dXJuIGltYWdlO1xufTtcblxuLyoqXG4gKiBXaWxsIHJldHVybiBhIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9mIHRoaXMgdGV4dHVyZS4gSXQgd29ya3MgYnkgY2FsbGluZyBSZW5kZXJUZXh0dXJlLmdldENhbnZhcyBhbmQgdGhlbiBydW5uaW5nIHRvRGF0YVVSTCBvbiB0aGF0LlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb2YgdGhlIHRleHR1cmUuXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLmdldEJhc2U2NCA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FudmFzKCkudG9EYXRhVVJMKCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBDYW52YXMgZWxlbWVudCwgcmVuZGVycyB0aGlzIFJlbmRlclRleHR1cmUgdG8gaXQgYW5kIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudH0gQSBDYW52YXMgZWxlbWVudCB3aXRoIHRoZSB0ZXh0dXJlIHJlbmRlcmVkIG9uLlxuICovXG5SZW5kZXJUZXh0dXJlLnByb3RvdHlwZS5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICh0aGlzLnJlbmRlcmVyLnR5cGUgPT09IENPTlNULlJFTkRFUkVSX1RZUEUuV0VCR0wpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSAgdGhpcy5yZW5kZXJlci5nbDtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy50ZXh0dXJlQnVmZmVyLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy50ZXh0dXJlQnVmZmVyLmhlaWdodDtcblxuICAgICAgICB2YXIgd2ViR0xQaXhlbHMgPSBuZXcgVWludDhBcnJheSg0ICogd2lkdGggKiBoZWlnaHQpO1xuXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy50ZXh0dXJlQnVmZmVyLmZyYW1lQnVmZmVyKTtcbiAgICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB3aWR0aCwgaGVpZ2h0LCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCB3ZWJHTFBpeGVscyk7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG5cbiAgICAgICAgdmFyIHRlbXBDYW52YXMgPSBuZXcgQ2FudmFzQnVmZmVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB2YXIgY2FudmFzRGF0YSA9IHRlbXBDYW52YXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNhbnZhc0RhdGEuZGF0YS5zZXQod2ViR0xQaXhlbHMpO1xuXG4gICAgICAgIHRlbXBDYW52YXMuY29udGV4dC5wdXRJbWFnZURhdGEoY2FudmFzRGF0YSwgMCwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXBDYW52YXMuY2FudmFzO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlQnVmZmVyLmNhbnZhcztcbiAgICB9XG59O1xuIiwidmFyIEJhc2VUZXh0dXJlID0gcmVxdWlyZSgnLi9CYXNlVGV4dHVyZScpLFxuICAgIFZpZGVvQmFzZVRleHR1cmUgPSByZXF1aXJlKCcuL1ZpZGVvQmFzZVRleHR1cmUnKSxcbiAgICBUZXh0dXJlVXZzID0gcmVxdWlyZSgnLi9UZXh0dXJlVXZzJyksXG4gICAgZXZlbnRUYXJnZXQgPSByZXF1aXJlKCcuLi91dGlscy9ldmVudFRhcmdldCcpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIEEgdGV4dHVyZSBzdG9yZXMgdGhlIGluZm9ybWF0aW9uIHRoYXQgcmVwcmVzZW50cyBhbiBpbWFnZSBvciBwYXJ0IG9mIGFuIGltYWdlLiBJdCBjYW5ub3QgYmUgYWRkZWRcbiAqIHRvIHRoZSBkaXNwbGF5IGxpc3QgZGlyZWN0bHkuIEluc3RlYWQgdXNlIGl0IGFzIHRoZSB0ZXh0dXJlIGZvciBhIFNwcml0ZS4gSWYgbm8gZnJhbWUgaXMgcHJvdmlkZWQgdGhlbiB0aGUgd2hvbGUgaW1hZ2UgaXMgdXNlZC5cbiAqXG4gKiBZb3UgY2FuIGRpcmVjdGx5IGNyZWF0ZSBhIHRleHR1cmUgZnJvbSBhbiBpbWFnZSBhbmQgdGhlbiByZXVzZSBpdCBtdWx0aXBsZSB0aW1lcyBsaWtlIHRoaXMgOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9pbWFnZS5wbmcnKTtcbiAqIHZhciBzcHJpdGUxID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpO1xuICogdmFyIHNwcml0ZTIgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3NcbiAqIEBtaXhlcyBldmVudFRhcmdldFxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBiYXNlVGV4dHVyZSB7QmFzZVRleHR1cmV9IFRoZSBiYXNlIHRleHR1cmUgc291cmNlIHRvIGNyZWF0ZSB0aGUgdGV4dHVyZSBmcm9tXG4gKiBAcGFyYW0gW2ZyYW1lXSB7UmVjdGFuZ2xlfSBUaGUgcmVjdGFuZ2xlIGZyYW1lIG9mIHRoZSB0ZXh0dXJlIHRvIHNob3dcbiAqIEBwYXJhbSBbY3JvcF0ge1JlY3RhbmdsZX0gVGhlIGFyZWEgb2Ygb3JpZ2luYWwgdGV4dHVyZVxuICogQHBhcmFtIFt0cmltXSB7UmVjdGFuZ2xlfSBUcmltbWVkIHRleHR1cmUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gW3JvdGF0ZV0ge2Jvb2xlYW59IGluZGljYXRlcyB3aGV0aGVyIHRoZSB0ZXh0dXJlIHNob3VsZCBiZSByb3RhdGVkIGJ5IDkwIGRlZ3JlZXMgKCB1c2VkIGJ5IHRleHR1cmUgcGFja2VyIClcbiAqL1xuZnVuY3Rpb24gVGV4dHVyZShiYXNlVGV4dHVyZSwgZnJhbWUsIGNyb3AsIHRyaW0sIHJvdGF0ZSlcbntcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgVGV4dHVyZSBoYXZlIGFueSBmcmFtZSBkYXRhIGFzc2lnbmVkIHRvIGl0P1xuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLm5vRnJhbWUgPSBmYWxzZTtcblxuICAgIGlmICghZnJhbWUpXG4gICAge1xuICAgICAgICB0aGlzLm5vRnJhbWUgPSB0cnVlO1xuICAgICAgICBmcmFtZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCAxLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoYmFzZVRleHR1cmUgaW5zdGFuY2VvZiBUZXh0dXJlKVxuICAgIHtcbiAgICAgICAgYmFzZVRleHR1cmUgPSBiYXNlVGV4dHVyZS5iYXNlVGV4dHVyZTtcbiAgICB9XG5cbiAgLy8gIGNvbnNvbGUubG9nKGZyYW1lKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlIHRleHR1cmUgdGhhdCB0aGlzIHRleHR1cmUgdXNlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Jhc2VUZXh0dXJlfVxuICAgICAqL1xuICAgIHRoaXMuYmFzZVRleHR1cmUgPSBiYXNlVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmcmFtZSBzcGVjaWZpZXMgdGhlIHJlZ2lvbiBvZiB0aGUgYmFzZSB0ZXh0dXJlIHRoYXQgdGhpcyB0ZXh0dXJlIHVzZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dHVyZSB0cmltIGRhdGEuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgdGhpcy50cmltID0gdHJpbTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBsZXQgdGhlIHJlbmRlcmVyIGtub3cgaWYgdGhlIHRleHR1cmUgaXMgdmFsaWQuIElmIGl0J3Mgbm90IHRoZW4gaXQgY2Fubm90IGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgbGV0IGEgcmVuZGVyZXIga25vdyB0aGF0IGEgdGV4dHVyZSBoYXMgYmVlbiB1cGRhdGVkICh1c2VkIG1haW5seSBmb3Igd2ViR0wgdXYgdXBkYXRlcylcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZXF1aXJlc1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFdlYkdMIFVWIGRhdGEgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtUZXh0dXJlVXZzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdXZzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dHVyZSBpbiBwaXhlbHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBUZXh0dXJlIGluIHBpeGVscy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBhcmVhIG9mIHRoZSBCYXNlVGV4dHVyZSBpbWFnZSB0byBhY3R1YWxseSBjb3B5IHRvIHRoZSBDYW52YXMgLyBXZWJHTCB3aGVuIHJlbmRlcmluZyxcbiAgICAgKiBpcnJlc3BlY3RpdmUgb2YgdGhlIGFjdHVhbCBmcmFtZSBzaXplIG9yIHBsYWNlbWVudCAod2hpY2ggY2FuIGJlIGluZmx1ZW5jZWQgYnkgdHJpbW1lZCB0ZXh0dXJlIGF0bGFzZXMpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgdGhpcy5jcm9wID0gY3JvcCB8fCBmcmFtZTsvL25ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCAxLCAxKTtcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB0ZXh0dXJlIHNob3VsZCBiZSByb3RhdGVkIGJ5IDkwIGRlZ3JlZXNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJvdGF0ZSA9ICEhcm90YXRlO1xuXG4gICAgaWYgKGJhc2VUZXh0dXJlLmhhc0xvYWRlZClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm5vRnJhbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZyYW1lID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIGJhc2VUZXh0dXJlLndpZHRoLCBiYXNlVGV4dHVyZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgYmFzZVRleHR1cmUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkJywgdGhpcy5vbkJhc2VUZXh0dXJlTG9hZGVkLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuVGV4dHVyZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUZXh0dXJlO1xubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlO1xuXG5ldmVudFRhcmdldC5taXhpbihUZXh0dXJlLnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRleHR1cmUucHJvdG90eXBlLCB7XG4gICAgZnJhbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJhbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGZyYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgICAgICAgICB0aGlzLm5vRnJhbWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGZyYW1lLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XG5cblxuXG4gICAgICAgICAgICBpZiAoIXRoaXMudHJpbSAmJiAhdGhpcy5yb3RhdGUgJiYgKGZyYW1lLnggKyBmcmFtZS53aWR0aCA+IHRoaXMuYmFzZVRleHR1cmUud2lkdGggfHwgZnJhbWUueSArIGZyYW1lLmhlaWdodCA+IHRoaXMuYmFzZVRleHR1cmUuaGVpZ2h0KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHR1cmUgRXJyb3I6IGZyYW1lIGRvZXMgbm90IGZpdCBpbnNpZGUgdGhlIGJhc2UgVGV4dHVyZSBkaW1lbnNpb25zICcgKyB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy90aGlzLnZhbGlkID0gZnJhbWUgJiYgZnJhbWUud2lkdGggJiYgZnJhbWUuaGVpZ2h0ICYmIHRoaXMuYmFzZVRleHR1cmUuc291cmNlICYmIHRoaXMuYmFzZVRleHR1cmUuaGFzTG9hZGVkO1xuICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZyYW1lICYmIGZyYW1lLndpZHRoICYmIGZyYW1lLmhlaWdodCAmJiB0aGlzLmJhc2VUZXh0dXJlLmhhc0xvYWRlZDtcblxuICAgICAgICAgICAgaWYgKHRoaXMudHJpbSlcbiAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnRyaW0ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnRyaW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLndpZHRoID0gdGhpcy50cmltLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLmhlaWdodCA9IHRoaXMudHJpbS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wID0gZnJhbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBpZiAodGhpcy52YWxpZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVVdnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhpcyB0ZXh0dXJlIG9uIHRoZSBncHUuXG4gKlxuICovXG5UZXh0dXJlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuYmFzZVRleHR1cmUudXBkYXRlKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZSBiYXNlIHRleHR1cmUgaXMgbG9hZGVkXG4gKlxuICogQHByaXZhdGVcbiAqL1xuVGV4dHVyZS5wcm90b3R5cGUub25CYXNlVGV4dHVyZUxvYWRlZCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGJhc2VUZXh0dXJlID0gdGhpcy5iYXNlVGV4dHVyZTtcbiAgICBiYXNlVGV4dHVyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWQnLCB0aGlzLm9uTG9hZGVkKTtcblxuICAgIC8vIFRPRE8gdGhpcyBjb2RlIGxvb2tzIGNvbmZ1c2luZy4uIGJvbyB0byBhYnVzaW5nIGdldHRlcnMgYW5kIHNldHRlcnNzIVxuICAgIGlmICh0aGlzLm5vRnJhbWUpXG4gICAge1xuICAgICAgICB0aGlzLmZyYW1lID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIGJhc2VUZXh0dXJlLndpZHRoLCBiYXNlVGV4dHVyZS5oZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5fZnJhbWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCAndXBkYXRlJywgdGhpcyApO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGlzIHRleHR1cmVcbiAqXG4gKiBAcGFyYW0gZGVzdHJveUJhc2Uge2Jvb2xlYW59IFdoZXRoZXIgdG8gZGVzdHJveSB0aGUgYmFzZSB0ZXh0dXJlIGFzIHdlbGxcbiAqL1xuVGV4dHVyZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChkZXN0cm95QmFzZSlcbntcbiAgICBpZiAoZGVzdHJveUJhc2UpXG4gICAge1xuICAgICAgICB0aGlzLmJhc2VUZXh0dXJlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbGlkID0gZmFsc2U7XG59O1xuXG5UZXh0dXJlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuYmFzZVRleHR1cmUsIHRoaXMuZnJhbWUsIHRoaXMuY3JvcCwgdGhpcy50cmltLCB0aGlzLnJvdGF0ZSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGludGVybmFsIFdlYkdMIFVWIGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cblRleHR1cmUucHJvdG90eXBlLl91cGRhdGVVdnMgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICghdGhpcy5fdXZzKVxuICAgIHtcbiAgICAgICAgdGhpcy5fdXZzID0gbmV3IFRleHR1cmVVdnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLl91dnMuc2V0KHRoaXMuY3JvcCwgdGhpcy5iYXNlVGV4dHVyZSwgdGhpcy5yb3RhdGUpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgVGV4dHVyZSBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gaW1hZ2UgdXJsLlxuICogSWYgdGhlIGltYWdlIGlzIG5vdCBpbiB0aGUgdGV4dHVyZSBjYWNoZSBpdCB3aWxsIGJlICBjcmVhdGVkIGFuZCBsb2FkZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGltYWdlVXJsIHtzdHJpbmd9IFRoZSBpbWFnZSB1cmwgb2YgdGhlIHRleHR1cmVcbiAqIEBwYXJhbSBjcm9zc29yaWdpbiB7Ym9vbGVhbn0gV2hldGhlciByZXF1ZXN0cyBzaG91bGQgYmUgdHJlYXRlZCBhcyBjcm9zc29yaWdpblxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge3sjY3Jvc3NMaW5rIFwiUElYSS9zY2FsZU1vZGVzOnByb3BlcnR5XCJ9fXNjYWxlTW9kZXN7ey9jcm9zc0xpbmt9fSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtUZXh0dXJlfSBUaGUgbmV3bHkgY3JlYXRlZCB0ZXh0dXJlXG4gKi9cblRleHR1cmUuZnJvbUltYWdlID0gZnVuY3Rpb24gKGltYWdlVXJsLCBjcm9zc29yaWdpbiwgc2NhbGVNb2RlKVxue1xuICAgIHZhciB0ZXh0dXJlID0gdXRpbHMuVGV4dHVyZUNhY2hlW2ltYWdlVXJsXTtcblxuICAgIGlmICghdGV4dHVyZSlcbiAgICB7XG4gICAgICAgIHRleHR1cmUgPSBuZXcgVGV4dHVyZShCYXNlVGV4dHVyZS5mcm9tSW1hZ2UoaW1hZ2VVcmwsIGNyb3Nzb3JpZ2luLCBzY2FsZU1vZGUpKTtcbiAgICAgICAgdXRpbHMuVGV4dHVyZUNhY2hlW2ltYWdlVXJsXSA9IHRleHR1cmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmU7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBzcHJpdGUgdGhhdCB3aWxsIGNvbnRhaW4gYSB0ZXh0dXJlIGZyb20gdGhlIFRleHR1cmVDYWNoZSBiYXNlZCBvbiB0aGUgZnJhbWVJZFxuICogVGhlIGZyYW1lIGlkcyBhcmUgY3JlYXRlZCB3aGVuIGEgVGV4dHVyZSBwYWNrZXIgZmlsZSBoYXMgYmVlbiBsb2FkZWRcbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gZnJhbWVJZCB7U3RyaW5nfSBUaGUgZnJhbWUgSWQgb2YgdGhlIHRleHR1cmUgaW4gdGhlIGNhY2hlXG4gKiBAcmV0dXJuIHtUZXh0dXJlfSBUaGUgbmV3bHkgY3JlYXRlZCB0ZXh0dXJlXG4gKi9cblRleHR1cmUuZnJvbUZyYW1lID0gZnVuY3Rpb24gKGZyYW1lSWQpXG57XG4gICAgdmFyIHRleHR1cmUgPSB1dGlscy5UZXh0dXJlQ2FjaGVbZnJhbWVJZF07XG5cbiAgICBpZiAoIXRleHR1cmUpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmcmFtZUlkIFwiJyArIGZyYW1lSWQgKyAnXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHRleHR1cmUgY2FjaGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBUZXh0dXJlIGJhc2VkIG9uIHRoZSBnaXZlbiBjYW52YXMgZWxlbWVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCBzb3VyY2Ugb2YgdGhlIHRleHR1cmVcbiAqIEBwYXJhbSBzY2FsZU1vZGUge251bWJlcn0gU2VlIHt7I2Nyb3NzTGluayBcIlBJWEkvc2NhbGVNb2Rlczpwcm9wZXJ0eVwifX1zY2FsZU1vZGVze3svY3Jvc3NMaW5rfX0gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiB7VGV4dHVyZX1cbiAqL1xuVGV4dHVyZS5mcm9tQ2FudmFzID0gZnVuY3Rpb24gKGNhbnZhcywgc2NhbGVNb2RlKVxue1xuICAgIHJldHVybiBuZXcgVGV4dHVyZShCYXNlVGV4dHVyZS5mcm9tQ2FudmFzKGNhbnZhcywgc2NhbGVNb2RlKSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgVGV4dHVyZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gdmlkZW8gZWxlbWVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gdmlkZW8ge0hUTUxWaWRlb0VsZW1lbnR9XG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNlZSB7eyNjcm9zc0xpbmsgXCJQSVhJL3NjYWxlTW9kZXM6cHJvcGVydHlcIn19c2NhbGVNb2Rlc3t7L2Nyb3NzTGlua319IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4ge1RleHR1cmV9IEEgVGV4dHVyZVxuICovXG5UZXh0dXJlLmZyb21WaWRlbyA9IGZ1bmN0aW9uICh2aWRlbywgc2NhbGVNb2RlKVxue1xuICAgIHJldHVybiBuZXcgVGV4dHVyZShWaWRlb0Jhc2VUZXh0dXJlLmJhc2VUZXh0dXJlRnJvbVZpZGVvKHZpZGVvLCBzY2FsZU1vZGUpKTtcbn07XG5cblRleHR1cmUuZnJvbVZpZGVvVXJsID0gZnVuY3Rpb24gKHZpZGVvVXJsLCBzY2FsZU1vZGUpXG57XG4gICAgcmV0dXJuIG5ldyBUZXh0dXJlKFZpZGVvQmFzZVRleHR1cmUuZnJvbVVybCh2aWRlb1VybCwgc2NhbGVNb2RlKSk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSB0ZXh0dXJlIHRvIHRoZSBnbG9iYWwgdXRpbHMuVGV4dHVyZUNhY2hlLiBUaGlzIGNhY2hlIGlzIHNoYXJlZCBhY3Jvc3MgdGhlIHdob2xlIFBJWEkgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB0ZXh0dXJlIHtUZXh0dXJlfSBUaGUgVGV4dHVyZSB0byBhZGQgdG8gdGhlIGNhY2hlLlxuICogQHBhcmFtIGlkIHtzdHJpbmd9IFRoZSBpZCB0aGF0IHRoZSB0ZXh0dXJlIHdpbGwgYmUgc3RvcmVkIGFnYWluc3QuXG4gKi9cblRleHR1cmUuYWRkVGV4dHVyZVRvQ2FjaGUgPSBmdW5jdGlvbiAodGV4dHVyZSwgaWQpXG57XG4gICAgdXRpbHMuVGV4dHVyZUNhY2hlW2lkXSA9IHRleHR1cmU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIHRleHR1cmUgZnJvbSB0aGUgZ2xvYmFsIHV0aWxzLlRleHR1cmVDYWNoZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gaWQge3N0cmluZ30gVGhlIGlkIG9mIHRoZSB0ZXh0dXJlIHRvIGJlIHJlbW92ZWRcbiAqIEByZXR1cm4ge1RleHR1cmV9IFRoZSB0ZXh0dXJlIHRoYXQgd2FzIHJlbW92ZWRcbiAqL1xuVGV4dHVyZS5yZW1vdmVUZXh0dXJlRnJvbUNhY2hlID0gZnVuY3Rpb24gKGlkKVxue1xuICAgIHZhciB0ZXh0dXJlID0gdXRpbHMuVGV4dHVyZUNhY2hlW2lkXTtcblxuICAgIGRlbGV0ZSB1dGlscy5UZXh0dXJlQ2FjaGVbaWRdO1xuICAgIGRlbGV0ZSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW2lkXTtcblxuICAgIHJldHVybiB0ZXh0dXJlO1xufTtcblxuVGV4dHVyZS5lbXB0eVRleHR1cmUgPSBuZXcgVGV4dHVyZShuZXcgQmFzZVRleHR1cmUoKSk7XG4iLCJcbi8qKlxuICogQSBzdGFuZGFyZCBvYmplY3QgdG8gc3RvcmUgdGhlIFV2cyBvZiBhIHRleHR1cmVcbiAqXG4gKiBAY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIFRleHR1cmVVdnMoKVxue1xuICAgIHRoaXMueDAgPSAwO1xuICAgIHRoaXMueTAgPSAwO1xuXG4gICAgdGhpcy54MSA9IDA7XG4gICAgdGhpcy55MSA9IDA7XG5cbiAgICB0aGlzLngyID0gMDtcbiAgICB0aGlzLnkyID0gMDtcblxuICAgIHRoaXMueDMgPSAwO1xuICAgIHRoaXMueTMgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVVdnM7XG5cbi8qKlxuICogU2V0cyB0aGUgdGV4dHVyZSBVdnMgYmFzZWQgb24gdGhlIGdpdmVuIGZyYW1lIGluZm9ybWF0aW9uXG4gKiBAcGFyYW0gZnJhbWUge1JlY3RhbmdsZX1cbiAqIEBwYXJhbSBiYXNlRnJhbWUge1JlY3RhbmdsZX1cbiAqIEBwYXJhbSByb3RhdGUge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSBmcmFtZSBpcyByb3RhdGVkXG4gKiBAcHJpdmF0ZVxuICovXG5UZXh0dXJlVXZzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZnJhbWUsIGJhc2VGcmFtZSwgcm90YXRlKVxue1xuICAgIHZhciB0dyA9IGJhc2VGcmFtZS53aWR0aDtcbiAgICB2YXIgdGggPSBiYXNlRnJhbWUuaGVpZ2h0O1xuXG4gICAgaWYocm90YXRlKVxuICAgIHtcbiAgICAgICAgdGhpcy54MCA9IChmcmFtZS54ICsgZnJhbWUuaGVpZ2h0KSAvIHR3O1xuICAgICAgICB0aGlzLnkwID0gZnJhbWUueSAvIHRoO1xuXG4gICAgICAgIHRoaXMueDEgPSAoZnJhbWUueCArIGZyYW1lLmhlaWdodCkgLyB0dztcbiAgICAgICAgdGhpcy55MSA9IChmcmFtZS55ICsgZnJhbWUud2lkdGgpIC8gdGg7XG5cbiAgICAgICAgdGhpcy54MiA9IGZyYW1lLnggLyB0dztcbiAgICAgICAgdGhpcy55MiA9IChmcmFtZS55ICsgZnJhbWUud2lkdGgpIC8gdGg7XG5cbiAgICAgICAgdGhpcy54MyA9IGZyYW1lLnggLyB0dztcbiAgICAgICAgdGhpcy55MyA9IGZyYW1lLnkgLyB0aDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcblxuICAgICAgICB0aGlzLngwID0gZnJhbWUueCAvIHR3O1xuICAgICAgICB0aGlzLnkwID0gZnJhbWUueSAvIHRoO1xuXG4gICAgICAgIHRoaXMueDEgPSAoZnJhbWUueCArIGZyYW1lLndpZHRoKSAvIHR3O1xuICAgICAgICB0aGlzLnkxID0gZnJhbWUueSAvIHRoO1xuXG4gICAgICAgIHRoaXMueDIgPSAoZnJhbWUueCArIGZyYW1lLndpZHRoKSAvIHR3O1xuICAgICAgICB0aGlzLnkyID0gKGZyYW1lLnkgKyBmcmFtZS5oZWlnaHQpIC8gdGg7XG5cbiAgICAgICAgdGhpcy54MyA9IGZyYW1lLnggLyB0dztcbiAgICAgICAgdGhpcy55MyA9IChmcmFtZS55ICsgZnJhbWUuaGVpZ2h0KSAvIHRoO1xuICAgIH1cbn07XG4iLCJ2YXIgQmFzZVRleHR1cmUgPSByZXF1aXJlKCcuL0Jhc2VUZXh0dXJlJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIEEgdGV4dHVyZSBvZiBhIFtwbGF5aW5nXSBWaWRlby5cbiAqXG4gKiBWaWRlbyBiYXNlIHRleHR1cmVzIG1pbWljIFBpeGkgQmFzZVRleHR1cmUuZnJvbS4uLi4gbWV0aG9kIGluIHRoZWlyIGNyZWF0aW9uIHByb2Nlc3MuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCBpbiBzZXZlcmFsIHdheXMsIHN1Y2ggYXM6XG4gKlxuICogYGBganNcbiAqIHZhciB0ZXh0dXJlID0gUElYSS5WaWRlb0Jhc2VUZXh0dXJlLmZyb21VcmwoJ2h0dHA6Ly9teWRvbWFpbi5jb20vdmlkZW8ubXA0Jyk7XG4gKlxuICogdmFyIHRleHR1cmUgPSBQSVhJLlZpZGVvQmFzZVRleHR1cmUuZnJvbVVybCh7IHNyYzogJ2h0dHA6Ly9teWRvbWFpbi5jb20vdmlkZW8ubXA0JywgbWltZTogJ3ZpZGVvL21wNCcgfSk7XG4gKlxuICogdmFyIHRleHR1cmUgPSBQSVhJLlZpZGVvQmFzZVRleHR1cmUuZnJvbVVybHMoWycvdmlkZW8ud2VibScsICcvdmlkZW8ubXA0J10pO1xuICpcbiAqIHZhciB0ZXh0dXJlID0gUElYSS5WaWRlb0Jhc2VUZXh0dXJlLmZyb21VcmxzKFtcbiAqICAgICB7IHNyYzogJy92aWRlby53ZWJtJywgbWltZTogJ3ZpZGVvL3dlYm0nIH0sXG4gKiAgICAgeyBzcmM6ICcvdmlkZW8ubXA0JywgbWltZTogJ3ZpZGVvL21wNCcgfVxuICogXSk7XG4gKiBgYGBcbiAqXG4gKiBTZWUgdGhlIFtcImRldXNcIiBkZW1vXShodHRwOi8vd3d3Lmdvb2Rib3lkaWdpdGFsLmNvbS9waXhpanMvZXhhbXBsZXMvZGV1cy8pLlxuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgQmFzZVRleHR1cmVcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gc291cmNlIHtIVE1MVmlkZW9FbGVtZW50fVxuICogQHBhcmFtIFtzY2FsZU1vZGVdIHtudW1iZXJ9IFNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gVmlkZW9CYXNlVGV4dHVyZShzb3VyY2UsIHNjYWxlTW9kZSlcbntcbiAgICBpZiAoIXNvdXJjZSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdmlkZW8gc291cmNlIGVsZW1lbnQgc3BlY2lmaWVkLicpO1xuICAgIH1cblxuICAgIC8vIGhvb2sgaW4gaGVyZSB0byBjaGVjayBpZiB2aWRlbyBpcyBhbHJlYWR5IGF2YWlsYWJsZS5cbiAgICAvLyBCYXNlVGV4dHVyZSBsb29rcyBmb3IgYSBzb3VyY2UuY29tcGxldGUgYm9vbGVhbiwgcGx1cyB3aWR0aCAmIGhlaWdodC5cblxuICAgIGlmICgoc291cmNlLnJlYWR5U3RhdGUgPT09IHNvdXJjZS5IQVZFX0VOT1VHSF9EQVRBIHx8IHNvdXJjZS5yZWFkeVN0YXRlID09PSBzb3VyY2UuSEFWRV9GVVRVUkVfREFUQSkgJiYgc291cmNlLndpZHRoICYmIHNvdXJjZS5oZWlnaHQpXG4gICAge1xuICAgICAgICBzb3VyY2UuY29tcGxldGUgPSB0cnVlO1xuICAgIH1cblxuICAgIEJhc2VUZXh0dXJlLmNhbGwodGhpcywgc291cmNlLCBzY2FsZU1vZGUpO1xuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRoZSBiYXNlIHRleHR1cmUgYXV0b21hdGljYWxseSB1cGRhdGUgaXRzZWxmLCBzZXQgdG8gdHJ1ZSBieSBkZWZhdWx0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICB0aGlzLmF1dG9VcGRhdGUgPSBmYWxzZTtcblxuICAgIHRoaXMuX29uVXBkYXRlID0gdGhpcy5fb25VcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNhblBsYXkgPSB0aGlzLl9vbkNhblBsYXkuYmluZCh0aGlzKTtcblxuICAgIGlmICghc291cmNlLmNvbXBsZXRlKVxuICAgIHtcbiAgICAgICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLl9vbkNhblBsYXkpO1xuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCB0aGlzLl9vbkNhblBsYXkpO1xuXG4gICAgICAgIC8vIHN0YXJ0ZWQgcGxheWluZy4uXG4gICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgdGhpcy5fb25QbGF5U3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMuX29uUGxheVN0b3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2xvYWRlZCA9IGZhbHNlO1xufVxuXG5WaWRlb0Jhc2VUZXh0dXJlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZVRleHR1cmUucHJvdG90eXBlKTtcblZpZGVvQmFzZVRleHR1cmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVmlkZW9CYXNlVGV4dHVyZTtcbm1vZHVsZS5leHBvcnRzID0gVmlkZW9CYXNlVGV4dHVyZTtcblxuLyoqXG4gKiBUaGUgaW50ZXJuYWwgdXBkYXRlIGxvb3Agb2YgdGhlIHZpZGVvIGJhc2UgdGV4dHVyZSwgb25seSBydW5zIHdoZW4gYXV0b1VwZGF0ZSBpcyBzZXQgdG8gdHJ1ZVxuICogQHByaXZhdGVcbiAqL1xuVmlkZW9CYXNlVGV4dHVyZS5wcm90b3R5cGUuX29uVXBkYXRlID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAodGhpcy5hdXRvVXBkYXRlKVxuICAgIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9vblVwZGF0ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSdW5zIHRoZSB1cGRhdGUgbG9vcCB3aGVuIHRoZSB2aWRlbyBpcyByZWFkeSB0byBwbGF5XG4gKiBAcHJpdmF0ZVxuICovXG5WaWRlb0Jhc2VUZXh0dXJlLnByb3RvdHlwZS5fb25QbGF5U3RhcnQgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICghdGhpcy5hdXRvVXBkYXRlKVxuICAgIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9vblVwZGF0ZSk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IHRydWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBGaXJlZCB3aGVuIGEgcGF1c2UgZXZlbnQgaXMgdHJpZ2dlcmVkLCBzdG9wcyB0aGUgdXBkYXRlIGxvb3BcbiAqIEBwcml2YXRlXG4gKi9cblZpZGVvQmFzZVRleHR1cmUucHJvdG90eXBlLl9vblBsYXlTdG9wID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmF1dG9VcGRhdGUgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUgdmlkZW8gaXMgbG9hZGVkIGFuZCByZWFkeSB0byBwbGF5XG4gKiBAcHJpdmF0ZVxuICovXG5WaWRlb0Jhc2VUZXh0dXJlLnByb3RvdHlwZS5fb25DYW5QbGF5ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmhhc0xvYWRlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zb3VyY2UpXG4gICAge1xuICAgICAgICB0aGlzLnNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgdGhpcy5fb25DYW5QbGF5KTtcbiAgICAgICAgdGhpcy5zb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCB0aGlzLl9vbkNhblBsYXkpO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNvdXJjZS52aWRlb1dpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc291cmNlLnZpZGVvSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc291cmNlLnBsYXkoKTtcblxuICAgICAgICAvLyBwcmV2ZW50IG11bHRpcGxlIGxvYWRlZCBkaXNwYXRjaGVzLi5cbiAgICAgICAgaWYgKCF0aGlzLl9fbG9hZGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9fbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoaXMgdGV4dHVyZVxuICpcbiAqL1xuVmlkZW9CYXNlVGV4dHVyZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLl9waXhpSWQpXG4gICAge1xuICAgICAgICB1dGlscy5CYXNlVGV4dHVyZUNhY2hlWyB0aGlzLnNvdXJjZS5fcGl4aUlkIF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVsgdGhpcy5zb3VyY2UuX3BpeGlJZCBdO1xuXG4gICAgICAgIHRoaXMuc291cmNlLl9waXhpSWQgPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5zb3VyY2UuX3BpeGlJZDtcbiAgICB9XG5cbiAgICBCYXNlVGV4dHVyZS5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBNaW1pYyBQaXhpIEJhc2VUZXh0dXJlLmZyb20uLi4uIG1ldGhvZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gdmlkZW8ge0hUTUxWaWRlb0VsZW1lbnR9XG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4ge1ZpZGVvQmFzZVRleHR1cmV9XG4gKi9cblZpZGVvQmFzZVRleHR1cmUuZnJvbVZpZGVvID0gZnVuY3Rpb24gKHZpZGVvLCBzY2FsZU1vZGUpXG57XG4gICAgaWYgKCF2aWRlby5fcGl4aUlkKVxuICAgIHtcbiAgICAgICAgdmlkZW8uX3BpeGlJZCA9ICd2aWRlb18nICsgdXRpbHMudXVpZCgpO1xuICAgIH1cblxuICAgIHZhciBiYXNlVGV4dHVyZSA9IHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbdmlkZW8uX3BpeGlJZF07XG5cbiAgICBpZiAoIWJhc2VUZXh0dXJlKVxuICAgIHtcbiAgICAgICAgYmFzZVRleHR1cmUgPSBuZXcgVmlkZW9CYXNlVGV4dHVyZSh2aWRlbywgc2NhbGVNb2RlKTtcbiAgICAgICAgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVsgdmlkZW8uX3BpeGlJZCBdID0gYmFzZVRleHR1cmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VUZXh0dXJlO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IEJhc2VUZXh0dXJlIGJhc2VkIG9uIHRoZSBnaXZlbiB2aWRlbyBlbGVtZW50LlxuICogVGhpcyBCYXNlVGV4dHVyZSBjYW4gdGhlbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIHRleHR1cmVcbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gdmlkZW9TcmMge3N0cmluZ3xvYmplY3R8c3RyaW5nW118b2JqZWN0W119IFRoZSBVUkwocykgZm9yIHRoZSB2aWRlby5cbiAqIEBwYXJhbSBbdmlkZW9TcmMuc3JjXSB7c3RyaW5nfSBPbmUgb2YgdGhlIHNvdXJjZSB1cmxzIGZvciB0aGUgdmlkZW9cbiAqIEBwYXJhbSBbdmlkZW9TcmMubWltZV0ge3N0cmluZ30gVGhlIG1pbWV0eXBlIG9mIHRoZSB2aWRlbyAoZS5nLiAndmlkZW8vbXA0JykuIElmIG5vdCBzcGVjaWZpZWRcbiAqICB0aGUgdXJsJ3MgZXh0ZW5zaW9uIHdpbGwgYmUgdXNlZCBhcyB0aGUgc2Vjb25kIHBhcnQgb2YgdGhlIG1pbWUgdHlwZS5cbiAqIEBwYXJhbSBzY2FsZU1vZGUge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiB7VmlkZW9CYXNlVGV4dHVyZX1cbiAqL1xuVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJsID0gZnVuY3Rpb24gKHZpZGVvU3JjLCBzY2FsZU1vZGUpXG57XG4gICAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblxuICAgIC8vIGFycmF5IG9mIG9iamVjdHMgb3Igc3RyaW5nc1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZpZGVvU3JjKSlcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlkZW9TcmMubGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpZGVvLmFwcGVuZENoaWxkKGNyZWF0ZVNvdXJjZSh2aWRlb1NyYy5zcmMgfHwgdmlkZW9TcmMsIHZpZGVvU3JjLm1pbWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzaW5nbGUgb2JqZWN0IG9yIHN0cmluZ1xuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHZpZGVvLmFwcGVuZENoaWxkKGNyZWF0ZVNvdXJjZSh2aWRlb1NyYy5zcmMgfHwgdmlkZW9TcmMsIHZpZGVvU3JjLm1pbWUpKTtcbiAgICB9XG5cbiAgICB2aWRlby5sb2FkKCk7XG4gICAgdmlkZW8ucGxheSgpO1xuXG4gICAgcmV0dXJuIFZpZGVvQmFzZVRleHR1cmUuZnJvbVZpZGVvKHZpZGVvLCBzY2FsZU1vZGUpO1xufTtcblxuVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJscyA9IFZpZGVvQmFzZVRleHR1cmUuZnJvbVVybDtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlKHBhdGgsIHR5cGUpXG57XG4gICAgaWYgKCF0eXBlKVxuICAgIHtcbiAgICAgICAgdHlwZSA9ICd2aWRlby8nICsgcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZignLicpICsgMSk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuXG4gICAgc291cmNlLnNyYyA9IHBhdGg7XG4gICAgc291cmNlLnR5cGUgPSB0eXBlO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbn1cbiIsIi8qKlxuICogQ3JlYXRlcyBhbiBob21vZ2Vub3VzIG9iamVjdCBmb3IgdHJhY2tpbmcgZXZlbnRzIHNvIHVzZXJzIGNhbiBrbm93IHdoYXQgdG8gZXhwZWN0LlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWEkudXRpbHNcbiAqIEBwYXJhbSB0YXJnZXQge29iamVjdH0gVGhlIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgZXZlbnQgaXMgY2FsbGVkIG9uXG4gKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgc3RyaW5nIG5hbWUgb2YgdGhlIGV2ZW50IHRoYXQgd2FzIHRyaWdnZXJlZFxuICogQHBhcmFtIGRhdGEge29iamVjdH0gQXJiaXRyYXJ5IGV2ZW50IGRhdGEgdG8gcGFzcyBhbG9uZ1xuICovXG5mdW5jdGlvbiBFdmVudERhdGEodGFyZ2V0LCBuYW1lLCBkYXRhKVxue1xuICAgIC8vIGZvciBkdWNrIHR5cGluZyBpbiB0aGUgXCIub24oKVwiIGZ1bmN0aW9uXG4gICAgdGhpcy5fX2lzRXZlbnRPYmplY3QgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBzdGF0ZSBvZiBidWJibGluZyBwcm9wYWdhdGlvbi4gRG8gbm90XG4gICAgICogc2V0IHRoaXMgZGlyZWN0bHksIGluc3RlYWQgdXNlIGBldmVudC5zdG9wUHJvcGFnYXRpb24oKWBcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRyYWNrcyB0aGUgc3RhdGUgb2Ygc2libGluZyBsaXN0ZW5lciBwcm9wYWdhdGlvbi4gRG8gbm90XG4gICAgICogc2V0IHRoaXMgZGlyZWN0bHksIGluc3RlYWQgdXNlIGBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKWBcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmlnaW5hbCB0YXJnZXQgdGhlIGV2ZW50IHRyaWdnZXJlZCBvbi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge29iamVjdH1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgZXZlbnQgdGhhdCB0aGlzIHJlcHJlc2VudHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gbmFtZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHRoYXQgd2FzIHBhc3NlZCBpbiB3aXRoIHRoaXMgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lc3RhbXAgd2hlbiB0aGUgZXZlbnQgb2NjdXJyZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xufVxuXG5FdmVudERhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnREYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBFdmVudERhdGE7XG5cbi8qKlxuICogU3RvcHMgdGhlIHByb3BhZ2F0aW9uIG9mIGV2ZW50cyB1cCB0aGUgc2NlbmUgZ3JhcGggKHByZXZlbnRzIGJ1YmJsaW5nKS5cbiAqXG4gKi9cbkV2ZW50RGF0YS5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKClcbntcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBTdG9wcyB0aGUgcHJvcGFnYXRpb24gb2YgZXZlbnRzIHRvIHNpYmxpbmcgbGlzdGVuZXJzIChubyBsb25nZXIgY2FsbHMgYW55IGxpc3RlbmVycykuXG4gKlxuICovXG5FdmVudERhdGEucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG57XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZTtcbn07XG4iLCIvL1RPRE86IEhhdmUgR3JhcGhpY3MgdXNlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9zaGFwZTJkXG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL3NoYXBlMmQtdHJpYW5ndWxhdGUgaW5zdGVhZCBvZiBjdXN0b20gY29kZS5cblxuLypcbiAgICBQb2x5SyBsaWJyYXJ5XG4gICAgdXJsOiBodHRwOi8vcG9seWsuaXZhbmsubmV0XG4gICAgUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2VuY2UuXG5cbiAgICBDb3B5cmlnaHQgKGMpIDIwMTIgSXZhbiBLdWNraXJcblxuICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgICBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAgICByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAgICBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gICAgY29uZGl0aW9uczpcblxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gICAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICAgIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gICAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAgICBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAgICBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gICAgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4gICAgVGhpcyBpcyBhbiBhbWF6aW5nIGxpYiFcblxuICAgIFNsaWdodGx5IG1vZGlmaWVkIGJ5IE1hdCBHcm92ZXMgKG1hdGdyb3Zlcy5jb20pO1xuKi9cblxuLyoqXG4gKiBCYXNlZCBvbiB0aGUgUG9seWsgbGlicmFyeSBodHRwOi8vcG9seWsuaXZhbmsubmV0IHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbmNlLlxuICogVGhpcyBpcyBhbiBhbWF6aW5nIGxpYiFcbiAqIFNsaWdodGx5IG1vZGlmaWVkIGJ5IE1hdCBHcm92ZXMgKG1hdGdyb3Zlcy5jb20pO1xuICpcbiAqIEBtZW1iZXJvZiBQSVhJLnV0aWxzXG4gKi9cbnZhciBQb2x5SyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8qKlxuICogVHJpYW5ndWxhdGVzIHNoYXBlcyBmb3Igd2ViR0wgZ3JhcGhpYyBmaWxscy5cbiAqXG4gKi9cblBvbHlLLlRyaWFuZ3VsYXRlID0gZnVuY3Rpb24gKHApXG57XG4gICAgdmFyIHNpZ24gPSB0cnVlO1xuXG4gICAgdmFyIG4gPSBwLmxlbmd0aCA+PiAxO1xuICAgIGlmIChuIDwgMykgcmV0dXJuIFtdO1xuXG4gICAgdmFyIHRncyA9IFtdO1xuICAgIHZhciBhdmwgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYXZsLnB1c2goaSk7XG5cbiAgICBpID0gMDtcbiAgICB2YXIgYWwgPSBuO1xuICAgIHdoaWxlIChhbCA+IDMpXG4gICAge1xuICAgICAgICB2YXIgaTAgPSBhdmxbKGkrMCklYWxdO1xuICAgICAgICB2YXIgaTEgPSBhdmxbKGkrMSklYWxdO1xuICAgICAgICB2YXIgaTIgPSBhdmxbKGkrMiklYWxdO1xuXG4gICAgICAgIHZhciBheCA9IHBbMippMF0sICBheSA9IHBbMippMCsxXTtcbiAgICAgICAgdmFyIGJ4ID0gcFsyKmkxXSwgIGJ5ID0gcFsyKmkxKzFdO1xuICAgICAgICB2YXIgY3ggPSBwWzIqaTJdLCAgY3kgPSBwWzIqaTIrMV07XG5cbiAgICAgICAgdmFyIGVhckZvdW5kID0gZmFsc2U7XG4gICAgICAgIGlmIChQb2x5Sy5fY29udmV4KGF4LCBheSwgYngsIGJ5LCBjeCwgY3ksIHNpZ24pKVxuICAgICAgICB7XG4gICAgICAgICAgICBlYXJGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFsOyBqKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHZpID0gYXZsW2pdO1xuICAgICAgICAgICAgICAgIGlmICh2aSA9PT0gaTAgfHwgdmkgPT09IGkxIHx8IHZpID09PSBpMikgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoUG9seUsuX1BvaW50SW5UcmlhbmdsZShwWzIqdmldLCBwWzIqdmkrMV0sIGF4LCBheSwgYngsIGJ5LCBjeCwgY3kpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWFyRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVhckZvdW5kKVxuICAgICAgICB7XG4gICAgICAgICAgICB0Z3MucHVzaChpMCwgaTEsIGkyKTtcbiAgICAgICAgICAgIGF2bC5zcGxpY2UoKGkrMSklYWwsIDEpO1xuICAgICAgICAgICAgYWwtLTtcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGkrKyA+IDMqYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gZmxpcCBmbGlwIHJldmVyc2UgaXQhXG4gICAgICAgICAgICAvLyByZXNldCFcbiAgICAgICAgICAgIGlmIChzaWduKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRncyA9IFtdO1xuICAgICAgICAgICAgICAgIGF2bCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIGF2bC5wdXNoKGkpO1xuXG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgYWwgPSBuO1xuXG4gICAgICAgICAgICAgICAgc2lnbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIC8vICAgd2luZG93LmNvbnNvbGUubG9nKFwiUElYSSBXYXJuaW5nOiBzaGFwZSB0b28gY29tcGxleCB0byBmaWxsXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGdzLnB1c2goYXZsWzBdLCBhdmxbMV0sIGF2bFsyXSk7XG4gICAgcmV0dXJuIHRncztcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBwb2ludCBpcyB3aXRoaW4gYSB0cmlhbmdsZVxuICpcbiAqIEBwYXJhbSBweCB7bnVtYmVyfSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEBwYXJhbSBweSB7bnVtYmVyfSB5IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEBwYXJhbSBheCB7bnVtYmVyfSB4IGNvb3JkaW5hdGUgb2YgdGhlIGEgcG9pbnQgb2YgdGhlIHRyaWFuZ2xlXG4gKiBAcGFyYW0gYXkge251bWJlcn0geSBjb29yZGluYXRlIG9mIHRoZSBhIHBvaW50IG9mIHRoZSB0cmlhbmdsZVxuICogQHBhcmFtIGJ4IHtudW1iZXJ9IHggY29vcmRpbmF0ZSBvZiB0aGUgYiBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAqIEBwYXJhbSBieSB7bnVtYmVyfSB5IGNvb3JkaW5hdGUgb2YgdGhlIGIgcG9pbnQgb2YgdGhlIHRyaWFuZ2xlXG4gKiBAcGFyYW0gY3gge251bWJlcn0geCBjb29yZGluYXRlIG9mIHRoZSBjIHBvaW50IG9mIHRoZSB0cmlhbmdsZVxuICogQHBhcmFtIGN5IHtudW1iZXJ9IHkgY29vcmRpbmF0ZSBvZiB0aGUgYyBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5Qb2x5Sy5fUG9pbnRJblRyaWFuZ2xlID0gZnVuY3Rpb24gKHB4LCBweSwgYXgsIGF5LCBieCwgYnksIGN4LCBjeSlcbntcbiAgICB2YXIgdjB4ID0gY3gtYXg7XG4gICAgdmFyIHYweSA9IGN5LWF5O1xuICAgIHZhciB2MXggPSBieC1heDtcbiAgICB2YXIgdjF5ID0gYnktYXk7XG4gICAgdmFyIHYyeCA9IHB4LWF4O1xuICAgIHZhciB2MnkgPSBweS1heTtcblxuICAgIHZhciBkb3QwMCA9IHYweCp2MHgrdjB5KnYweTtcbiAgICB2YXIgZG90MDEgPSB2MHgqdjF4K3YweSp2MXk7XG4gICAgdmFyIGRvdDAyID0gdjB4KnYyeCt2MHkqdjJ5O1xuICAgIHZhciBkb3QxMSA9IHYxeCp2MXgrdjF5KnYxeTtcbiAgICB2YXIgZG90MTIgPSB2MXgqdjJ4K3YxeSp2Mnk7XG5cbiAgICB2YXIgaW52RGVub20gPSAxIC8gKGRvdDAwICogZG90MTEgLSBkb3QwMSAqIGRvdDAxKTtcbiAgICB2YXIgdSA9IChkb3QxMSAqIGRvdDAyIC0gZG90MDEgKiBkb3QxMikgKiBpbnZEZW5vbTtcbiAgICB2YXIgdiA9IChkb3QwMCAqIGRvdDEyIC0gZG90MDEgKiBkb3QwMikgKiBpbnZEZW5vbTtcblxuICAgIC8vIENoZWNrIGlmIHBvaW50IGlzIGluIHRyaWFuZ2xlXG4gICAgcmV0dXJuICh1ID49IDApICYmICh2ID49IDApICYmICh1ICsgdiA8IDEpO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIHNoYXBlIGlzIGNvbnZleFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5Qb2x5Sy5fY29udmV4ID0gZnVuY3Rpb24gKGF4LCBheSwgYngsIGJ5LCBjeCwgY3ksIHNpZ24pXG57XG4gICAgcmV0dXJuICgoYXktYnkpKihjeC1ieCkgKyAoYngtYXgpKihjeS1ieSkgPj0gMCkgPT09IHNpZ247XG59O1xuIiwidmFyIEV2ZW50RGF0YSA9IHJlcXVpcmUoJy4vRXZlbnREYXRhJyk7XG5cbnZhciB0ZW1wRXZlbnRPYmplY3QgPSBuZXcgRXZlbnREYXRhKG51bGwsIG51bGwsIHt9KTtcblxuLyoqXG4gKiBNaXhpbnMgZXZlbnQgZW1pdHRlciBmdW5jdGlvbmFsaXR5IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAbWl4aW5cbiAqIEBtZW1iZXJvZiBQSVhJLnV0aWxzXG4gKiBAZXhhbXBsZVxuICogICAgICBmdW5jdGlvbiBNeUVtaXR0ZXIoKSB7fVxuICpcbiAqICAgICAgZXZlbnRUYXJnZXQubWl4aW4oTXlFbWl0dGVyLnByb3RvdHlwZSk7XG4gKlxuICogICAgICB2YXIgZW0gPSBuZXcgTXlFbWl0dGVyKCk7XG4gKiAgICAgIGVtLmVtaXQoJ2V2ZW50TmFtZScsICdzb21lIGRhdGEnLCAnc29tZSBtb3JlIGRhdGEnLCB7fSwgbnVsbCwgLi4uKTtcbiAqL1xuZnVuY3Rpb24gZXZlbnRUYXJnZXQob2JqKVxue1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhIGxpc3Qgb2YgYXNzaWduZWQgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGV2ZW50VGFyZ2V0XG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBUaGUgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGxpc3RlZC5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgbGlzdGVuZXIgZnVuY3Rpb25zXG4gICAgICovXG4gICAgb2JqLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudE5hbWUpXG4gICAge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge307XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdID8gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0uc2xpY2UoKSA6IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbWl0IGFuIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBldmVudFRhcmdldFxuICAgICAqIEBhbGlhcyBkaXNwYXRjaEV2ZW50XG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gSW5kaWNhdGlvbiBpZiB3ZSd2ZSBlbWl0dGVkIGFuIGV2ZW50LlxuICAgICAqL1xuICAgIG9iai5lbWl0ID0gb2JqLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSlcbiAgICB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcblxuICAgICAgICAvLyBmYXN0IHJldHVybiB3aGVuIHRoZXJlIGFyZSBubyBsaXN0ZW5lcnNcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9iYWNrd2FyZHMgY29tcGF0IHdpdGggb2xkIG1ldGhvZCBcIi5lbWl0KHsgdHlwZTogJ3NvbWV0aGluZycgfSlcIlxuICAgICAgICAvL2xldHMgbm90IHdvcnJ5IGFib3V0IG9sZCB3YXlzIG9mIHVzaW5nIHN0dWZmIGZvciB2M1xuICAgICAgICAvKlxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEgPSBldmVudE5hbWU7XG4gICAgICAgICAgICBldmVudE5hbWUgPSBldmVudE5hbWUudHlwZTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICAgIC8vZW5zdXJlIHdlIGFyZSB1c2luZyBhIHJlYWwgcGl4aSBldmVudFxuICAgICAgICAvL2luc3RlYWQgb2YgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IGxldHMgdXNlIGFuIHRoZSB0ZW1wIG9uZSAoIHNhdmUgbmV3IGNyZWF0aW9uIGZvciBlYWNoIGV2ZW50IClcbiAgICAgICAgaWYgKCAhZGF0YSB8fCAhZGF0YS5fX2lzRXZlbnRPYmplY3QgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0ZW1wRXZlbnRPYmplY3QudGFyZ2V0PSAgdGhpcztcbiAgICAgICAgICAgIHRlbXBFdmVudE9iamVjdC50eXBlID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgdGVtcEV2ZW50T2JqZWN0LmRhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgICBkYXRhID0gdGVtcEV2ZW50T2JqZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pdGVyYXRlIHRoZSBsaXN0ZW5lcnNcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdLnNsaWNlKDApLFxuICAgICAgICAgICAgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGZuID0gbGlzdGVuZXJzWzBdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBmbiA9IGxpc3RlbmVyc1srK2ldKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NhbGwgdGhlIGV2ZW50IGxpc3RlbmVyIHNjb3BlIGlzIGN1cnJlbnRseSBkZXRlcm1pbmVkIGJ5IGJpbmRpbmcgdGhlIGxpc3RlbmVyXG4gICAgICAgICAgICAvL3dheSBmYXN0ZXIgdGhhbiAnY2FsbCdcbiAgICAgICAgICAgIGZuKGRhdGEpO1xuXG4gICAgICAgICAgICAvL2lmIFwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXCIgaXMgY2FsbGVkLCBzdG9wIGNhbGxpbmcgc2libGluZyBldmVudHNcbiAgICAgICAgICAgIGlmIChkYXRhLnN0b3BwZWRJbW1lZGlhdGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIFwic3RvcFByb3BhZ2F0aW9uXCIgaXMgY2FsbGVkIHRoZW4gZG9uJ3QgYnViYmxlIHRoZSBldmVudFxuICAgICAgICBpZiAoZGF0YS5zdG9wcGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIG5ldyBFdmVudExpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZXZlbnRUYXJnZXRcbiAgICAgKiBAYWxpYXMgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gTmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdG9ufSBmbiBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBvYmoub24gPSBvYmouYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgZm4pXG4gICAge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge307XG5cbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW10pXG4gICAgICAgICAgICAucHVzaChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhbiBFdmVudExpc3RlbmVyIHRoYXQncyBvbmx5IGNhbGxlZCBvbmNlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGV2ZW50VGFyZ2V0XG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBOYW1lIG9mIHRoZSBldmVudC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufSBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBvYmoub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnROYW1lLCBmbilcbiAgICB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyV3JhcHBlcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KHNlbGYub2ZmKGV2ZW50TmFtZSwgb25jZUhhbmRsZXJXcmFwcGVyKSwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBvbmNlSGFuZGxlcldyYXBwZXIuX29yaWdpbmFsSGFuZGxlciA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgb25jZUhhbmRsZXJXcmFwcGVyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBldmVudFRhcmdldFxuICAgICAqIEBhbGlhcyByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBUaGUgZXZlbnQgd2Ugd2FudCB0byByZW1vdmUuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gVGhlIGxpc3RlbmVyIHRoYXQgd2UgbmVlZCB0byBmaW5kLlxuICAgICAqL1xuICAgIG9iai5vZmYgPSBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIG9mZihldmVudE5hbWUsIGZuKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSxcbiAgICAgICAgICAgIGkgPSBmbiA/IGxpc3QubGVuZ3RoIDogMDtcblxuICAgICAgICB3aGlsZSAoaS0tID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGZuIHx8IGxpc3RbaV0uX29yaWdpbmFsSGFuZGxlciA9PT0gZm4pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgICAgICAgIC8vIGxldHMgc2V0IGl0IHRvIG51bGxcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBvciBvbmx5IHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZXZlbnRUYXJnZXRcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBldmVudCB5b3Ugd2FudCB0byByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IuXG4gICAgICovXG4gICAgb2JqLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudE5hbWUpXG4gICAge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge307XG5cbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWxldGUgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAgIC8vIGxldHMgc2V0IGl0IHRvIG51bGxcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBudWxsO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIE1peGVzIGluIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBldmVudFRhcmdldCBpbnRvIGFub3RoZXIgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHtvYmplY3R9IFRoZSBvYmogdG8gbWl4IGludG9cbiAgICAgKi9cbiAgICBtaXhpbjogZnVuY3Rpb24gbWl4aW4ob2JqKVxuICAgIHtcbiAgICAgICAgZXZlbnRUYXJnZXQob2JqKTtcbiAgICB9XG59O1xuIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIFBJWEkudXRpbHNcbiAqL1xudmFyIHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgX3VpZDogMCxcbiAgICBfc2FpZEhlbGxvOiBmYWxzZSxcblxuICAgIFJBRnJhbWVQb2x5ZmlsbDpyZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsJyksXG4gICAgRXZlbnREYXRhOiAgICAgIHJlcXVpcmUoJy4vRXZlbnREYXRhJyksXG4gICAgZXZlbnRUYXJnZXQ6ICAgIHJlcXVpcmUoJy4vZXZlbnRUYXJnZXQnKSxcbiAgICBwbHVnaW5UYXJnZXQ6ICAgcmVxdWlyZSgnLi9wbHVnaW5UYXJnZXQnKSxcbiAgICBQb2x5SzogICAgICAgICAgcmVxdWlyZSgnLi9Qb2x5SycpLFxuXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBuZXh0IHV1aWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG5leHQgdXVpZCB0byB1c2UuXG4gICAgICovXG4gICAgdXVpZDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiArK3V0aWxzLl91aWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgaGV4IGNvbG9yIG51bWJlciB0byBhbiBbUiwgRywgQl0gYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBoZXgge251bWJlcn1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJbXX0gQW4gYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBbUiwgRywgQl0gb2YgdGhlIGNvbG9yLlxuICAgICAqL1xuICAgIGhleDJyZ2I6IGZ1bmN0aW9uIChoZXgsIG91dClcbiAgICB7XG4gICAgICAgIG91dCA9IG91dCB8fCBbXTtcblxuICAgICAgICBvdXRbMF0gPSAoaGV4ID4+IDE2ICYgMHhGRikgLyAyNTU7XG4gICAgICAgIG91dFsxXSA9IChoZXggPj4gOCAmIDB4RkYpIC8gMjU1O1xuICAgICAgICBvdXRbMl0gPSAoaGV4ICYgMHhGRikgLyAyNTU7XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBoZXggY29sb3IgbnVtYmVyIHRvIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGhleCB7bnVtYmVyfVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZyBjb2xvci5cbiAgICAgKi9cbiAgICBoZXgyc3RyaW5nOiBmdW5jdGlvbiAoaGV4KVxuICAgIHtcbiAgICAgICAgaGV4ID0gaGV4LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaGV4ID0gJzAwMDAwMCcuc3Vic3RyKDAsIDYgLSBoZXgubGVuZ3RoKSArIGhleDtcblxuICAgICAgICByZXR1cm4gJyMnICsgaGV4O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIGNvbG9yIGFzIGFuIFtSLCBHLCBCXSBhcnJheSB0byBhIGhleCBudW1iZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZ2Ige251bWJlcltdfVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNvbG9yIG51bWJlclxuICAgICAqL1xuICAgIHJnYjJoZXg6IGZ1bmN0aW9uIChyZ2IpXG4gICAge1xuICAgICAgICByZXR1cm4gKChyZ2JbMF0qMjU1IDw8IDE2KSArIChyZ2JbMV0qMjU1IDw8IDgpICsgcmdiWzJdKjI1NSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBDYW52YXMgQmxlbmRNb2RlcyBhcmUgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IGJyb3dzZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhleSBhcmUgc3VwcG9ydGVkXG4gICAgICovXG4gICAgY2FuVXNlTmV3Q2FudmFzQmxlbmRNb2RlczogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG5nSGVhZCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJBUU1BQUFERDhwMk9BQUFBQTFCTVZFWC8nO1xuICAgICAgICB2YXIgcG5nRW5kID0gJ0FBQUFDa2xFUVZRSTEyTmdBQUFBQWdBQjRpRzhNd0FBQUFCSlJVNUVya0pnZ2c9PSc7XG5cbiAgICAgICAgdmFyIG1hZ2VudGEgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWFnZW50YS5zcmMgPSBwbmdIZWFkICsgJ0FQODA0T2E2JyArIHBuZ0VuZDtcblxuICAgICAgICB2YXIgeWVsbG93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHllbGxvdy5zcmMgPSBwbmdIZWFkICsgJy93Q0t4dlJGJyArIHBuZ0VuZDtcblxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDY7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UobWFnZW50YSwgMCwgMCk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHllbGxvdywgMiwgMCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgyLDAsMSwxKS5kYXRhO1xuXG4gICAgICAgIHJldHVybiAoZGF0YVswXSA9PT0gMjU1ICYmIGRhdGFbMV0gPT09IDAgJiYgZGF0YVsyXSA9PT0gMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgbnVtYmVyLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGNsb3Nlc3QgbnVtYmVyIHRoYXQgaXMgYSBwb3dlciBvZiB0d29cbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHRha2VuIGZyb20gU3RhcmxpbmcgRnJhbWV3b3JrIGFzIGl0cyBwcmV0dHkgbmVhdCA7KVxuICAgICAqXG4gICAgICogQHBhcmFtIG51bWJlciB7bnVtYmVyfVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGNsb3Nlc3QgbnVtYmVyIHRoYXQgaXMgYSBwb3dlciBvZiB0d29cbiAgICAgKi9cbiAgICBnZXROZXh0UG93ZXJPZlR3bzogZnVuY3Rpb24gKG51bWJlcilcbiAgICB7XG4gICAgICAgIC8vIHNlZTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb3dlcl9vZl90d28jRmFzdF9hbGdvcml0aG1fdG9fY2hlY2tfaWZfYV9wb3NpdGl2ZV9udW1iZXJfaXNfYV9wb3dlcl9vZl90d29cbiAgICAgICAgaWYgKG51bWJlciA+IDAgJiYgKG51bWJlciAmIChudW1iZXIgLSAxKSkgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gMTtcblxuICAgICAgICAgICAgd2hpbGUgKHJlc3VsdCA8IG51bWJlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPDw9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY2hlY2tzIGlmIHRoZSBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0IG1ha2UgYSBwb3dlciBvZiB0d28gcmVjdGFuZ2xlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2lkdGgge251bWJlcn1cbiAgICAgKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1Bvd2VyT2ZUd286IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh3aWR0aCA+IDAgJiYgKHdpZHRoICYgKHdpZHRoIC0gMSkpID09PSAwICYmIGhlaWdodCA+IDAgJiYgKGhlaWdodCAmIChoZWlnaHQgLSAxKSkgPT09IDApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIHJlc29sdXRpb24gb2YgYW4gYXNzZXQgYnkgbG9va2luZyBmb3IgdGhlIHByZWZpeFxuICAgICAqIHVzZWQgYnkgc3ByaXRlc2hlZXRzIGFuZCBpbWFnZSB1cmxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IHRoZSBpbWFnZSBwYXRoXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXRSZXNvbHV0aW9uT2ZVcmw6IGZ1bmN0aW9uICh1cmwpXG4gICAge1xuICAgICAgICB2YXIgcmVzb2x1dGlvbiA9IENPTlNULlJFVElOQV9QUkVGSVguZXhlYyh1cmwpO1xuXG4gICAgICAgIGlmIChyZXNvbHV0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHJlc29sdXRpb25bMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvZ3Mgb3V0IHRoZSB2ZXJzaW9uIGFuZCByZW5kZXJlciBpbmZvcm1hdGlvbiBmb3IgdGhpcyBydW5uaW5nIGluc3RhbmNlIG9mIFBJWEkuXG4gICAgICogSWYgeW91IGRvbid0IHdhbnQgdG8gc2VlIHRoaXMgbWVzc2FnZSB5b3UgY2FuIHNldCBgUElYSS51dGlscy5fc2FpZEhlbGxvID0gdHJ1ZTtgXG4gICAgICogc28gdGhlIGxpYnJhcnkgdGhpbmtzIGl0IGFscmVhZHkgc2FpZCBpdC4gS2VlcCBpbiBtaW5kIHRoYXQgZG9pbmcgdGhhdCB3aWxsIGZvcmV2ZXJcbiAgICAgKiBtYWtlcyB5b3UgYSBqZXJrIGZhY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBzdHJpbmcgcmVuZGVyZXIgdHlwZSB0byBsb2cuXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHNheUhlbGxvOiBmdW5jdGlvbiAodHlwZSlcbiAgICB7XG4gICAgICAgIGlmICh1dGlscy5fc2FpZEhlbGxvKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW1xuICAgICAgICAgICAgICAgICclYyAlYyAlYyBQaXhpLmpzICcgKyBDT05TVC5WRVJTSU9OICsgJyAtICcgKyB0eXBlICsgJyAgJWMgJyArICcgJWMgJyArICcgaHR0cDovL3d3dy5waXhpanMuY29tLyAgJWMgJWMg4pmlJWPimaUlY+KZpSAnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAjZmY2NmE1JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI2ZmNjZhNScsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiAjZmY2NmE1OyBiYWNrZ3JvdW5kOiAjMDMwMzA3OycsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6ICNmZjY2YTUnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAjZmZjM2RjJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI2ZmNjZhNScsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiAjZmYyNDI0OyBiYWNrZ3JvdW5kOiAjZmZmJyxcbiAgICAgICAgICAgICAgICAnY29sb3I6ICNmZjI0MjQ7IGJhY2tncm91bmQ6ICNmZmYnLFxuICAgICAgICAgICAgICAgICdjb2xvcjogI2ZmMjQyNDsgYmFja2dyb3VuZDogI2ZmZidcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTsgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuY29uc29sZSlcbiAgICAgICAge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdQaXhpLmpzICcgKyBDT05TVC5WRVJTSU9OICsgJyAtICcgKyB0eXBlICsgJyAtIGh0dHA6Ly93d3cucGl4aWpzLmNvbS8nKTsgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLl9zYWlkSGVsbG8gPSB0cnVlO1xuICAgIH0sXG5cbiAgICBUZXh0dXJlQ2FjaGU6IHt9LFxuICAgIEJhc2VUZXh0dXJlQ2FjaGU6IHt9XG59O1xuIiwiLyoqXG4gKiBNaXhpbnMgZnVuY3Rpb25hbGl0eSB0byBtYWtlIGFuIG9iamVjdCBoYXZlIFwicGx1Z2luc1wiLlxuICpcbiAqIEBtaXhpblxuICogQG1lbWJlcm9mIFBJWEkudXRpbHNcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0byBtaXggaW50by5cbiAqIEBleGFtcGxlXG4gKiAgICAgIGZ1bmN0aW9uIE15T2JqZWN0KCkge31cbiAqXG4gKiAgICAgIHBsdWdpblRhcmdldC5taXhpbihNeU9iamVjdCk7XG4gKi9cbmZ1bmN0aW9uIHBsdWdpblRhcmdldChvYmopXG57XG4gICAgb2JqLl9fcGx1Z2lucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHBsdWdpbiB0byBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwbHVnaW5OYW1lIHtzdHJpbmd9IFRoZSBldmVudHMgdGhhdCBzaG91bGQgYmUgbGlzdGVkLlxuICAgICAqIEBwYXJhbSBjdG9yIHtPYmplY3R9ID8/IEBhbHZpblxuICAgICAqL1xuICAgIG9iai5yZWdpc3RlclBsdWdpbiA9IGZ1bmN0aW9uIChwbHVnaW5OYW1lLCBjdG9yKVxuICAgIHtcbiAgICAgICAgb2JqLl9fcGx1Z2luc1twbHVnaW5OYW1lXSA9IGN0b3I7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlcyBhbGwgdGhlIHBsdWdpbnMgb2YgdGhpcyBvYmplY3RcbiAgICAgKlxuICAgICAqL1xuICAgIG9iai5wcm90b3R5cGUuaW5pdFBsdWdpbnMgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gdGhpcy5wbHVnaW5zIHx8IHt9O1xuXG4gICAgICAgIGZvciAodmFyIG8gaW4gb2JqLl9fcGx1Z2lucylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5zW29dID0gbmV3IChvYmouX19wbHVnaW5zW29dKSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0aGUgcGx1Z2lucyBvZiB0aGlzIG9iamVjdFxuICAgICAqXG4gICAgICovXG4gICAgb2JqLnByb3RvdHlwZS5kZXN0cm95UGx1Z2lucyA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBvIGluIHRoaXMucGx1Z2lucylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5zW29dLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luc1tvXSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsdWdpbnMgPSBudWxsO1xuICAgIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLyoqXG4gICAgICogTWl4ZXMgaW4gdGhlIHByb3BlcnRpZXMgb2YgdGhlIHBsdWdpblRhcmdldCBpbnRvIGFub3RoZXIgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHtvYmplY3R9IFRoZSBvYmogdG8gbWl4IGludG9cbiAgICAgKi9cbiAgICBtaXhpbjogZnVuY3Rpb24gbWl4aW4ob2JqKVxuICAgIHtcbiAgICAgICAgcGx1Z2luVGFyZ2V0KG9iaik7XG4gICAgfVxufTtcbiIsIihmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIH1cblxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSxcbiAgICAgICAgICAgICAgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB9KSh3aW5kb3cpO1xuIixudWxsLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcInBlcmVucXVlbmpzXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vcGVyZW5xdWVuanMuY29tXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIVE1MNSBHYW1lIEZyYW1ld29yayBmb3IgbW9iaWxlLCB3ZWIgYW5kIGRlc2t0b3AgZGV2ZWxvcG1lbnQuXCIsXG4gIFwiYXV0aG9yXCI6IFwiTmF6YXJpIEdvbnphbGV6IDxuYXphcmkubnpAZ21haWwuY29tPiAoaHR0cDovL3d3dy5uYXphcmlnbGV6LmNvbSlcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vTmF6YXJpZ2xlei9wZXJlbnF1ZW5qc1wiXG4gIH0sXG4gIFwiYmluXCI6IHtcbiAgICBcInBlcmVucXVlblwiOiBcIi4vY2xpL3BlcmVucXVlblwiXG4gIH0sXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjkuMC4zXCIsXG4gICAgXCJjb2xvcnNcIjogXCJeMS4wLjNcIixcbiAgICBcImNvbW1hbmRlclwiOiBcIl4yLjYuMFwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjguMTFcIixcbiAgICBcImd1bHAtY2FjaGVkXCI6IFwiXjEuMC4yXCIsXG4gICAgXCJndWxwLWpzaGludFwiOiBcIl4xLjkuMlwiLFxuICAgIFwiZ3VscC1yZW5hbWVcIjogXCJeMS4yLjBcIixcbiAgICBcImd1bHAtdWdsaWZ5XCI6IFwiXjEuMS4wXCIsXG4gICAgXCJyZXF1aXJlLWRpclwiOiBcIl4wLjEuMFwiLFxuICAgIFwidmlueWwtYnVmZmVyXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJ3YXRjaGlmeVwiOiBcIl4yLjQuMFwiXG4gIH0sXG4gIFwibWFpblwiOiBcIi4vY2xpL3BlcmVucXVlblwiLFxuICBcImJyb3dzZXJcIjogXCIuL2J1aWxkL3BlcmVucXVlbi5qc1wiXG59XG4iLCJ2YXIgY3Rvck5hbWUgPSByZXF1aXJlKCcuL2NvbnN0JykuREVGQVVMVF9DT05TVFJVQ1RPUl9OQU1FO1xuXG4vKipcbiAqIEp1c3QgYSBiYXNpYyBjbGFzcywgZG9lcyBub3RoaW5nLiBJdCdzIHVzZWZ1bCBqdXN0IHRvIGluaGVyaXRzIGZyb20gaXQuXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQUVxuICovXG5mdW5jdGlvbiBDbGFzcygpe1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5DbGFzcy5wcm90b3R5cGUgPSB7fTtcbkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENsYXNzO1xuXG4vKipcbiAqIEV4dGVuZHMgYSBwYXJlbnQgY2xhc3Mgd2l0aCBhbiBvYmplY3QgYXMgYSBwYXJhbWV0ZXIsIGFuZCByZXR1cm4gYSBuZXcgY2hpbGQgY2xhc3NcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBjaGlsZFByb3RvIHtvYmplY3R9XG4gKiBAcmV0dXJucyB7Q2xhc3N9XG4gKi9cbkNsYXNzLmV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkUHJvdG8pe1xuICAgIHZhciBjaGlsZCA9IGZ1bmN0aW9uIFBRQ2xhc3MoKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXNbY3Rvck5hbWVdID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0aGlzW2N0b3JOYW1lXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIGNoaWxkLl9zdXBlciA9IHRoaXMucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodGhpcy5wcm90b3R5cGUpO1xuXG4gICAgdmFyIGluaGVyaXRhbmNlRm4gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gdGhpcy5fc3VwZXI7XG4gICAgICAgICAgICB0aGlzLl9zdXBlciA9IGNoaWxkLl9zdXBlcltuYW1lXTtcbiAgICAgICAgICAgIHZhciByZXQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5fc3VwZXIgPSB0bXA7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmb3IodmFyIHByIGluICBjaGlsZFByb3RvKXtcbiAgICAgICAgaWYgKGNoaWxkUHJvdG8uaGFzT3duUHJvcGVydHkocHIpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNoaWxkUHJvdG8sIHByKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eS52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgICAgICAgICBpZihjaGlsZC5fc3VwZXJbcHJdICYmIHR5cGVvZiBjaGlsZC5fc3VwZXJbcHJdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBpbmhlcml0YW5jZUZuKHByLCBwcm9wZXJ0eS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocHIgPT09IGN0b3JOYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBpbmhlcml0YW5jZUZuKFwiY29uc3RydWN0b3JcIiwgcHJvcGVydHkudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNoaWxkLnByb3RvdHlwZSwgcHIsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkLmV4dGVuZCA9IENsYXNzLmV4dGVuZDtcbiAgICBjaGlsZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjaGlsZDtcbiAgICByZXR1cm4gY2hpbGQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENsYXNzOyIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKSxcbiAgICBhdXRvRGV0ZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9saWIvcGl4aS9zcmMvY29yZScpLmF1dG9EZXRlY3RSZW5kZXJlcixcbiAgICBXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vbGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL1dlYkdMUmVuZGVyZXInKSxcbiAgICBTY2VuZU1hbmFnZXIgPSByZXF1aXJlKCcuL1NjZW5lTWFuYWdlcicpO1xuXG4vKipcbiAqIFRoZSBtYWluIG9iamVjdCBvZiB5b3VyIGdhbWUuXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQUVxuICogQHBhcmFtIHdpZHRoPTgwMFxuICogQHBhcmFtIGhlaWdodD02MDBcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnNdIHtvYmplY3R9IE9wdGlvbmFsIGdhbWUgcGFyYW1ldGVyc1xuICogQHBhcmFtIFtnYW1lT3B0aW9ucy5kZWJ1Zz1mYWxzZV0ge2Jvb2xlYW59IFNob3cgZGV2ZWxvcG1lbnQgaW5mbywgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtnYW1lT3B0aW9ucy5mcmFtZUxpbWl0XSB7bnVtYmVyfSBsaW1pdCB0aGUgZWxhcHNlZCB0aW1lXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zLnNheUhlbGxvPXRydWVdIHtib29sZWFufSBsb2dzIG91dCB0aGUgdmVyc2lvbiwgcmVuZGVyZXIsIGFuZCBhdWRpbyB0eXBlXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zLm5vV2ViQXVkaW89ZmFsc2VdIHtib29sZWFufSBwcmV2ZW50cyBzZWxlY3Rpb24gb2YgV2ViQXVkaW8gdHlwZVxuICogQHBhcmFtIFtnYW1lT3B0aW9ucy5wZXJzaXN0YW50RGF0YT10cnVlXSB7Ym9vbGVhbn0gVXNlIGxvY2FsU3RvcmFnZSB0byBzYXZlIGFsbCB5b3UgbmVlZFxuICogQHBhcmFtIFtnYW1lT3B0aW9ucy5zdG9wQXRWaXNpYmlsaXR5Q2hhbmdlXSB7Ym9vbGVhbn0gUGF1c2UgdGhlIGdhbWUgd2hlbiBsb3N0IHRoZSBmb2N1cywgZGVmYXVsdCB0cnVlXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zLmF1ZGlvRXh0c10ge2FycmF5fSBGb3JjZSBsb2FkIGF1ZGlvIGZpbGVzIGluIHRoaXMgb3JkZXJcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMubm9XZWJHTD1mYWxzZV0ge2Jvb2xlYW59IHByZXZlbnRzIHNlbGVjdGlvbiBvZiBXZWJHTCByZW5kZXJlciwgZXZlbiBpZiBzdWNoIGlzIHByZXNlbnRcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zXSB7b2JqZWN0fSBPcHRpb25hbCBnYW1lIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zLnZpZXddIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGNhbnZhcyB0byB1c2UgYXMgYSB2aWV3LCBvcHRpb25hbFxuICogQHBhcmFtIFtyZW5kZXJlck9wdGlvbnMudHJhbnNwYXJlbnQ9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgdHJhbnNwYXJlbnQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zLmFudGlhbGlhcz1mYWxzZV0ge2Jvb2xlYW59IHNldHMgYW50aWFsaWFzIChvbmx5IGFwcGxpY2FibGUgaW4gY2hyb21lIGF0IHRoZSBtb21lbnQpXG4gKiBAcGFyYW0gW3JlbmRlcmVyT3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXI9ZmFsc2VdIHtib29sZWFufSBlbmFibGVzIGRyYXdpbmcgYnVmZmVyIHByZXNlcnZhdGlvbiwgZW5hYmxlIHRoaXMgaWYgeW91XG4gKiAgICAgIG5lZWQgdG8gY2FsbCB0b0RhdGFVcmwgb24gdGhlIHdlYmdsIGNvbnRleHRcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zLnJlc29sdXRpb249MV0ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlcmVyXG4gKi9cbmZ1bmN0aW9uIEdhbWUod2lkdGgsIGhlaWdodCwgZ2FtZU9wdGlvbnMsIHJlbmRlcmVyT3B0aW9ucyl7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbmZpZyBvZiB0aGUgZ2FtZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEBkZWZhdWx0IENPTlNULkRFRkFVTFRfR0FNRV9PUFRJT05TXG4gICAgICovXG4gICAgdGhpcy5jb25maWcgPSB1dGlscy5kZWZhdWx0T2JqZWN0KENPTlNULkRFRkFVTFRfR0FNRV9PUFRJT05TLCBnYW1lT3B0aW9ucyk7XG4gICAgdXRpbHMuX3NhaWRIZWxsbyA9ICF0aGlzLmNvbmZpZy5zYXlIZWxsbztcbiAgICByZW5kZXJlck9wdGlvbnMgPSB1dGlscy5kZWZhdWx0T2JqZWN0KENPTlNULkRFRkFVTFRfUkVOREVSX09QVElPTlMsIHJlbmRlcmVyT3B0aW9ucyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yYWYgPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZW5kZXJlciB3aWR0aFxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgODAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVyIGhlaWdodFxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJlciBpbiB1c2VcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmVyfENhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBnZXRSZW5kZXJlcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcmVuZGVyZXJPcHRpb25zLCB0aGlzLmNvbmZpZy5ub1dlYkdMKTtcbiAgICB0aGlzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSBiZXR3ZWVuIGZyYW1lc1xuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lRWxhcHNlZFRpbWUgPSAwO1xuXG4gICAgLyoqXG4gICAgICogTGFzdCBmcmFtZSB0aW1lXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVMYXN0VGltZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdG90YWwgZ2FtZSB0aW1lXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVsdGEgdGltZVxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmRlbHRhID0gMDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHJlbmRlcmVyIGlzIGEgd2ViZ2xcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNXZWJHTCA9ICh0aGlzLnJlbmRlcmVyIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJlcik7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NlbmUgbWFuYWdlciBmb3IgdGhpcyBnYW1lXG4gICAgICogQG1lbWJlciB7U2NlbmVNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcih0aGlzKTtcblxuICAgIGlmKHRoaXMuY29uZmlnLnN0b3BBdFZpc2liaWxpdHlDaGFuZ2Upe1xuICAgICAgICB1dGlscy53YXRjaFZpc2liaWxpdHlDaGFuZ2VzKHRoaXMpO1xuICAgIH1cbn1cblxuR2FtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lO1xuXG4vKipcbiAqIFN0YXJ0IHRoZSByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZVxuICogQHJldHVybnMge0dhbWV9XG4gKi9cbkdhbWUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKXtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAvL1RPRE86IFVucGF1c2UgYXVkaW8gbWFuYWdlcjtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RvcCB0aGUgcmVxdWVzdCBhbmltYXRpb24gZnJhbWVcbiAqIEByZXR1cm5zIHtHYW1lfVxuICovXG5HYW1lLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpO1xuICAgIC8vVE9ETzogcGF1c2UgYXVkaW9NYW5hZ2VyXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERyYXcgYW5kIGFuaW1hdGUgYWxsIHRoZSBhY3RvcnMgaW4gdGhlIHNjZW5lXG4gKiBAcmV0dXJucyB7R2FtZX1cbiAqL1xuR2FtZS5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lTWFuYWdlcik7XG5cbiAgICB0aGlzLnNjZW5lTWFuYWdlci5hbmltYXRlKHRoaXMudGltZSwgdGhpcy5kZWx0YSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIGFsbCBnYW1lIHRpbWVzXG4gKiBAcmV0dXJucyB7R2FtZX1cbiAqL1xuR2FtZS5wcm90b3R5cGUudXBkYXRlVGltZSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIHRpbWUgPSBub3cgLSB0aGlzLmZyYW1lTGFzdFRpbWU7XG4gICAgdGhpcy5mcmFtZUVsYXBzZWRUaW1lID0gKHRpbWUgPD0gdGhpcy5jb25maWcuZnJhbWVMaW1pdCkgPyB0aW1lIDogdGhpcy5jb25maWcuZnJhbWVMaW1pdDtcbiAgICB0aGlzLmZyYW1lTGFzdFRpbWUgPSBub3c7XG4gICAgdGhpcy5kZWx0YSA9IHRoaXMuZnJhbWVFbGFwc2VkVGltZS8xMDAwO1xuICAgIHRoaXMudGltZSArPSB0aGlzLmRlbHRhO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlc2l6ZSB0aGUgdmlldyB1c2luZyBET00gU3R5bGVcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfVxuICogQHJldHVybnMge0dhbWV9XG4gKi9cbkdhbWUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpe1xuICAgIHZhciBjYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIFN0b3Agb3Igc3RhcnQgdGhlIGdhbWUgd2hlbiB0aGUgZm9jdXMgaXMgaW4gb3Igb3V0XG4gKiBAcGFyYW0gaGlkZGVuIHtib29sZWFufVxuICogQHJldHVybnMge0dhbWV9XG4gKi9cbkdhbWUucHJvdG90eXBlLnZpc2liaWxpdHlDaGFuZ2UgPSBmdW5jdGlvbihoaWRkZW4pe1xuICAgIGlmKHRoaXMuY29uZmlnLnN0b3BBdFZpc2liaWxpdHlDaGFuZ2Upe1xuICAgICAgICBpZihoaWRkZW4pe1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuXG5mdW5jdGlvbiBnZXRSZW5kZXJlcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zLCBub1dlYkdMKXtcbiAgICBpZihuYXZpZ2F0b3IuaXNDb2Nvb25KUyYmIW9wdGlvbnMudmlldylvcHRpb25zLnZpZXcgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmVlbmNhbnZhc1wiKTtcblxuICAgIHZhciByZW5kZXJlciA9IG5ldyBhdXRvRGV0ZWN0UmVuZGVyZXIod2lkdGgsIGhlaWdodCwgb3B0aW9ucywgbm9XZWJHTCk7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIudmlldyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXI7XG59IiwidmFyIENvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2xpYi9waXhpL3NyYy9jb3JlL2Rpc3BsYXkvQ29udGFpbmVyJyksXG4gICAgU2NlbmUgPSByZXF1aXJlKCcuLi9kaXNwbGF5L1NjZW5lJyk7XG5cbi8qKlxuICogTWFuYWdlIGFuZCBzdG9yZSBhbGwgdGhlIHNjZW5lcyBpbiB0aGUgZ2FtZVxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBRXG4gKiBAcGFyYW0gZ2FtZSB7R2FtZX1cbiAqL1xuZnVuY3Rpb24gU2NlbmVNYW5hZ2VyKGdhbWUpe1xuICAgIENvbnRhaW5lci5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtHYW1lfVxuICAgICAqL1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuc2NlbmVzID0gW107XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1NjZW5lfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudFNjZW5lID0gbnVsbDtcbn1cblxuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29udGFpbmVyLnByb3RvdHlwZSk7XG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2NlbmVNYW5hZ2VyO1xuXG4vKipcbiAqIFN0b3JlIGEgbmV3IHNjZW5lXG4gKlxuICogQHBhcmFtIHNjZW5lIHtTY2VuZX1cbiAqIEBwYXJhbSBbaWRdIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7U2NlbmVNYW5hZ2VyfVxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmFkZFNjZW5lID0gZnVuY3Rpb24oc2NlbmUsIGlkKXtcbiAgICBpZihpZClzY2VuZS5pZCA9IGlkO1xuICAgIHRoaXMuc2NlbmVzLnB1c2goc2NlbmUpO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBbmltYXRlIHRoZSBjdXJyZW50U2NlbmVcbiAqIEBwYXJhbSBnYW1lVGltZSB7bnVtYmVyfVxuICogQHBhcmFtIGRlbHRhIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7U2NlbmVNYW5hZ2VyfVxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbihnYW1lVGltZSwgZGVsdGEpe1xuICAgIGlmKHRoaXMuY3VycmVudFNjZW5lJiZ0aGlzLmN1cnJlbnRTY2VuZS5hbmltYXRlKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuYW5pbWF0ZShnYW1lVGltZSwgZGVsdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgYSBzY2VuZSB0byByZW5kZXIgYW5kIGFuaW1hdGVcbiAqIEBwYXJhbSBzY2VuZSB7c3RyaW5nfFNjZW5lfVxuICogQHJldHVybnMge1NjZW5lTWFuYWdlcn1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5zZXRDdXJyZW50U2NlbmUgPSBmdW5jdGlvbihzY2VuZSl7XG4gICAgaWYodHlwZW9mIHNjZW5lID09PSBcInN0cmluZ1wiKXNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5SWQoc2NlbmUpO1xuICAgIHNjZW5lLnNldE1hbmFnZXIodGhpcyk7XG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5hZGRDaGlsZChzY2VuZSk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBzY2VuZSwgaWYgdGhlIHBhcmFtIGlkIGlzIG5vdCBwcm92aWRlZCB0aGUgaWQgd2lsbCBiZSBzZXQgYXV0b21hdGljYWxseVxuICogQHBhcmFtIFtpZF0ge3N0cmluZ31cbiAqIEByZXR1cm5zIHtTY2VuZX1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVTY2VuZSA9IGZ1bmN0aW9uKGlkKXtcbiAgICB2YXIgc2NlbmUgPSBuZXcgU2NlbmUoKTtcbiAgICBzY2VuZS5pZCA9IChpZCkgPyBpZCA6ICdpZCcrdGhpcy5zY2VuZXMubGVuZ3RoO1xuICAgIHRoaXMuYWRkU2NlbmUoc2NlbmUpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHJlcXVlc3RlZCBzY2VuZSBvciBudWxsIGlmIGRvbid0IGV4aXN0c1xuICogQHBhcmFtIGlkIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7bnVsbHxTY2VuZX1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5nZXRTY2VuZUJ5SWQgPSBmdW5jdGlvbihpZCl7XG4gICAgdmFyIHNjZW5lID0gbnVsbDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zY2VuZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpZCA9PT0gdGhpcy5zY2VuZXNbaV0uaWQpe1xuICAgICAgICAgICAgc2NlbmUgPSB0aGlzLnNjZW5lc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NlbmU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc2NlbmUgZnJvbSB0aGUgYXJyYXlcbiAqIEBwYXJhbSBzY2VuZSB7c3RyaW5nfFNjZW5lfVxuICogQHJldHVybnMge1NjZW5lTWFuYWdlcn1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVTY2VuZSA9IGZ1bmN0aW9uKHNjZW5lKXtcbiAgICBpZih0eXBlb2Ygc2NlbmUgPT09IFwic3RyaW5nXCIpc2NlbmUgPSB0aGlzLmdldFNjZW5lQnlJZChzY2VuZSk7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5zY2VuZXMuaW5kZXhPZihzY2VuZSk7XG4gICAgaWYoaW5kZXggIT09IC0xKXtcbiAgICAgICAgdGhpcy5zY2VuZXMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgc2NlbmVzIGluIHRoaXMgbWFuYWdlclxuICogQHJldHVybnMge1NjZW5lTWFuYWdlcn1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVBbGxTY2VuZXMgPSBmdW5jdGlvbigpe1xuICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNjZW5lcy5sZW5ndGggPSAwO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lTWFuYWdlcjsiLCJ2YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vbGliL3BpeGkvc3JjL2NvcmUvY29uc3QnKTtcblxuLyoqXG4gKiBTdHJpbmcgb2YgdGhlIGN1cnJlbnQgUFEgdmVyc2lvblxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZFUlNJT05cbiAqL1xuY29uc3RhbnRzLlZFUlNJT04gPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuXG4vKipcbiAqIFN0cmluZyBvZiB0aGUgY3VycmVudCBQSVhJIHZlcnNpb25cbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFBJWElfVkVSU0lPTlxuICovXG5jb25zdGFudHMuUElYSV9WRVJTSU9OID0gcmVxdWlyZSgnLi4vLi4vbGliL3BpeGkvcGFja2FnZS5qc29uJykudmVyc2lvbjtcblxuLyoqXG4gKiBDb25zdGFudCB0byBpZGVudGlmeSB0aGUgQXVkaW8gVHlwZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBBVURJT19UWVBFXG4gKiBAcHJvcGVydHkge251bWJlcn0gQVVESU9fVFlQRS5VTktOT1dOXG4gKiBAcHJvcGVydHkge251bWJlcn0gQVVESU9fVFlQRS5XRUJBVURJT1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEFVRElPX1RZUEUuSFRNTEFVRElPXG4gKi9cbmNvbnN0YW50cy5BVURJT19UWVBFID0ge1xuICAgIFVOS05PV04gOiAwLFxuICAgIFdFQkFVRElPIDogMSxcbiAgICBIVE1MQURVRElPIDogMlxufTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBnYW1lIG9wdGlvbnMgaWYgbm9uZSBhcmUgc3VwcGxpZWQgdG8ge0BsaW5rIFBRLkdhbWV9XG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkge29iamVjdH0gREVGQVVMVF9HQU1FX09QVElPTlNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5kZWJ1Zz1mYWxzZVxuICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLnNheUhlbGxvPXRydWVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5ub1dlYkF1ZGlvPWZhbHNlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMubm9XZWJHTD1mYWxzZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IERFRkFVTFRfUkVOREVSX09QVElPTlMuZnJhbWVMaW1pdD0zNVxuICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLnBlcnNpc3RhbnREYXRhPXRydWVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5zdG9wQXRWaXNpYmlsaXR5Q2hhbmdlPXRydWVcbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IERFRkFVTFRfUkVOREVSX09QVElPTlMuYXVkaW9FeHRzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMucGF1c2VPblZpc2liaWxpdHlDaGFuZ2U9dHJ1ZVxuICovXG5jb25zdGFudHMuREVGQVVMVF9HQU1FX09QVElPTlMgPSB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHNheUhlbGxvOiB0cnVlLFxuICAgIG5vV2ViQXVkaW86IGZhbHNlLFxuICAgIG5vV2ViR0w6IGZhbHNlLFxuICAgIGZyYW1lTGltaXQ6IDM1LCAvL1RPRE86IENhbWJpYXIgZXN0bywgcHVlZGUgY29uZnVuZGlyIHBvciBmcHMgeSBubyBtcywgcXVpesOhcyBkZWZpbmlyIG51bWVybyBkZSBmcmFtZSBtaW5pbW8/XG4gICAgcGVyc2lzdGFudERhdGE6IHRydWUsXG4gICAgc3RvcEF0VmlzaWJpbGl0eUNoYW5nZTogdHJ1ZSxcbiAgICBhdWRpb0V4dHM6IFsnb2dnJywgJ21wMycsICd3YXYnXSxcbiAgICBwYXVzZU9uVmlzaWJpbGl0eUNoYW5nZTogdHJ1ZVxufTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBuYW1lIGZvciBhbGwgdGhlIGNvbnN0cnVjdG9ycyB3aGVuIHdlIHVzZSB0aGUgY3VzdG9tIGNsYXNzIHN5c3RlbVxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IERFRkFVTFRfQ09OU1RSVUNUT1JfTkFNRVxuICovXG5jb25zdGFudHMuREVGQVVMVF9DT05TVFJVQ1RPUl9OQU1FID0gXCJfaW5pdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50cztcbiIsInZhciBhZGRJbmhlcml0cyA9IHJlcXVpcmUoJy4vdXRpbHMnKS5hZGRJbmhlcml0cztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb3JlKXtcbiAgICBhZGRJbmhlcml0cyhjb3JlLnV0aWxzLlBvb2wpO1xuICAgIGFkZEluaGVyaXRzKGNvcmUuR3JhcGhpY3MpO1xuICAgIGFkZEluaGVyaXRzKGNvcmUuU2NlbmUpO1xuICAgIGFkZEluaGVyaXRzKGNvcmUuR2FtZSk7XG4gICAgYWRkSW5oZXJpdHMoY29yZS5TY2VuZU1hbmFnZXIpO1xuXG4gICAgcmV0dXJuIGNvcmU7XG59OyIsIi8qKlxuICogQ3JlYXRlIGEgcG9vbCBvZiBvYmplY3RzIHRvIGltcHJvdmUgdGhlIHBlcmZvcm1hbmNlIGFuZCBhdm9pZCB0aGUgZ2FyYmFnZSBjb2xsZWN0b3JcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBRXG4gKiBAcGFyYW0gb2JqZWN0Q29uc3RydWN0b3Igeyp9XG4gKiBAcGFyYW0gYXJncyB7YXJyYXl9XG4gKiBAcGFyYW0gW251bV0ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gUG9vbChvYmplY3RDb25zdHJ1Y3RvciwgYXJncywgbnVtKXtcblxuICAgIC8qKlxuICAgICAqIEFsbCBvYmplY3RzIGluIHRoaXMgcG9vbFxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9vbEl0ZW1zID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgJ2NvbnN0cnVjdG9yJyBmb3IgYWxsIG9iamVjdHMgaW4gdGhpcyBwb29sXG4gICAgICogQG1lbWJlciB7KnxPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vYmplY3RDb25zdHJ1Y3RvciA9IG9iamVjdENvbnN0cnVjdG9yIHx8IE9iamVjdDtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtcyB0byBjcmVhdGUgdGhlIG9iamVjdFxuICAgICAqIEBtZW1iZXIge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuYXJncyA9IGFyZ3MgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgaXRlbXMgdG8gY3JlYXRlXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubnVtID0gbnVtO1xuXG5cbiAgICBpZihudW0pdGhpcy5nZW5lcmF0ZU9iamVjdHMobnVtKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuUG9vbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQb29sO1xuXG4vKipcbiAqIEdldCB0aGUgcG9vbCBsZW5ndGhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cblBvb2wucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMucG9vbEl0ZW1zLmxlbmd0aDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGluc3RhbmNlIG9mIHRoZSBvYmplY3RzIGluIHRoZSBwb29sXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuUG9vbC5wcm90b3R5cGUuZ2V0T2JqZWN0ID0gZnVuY3Rpb24oKXtcbiAgICBpZih0aGlzLm51bSAmJiB0aGlzLnBvb2xJdGVtcy5sZW5ndGggPD0gdGhpcy5udW0qMC4xMCl7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVPYmplY3RzKHRoaXMubnVtKTtcbiAgICB9ZWxzZSBpZih0aGlzLnBvb2xJdGVtcy5sZW5ndGggPD0gMCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBvYmogPSB0aGlzLnBvb2xJdGVtcy5wb3AoKTtcbiAgICBpZihvYmoub25Qb29sRXhpdCl7XG4gICAgICAgIG9iai5vblBvb2xFeGl0KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBQdXQgYW4gaW5zdGFuY2UgaW4gdGhlIHBvb2wgbGlzdFxuICogQHBhcmFtIG9iaiB7Kn1cbiAqIEByZXR1cm5zIHtQb29sfVxuICovXG5Qb29sLnByb3RvdHlwZS5wdXRPYmplY3QgPSBmdW5jdGlvbihvYmope1xuICAgIHRoaXMucG9vbEl0ZW1zLnVuc2hpZnQob2JqKTtcbiAgICBpZihvYmoub25Qb29sRW50ZXIpe1xuICAgICAgICBvYmoub25Qb29sRW50ZXIodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbmQgc290cmFnZSBhbGwgdGhlIG9iamVjdHNcbiAqIEBwYXJhbSBudW0ge251bWJlcn1cbiAqIEByZXR1cm5zIHtQb29sfVxuICovXG5Qb29sLnByb3RvdHlwZS5nZW5lcmF0ZU9iamVjdHMgPSBmdW5jdGlvbihudW0pe1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBudW07IGkrKyl7XG4gICAgICAgIHRoaXMucG9vbEl0ZW1zLnB1c2godGhpcy5jcmVhdGVOZXdPYmplY3QoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2VzIG9mIHRoZSBwb29sIG9iamVjdCB3aXRoIHRoZSBhcmd1bWVudHNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Qb29sLnByb3RvdHlwZS5jcmVhdGVOZXdPYmplY3QgPSBmdW5jdGlvbigpe1xuICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgdmFyIG9iajtcblxuICAgIHRyeSB7XG4gICAgICAgIG9iaiA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkodGhpcy5vYmplY3RDb25zdHJ1Y3RvciwgKFtudWxsXSkuY29uY2F0KHRoaXMuYXJncykpKSgpO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgb2JqID0gYXBwbHlGaXgodGhpcy5vYmplY3RDb25zdHJ1Y3RvciwgdGhpcy5hcmdzKTtcbiAgICB9XG5cbiAgICBvYmoucmV0dXJuVG9Qb29sID0gZnVuY3Rpb24oKXtcbiAgICAgICAgc2NvcGUucHV0T2JqZWN0KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9vbDtcblxuZnVuY3Rpb24gYXBwbHlGaXgob2JqLCBhcmdzKXtcbiAgICB2YXIgZXYgPSBcIkZ1bmN0aW9uKCdvYmonLFwiO1xuICAgIHZhciBmbiA9IFwiXFxcInJldHVybiBuZXcgb2JqKFwiO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBldiArPSBcIidhXCIraStcIicsXCI7XG4gICAgICAgIGZuICs9IFwiYVwiK2k7XG4gICAgICAgIGlmKGkgIT09IGFyZ3MubGVuZ3RoLTEpe1xuICAgICAgICAgICAgZm4gKz0gXCIsXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbiArPSBcIilcXFwiXCI7XG4gICAgZXYgKz0gZm4gKyBcIilcIjtcblxuICAgIHJldHVybiAoZXZhbChldikpLmFwcGx5KHRoaXMsIChbb2JqXSkuY29uY2F0KGFyZ3MpKTtcbn0iLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliL3BpeGkvc3JjL2NvcmUvdXRpbHMnKSxcbiAgICBQb29sID0gcmVxdWlyZSgnLi9Qb29sJyksXG4gICAgQ2xhc3MgPSByZXF1aXJlKCcuLi9DbGFzcycpO1xuXG4vKipcbiAqIGxvZ3Mgb3V0IHJlbmRlcmVyIHR5cGUsIGF1ZGlvIHR5cGUsIGFuZCB2ZXJzaW9uXG4gKi9cbnV0aWxzLnNheUhlbGxvID0gZnVuY3Rpb24oKXtcbiAgICAvL1RPRE86IFJlbmRlcmVyVHlwZSwgQXVkaW9UeXBlLCBQaXhpIGNyZWRpdHNcbiAgICBpZighdGhpcy5fc2FpZEhlbGxvKWNvbnNvbGUubG9nKCdQZXJlbnF1ZW4uanMgdicrQ09OU1QuVkVSU0lPTiArICcgW2h0dHA6Ly9wZXJlcXVlbmpzLmNvbV0nKTtcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHQgcGFyYW1ldGVycyBpbiBjaGlsZCBvYmplY3Qgd2l0aCB0aGUgcGFyZW50IHZhbHVlc1xuICpcbiAqIEBwYXJhbSBwYXJlbnQge29iamVjdH1cbiAqIEBwYXJhbSBjaGlsZCB7b2JqZWN0fVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZGVmYXVsdE9iamVjdCA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGQpe1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCB7fTtcbiAgICBjaGlsZCA9IGNoaWxkIHx8IHt9O1xuICAgIGZvcih2YXIga2V5IGluIHBhcmVudCl7XG4gICAgICAgIGNoaWxkW2tleV0gPSAoY2hpbGRba2V5XSAhPT0gdW5kZWZpbmVkICYmIGNoaWxkW2tleV0gIT09IG51bGwpID8gY2hpbGRba2V5XSA6IHBhcmVudFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbn07XG5cbi8qKlxuICogRXh0ZW5kIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIGZyb20gb3RoZXIgb2JqZWN0XG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9XG4gKiBAcGFyYW0gbWl4aW4ge29iamVjdH1cbiAqL1xudXRpbHMubWl4aW4gPSBmdW5jdGlvbihvYmosIG1peGluKXtcbiAgICBmb3IodmFyIGtleSBpbiBtaXhpbil7XG4gICAgICAgIG9iai5wcm90b3R5cGVba2V5XSA9IG1peGluW2tleV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBQcm92aWRlIHRoZSBhYmlsaXR5IHRvIGluaGVyaXRzIGVhc2lseVxuICogQHBhcmFtIG9ialxuICovXG51dGlscy5hZGRJbmhlcml0cyA9IGZ1bmN0aW9uKG9iail7XG4gICAgb2JqLmV4dGVuZCA9IENsYXNzLmV4dGVuZDtcbn07XG5cbi8qKlxuICogV2F0Y2ggd2hlbiB0aGUgYnJvd3NlciBsb3N0IHRoZSBmb2N1cyBhbmQgbm90aWZ5IHRoZSBnYW1lIG9iamVjdFxuICogQHBhcmFtIGdhbWUge0dhbWV9XG4gKi9cbnV0aWxzLndhdGNoVmlzaWJpbGl0eUNoYW5nZXMgPSByZXF1aXJlKCcuL3Zpc2liaWxpdHlDaGFuZ2UnKTtcblxudXRpbHMuUG9vbCA9IFBvb2w7XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHM7IiwiLyoqXG4gKiBXYXRjaCB3aGVuIHRoZSBicm93c2VyIGxvc3QgdGhlIGZvY3VzIGFuZCBub3RpZnkgdGhlIGdhbWUgb2JqZWN0XG4gKiBAcGFyYW0gZ2FtZSB7R2FtZX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihnYW1lKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGdldFZpc2liaWxpdHlDaGFuZ2UoKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoaWRkZW4gPSBkb2N1bWVudC5oaWRkZW4gfHwgZG9jdW1lbnQud2Via2l0SGlkZGVuIHx8IGRvY3VtZW50Lm1vekhpZGRlbiB8fCBkb2N1bWVudC5tc0hpZGRlbjtcbiAgICAgICAgZ2FtZS52aXNpYmlsaXR5Q2hhbmdlKCEhaGlkZGVuKTtcbiAgICB9LCBmYWxzZSk7XG59O1xuXG5mdW5jdGlvbiBnZXRWaXNpYmlsaXR5Q2hhbmdlKCl7XG4gICAgaWYodHlwZW9mIGRvY3VtZW50LmhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICByZXR1cm4gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmV0dXJuICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICB9ZWxzZSBpZih0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHJldHVybiAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgfWVsc2UgaWYodHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHJldHVybiAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICB9XG59XG4iLCJ2YXIgR3JhcGhpY3MgPSByZXF1aXJlKCcuLi8uLi9saWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy9HcmFwaGljcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vY29yZS91dGlscycpLFxuICAgIG1peGluID0gcmVxdWlyZSgnLi9taXhpbicpO1xuXG51dGlscy5taXhpbihHcmFwaGljcywgbWl4aW4pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoaWNzOyIsInZhciBHcmFwaGljcyA9IHJlcXVpcmUoJy4uLy4uL2xpYi9waXhpL3NyYy9jb3JlL2dyYXBoaWNzL0dyYXBoaWNzJyk7XG5cbmZ1bmN0aW9uIFNjZW5lKCl7XG4gICAgR3JhcGhpY3MuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSBudWxsO1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvckRpcnR5ID0gZmFsc2U7XG5cbiAgICB0aGlzLm1hbmFnZXIgPSBudWxsO1xufVxuXG5TY2VuZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdyYXBoaWNzLnByb3RvdHlwZSk7XG5TY2VuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY2VuZTtcblxuU2NlbmUucHJvdG90eXBlLnNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKXtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU2NlbmUucHJvdG90eXBlLnNldE1hbmFnZXIgPSBmdW5jdGlvbihtYW5hZ2VyKXtcbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU2NlbmUucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbihnYW1lVGltZSwgZGVsdGEpe1xuICAgIGlmKHRoaXMudXBkYXRlKGdhbWVUaW1lLCBkZWx0YSkpe1xuICAgICAgICBpZih0aGlzLl9iYWNrZ3JvdW5kQ29sb3JEaXJ0eSl7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5GaWxsKHRoaXMuYmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgICAgICAgICAuZHJhd1JlY3QoMCwwLHRoaXMubWFuYWdlci5nYW1lLndpZHRoLHRoaXMubWFuYWdlci5nYW1lLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgLmVuZEZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvckRpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmFuaW1hdGUoZ2FtZVRpbWUsIGRlbHRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGdhbWVUaW1lLCBkZWx0YSl7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhTY2VuZS5wcm90b3R5cGUsIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oY29sb3Ipe1xuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFkZFRvOiBmdW5jdGlvbihwYXJlbnQpe1xuICAgICAgICBpZihwYXJlbnQpcGFyZW50LmFkZENoaWxkKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbihnYW1lVGltZSwgZGVsdGEpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24oZ2FtZVRpbWUsIGRlbHRhKXtcbiAgICAgICAgaWYodGhpcy51cGRhdGUoZ2FtZVRpbWUsIGRlbHRhKSl7XG4gICAgICAgICAgICAvL1RPRE86IEFuaW1hdGVcblxuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmFuaW1hdGUoZ2FtZVRpbWUsIGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG4iXX0=
