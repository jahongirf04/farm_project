import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { WorkersModule } from './workers/workers.module';
import { SpecialityModule } from './speciality/speciality.module';
import { BlocksModule } from './blocks/blocks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    WorkersModule,
    SpecialityModule,
    BlocksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
