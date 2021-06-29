const getHomePage = (req,res)=>{
    res.render('index',{ title : "Just Me" });
}

module.exports = {
    getHomePage
}