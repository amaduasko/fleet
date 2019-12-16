import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./components/table/table.component";
import { CarComponent } from "./modules/car/container/car.component";

const routes: Routes = [
  { path: "", component: TableComponent },
  { path: "some-car", component: CarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}
