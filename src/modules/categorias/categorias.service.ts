import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}
  async getById(id: number) {
    console.log(id);
    const categoriaBuscada = await this.prisma.categorias.findUnique({
      where: { id },
    });

    if (!categoriaBuscada) {
      throw new NotFoundException('Categoría no encontrada');
    }

    return categoriaBuscada;
  }
}
