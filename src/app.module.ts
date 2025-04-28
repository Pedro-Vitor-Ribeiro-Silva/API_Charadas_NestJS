import { Module } from '@nestjs/common';
import { CharadasModule } from './charadas/charadas.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [CharadasModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
