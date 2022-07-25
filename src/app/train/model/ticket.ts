export class Ticket {
    _id: number;
    number: string;
    from: string;
    departure: Date;
    to: string;
    arrival: Date;
    price: number
    name: string;
    birthDate: Date;

    constructor(obj?: any) {
        this._id = obj && Number(obj._id) || null;
        this.number = obj && obj.number || null;
        this.from = obj && obj.from || null;
        this.departure = obj && new Date(obj.departure) || null;
        this.to = obj && obj.to || null;
        this.arrival = obj && new Date(obj.arrival) || null;
        this.price = obj && Number(obj.price) || null;
        this.name = obj && obj.name || null;
        this.birthDate = obj && new Date(obj.birthDate) || null;
    }
}