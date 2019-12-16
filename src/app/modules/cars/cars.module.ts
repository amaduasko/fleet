import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarsComponent } from "./container/cars-container.component";
import { TableComponent } from "./components/table/table.component";
import { CarModule } from "./modules/car/car.module";
import { CarsRoutingModule } from "./cars.routing";
@NgModule({
  declarations: [CarsComponent, TableComponent],
  imports: [CommonModule, CarModule, CarsRoutingModule]
})
export class CarsModule {}
