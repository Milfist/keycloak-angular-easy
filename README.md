# keycloak-angular-easy
Entorno KeyCloak + PostgreSQL en docker-compose y Aplicación Angular. Arrancar y listo.


## Clonar y levantar
Solo necesitas seguir los siguientes pasos:

#### El entorno
- Clonar el repositorio.
- Levantar el docker-compose

#### Configuración
- Entrar en la consola de KeyCloak http://localhost:8080/auth  

![Consola de administración](/images/image1.jpg)

- El usuario es admin/password. Es el usuario administrador del realm "master". No debemos usar este realm para nuestras pruebas.
- Hay que crear un realm llamado "angular" (sin comillas)
- Dentro de ese realm, crear un client llamado "angular"
- Crear un usuario que utilizaremos cuando nos redirija a la pantalla de login.
- Levantar la app Angular


