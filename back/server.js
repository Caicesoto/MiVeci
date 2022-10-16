const app=require("app")

//setear el archivo de configuracion
const dotenv=requiere("dotenv");


const server=app.listen(process.env.PORT,() => { 
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.PORT}`)
})
