import prisma from '../libs/prismaClient.js';
import { faker } from '@faker-js/faker';
import { padiCertifications, diveCategories } from './data/variables.js';

async function main() {
  console.log('Seeding started');

  // 1. Pulizia database (prima la tabella figlia, poi le padri)
  await prisma.diveSite.deleteMany();
  await prisma.category.deleteMany();
  await prisma.certificationLevel.deleteMany();

  await prisma.$executeRawUnsafe("ALTER TABLE `DiveSite` AUTO_INCREMENT = 1");
  await prisma.$executeRawUnsafe("ALTER TABLE `Category` AUTO_INCREMENT = 1");
  await prisma.$executeRawUnsafe("ALTER TABLE `CertificationLevel` AUTO_INCREMENT = 1");

  // 2. Inserimento dati statici
  await prisma.category.createMany({ data: diveCategories });
  await prisma.certificationLevel.createMany({ data: padiCertifications });

  const categories = await prisma.category.findMany();
  const certificationLevels = await prisma.certificationLevel.findMany();

  // 3. Generazione nomi unici con Faker
  const categoryNames = diveCategories.map((cat) => cat.name);
  const uniqueNames = faker.helpers.uniqueArray(
    () => `${faker.word.adjective()} ${faker.helpers.arrayElement(categoryNames)}`,
    20
  );

  // 4. Creazione dei 20 DiveSite già completi di relazioni
  const completeDiveSites = uniqueNames.map((siteName) => {
    const maxDepth = faker.number.int({ min: 8, max: 40 });
    const randomCategory = faker.helpers.arrayElement(categories);

    // Trova il brevetto minimo richiesto per la profondità generata
    const minRequiredCert = certificationLevels
      .filter((cert) => cert.maxDepth >= maxDepth)
      .sort((a, b) => a.maxDepth - b.maxDepth)[0];

    return {
      name: siteName,
      location: `${faker.location.city()}, ${faker.location.country()}`,
      maxDepth,
      description: faker.lorem.paragraph(),
      isNightDive: faker.datatype.boolean({ probability: 0.3 }),
      mapUrl: faker.image.urlPicsumPhotos({ width: 800, height: 600 }),
      marineLife: faker.helpers
        .multiple(() => faker.animal.fish(), { count: { min: 3, max: 6 } })
        .join(', '),
      categoryId: randomCategory.id,
      certificationLevelId: minRequiredCert.id,
    };
  });

  // 5. Salvataggio nel DB
  await prisma.diveSite.createMany({ data: completeDiveSites });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
