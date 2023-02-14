export default class Requests {
   firstname;
   lastname;
   email;
   username;
   password;
 
   getFirstname(){
     return this.firstname;
   }
   /**
  * @param {string} firstname
  */
   setFirstname(firstname) {
     return this.firstname = firstname;
   }
   
   getLastname(){
     return this.lastname;
   }
   /**
  * @param {string} lastname    
  */
   setLastname(lastname){
     return this.lastname = lastname;
   }
 
   getEmail(){
       return this.email;
   }
   /**
  * @param {string} email
  */
   setEmail(email){
    return this.email = email;
   }
 
   getUsername(){
     return this.username;
   }
   /**
  * @param {string} username
  */
   setUsername(username){
     return this.username = username;
   }
 
   getPassword(){
     return this.password;
   }
   /**
  * @param {string} password
  */
   setPassword(password){
     return this.password = password;
   }
 
 }


//  if(firstname){
//    if(firstname.length > 50){
//      throw {
//       status: 404,
//       message: ""  
//      }
//    }
//  }