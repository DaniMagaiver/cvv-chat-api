import { isMongoId } from "class-validator";
import { MongoRepository } from "typeorm";
import { MongoFindManyOptions } from "typeorm/find-options/mongodb/MongoFindManyOptions";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export default abstract class Service<T> {
  private repository: MongoRepository<T>;

  constructor(repository: MongoRepository<T>) {
    this.repository = repository;
  }

  protected isValidId(id: any) {
    const isuuid = isMongoId(id);
    if (!isuuid) throw new Error("ID inválido");
  }

  create(data: T) {
    return this.repository.save(data);
  }

  listAll() {
    return this.repository.find();
  }

  listAllPaginated(skip?: number, take?: number) {
    return this.repository.findAndCount({ skip, take });
  }

  findOne(id: any) {
    this.isValidId(id);
    return this.repository.findOne(id);
  }

  remove(id: any) {
    this.isValidId(id);
    return this.repository.softDelete(id);
  }

  update(id: any, data: QueryDeepPartialEntity<T>) {
    this.isValidId(id);
    return this.repository.update(id, data);
  }

  query(query: MongoFindManyOptions<T>) {
    return this.repository.find(query);
  }
}
