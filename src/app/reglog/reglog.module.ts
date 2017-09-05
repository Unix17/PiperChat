import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { ReglogComponent } from './reglog.component';

@NgModule({
	declarations:[ReglogComponent],
	imports:[CommonModule],
	exports: [ ReglogComponent ]
})
export class ReglogModule {}