import { Controller, Get, Post, Delete, Param } from '@nestjs/common';


@Controller('plan')
export class PlanController {

    @Get()
    get(): string  {
        return 'first method'
    }

    @Get('/id/:idparam')
    getPlans(@Param('idparam') myid: string): string  {
        if (typeof(myid)) return 'please add ID'
    }
}
