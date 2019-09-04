import {Component, Inject, OnInit} from '@angular/core';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, NgForm, FormArray, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Houses} from './houses';
import {House} from './mock-houses';

@Component({
	selector: 'kt-sdk-form',
	templateUrl: './sdk-form.component.html',
	styleUrls: ['./sdk-form.component.scss'],
	providers: [
		NgbTabset,
		{provide: MAT_DATE_LOCALE, useValue: 'tr-TR'},
		{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
		{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
	],
})

export class SdkFormComponent implements OnInit {

	constructor(private fb: FormBuilder,private _adapter: DateAdapter<any>, public dialog: MatDialog) {
		this.form = this.fb.group({
			published: true,
			credentials: this.fb.array([]),
		});
	}

	// person = [];
	house = House;
	selectedHouse: Houses;
	form: FormGroup;
	houseRegForm = this.fb.group({
		houseAddress: [''],
		cellPhone: [''],
		homePhone: ['']
	});

	personRegForm = this.fb.group({
		name: [''],
		surname: [''],
		tc: [''],
	});

	step = 0;

	disease: string[] = ['Romatizmal Hastalıklar', 'Kalp Hastalıkları',
		'Hipertansiyon', 'Şeker', 'Mide Rahatsızlıkları', 'Troid', 'Alerji',
	'Kanser', 'Migren', 'Depresyon', 'Diğer'];

	causation: string[] = ['Maddi yetersizlik', 'Hastalık', 'Engellilik', 'Ailesi izin vermedi', 'Çalışmak için', 'Okumak istemedi', 'Okul yoktu', 'Diğer'];

	immigration: string[] = ['İş', 'Eğitim', 'Evlilik', 'Geçim sıkıntısı', 'Sağlık', 'Güvenlik', 'Hanedeki fertlerden birine bağlı göç', 'Diğer'];

	immigrationCause: string[] = ['Başka bir yerleşim yerinde üniverste öğrenimi görüyor', 'Askerde', 'Yatılı okulda (YIBO) ya da herhangi bir pansiyonda öğrenim görüyor',
									'Denetimli serbestlik altında', 'Eski hükümlü', '18 yaşında olup hanede annesi babası olmadığı halde hanede yaşayanlar tarafından bakılan çocuk',
										'Şehit yakını', 'Gazi'];

	hasDocument: string[] = ['Sertifika', 'Diploma', 'Ehliyet', 'Yeterlilik belgesi', 'Kalfalık belgesi', 'Ustalık belgesi'];

	infrastructor: string[] = ['Banyo ve duş', 'Tuvalet (Ev içinde)', 'Mutfak', 'Kalorifer', 'Elektrik sistemi', 'Su deposu', 'Borulu su sistemi (Şebeke suyu)',
								'Doğalgaz', 'Sıcak su (güneş enerjisi, kombi, devamlı sıcak su vb.)', 'Kablolu yayın', 'Asansör', 'Kapalı garaj'];

	date = new FormControl(new Date());
	date_1 = new FormControl(new Date());
	today: number = Date.now();

	onSelect(house: Houses): void {
		this.selectedHouse = house;
	}

	addPerson() {
		const creds = this.form.controls.credentials as FormArray;
		creds.push(this.fb.group({
			name: ['', Validators.required],
			surname: ['', Validators.required],
			tc: ['', Validators.required]
		}));
	}
	houseFormControl(f: NgForm): void {
		// f.reset();
		console.warn(this.houseRegForm.value);
	}

	personFormControl(f: NgForm): void {
		// f.reset();
		console.log(this.personRegForm.value);
	}

	ngOnInit() {
	}

	setStep(index: number) {
		this.step = index;
	}

	nextStep() {
		this.step++;
	}

	openDialog() {
		const dialogRef = this.dialog.open(InfoFormComponent);

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}


@Component({
	selector: 'kt-info-form',
	templateUrl: 'info-form.html',
})
export class InfoFormComponent {}

