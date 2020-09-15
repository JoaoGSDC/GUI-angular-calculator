import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalculatorComponent } from "./pages/calculator/calculator.component";

const routes: Routes = [
  {
    path: "",
    component: CalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
