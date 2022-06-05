// import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { KbbListResponse } from './dto/kbb-list.dto';
import { KbbDto } from './dto/kbb.dto';
import { KbbService } from './kbb.service';

@Controller()
export class KbbController {
  constructor(private readonly kbbService: KbbService) {}

  @GrpcMethod('KbbService', 'findKbbId')
  async findKbbId(data: { id: number }): Promise<KbbDto> {
    // hidden parameters Metadata, ServerUnaryCall
    return await this.kbbService.findKbbId(data.id);
  }

  @GrpcMethod('KbbService', 'findAllKbb')
  async findAllKbb(): Promise<KbbListResponse> {
    // hidden parameters data, Metadata, ServerUnaryCall
    const data = await this.kbbService.findAllKbb();
    return { data };
  }
}
