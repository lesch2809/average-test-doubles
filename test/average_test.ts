import { assertEquals } from "@std/assert";
import { Average } from "../src/average.ts";
import { FakeFileAccess } from "../src/fakeFileAccess.ts";
import { HardcodedNumberStub, NumberListStub } from "../src/numberStubs.ts";

Deno.test("computes the mean using numbers registered in FakeFileAccess", async () => {
  const fakeFileAccess = new FakeFileAccess("/path/to/some/other/file");
  fakeFileAccess.addFile("/path/to/an/empty/file", []);
  fakeFileAccess.addFile("/path/to/some/other/file", [1, 2, 3, 4, 5]);
  fakeFileAccess.addFile("C:\\test-data\\third-file.txt", [7, 34, 2]);
  const average = new Average(fakeFileAccess);

  assertEquals(await average.computeMeanOfFile(), 3);
});

Deno.test("computes the mean using HardcodedNumberStub", async () => {
  const average = new Average(new HardcodedNumberStub());

  assertEquals(await average.computeMeanOfFile(), 3);
});

Deno.test("computes the mean using NumberListStub", async () => {
  const average = new Average(new NumberListStub([1, 2, 3, 4, 5]));

  assertEquals(await average.computeMeanOfFile(), 3);
});
