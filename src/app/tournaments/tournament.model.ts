export class Tournament {
  constructor(
    public date: string,
    public title: string,
    public game: string,
    public location: string,
    public description: string = '',
    public img: string = '',
  ) {}
}
