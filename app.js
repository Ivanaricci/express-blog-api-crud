//  importo express
const express = require('express');

// inizializzo express nella variabile app
const app = express();

// inizializzo la porta
const port = 3000;

// importo il router in una variabile
const postsRouter = require('./routers/posts.js');

// utilizzo postsRouter per creare le rotte
app.use('/posts', postsRouter)

// definisco rotta base
app.get('/', (req, res)=>{
    res.send('I Post')
})

// metto in ascolto il server
app.listen(port, () =>{
    console.log(`server in ascolto alla porta ${port}`)
})