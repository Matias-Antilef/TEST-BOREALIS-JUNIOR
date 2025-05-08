echo "Instalando dependencias (npm install)"
npm install

echo "Inicializando cliente de prisma"
npx prisma migrate dev --name "init"

echo "Inicializando PostgreSQL (docker-compose up)"
docker-compose up