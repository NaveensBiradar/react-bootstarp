//express

// app application with port :XXXX



const express = require('express');
const app = express()

app.listion(9000,(req, err)=>{
    console.log("Server running on the Port- 9000")
})
