import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify ,{Auth} from 'aws-amplify';
import '@angular/compiler';
import amplify from './aws-exports';
Amplify.configure(amplify);
const oauth = {
  domain : 'schoolweb.auth.us-east-1.amazoncognito.com', 

  scope : ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'], 

  redirectSignIn : 'http://localhost:4200/user/', 

  redirectSignOut : 'http://localhost:4200/',

  responseType: 'code',

  options: {
      AdvancedSecurityDataCollectionFlag : true
  }
}
Amplify.configure({
      oauth: oauth
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
