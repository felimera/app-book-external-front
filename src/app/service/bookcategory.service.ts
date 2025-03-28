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

  public getNodeList(nameBook?: string, nameCategory?: string): Observable<ResponseInfo> {
    let url: string = '';
    if (nameBook != null)
      url = url + `?nameBook=${nameBook}`
    if (nameCategory != null)
      if (url.length > 0)
        url = url + '&'
    url = url + `?nameCategory=${nameCategory}`
    return this.http.get<ResponseInfo>(`${this.apiUrl}/bookcategory/nodelist` + url);
  }
}
