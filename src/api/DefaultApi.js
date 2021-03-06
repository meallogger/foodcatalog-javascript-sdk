/**
 * Passio Food Catalog API
 * Welcome to the [Passiolife](https://www.passiolife.com) Food Catalog API.  The Passiolife Catalog API is organized around the [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)  methodology, and it uses resource-oriented URLs, and common HTTP response codes to indicate API errors.  All requests are authenticated using an `api-key` which can be obtained by signing up.  
 *
 * OpenAPI spec version: 0.2-beta
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClassifyRequest', 'model/ClassifyResponse', 'model/EndpointError', 'model/FeedbackRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClassifyRequest'), require('../model/ClassifyResponse'), require('../model/EndpointError'), require('../model/FeedbackRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.PassioFoodCatalog) {
      root.PassioFoodCatalog = {};
    }
    root.PassioFoodCatalog.DefaultApi = factory(root.PassioFoodCatalog.ApiClient, root.PassioFoodCatalog.ClassifyRequest, root.PassioFoodCatalog.ClassifyResponse, root.PassioFoodCatalog.EndpointError, root.PassioFoodCatalog.FeedbackRequest);
  }
}(this, function(ApiClient, ClassifyRequest, ClassifyResponse, EndpointError, FeedbackRequest) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 0.2-beta
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the classifyMedia operation.
     * @callback module:api/DefaultApi~classifyMediaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClassifyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Classify an Image
     * Classify a given image. 
     * @param {module:model/ClassifyRequest} body The image to analyze base64 encoded
     * @param {module:api/DefaultApi~classifyMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClassifyResponse}
     */
    this.classifyMedia = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling classifyMedia");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClassifyResponse;

      return this.apiClient.callApi(
        '/classify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the feedback operation.
     * @callback module:api/DefaultApi~feedbackCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides feedback on the generated classification
     * A client can optionally decide to send feedback on the final result chosen by the user. 
     * @param {module:model/FeedbackRequest} body The media to analyze base64 encoded
     * @param {module:api/DefaultApi~feedbackCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.feedback = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling feedback");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/feedback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
