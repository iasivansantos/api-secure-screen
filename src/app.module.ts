import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import appConfig from './config/app.config';

import { DataSource, DataSourceOptions } from 'typeorm';

import { SecureScreenModule } from './modules/secure-screen/secure-screen.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig],
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
                configService.get('database'),

            dataSourceFactory: async (options: DataSourceOptions) =>
                new DataSource(options).initialize(),
        }),
        SecureScreenModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
