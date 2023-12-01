import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanService {
    
    getServices= () => {
        return ['service1', 'service2', 'service3', 'service4', 'service5', 'service6', 'service7', 'service8']
    }
}
