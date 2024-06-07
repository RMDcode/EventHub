import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-sp-register',
  templateUrl: './sp-register.component.html',
  styleUrls: ['./sp-register.component.css']
})
export class SpRegisterComponent {
  message:string="";
  regForm!:FormGroup;
  classname="d-none";
  isProcess:boolean=false;
  wordPattern= /^[a-z , . - : / A-Z]+$/;
  addresspattern=/^[a-z , . / :  0-9  A-Z]+$/;
  numPattern= /^[0-9]+$/;
  emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  batches: any = [
    { id:'IOT ', name: "Internet Of Things" },
    { id:'IOS Internals', name: "IOS Internals" },
    { id:'LSP', name: "Linux System Programming" },
    { id:'Struts', name: "Struts" },
    { id:'Embedded Programming', name: "Embedded Programming" },
    { id:'IOT Workshop', name: "IOT Workshop" }
  ];

constructor(private fb: FormBuilder, private auth: RegisterService)
{
  this.regForm=this.fb.group({
    'firstname':['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
    'lastname':['',Validators.compose([Validators.required,Validators.pattern(this.wordPattern)])],
    'email':['',Validators.compose([ Validators.required,Validators.pattern(this.emailRegExp)])],
    phone:[,Validators.compose([ Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.numPattern)])],
    'education':['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
    'address':['',Validators.compose([ Validators.required, Validators.pattern(this.addresspattern)])],
    'batch':['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
  })
  console.log(this.regForm);
}
  
ngOnInit():void {}
  
signup()
  {
    alert("Account created");
    const data=this.regForm.value;
    delete data['confirm']
    
    this.auth.signup1(data).subscribe((_res:any)=>{
      if(_res.success)
      {
        this.isProcess=false;
        this.message="Account has been created 0";
        this.classname='alert alert-success';
      }
      else
      { 
        console.log(data)
        this.isProcess=false;
        this.message=_res.message;
        this.classname='alert alert-danger';
      }
      this.regForm.reset();
      }
      ,(err:any)=>{
        this.isProcess=false;
        this.message="server Error !!";
        this.classname='alert alert-danger';
      }
      
    );

  }
}


