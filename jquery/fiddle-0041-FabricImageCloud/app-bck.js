(function(app) {
  "use strict";


  app.metadata = app.metadata || {
      consoleTag: 'H O U S E ~ f i d d l e s',
      gitHubUrl: 'https://github.com/bradyhouse/house/tree/master/fiddles/jquery/fiddle-0041-fabricImageCloud',
      dataUrl: 'data.json'
    };


  class Base {
    constructor(fabric = null) {
      this._fabric = fabric;
    }
    apply(object, config, defaults) {
      if (defaults) {
        this.apply(object, defaults);
      }
      if (object && config && typeof config === 'object') {
        let property;
        for (property in config) {
          if (config[property]) {
            object[property] = config[property];
          }
        }
      }
      return object;
    }
    get fabric() {
      return this._fabric;
    }
    set fabric(value) {
      this._fabric = value;
    }
  }


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
    constructor(config = null) {
      super();
      if (config) {
        this.apply(this, config, this.config());
      }
      this.init();
    }
    init() {
      let canvas = new fabric.Canvas(this.hook, {
        width: this.width,
        height: this.height
      });
      if (canvas) {
        if (this.children && this.children.length) {
          this.children.map((child) => {
            if (child.fabric) {
              // ToDo: Report Bug
              child.fabric.setHeight(child.height);
              canvas.add(child.fabric);
            }
          });
        }
        this.fabric = canvas;
      }
    }
  }


  /**
   * Wrapper class for the fabric.Image.
   * @see http://fabricjs.com/docs/fabric.Image.html
   */
  class Image extends Base {
    config() {
      return {
        el: null,
        hook: null,
        autoBind: false,
        width: 100,
        height: 200
      }
    }
    constructor(config = null) {
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
      if (this.el) {
        let image = new fabric.Image(this.el, {
          width: this.width
        });
        this.fabric = image;
        if (this.autoBind) {
          this.bind();
        }
      }
    }
  }


  class Photo extends Base {
    get config() {
      return {
        url: '',
        title: '',
        width: '0',
        height: '0',
        json: null
      }
    }
    constructor(config = null) {
      super();
      if (config) {
        this.apply(this, config, this.config);
      }
      this.init();
    }
    init() {
      let title = this.json && this.json.hasOwnProperty('title') ? this.json.title : '',
        mediaGroup = this.json && this.json.hasOwnProperty('media:group') ? this.json['media:group'] : null,
        mediaContent = mediaGroup && mediaGroup.hasOwnProperty('media:content') ? mediaGroup['media:content'] : null,
        content = mediaContent && mediaContent.hasOwnProperty('$') ? mediaContent['$'] : null;
      if (content) {
        this.title = title;
        this.url = content.hasOwnProperty('url') ? content.url : '';
        this.width = content.hasOwnProperty('width') ? content.width : '0';
        this.height = content.hasOwnProperty('height') ? content.height : '0';
      }
    }
  }


  app.controller = app.controller || {
      onDOMContentLoaded: function() {
        console.log("%c" + app.metadata.consoleTag, 'font-style: italic; font-size: 20px;');
        console.log("%c" + app.metadata.gitHubUrl, "color: blue; font-style: italic; text-decoration: underline; background-color: #FFFF00;");
        this.init();
      },
      init: function() {
        /**
         * (4) Create an SVG element
         * (5) Inject the Image collection (3) into the SVG element
         * (6) Render (bind) the SVG element via shadow dom
         *
         *  cx: app.util.rand(0, $("#fiddleHook").width()),
         cy: app.util.rand(0, $("#fiddleHook").height()),
         */
        let canvas = new Canvas({
          hook: 'fiddle',
          width: window.innerWidth,
          height: window.innerHeight
        });
        fabric.Image.fromURL('test.jpg', function(oImg) {
          oImg.setWidth(100);
          oImg.setHeight(200);
          canvas.fabric.add(oImg);
        });
      }
    };
  document.addEventListener('onload', app.controller.onDOMContentLoaded(), false);
})(window.app = window.app || {})
