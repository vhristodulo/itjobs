import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { JobsComponent } from './jobs/jobs.component';
import { AddJobComponent } from './add-job/add-job.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JobComponent } from './job/job.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { MailsComponent } from './mails/mails.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { SharedService } from './services/shared.service';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ChangeCategoryComponent } from './admin/change-category/change-category.component';
import { TypesComponent } from './admin/types/types.component';
import { LocationsComponent } from './admin/locations/locations.component';
import { AddTypeComponent } from './admin/add-type/add-type.component';
import { AddLocationComponent } from './admin/add-location/add-location.component';
import { ChangeTypeComponent } from './admin/change-type/change-type.component';
import { ChangeLocationComponent } from './admin/change-location/change-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SubscribeComponent,
    JobsComponent,
    AddJobComponent,
    NotFoundComponent,
    JobComponent,
    SpinnerComponent,
    ReversePipe,
    MailsComponent,
    CategoriesComponent,
    LoginComponent,
    AddCategoryComponent,
    ChangeCategoryComponent,
    TypesComponent,
    LocationsComponent,
    AddTypeComponent,
    AddLocationComponent,
    ChangeTypeComponent,
    ChangeLocationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    SharedService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
