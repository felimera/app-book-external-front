import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseInfo } from '../models/response-info.interface';
import { Observable } from 'rxjs';
import { BookCategory } from '../models/bookcategory.interface';

@Injectable({
  providedIn: 'root'
})
export class BookcategoryService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public postBookCategory(bookCategory: BookCategory): Observable<ResponseInfo> {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/bookcategory`, bookCategory);
  }
}
