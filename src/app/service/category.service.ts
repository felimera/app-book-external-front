import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseInfo } from '../models/response-info.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllCategory(): Observable<ResponseInfo> {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/category`);
  }
}
