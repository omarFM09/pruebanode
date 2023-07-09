'use strict';

const pool = require('../connection')

module.exports.Testselect = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const usuarioId = event.pathParameters.id;

  const sql = "SELECT * FROM planetas WHERE id = ? ;"
  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(sql, [usuarioId], function(error, results){
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
            message: '¡Exito al eliminar!',
            data: results
          })
        })
        connection.release();
      }
    })
  })
};
