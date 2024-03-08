import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NewPostComponent } from "./components/new-post/new-post.component";
import { FormsModule } from '@angular/forms';
import { TweetComponent } from "./components/tweet/tweet.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NewPostComponent, FormsModule, TweetComponent]
})
export class AppComponent {
  title = 'ngapp';
}
