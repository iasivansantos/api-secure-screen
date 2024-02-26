import {
    BadRequestException,
    HttpException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { SecureScreen } from './entities/secure-screen.entity';

@Injectable()
export class SecureScreenService {
    constructor(
        @InjectRepository(SecureScreen)
        private repository: Repository<SecureScreen>,
    ) {}

    async lock() {
        const activeLock = await this.findOne();

        if (activeLock) throw new HttpException('Locked', 423);

        try {
            return this.repository.save({});
        } catch (error) {
            throw new BadRequestException(error?.message);
        }
    }

    async unlock() {
        const activeLock = await this.findOne();

        if (!activeLock) throw new NotFoundException();

        try {
            return this.repository.softDelete({ deletedAt: IsNull() });
        } catch (error) {
            throw new BadRequestException(error?.message);
        }
    }

    async findOne() {
        try {
            return this.repository.findOne({
                where: { deletedAt: IsNull() },
            });
        } catch (error) {
            throw new BadRequestException(error?.message);
        }
    }
}
