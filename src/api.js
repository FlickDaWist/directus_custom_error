import { createError } from '@directus/errors';

export default {
  id: 'custom_error_yHp8thHPWX',
  handler: (options) => {
    const CustomError = createError(
      options.errorCode,
      options.message,
      options.statusCode,
    );

    throw new CustomError();
  },
};
