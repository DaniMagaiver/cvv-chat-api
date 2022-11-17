import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export default class Chat {
  @ObjectIdColumn({ name: "_id" })
  id: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  roomId: string;

  @Column()
  @IsString()
  volunteerId: string;

  @IsNotEmpty()
  @IsDate()
  @Column()
  createdAt: Date;

  @IsIn(["open", "inAttendance", "close"])
  @Column()
  status: "open" | "inAttendance" | "close";
}
