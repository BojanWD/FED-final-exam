import { Ticket } from "./ticket";

export class TicketSearchResult {

    count: number = 0;
    results: Ticket[] = [];

    constructor(obj?: any) {
        this.count = obj && Number(obj.count) || 0;
        if (obj && obj.results)
            this.results = obj.results.map((jsonTicket: any) => { return new Ticket(jsonTicket); });
    }

}