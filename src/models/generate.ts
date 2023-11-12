import { writeFileSync } from 'fs';
import { Convert, Cards } from './generated/cards';
import { readFileSync } from 'fs';

const excludeList: string[] = [
    "Party Rocket",
    "Party Hut",
    "Terry",
    "Super Archers",
    "Super Ice Golem",
    "Santa Hog Rider",
    "Super Magic Archer",
    "Super Witch",
    "Raging Prince"
]

function createTypeScriptFileFromJson(jsonString: string, tsFilePath: string): void {
    // Parse the JSON string to objects
    const cards: Cards = Convert.toCards(jsonString);

    // Start the content of the TypeScript file
    let tsFileContent = `// This file is auto-generated. Do not edit directly.\n\n`;
    tsFileContent += `import { Item } from './cards';\n\n`;

    // Iterate over the items and create export statements
    for (const item of cards.items) {
        let name = item.name;
        if (excludeList.includes(item.name))
            continue;
        // skip odd cases...
        if (item.name == "Clone" && item.id != 28000013)
            continue;
        if (item.name == "Royal Recruits" && item.maxEvolutionLevel == undefined)
            continue;
        if (item.name == "Little Prince") {
            item.iconUrls.medium = "https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/1UpPU2V4Wte5r3ff5Ofnwx/afaef695b98e546327187c3b0340e0ec/Little_Prince_card_frame_alpha.png"
        }
        const variableName = sanitizeVariableName(name);
        tsFileContent += `export const ${variableName}: Item = ${JSON.stringify(item, null, 2)};\n\n`;
    }

    // Write to the .ts file
    writeFileSync(tsFilePath, tsFileContent);
}

function sanitizeVariableName(name: string): string {
    // Replace invalid characters for variable names and convert to camelCase
    return name.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+(.)/g, (match, group1) => group1.toUpperCase());
}

// Example usage:
const jsonStr = readFileSync('src/models/response.json').toString();
createTypeScriptFileFromJson(jsonStr, 'src/models/generated/generated.ts');
