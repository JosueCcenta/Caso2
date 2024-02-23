---
sidebar_position: 1
---

# Requisitos previos para implementar sobre Linux


Si desea implementar sobre un servidor local Linux “desde cero” debe:

*         Contar con acceso root
*         Instalar php 7.2 y todas las librerías requeridas por el aplicativo y Laravel
*         Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos
*         Instalar Git, Curl, Composer
 
Ubuntu no cuenta con la versión 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalación, ellos son

Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root:
	
    ```markdown
	apt-get update
	```

Para poder agregar un PPA, ejecute los siguientes:
    
    ```markdown
    apt-get install software-properties-common
    apt-get install python-software-properties
	```

Para agregar el PPA, en algunos casos solicitará confirmar con enter:

    ```markdown
    add-apt-repository ppa:ondrej/php    
    apt-get update
    ```              

Procedemos a Instalar PHP, aunque se instalar algunas librerías junto con PHP, se agregan para asegurar la instalación:

    ```markdown
    apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt
    ```  
 
Instalamos Mysql, phpmyadmin (opcional):

    ```markdown
    apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin
    ```  
 
Se le solicitara contraseña dos veces, con su confirmación, tanto para mysql como para phpmyadmin
 
Instalamos Curl y Git:

    ```markdown
    apt-get install git
    apt-get install curl
    ```  
 
Luego se procede a instalar Composer
    
    ```markdown
    apt-get install composer    
    ```           
 
Dar permisos de lectura y escritura a la carpeta composer
    
    ```markdown
    Chmod –R 777 ~/.composer
    ```       
 
Instalar librerias cpriego de Valet
    
    ```markdown
    composer global require cpriego/valet-linux
    ```  
 
Ir a carpeta `home /.profile` y añadir la siguiente linea al final del documento y guardar

    ```markdown
    Nano ~/.profile
    PATH= “HOME/.composer/vendor/bin:$PATH”    
    ```            
 
Luego ejecutar en terminal: 

    ```markdown
    source ~/.profile
    ```
 
Instalar las siguientes librerías

    ```markdown
    apt install network-maneger libnss3-tools jq xsel
    ```         
Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el puerto :80 . 

Favor de pasar a la siguiente pagina. 