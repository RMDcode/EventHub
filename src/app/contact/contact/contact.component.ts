import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormGroup} from '@angular/forms';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message:string="";
  regForm!:FormGroup;
  classname="d-none";
  isProcess:boolean=false;
  wordPattern= /^[a-z , . A-Z]+$/;
  addresspattern=/^[a-z , . / :  0-9  A-Z]+$/;
  numPattern= /^[0-9]+$/;
  emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

constructor(private fb: FormBuilder, private auth: RegisterService)
{
  this.regForm=this.fb.group({
    'name':['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
    'email':['',Validators.compose([ Validators.required,Validators.pattern(this.emailRegExp)])],
    'message':['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
  })
  console.log(this.regForm);
}
ngOnInit():void {}
  
signup2()
  {
    alert("Account created");
    const data=this.regForm.value;
    delete data['confirm']
    
    this.auth.signup(data).subscribe((_res:any)=>{
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
