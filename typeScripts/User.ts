import bcrypt = require('');

class User{
  public readonly userName: string;
  private password: string;
  private readonly salt: string;
  private email: string;
  private firstName: string; 
  private lastName: string;
  private comments: string[];
  
  constructor(userName: string, email: string, password: string, firstName: string, lastName: string){
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.salt = User.getSalt();
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
  setFullName(first: string, last: string): null{
    this.firstName = first;
    this.lastName = last;
    return null;
  }
  
  getEmail(): string{
    return this.email;
  }
  setEmail(address: string): null{
    this.email = address;
    return null;
  }
  
  addComment(commentID: string): null{
    this.comments.push(commentID);
    return null;
  }
  
  
  
  // Salt function to be implemented, currently returns a random string.
  // Not suitable for production use!
  private static getSalt(): string {
    return "FakeSalt";
  }
}