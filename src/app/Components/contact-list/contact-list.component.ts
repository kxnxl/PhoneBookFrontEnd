import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { Contact } from 'src/app/Models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts:Contact[]=[];
  constructor(private contactService:ContactService,private route:Router)
  {
    this.contactService.GetAllContacts().subscribe((res)=>{this.contacts=res
      console.log(this.contacts);
    });
     
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.contactService.GetAllContacts().subscribe((res)=>{this.contacts=res
      console.log(this.contacts);
    });
    
  }

  UpdateContact(contact:Contact)
  {
    this.contactService.UpdateContact(contact).subscribe((res)=>{contact=res});
  }
  DeleteContact(id:any)
  {
    this.contactService.DeleteContact(id).subscribe((res)=>{;
    
  });
  location.reload();

  }
  navEdit(id:any)
  {
      this.route.navigateByUrl('UpdateCustomer/' + id)
  }

}
