---
sidebar_position: 1
---

# Primeros Pasos

## Primeros comandos para la configuración SSH

1.  Acceder a su instancia vía SSH.
    
2.  Loguearse como super usuario
	```markdown
	`sudo su`
	```
3.  Clonar el snippet de gitlab que contiene el script
	```markdown
	`git clone https://gitlab.com/snippets/2079063.git script`
	```
4.  Ingrese a la carpeta clonada
	```markdown
	`cd script`
	```
5.  Dar permisos de ejecución al script
	```markdown
	`chmod +x install.sh`
	```
6.  El comando a utilizar para iniciar el despliegue requiere de un parámetro principalmente:
    
	```markdown
	`./install.sh [dominio]`
	```
  Por ejemplo: 
  
  ```markdown
	`./install.sh facturador.pro`
	```