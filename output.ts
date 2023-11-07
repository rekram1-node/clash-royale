import { writeFile, writeFileSync } from 'fs';
import { createMegaDraft } from './src/cards/megaDraft';

writeFileSync("out.json", JSON.stringify(createMegaDraft().cards))