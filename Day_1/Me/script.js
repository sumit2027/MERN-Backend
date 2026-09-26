// function one(){
//     console.log("Mai 1 chala"); 
// }
// function two(){
//     setTimeout(() => {
//     console.log("Mai 2 chala");
//     }, 4000);
//     // console.log("Mai 2 chala");
    
// }
// function three(){
    
//     console.log("Mai 4 chala");
    
// }
// function four(){
//     console.log("Mai 3 chala");
    
// }
// four();
// two();
// three();
// one();

// function getUser(username,ch){
//     setTimeout(() => {
//         console.log("Geting user detels....");
        
//         ch({id:1,username:"Sumit"})
//     }, 1000);
// }
// getUser("Sumit",function(data){
//     setTimeout(() => {
//     console.log(data);
//     },2000);
//     // console.log(data)
// })

// function loginUser(username,ch){
//     console.log("logging in user...");
    
//     setTimeout(() => {
//         ch({id:1212, username:"Sumit"});
//     }, 1000);
// }
// function fetchPermissions(id,ch){
//     console.log("fetching permissions...");
    
//     setTimeout(() => {
//         ch(["Read","Write","Delete"])
//     }, 2000);
// }
// function loadDashboard(permissions,ch){
//     console.log("lodding deshboad");
    
//     setTimeout(() => {
//         ch();
//     }, 2000);
// }

// loginUser("Sumit",function(userdata){
//     fetchPermissions(userdata.id, function(permissions){
//         loadDashboard(permissions,function(){
//             console.log("✅ deshboad loaded");
            
//         });
//     });
// });

