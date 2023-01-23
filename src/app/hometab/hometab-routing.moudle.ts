import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherService } from '../core/service/weather.service';
import { HomeComponent } from '../home/home.component';
import { WeatherDetailPageComponent } from '../weather-detail-page/weather-detail-page/weather-detail-page.component';
import { WeatherListPageComponent } from '../weather-list-page/weather-list-page/weather-list-page.component';

const routes: Routes = [
 { path: 'home',component: HomeComponent},
 { path: 'favourite', component: WeatherListPageComponent },
 { path: 'recentSearch', component: WeatherListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTabRoutingModule {}
