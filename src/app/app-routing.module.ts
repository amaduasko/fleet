import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DriversContainer } from "./modules/drivers/container/drivers-container.component";

const routes: Routes = [
  { path: "", component: DriversContainer },
  {
    path: "reports",
    loadChildren: () =>
      import("./modules/reports/report.module").then(m => m.ReportModule)
  },
  {
    path: "cars",
    loadChildren: () =>
      import("./modules/cars/cars.module").then(m => m.CarsModule)
  },
  {
    path: "ads",
    loadChildren: () =>
      import("./modules/ads/ads.module").then(m => m.AdsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
