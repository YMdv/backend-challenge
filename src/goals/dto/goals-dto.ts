import { OmitType } from '@nestjs/swagger';
import { Goals } from '../entity/goals.entity';

export class GoalsDto extends OmitType(Goals, ['local']) {}
