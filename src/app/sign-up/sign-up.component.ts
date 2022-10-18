import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user!: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\/[a-z]{2,4}$";
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.reset();
      this.user = {
        UserName: '',
        Password: '',
        Email: '',
        FirstName: '',
        LastName: ''
      }
  }

  OnSubmit(form: NgForm){
    this.userService.registerUser(form.value).subscribe({
      next: response => this.resetForm(form),
      error: error => {console.log(error), this.toastr.error(error[0])},
      complete: () => {console.log("Form Done"), this.toastr.success('User registration was successful!')}
    });
  }

}
