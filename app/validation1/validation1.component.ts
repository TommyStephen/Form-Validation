import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-validation1',
  templateUrl: './validation1.component.html',
  styleUrls: ['./validation1.component.css']
})
export class Validation1Component {

  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform!: FormGroup;
  firstName!: FormControl; 
  lastName!: FormControl;
  email!: FormControl;
  password!: FormControl;
  language!: FormControl;
  employee: Employee = new Employee();
  

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm() { 
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
  
  onCancel() {
    this.myform.reset();
  }
  onSubmit() {
    this.employee.firstName = this.firstName.value;
    this.employee.lastName = this.lastName.value;
    this.employee.email = this.email.value;
    this.employee.password = this.password.value;
    this.employee.language = this.language.value;
    console.log(this.employee);
    
  }
}
