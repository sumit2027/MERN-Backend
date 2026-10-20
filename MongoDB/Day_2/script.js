const fs = require('fs')

// fs.writeFile("Hello.txt", "Kaise ho sare ke sare", function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("✅ Done");
        
// })

// fs.appendFile("Hello.txt","Ham sab maje me app batao",function(err){
//     if(err)
//         console.log(err.message);
//     else
//         console.log("✅ Done");      
// })

// fs.copyFile("Hello.txt","./copy/copy.txt",function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("✅ Done");        
// })

// fs.unlink("Hello.txt",function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("✅ Remove");      
// })

fs.rm("./copy",{recursive:true},function(err) {
    if(err)
        console.error(err);
    else
        console.log("Remove Folder");    
})