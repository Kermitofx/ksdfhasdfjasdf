const mongoose = require("./Telegram-Api/node_modules/mongoose");
mongoose.connect("mongodb+srv://botbotgg:etGV8uU3H2kZgy@cluster0-wxnvj.gcp.mongodb.net/test?retryWrites=true&w=majority
");

const rmodel = require("./Model/replys");

exports.model = mongoose.model("Reply");
