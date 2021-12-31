import {ApiProperty} from "@nestjs/swagger";
import {Length,MaxLength,IsBoolean,IsNotEmpty} from "class-validator";

export class CreateWorkDTO {
  @ApiProperty({
    type: String
  })
  @Length(1,300)
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @MaxLength(50000)
  description?: string;

  @ApiProperty()
  isShow?: boolean;
}

export type UpdateWorkDTO = Partial<CreateWorkDTO>;
