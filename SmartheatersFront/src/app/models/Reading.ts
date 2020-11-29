export class ReadingsDto {
  Date: string;
  Readings: {
    Time: string;
    Temperature: number;
  };
  AverageTemperature: number;
}
