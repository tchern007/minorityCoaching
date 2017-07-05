import { Injectable} from '@angular/core';
import { User } from '../../models/user';

const USER_IN_SESSION:string = 'user-in-session';


@Injectable()
export class SessionService {       
    setSession(user : User){
        sessionStorage.setItem(USER_IN_SESSION,JSON.stringify(user));
    }      
    getSession(){
        return JSON.parse(sessionStorage.getItem(USER_IN_SESSION));
    }    
}