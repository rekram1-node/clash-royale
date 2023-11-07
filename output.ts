import { writeFile, writeFileSync } from 'fs';
import { createMegaDraft } from './src/models/megaDraft';

console.log(createMegaDraft().cards.length)

writeFileSync("out.json", JSON.stringify(createMegaDraft().cards))