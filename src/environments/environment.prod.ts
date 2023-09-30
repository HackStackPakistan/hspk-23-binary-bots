// export const environment = {
//   firebase: {
//     projectId: 'cliper-e0430',
//     appId: '1:38674767213:web:51e8760d628a74554a8e64',
//     storageBucket: 'cliper-e0430.appspot.com',
//     apiKey: 'AIzaSyAzU9ebuXLGgmKP0NesYOMaISxgzL2YyCQ',
//     authDomain: 'cliper-e0430.firebaseapp.com',
//     messagingSenderId: '38674767213',
//   },
//   production:true
// };

export const environment = {
  firebase: {
    apiKey: import.meta.env['NG_APP_APIKEY'],
  authDomain: import.meta.env['NG_APP_AUTHDOMAIN'],
  projectId: import.meta.env['NG_APP_PROJECTID'],
  storageBucket: import.meta.env['NG_APP_STORAGEBUCKET'],
  messagingSenderId: import.meta.env['NG_APP_MSGSENDERID'],
  appId: import.meta.env['NG_APP_APPID']

  },
  production:true
};