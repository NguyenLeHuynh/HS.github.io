const express=require("express"), path=require("path");
const app=express();
app.use(express.static(path.join(__dirname,"../frontend")));
app.use("/api/materials", require("./routes/materials"));
app.listen(3000,()=>console.log("Server tại http://localhost:3000"));
