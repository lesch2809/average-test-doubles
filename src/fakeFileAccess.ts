import { NumberProvider } from "./numberProvider.ts";

export class FakeFileAccess implements NumberProvider {
  private files = new Map<string, Array<number>>();

  constructor(private path: string) {}

  public addFile(path: string, numbers: Array<number>): void {
    this.files.set(path, [...numbers]);
  }

  public async readNumbers(): Promise<Array<number>> {
    const numbers = this.files.get(this.path);
    if (numbers === undefined) {
      throw new Error(`No fake file registered for path: ${this.path}`);
    }
    return [...numbers];
  }
}
