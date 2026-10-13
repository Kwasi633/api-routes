/* global window, SwaggerUIBundle, SwaggerUIStandalonePreset */
window.addEventListener('load', function () {
  window.ui = SwaggerUIBundle({
    url: './openapi.yml',
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: 'StandaloneLayout',
    supportedSubmitMethods: [],
    persistAuthorization: false,
    validatorUrl: null,
  });
});
