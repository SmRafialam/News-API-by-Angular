import { Component, OnInit } from '@angular/core';
import { RootObject } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newslists:RootObject[]=[];

  constructor(private newsService: NewsService){

  }

  ngOnInit(): void {
    this.newsService.getNewsList('food')
              .subscribe((data: any)=>{

                console.log(data)
                this.newslists = data.articles;
              })
  }


}
