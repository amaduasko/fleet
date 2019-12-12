import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DriversComponent } from "./containers/drivers/drivers.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { CarsComponent } from "./containers/cars/cars.component";
import { AdsComponent } from "./containers/ads/ads.component";
const routes: Routes = [
  { path: "", redirectTo: "drivers", pathMatch: "full" },
  { path: "drivers", component: DriversComponent },
  { path: "reports", component: ReportsComponent },
  { path: "cars", component: CarsComponent },
  { path: "ads", component: AdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
