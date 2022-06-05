import { Module } from '@nestjs/common';
import { PrismaService } from '../database/PrismaService';
import { KbbController } from './kbb.controller';
import { KbbService } from './kbb.service';

@Module({
  controllers: [KbbController],
  providers: [KbbService, PrismaService],
})
export class KbbModule {}
