// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBT28oIpie9-HB38rWo-UYjeKJYmmsihGs",
    authDomain: "angular-portfolio-e2cd6.firebaseapp.com",
    databaseURL: "https://angular-portfolio-e2cd6.firebaseio.com",
    projectId: "angular-portfolio-e2cd6",
    storageBucket: "angular-portfolio-e2cd6.appspot.com",
    messagingSenderId: "476113773047"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
