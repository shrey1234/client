import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { CourseComponent } from './modules/course/course.component';
import { CoursepageComponent } from './modules/coursepage/coursepage.component';
import { CreateAssignmentComponent } from './modules/create-assignment/create-assignment.component';



import { LandingComponent }  from './modules/landing/landing.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[
    {path: '', component: LandingComponent },
    {path:'user',component: DashboardComponent},
    {path:'posts',component: PostsComponent,},
    {path:'fees',component: PaymentComponent,},
    {path:'course',component: CourseComponent,},
    {path:'coursePage/:id',component: CoursepageComponent,},
    {path:'createAssignment/:id',component: CreateAssignmentComponent,},



  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
