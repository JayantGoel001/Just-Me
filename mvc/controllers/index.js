
let data = require("../../data");
const postData = data.postData;
const getHomePage = function(req,res) {
    res.render("index",{title : "Just Me",posts:postData});
}

const getBlogPost = function({params},res) {
    let post = postData.find((val) => val.id == params.postid);
    res.render("post",{title: post.title,post:post});
}
module.exports = {
    getHomePage,
    getBlogPost
};
