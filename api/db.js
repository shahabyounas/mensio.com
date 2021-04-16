const mongoose = require('mongoose');

const DB_USER = 'shahab';
const PASSWORD = encodeURIComponent('123Hamza!@#');

const uri = `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.skgo0.mongodb.net/mensio?retryWrites=true&w=majority`

console.log(process.env.MONGODB_URI)
console.log(uri)

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then((con) => {
    console.log(`DB connection successful`);
  });

