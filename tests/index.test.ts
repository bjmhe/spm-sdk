import { expect, test } from "vite-plus/test";

import { helloWorld } from "../src";

test("adds 1 + 2 to equal 3", () => {
  expect(helloWorld()).toBe("Hello World");
});
