export interface Schedule {
  to: string;
  body: string;
  date: Date;
  jobId?: string; // Optional, for tracking scheduled jobs
}
