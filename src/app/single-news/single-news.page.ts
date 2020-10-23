import { FeedsService } from './../feeds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.page.html',
  styleUrls: ['./single-news.page.scss'],
})
export class SingleNewsPage implements OnInit {
  list;

  constructor(private feedService: FeedsService) { }

  ngOnInit() {
    this.list = this.feedService.currentArticle;
    console.log(this.feedService.currentArticle);
  }

}
