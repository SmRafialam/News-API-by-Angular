import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsService } from './news.service';
import { NewsDetailsComponent } from './news/news-details/news-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
