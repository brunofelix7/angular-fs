// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  /* Dados de acesso ao Firebase */
  firebase:{
    apiKey: "AIzaSyDMx1TaIyyYCNv-woEeKlhNR8d9R7a0Tr0",
    authDomain: "angular-fs-d085d.firebaseapp.com",
    databaseURL: "https://angular-fs-d085d.firebaseio.com",
    projectId: "angular-fs-d085d",
    storageBucket: "angular-fs-d085d.appspot.com",
    messagingSenderId: "1030077435959"
  }
  
};
