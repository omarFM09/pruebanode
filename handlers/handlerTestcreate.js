'use strict';

const pool = require('../connection')

module.exports.Testcreate = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);
  const sqlCreate = {
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
  const sql = "INSERT INTO planetas SET ? ;"
  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(sql, [sqlCreate], function(error, results){
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
            message: '¡Exito al insertar!',
            data: results
          })
        })
        connection.release();
      }
    })
  })
};
