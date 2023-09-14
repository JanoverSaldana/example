import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.entity";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  title = 'catch-up';
  @Input() articles: Array<Article> = [];

}
