

export class User {

    public name: string;
    public userName: string;
    public pass: string;
    public users: User[] = [];

    constructor(name: string, userName: string, pass: string){
        this.addUser(new User(name, userName, pass));
    }

      addUser(user: User){
        this.users.push(user);
      }
      
  }