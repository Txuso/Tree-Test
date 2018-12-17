import { MatIconModule, MatTreeModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages';
import { SharedModule } from './shared';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		PagesModule,
		BrowserAnimationsModule,
		MatTreeModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
