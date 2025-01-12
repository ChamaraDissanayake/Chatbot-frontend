import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
         HomeComponent
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      MainRoutingModule
    ],
    providers:[],
    exports: [
    ]

  })

export class MainModule {
}
