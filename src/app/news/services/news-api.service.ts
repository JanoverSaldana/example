import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = "d97bed6909d44c18b655d691d2dc0161"
  baseUrl = "https://newsapi.org/v2/top-headlines"
  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }
}
