import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'angular',
        clientId: 'angular'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { KeycloakService } from 'keycloak-angular';
//
// export function initializer(keycloak: KeycloakService): () => Promise<any> {
//   return (): Promise<any> => keycloak.init({
//     config: {
//       url: 'http://localhost:8080/auth',
//       realm: 'your-realm',
//       clientId: 'client-id'
//     },
//     initOptions: {
//       onLoad: 'login-required',
//       checkLoginIframe: false
//     },
//     enableBearerInterceptor: true,
//     bearerPrefix: 'Bearer',
//     bearerExcludedUrls: [
//       '/assets',
//       '/clients/public']
//   });
// }
