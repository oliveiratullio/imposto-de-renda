import { Module } from '@nestjs/common';
import { TaxDeclarationsController } from './tax-declarations.controller';
import { TaxDeclarationsService } from './tax-declarations.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [TaxDeclarationsController],
  providers: [TaxDeclarationsService],
})
export class TaxDeclarationsModule {}
