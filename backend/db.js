// faux database
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://a:a@cluster0.2ariu.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


var pets = exports.pets = [];

pets.push({ name: 'Tobi', id: 0 });
pets.push({ name: 'Loki', id: 1 });
pets.push({ name: 'Jane', id: 2 });
pets.push({ name: 'Raul', id: 3 });

var users = exports.users = [];

users.push({ name: 'TJ', pets: [pets[0], pets[1], pets[2]], id: 0  });
users.push({ name: 'Guillermo', pets: [pets[3]], id: 1 });
users.push({ name: 'Nathan', pets: [], id: 2 });
