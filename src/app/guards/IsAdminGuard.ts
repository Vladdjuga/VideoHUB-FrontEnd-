import { CanActivate } from "@angular/router";
import { Observable } from "rxjs";

export class IsAdminGuard implements CanActivate {
    canActivate(): Observable<boolean> | boolean {
        try {
            let result = false;
            if (localStorage.getItem("token") != undefined) {
                var token = localStorage.getItem("token") as string;
                const jwtData = token.split('.')[1];
                const decodedJwtJsonData = window.atob(jwtData);
                const decodedJwtData = JSON.parse(decodedJwtJsonData);
                if (decodedJwtData.sub != null) {
                    var arr = JSON.parse(decodedJwtData.roles);
                    if (arr.find((role: string) => role == "admin")) {
                        result = true;
                    }
                }
            }
            return result;
        }
        catch (exp: any) {
            console.log(exp);
            return false;
        }
    }
}