import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { MatTreeModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';

@NgModule({
	imports: [ CommonModule, ServicesModule.forRoot(), ComponentsModule, DirectivesModule, PipesModule.forRoot() ],
	declarations: [],
	providers: [],
	exports: [ DirectivesModule, PipesModule, ComponentsModule, ServicesModule ]
})
export class SharedModule {}
