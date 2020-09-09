# keycloak-angular-easy
Entorno KeyCloak + PostgreSQL en docker-compose y Aplicación Angular. Arrancar y listo.


## Clonar y levantar
Solo necesitas seguir los siguientes pasos:

#### El entorno

**Tenemos 3 piezas que podemos levantar:**
- KeyCloak con su PostgreSQL (8080)
- App Angular (4200)
- Servicio SpringBoot (8081)

**Pasos a seguir**
- Clonar el repositorio.
- Levantar el docker-compose

``docker compose up -d``

- Levantar la app Angular. Dentro de la carpeta **angular-keycloak-demo**

``npm run start``

- Levantar el servicio SpringBoot. Dentro de la carpeta **springboot-service**

```

mvn clean package

java -jar target/springboot-service-0.0.1-SNAPSHOT.jar


```

#### Configuración
- Entrar en la consola de KeyCloak http://localhost:8080/auth  

![Consola de administración](/images/image1.jpg)

- El usuario es **admin/password**. Es el usuario administrador del realm "master". No debemos usar este realm para nuestras pruebas.
- Hay que crear un realm llamado "angular" (sin comillas)
- Dentro de ese realm, crear un client llamado "angular"
- Crear un usuario que utilizaremos cuando nos redirija a la pantalla de login.
- Levantar la app Angular

![Configuración de App Angular](/images/Angular_config.png)

#### Servicios SpringBoot

Se incluye un servicio SpringBoot que se puede configurar con el mismo realm para acceder a él con un token de la app Angular:

- Crea un nuevo client, como se muestra en la imagen.
![Configuración de Seervicio SpringBoot](/images/SpringBoot_config.png) 
- Levanta el servicio SpringBoot.
- Solicita un token a KeyCloak con Postman como se muestra en la captura 
![Ejemplo de llamada con Postman](/images/postman.png)
- Utiliza el token para llamar al servicio
![Ejemplo de llamada](/images/llamada.png)  

