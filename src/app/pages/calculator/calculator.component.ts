import { Component, OnInit } from "@angular/core";

enum Operations {
  SumOperation = "SumOperation",
  SubtractOperation = "SubtractOperation",
  MultiplyOperation = "MultiplyOperation",
  DivisionOperation = "DivisionOperation",
}

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent implements OnInit {
  op = Operations;

  resultValueInput: string = "";
  blockActions: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  operationCalculator(value: string): void {
    const mathOperations = {
      SumOperation() {
        return "+";
      },

      SubtractOperation() {
        return "-";
      },

      MultiplyOperation() {
        return "x";
      },

      DivisionOperation() {
        return "/";
      },
    };

    if (!isNaN(Number(value))) {
      this.resultValueInput += value;
      // this.blockActions = false;
    }

    /* if (this.blockActions) {
      return;
    } */

    const mathOperation = mathOperations[value];
    if (!!mathOperation && !this.blockActions) {
      this.resultValueInput += mathOperation();
      this.blockActions = true;
    }

    /* if (value === ".") {
      this.resultValueInput += ".";
      this.blockActions = true;
    } */
  }

  calculate(): void {
    const total = 1 + 2;
    this.resultValueInput = String(total);
  }
}
