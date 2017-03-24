import { AppSettings } from './app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoServices {

  apiUrl= this.appSettings.getApiURL();

  constructor(public http: Http , public appSettings:AppSettings) {
    
  }

  public getTodos()
  {
    return this.http.get(this.apiUrl+'todos')
    .map(response=>response.json().result);
  }

   public addTodos(newTodo)
  {
    return this.http.post(this.apiUrl+'todos' , {'text': newTodo})
    .map(response=>response.json());
  }

   public deleteTodos(todoId)
  {
    return this.http.delete(this.apiUrl+'todos/'+todoId)
    .map(response=>response.json());
  }

}
