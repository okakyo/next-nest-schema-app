import {define} from "typeorm-seeding";
import * as Faker from "faker/locale/ja";
import { WorkEntity } from "./work.entity";


define(WorkEntity,(faker: typeof Faker): WorkEntity =>{
    const work = new WorkEntity();

    work.title = Faker.random.words(30);
    work.description = Faker.random.words(100);

    return work;
});

export default WorkEntity;