import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import DatabaseLogger from './utils/database.logger';

// For application
export function optionsFactory(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    entities: [__dirname + '/../schemas/*{.ts,.js}'],
    synchronize: JSON.parse(process.env['DATABASE_SYNCHRONIZE']),
    autoLoadEntities: true,
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    migrationsRun: true,
    logger: new DatabaseLogger(),
  };
}

// Manual load config when run from the cli
if (
  !process.env['DATABASE_HOST'] &&
  (!process.env['NODE_ENV'] ||
    process.env['NODE_ENV'] === 'local' ||
    process.env['NODE_ENV'] === 'test')
) {
  // eslint-disable-next-line
  require('dotenv').config();
}

// For cli migration
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env['DATABASE_HOST'],
  port: parseInt(process.env['DATABASE_PORT']),
  username: process.env['DATABASE_USER'],
  password: process.env['DATABASE_PASSWORD'],
  database: process.env['DATABASE_NAME'],
  schema: process.env['DATABASE_SCHEMA'],
  entities: [__dirname + '/schema/*.ts'],
  synchronize: JSON.parse(process.env['DATABASE_SYNCHRONIZE']),
  logger: new DatabaseLogger(),
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/migration/*{.ts,.js}'],
});
