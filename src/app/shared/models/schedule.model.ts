export interface Schedule {
  jobId: string; // Ensure this field exists
  to: string;
  body: string;
  date: string | Date; // Date can be a string or Date object
}
