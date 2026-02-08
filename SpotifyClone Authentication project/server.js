require ('dotenv').config();
const app = require("./src/app");
const connectdb = require('./src/db/db');


connectdb()
.then(()=>{
    app.listen(3000,()=>{
    console.log("Server Running at Port 3000")
});
})
.catch(err => {
    console.log("❌ Failed to connect database:", err)
    process.exit(1);
})