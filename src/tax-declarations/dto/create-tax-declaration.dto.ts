export class CreateTaxDeclarationDto {
  userId: string;
  taxYear: number;
  taxpayerCPF: string;
  annualIncome: number;
  taxDue: number;
  taxPaid: number;
  numberOfDependents?: number;
  pensionContribution?: number;
  educationExpenses?: number;
  healthExpenses?: number;
}
