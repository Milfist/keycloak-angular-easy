import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  userDetails: KeycloakProfile;

  title = 'angular-keycloak-demo';

  constructor(private keycloakService: KeycloakService) {}

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }

  /*async doLogout() {
    await this.keycloakService.logout();
  }*/
}
