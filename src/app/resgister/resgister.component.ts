import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormGroup} from '@angular/forms';
import { RegisterService } from '../register.service';
import { StudentInfo } from '../student-info';


@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit
{
  message:string="";
  regForm!:FormGroup;
  classname="d-none";
  isProcess:boolean=false;
  wordPattern= /^[a-z , . A-Z]+$/;
  addresspattern=/^[a-z , . / :  0-9  A-Z]+$/;
  numPattern= /^[0-9]+$/;
  emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   batches: any = [
    { id:'Angular Web Development ', name: "Angular: Web Development" },
    { id:'Python Machine Learning', name: "Python: Machine Learning" },
    { id:'Machine Learning', name: "Machine Learning" },
    { id:'GoLang', name: "GoLang" },
    { id:'IPhone Programming', name: "IPhone Programming" },
    { id:'Android Programming', name: "Android Programming" }
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
    'batch':[null,Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
  })
  console.log(this.regForm);
}
  
ngOnInit():void {}
  
signup()
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
   
   /* wordPattern= /^[a-z , . A-Z]+$/;
    numPattern= /^[0-9]+$/;
    emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  */


    /*CustomerForm():any
    { 
      
      this.regForm= this.formbuilder.group
    (
      {
        fullname :['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
        email :['',Validators.compose([ Validators.required,Validators.pattern(this.emailRegExp) ])],
        phone :['',Validators.compose([ Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.numPattern) ])],
        address :['', Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)]) ],
        education :['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
        batches:['',Validators.compose([Validators.required])]
      }
    )
      
  }*/

  
/*
   onSubmit()
   {
      let userinfo = this.regForm.value;
      this.createuserAccount(userinfo);
      this.regForm.reset();
   }*/

 /*  createuserAccount(studinfo:StudentInfo) {
    this.registerservice.createaccount(studinfo).subscribe(
      () => {
        this.dataSaved = true;
       this.regForm.reset();
            }
        )
     }*/
