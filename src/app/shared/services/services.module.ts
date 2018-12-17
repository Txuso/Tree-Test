import * as services from './';

import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
	imports: [],
	declarations: [],
	providers: [],
	exports: []
})
export class ServicesModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ServicesModule,
			providers: [ services.ExampleService, services.CommonService ]
		};
	}
}
