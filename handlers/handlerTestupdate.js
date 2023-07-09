'use strict';

const pool = require('../connection')

module.exports.Testupdate = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const usuarioId = event.pathParameters.id;
  const body = JSON.parse(event.body);
  const sqlUpdate = {
    clima: body.clima,
    diametro: body.diametro,
    gravedad: body.gravedad,
    nombre: body.nombre,
    periodo_orbital: body.periodo_orbital,
    poblacion: body.poblacion,
    periodo_rotacion: body.periodo_rotacion,
    superficie_agua: body.superficie_agua,
    terreno: body.terreno,
    url: body.url
  };
  const sql = "UPDATE planetas SET ? WHERE id = ? ;"
  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(sql, [sqlUpdate,usuarioId], function(error, results){
      if(error){
        callback({
          statusCode:400,
          headers:{
            'Content-Type': 'application/json'
          },
          body: context.fail(JSON.stringify({
            success: false,
            message: error
          }))
        })
      }else{
        callback(null,{
          statusCode:200,
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            success: true,
            message: '¡Exito al actualizar!',
            data: results
          })
        })
        connection.release();
      }
    })
  })
};
