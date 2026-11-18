import { NumberProvider } from "./numberProvider.ts";

export class HardcodedNumberStub implements NumberProvider {
  public async readNumbers(): Promise<Array<number>> {
    return [1, 2, 3, 4, 5];
  }
}

export class NumberListStub implements NumberProvider {
  constructor(private numbers: Array<number>) {}

  public async readNumbers(): Promise<Array<number>> {
    return [...this.numbers];
  }
}
// Der 2. Stub ist eher schon ein faker da er sehr flexibel ist und nicht wirklich hardcoded ist.