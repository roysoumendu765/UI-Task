import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainsectionComponent } from './components/mainsection/mainsection.component';
import { CarouselComponent } from './widgets/carousel/carousel.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { MobHeaderComponent } from './widgets/mob-header/mob-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainsectionComponent,
    CarouselComponent,
    FooterComponent,
    MobHeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
