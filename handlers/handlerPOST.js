'use strict';


module.exports.servicioPOST = async(event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  var timestamp = new Date().getTime();
  const  body = JSON.parse(event.body);
  var fecha = timestamp;
  var nombre = body.nombre;
  var apellido = body.apellido;
  var numero = body.numero || null;

  if(numero === null || numero === undefined || numero === 0 || isNaN(numero) === true ){
    callback(null,{
      statusCode: 400,
      headers: { 
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({
        success: false,  
        message: `hay un error en el numero= ${numero}`
      })
    })
  } else {
    numero = numero * 100
    callback(null, {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          message: `este es un POST exitoso` ,
          data: {
            fecha,
            nombre,
            apellido,
            numero
          }
        },
        
      ),
    });
  }

  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};