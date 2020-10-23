import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const APK_URL = environment.API_URL;
const APK_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  currentArticle: any;

  constructor(private http: HttpClient ) { }

  getNews(url){
    return this.http.get(`${APK_URL}/${url}&apiKey=${APK_KEY}`)
  }
}
