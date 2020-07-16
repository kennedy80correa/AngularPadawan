import { Injectable } from "@angular/core";
import { User } from './user.component';

@Injectable()
export class UserService {
    
    usersList: User[] = [];
    lastLogin = '';

    addUser(user: User){
        this.usersList.push(user);
    }
    
    validateLogin(username: string, password: string){
        for(let i in this.usersList){
            if(username === this.usersList[i].user){
                this.lastLogin = this.usersList[i].firstName;
               return password === this.usersList[i].password ? 0 : 1;
            }
        }
        //user not found
        return 2;
    }
}