const exp = require('express');
const pt = require('path');

const app = exp();

const publicPath = pt.join(__dirname,'public');
//app.use(exp.static(publicPath));

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`);
});
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/pagenotfound.html`);
});
app.listen(5000);