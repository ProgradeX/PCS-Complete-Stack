const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
const router = express.Router();
const dboperations = require('./dboperations');

//configurations
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api', router);
app.use(cors());

router.route('/accounts').get((request, response) => {
  dboperations.getTableData().then(result => {
      response.json(result[0]);
  })
})

router.route('/').get((request, response) => {
  response.json(null);
})

//TABLE DATA INSERT
router.route('/builds').post((request, response) => {
  let build = {...request.body}
  console.log(build)

  dboperations.InsertToDB(build).then(result => {
      response.status(201).json(result);
  })
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

//MOTHERBOARD DATA FETCH FROM API
router.route('/Motherboard').get((request, response) => {
  dboperations.getMBdata().then(result => {
      response.json(result[0]);
  })
})
router.route('/Motherboard/:id').get((request, response) => {
  dboperations.getOneMBdata(request.params.id).then(result => {
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

//STORAGE DATA FETCH FROM API
router.route('/Storage').get((request, response) => {
  dboperations.getStoragedata().then(result => {
      response.json(result[0]);
  })
})
router.route('/Storage/:id').get((request, response) => {
  dboperations.getOneStoragedata(request.params.id).then(result => {
      response.json(result[0]);
  })
})

//GPU DATA FETCH FROM API
router.route('/Video%20Card').get((request, response) => {
  dboperations.getGPUdata().then(result => {
      response.json(result[0]);
  })
})
router.route('/Video%20Card/:id').get((request, response) => {
  dboperations.getOneGPUdata(request.params.id).then(result => {
      response.json(result[0]);
  })
})

//CASING DATA FETCH FROM API
router.route('/Casing').get((request, response) => {
  dboperations.getCSEdata().then(result => {
      response.json(result[0]);
  })
})
router.route('/Casing/:id').get((request, response) => {
  dboperations.getOneCSEdata(request.params.id).then(result => {
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