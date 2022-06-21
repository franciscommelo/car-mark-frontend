import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarCreateComponent } from './components/views/car/car-create/car-create.component';
import { carDeleteComponent } from './components/views/car/car-delete/car-delete.component';
import { CarReadComponent } from './components/views/car/car-read/car-read.component';
import { CarUpdateComponent } from './components/views/car/car-update/car-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'car',
    component: CarReadComponent
  },
  {
    path: 'car/create',
    component: CarCreateComponent
  },
  {
    path: 'car/delete/:id',
    component: carDeleteComponent
  },
  {
    path: 'car/update/:id',
    component: CarUpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
