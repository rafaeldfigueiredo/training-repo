import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css',
})
export class TweetComponent {
 @Input() TweetMessage: string = '';
}
