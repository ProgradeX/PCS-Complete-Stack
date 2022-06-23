var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');


async function getTableInfo(){
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'Accounts'")
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

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

module.exports = {
    getTableData : getTableData,
    getTableInfo : getTableInfo
};