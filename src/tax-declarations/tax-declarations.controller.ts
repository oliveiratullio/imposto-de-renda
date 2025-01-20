import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TaxDeclarationsService } from './tax-declarations.service';
import { CreateTaxDeclarationDto } from './dto/create-tax-declaration.dto';
import { UpdateTaxDeclarationDto } from './dto/update-tax-declaration.dto';

@Controller('tax-declarations')
@UseGuards(AuthGuard('jwt'))
export class TaxDeclarationsController {
  constructor(
    private readonly taxDeclarationsService: TaxDeclarationsService,
  ) {}

  @Post()
  create(@Body() createTaxDeclarationDto: CreateTaxDeclarationDto) {
    return this.taxDeclarationsService.create(createTaxDeclarationDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    const userId = id;
    return this.taxDeclarationsService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxDeclarationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaxDeclarationDto: UpdateTaxDeclarationDto,
  ) {
    return this.taxDeclarationsService.update(id, updateTaxDeclarationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxDeclarationsService.remove(id);
  }
}
