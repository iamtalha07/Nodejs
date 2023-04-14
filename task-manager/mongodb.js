// CRUD create read update delete

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true });

const databaseName = 'task-manager';

async function run() {
  try {
    await client.connect();

    console.log('Connected to the database');

    const db = client.db(databaseName);

    await db.collection('users').insertOne({
      name: 'Talha',
      age: 25
    });

    console.log('User inserted successfully');
  } catch (err) {
    console.log('Unable to connect to the database:', err);
  } finally {
    await client.close();
  }
}

run();