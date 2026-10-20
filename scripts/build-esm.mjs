// Gera a camada ESM (esm/) sobre os módulos CJS gerados em src/contracts.
// O protobuf-js emite exports dinâmicos (goog.object.extend), que o Node não
// detecta em ESM. Cada wrapper importa o módulo CJS e reexporta os nomes.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync, rmSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src", "contracts");
const OUT = join(ROOT, "esm");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

// Nomes exportados pelo .d.ts, com o tipo de cada um.
function parseExports(dts) {
  const names = new Map();
  const re = /^export\s+(?:declare\s+)?(abstract\s+class|class|interface|enum|type|const|function|namespace)?\s*(\w+)/gm;
  for (const m of dts.matchAll(re)) {
    if (!names.has(m[2])) names.set(m[2], m[1] ?? "");
  }
  return names;
}

rmSync(OUT, { recursive: true, force: true });

const modules = walk(SRC).filter((f) => f.endsWith("_pb.js") || f.endsWith("_grpc_pb.js"));

for (const jsFile of modules) {
  const rel = relative(SRC, jsFile); // ex.: flight/flight_pb.js
  const dtsFile = jsFile.replace(/\.js$/, ".d.ts");
  const names = parseExports(readFileSync(dtsFile, "utf8"));
  const cjsFromEsm = relative(dirname(join(OUT, rel)), jsFile).split(sep).join("/");
  const specFromEsm = cjsFromEsm.startsWith(".") ? cjsFromEsm : `./${cjsFromEsm}`;

  const outJs = join(OUT, rel);
  const outDts = outJs.replace(/\.js$/, ".d.ts");
  mkdirSync(dirname(outJs), { recursive: true });

  const jsLines = [
    `// Gerado por scripts/build-esm.mjs. Não editar.`,
    `import pb from "${specFromEsm}";`,
    "",
  ];
  for (const [name, kind] of names) {
    if (kind === "namespace") continue;
    if (kind === "interface" || kind === "type") continue; // só tipo, fica no .d.ts
    jsLines.push(`export const ${name} = pb.${name};`);
  }
  writeFileSync(outJs, jsLines.join("\n") + "\n");

  // Tipos: reexporta o .d.ts CJS, que já declara todos os nomes.
  const dtsSpec = specFromEsm.replace(/\.js$/, ".js");
  writeFileSync(outDts, `// Gerado por scripts/build-esm.mjs. Não editar.\nexport * from "${dtsSpec.replace(/\.js$/, ".js").replace(/^\.\//, "../../src/contracts/")}";\n`);
}

// Marca esm/ como módulo ESM, sem afetar o restante do pacote (CJS por padrão).
writeFileSync(join(OUT, "package.json"), JSON.stringify({ type: "module" }, null, 2) + "\n");

console.log(`ESM gerado: ${modules.length} módulos em esm/`);
