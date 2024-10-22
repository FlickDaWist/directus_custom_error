## Custom Directus Data Flow Error

By default when throwing an error through script in Directus Flows return 500 INTERNAL_SERVER_ERROR. With this extension we could customize not only the error message but also the HTTP Code and Error Code for Directus to handle later.

The extension will expect input as follow.
- Error Code : refer to this value https://docs.directus.io/reference/introduction.html#error-codes, example : 'FORBIDDEN'
- Messagae : your desired error messages
- Status Code : your desired HTTP Status code