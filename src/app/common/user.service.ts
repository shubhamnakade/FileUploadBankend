import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postuserDetails(userDetails:FormData)
  {
    return this.http.post("http://localhost:9099/user",userDetails);
  }
  // getAllUserDetails()
  // {
  //   return this.http.get("http://localhost:9099/users");
  // }

}
