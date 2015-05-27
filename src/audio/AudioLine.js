function AudioLine(manager){
    this._init(manager);
}

AudioLine.prototype.constructor = AudioLine;

AudioLine.prototype._init = function(manager){
    this.manager = manager;
    this.available = true;
    this.audio = null;
    this.htmlAudio = null;
    this.loop = false;
    this.callback = null;

    if(!this.context){
        this.htmlAudio = new Audio();
        this.htmlAudio.addEventListener('ended', this._onEnd.bind(this));
    }
};

AudioLine.prototype.reset = function(){
    this.available = true;
    this.audio = null;
    this.loop = false;
    this.callback = null;
    return this;
};

AudioLine.prototype.setAudio = function(audio, loop, callback){
    if(typeof loop === "function"){
        loop = false;
        callback = loop;
    }

    this.audio = audio;
    this.available = false;
    this.loop = loop;
    this.callback = callback;
    return this;
};

AudioLine.prototype.play = function(){
    if(this.manager.context){

    }else{
        var audio = this.htmlAudio;
        audio.src = (this.audio.source.src !== "") ? this.audio.source.src : this.audio.source.children[0].src;
        audio.preload = "auto";
        audio.volume = (this.audio.mute) ? 0 : this.audio.volume;
        audio.load();
        audio.play();
    }
    return this;
};

AudioLine.prototype.stop = function(){
    if(this.manager.context){

    }else{
        this.htmlAudio.pause();
        this.htmlAudio.currentTime = 0;
        this.reset();
    }
    return this;
};

AudioLine.prototype._onEnd = function(){
    if(this.callback){
        this.callback(this.manager, this.audio);
    }

    if(!this.manager.context){
        if(this.loop || this.audio.loop){
            this.htmlAudio.currentTime = 0;
            this.htmlAudio.play();
        }else{
            this.reset();
        }
    }
};

module.exports = AudioLine;