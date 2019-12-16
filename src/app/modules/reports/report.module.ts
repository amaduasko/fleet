import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportRoutingModule } from "./report.routing";
import { ReportsComponent } from "./container/reports-container.component";
@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, ReportRoutingModule]
})
export class ReportModule {}
