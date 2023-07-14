import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { EditComponentComponent } from './Components/edit-component/edit-component.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"ContactList",component:ContactListComponent},
  {path:"AddContact",component:AddContactComponent},
  {path:"UpdateCustomer/:id",component:EditComponentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
