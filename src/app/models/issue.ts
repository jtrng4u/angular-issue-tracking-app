export interface Issue {
  _id: string;
  description: string;
  assignee: string;
  status: boolean;
  severity: SeverityType;
  creationDate: Date;
  closeDate: Date;
}

export enum SeverityType {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  CRITICAL = "CRITICAL"
}
