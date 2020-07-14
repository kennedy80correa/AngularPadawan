import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    
    usersList: UserService[] = [];
    localStorage: Storage;

    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public phone: string,
      public user: string,
      public password: string) 
      { this.localStorage = window.localStorage; }

      addUser(user: UserService){
          this.usersList.push(user);
          this.localStorage.setItem(user.user, user.user);
      }
  }