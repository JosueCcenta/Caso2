---
sidebar_position: 1
---

# Getting Started

## Descripcion

Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya esté configurado hacia la instancia), su ejecución es muy sencilla.


Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### Requisitos previos

1.  Tener acceso a su servidor, vps, máquina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local.
    
2.  Tener instalado una versión de ssh en su máquina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor información sobre el acceso SSH visite los siguientes manuales:
    

>[Guía para acceder con Putty (gestión de servidor)](https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#)

>[Guía para acceder con Winscp (gestión de archivos con aplicación de escritorio)](https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#)

3.  Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalación se encuentre disponible el aplicativo. Edite los récords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta.

> :warning: **Requisitos previos obligatorios para el buen funcionamiento del sistema**

![Imagen de configuracion](https://lh7-us.googleusercontent.com/ARgPelvASqFD0syjMYc5ckjcq6F7SraMbng8ellNFQY_a1eu6qunHIZSnu1pUwBvwNNEHSeantbMNmTzkJUfBH4nF-23XiBvr5x9pWxeRGZKWGZ7ChQ-bbqUssKPxufv4iup3bP6SdMrO8jPknWjGQ)

4.  En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasarán a usar el aplicativo con los contenedores de Docker

```bash
npm init docusaurus@latest my-website classic
```

```bash
cd my-website
npm run start
```