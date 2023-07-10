import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model ={
    name: "",
    checkAdult: true,
    department: "",
    comment: "..."
  
  }

  constructor (){}


  ngOnInit (): void {

  }

  onSubmit (values: any):void  {
    console.log('form values', values);
    
  }
}
