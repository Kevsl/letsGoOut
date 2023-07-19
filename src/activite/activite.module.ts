import { Module } from '@nestjs/common';
import { activiteController } from './activite.controller';
import { ActivityService } from './activite.service';

@Module({
  providers: [ActivityService],
  controllers: [activiteController],
})
export class ActivityModule {}
