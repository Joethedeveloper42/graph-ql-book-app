const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const mongoDetails = require('./privateInfo');
const cors = require('cors');

//allow cross origin requests
app.use(cors());

mongoose.connect(`mongodb://${mongoDetails.username}:${mongoDetails.password}@ds247270.mlab.com:47270/graphqlpractice`);
mongoose.connection.once('open', () => {
  console.log("connected to external MongoDB database");
});

const PORT = '4000';

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`now listening on PORT ${PORT}`);
});