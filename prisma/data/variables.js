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

export {diveCategories, padiCertifications};