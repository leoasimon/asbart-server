import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Project } from './projects/project.entity';

export const getConfig = (): TypeOrmModuleOptions => {
  const env = process.env.NODE_ENV || 'development';

  const common: Partial<TypeOrmModuleOptions> = {
    type: 'postgres',
    entities: [Project],
  };

  if (env === 'development') {
    require('dotenv').config();

    return {
      ...common,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTRGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
    };
  }

  return {
    ...common,
    url: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
};
