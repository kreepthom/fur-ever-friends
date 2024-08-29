export const convertDistance = (distance: number): string => {
  const KILOMETERS = 1000,
    MILES = 1609;

  if (distance >= MILES) {
    return `${(distance / MILES).toFixed(1)} miles`;
  }

  if (distance >= KILOMETERS) {
    return `${(distance / KILOMETERS).toFixed(1)} kilometers`;
  }

  return `${distance.toFixed(1)} meters`;
};