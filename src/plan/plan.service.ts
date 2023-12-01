import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanService {
    
    getServices= () => {
        return ['service1', 'service2']
    }
}
