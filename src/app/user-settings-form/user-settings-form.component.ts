import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUsersSettings: UserSettings = {
    name: '', 
    emailOffers: false, 
    interfaceStyle: 'dark', 
    subscriptionType: 'Annual', 
    notes: 'this is a test note'
  };

  userSettings: UserSettings = { ...this.originalUsersSettings };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }
}
