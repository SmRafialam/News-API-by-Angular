import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = "https://newsapi.org/v2/everything?q=tesla&from=2023-01-03&sortBy=publishedAt&apiKey=de22d657d2bd45349e56be3e5ab958b0";
  constructor(private http:HttpClient) {

  }

  getNewsList(){
    return this.http.get(this.url);
  }

}
