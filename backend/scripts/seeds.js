//TODO: seeds script should come here, so we'll be able to put some data in our local env
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

require("../models/User");
require("../models/Item");
require("../models/Comment");

var User = mongoose.model("User");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");


(async () => {
    await Item.deleteMany({});
    await User.deleteMany({});

    for (let i = 0; i < 100; i++) {
        const user = new User({username: `test${i}`, email: `test${i}@mail.com`});
        user.setPassword("test");
        await user.save(); 

        const comment1 = new Comment({body: `some comment ${i}`, seller: user});
        await comment1.save()

        const item1 = new Item({slug: `item${i}`, title: `item${i} title`, description: "", seller: user, comments: [comment1]});
        await item1.save(); 

    }
    await mongoose.disconnect();
})();