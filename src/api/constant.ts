export const API_PATH = {
  // Auth
  AUTH_LOGIN: '/auth/login',

  FEED_BACK_USER: '/api/v1/configs/feedback-forms',


  SUBCRIBLE_USER: (email: string) => `/api/v1/users/subcrible/${email}`,

};
