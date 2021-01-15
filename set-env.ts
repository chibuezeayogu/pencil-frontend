const colors = require('colors');
const writeFile =require('fs').writeFile;
require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
  apiKey: '${process.env.APIKEY}',
  authDomain: '${process.env.AUTHDOMAIN}',
  projectId: '${process.env.PROJECTID}',
  storageBucket: '${process.env.STORAGEBUCKET}',
  messagingSenderId: '${process.env.MESSAGESENDERID}',
  appId: '${process.env.APPID}',
  measurementId:'${process.env.MEASUREMENTID}',
  production: ${process.env.PRODUCTION},
}
`

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));

writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    throw console.log(err.message);
  } else {
    console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
  }
});
