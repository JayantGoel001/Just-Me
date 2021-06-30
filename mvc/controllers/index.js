let data = require("../../data");

const postData = data.postData;

const getHomePage = (req,res)=>{
    res.render('index',{ title : "Just Me", posts : postData });
}
const getBlogPost = (req,res)=>{
    let post = postData.find(val => Number(val.id) === Number(req.params.id) );
    res.render('post', { title : "Just Me", post : post });
}

module.exports = {
    getHomePage,
    getBlogPost
}