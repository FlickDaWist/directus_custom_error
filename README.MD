## Custom Directus Data Flow Error

By default when throwing an error through script in Directus Flows return 500 INTERNAL_SERVER_ERROR. With this extension we could customize not only the error message but also the HTTP Code and Error Code for Directus to handle later.

The extension available in flows operator and expecting inputs as follow.
- Error Code : refer to this value https://docs.directus.io/reference/introduction.html#error-codes, example : 'FORBIDDEN'
- Messagae : your desired error messages
- Status Code : your desired HTTP Status code

## Previews

Directus Flow Operations Name : Throw Custom Error
![flow](https://raw.githubusercontent.com/FlickDaWist/directus_custom_error/refs/heads/main/screenshots/flow_operation.png)

![flow](https://raw.githubusercontent.com/FlickDaWist/directus_custom_error/refs/heads/main/screenshots/flow.png)

Result on api response
![flow](https://raw.githubusercontent.com/FlickDaWist/directus_custom_error/refs/heads/main/screenshots/result_in_api_response.png)

Result on Direcuts app popup message
![flow](https://raw.githubusercontent.com/FlickDaWist/directus_custom_error/refs/heads/main/screenshots/result_in_app.png)
