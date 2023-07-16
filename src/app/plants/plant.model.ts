export class Plant {
  constructor(
    public name: string,
    public scientificName: string,
    public family: string,
    public kingdom: string,
    public imgUrl?: string,
    public id?: string
  ) {}
}
