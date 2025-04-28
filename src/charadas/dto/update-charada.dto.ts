import { PartialType } from '@nestjs/mapped-types';
import { CreateCharadaDto } from './create-charada.dto';

export class UpdateCharadaDto extends PartialType(CreateCharadaDto) {
  id: number;
}
