var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');

async function getTableData(){
  try{
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * FROM Accounts")
    return products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async function InsertToDB(part) {
  try {
    let pool = await sql.connect(config);
    let insertProduct = await pool.request()
    .input('bacc', sql.Int, part)
    .input('bname', sql.VarChar, part.buildname)
    .input('bcost', sql.Int, part.buildcost)
    .input('bwatts', sql.Int, part.buildwatts)
    .input('bcpu', sql.Int, part.cpu)
    .input('bcooler', sql.Int, part.clr)
    .input('bmb', sql.Int, part.mb)
    .input('bram', sql.Int, part.ram)
    .input('bstorage', sql.Int, part.sto)
    .input('bgpu', sql.Int, part.gpu)
    .input('bcse', sql.Int, part.cse)
    .input('bpsu', sql.Int, part.psu)
    .execute('createbuild');
    console.log('data entering...') //debug
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log('error occoured: ', err);
  }
}


async function getCPUdata(){
  try{
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * FROM Part_cpu")
    return products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
async function getOneCPUdata(idee) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_cpu where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getCoolerdata(){
  try{
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * FROM Part_cooler")
    return products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
async function getOneCoolerdata(idee){
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_cooler where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getMBdata(){
  try{
      let pool = await sql.connect(config);
      let products = await pool.request().query("SELECT * FROM Part_mb")
      return products.recordsets;
  }
  catch (error) {
      console.log(error);
  }
}
async function getOneMBdata(idee){
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_mb where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getMEMdata(){
  try{
      let pool = await sql.connect(config);
      let products = await pool.request().query("SELECT * FROM Part_ram")
      return products.recordsets;
  }
  catch (error) {
      console.log(error);
  }
}
async function getOneMEMdata(idee) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_ram where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getStoragedata(){
  try{
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * FROM Part_storage")
    return products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
async function getOneStoragedata(idee){
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_storage where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getGPUdata(){
  try{
      let pool = await sql.connect(config);
      let products = await pool.request().query("SELECT * FROM Part_gpu")
      return products.recordsets;
  }
  catch (error) {
      console.log(error);
  }
}
async function getOneGPUdata(idee) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_gpu where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getCSEdata(){
  try{
      let pool = await sql.connect(config);
      let products = await pool.request().query("SELECT * FROM Part_cse")
      return products.recordsets;
  }
  catch (error) {
      console.log(error);
  }
}
async function getOneCSEdata(idee) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_cse where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


async function getPSUdata(){
  try{
      let pool = await sql.connect(config);
      let products = await pool.request().query("SELECT * FROM Part_psu")
      return products.recordsets;
  }
  catch (error) {
      console.log(error);
  }
}
async function getOnePSUdata(idee) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, idee)
    .query("SELECT * from Part_psu where pid = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


module.exports = {
    getTableData : getTableData,
    InsertToDB : InsertToDB,

    getCPUdata : getCPUdata,
    getOneCPUdata : getOneCPUdata,

    getCoolerdata : getCoolerdata,
    getOneCoolerdata : getOneCoolerdata,

    getMBdata : getMBdata,
    getOneMBdata : getOneMBdata,

    getMEMdata : getMEMdata,
    getOneMEMdata : getOneMEMdata,

    getStoragedata: getStoragedata,
    getOneStoragedata : getOneStoragedata,

    getGPUdata : getGPUdata,
    getOneGPUdata : getOneGPUdata,

    getCSEdata: getCSEdata,
    getOneCSEdata : getOneCSEdata,

    getPSUdata : getPSUdata,
    getOnePSUdata : getOnePSUdata
};