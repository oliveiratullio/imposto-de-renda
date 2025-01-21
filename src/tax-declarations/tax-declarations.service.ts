import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaxDeclarationDto } from './dto/create-tax-declaration.dto';
import { UpdateTaxDeclarationDto } from './dto/update-tax-declaration.dto';

@Injectable()
export class TaxDeclarationsService {
  constructor(private prisma: PrismaService) {}

  create(createTaxDeclarationDto: CreateTaxDeclarationDto) {
    const { userId, ...restOfData } = createTaxDeclarationDto;
    return this.prisma.taxDeclaration.create({
      data: {
        ...restOfData,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.taxDeclaration.findMany({
      where: { userId: userId },
    });
  }

  findOne(id: string) {
    return this.prisma.taxDeclaration.findUnique({ where: { id } });
  }

  update(id: string, updateTaxDeclarationDto: UpdateTaxDeclarationDto) {
    return this.prisma.taxDeclaration.update({
      where: { id },
      data: updateTaxDeclarationDto,
    });
  }

  remove(id: string) {
    return this.prisma.taxDeclaration.delete({ where: { id } });
  }
}
