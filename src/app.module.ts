import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import config from 'config';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get('database.port'),
        host: configService.get('database.host'),
        logging: configService.get('database.logging'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        synchronize: configService.get('database.synchronize'),
      }),
    }),
  ],
})
export class AppModule {}
