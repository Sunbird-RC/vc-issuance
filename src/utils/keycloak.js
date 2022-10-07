import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
    url: 'https://sunbirdrc-sandbox.xiv.in/auth',
    realm: 'sunbird-rc',
    clientId: 'sandbox',
});

export default keycloak;