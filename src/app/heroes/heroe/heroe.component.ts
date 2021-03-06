import { Component } from "@angular/core";

@Component({
    selector:"app-heroe",
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = "Ironman";
    edad: number = 35;

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    cambiarNombre(){
        this.nombre='Spiderman';

    }
    cambiarEdad(){
        this.edad=28;

    }





}