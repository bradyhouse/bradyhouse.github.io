/**
 * Wrapper class for the fabric.Image.
 * @see http://fabricjs.com/docs/fabric.Image.html
 */
class Image extends Base {

  config() {
    return {
      hook: null,
      url: null,
      left: 100,
      top: 100,
      angle: 0,
      opacity: 1,
      autoBind: false,
      imageLoad: null
    }
  }

  constructor(config) {
    super();
    if (config) {
      this.apply(this, config, this.config());
    }
    this.init();
  }

  bind() {
    if (this.hook) {
      this.hook.add(this.fabric);
    }
  }

  init() {
    var self = this;
    if (this.url) {
      fabric.Image.fromURL(this.url, function(oImg) {
        oImg.setWidth(self.width);
        oImg.setHeight(self.height);
        oImg.setLeft(self.left);
        oImg.setTop(self.top);
        oImg.setOpacity(self.opacity);

        self.fabric = oImg;
        if (self.autoBind) {
          self.bind();
        }
        if (self.hasOwnMethod('onImageLoad')) {
          self['onImageLoad'].call(self, oImg);
        }
      });
    }
  }

}
