//  importo express
const express = require('express');

// inizializzo express nella variabile app
const app = express();

// inizializzo la porta
const port = 3000;

// indichiamo ad express di trattare i body delle richieste come json
app.use(express.json());

// importo il router in una variabile
const postsRouter = require('./routers/posts.js');

// importazione middleware errors
const errorsHandler = require('./middlewares/errorsHandler.js')

// utilizzo postsRouter per creare le rotte
app.use('/posts', postsRouter)

// definisco rotta base
app.get('/', (req, res)=>{
    res.send('I Post')
})

// registro il middleware
app.use(errorsHandler)

// metto in ascolto il server
app.listen(port, () =>{
    console.log(`server in ascolto alla porta ${port}`)
})