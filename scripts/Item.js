'use strict';

/* global cuid */

// eslint-disable-next-line no-unused-vars
const Item = (function() {
  function validateName(name) {
    if (!name) {
      throw new TypeError('Name does not exist.');
    }
  }
  function create(name) {
    const id = cuid();
    const checked = false;
    return {
      id,
      name,
      checked
    };
  }
  return {
    validateName,
    create
  };
}());