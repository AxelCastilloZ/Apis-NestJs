import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { ReportesModule } from './reportes/reportes.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, CarsModule, ReportesModule],

})
export class AppModule {}
