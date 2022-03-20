import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userFirstName: new FormControl(null, Validators.required),
      userLastName: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      work: new FormControl(null),
      gender: new FormControl('male'),
    });
  }

  onSend() {
    console.log(this.signupForm);
  }
}
