import { Heater } from './Heater';

export class HeaterReading {
  id: number;
  heaterId: number;
  heater: Heater;
  readingTimestamp: Date;
  temperature: number;
}
