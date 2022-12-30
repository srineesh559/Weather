interface LocalNames {
  ar: string;
  en: string;
  kn: string;
  pa: string;
  hi: string;
  ml: string;
  mr: string;
  ru: string;
  te: string;
  ta: string;
  he: string;
  ja: string;
}

export interface GeoLocationInterface {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
  getDisplyString: () => string;
}

export class GeoLocation implements GeoLocationInterface {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;

  constructor(
    name: string,
    local_names: LocalNames,
    lat: number,
    lon: number,
    country: string,
    state: string
  ) {
    this.name = name;
    this.local_names = local_names;
    this.lat = lat;
    this.lon = lon;
    this.country = country;
    this.state = state;
  }

  public getDisplyString(): string {
    return `CityName : ${this.name}, Country : ${this.country}`;
  }
}
