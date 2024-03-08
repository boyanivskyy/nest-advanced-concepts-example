import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  grantTo() {
    console.log('hello from method grantTo in RewardsService');
  }
}
