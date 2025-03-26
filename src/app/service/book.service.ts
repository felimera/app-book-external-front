import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseInfo } from '../models/response-info.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllBook(): Observable<ResponseInfo> {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/bookext`);
  }
}
