const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myURI =
  "mongodb+srv://atlas:axolotle@atlas-ocop1.mongodb.net/test?retryWrites=true&w=majority";

const URI = process.env.MONGO_URI || myURI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "coffeeOrders"
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch(err => console.log(err, "connect err"));

const orderSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  order: {
    type: String
    // required: true
  },
  date: {
    type: Date
    // require: true
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order; // <-- export your model
