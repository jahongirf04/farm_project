import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { Speciality, SpecialityDocument } from './schemas/speciality.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectModel(Speciality.name) private specialityModel: Model<Speciality>,
  ) {}

  async create(createspecialityDto: CreateSpecialityDto): Promise<Speciality> {
    const createdspeciality = new this.specialityModel(createspecialityDto);
    createdspeciality.save();

    return createdspeciality;
  }

  async findAll() {
    const specialitys = await this.specialityModel.find();
    return specialitys;
  }

  findOne(id: string) {
    return this.specialityModel.findById(id).exec();
  }

  async update(id: string, updatespecialityDto: UpdateSpecialityDto) {
    await this.specialityModel.findByIdAndUpdate(id, updatespecialityDto);
    return 'Updated';
  }

  async remove(id: string) {
    await this.specialityModel.findByIdAndDelete(id);
    return 'Deleted';
  }
}
