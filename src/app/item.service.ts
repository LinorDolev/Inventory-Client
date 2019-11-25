import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import Item from './item/Item';
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
         Accept: 'Application/json'
      }
    };
  }

  addItem(item: Item) {
    return this.http.post('http://localhost:8080/items/add', item.toJson(), this.httpOptions);
  }

  getItems(): Observable<any> {
    return this.http.get('http://localhost:8080/items');
  }

  deleteItem(itemNo: number) {
    return this.http.delete('http://localhost:8080/items/' + itemNo + '/');
  }

  depositItem(item: Item, changeAmount: number) {
    return this.http.put<void>('http://localhost:8080/items/deposit/' + changeAmount, item, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  withdrawItem(item: Item, changeAmount: number) {
    return this.http.put<void>('http://localhost:8080/items/withdraw/' + changeAmount, item, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage.toString());
  }
}


