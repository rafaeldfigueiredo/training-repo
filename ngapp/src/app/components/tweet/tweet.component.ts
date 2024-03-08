import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css',
})
export class TweetComponent {
  TweetMessage: string = '';
}
