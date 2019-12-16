import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./container/app.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { DriversModule } from "./modules/drivers/drivers.module";
@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [BrowserModule, AppRoutingModule, DriversModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
