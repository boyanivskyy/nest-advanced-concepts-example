import { IntervalHost } from 'src/scheduler/decorators/interval-host.decorator';
import { Interval } from 'src/scheduler/decorators/interval.decorator';

@IntervalHost
export class CronService {
  // TODO: should be a number
  @Interval(undefined)
  everySecond() {
    console.log('this will be logged every second');
  }
}
