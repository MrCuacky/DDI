import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hide = true
  hero={
    id:"1",
    name:"Edgar"
  }
  formGroup!:FormGroup;


  constructor(private formB:FormBuilder) 
  { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup=this.formB.group({
      //name:["", Validators.required],
      //email:["",[Validators.required,Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      phone: ["", [Validators.required, Validators.pattern(/^\d{10}$/)]]
    })
  }

  submit(){
    console.log (this.formGroup.value)
  }
  clickEvent(event: Event) {  // Add this method
    this.hide = !this.hide;
  }

}
