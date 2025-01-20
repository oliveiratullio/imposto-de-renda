import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxDeclarationDto } from './create-tax-declaration.dto';

export class UpdateTaxDeclarationDto extends PartialType(
  CreateTaxDeclarationDto,
) {}
