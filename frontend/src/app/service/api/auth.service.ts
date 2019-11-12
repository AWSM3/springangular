import {ApiService} from "./api.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {UserData} from "../../dto/UserData";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService extends ApiService {
  public readonly URL_AUTHENTICATE = 'rest/auth/authenticate';

  public authenticate(username: string, password: string): Observable<UserData> {
    return this.http.post<UserData>(this.apiPath(this.URL_AUTHENTICATE), {username, password});
  }
}
