import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./pages/calculator/calculator.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
