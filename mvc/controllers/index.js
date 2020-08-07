
let data = require("../../data");
const postData = data.postData;
const getHomePage = function(req,res) {
    res.render("index",{title : "Just Me",posts:postData,active:"index"});
}

const getBlogPost = function({params},res) {
    let post = postData.find((val) => val.id == params.postid);
    if (!post) {
        res.redirect('/404');
    }
    res.render("post",{title: post.title,post:post});
}
const get404 = function(req,res) {
    res.render('404',{title : "404-I Couldn't find that Page."});
}
const redirect404 = function(req,res) {
    res.redirect('/404');
}

const getAbout = function(req,res) {
    res.render('About',{title : "About Me",active:"about"});
}
const getContact = function(req,res) {
    res.render('Contact',{title : "Contact Me",active:"contact"});
}
module.exports = {
    getHomePage,
    getBlogPost,
    get404,
    redirect404,
    getAbout,
    getContact
};
