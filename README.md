# webapp-express

Progetto full-stack per l'esame finale.

L'obiettivo è sviluppare un'applicazione completa partendo dalla creazione delle API REST lato server fino all'interfaccia utente responsive, seguendo un approccio mobile-first.

## Tema del progetto

Ho scelto di realizzare un catalogo dedicato ai **Dive Sites (siti di immersione)**, un ambito che conosco bene praticando subacquea.

L'idea è permettere di esplorare e gestire diversi punti d'immersione classificati per tipologia (es. relitto, grotta, scogliera, fondale sabbioso) e per brevetto minimo richiesto (es. Open Water, Advanced, Specialità), così da identificare subito le immersioni adatte al proprio livello di esperienza.

## Stack Tecnologico

**Backend**

- Node.js (JavaScript) & Express.js
- Prisma ORM
- Database MySQL
- Package Manager: `pnpm`
- Postman (per testare gli endpoint)

**Frontend** _(in arrivo nei prossimi step)_

- React.js
- CSS Framework: Tailwind CSS o Bulma (approccio mobile-first)

## Stato del progetto e Roadmap

- [ ] **Step 1: Setup Backend & Database**
  - Inizializzazione progetto Node con `pnpm` e installazione Express
  - Struttura base del Router con rotte CRUD (attualmente con risposte testuali di test)
  - Configurazione di Prisma ORM con MySQL
  - Definizione dello schema Prisma con 3 modelli in relazione (`DiveSite`, `Category` e `CertificationLevel`)
- [ ] **Step 2: Logica dei Controller e Query Prisma**
  - Collegamento delle rotte CRUD al database reale
  - Gestione errori e validazioni base
- [ ] **Step 3: Setup Frontend React**
  - Creazione dell'interfaccia utente mobile-first
  - Chiamate API al backend e visualizzazione dei dati
