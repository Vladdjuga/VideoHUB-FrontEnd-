import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs';
 
export class IsLoggedGuard implements CanActivate{
 
    canActivate() : Observable<boolean> | boolean{
         let result=false;
         if(localStorage.getItem("token")!=undefined){
                result=true;
         }
         return result;
    } 
}