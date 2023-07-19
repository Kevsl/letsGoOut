import { Transform } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsArray,
} from 'class-validator';

export class createActivityDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  date: string;

  @IsString()
  location: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  maxParticipant: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  participant: number;

  @IsOptional()
  isActive: string;

  @IsOptional()
  createdAt: string;

  @IsOptional()
  updatedAt: string;

  @IsString()
  material: string;

  @IsArray()
  @IsString({ each: true })
  photo: string;

  @IsString()
  user: string;

  @IsString()
  category: string;
}
