import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { FlebotomiaComponent } from './flebotomia/flebotomia.component';

const routes: Routes = [
  {
    path: '', component: FlebotomiaComponent,
    children: [
      {path: 'flebotomia', component: FlebotomiaComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
