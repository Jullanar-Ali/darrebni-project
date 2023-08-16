import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm!: FormGroup;
  name: string;
  code: string;
  loading:boolean=false;

  constructor(private service:ValidationService) { }

 

  ngOnInit() {
  

    this.reactiveForm = new FormGroup({
      name:new FormControl('',Validators.required),
      code:new FormControl('',[Validators.required,Validators.minLength(10)]),
    })

  }

  onSubmitReactiveForm() {
    this.loading=true;

//     this.service.login().subscribe((res: any) => {
//       console.log(res)

//     }, error => {
//       alert(error.message);
//     })
// }
  }
}



