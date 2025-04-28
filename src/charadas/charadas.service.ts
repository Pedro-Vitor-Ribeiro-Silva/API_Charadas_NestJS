import { Injectable } from '@nestjs/common';
import { CreateCharadaDto } from './dto/create-charada.dto';
import { UpdateCharadaDto } from './dto/update-charada.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CharadasService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCharadaDto: CreateCharadaDto) {
    return this.prisma.charadas.create({ data: createCharadaDto });
  }

  findAll() {
    return this.prisma.charadas.findMany({
      select: {
        id: true,
        pergunta: true,
        resposta: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.charadas.findUnique({
      where: { id },
      select: {
        id: true,
        pergunta: true,
        resposta: true,
      },
    });
  }

  update(id: number, updateCharadaDto: UpdateCharadaDto) {
    return this.prisma.charadas.update({
      where: { id },
      data: updateCharadaDto,
    });
  }

  remove(id: number) {
    return this.prisma.charadas.delete({ where: { id } });
  }
}
