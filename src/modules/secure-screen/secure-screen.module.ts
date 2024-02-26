import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecureScreen } from './entities/secure-screen.entity';
import { SecureScreenController } from './secure-screen.controller';
import { SecureScreenService } from './secure-screen.service';

@Module({
    imports: [TypeOrmModule.forFeature([SecureScreen])],
    controllers: [SecureScreenController],
    providers: [SecureScreenService],
})
export class SecureScreenModule {}
