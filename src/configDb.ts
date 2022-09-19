import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Project } from './projects/project.entity';

export const getConfig = (): TypeOrmModuleOptions => {
  require('dotenv').config();

  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTRGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    entities: [Project],
  };
};
