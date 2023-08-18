import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Workers, WorkersSchema } from './schemas/worker.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Workers.name, schema: WorkersSchema }]),
  ],

  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
