import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const CONFIG ={
      apiUrl:'http://31.170.163.194:3001/'
};
/*
  Generated class for the AppSettings provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppSettings {

  constructor(public http: Http) {
    console.log('Hello AppSettings Provider');
  }

  public getApiURL()
  {
    return CONFIG.apiUrl;
  }

}
