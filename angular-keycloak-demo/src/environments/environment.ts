import { KeycloakConfig } from 'keycloak-js';

// Add here your keycloak setup infos
const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'angular',
  clientId: 'angular'
};

export const environment = {
  production: false,
  keycloakConfig
};
