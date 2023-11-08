import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comman/header/header.component';
import { ClouserComponent } from './components/clouser/clouser.component';
import { CardsComponent } from './components/cards/cards.component'; 
import { SlidbarComponent } from './components/slidbar/slidbar.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ParcheseCardComponent } from './components/parchese-card/parchese-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { QoutesCarouselComponent } from './components/qoutes-carousel/qoutes-carousel.component';
import { FooterComponent } from './comman/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { CoursesCardComponent } from './courses/courses-card/courses-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClouserComponent,
    CardsComponent,
    SlidbarComponent,
    ImageCardComponent,
    ParcheseCardComponent,
    BannerComponent,
    QoutesCarouselComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutUsComponent,
    CoursesCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
