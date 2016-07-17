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
    var rgb = "#", c, i;
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
   * Utility Method that can be used to convert an angle
   * to it's radian equivalent.
   * @param angle
   * @returns {number}
   */
  static convertToRadians(angle) {
    return angle * (Math.PI / 180);
  }

}

