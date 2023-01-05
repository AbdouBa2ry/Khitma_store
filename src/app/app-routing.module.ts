import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComputerComponent } from './computer/computer.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  {path:'',component:HomeComponent},


  {path:'about',component:AboutComponent},

  {path:'computer',component:ComputerComponent},

  {path:'laptop',component:LaptopComponent},

  {path:'contact',component:ContactComponent},


  {path:'products',component:ProductsComponent},

   {path:'**',redirectTo:'', pathMatch:'full'},


];
@NgModule({
  declarations: [],
  exports: [
    RouterModule
],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
