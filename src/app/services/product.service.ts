import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from '../constants/constants';

/**
 * @description -ProductService is injectable service file consists business logics of different service calls.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
* @description -getCartPrice function is used to get final cart value from server.
*/
  getCartPrice(data: any): Observable<any> {
    return this.http.post(`${constants.API_ENDPOINT}/getCartValue`, data);
  }
}
