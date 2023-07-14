import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { Contact } from 'src/app/Models/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  owner:any;
  contacts:Contact[]=[];
  constructor(private contactService:ContactService)
  {
    this.owner = new Contact();
     this.contactService.GetAllContacts().subscribe((res)=>{this.contacts=res
      console.log(this.contacts);
     
      this.owner = this.contacts.find(m=>m);
      console.log(this.owner);
    });
    
  }



  

}
