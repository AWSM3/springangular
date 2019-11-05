import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly URL_LIST = 'http://localhost:8080/rest/item/list';
  private readonly URL_SAVE = 'http://localhost:8080/rest/item/save';
  private readonly URL_RETRIEVE = 'http://localhost:8080/rest/item/get/';

  constructor(private http: HttpClient) {}

  public getTodos() {
    return this.http.get(this.URL_LIST);
  }

  public saveTodo(formData: FormGroup) {
    return this.http.post(this.URL_SAVE, formData.value);
  }

  public getTodo(id: string) {
    return this.http.get(this.URL_RETRIEVE + id);
  }
}
