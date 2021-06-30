let data = require("../../data");

const postData = data.postData;

const getHomePage = (req,res)=>{
    res.render('index',{ title : "Just Me", posts : postData });
}
const getBlogPost = (req,res)=>{
    let post = postData.find( val => val.id.toString() === req.params.postID);
    res.render('post', { title : post.title , post : post });
}
const get404 = (req,res)=>{
    res.render('404', { title : "4O4 - I couldn't find that page..." });
}
const redirect404 = (req,res)=>{
    res.redirect('/404');
}


module.exports = {
    getHomePage,
    getBlogPost,
    get404,
    redirect404
}