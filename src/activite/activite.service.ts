import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  EditActivityDto,
  createActivityDto,
} from './dto';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  async getActivities() {
    const activities =
      await this.prisma.activity.findMany({
        where: {},
      });
    return activities;
  }

  getActivityByLocation(location: string) {
    return this.prisma.activity.findMany({
      where: {
        location: location,
        isActive: 'true',
      },
    });
  }

  async createActivity(dto: createActivityDto) {
    const activity =
      await this.prisma.activity.create({
        data: {
          ...dto,
        },
      });

    return activity;
  }
}
