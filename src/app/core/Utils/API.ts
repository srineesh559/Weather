export class API {
  public static weatherUrl = (lat: string, lon: string) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5d04024bf2adfea1a6ac3035b39bf62b`;
  public static geolocationconst = (location: string) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=10&appid=5d04024bf2adfea1a6ac3035b39bf62b`;
}
