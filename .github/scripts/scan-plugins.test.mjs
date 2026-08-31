import assert from "node:assert/strict";
import test from "node:test";

import { buildOpenCodeEnvironment } from "./scan-plugins.mjs";

test("maps GEMINI_API_KEY to the environment expected by OpenCode", () => {
  const environment = buildOpenCodeEnvironment({ GEMINI_API_KEY: "test-key" }, "/trusted/config");

  assert.equal(environment.GEMINI_API_KEY, "test-key");
  assert.equal(environment.GOOGLE_GENERATIVE_AI_API_KEY, "test-key");
  assert.equal(environment.OPENCODE_CONFIG_DIR, "/trusted/config");
  assert.deepEqual(JSON.parse(environment.OPENCODE_CONFIG_CONTENT), {
    autoupdate: false,
    instructions: [],
    plugin: [],
    share: "disabled",
  });
});

test("does not overwrite an explicitly configured Google API key", () => {
  const environment = buildOpenCodeEnvironment(
    { GEMINI_API_KEY: "alias", GOOGLE_GENERATIVE_AI_API_KEY: "explicit" },
    "/trusted/config",
  );

  assert.equal(environment.GOOGLE_GENERATIVE_AI_API_KEY, "explicit");
});
