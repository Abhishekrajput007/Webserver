const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

console.log(path.join(__dirname,'../public'))

const app = express()

const publicDir =  path.join(__dirname,'../public')

app.use(express.static(publicDir))
app.set('view engine','hbs')

app.get('',(req,res)=>{

    res.send('<h1>Hello Express!!</h1>')
})

app.get('/products',(req,res)=>{
    console.log(req.query)
    res.send({
        data: []
    })
})

app.get('/help',(req,res)=>{

    res.send([{
        name: 'Abc',
        age: 25
    },{
        name: 'xyz',
        age: 28
    }
])
})


app.listen(port, ()=>{

    console.log('server listen on ' + port)
})