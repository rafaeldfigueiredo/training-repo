import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { links } from '../../../assets/links.json'


@Component({
    selector: 'app-personas',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css',
})
export class PersonasComponent {
  agrippa:string = links.agrippa
}
