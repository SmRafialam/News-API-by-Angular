import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RootObject } from './news'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private url = "https://newsapi.org/v2/everything?q=tesla&from=2023-01-03&sortBy=publishedAt&apiKey=de22d657d2bd45349e56be3e5ab958b0";
  private newsData = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7a0d9dc8108e4bb2b10fd38d5689d06d`;
  constructor(private http:HttpClient) {

  }

  getNewsList(){
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7a0d9dc8108e4bb2b10fd38d5689d06d`;
    return this.http.get(url);
  }

  getNewsById(id: string): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7a0d9dc8108e4bb2b10fd38d5689d06d`;
    return this.http.get<any>(`${url}/${id}`);
  }
  
  // getNewsList(newsType: string){
  //   const url = `https://newsapi.org/v2/everything?q=${newsType}&from=2024-07-26&sortBy=publishedAt&apiKey=7a0d9dc8108e4bb2b10fd38d5689d06d`;
  //   return this.http.get(url);
  // }

}
