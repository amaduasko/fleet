import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "../cars-components/table/table.component";
import { CarComponent } from "../cars-components/car/car.component";
import { CarsRoutingModule } from "./cars-routing.module";
import { FormComponent } from "../cars-components/form/form.component";
import { ButtonComponent } from "../cars-components/button/button.component";
@NgModule({
  declarations: [CarComponent, TableComponent, FormComponent, ButtonComponent],
  imports: [CommonModule, CarsRoutingModule]
})
export class CarsModule {}
