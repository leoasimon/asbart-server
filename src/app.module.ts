import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConfig } from './configDb';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [TypeOrmModule.forRoot(getConfig()), ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
