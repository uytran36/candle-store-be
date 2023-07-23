import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  SWAGGER_API_ENDPOINT,
  SWAGGER_API_NAME,
  SWAGGER_API_DESCRIPTION,
  SWAGGER_API_DEFAULT_VERSION,
} from './swagger.constant';
import { swaggerOptions } from './swagger.options';
import { ConfigService } from '@nestjs/config';

export const setupSwagger = (app: INestApplication) => {
  const configService = app.get(ConfigService);
  const swaggerConfigs = new DocumentBuilder()
    .setTitle(SWAGGER_API_NAME)
    .setDescription(SWAGGER_API_DESCRIPTION)
    .setVersion(
      configService.get<string>('appVersion') || SWAGGER_API_DEFAULT_VERSION,
    )
    .addTag('Auth')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(
    app,
    swaggerConfigs,
    swaggerOptions,
  );
  SwaggerModule.setup(SWAGGER_API_ENDPOINT, app, document);
};
