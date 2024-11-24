const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mydb";
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
};
const Userschema = new mongoose.Schema({
    name: String,
    age: Number,
});
const Model = mongoose.model("Model", Userschema);
console.log(Model);
connectDB();
const userCreate = async () => {
    const user = await Model.create({ name: "Preety Zinta", age: 38 });
    console.log(user);
    console.log("created");
};

userCreate();

const userfind = async () => {
    const user = await Model.find();
    console.log(user);
    console.log("Find completed");
};

userfind({ name: "Preety Zinta" });

const userfindbyid = async () => {
    const user = await Model.findById("6743798108c63dd99c909b96");
    console.log(user);
    console.log("Findbyid Completed");
};

userfindbyid();

const userfindbyidandupdate = async () => {
    const user = await Model.findByIdAndUpdate(
        "674379bb323ad7746093c5ff",
        { age: 5 },
        { new: true }
    );
    console.log(user);
    console.log("Find and update completed");
};

userfindbyidandupdate();

const userfindbyanddelete = async () => {
    const user = await Model.findByIdAndDelete("674379bb323ad7746093c5ff");
    console.log(user);
    console.log("find and delete completed");
};

userfindbyanddelete();