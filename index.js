require('dotenv').config()
const http = require('http')

// 1. Agregamos los parámetros 'req' (petición) y 'res' (respuesta)
function requestController(req, res) {
    console.log('¡Nueva visita recibida!')
    
    // 2. Le decimos al navegador que todo está OK (200) y que enviaremos texto
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    
    // 3. ¡ESTO ES LO MÁS IMPORTANTE! 
    // Sin res.end(), el navegador se queda esperando para siempre.
    res.end('¡Hola! El servidor respondió correctamente. Bienvenidos al curso.')
}

const server = http.createServer(requestController)

// 4. Agregamos un respaldo (|| 3000) por si el .env falla
const PORT = process.env.PORT || 3000

// 5. Agregamos '0.0.0.0' para que Render pueda encontrar el puerto fácilmente
server.listen(PORT, '0.0.0.0', function() {
    console.log("Aplicacion corriendo en el puerto: " + PORT)
})