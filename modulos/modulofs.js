//sistema de archivos - file system
//modulo que contiene funcionalidad muy util para trabajar con el sistema de archvos
//OPERACIONES UTILES: leer, modificar, copiar, eliminar, cambiar de nombre a un archivo
//asincrono por defecto
//pero puedes escoger versiones de estos metodos agregando "Sync" (sincrono) a us nombres

const { fstat } = require("fs");
const fs = require('fs')

        //LEER CONTENIDO DE UN ARCHIVO
//fs.readFile('index.html', 'utf8', (err, contenido)=> {
   // if (err){
      //  console.log(err)
   // } else {
       // console.log(contenido)
   // }
    //no esta dentro de la condicional por lo tanto esto si se muestra
   // console.log('mensaje...')
//})


         //CAMBIAR NOMBRE DE UN ARCHIVO
  //fs.rename('index fs.html','main.html', (err) => {
    //if (err){
      //  throw err
    //}
    //console.log('Nombre cambiado exitosamente')
  //})


        //AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO 
//fs.appendFile('main.html', '<p>Hola</p>',(err) =>{
  //  if (err){
    //    throw err
    //}
    //console.log('Archivo actualizado')
//})


        //REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO
//         fs.writeFile('main.html', 'bañate, no lo voy a cambiar',(err) =>{
//     if (err){
//         throw err
//     }
//     console.log('Archivo actualizado nuevo contenido')
// })


         //ELIMINAR ARCHIVOS
fs.unlink('siu.html', (err) =>{
  if (err){
    throw err
  }
  console.log('ARCHIVO ELIMINADO')
} )