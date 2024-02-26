import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { SecureScreenService } from './secure-screen.service';

@ApiTags('Secure screen')
@Controller('secure-screens')
export class SecureScreenController {
    constructor(private readonly service: SecureScreenService) {}

    @ApiOperation({ summary: 'Lock screen' })
    @ApiOkResponse({ description: 'Locked screen' })
    @ApiResponse({
        status: 423,
        description: 'Screen is already locked',
    })
    @ApiBadRequestResponse({
        description: 'Contract or business rule do not match',
    })
    @Post('/lock')
    async lock(@Res() res: Response) {
        await this.service.lock();

        return res.sendStatus(HttpStatus.OK);
    }

    @ApiOperation({ summary: 'Unlock screen' })
    @ApiOkResponse({ description: 'Unlocked screen' })
    @ApiNotFoundResponse({
        description: 'No screen to unlock',
    })
    @ApiBadRequestResponse({
        description: 'Contract or business rule do not match',
    })
    @Post('/unlock')
    async unlock(@Res() res: Response) {
        await this.service.unlock();

        return res.sendStatus(HttpStatus.OK);
    }
}
