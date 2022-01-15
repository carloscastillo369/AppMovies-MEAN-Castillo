<p align="center">
  <p align="center">
      <img src="/src/bin/assets/images/logo/Logo-White.png" alt="" height="72">
  </p>
  <p align="center">
    HomeMovie
  </p>
</p>

## Descripción

_Es un app-demo para comprar y/o alquilar películas, se puede ingresar como cliente o administrador (con atorización). El cliente una vez registrado y logueado, podrá comprar, rentar, ver su perfil y sus pedidos de compra. El administrador una vez logueado tendrá el control de las películas (ver, modificar, crear, eliminar) y ver los pedidos de compra o renta de los clientes._

## Comenzando 🚀

_Para ver la navegabilidad de este proyecto puedes ingresar al siguiente enlace <https://homemovie.herokuapp.com>._

_Para ejecutar el app de manera local sigue las instrucciones de **Instalación**_

### Pre-requisitos 📋

_Se necesita un editor de código fuente como:_

```
VsCode o Sublime
```

### Instalación 🔧

_Clone or download este repositorio y abrelo en tu editor de código. En un terminal (mac/linux) o terminal de Windows, ejecuta el siguiente comando en el directorio /server y en el directorio /client._

```
npm install
```

_Una vez culminada la instalacón, en el directorio /server puedes correr el proyecto ejecutando este comando._

```
npm start
```

_La consola mostrará el puerto donde está corriendo el servidor._

```
http://localhost:8080
```

## Funcionamiento ⚙️

**Como cliente**
_El iniciar la app, el cliente deberá registrarse si ya está registrado entonces deberá logearse. La primera vez que se registre el cliente no necesitará logearse._

_Una vez logeado el cliente podrá observar la lista de péliculas disponibles, ver detalles de cada una de ella e ir agregandalas al carrito._

_En el icono del carrito se verá el número de items conforme se agregan las películas._

_Una vez el cliente termine la selección de películas que desea comprar o alquilar. En el carrito podrá ver una tabla con la lista de películas agregadas y podrá eliminar una o todas en caso lo desee, también podrá aumentar la cantidad de compra o el número de días que desea alquilar la película._

_Una vez conforme el cliente con las películas que desea comprar y alquilar, la cantidad y el tiempo, podrá ir a pagar. Aquí se le mostrará nuevamente la lista de películas agregadas que apartir de aquí será la orden del cliente. También se muestra la información personal del cliente._

_Confirmada la compra. Al cabo de unos segundos podra ir a su perfil y ver sus pedidos. Aquí aparecerá todos los pedidos que haya realizado._

**Como administrador**
_Se necesita un email y password de administrador._
_Una vez logeado el administrador podrá ver una tabla con las películas pre-agregadas. Aquí podrá crear otras nuevas, modificar las ya existentes o eliminarlas._

_En la pestaña pedidos, verá otra tabla con el nombre y correo del cliente que ha realizado el pedido y un boton para desplegar otra tabla con la información del pedido u orden que los clientes han realizado._

## Construido con 🛠️

_En este proyecto se utilizó lo siguiente:_

* Framework: [Angular](https://angular.io/)
* Dependencias: 
    + Backend:
        * [bcryptjs](https://www.npmjs.com/package/bcryptjs/) - Para función de hash de contraseña.
        * [cors](https://www.npmjs.com/package/cors) - Proporciona un middleware para conectar a Express.
        * [express](https://www.npmjs.com/package/express) - Framework para node.
        * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Para implementar JWT.
        * [mongoose](https://www.npmjs.com/package/mongoose) - Para modelar objetos de MongoDB.
        * [nodemon](https://www.npmjs.com/package/nodemon) - Para monitorear cambios de código.
    
    + Frontend:
        * [jwt-decode](https://www.npmjs.com/package/jwt-decode) - Para decodificar un JWT.
        * [bootstrap-icons](https://icons.getbootstrap.com/) - Para algunos iconos.
        * [rxjs](https://rxjs.dev/) - Librería para manejo de observables.
        * [Angular Material](https://material.angular.io/) - Para los estilos, animaciones y el responsive.
        * [SweetAlert2](https://sweetalert2.github.io/) - Para animaciones con popups.

* Base de Datos: [MongoDB-Atlas](https://www.mongodb.com/es/atlas) - Para la base de datos.

## Autor ✒️

* **Carlos Castillo** - *Desarrollador del Proyecto* - [carloscastillo369](https://github.com/carloscastillo369)