
let data = require("../../data");
const postData = data.postData;
const uniqueTags = data.uniqueTags;

const defaultData = {
    categoryData : data.categoryData
};
const recentPostsAmount = 5;
const rightSideBar = {
    uniqueTags:uniqueTags,
    recentPosts: postData.slice(0,recentPostsAmount)
};

const getHomePage = function(req,res) {

    let data = {
        ...defaultData,
        title:"Just Me",
        posts:postData,
        active:"index"
    }
    res.render("index",data);
}

const getBlogPost = function({params},res) {
    let post = postData.find((val) => val.id == params.postid);
    if (!post) {
        res.redirect('/404');
    }
    let data = {
        ...defaultData,
        title:post.title,
        post:post,
        active:"index",
        ...rightSideBar
    }
    res.render("post",data);
}
const get404 = function(req,res) {
    let data = {
        ...defaultData,
        title:"404-I Couldn't find that Page.",
        ...rightSideBar
    }
    res.render('404',data);
}
const redirect404 = function(req,res) {
    res.redirect('/404');
}

const getAbout = function(req,res) {
    let data = {
        ...defaultData,
        title:"About Me",
        active:"about"
    }
    res.render('About',data);
}
const getContact = function(req,res) {
    let data = {
        ...defaultData,
        title:"Contact Me",
        active:"contact"
    }
    res.render('Contact',data);
}
const getFilterList = function({query},res) {
    let filterPosts = postData.filter((val) =>
      val.category=== query.category || val.tags.includes(query.tag)
    );
    let data = {
        ...defaultData,
        title:"Just Me - Filtered",
        active:query.category,
        posts:filterPosts
    }

    res.render('Filter',data);
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
