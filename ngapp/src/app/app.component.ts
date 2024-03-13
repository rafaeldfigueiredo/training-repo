import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NewPostComponent,
    FormsModule,
    TweetComponent,
    HomeComponent,
  ],
  providers: [MessagesService],
})
export class AppComponent {
  title = 'ngapp';
}
