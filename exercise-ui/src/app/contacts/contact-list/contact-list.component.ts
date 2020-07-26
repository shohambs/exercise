import * as _ from "lodash";
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Contact } from '../../types/contact';
import { ContactsService } from "../contacts.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Observable<Contact[]>;
  constructor(private contactsService: ContactsService) { }

  trackById(index, item: Contact) {
    return item.ID;
  }

  ngOnInit(): void {
    this.contactList = this.contactsService.getContacts();
  }

}
