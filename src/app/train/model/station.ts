export class Station {
    _id: number;
    name: string;
    departure: Date;
    arrival: Date;

    constructor(obj?: any) {
        this._id = obj && Number(obj._id) || null;
        this.name = obj && obj.name || null;
        this.departure = obj && new Date(obj.departure) || null;
        this.arrival = obj && new Date(obj.arrival) || null;
    }
}

export class StationResult {
    _id: number;
    name: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
    }
}