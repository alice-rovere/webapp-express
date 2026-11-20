import prisma from '../libs/prismaClient.js';

async function main() {
  console.log('Seeding started');

}
 
main()
  .catch(e => {
    console.log(e);
    process.exit(1); // termina il processo nel terminale
  })
  .finally(() => prisma.$disconnect()); // chiude connessione al DB