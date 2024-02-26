import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const { port } = app.get(ConfigService).get('application');

    const config = new DocumentBuilder()
        .setTitle('API Secure Screen')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/docs', app, document, {
        customSiteTitle: 'API Secure Screen',
        swaggerOptions: {
            docExpansion: 'none',
        },
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    app.enableCors();

    await app.listen(port);
}
bootstrap();
