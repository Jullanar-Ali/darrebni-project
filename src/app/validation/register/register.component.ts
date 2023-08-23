import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  reactiveForm!: FormGroup;
  name: string;
  phone: string;
  college_id:string;
  constructor(private ValidationService: ValidationService) { }


  ngOnInit() {
  

    this.reactiveForm = new FormGroup({
      name:new FormControl('',Validators.required),
      phone:new FormControl('',[Validators.required,Validators.pattern(/^09\d{8}$/)]),
      studies: new FormControl('',Validators.required),

    })

  }
  onSubmitReactiveForm() {
    let body = {
      name: this.reactiveForm.value.name,
      phone: this.reactiveForm.value.phone,
      college_id: this.reactiveForm.value.college_id,

    };
    this.ValidationService.register(body)
      .subscribe(response => {
        console.log(response)
      }, error => {
        // handle login error
      });
  }
    }

