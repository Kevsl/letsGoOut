import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class EditActivityDto {
  @IsString()
  name: string;

  @IsString()
  descritption: string;

  @IsDateString()
  @IsOptional()
  date: Date;

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
  isActive: boolean;

  @IsDateString()
  @IsOptional()
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updatedAt: Date;

  @IsString()
  material: string;

  @IsString()
  photo: string;

  @IsString()
  user: string;

  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
