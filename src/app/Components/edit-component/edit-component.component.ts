import { Component } from '@angular/core';
import { Contact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/Services/contact.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent {

  contact:any;
  contacts:Contact[]=[];
  id:number=0;

  constructor(private contactService:ContactService,private route:Router,private activatedRoute:ActivatedRoute)
  {
    this.contact = new Contact();
    this.activatedRoute.params.subscribe(p=>this.id =p['id'])
    this.contactService.GetAllContacts().subscribe((res)=>{this.contacts=res
      this.contact = this.contacts.find(m=>m.id==this.id)
      console.log(this.contact)
    });
  }

  UpdateContact()
  {
    this.contactService.UpdateContact(this.contact).subscribe((res)=>{
      this.route.navigate(['ContactList'])
    });
    
    // location.reload();
    
    
  }

}
