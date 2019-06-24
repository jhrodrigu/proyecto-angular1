import {Component} from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent {
    libro: any={
        autor: 'poh1',
        titulo: ' Fabrca de software'
    }

    mostrar: boolean = true;

    personajes: string[] = ['spiderman','Superman','Batman'];

    constructor(){}

    

}