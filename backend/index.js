import express from 'express'

const app = express();

const port = 3000

app.get('/jokes', (req,res)=>{
    const jokes = [{
        id:1,
        title:"joke1",
        content: "this is joke 1"

    },
    {
        id:2,
        title:"joke2",
        content: "this is joke 2"
    },
    {
        id:3,
        title:"joke3",
        content: "this is third joke"

    },
    {
        id:4,
        title:"joke4",
        content: "this is fourth joke"
    }]
    res.send(jokes);
});


app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})