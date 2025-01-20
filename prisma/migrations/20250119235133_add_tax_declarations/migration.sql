-- CreateTable
CREATE TABLE "tax_declarations" (
    "id" TEXT NOT NULL,
    "taxYear" INTEGER NOT NULL,
    "taxpayerCPF" TEXT NOT NULL,
    "annualIncome" DOUBLE PRECISION NOT NULL,
    "taxDue" DOUBLE PRECISION NOT NULL,
    "taxPaid" DOUBLE PRECISION NOT NULL,
    "numberOfDependents" INTEGER,
    "pensionContribution" DOUBLE PRECISION,
    "educationExpenses" DOUBLE PRECISION,
    "healthExpenses" DOUBLE PRECISION,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "tax_declarations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tax_declarations" ADD CONSTRAINT "tax_declarations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
