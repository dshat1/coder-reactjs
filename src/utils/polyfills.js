// Polyfill del método map
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      if (this == null) {
        throw new TypeError('Array.prototype.myMap llamado en null o undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' no es una función');
      }
  
      const newArray = [];
      for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
          newArray.push(callback(this[i], i, this));
        }
      }
      return newArray;
    };
  }
  // Polyfill del método filter
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
      if (this == null) {
        throw new TypeError('Array.prototype.myFilter llamado en null o undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' no es una función');
      }
  
      const filteredArray = [];
      for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
          filteredArray.push(this[i]);
        }
      }
      return filteredArray;
    };
  }
  