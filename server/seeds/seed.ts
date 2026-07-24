import fs from 'fs';
import path from 'path';

const SEED_DATA_DIR = path.join(__dirname, 'data');
const SEED_IMAGES_DIR = path.join(SEED_DATA_DIR, 'images');
const SEED_MOVIES_FILE = path.join(SEED_DATA_DIR, 'movies.seed.json');

const DATA_DIR = path.join(__dirname, '..', 'data');
const UPLOADS_DIR = path.join(__dirname, '..', 'public', 'uploads');
const MOVIES_FILE = path.join(DATA_DIR, 'movies.json');

function seed() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });

  fs.copyFileSync(SEED_MOVIES_FILE, MOVIES_FILE);
  console.log(`✅ movies.json copiado para ${MOVIES_FILE}`);

  const images = fs.readdirSync(SEED_IMAGES_DIR);

  for (const file of images) {
    fs.copyFileSync(path.join(SEED_IMAGES_DIR, file), path.join(UPLOADS_DIR, file));
  }
  console.log(`✅ ${images.length} imagem(ns) copiada(s) para ${UPLOADS_DIR}`);

  console.log('🌱 Base populada com dados de exemplo!');
}

seed();
