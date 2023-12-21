import { Component, OnInit } from '@angular/core';
import { MyContact } from '../model/myContact';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
    allGroups:any=[]//to hold group information
    //  contactName: string='';
    contact:MyContact={} //all contacts details as in  the  form object

    constructor(private api:ApiService,private router:Router){
      this.contact.GroupId="Select A Group"
    }

    ngOnInit(): void {
      this.api.getAllGroups().subscribe((data:any)=>{
        console.log(data);
        this.allGroups=data
        
      })
    }

    addContact(){
      this.api.addContact(this.contact).subscribe((result:any)=>{
        this.router.navigateByUrl('')
      })
    }
}
