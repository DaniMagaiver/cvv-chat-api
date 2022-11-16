import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export default class Chat {
  @ObjectIdColumn({ name: "_id" })
  id: string;

  @Column()
  roomId:string;

  @Column()
  volunteerId:string;

  @Column()
  status: 'waiting' | 'open' | 'close'
}
