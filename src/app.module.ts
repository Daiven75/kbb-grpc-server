import { Module } from '@nestjs/common';
import { KbbModule } from './kbb/kbb.module';

@Module({
  imports: [KbbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
