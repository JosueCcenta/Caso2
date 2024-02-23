---
sidebar_position: 3
---

# Cuenta y recomendaciones

En esta seccion se termino con la actualizacion del sistema, se ingresaran las credenciales de gitlab para tener el repositorio remoto. 

Continuará el proceso de actualización del sistema, se le solicitará el usuario y contraseña de GitLab, para que se pueda clonar/descargar el proyecto en su instancia, luego culminará y tendrá los accesos listos en su dominio:
    ___
	***Correo: admin@gmail.com***

    ***Contraseña: 123456***
    ___


Una vez finalizado, puede proseguir con el manual de pruebas o demás documentación de cada proyecto, sus URL son:
    ___
    ***PRO1:
    https://gitlab.com/rash07/facturadorpro1***

    ***PRO2:
    https://gitlab.com/rash07/facturadorpro2***
    ___

Recomendaciones

*   Luego de instalar el facturador puede cambiar algunos parámetros en el archivo .env como:
    *   La dirección de envío de correos que utiliza el facturador para enviar los archivos pdf, xml y cdr a sus clientes
    *   Cambiar algunas configuraciones de plantillas de los pdf
    *   Entre otros.
*   Recuerde que siempre que se edita el archivo .env debe utilizar el comando “php artisan config:cache” dentro del contenedor de fpm1, para más detalles puede observar el manual de actualización [aqui](https://docs.google.com/document/d/11PI1a9yjCPfH9CCuWmJSrdj1V8IEUffqurqvdkw29co/edit?usp=sharing). 
*   La ruta donde ejecute el script será donde se clone el repositorio, debe verificar que los usuarios del servidor tengan permisos a dicha ruta si desea acceder desde ftp o scp.
