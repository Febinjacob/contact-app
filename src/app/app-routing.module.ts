import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

const routes: Routes = [
  //localhost:4200/contactManager
  {
    path:'',redirectTo:'contactManager',pathMatch:'full'
  },
  //lisiting all contacts details
  {
    path:'contactManager',component:ContactManagerComponent
  },
  //add new contact
 {
  path:'contactManager/addContact',component:AddContactsComponent
 },  
 //view a particular contact
 {
  path:'contactManager/view/:Id',component:ViewContactComponent
 },
 //edit a particular contact
 {
  path:'contactManager/edit/:contactId',component:EditContactComponent
 },
 {
  path:'**',component:PageNoteFoundComponent 
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
