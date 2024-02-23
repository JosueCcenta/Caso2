---
sidebar_position: 2
---

# Configuración de actualización del sistema

"**Descripción**: Los siguientes pasos detallan las configuraciones necesarias durante el proceso de actualización del sistema, incluyendo la autenticación en GitLab, la elección de instalar SSL gratuito, y la configuración de claves SSH para actualizaciones automáticas, proporcionando instrucciones claras para cada opción."

1) Una vez ejecutados los comandos iniciales, iniciará el proceso de actualización del sistema, en el proceso se le solicitará:

	a.  El usuario y contraseña de GitLab, para que se pueda descargar el proyecto en su instancia
	    
	b.  Si desea instalar SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 días, el mensaje será el siguiente:
	  
	 ___
	***Instalar con SSL? (debe tener acceso al panel de su dominio para editar/agregar records TXT). si[s] no[n]***
	___

	* Deberá contestar con “s” o “n” para continuar
	    
	* Si selecciona SÍ, deberá contestar las siguientes preguntas con “y”, son 2 en total, seguidamente se le ofrecerá un código que debe añadir en un récord tipo TXT en su dominio quedando como _acme-challenge.example.com o simplemente _acme-challenge dependerá de su proveedor.

    ![Imagen de consola](https://lh7-us.googleusercontent.com/4ui6FDppQIcQ88Y1S3F9tR9sDf8buSrCpA-3YLSM8_aPOqyQdmwnfz9I9F8iBjYh44BVXuTDCmsSox_72143r6SulxxG0E-B53HAPy6QXNxyTNXCtpQo6W4_q6wIFmthLTdhaggubHh27e5X_VJ4Hw)

    * Para continuar presione enter, luego deberá repetir las acciones para añadir un segundo código y habrá finalizado la configuración, si el proceso es exitoso la ejecución del script continuará.
	
	c.  Si desea obtener y gestionar actualizaciones automáticas, deberá disponer de su sesión de gitlab al momento
	 ___
	***Configurar clave SSH para actualización automática? (requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]***
	___


	* Deberá contestar con “s” o “n” para continuar
	    
	* De seleccionar SÍ, al final del despliegue se le dará un extracto de texto que debe añadir a su configuración de gitlab

    ![Imagen ejemplo SSH](https://lh7-us.googleusercontent.com/1qcbS_8nsa7z1EmRUwFz50aJL0KtigqcN0J9IqgxAMXckgIN6YsoD0Cfi7tBhjRAH70C8zOo9U9vtWQqqmyKauRcYoAQYYMDU_K-QZE_v8zlxG5b_zwaYtQF62H8wPBYiL1ADhy2D7cIpOZns8P0YQ)