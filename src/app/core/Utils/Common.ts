export class Common {
  public static GetIcon(
    icon: string | undefined,
    size: 'small' | 'big'
  ): string {
    if (icon === undefined) {
      return 'assets/images/icons/icon_mostly_sunny.svg';
    }
    switch (icon) {
      case '01d':
        return size === 'small'
          ? 'assets/images/icons/icon_mostly_sunny_small.svg'
          : 'assets/images/icons/icon_mostly_sunny.svg';
      case '02d':
        return size === 'small'
          ? 'assets/images/icons/icon_partly_cloudy_small.svg'
          : 'assets/images/icons/icon_partially_cloudy_big.svg';
      case '03d':
      case '04d':
        return size === 'small'
          ? 'assets/images/icons/icon_mostly_cloudy_small.svg'
          : 'assets/images/icons/icon_mostly_cloudy_big.svg';
      case '09d':
      case '10d':
        return size === 'small'
          ? 'assets/images/icons/icon_rain_small.svg'
          : 'assets/images/icons/icon_rain_big.svg';
      case '11d':
        return size === 'small'
          ? 'assets/images/icons/icon_thunderstorm_small.svg'
          : 'assets/images/icons/icon_thunderstorm_big.svg';
      default:
        return 'assets/images/icons/icon_mostly_sunny.svg';
    }
  }
}
