import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TodoService extends ApiService {
  public readonly URL_LIST = 'rest/item/list';
  public readonly URL_SAVE = 'rest/item/save';
  public readonly URL_RETRIEVE = 'rest/item/get/{id}';

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
}
