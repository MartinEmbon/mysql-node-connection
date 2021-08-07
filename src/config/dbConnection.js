const mysql = require("mysql2")

module.exports=()=>{
    return mysql.createConnection({        
        //host va la ip caso fuera en internet
        host:"localhost",
        user:"root",
        password:"Dianabkupervaser5",
        database:"news_portal"
    })
}