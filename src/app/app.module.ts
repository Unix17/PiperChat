import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReglogModule } from './reglog/reglog.module';

import { AppComponent } from './app.component';
// import { ReglogComponent} from './reglog/reglog.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,ReglogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
