export class UtilMethods {


    public USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

      constructor(){

      }
    public createBasicAuthToken(username: String, password: String) :string {
        return 'Basic ' + window.btoa(username + ":" + password)
      }
    
      

registerSuccessfulLogin(username, password) {
    localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    localStorage.setItem("logged","true");
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
  }
}