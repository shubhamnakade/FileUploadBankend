import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../common/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
getUsers() {
throw new Error('Method not implemented.');
}

  constructor(private formBuilder:FormBuilder,private userService:UserService) { }
  userForm:FormGroup;
  users:any[];
  profileImage:any;
  aadharCardImage:any;
  panCardImage:any;
  reader=new FileReader();
  profSrc:any;
  aadharSrc:any;
  panSrc:any;
    ngOnInit(): void {
      this.userForm=this.formBuilder.group({
        userName:[],
        password:[]
      })
    }
     onSubmitUserForm()
     {
      let userJson:string=  JSON.stringify(this.userForm.value);
      const formData=new FormData();
      formData.append("profimg",this.profileImage);
      formData.append("aadhar",this.aadharCardImage);
      formData.append("pan",this.panCardImage);
      formData.append("userJson",userJson);
      this.userService.postuserDetails(formData).subscribe((data:any)=>{
        console.log(data);
        alert("User Details Stored SuccessFully...!")
      })
     }
     onSelectProfileImage(event)
     {
            this.profileImage=event.target.files[0];
            this.reader.onload= e => this.profSrc= this.reader.result;
            this.reader.readAsDataURL(this.profileImage)
     }
     onSelectAadharImage(event)
     {
      this.aadharCardImage=event.target.files[0];
      this.reader.onload = z =>this.aadharSrc=this.reader.result;
      this.reader.readAsDataURL(this.aadharCardImage);
     }
     onSelectPanCradImage(event)
     {
      this.panCardImage=event.target.files[0];
      this.reader.onload = s =>this.panSrc=this.reader.result;
      this.reader.readAsDataURL(this.panCardImage);
     }
    
    //  getUsers()
    //  {
    //   this.userService.getAllUserDetails().subscribe((data:any[])=>{
    //           this.users=data;
    //           console.log(this.users);
    //   })
    //  }
}
