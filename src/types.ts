export type ShiftType = 'A' | 'B' | 'combined';
export type LaborType = 'DL' | 'IDL';
export type ActiveLine = 'line-b' | 'line-a' | 'plant-overview';

export interface StationData {
  id: string;
  no: number;
  name: string;
  thaiName: string;
  shift: 'Shift-A' | 'Shift-B';
  type: LaborType;
  stdMp: number;
  uph: number;
  ct: number; // Cycle time in seconds
  upph: number; // Units per person hour
  outputPerShift: number; // Theoretical output per operator per shift
  linesCount?: number;
  description?: string;
  workDetails?: string[];
  equipment?: string[];
  sublineMpDistribution?: { line: string; mp: number }[];
}

export interface IndirectLaborData {
  id: string;
  title: string;
  thaiTitle: string;
  type: 'IDL';
  stdMp: number;
  description: string;
}

export interface SpareLaborData {
  id: string;
  title: string;
  thaiTitle: string;
  type: 'DL';
  stdMp: number;
  shift: 'Shift-A' | 'Shift-B';
}

export interface ProductionLineConfig {
  id: 'line-a' | 'line-b';
  lineName: string;
  lineShortCode: 'A' | 'B';
  model: string;
  targetDailyOutput: number;
  targetUph: number;
  designCycleTimeSec: number;
  workingShiftsPerDay: number;
  netShiftHours: number; // 10.5 hours standard net working time
  shiftHoursTotal: number; // 12 hours total shift with breaks
  hourlyWageTHB: number;
  monthlySalaryDLTHB: number;
  monthlySalaryIDLTHB: number;
}

export interface LineDataset {
  config: ProductionLineConfig;
  stations: StationData[];
  idlList: IndirectLaborData[];
  sparesList: SpareLaborData[];
}

export interface KaizenChange {
  stationNo: number;
  mpDeltaPerShift: number;
  note: string;
}

export interface SimulationState {
  targetDailyOutput: number;
  targetUph: number;
  netShiftHours: number;
  oeePercentage: number;
  kaizenChanges: Record<number, number>;
  spareMpPercent: number;
}
