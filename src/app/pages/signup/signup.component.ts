import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;

  constructor(
    private userService: UserService,
    private snack: MatSnackBar
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
     this.snack.open('User Name is required', '',{
       duration: 300,
       verticalPosition: 'top',
       horizontalPosition:'right'
     });
      return;
    }
       //validate

        //Add user
    this.userService.addUser(this.user).subscribe(
      (data: any)=>{
        //success
        console.log(data);
        // alert("success");
        Swal.fire('Successfuly Registered', 'User ID is ' + data.id,'success')
      },
      (error) =>{
        //error
        console.log(error);
       // alert("something is wrong");
       this.snack.open('something is wrong', '',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition:'right'
      });

      }
    )
  }

}
