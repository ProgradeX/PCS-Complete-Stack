const  config = {
    server:  '192.168.18.12', // if it does not work try- localhost
    database:  'PCS',

    user:'prograde',
    password:'bruh',
    driver: "msnodesqlv8",

    options: {
      //trustedconnection:  true,
      trustServerCertificate: true,
      enableArithAbort:  true,
      instancename:  'CODECRACKER-500'  // SQL Server instance name
    },
    port: 1433
  }
  
  module.exports = config;
  