import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule here
    FormsModule, // Required for template-driven forms
    AppRoutingModule, // Main routing module
  ],
  providers: [], // No need to provide HttpClient here
  bootstrap: [AppComponent],
})
export class AppModule {}
