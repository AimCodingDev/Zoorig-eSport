export class Member {
  constructor(
    public image: string,
    public name: string,
    public gamerTag: string,
    public facebook: string = '',
    public twitter: string = '',
    public instagram: string = '',
    public discord: string = '',
    public twitch: string = '',
    public youtube: string = '',
    public mail: string = '',
    public playstation: boolean = false,
    public xbox: boolean = false,
    public nintendo: boolean = false,
    public pc: boolean = false,
    public id: string = gamerTag
    )   { }
}
