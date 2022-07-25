import { Train } from "./train";

export class TrainSearchResult {

    count: number = 0;
    results: Train[] = [];

    constructor(obj?: any) {
        this.count = obj && Number(obj.count) || 0;
        if (obj && obj.results)
            this.results = obj.results.map((jsonTrain: any) => { return new Train(jsonTrain); });
    }

}