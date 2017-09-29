

var http = require('http');
const fs = require('fs');

    http.createServer(function(request, response) {
    
    var data;
    
    fs.writeFileSync('./build/index.html', '', 'utf8');
    
    data = fs.readFileSync('./templates/index_h.html', 'utf8');
    fs.appendFileSync('./build/index.html', data);
    
    
    var files = fs.readdirSync('./posts/');
    for (var i in files) {
        
        data = fs.readFileSync('./templates/post_h.html', 'utf8');
        fs.appendFileSync('./build/index.html', data);
        
        data = fs.readFileSync('./posts/' + files[i], 'utf8');
        fs.appendFileSync('./build/index.html', data);
        
        data = fs.readFileSync('./templates/post_f.html', 'utf8');
        fs.appendFileSync('./build/index.html', data);
        
    }
    
    data = fs.readFileSync('./templates/index_f.html', 'utf8');
    fs.appendFileSync('./build/index.html', data);
    
    
    fs.readFile("./build/index.html", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
    if (err) 
    console.error(err);
    });
    
    
    

    }).listen(process.env.PORT);