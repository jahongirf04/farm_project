import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Workers, WorkersDocument } from './schemas/worker.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WorkersService {
  constructor(
    @InjectModel(Workers.name) private workerModel: Model<Workers>,
  ) {}

  async create(createworkerDto: CreateWorkerDto): Promise<Workers> {

    const createdworker = new this.workerModel(createworkerDto);
    createdworker.save();

    return createdworker;
  }

  async findAll() {
    const workers = await this.workerModel.find().populate('speciality_id');
    return workers;
  }

  findOne(id: string) {
    return this.workerModel.findById(id).exec();
  }

  async update(id: string, updateworkerDto: UpdateWorkerDto) {
    await this.workerModel.findByIdAndUpdate(id, updateworkerDto);
    return 'Updated';
  }

  async remove(id: string) {
    await this.workerModel.findByIdAndDelete(id);
    return 'Deleted';
  }
}
