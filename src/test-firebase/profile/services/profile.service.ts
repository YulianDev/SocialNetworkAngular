import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

/*interface CreateResponse {
  name: string;
}*/

@Injectable({
  providedIn: "root"
})

export class ProfileService {
  static url = "https://angular-socialnetwork-34a58-default-rtdb.europe-west1.firebasedatabase.app/users"
  constructor(private http: HttpClient) {}

  update(form: FormGroup): Observable<any> {
    return this.http.post<any>(`${ProfileService.url}/1.json`, form).pipe(map(resp => {
      console.log(resp);
      return resp;
    }))
  }
}
