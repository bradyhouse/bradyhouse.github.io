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
