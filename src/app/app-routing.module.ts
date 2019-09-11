import { AuthGuardService } from './services/auth-guard/auth-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MailsComponent } from './mails/mails.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { AddJobComponent } from './add-job/add-job.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ChangeCategoryComponent } from './admin/change-category/change-category.component';
import { TypesComponent } from './admin/types/types.component';
import { AddTypeComponent } from './admin/add-type/add-type.component';
import { ChangeTypeComponent } from './admin/change-type/change-type.component';
import { LocationsComponent } from './admin/locations/locations.component';
import { AddLocationComponent } from './admin/add-location/add-location.component';
import { ChangeLocationComponent } from './admin/change-location/change-location.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'job/:id', component: JobComponent },
  { path: 'job-add', component: AddJobComponent },

  { path: 'login', component: LoginComponent },

  { path: 'admin/categories',canActivate: [AuthGuardService], component: CategoriesComponent },
  // { path: 'admin/mails', canActivate: [AuthGuardService], component: MailsComponent },
  // { path: 'admin/categories', component: CategoriesComponent },
  { path: 'admin/categories/new', component: AddCategoryComponent },
  { path: 'admin/categories/change/:id', component: ChangeCategoryComponent },

  { path: 'admin/types', component: TypesComponent },
  { path: 'admin/types/new', component: AddTypeComponent },
  { path: 'admin/types/change/:id', component: ChangeTypeComponent },

  { path: 'admin/locations', component: LocationsComponent },
  { path: 'admin/locations/new', component: AddLocationComponent },
  { path: 'admin/locations/change/:id', component: ChangeLocationComponent },

  { path: 'admin/mails', component: MailsComponent },

  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
