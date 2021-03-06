import { module } from 'qunit';
import { test } from 'ember-qunit';
import ENV from "dummy/config/environment";

module("smoke test");

// comment out below if dotEnv.path is specified in Procfile
test("should work", function(assert){
  assert.equal(ENV.DOTENV_VAR, "dotenv");
});

test("doesn't put in keys unless they are explicitly allowed", function(assert){
  assert.equal(Object.hasOwnProperty.call(ENV, "DO_NOT_ALLOW"), false);
});

test("puts keys in the node process ENV always", function(assert){
  assert.equal(ENV.IN_PROCESS_ENV, "IN_PROCESS_ENV");
});

// uncomment out below if dotEnv.path is specified in Procfile
// test("should work", function(assert){
//   assert.equal(ENV.DOTENV_VAR, "custom.dotenv");
// });

// test("doesn't put in keys unless they are explicitly allowed", function(assert){
//   assert.equal(Object.hasOwnProperty.call(ENV, 'DO_NOT_ALLOW'), false);
// });

// test("puts keys in the node process ENV always", function(assert){
//   assert.equal(ENV.IN_PROCESS_ENV, "CUSTOM_IN_PROCESS_ENV");
// });
