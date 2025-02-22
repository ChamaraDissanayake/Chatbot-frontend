export interface Message {
  timestamp: Date;
  body: string;
  status: string; // e.g., "sent", "delivered", "read"
  from: string;   // Sender's phone number
  to: string;     // Receiver's phone number
}
