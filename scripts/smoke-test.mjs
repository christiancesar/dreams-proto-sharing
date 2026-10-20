// Smoke test: confirma que os contratos carregam via CJS (src/contracts) e via ESM (esm/).
import { createRequire } from "node:module";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);

const cjs = require("../src/contracts/flight/flight_pb.js");
const esm = await import("../esm/flight/flight_pb.js");

for (const name of ["FlightCreate", "FlightCreateRequest", "FlightResponse"]) {
  assert.equal(typeof cjs[name], "function", `CJS: ${name}`);
  assert.equal(typeof esm[name], "function", `ESM: ${name}`);
}

const req = new esm.FlightCreateRequest().setFlightcreate(new esm.FlightCreate().setUserid("smoke"));
assert.equal(req.getFlightcreate().getUserid(), "smoke");

console.log("smoke ok: CJS e ESM carregam os contratos");
