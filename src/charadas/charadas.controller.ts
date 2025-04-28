import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CharadasService } from './charadas.service';
import { CreateCharadaDto } from './dto/create-charada.dto';
import { UpdateCharadaDto } from './dto/update-charada.dto';

@Controller('charadas')
export class CharadasController {
  constructor(private readonly charadasService: CharadasService) {}

  @Post()
  create(@Body() createCharadaDto: CreateCharadaDto) {
    return this.charadasService.create(createCharadaDto);
  }

  @Get()
  findAll() {
    return this.charadasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charadasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCharadaDto: UpdateCharadaDto) {
    return this.charadasService.update(+id, updateCharadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charadasService.remove(+id);
  }
}
