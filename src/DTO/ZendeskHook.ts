export interface ZendeskHook {
  ticketId: string;
  phoneNumber: string;
  orderId: string;
  status: string;
}

export interface ZendeskStatusHook extends ZendeskHook {
  status: string;
  type: string;
  lastStatusOrder?: string;
}
