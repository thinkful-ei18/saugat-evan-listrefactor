'use strict';

const Item = (function (){
  let validateName = (name) => {
    if (!name) {
      throw new Error('Name does not exist');
    }
  };

  let create = (name) => {
    return {
      id:cuid(),
      name:name,
      checked:false
    };
  };
  return {
    validateName:validateName,
    create:create
  };
}());
