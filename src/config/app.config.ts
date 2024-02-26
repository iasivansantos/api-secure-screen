import 'dotenv/config';
import * as path from 'path';

export default () => ({
    application: {
        port: parseInt(process.env.APP_PORT, 10),
    },
    database: {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [
            path.resolve(
                `${__dirname}/../modules/**/entities/**.entity{.ts,.js}`,
            ),
        ],
        migrations: [path.resolve(`${__dirname}/../database/migrations/*.js'`)],
        logging: process.env.DB_LOGGING === 'true',
        synchronize: false,
    },
    session: {
        token: {
            secret: process.env.TOKEN_SECRET,
            expiresIn: process.env.TOKEN_EXPIRES_IN,
        },
        refreshToken: {
            secret: process.env.REFRESH_TOKEN_SECRET,
            expiresInDay: process.env.REFRESH_TOKEN_EXPIRES_IN_DAY,
        },
    },
});
