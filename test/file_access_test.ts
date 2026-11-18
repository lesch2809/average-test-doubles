import { assertEquals } from "@std/assert";
import { Average } from "../src/average.ts";
import { FileAccess } from "../src/file_access.ts";
import { FileAccessSpy } from "../src/spyFileAccess.ts";

Deno.test("FileAccessSpy records the call and values returned by FileAccess", async () => {
  const numbers = [1, 2, 3, 4, 5];
  const path = await Deno.makeTempFile();

  try {
    await Deno.writeTextFile(path, numbers.join("\n"));
    const spy = new FileAccessSpy(new FileAccess(path));
    const average = new Average(spy);

    assertEquals(await average.computeMeanOfFile(), 3);
    assertEquals(spy.callCount, 1);
    assertEquals(spy.returnedValues, [numbers]);
  } finally {
    await Deno.remove(path);
  }
});
