const fs=require('fs');
let dir='./posts';
let build='./build';
let md=require('node-markdown').Markdown;
const path=require('path');
var cache=[];
let counter=1;

fs.readdir(dir,(err,files)=>{
  if(err)console.log(err);
 
 files.forEach((file)=>{
    fs.readFile(`${dir}/${file}`,'utf8',(err, data)=>{
      if(err)console.log(err);

      let input=md(data.toString());
      let template= `
      <html>
      <body>
      <div>
      ${input}
      </div>
      </body>
      </html>
      `
      fs.writeFile('build/post'+`${counter}`+'.html',template.trim(), 'utf8', err=>{
        if(err) console.log(err);
      });
      // endwrite
         counter+=1;
    });
    // endreadfile
 })
  // endforeach
});
// endreaddir

fs.readdir(build,(err,files)=>{
  if(err)console.log(err);
  
  files.forEach((file)=>{
    let loc=(path.basename(file));
    cache.push(loc);
    // console.log(cache);
  });
  // endforeach
  cache.splice(0,1);

var links=[];
for(let i=0;i<cache.length;i++){
  links.push('<li><a href="'+cache[i]+'">'+cache[i]+'</a></li>');
}

var list=links.join(" ");

var index=`
      <html>
      <body><ol>
    ${list} </ol>
      </body></html>
      `;
                fs.writeFile('build/index.html',index.trim(),'utf8',err=>{
  if(err)console.log(err);
  
  });
  // endwriteindex
});
// endreadbuild


  

