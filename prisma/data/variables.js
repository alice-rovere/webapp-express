import { faker } from "@faker-js/faker";

const padiCertifications = [
  { name: "Scuba Diver", maxDepth: 12 },
  { name: "Open Water Diver", maxDepth: 18 },
  { name: "Adventure Diver", maxDepth: 30 },
  { name: "Advanced Open Water Diver", maxDepth: 30 },
  { name: "Rescue Diver", maxDepth: 30 },
  { name: "Deep Diver (Specialty)", maxDepth: 40 },
  { name: "Enriched Air (Nitrox) Diver", maxDepth: 40 },
  { name: "Wreck Diver (Specialty)", maxDepth: 40 },
  { name: "Cavern Diver (Specialty)", maxDepth: 40 },
  { name: "Night Diver (Specialty)", maxDepth: 30 },
  { name: "Master Scuba Diver", maxDepth: 40 },
  { name: "Divemaster", maxDepth: 40 }
];

const diveCategories = [
  { name: "Reef" },        // Barriera corallina / Scogliera
  { name: "Wreck" },       // Relitto
  { name: "Cavern / Cave" }, // Grotta / Caverna
  { name: "Wall" },        // Parete verticale
  { name: "Sandy Bottom" }, // Fondale sabbioso
  { name: "Pinnacle" },    // Secca / Pinnacolo
  { name: "Drift" },       // Immersione in corrente
  { name: "Muck" },        // Fondale fangoso/detritico (macro-fotografia)
  { name: "Blue Hole" },   // Dolina marina / Voragine
  { name: "Lagoon" }       // Laguna / Acque basse
];

// Estrarre  i nomi delle categorie ("Reef", "Wreck", ecc.)
const categoryNames = diveCategories.map((cat) => cat.name);

// Generare 20 nomi unici usando le categorie create sopra
const uniqueNames = faker.helpers.uniqueArray(
  () => `${faker.word.adjective()} ${faker.helpers.arrayElement(categoryNames)}`,
  20
);

// creare 20 diveSites usando nomi unici creati sopra
const fakeDiveSites = uniqueNames.map((siteName) => ({
  name: siteName,
  location: `${faker.location.city()}, ${faker.location.country()}`,
  maxDepth: faker.number.int({ min: 8, max: 40 }),
  description: faker.lorem.paragraph(),
  isNightDive: faker.datatype.boolean({ probability: 0.3 }),
  mapUrl: faker.image.urlPicsumPhotos({ width: 800, height: 600 }),
  marineLife: faker.helpers
    .multiple(() => faker.animal.fish(), { count: { min: 3, max: 6 } })
    .join(', '),
}));

// console.log(fakeDiveSites)

export {fakeDiveSites, diveCategories, padiCertifications};