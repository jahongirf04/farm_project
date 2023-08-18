import { Injectable } from '@nestjs/common';
import { CreateBlocksDto } from './dto/create-blocks.dto';
import { UpdateBlocksDto } from './dto/update-blocks.dto';
import { Blocks, BlocksDocument } from './schemas/blocks.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Blocks.name) private BlocksModel: Model<Blocks>,
  ) {}

  async create(createBlocksDto: CreateBlocksDto): Promise<Blocks> {
    const createdBlocks = new this.BlocksModel(createBlocksDto);
    createdBlocks.save();

    return createdBlocks;
  }

  async findAll() {
    const Blockss = await this.BlocksModel.find();
    return Blockss;
  }

  findOne(id: string) {
    return this.BlocksModel.findById(id).exec();
  }

  async update(id: string, updateBlocksDto: UpdateBlocksDto) {
    await this.BlocksModel.findByIdAndUpdate(id, updateBlocksDto);
    return 'Updated';
  }

  async remove(id: string) {
    await this.BlocksModel.findByIdAndDelete(id);
    return 'Deleted';
  }
}
