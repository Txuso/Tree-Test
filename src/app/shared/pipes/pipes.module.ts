import * as pipes from './';

import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
	imports: [],
	declarations: [ pipes.ExamplePipe ],
	providers: [],
	exports: [ pipes.ExamplePipe ]
})
export class PipesModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: PipesModule,
			providers: [ pipes.ExamplePipe ]
		};
	}
}
