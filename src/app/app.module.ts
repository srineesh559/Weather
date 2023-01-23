import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { WeatherListViewComponent } from './shared/list-view/weather-list-view/weather-list-view.component';
import { WeatherPropertyViewComponent } from './shared/weather-property-view/weather-property-view/weather-property-view.component';
import { WeatherDetailPageComponent } from './weather-detail-page/weather-detail-page/weather-detail-page.component';
import { WeatherListPageComponent } from './weather-list-page/weather-list-page/weather-list-page.component';
import { HomeComponent } from './home/home.component';
import { MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { HometabComponent } from './hometab/hometab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherListViewComponent,
    WeatherPropertyViewComponent,
    WeatherDetailPageComponent,
    WeatherListPageComponent,
    HometabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    MatTabsModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
