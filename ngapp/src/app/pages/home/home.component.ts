import { Component, OnInit } from '@angular/core';
import { TweetComponent } from "../../components/tweet/tweet.component";
import { NewPostComponent } from "../../components/new-post/new-post.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MessagesService } from '../../services/messages.service';
import { log } from 'console';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TweetComponent, NewPostComponent, HeaderComponent, FooterComponent]
})
export class HomeComponent implements OnInit{
    tweets: string[] = ['ola neymar','ola Dr Fran']
    constructor(private service:MessagesService) {}
    ngOnInit(): void {
        this.tweets = this.service.getMessages()        
    }
}
