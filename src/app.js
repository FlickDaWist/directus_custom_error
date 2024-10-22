export default {
  id: 'custom_error_yHp8thHPWX',
  name: 'Throw Custom Error',
  icon: 'assignment_late',
  description: 'Throw custom error on Directus Flow',
  overview: () => [
    {
      label: 'Throw Custom Error',
      text: 'Throw Custom Error',
    },
  ],
  options: [
    {
      field: 'errorCode',
      name: 'Error Code',
      type: 'string',
      meta: {
        width: 'full',
        interface: 'input',
      },
    },
    {
      field: 'message',
      name: 'Message',
      type: 'string',
      meta: {
        width: 'full',
        interface: 'input',
      },
    },
    {
      field: 'statusCode',
      name: 'Status Code',
      type: 'number',
      meta: {
        width: 'full',
        interface: 'input',
      },
    },
  ],
};
