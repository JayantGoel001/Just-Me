let data = require("../../data");

const postData = data.postData;
const uniqueTags = data.uniqueTag;
const uniqueCategories = data.uniqueCategory;
const archives = data.uniqueDate;
const numberOfRecentPost = 3;
const defaultData = {
    categories : uniqueCategories
}
const sidebarData = {
    tags:uniqueTags,
    archives : archives
}
const getHomePage = (req,res)=>{
    let data = {
        ...defaultData,
        title : "Just Me",
        posts : postData ,
        active : "index"
    }
    res.render('index',data);
}
const getBlogPost = (req,res)=>{
    let post = postData.find( val => val.id.toString() === req.params.postID);
    if (post==null){
        res.redirect('/404');
    }
    let randomNumber = Math.floor(Math.random() * (postData.length - numberOfRecentPost));
    let data = {
        ...defaultData,
        ...sidebarData,
        title : post.title ,
        recentPost : postData.slice(randomNumber,randomNumber+numberOfRecentPost),
        post : post
    }
    res.render('post', data);
}

const getFilteredPost = (req,res) =>{
    let posts = postData.filter( val=> {
        return val.category === req.query.category || val.tags.includes(req.query.tag);
    });
    let data = {
        ...defaultData,
        title:"Just Me - "+req.query.category || req.query.tag,
        posts: posts,
        active : req.query.category
    }
    res.render('filter', data);
}

const get404 = (req,res)=>{
    let randomNumber = Math.floor(Math.random() * (postData.length - numberOfRecentPost));
    let data = {
        ...defaultData,
        ...sidebarData,
        recentPost : postData.slice(randomNumber,randomNumber+numberOfRecentPost),
        title : "4O4 - I couldn't find that page..."
    }
    res.render('404', data);
}
const redirect404 = (req,res)=>{
    res.redirect('/404');
}
const getAbout = (req,res)=>{
    let data = {
        ...defaultData,
        title : 'About Me',
        active : "about"
    }
    res.render('about', data);
}
const getContact = (req,res)=>{
    let data = {
        ...defaultData,
        title : 'Contact Me',
        active : "contact"
    }
    res.render('contact', data);
}
module.exports = {
    getHomePage,
    getBlogPost,
    getFilteredPost,
    get404,
    redirect404,
    getAbout,
    getContact
}