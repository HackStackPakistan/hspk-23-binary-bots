

export const environment = {
  firebase: {
    apiKey: import.meta.env['NG_APP_APIKEY'],
  authDomain: import.meta.env['NG_APP_AUTHDOMAIN'],
  projectId: import.meta.env['NG_APP_PROJECTID'],
  storageBucket: import.meta.env['NG_APP_STORAGEBUCKET'],
  messagingSenderId: import.meta.env['NG_APP_MSGSENDERID'],
  appId: import.meta.env['NG_APP_APPID']
  },
  production:false
};