# PassioFoodCatalog

PassioFoodCatalog - JavaScript client for PassioFoodCatalog
Welcome to the [Passiolife](https://www.passiolife.com) Food Catalog API.  The Passiolife Catalog API is organized around the [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)  methodology, and it uses resource-oriented URLs, and common HTTP response codes to indicate API errors.  All requests are authenticated using an `api-key` which can be obtained by signing up.  
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.2-beta
- Package version: 0.2-beta
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install PassioFoodCatalog --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PassioFoodCatalog = require('PassioFoodCatalog');

var defaultClient = PassioFoodCatalog.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['key'] = "Token"

var api = new PassioFoodCatalog.DefaultApi()

var body = new PassioFoodCatalog.ClassifyRequest(); // {ClassifyRequest} The image to analyze base64 encoded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.classifyMedia(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://foodcatalog-api-dot-bpiproject-145417.appspot.com/beta*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PassioFoodCatalog.DefaultApi* | [**classifyMedia**](docs/DefaultApi.md#classifyMedia) | **POST** /classify | Classify an Image
*PassioFoodCatalog.DefaultApi* | [**feedback**](docs/DefaultApi.md#feedback) | **POST** /feedback | Provides feedback on the generated classification


## Documentation for Models

 - [PassioFoodCatalog.ClassifyRequest](docs/ClassifyRequest.md)
 - [PassioFoodCatalog.ClassifyResponse](docs/ClassifyResponse.md)
 - [PassioFoodCatalog.EndpointError](docs/EndpointError.md)
 - [PassioFoodCatalog.FeedbackRequest](docs/FeedbackRequest.md)
 - [PassioFoodCatalog.Label](docs/Label.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string

