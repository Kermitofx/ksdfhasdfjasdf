const mongoose = require("./Telegram-Api/node_modules/mongoose");
mongoose.connect("mongodb+srv://botbotgg:ehXV5uU3G2mZgpLy@cluster0-wxnvj.gcp.mongodb.net/test?retryWrites=true&w=majority
");

const rmodel = require("./Model/replys");

exports.model = mongoose.model("Reply");
