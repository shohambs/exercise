import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../types/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private defaultAPI = 'http://localhost:8080/api/contacts/';
  constructor(private http: HttpClient) {}

  getContact(id: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.defaultAPI + id);
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.defaultAPI);
  }

  addContact(contact: Partial<Contact>) {
    this.http
      .post(this.defaultAPI, contact)
      .toPromise()
      .then(
        (resolved) => {
          console.log('added!');
        },
        (rejected) => {
          throw rejected;
        }
      );
  }

  deleteContact(id: string) {
    this.http
      .delete(this.defaultAPI + id)
      .toPromise()
      .then(
        (resolved) => {
          console.log('deleted!');
        },
        (rejected) => {
          throw rejected;
        }
      );
  }

  updateContact(contact: Partial<Contact>) {
    this.http
    .put(this.defaultAPI, contact)
    .toPromise()
    .then(
      (resolved) => {
        console.log('updated!');
      },
      (rejected) => {
        throw rejected;
      }
    );
  }
}
