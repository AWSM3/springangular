import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UserData} from "../dto/UserData";
import {AuthManager} from "../service/auth-manager";

@Injectable({providedIn: 'root'})
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private authManager: AuthManager) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('intercept !!!');
    if (this.authManager.hasUserData()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.authManager.getCurrentToken()
        }
      });
    }

    return next.handle(request);
  }
}
