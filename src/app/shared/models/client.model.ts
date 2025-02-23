export interface Client {
  id: string;
  phoneNumber: string;
  name: string;
  isActive: boolean; // Add this field
  chatHandover?: boolean; // Optional field
}
