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
  loading: boolean = false;

  constructor(private ValidationService: ValidationService) { }



  ngOnInit() {


    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      code: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })

  }

  onSubmitReactiveForm() {
    this.loading = true;
  }
  onSubmit() {
    let body = {
      name: this.reactiveForm.value.name,
      code: this.reactiveForm.value.code
    };
    this.ValidationService.login(body)
      .subscribe(response => {
        console.log(response)
      }, error => {
        // handle login error
      });
  }
}



