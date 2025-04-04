import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : "" , component : HomeComponent}
];


@NgModule({
    declarations:[
        HomeComponent,
    ],
    imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
    exports: [RouterModule],
    providers:[]

})
export class AppRoutingModule { }
