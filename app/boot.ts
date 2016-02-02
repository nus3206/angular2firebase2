import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2/angularfire';

bootstrap(AppComponent, [FIREBASE_PROVIDERS, defaultFirebase('https://myUrl.firebaseio.com')]);

