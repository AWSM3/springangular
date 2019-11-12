import {UserData} from "../dto/UserData";
import {AuthHttpInterceptor} from "../interceptor/auth-http.interceptor";
import {AuthService} from "./api/auth.service";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {EventsBus} from "./events.bus";

@Injectable({providedIn: 'root'})
export class AuthManager {
  public static readonly SESSION_USERDATA: string = 'userdata';

  private userData: UserData;

  constructor(private authService: AuthService, private eventsBus: EventsBus) {}

  public auth(username: string, password: string): Observable<void> {
    return this.authService.authenticate(username, password).pipe(map((response) => {
      this.userData = new UserData(response.id, response.token, response.username);
      sessionStorage.setItem(AuthManager.SESSION_USERDATA, this.userData.toJson());
      this.eventsBus.forceDataUpdate.emit();
    }));
  }

  public hasUserData(): boolean {
    return this.userData != undefined;
  }

  public getCurrentToken(): string {
    return this.userData.token;
  }

  public logout(): void {
    this.userData = null;
    sessionStorage.removeItem(AuthManager.SESSION_USERDATA);
  }

  public authFromSession(): void {
    if (sessionStorage.getItem(AuthManager.SESSION_USERDATA)) {
      this.userData = UserData.fromJson(sessionStorage.getItem(AuthManager.SESSION_USERDATA));
    }
  }
}
