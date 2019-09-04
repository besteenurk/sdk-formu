import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatPaginator, MatTableDataSource} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InfoFormComponent} from '../sdk-form/sdk-form.component';
import {MatDialog} from '@angular/material/dialog';
import {PeriodicElement} from '../material/data-table/material-table/material-table.component';

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
const ELEMENT_DATA: { name: string; surname: string; phone: string; email: string; authority: string }[] = [
	{name: 'Bestenur', surname: 'Karadeniz',phone: '05467898979', email: 'bestenur@beste.com', authority: 'Form oluştur'},
	{name: 'Berkay', surname: 'Karadeniz',phone: '05345678978', email: 'berkay@beste.com', authority: 'Form oluştur ve Düzenle'},
	{name: 'Arzu', surname: 'Karadeniz',phone: '05387895678', email: 'arzu@beste.com', authority: 'Form oluştur ve Düzenle'},
	{name: 'Zennur', surname: 'Karadeniz',phone: '05456743589', email: 'zennur@beste.com', authority: 'Form düzenle'},
];

@Component({
	selector: 'kt-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
	providers: [
		NgbTabset,
		{provide: MAT_DATE_LOCALE, useValue: 'tr-TR'},
		{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
		{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
	],
})

export class SettingsComponent implements OnInit {
	constructor(private fb: FormBuilder, public dialog: MatDialog) {
	}

	displayedColumns: string[] = ['name', 'surname', 'phone', 'email', 'authority'];
	dataSource = ELEMENT_DATA;

	ngOnInit() {
	}

	openDialog() {
		const dialogRef = this.dialog.open(CreateUserComponent);

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
}

@Component({
	selector: 'kt-create-user',
	templateUrl: 'create-user.html',
})
export class CreateUserComponent {

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
}
