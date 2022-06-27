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

async function getCPUdata(){
  try{
      let pool = await sql.connect(config);
      let products = await pool.request().query("SELECT cpu_id, cpu_name, cpu_price, cpu_cores, cpu_threads, cpu_speed FROM Part_cpu")
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
    .query("SELECT * from Part_cpu where cpu_id = @input_parameter");
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
    .query("SELECT * from Part_cooler where cooler_id = @input_parameter");
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
      .query("SELECT * from Part_ram where ram_id = @input_parameter");
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
      .query("SELECT * from Part_psu where psu_id = @input_parameter");
      return product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }


module.exports = {
    getTableData : getTableData,
    getCPUdata : getCPUdata,
    getOneCPUdata : getOneCPUdata,
    getCoolerdata : getCoolerdata,
    getOneCoolerdata : getOneCoolerdata,
    getMEMdata : getMEMdata,
    getOneMEMdata : getOneMEMdata,
    getPSUdata : getPSUdata,
    getOnePSUdata : getOnePSUdata
};