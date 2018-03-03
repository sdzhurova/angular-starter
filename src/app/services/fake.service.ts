import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

const FAKE_API: string = './../../assets/data.json';

@Injectable()
export class FakeService {
  constructor(private http: Http) { }

  fetchAllData(): Observable<any[]> {
    return this.http
      .get(FAKE_API)
      .map(resp => resp.json().offers)
      .catch((error: any) => Observable.throw(error.json()));
  }
}
