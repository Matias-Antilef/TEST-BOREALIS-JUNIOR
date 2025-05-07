import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [CategoriasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
