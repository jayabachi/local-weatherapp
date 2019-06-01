import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{MatButtonModule,MatToolbarModule,,MatIconModule,MatCardModule,MatFormFieldModule,MatInputModule} from '@angular/';
import { CitySearchComponent } from './city-search/city-search.component'
@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientModule,
    BrowserAnimationModule,
    FormModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFormFileModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
