---
sidebar_position: 2
---

# Pasos completos

Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto.
 
Detener servicios de apache2 si lo tienes instalado.
·         services apache2 stop
 
Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet.
·         Apt install nginx
 
Verificar que el servidor de nginx se está ejecutando correctamente
·         Systemctl status nginx
 
Si todo está ok instalar valet
·         Valet install
 
Con valet podemos tener nuestro código en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo.
·         Mkdir ~/code
·         cd code
·         valet park
 
Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:

git clone https://gitlab.com/b.mendoza/facturadorpro3.git
 
Esto creará una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env
·         cp .env.example .env

Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE será el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalación de mysql.
 
Seguidamente:
·         php artisan key:generate
·         composer dump-autoload
 
Luego deberá registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contraseña agregada en la instalación.
 
Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones.
·         composer install
·         php artisan migrate --seed
 
Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrará la base de datos creada y la derecha las tablas generadas.
 
Con estos pasos podrá observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando
·         chmod -R 755 storage
·         chmod -R 755 bootstrap/cache
 
También es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa
·         php artisan storage:link
 
Si todo se realizó correctamente, ya tendrá las tablas del usuario principal creadas, y podrá acceder mediante la web, al proyecto.
Accesos:
·         Facturadorpro3.test
·         usuario: admin@gmail.com
contraseña: 123456
