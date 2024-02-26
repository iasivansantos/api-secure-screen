import { DataSource } from 'typeorm';
import 'dotenv/config';
import * as path from 'path';

const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        path.resolve(`${__dirname}/../modules/**/entities/**.entity{.ts,.js}`),
    ],
    migrations: ['dist/database/migrations/*.js'],
    migrationsTableName: 'migrations',
    synchronize: false,
    logging: true,
});

export default dataSource;
