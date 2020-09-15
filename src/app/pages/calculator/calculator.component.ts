import { Component, OnInit } from '@angular/core';

enum Operations {
  SumOperation = 'SumOperation',
  SubtractOperation = 'SubtractOperation',
  MultiplyOperation = 'MultiplyOperation',
  DivisionOperation = 'DivisionOperation',
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  op = Operations;

  equalsClick: boolean = false;
  blockActions: boolean = false;

  firstNumber: string = '';
  secondNumber: string = '';
  operationValue: string = '';
  resultValueInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  operationCalculator(value: string): void {
    if (this.equalsClick) {
      this.resetValues();
      this.equalsClick = false;
    }

    const mathOperations = this.commandsMathOperation();

    if (!isNaN(Number(value)) || value === '.') {
      if (!this.blockActions) {
        this.firstNumber += value;
      } else {
        this.secondNumber += value;
      }

      this.resultValueInput += value;
    }

    const mathOperation = mathOperations[value];
    if (!!mathOperation && !this.blockActions) {
      this.operationValue = value;
      this.resultValueInput += mathOperation();
      this.blockActions = true;
    }
  }

  calculate(): void {
    const firstNumber: number = Number(this.firstNumber);
    const secondNumber: number = Number(this.secondNumber);
    const calculateTotal: any = this.calculateTotal();
    const total: number | string = calculateTotal[this.operationValue](
      firstNumber,
      secondNumber
    );

    this.equalsClick = true;
    this.resultValueInput = String(total);
  }

  resetValues(): void {
    this.blockActions = false;
    this.firstNumber = '';
    this.secondNumber = '';
    this.operationValue = '';
    this.resultValueInput = '';
  }

  calculateTotal(): any {
    const calculateOperations = {
      SumOperation(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
      },

      SubtractOperation(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
      },

      MultiplyOperation(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
      },

      DivisionOperation(
        firstNumber: number,
        secondNumber: number
      ): number | string {
        return secondNumber !== 0
          ? firstNumber / secondNumber
          : 'Operação inválida!';
      },
    };

    return calculateOperations;
  }

  commandsMathOperation(): any {
    const mathOperations = {
      SumOperation() {
        return '+';
      },

      SubtractOperation() {
        return '-';
      },

      MultiplyOperation() {
        return 'x';
      },

      DivisionOperation() {
        return '/';
      },
    };

    return mathOperations;
  }
}
