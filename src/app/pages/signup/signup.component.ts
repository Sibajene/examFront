import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
    ) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }
  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user)
    if(this.user.username==''|| this.user.username==null){
     // alert('User name required')
     this._snackBar.open("User Name is required");
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        alert("success");
      },
      (error) =>{
        //error
        console.log(error);
        alert("something is wrong");
      }
    )
  }

}
