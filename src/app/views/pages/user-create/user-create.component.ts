import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '../../../../../node_modules/@angular/material/dialog';


class Users {
	name: string;
	surname: string;
	tc: number;
	address: string;
}
export interface PeriodicElement {
	name: string;
	surname: number;
	phone: string;
	email: string;
	authority: string;
}

@Component({
  selector: 'kt-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
	form: FormGroup;
	users: any[];
	selectedUser: Users;
	hide = true;
	date = new FormControl(new Date());
	userCreate = this.fb.group({
		name: ['', Validators.required],
		surname: ['', Validators.required],
		email: ['', Validators.required],
		password: ['', Validators.required],
		authority: ['', Validators.required],
		cellPhone: ['', Validators.required]
	});
	email = new FormControl('', [Validators.required, Validators.email]);

	getErrorMessage() {
		return this.email.hasError('required') ? 'Mail giriniz' :
			this.email.hasError('email') ? 'Geçerli mail giriniz' :
				'';
	}
	userSave() {
		console.warn(this.userCreate.value);
	}
	select(user: Users): void {
		this.selectedUser = user;
	}
	addCreds() {
		const creds = this.form.controls.credentials as FormArray;
		creds.push(this.fb.group({
			name: ['', Validators.required],
			surname: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
			authority: ['', Validators.required],
			cellPhone: ['', Validators.required]
		}));
	}
	constructor(private fb: FormBuilder, public dialog: MatDialog) {
		this.form = this.fb.group({
			published: true,
			credentials: this.fb.array([]),
		});
	}

	ngOnInit(): void {
	}
}
