const posts = require('../data/posts.js');

// index
function index(req,res){

    const tag = req.query.tag;

    let filteredPosts = posts;

    if(tag){
        filteredPosts = posts.filter(post => post.tags.includes(tag));
    }
    res.json(filteredPosts);
}

// show
function show(req,res){
    const id = parseInt(req.params.id);

    const post = posts.find((post) =>{
        return post.id === id;
    } )

    if(post === undefined){
        res.status(404);

        res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }

    res.json(post)
    
}

// store
function store(req,res){

    // console.log(req.body);
    
    const newId = posts[posts.length - 1].id + 1;

        // nuovo oggetto
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost);
    console.log(posts);

    // codice di stato a 201
    res.status(201);

    // inviamo il nuovo oggetto come json
    res.json(newPost);

    
}

// update
function update(req,res){
    const id = parseInt(req.params.id);
    // recuperiamo il post
    const post = posts.find(post => post.id === id)

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts);

    res.json(post)
}

// modify
function modify(req,res){
    res.send(`Modifica parziale del post con id ${req.params.id}`)
}

// destroy
function destroy(req,res){
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if(post === undefined){
        res.status(404);

        res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }

    posts.splice(posts.indexOf(post), 1);
    console.log(posts)
    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy}