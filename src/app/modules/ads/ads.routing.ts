import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdsComponent } from "./container/ads-container.component";

const routes: Routes = [{ path: "", component: AdsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule {}
