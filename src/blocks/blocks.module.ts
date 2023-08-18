import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blocks, BlocksSchema } from './schemas/blocks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Blocks.name, schema: BlocksSchema },
    ]),
  ],

  controllers: [BlocksController],
  providers: [BlocksService],
})
export class BlocksModule {}
