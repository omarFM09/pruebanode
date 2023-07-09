const swaggerJsdoc = require("swagger-jsdoc");

/**
 * Api config info
 */

const swaggerDefinition = {
    openapi: "3.0.0",
    info:{
        title: "Documentación Api AWS",
        version: "1.0.0"
    },
    servers:[
        {
            url:"http://localhost:3000/api"
        }
    ]
}

/**
 * Opciones
 */

const options = {
    swaggerDefinition,
    apis:[
        "./handlers/*.js"
    ]
}

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration