import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const [neumaticos, chasis, motor, accesorios] = await prisma.$transaction(
    async (prisma) => {
      const neumaticos = await prisma.categorias.create({
        data: {
          nombre: 'Neumaticos',
        },
      });

      const chasis = await prisma.categorias.create({
        data: {
          nombre: 'Chasis',
        },
      });

      const motor = await prisma.categorias.create({
        data: {
          nombre: 'Motor',
        },
      });

      const accesorios = await prisma.categorias.create({
        data: {
          nombre: 'Accesorios',
        },
      });
      return [neumaticos, chasis, motor, accesorios];
    },
  );
  console.log([neumaticos, chasis, motor, accesorios]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
