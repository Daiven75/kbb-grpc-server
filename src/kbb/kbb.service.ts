import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/PrismaService';
import { KbbDto } from './dto/kbb.dto';

@Injectable()
export class KbbService {
  constructor(private readonly prismaService: PrismaService) {}

  async findKbbId(id: number): Promise<KbbDto> {
    return await this.prismaService.kbb.findUnique({
      where: { id },
    });
  }

  async findAllKbb(): Promise<KbbDto[]> {
    return await this.prismaService.kbb.findMany();
  }
}
