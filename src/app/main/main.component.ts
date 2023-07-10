import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
title = 'Alumnos de angular';
name !: string;
coderAlumnos = ['Marco', 'Federico', 'Valentin', 'Pablo', 'Diego', 'Matias'];

}
