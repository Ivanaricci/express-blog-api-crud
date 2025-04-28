const posts = require('../data/posts.js');

// index
function index(req,res){

    const tag = req.query.tag;

    let filteredPosts = posts;

    if(tag){
        filteredPosts = posts.filter(post => post.tags.includes(tag))
    }
    res.json(filteredPosts);
}

// show
function show(req,res){
    const id = parseInt(req.params.id);

    const post = posts.find((post) =>{
        return post.id == id;
    } )


    res.json(post)
    
}

// store
function store(req,res){
    res.send('inserimento di un nuovo post');
}

// update
function update(req,res){
    res.send(`Modifica totale del post con id ${req.params.id} `)
}

// modify
function modify(req,res){
    res.send(`Modifica parziale del post con id ${req.params.id}`)
}

// destroy
function destroy(req,res){
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    posts.splice(posts.indexOf(post), 1);
    console.log(posts)
    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy}