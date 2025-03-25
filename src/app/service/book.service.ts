import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';
import { ResponseInfo } from '../models/response-info';

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
