const dbConnection=require("../../config/dbConnection");

module.exports=app=>{
    const connection = dbConnection()
    app.get('/', (req, res) => {
        connection.query('SELECT * FROM news', (err, result) => {
          res.render('news/news', {
            news: result
          });
        });
      });

    app.post("/news",(req,res)=>{
        const {title,news}=req.body;
        connection.query("INSERT INTO news SET ? ", {title, news})
        res.redirect("/")                
    })
    
    
    app.get('/:id',(req, res)=> {
    const {id_news}=req.params;
    connection.query("DELETE FROM news WHERE id_news = ?",[id_news]);       
    console.log(id_news)
    res.redirect("/")
  
    })
    
}