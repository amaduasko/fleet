import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./containers/app/app.component";
import { DriversComponent } from "./containers/drivers/drivers.component";
import { FilterComponent } from "./components/filter/filter.component";
import { TableComponent } from "./components/table/table.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { AdsComponent } from "./containers/ads/ads.component";
import { CarsComponent } from "./containers/cars/cars.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { CarsModule } from "./containers/cars/modules/cars.module";

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    FilterComponent,
    TableComponent,
    ReportsComponent,
    AdsComponent,
    CarsComponent,
    SideNavComponent
  ],
  imports: [BrowserModule, CarsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
