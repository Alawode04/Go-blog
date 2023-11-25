const express = require('express');

//import Post model
// const Post = require('/models/Post');
const Post = require('./models/Post')
const router = express.Router();

//get all post api endpoint
router.get('/posts', async(req, res) => {
    console.log("Request body", req.body)
    const posts = await Post.find()
    res.status(200).json(posts)
})

//create a new post api endpoint
router.post("/posts", async (req, res) => {
    //destructure request body
    const {title, content, image, tags} = req.body

    //create a new post object
    const post = new Post({
        title,
        content,
        image,
        tags
    });

    //save post
    await post.save()

    //handle error
    if (!post) {
        res.status(500).json({error: 'Error creating Post'})
    }

    //return success
    res.status(200).json({message: "Post Created Successfully", post})
})

//get single post
router.get('/posts/:id', async(req, res) => {
    //find post
    const post = await Post.findById(req.params.id);

    //handle error
    if (!post) {
        res.status(500).json({error: "Post not found"})
    }

    //send post as response
    res.status(200).json({message: "Post found", postData: post})
})

//update post
router.put('/posts/:id', async(req, res) => {
    try{
        //find the post
        const post = await Post.findById(req.params.id);

        if (req.body.title) {
            post.title = req.body.title
        }

        if (req.body.content) {
            post.content = req.body.content
        }

        if (req.body.image) {
            post.image = req.body.image
        }

        //save post
        await post.save();
        res.status(200).json({message: "Post update sucessfully", post})
    }  catch (error) {
        res.status(500).json({error: "Error updating post"})
    }
})

    //delete post
    router.delete('/posts/:id', async(req, res) => {
        try{
              //find the post
              const post = await Post.findById(req.params.id)

              //delete post
              await post.delete();

              res.status(200).json({message: "Post deleted successfully"})
        } catch (error) {
            res.status(500).json({error: "Error deleting post"})
        }
   
})

//export router
module.exports = router;