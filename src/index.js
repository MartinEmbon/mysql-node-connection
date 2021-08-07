const app = require("./config/server")

require("./app/routes/news")(app)

//starting server

app.listen(app.get("port"),()=>{
    console.log("server on port" + app.get("port"))
})
