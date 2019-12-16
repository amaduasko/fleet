import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DriversComponent } from "./container/drivers-container.component";
import { FilterComponent } from "./components/filter/filter.component";
import { TableComponent } from "./components/table/table.component";

@NgModule({
  declarations: [DriversComponent, FilterComponent, TableComponent],
  imports: [CommonModule]
})
export class DriversModule {}
