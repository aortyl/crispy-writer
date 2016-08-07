import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, environment} from './app/';
import {appRouterProviders} from './app/app.routes';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    FIREBASE_PROVIDERS,
    // Initialize Firebase app
    defaultFirebase({
        apiKey: "AIzaSyD16CS8u7faSGfQqxYQcElkK5jBw9DgUWA",
        authDomain: "crispycorpse-cc58e.firebaseapp.com",
        databaseURL: "https://crispycorpse-cc58e.firebaseio.com",
        storageBucket: "crispycorpse-cc58e.appspot.com"
    }),
    appRouterProviders
]);

