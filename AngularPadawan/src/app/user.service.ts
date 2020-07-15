import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    
    usersList = [{ firstName: 'k80c', 
                   lastName: 'k80c', 
                   email: 'k80c@gmail.com', 
                   phone: '999999999', 
                   user: 'k80c', 
                   password: '123'}];

    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public phone: string,
      public user: string,
      public password: string) 
      {  }

      addUser(user: UserService){
          this.usersList.push(user);
      }
  }