import {MigrationInterface, QueryRunner} from "typeorm";

export class init1639810608493 implements MigrationInterface {
    name = 'init1639810608493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "work" ("id" SERIAL NOT NULL, "title" character varying(300) NOT NULL, "description" character varying(50000) NOT NULL, "isShow" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1ad2a9dfd058d66c37e6d495222" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "work"`);
    }

}
