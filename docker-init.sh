echo "Instalando dependencias (npm install)"
npm install

echo "Inicializando PostgreSQL (docker-compose up)"
docker-compose up

echo "Inicializando cliente de prisma"
npx prisma generate --name "init"

echo "Inicializando backend"
npm run dev 