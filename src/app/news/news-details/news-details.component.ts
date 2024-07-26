import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit{
  newsId!: String;
  newsDetail: any;
  newslists:any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.newsId = params['id'];
      console.log(this.newsId);
      this.getNewsDetails(this.newsId);
    })

    this.newsService.getNewsList()
    .subscribe((data: any)=>{

      console.log(data);
      this.newslists = data.articles;
    })
  }

  getNewsDetails(id:any){
    console.log(id);
    this.newsService.getNewsById(id).subscribe(data => {
      this.newsDetail = data;
    });
  }
  
  getNewsById(id: string): Observable<any> {
    const newsItem = this.newslists.find((item:any) => item.source.id === id);
    return newsItem;
  }
}
