const fs=require('fs');
let dir='./posts';
let build='./build';
const path=require('path');
let cache=[];
  let counter=1;
  
fs.readdir(dir,(err,files)=>{
  if(err)console.log(err);
 
 console.log(files.length);
 
 files.forEach((file)=>{
  
    fs.readFile(`${dir}/${file}`,'utf8',(err, data)=>{
      if(err)console.log(err);
      // console.log(data);
     

      let template=`
      <html>
      <body>
      <div>${data}</div>
      </body></html>
      `;
      
      fs.writeFile('build/page'+`${counter}`+'.html',template.trim(), 'utf8', err=>{
        console.log(err);
        
     
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
  
});
// endreadbuild
   

    for(let i=0;i<=cache.length;i++){
      let url=cache[i];
      let li=createNode('LI');
      var ol=createNode('OL');
      append(li, url);
      append(ol,li);
    }
     
   
  let index=`
      <html>
      <body>
    `+`${cache}`+`
      </body></html>
      `;
      
fs.writeFileSync('index.html',index.trim(),'utf8',err=>{
  if(err)console.log(err);
  
  
});


  function createNode(element){
        return document.createElement(element);
    }
    function append(parent, el){
        return parent.appendChild(el);
    }
     
//     for(let i=0;i<=cache.length;i++){
      
//       let url=cache[i];
//     let list=document.getElementById('list');
       
//       let li=createNode('li');
//       append(li, url);
//       append(list, li);
       
//     }