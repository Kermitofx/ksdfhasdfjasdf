const mongoose = require("./Telegram-Api/node_modules/mongoose");
mongoose.connect("mongodb+srv://botbot:izMsQUBCwf3BuDTB@cluster0-cmcyi.mongodb.net/test?retryWrites=true&w=majority");

const rmodel = require("./Model/replys");

exports.model = mongoose.model("Reply");
