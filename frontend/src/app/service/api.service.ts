import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly URL_LIST = 'rest/item/list';
  private readonly URL_SAVE = 'rest/item/save';
  private readonly URL_RETRIEVE = 'rest/item/get/{id}';

  constructor(private http: HttpClient) {
  }

  public getTodos(): Observable<Object> {
    return this.http.get(this.apiPath(this.URL_LIST));
  }

  public saveTodo(formData: FormGroup): Observable<Object> {
    return this.http.post(this.apiPath(this.URL_SAVE), formData.value);
  }

  public getTodo(id: string): Observable<Object> {
    return this.http.get(
      this.apiPath(this.URL_RETRIEVE).replace('{id}', id)
    );
  }

  private apiPath(url: string): string {
    return environment.apiUrl + url;
  }
}

