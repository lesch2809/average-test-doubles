import { FileAccess } from "./file_access.ts";
import { NumberProvider } from "./numberProvider.ts";

export class FileAccessSpy implements NumberProvider {
  public callCount = 0;
  public returnedValues: Array<Array<number>> = [];

  constructor(private fileAccess: FileAccess) {}

  public async readNumbers(): Promise<Array<number>> {
    this.callCount++;
    const numbers = await this.fileAccess.readNumbers();
    this.returnedValues.push([...numbers]);
    return numbers;
  }
}
