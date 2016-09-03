/**
 * Wrapper class for the fabric.Canvas.
 * @see http://fabricjs.com/docs/fabric.Canvas.html
 */

class Canvas extends Base {
  config() {
    return {
      hook: 'canvas1',
      children: [],
      backgroundColor: 'rgb(100,100,200)',
      width: 500,
      height: 500
    };
  }
  constructor(config) {
    super();
    if (config) {
      this.apply(this, config, this.config());
    }
    this.init();
  }
  init() {
    var canvas = new fabric.Canvas(this.hook, {
      width: this.width,
      height: this.height
    });

    if(canvas) {
      if (this.children && this.children.length) {
        this.children.map(function(child) {
          if (child.fabric) {
            // ToDo: Report Bug
            child.fabric.setHeight(child.height);
            canvas.add(child.fabric);
          }
        }, canvas);
      }
      this.fabric = canvas;
    }
  }
}
