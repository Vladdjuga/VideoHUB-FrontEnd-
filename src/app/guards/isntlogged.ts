import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs';
 
export class IsntLoggedGuard implements CanActivate{
 
    canActivate() : Observable<boolean> | boolean{
         let result=true;
         if(localStorage.getItem("token")!=undefined){
                result=false;
         }
         return result;
    } 
}