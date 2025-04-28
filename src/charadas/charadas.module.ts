import { Module } from '@nestjs/common';
import { CharadasService } from './charadas.service';
import { CharadasController } from './charadas.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [CharadasController],
  providers: [CharadasService],
})
export class CharadasModule {}
