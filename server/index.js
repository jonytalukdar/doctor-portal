const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.shsop.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    name: 'JOney talukdar',
  });
});

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const appointmentCollection = client
    .db('doctorPortal')
    .collection('appointment');

  app.get('/appointments', (req, res) => {
    appointmentCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  app.post('/addAppointment', (req, res) => {
    const appointment = req.body;
    console.log(appointment);
    appointmentCollection.insertOne(appointment).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });

  app.post('/appointmentsByDate', (req, res) => {
    const date = req.body;
    console.log(date.date);
    appointmentCollection
      .find({ date: date.date })
      .toArray((err, documents) => {
        res.send(documents);
      });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('The Server Started'));
