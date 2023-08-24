import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { TeamsComponent } from './teams/teams.component';
import { StudentsComponent } from './students/students.component';



@NgModule({
  declarations: [
    StartComponent,
    AllCoursesComponent,
    TeamsComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class StartModule { }
