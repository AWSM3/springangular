import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(protected http: HttpClient) {}

  protected apiPath(url: string): string {
    return environment.apiUrl + url;
  }
}

