import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';

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

  constructor(private service: MessagesService) {}

  sendTweet() {
    if (this.tweetMessage == '') {
      alert('Twitter not Created');
    } else {
      this.service.addMessage(this.tweetMessage);
      this.tweetMessage = '';
      this.tweetRemain = this.tweetMaxLength;
      alert('Tweet Created!')
    }
  }
  changeTweet() {
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
  }
}
