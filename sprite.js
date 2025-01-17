class Sprite {
    constructor (image, x, y, w, h, controllable) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        if(controllable === undefined){
            this.controllable = false;
        } else {
            this.controllable = controllable;
        }
    }

    draw () {
        image(this.image, this.x, this.y, this.w, this.h);
    }

    keyIsPressed (keyCode) {
        if(this.controllable != true) return

        if(keyCode == LEFT_ARROW){
            this.x--;
          } else if (keyCode == RIGHT_ARROW){
            this.x++;
          }
          if (keyCode == UP_ARROW){
            this.y--;
          } else if (keyCode == DOWN_ARROW){
            this.y++;
        }
    }
}