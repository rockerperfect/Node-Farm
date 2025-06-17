const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');
//server
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const server = http.createServer((req, res) =>{
    
    const {query, pathname } = url.parse(req.url, true);  
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
        res.end(output);
    }else if(pathname === '/product') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);
    //API
    }else if(pathname === '/api'){
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            console.log(productData);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
        });
        
    }else{
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'Custom-Header': 'HelloWorld'
        });
        res.end('<h1>Page not found</h1><p>We could not find the page you are looking for.</p>');
    }
});
server.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on port 8000');
});
