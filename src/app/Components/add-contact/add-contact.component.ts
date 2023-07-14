import { Component } from '@angular/core';
import { Contact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/Services/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact:Contact;
  constructor(private contactService:ContactService,private route:Router)
  {
    this.contact = new Contact();
  }

  AddContact()
  {
    this.contactService.AddContact(this.contact).subscribe((res)=>{;})
    this.route.navigateByUrl('ContactList')
  }

}
