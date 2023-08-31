(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-client-server-models'] = factory(typeof this['kobweb-client-server-models'] === 'undefined' ? {} : this['kobweb-client-server-models']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
