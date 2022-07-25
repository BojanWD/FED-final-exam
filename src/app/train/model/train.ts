import { Station } from "./station";

export class Train {
    _id: number;
    number: string;
    from: string;
    departure: Date;
    to: string;
    arrival: Date;
    travels: number;
    type: string;
    price: number;
    stations: Station[] = [];

    constructor(obj?: any) {
        this._id = obj && Number(obj._id) || null;
        this.number = obj && obj.number || null;
        this.from = obj && obj.from || null;
        this.departure = obj && new Date(obj.departure) || null;
        this.to = obj && obj.to || null;
        this.arrival = obj && new Date(obj.arrival) || null;
        this.travels = obj && Number(obj.travels) || null;
        this.type = obj && obj.type || null;
        this.price = obj && Number(obj.price) || null;
        if (obj) {
            this.stations = obj.stations.map((jsonStation: any) => { return new Station(jsonStation); });
        }
    }

}