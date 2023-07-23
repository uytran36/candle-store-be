import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './utils/interceptors/logging.interceptor';
import { ErrorsInterceptor } from './utils/interceptors/error.interceptor';
import { setupSwagger } from '@/common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.enableCors();

  setupSwagger(app);
  await app.listen(process.env.PORT);
}
bootstrap();
