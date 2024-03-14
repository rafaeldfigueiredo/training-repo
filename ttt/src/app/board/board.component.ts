import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent { 
    squares: any[] = [];
    xIsNext :boolean=false;
    winner:string='';

    constructor(){}

    newGame(){
        this.squares = Array(9).fill(null)
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}
