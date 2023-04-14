export interface ZendeskCreateTicket {
  orderId: number;
  city: string;
  customerName: string;
  customerNumber: string;
  deliveryAddress: string;
  total: number;
  description?: string;
  merchantName?: string;
  merchantNumber?: string;
  priority?: string;
  status?: string;
  commission?: number;
  ticketType?: string;
}

export interface ZendeskTicket {
  orderId: number;
  type: string;
  token: string;
}

export interface ZendeskComment extends ZendeskTicket {
  message?: string;
  issues?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attachments?: any;
}
