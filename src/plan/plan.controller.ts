import { Controller, Get, Post, Delete, Param } from '@nestjs/common';


@Controller('plan')
export class PlanController {

    @Get()
    get(): string  {
        return 'travel plans and destinations'
    }

    @Get('/id/:idparam')
    getPlans(@Param('idparam') myid: string): string  {
        if (typeof(myid)) return 'please add ID'
    }
}
