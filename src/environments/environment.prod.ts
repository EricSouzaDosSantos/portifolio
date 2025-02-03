export const environment = {
  production: true,
  emailjs: {
    service_id: process.env['EMAILJS_SERVICE_ID'] || '',
    template_id: process.env['EMAILJS_TEMPLATE_ID'] || '',
    user_id: process.env['EMAILJS_USER_ID'] || '',
  },
};