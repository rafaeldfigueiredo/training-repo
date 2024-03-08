import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  tweetMessage: string = '';
  tweetMaxLength: number = 240;
  tweetRemain: number = this.tweetMaxLength;

  sendTweet() {
    this.tweetMessage == ''
      ? alert('Twitter not Created')
      : alert(this.tweetMessage);
  }
  changeTweet() {
    this.tweetRemain = 240 - this.tweetMessage.length;
  }
}
