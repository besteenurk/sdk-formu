export class PageConfig {
	public defaults: any = {
		'dashboard': {
			page: {
				'title': 'Dashboard',
				'desc': 'Latest updates and statistic charts'
			}
		},
		sdk: {
			page: {title: 'Denetleme', desc: ''}
		},
		createForm: {
			page: {title: 'Form Oluştur', desc: ''}
		},
		settings: {
			page: {title: 'Personel Listesi', desc: ''}
		},
		userDefinition: {
			page: {title: 'Kullanıcı Oluştur', desc: ''}
		},
		createPersonel: {
			page: {title: 'Personel Oluştur', desc: ''}
		},
		error: {
			404: {
				page: {title: '404 Not Found', desc: '', subheader: false}
			},
			403: {
				page: { title: '403 Access Forbidden', desc: '', subheader: false }
			}
		}
	};

	public get configs(): any {
		return this.defaults;
	}
}
