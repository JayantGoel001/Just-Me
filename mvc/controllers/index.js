let data = require("../../data");

const postData = data.postData;
const uniqueTags = data.uniqueTag;
const uniqueCategories = data.uniqueCategory;
const archives = data.uniqueDate;
const numberOfRecentPost = 3;

const getHomePage = (req,res)=>{
    res.render('index',{ title : "Just Me", posts : postData ,active : "index"});
}
const getBlogPost = (req,res)=>{
    let post = postData.find( val => val.id.toString() === req.params.postID);
    if (post==null){
        res.redirect('/404');
    }
    let randomNumber = Math.floor(Math.random() * (postData.length - numberOfRecentPost));
    res.render('post', { title : post.title , post : post, tags:uniqueTags, categories : uniqueCategories, recentPost : postData.slice(randomNumber,randomNumber+numberOfRecentPost), archives : archives });
}
const get404 = (req,res)=>{
    let randomNumber = Math.floor(Math.random() * (postData.length - numberOfRecentPost));
    res.render('404', { title : "4O4 - I couldn't find that page...", tags:uniqueTags,categories : uniqueCategories, recentPost : postData.slice(randomNumber,randomNumber+numberOfRecentPost),archives : archives });
}
const redirect404 = (req,res)=>{
    res.redirect('/404');
}
const getAbout = (req,res)=>{
    res.render('about', { title : 'About Me'  ,active : "about"});
}
const getContact = (req,res)=>{
    res.render('contact', { title : 'Contact Me'  ,active : "contact"});
}
module.exports = {
    getHomePage,
    getBlogPost,
    get404,
    redirect404,
    getAbout,
    getContact
}