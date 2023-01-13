import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';

const privateKey  = fs.readFileSync('private.pem');
const publicKey  = fs.readFileSync('public.pem');

@Module({
  imports: [
    // register jwt module
    JwtModule.registerAsync({
      useFactory: async () => {
        const options: JwtModuleOptions = {
          privateKey: privateKey,
          publicKey: publicKey,
          signOptions: {
            expiresIn: '24h',
            algorithm: 'RS256',
          },
        };
        return options;
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
