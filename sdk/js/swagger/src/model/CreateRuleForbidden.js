/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateRuleForbiddenBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateRuleForbiddenBody'));
  } else {
    // Browser globals (root is window)
    if (!root.OryOathkeeper) {
      root.OryOathkeeper = {};
    }
    root.OryOathkeeper.CreateRuleForbidden = factory(root.OryOathkeeper.ApiClient, root.OryOathkeeper.CreateRuleForbiddenBody);
  }
}(this, function(ApiClient, CreateRuleForbiddenBody) {
  'use strict';




  /**
   * The CreateRuleForbidden model module.
   * @module model/CreateRuleForbidden
   * @version Latest
   */

  /**
   * Constructs a new <code>CreateRuleForbidden</code>.
   * The standard error format
   * @alias module:model/CreateRuleForbidden
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CreateRuleForbidden</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateRuleForbidden} obj Optional instance to populate.
   * @return {module:model/CreateRuleForbidden} The populated <code>CreateRuleForbidden</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Payload')) {
        obj['Payload'] = CreateRuleForbiddenBody.constructFromObject(data['Payload']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CreateRuleForbiddenBody} Payload
   */
  exports.prototype['Payload'] = undefined;



  return exports;
}));

