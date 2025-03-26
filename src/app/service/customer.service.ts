import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseInfo } from '../models/response-info.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllCustomer(): Observable<ResponseInfo> {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/customer`);
  }
}
