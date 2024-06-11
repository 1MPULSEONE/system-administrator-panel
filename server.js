const express = require('express');
const ping = require('ping');
const { exec } = require('child_process');
const cors = require('cors')


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/ping', async (req, res) => {
  const { ip } = req.body;
  try {
    const result = await ping.promise.probe(ip);
    res.send(JSON.stringify({data:result}));
  } catch (error) {
    console.error('Error occurred during ping:', error);
    res.status(500).send('Error executing ping command');
  }
});

app.post('/trace', async (req, res) => {
  const target = req.body.target || 'google.com';

  let childProcess;

  try {
    childProcess = exec('tracert -h 1 ' + target);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
    return;
  }
  let result = '';

  childProcess.stdout.on('data', (data) => {
    console.log(data);
    result += data

  });

  childProcess.on('close', (code) => {
    console.log(`Процесс закрыт с кодом ${code}`);
    res.send(JSON.stringify({data:result}));
  });
});

app.post('/netstat', async (req, res) => {

  let childProcess;

  try {
    childProcess = exec('netstat -ano');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
    return;
  }
  let result = '';

  childProcess.stdout.on('data', (data) => {
    result += data
  });


  childProcess.on('close', (code) => {
    console.log(`Процесс закрыт с кодом ${code}`);
    res.send(JSON.stringify({data:result}));
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));