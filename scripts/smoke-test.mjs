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

// Health: o contrato é compartilhado por todos os serviços, então também precisa carregar nos dois formatos.
const healthCjs = require("../src/contracts/health/health_pb.js");
const healthEsm = await import("../esm/health/health_pb.js");

for (const name of ["HealthCheckRequest", "HealthReport", "CheckResult"]) {
  assert.equal(typeof healthCjs[name], "function", `CJS health: ${name}`);
  assert.equal(typeof healthEsm[name], "function", `ESM health: ${name}`);
}

const report = new healthEsm.HealthReport().setStatus("ok").setService("smoke");
report.addChecks(new healthEsm.CheckResult().setName("api").setStatus("ok"));
assert.equal(report.getChecksList()[0].getName(), "api");

console.log("smoke ok: CJS e ESM carregam os contratos (flight, health)");
