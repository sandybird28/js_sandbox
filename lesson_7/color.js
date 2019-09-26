
class Color{
    constructor(r=0,g=0,b=0){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    get r(){return this._r}
    get g(){return this._g}
    get b(){return this._b}

    set r(x){this._r = x < 0 ? 0 : x > 255 ? 255 : Math.round(x)}
    set g(x){this._g = x < 0 ? 0 : x > 255 ? 255 : Math.round(x)}
    set b(x){this._b = x < 0 ? 0 : x > 255 ? 255 : Math.round(x)}


    static fromString(str){
        let arg = str.match(/\d+/g),r,g,b;
        r = arg[0] < 0 ? 0 : arg[0] > 255 ? 255 : +arg[0];
        g = arg[1] < 0 ? 0 : arg[1] > 255 ? 255 : +arg[1];
        b = arg[2] < 0 ? 0 : arg[2] > 255 ? 255 : +arg[2];
        return new Color(r,g,b)
    }    
    toString(){
        return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`
    }
    toBlack(){
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
    toWhite(){
        this.r = 255;
        this.g = 255;
        this.b = 255;
    }
    getLightness(){
        return  (this.r+ this.g+this.b)/3
    }
    toGrayscale(){
        let l = this.getLightness()
        this.r = l;
        this.g = l;
        this.b = l;
    }
    invert(){
        this.r = 255-this.r;
        this.g = 255-this.g;
        this.b = 255-this.b;

    }
    random(){
        this.r = Math.round(Math.random()*255);
        this.g = Math.round(Math.random()*255);
        this.b = Math.round(Math.random()*255);
    }
}

module.exports =  Color;