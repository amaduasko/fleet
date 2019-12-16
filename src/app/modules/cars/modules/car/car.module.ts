import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarComponent } from "./container/car.component";
import { FormComponent } from "./components/form/form.component";
import { ButtonComponent } from "./components/button/button.component";
@NgModule({
  declarations: [CarComponent, FormComponent, ButtonComponent],
  imports: [CommonModule]
})
export class CarModule {}
