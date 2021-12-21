import {Factory, Seeder} from "typeorm-seeding";

import  WorkEntity  from "./db/works/work.factory";

export class CreateWorkSeed implements Seeder {
    public async run (factory: Factory) {
        await factory(WorkEntity)().createMany(10)
    }
}