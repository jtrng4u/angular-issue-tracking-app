export interface Issue {
  _id?: string;
  description: string;
  assignee: string;
  status: boolean;
  severity: SeverityTypeEnum;
  creationDate: Date;
  closeDate?: Date;
}

export enum SeverityTypeEnum {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  CRITICAL = "CRITICAL"
}
