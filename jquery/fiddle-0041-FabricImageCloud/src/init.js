app.controller = app.controller || {
    onDOMContentLoaded: function () {
      console.log("%c" + app.metadata.consoleTag, 'font-style: italic; font-size: 20px;');
      console.log("%c" + app.metadata.gitHubUrl, "color: blue; font-style: italic; text-decoration: underline; background-color: #FFFF00;");
      $(document).load(app.metadata.dataUrl);
      $(document).ajaxComplete(this.onAjaxComplete);
      //app.controller.init();
    },
    onAjaxComplete: function (event, xhr, settings) {
      if (settings.url === app.metadata.dataUrl) {
        app.model.PhotoAlbum = new PhotoAlbum({
          json: JSON.parse(xhr.responseText)
        });
        window.setTimeout(() => {
          app.controller.init();
        }, 500);
      }
    },
    init: function () {

      let objects = [],
        center = {
          x: $(document).width() / 2,
          y: $(document).height() / 2,
        };

      app.model.PhotoAlbum.children.map((photo, index) => {
        let radius = $(document).width() < $(document).height() ? $(document).width() / 2 : $(document).height() / 2,
          randX = Util.rand(0, $(document).width()),
          randY = Util.rand(0, $(document).height()),
          dur = Util.rand(120, 240) + 's',
          circularPathArr = Util.toCircularPointArray(randX, randY, radius),
          startingIndex = Util.rand(0, circularPathArr.length - 1),
          startingPoint = circularPathArr[startingIndex];


        objects.push(new Image({
          id: photo.title,
          width: objects.length % 4 === 0 ? Math.floor((+photo.width) / 4) : Math.floor((+photo.width) / 6),
          height: objects.length % 4 === 0 ? Math.floor((+photo.height) / 4) : Math.floor((+photo.height) / 6),
          left: startingPoint.x,
          top: startingPoint.y,
          url: photo.url,
          onImageLoad: app.controller.onImageLoad
        }));
      });

      app.controller.canvas = new Canvas({
        hook: 'fiddle',
        width: window.innerWidth,
        height: window.innerHeight,
        children: objects
      });
    },

    onImageLoad: function(image) {
      if (app.controller.canvas) {
        app.controller.canvas.fabric.add(image);
      }
    }

  };

document.addEventListener('onload', app.controller.onDOMContentLoaded(), false);



