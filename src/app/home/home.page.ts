import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedsService } from '../feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  article: any;

  constructor(
              private feedService: FeedsService,
              private router: Router
            ) {}


  ngOnInit(): void {
    this.feedService.getNews("top-headlines?country=us&category=business").subscribe(data => {
      this.article = data;
      console.log(data)
    });
  }

  goToSinglePage(list){
    this.feedService.currentArticle = list
    this.router.navigate(['/single-news'])
  }

}
