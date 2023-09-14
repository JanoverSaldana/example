import {Component, OnInit} from '@angular/core';
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {NewsApiService} from "../../services/news-api.service";
import {Source} from "../../model/source.entity";
import {Article} from "../../model/article.entity";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sources: Array<Source> = [];
  articles: Array<Article> = [];

  constructor(private newsApi: NewsApiService,
              private logoApi: LogoApiService) {

  }

  searchArticlesForSource(source: any) {
    console.log(`selected source is ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe((data: any) => {
        this.articles = data["articles"];
        this.articles.forEach(article => {
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
        console.log(this.articles);
      });
  }

onSourceSelected(source: any) {
    console.log(source.name);
    this.searchArticlesForSource(source);
}


  ngOnInit() {
    this.newsApi.getSources().subscribe((data: any) => {
      this.sources = data["sources"];
      this.sources.forEach(source => {
        source.urlToLogo = this.logoApi.getUrlToLogo(source)
      });
      console.log(this.sources);
      this.searchArticlesForSource(this.sources[0]);
    });
  }

}
