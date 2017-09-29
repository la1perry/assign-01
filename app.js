const fs=require('fs');
let dir='./posts';
let build='./build';
const path=require('path');
var cache=[];
let counter=1;

fs.readdir(dir,(err,files)=>{
  if(err)console.log(err);
 
 files.forEach((file)=>{
    fs.readFile(`${dir}/${file}`,'utf8',(err, data)=>{
      if(err)console.log(err);

      let template=`
      <html>
      <body>
      <div>${data}</div>
      </body></html>
      `;
  
      fs.writeFile('build/page'+`${counter}`+'.html',template.trim(), 'utf8', err=>{
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
    let loc=('build/'+path.basename(file));
    cache.push(loc);
  });
  // endforeach
      console.log(cache);

var input=JSON.stringify(cache.toString());
var index=`
      <html>
      <body>
    <ol>${input} </ol>
      </body></html>
      `;
      
                fs.writeFile('build/index.html',index.trim(),'utf8',err=>{
  if(err)console.log(err);
  
  });
  

});
// endreadbuild


  

