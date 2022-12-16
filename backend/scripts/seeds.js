//TODO: seeds script should come here, so we'll be able to put some data in our local env
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

require("../models/User");
require("../models/Item");

var User = mongoose.model("User");
var Item = mongoose.model("Item");


(async () => {
    await Item.deleteMany({});
    await User.deleteMany({});

    const user = new User({username: "test1", email:"test1@mail.com"});
    user.setPassword("test");
    await user.save(); 

    const item1 = new Item({slug: "item1", title: "item1 title", seller: user});
    await item1.save(); 

    await mongoose.disconnect();
})();