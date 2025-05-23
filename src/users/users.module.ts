import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { request } from 'http';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
      configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(
          {path:'/users',method:RequestMethod.GET},
        ).apply(AuthMiddleware).forRoutes('users');
      }


}
