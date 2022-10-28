import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { RadialBarComponent } from './radial-bar/radial-bar.component';
import { BasicLineComponent } from './basic-line/basic-line.component';
import { ActivityGaugeComponent } from './activity-gauge/activity-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialBarComponent,
    BasicLineComponent,
    ActivityGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
