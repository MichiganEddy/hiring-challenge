class User{
  public userName: string;
  private password: string;
  private salt: string;
  private email: string;
  private firstName: string; 
  private lastName: string;
  private comments: Commen[];
  
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
  
  
  
  // Salt function to be implemented, currently returns a random string.
  // Not suitable for production use!
  private static getSalt(): string {
    return "FakeSalt";
  }
}