import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyContact } from '../model/myContact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //  dependency injection
  constructor(private http:HttpClient) { }

  //get function for getting all contact details
  getAllContact():Observable<MyContact>{

    return this.http.get('http://localhost:3000/contacts')
  }
   ///view particular contact details 'http://localhost:3000/contacts'
   viewContactDetails(contactId:string){
    return this.http.get(`http://localhost:3000/contacts/${contactId}`)
   }
   //API Call for getting group name
   getGroupName(GroupId:string){
    return this.http.get(`http://localhost:3000/groups/${GroupId}`)
   }
   //API call for add contact information
   addContact(contactBody:any){
    return this.http.post(`http://localhost:3000/contacts`,contactBody)
   }
   //api call for get group details
   getAllGroups(){
    return this.http.get(`http://localhost:3000/groups`)
   }
   //api call for delete a particular contact
   deleteContact(contactId:any){
    return this.http.delete(`http://localhost:3000/contacts/${contactId}`)
   }
   //update a specific contact 
   updateConatct(contactId:any,contactBody:any){
    return this.http.put(`http://localhost:3000/contacts/${contactId}`,contactBody)
   }



}
