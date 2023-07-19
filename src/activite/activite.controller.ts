import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ActivityService } from './activite.service';
import {
  createActivityDto,
  EditActivityDto,
} from './dto';

@Controller('activity')
export class activiteController {
  constructor(
    private activityService: ActivityService,
  ) {}

  @Get('/location/:id')
  getJourneeById(@Param('id') location: string) {
    return this.activityService.getActivityByLocation(
      location,
    );
  }
  @Get('/all')
  getAllActivities() {
    console.log('controller');
    return this.activityService.getActivities();
  }

  @Post('/create')
  createJournee(
    @Body()
    dto: createActivityDto,
  ) {
    return this.activityService.createActivity(
      dto,
    );
  }
}
