import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  reactiveForm!: FormGroup;

  ngOnInit() {
  
    this.reactiveForm = new FormGroup({
   
      answers: new FormControl('',Validators.required),

    })

  }

}
