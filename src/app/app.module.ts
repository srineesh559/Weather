import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { WeatherListViewComponent } from './shared/list-view/weather-list-view/weather-list-view.component';
import { WeatherPropertyViewComponent } from './shared/weather-property-view/weather-property-view/weather-property-view.component';
import { WeatherDetailPageComponent } from './weather-detail-page/weather-detail-page/weather-detail-page.component';
import { WeatherListPageComponent } from './weather-list-page/weather-list-page/weather-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListViewComponent,
    WeatherPropertyViewComponent,
    WeatherDetailPageComponent,
    WeatherListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
