import { Controller, Get, Param } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categoria')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.categoriasService.getById(Number(id));
  }
}
