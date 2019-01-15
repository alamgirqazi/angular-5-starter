import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../core/auth.service';
import { Injectable } from '@angular/core';
import { NGconfig } from '../../ng.config';
import { Observable } from 'rxjs/Observable';

/**
 * Api services for the `Todos` model.
 */
@Injectable()
export class TodosApi {
  constructor(protected http: HttpClient, private authService: AuthService) {}

  public getAllTodos(): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    return this.http.get(url).map((response: any) => {
      return response;
    });
  }
}
