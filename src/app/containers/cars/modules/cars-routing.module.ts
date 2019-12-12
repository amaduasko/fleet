import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "../cars-components/table/table.component";
import { CarComponent } from "../cars-components/car/car.component";

const routes: Routes = [
  { path: "cars", component: TableComponent },
  { path: "some-car", component: CarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}
