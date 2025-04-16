export interface IPizza {
  readonly id: number;
  readonly public_id: string;
  readonly name: string;
  readonly desc: string;
  readonly price: number;
  readonly pic_id: string;
}

export class Pizza implements IPizza {
  constructor(
    readonly id: number,
    readonly public_id: string,
    readonly name: string,
    readonly desc: string,
    readonly price: number,
    readonly pic_id: string
  ) {}
}
