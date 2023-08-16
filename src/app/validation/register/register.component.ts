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
  number: string;
  constructor(private service:ValidationService) { }

 

  ngOnInit() {
  

    this.reactiveForm = new FormGroup({
      name:new FormControl('',Validators.required),
      number:new FormControl('',[Validators.required,Validators.pattern(/^09\d{8}$/)]),
      specialty: new FormControl('',Validators.required),

    })

  }
  onSubmitReactiveForm() {
    //     this.service.login().subscribe((res: any) => {
    //       console.log(res)
    
    //     }, error => {
    //       alert(error.message);
    //     })
    // }
      }
    }

