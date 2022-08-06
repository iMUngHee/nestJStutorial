import { Module } from '@nestjs/common';
import { PowerModule } from './../power/power.module';
import { CpuService } from './cpu.service';

@Module({
  imports: [PowerModule],
  providers: [{ provide: 'CpuInterface', useClass: CpuService }],
  // providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
