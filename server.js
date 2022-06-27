const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const dboperations = require('./dboperations');

//configurations
app.use('/api', router);
app.use(cors());

router.route('/accounts').get((request, response) => {
  dboperations.getTableData().then(result => {
      response.json(result[0]);
  })
})

router.route('/None').get((request, response) => {
  response.json(null);
})

//CPU DATA FETCH FROM API
router.route('/CPU').get((request, response) => {
  dboperations.getCPUdata().then(result => {
      response.json(result[0]);
  })
})
router.route('/CPU/:id').get((request, response) => {
  dboperations.getOneCPUdata(request.params.id).then(result => {
      response.json(result[0]);
  })
})

//COOLER DATA FETCH FROM API
router.route('/Cooler').get((request, response) => {
  dboperations.getCoolerdata().then(result => {
      response.json(result[0]);
  })
})
router.route('/Cooler/:id').get((request, response) => {
  dboperations.getOneCoolerdata(request.params.id).then(result => {
      response.json(result[0]);
  })
})

//MEMORY DATA FETCH FROM API
router.route('/Memory').get((request, response) => {
  dboperations.getMEMdata().then(result => {
      response.json(result[0]);
  })
})
router.route('/Memory/:id').get((request, response) => {
  dboperations.getOneMEMdata(request.params.id).then(result => {
      response.json(result[0]);
  })
})

//PSU DATA FETCH FROM API
router.route('/PSU').get((request, response) => {
  dboperations.getPSUdata().then(result => {
      response.json(result[0]);
  })
})
router.route('/PSU/:id').get((request, response) => {
  dboperations.getOnePSUdata(request.params.id).then(result => {
      response.json(result[0]);
  })
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);