import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdsRoutingModule } from "./ads.routing";
import { AdsComponent } from "./container/ads-container.component";
import { FilterComponent } from "./components/filter/filter.component";
import { TableComponent } from "./components/table/table.component";

@NgModule({
  declarations: [AdsComponent, FilterComponent, TableComponent],
  imports: [CommonModule, AdsRoutingModule]
})
export class AdsModule {}
