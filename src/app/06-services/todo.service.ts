
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo);
  }

  getTodos() { 
    return this.http.get<any[]>('...');
  }

  delete(id) {
    return this.http.delete('...');
  }
}