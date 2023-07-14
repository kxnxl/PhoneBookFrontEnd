import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from '../Models/contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  api_url:string = "http://localhost:5247/api/Contact/";
  constructor(private http:HttpClient) {

   }

   AddContact(contact:Contact):Observable<Contact>
   {
    return this.http.post<Contact>(this.api_url + "AddContact",contact);
   }

   DeleteContact(id:number):Observable<string>
   {
    return this.http.delete<string>(this.api_url + "DeleteContact/" + id);
   }

   UpdateContact(contact:Contact):Observable<Contact>
   {
    return this.http.put<Contact>(this.api_url + "UpdateContact/" ,contact);
   }

   GetAllContacts():Observable<Contact[]>
   {
    return this.http.get<Contact[]>(this.api_url + "GetAllContacts");
   }
   
}
