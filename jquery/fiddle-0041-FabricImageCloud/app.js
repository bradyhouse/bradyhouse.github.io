(function(app) {
    "use strict";


    app.metadata = app.metadata || {
        consoleTag: 'H O U S E ~ f i d d l e s',
        gitHubUrl: 'https://github.com/bradyhouse/house/tree/master/fiddles/jquery/fiddle-0041-fabricImageCloud',
        dataUrl: 'data.json'
    };


    app.model = app.model || {};


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
        hasOwnMethod(method) {
            return typeof this[method] === 'function' ? true : false;
        }
    }


    class Util {
        /**
         * Static Method that can used to generate a
         * random html color code.
         *
         * @returns {string}
         */
        static color() {
                var hex = "#",
                    i = 0;
                for (; i < 6; i++) {
                    hex += Math.floor(Math.random() * 16).toString(16);
                }
                return hex;
            }
            /**
             * Static method that can be used to generate a random
             * number within a given range.
             *
             * @param lbound
             * @param ubound
             * @returns {number}
             */
        static rand(lbound, ubound) {
                return Math.floor(Math.random() * (ubound - lbound + 1)) + lbound;
            }
            /**
             * Collection of namespace strings used in the
             * creation of svg elements.
             *
             * @returns {{xmlns: string, xmlnsXLink: string, xmlnsEv: string}}
             */
        static xmlNamespaces() {
                return {
                    xmlns: 'http://www.w3.org/2000/svg',
                    xmlnsXLink: 'http://www.w3.org/1999/xlink',
                    xmlnsEv: 'http://www.w3.org/2001/xml-events'
                }
            }
            /**
             * Utility method that can be used to get a given attribute (field) from a given doc
             * element and split its value into a string array. If
             * the element does not have the requested attribute, then
             * the provided default value (valDef) is split and returned.
             *
             * @param field
             * @param id
             * @param valDef
             * @returns {Array}
             */
        static splitAttribute(field, id, valDef) {
                var docElement = document.getElementById(id);
                if (docElement && docElement.getAttribute(field)) {
                    return docElement.getAttribute(field).split(/[,\(\)]/);
                }
                return valDef.split(/[,\(\)]/);
            }
            /**
             * Utility method that can be used to "pop" a given parameter from
             * a given url.  NOTE - To get a query string parameter value, pass
             * in "location.search".
             *
             * @param parameter
             * @param url
             * @returns {string}
             */
        static mapFromQueryString(url, parameter) {
                var name = parameter.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
                    regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    value = regex.exec(url);
                return value === null ? "" : decodeURIComponent(value[1].replace(/\+/g, " "));
            }
            /**
             * Utility method that can be used to hide a given object.
             *
             * @param obj
             */
        static hide(obj) {
                obj.setAttribute('visibility', 'hidden');
            }
            /**
             * Utility method that can be used to darken a given hex color by
             * given percentage ("lum").  This method was
             * lifted from http://www.sitepoint.com/javascript-generate-lighter-darker-color/.
             *
             * @param hex
             * @param lum
             * @returns {string}
             */
        static darkenColor(hex, lum) {
                // validate hex string
                hex = String(hex).replace(/[^0-9a-f]/gi, '');
                if (hex.length < 6) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                }
                lum = lum || 0;
                // convert to decimal and change luminosity
                var rgb = "#",
                    c, i;
                for (i = 0; i < 3; i++) {
                    c = parseInt(hex.substr(i * 2, 2), 16);
                    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
                    rgb += ("00" + c).substr(c.length);
                }
                return rgb;
            }
            /**
             * Utility method that can be used to calculate a point
             * along the circumference of a circle. The method is based
             * on the established parametric equations (below).  It
             * returns an object containing the calculated x,y coordinates.
             *
             *  x = cx + r * cos(a)
             *  y = cy + r * sin(a)
             *
             * @param centerX
             * @param centerY
             * @param radius
             * @param angle
             * @returns {{x: number, y: number}}
             */
        static mapCircularPoint(centerX, centerY, radius, angle) {
                var coorX = 0,
                    coorY = 0;
                try {
                    coorX = Math.round(centerX + (radius * Math.cos(Util.convertToRadians(angle))));
                    coorY = Math.round(centerY + (radius * Math.sin(Util.convertToRadians(angle))));
                } catch (err) {
                    console.log(err.stackTrace);
                }
                return {
                    x: coorX,
                    y: coorY
                }
            }
            /**
             * Utility method used generate a "values" string containing
             * points along the circumference of a circle given the
             * coordinates points and the radius.
             *
             * @param centerX
             * @param centerY
             * @param radius
             * @param axis
             * @returns {string}
             */
        static mapCircularPath(centerX, centerY, radius, axis) {
                let _coor3pm = Util.mapCircularPoint(centerX, centerY, radius, 0),
                    _coor4pm = Util.mapCircularPoint(centerX, centerY, radius, 30),
                    _coor5pm = Util.mapCircularPoint(centerX, centerY, radius, 60),
                    _coor6pm = Util.mapCircularPoint(centerX, centerY, radius, 90),
                    _coor7pm = Util.mapCircularPoint(centerX, centerY, radius, 120),
                    _coor8pm = Util.mapCircularPoint(centerX, centerY, radius, 150),
                    _coor9pm = Util.mapCircularPoint(centerX, centerY, radius, 180),
                    _coor10pm = Util.mapCircularPoint(centerX, centerY, radius, 210),
                    _coor11pm = Util.mapCircularPoint(centerX, centerY, radius, 240),
                    _coor12am = Util.mapCircularPoint(centerX, centerY, radius, 270),
                    _coor1am = Util.mapCircularPoint(centerX, centerY, radius, 300),
                    _coor2am = Util.mapCircularPoint(centerX, centerY, radius, 330);
                return axis === 'x' || axis === 'y' ? _coor3pm[axis] + ';' +
                    _coor4pm[axis] + ';' +
                    _coor5pm[axis] + ';' +
                    _coor6pm[axis] + ';' +
                    _coor7pm[axis] + ';' +
                    _coor8pm[axis] + ';' +
                    _coor9pm[axis] + ';' +
                    _coor10pm[axis] + ';' +
                    _coor11pm[axis] + ';' +
                    _coor12am[axis] + ';' +
                    _coor1am[axis] + ';' +
                    _coor2am[axis] + ';' +
                    _coor3pm[axis] : '';
            }
            /**
             * Utility method used generate an array containing
             * points along the circumference of a circle given the
             * center coordinates and radius. The optional degrees
             * parameter can be used to set degree offset between
             * each point.  By default, it uses 30 degrees.
             *
             * @param centerX
             * @param centerY
             * @param radius
             * @param degrees (optional)
             * @returns {Array}
             */
        static toCircularPointArray(centerX, centerY, radius, degrees) {
                let coors = [],
                    angle = 0,
                    delta = degrees ? degrees : 30;
                while (angle <= 360) {
                    coors.push(Util.mapCircularPoint(centerX, centerY, radius, angle));
                    angle += delta;
                }
                return coors;
            }
            /**
             * Utility method that can be used to convert an Array {x,y} points
             * to a semicolon delimited string of either x or y values based
             * on the value of the axis parameter.
             * @param pointArray
             * @param axis
             * @returns {string}
             */
        static flattenToValues(pointArray, axis) {
            let path = '';
            if (pointArray.constructor === Array && pointArray.length) {
                if (pointArray[0].hasOwnProperty(axis)) {
                    pointArray.map((point, index) => {
                        path += point[axis];
                        if (index < (pointArray.length - 1)) {
                            path += ';';
                        }
                    });
                }
            }
            return path;
        }
        static reorderFrom(pointArray, startIndex) {
                var newArray = [],
                    startingPoint = {};
                if (pointArray.constructor === Array && startIndex < pointArray.length) {
                    startingPoint.x = pointArray[startIndex].x;
                    startingPoint.y = pointArray[startIndex].y;
                    newArray.push({
                        x: startingPoint.x,
                        y: startingPoint.y
                    });
                    // top
                    pointArray.map((point, index) => {
                        if (index > startIndex) {
                            newArray.push({
                                x: point.x,
                                y: point.y
                            })
                        }
                    });
                    // bottom
                    pointArray.map((point, index) => {
                        if (index < startIndex) {
                            newArray.push({
                                x: point.x,
                                y: point.y
                            })
                        }
                    });
                }
                return newArray;
            }
            /**
             * Utility method that can be used to pick a random
             * point along a circle given array of the points
             * that define its circumference.
             *
             * NOTE - This function was written to be used
             * in concert with the toCircularPointArray method.
             *
             * @param circularPointArr
             * @returns {{x: number, y: number}}
             */
        static pickRandomPoint(circularPointArr) {
                let coor = {
                        x: 0,
                        y: 0
                    },
                    index = 0;
                if (circularPointArr.constructor === Array) {
                    index = Util.rand(0, circularPointArr.length - 1);
                    coor = circularPointArr[index];
                }
                return coor;
            }
            /**
             * Utility Method that can be used to convert an angle
             * to it's radian equivalent.
             * @param angle
             * @returns {number}
             */
        static convertToRadians(angle) {
            return angle * (Math.PI / 180);
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
            let self = this;
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
        constructor(config) {
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


    class PhotoAlbum extends Base {
        get config() {
            return {
                json: null,
                children: []
            }
        }
        constructor(config) {
            super();
            if (config) {
                this.apply(this, config, this.config);
                this.init();
            }
        }
        init() {
            if (this.json) {
                if (this.json.rss) {
                    if (this.json.rss.channel) {
                        if (this.json.rss.channel.item) {
                            this.json.rss.channel.item.map((item) => {
                                this.children.push(new Photo({
                                    json: item
                                }))
                            });
                        }
                    }
                }
            }
        }
    }


    app.controller = app.controller || {
        onDOMContentLoaded: function() {
            try {
                console.log("%c" + app.metadata.consoleTag, 'font-style: italic; font-size: 20px;');
                console.log("%c" + app.metadata.gitHubUrl, "color: blue; font-style: italic; text-decoration: underline; background-color: #FFFF00;");
                $(document).load(app.metadata.dataUrl);
                $(document).ajaxComplete(this.onAjaxComplete);
            } catch (err) {
                document.write(JSON.stringify(err));
            }
        },
        onAjaxComplete: function(event, xhr, settings) {
            if (settings.url === app.metadata.dataUrl) {
                app.model.PhotoAlbum = new PhotoAlbum({
                    json: JSON.parse(xhr.responseText)
                });
                window.setTimeout(() => {
                    app.controller.init();
                }, 500);
            }
        },
        init: function() {
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
})(window.app = window.app || {})
