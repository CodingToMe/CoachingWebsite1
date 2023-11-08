import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
// import { ParcheseCardComponent } from './components/parchese-card/parchese-card.component';
import { CoursesCardComponent } from './courses/courses-card/courses-card.component';
import { AboutUsComponent } from './about/about-us/about-us.component';

const routes: Routes = [
  {path:"" ,component:AppComponent},
  {path:"login",component:LoginComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "login", component:LoginComponent},
    { path: "register", component:RegisterComponent},
    {path:"courses-card",component:CoursesCardComponent},
    {path:"about",component:AboutUsComponent}
  ], { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
