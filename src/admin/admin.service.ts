import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UUID } from 'crypto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    createAdminDto.hashed_password = await bcrypt.hash(
      createAdminDto.hashed_password,
      10,
    );

    const createdAdmin = new this.adminModel(createAdminDto);
    createdAdmin.save();
    const tokens = await this.generateToken(createdAdmin);
    const hashed_token = await bcrypt.hash(await tokens.refreshToken, 7);

    const updatedAdmin = await this.adminModel.findByIdAndUpdate(
      createdAdmin._id,
      { hashed_token },
      { new: true },
    );

    return updatedAdmin;
  }

  private async generateToken(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_creator: admin.is_creator,
      is_active: admin.is_active,
    };
    return {
      accessToken: this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      refreshToken: this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    };
  }

  async findAll() {
    const admins = await this.adminModel.find();
    return admins;
  }

  findOne(id: string) {
    return this.adminModel.findById(id).exec();
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    await this.adminModel.findByIdAndUpdate(id, updateAdminDto);
    return 'Updated';
  }

  async remove(id: string) {
    await this.adminModel.findByIdAndDelete(id);
    return 'Deleted';
  }
}
