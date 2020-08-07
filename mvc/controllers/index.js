
let data = require("../../data");
const postData = data.postData;
const uniqueTags = data.uniqueTags;
const categoryData = data.categoryData;

const recentPostsAmount = 5;
const getHomePage = function(req,res) {
    res.render("index",{title : "Just Me",posts:postData,active:"index",categoryData:categoryData});
}

const getBlogPost = function({params},res) {
    let post = postData.find((val) => val.id == params.postid);
    if (!post) {
        res.redirect('/404');
    }
    res.render("post",{title: post.title,post:post,uniqueTags:uniqueTags,recentPosts: postData.slice(0,recentPostsAmount),categoryData:categoryData});
}
const get404 = function(req,res) {
    res.render('404',{title : "404-I Couldn't find that Page.",uniqueTags:uniqueTags,recentPosts: postData.slice(0,recentPostsAmount),categoryData:categoryData});
}
const redirect404 = function(req,res) {
    res.redirect('/404');
}

const getAbout = function(req,res) {
    res.render('About',{title : "About Me",active:"about",categoryData:categoryData});
}
const getContact = function(req,res) {
    res.render('Contact',{title : "Contact Me",active:"contact",categoryData:categoryData});
}
const getFilterList = function({query},res) {
    let filterPosts = postData.filter((val) => val.category=== query.category);

    res.render('Filter',{title : "Just Me",
    active:query.category,posts:filterPosts,categoryData:categoryData});
}
module.exports = {
    getHomePage,
    getBlogPost,
    get404,
    redirect404,
    getAbout,
    getContact,
    getFilterList
};
