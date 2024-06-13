import { Component} from '@angular/core';
import { FormBuilder ,Validators,FormGroup} from '@angular/forms';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message = "";
  regForm: FormGroup;
  classname = "d-none";
  isProcess = false;
  emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder, private auth: RegisterService) {
    this.regForm = this.fb.group({
      'name': ['', [Validators.required, Validators.pattern(/[a-zA-Z , .]+/)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailRegExp)]],
      'message': ['', [Validators.required]],
    });
    console.log(this.regForm);
  }

  ngOnInit(): void {}

  signup2() {
    alert("Message sent");
    this.isProcess = true;
    const data = this.regForm.value;
    
    this.auth.signup2(data).subscribe(
      (_res: any) => {
        if (_res.success) {
          this.message = "Your message has been sent successfully.";
          this.classname = 'alert alert-success';
        } else {
          this.message = _res.message;
          this.classname = 'alert alert-danger';
        }
        this.isProcess = false;
        this.regForm.reset();
      },
      (err: any) => {
        this.message = "Server Error!";
        this.classname = 'alert alert-danger';
        this.isProcess = false;
        console.error(err);
      }
    );
  }
}
