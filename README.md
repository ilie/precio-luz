# Precio Luz
## _Web App para ver el precio de la luz en tiempo real_

Precio luz, es una PWA o progressive web app que se puede utilizar desde cualquier navegador o incluso se puede instalar en el móvil para ver el precio PVPC del kwh de la nueva tatrifa del mercado regulado 2.0TD.

## Caracteristicas

- Consulta el precio PVPC de la peninsula en la nueva tarifa 2.0TD
- Consulta el precio real de cada hora sin refrescar
- Precio en tiempo real
- Precios mínimos y máximos del día
- Gráfico de precios por hora
- Precio medio del día


## Technologias empleadas

El proyecto está desarrolado en javascript con React.js y utiliza algúnas dependencias:

- [ReactJS] - libreria JavaScript para crear interfaces de usuario
- [Apexcharts] - libreria opensource para crear gráficos modernos e interactivos
- [Axios] - cliente http para node.js.

## Installación

Esta app necesita [Node.js](https://nodejs.org/) v10+ para funcionar.

Instala todas las dependecias y inicia el servidor.

```sh
npm install
npm start
```

Para ptoducción...

```sh
npm run build
```
copiar el contenido de la carpeta build en cualquier tipo de servidor web, no hace falta que tenga instalado node.js



## Uso
Para poder utilizarla es necesario tener un token Sios de la red eléctrica de España, que se puede solicitar por correo electrónico de forma gratuita a esta dirección: consultasios@ree.es

No es necesario refrescar ya que la app se encarga sola de realizar peticiones a la api para obener los datos actualizados y mostrar el precio de la hora en la que estámos.

## Enlace a la app en producción
Si quieres utilizarla sin más accede a https://precioluz.vercel.app e introduce tu token. Tambien la puedes instalar como una PWA.
