const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const dboperations = require('./dboperations');

//configurations
app.use('/api', router);
app.use(cors());

router.route('/accounts').get((request, response) => {
  dboperations.getTableInfo().then(result => {
      response.json(result[0]);
  })
})

router.route('/accounts/data/').get((request, response) => {
  dboperations.getTableData().then(result => {
      response.json(result[0]);
  })
})

//WHEN IT GETS /api/customers IT WILL RESPOND WITH THIS JSON DATA
app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);