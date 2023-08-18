import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkerDto } from './create-worker.dto';
import mongoose from 'mongoose';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {
  name: string;

  age: string;

  experience: string;

  speciality_id: mongoose.Schema.Types.ObjectId;

  phone_number: string;

  username: string;

  worker_schedule: string;

  block: string;
}
