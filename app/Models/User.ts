import { DateTime } from "luxon";
import {
  BaseModel,
  beforeCreate,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuid } from "uuid";
import Address from "./Address";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public cpf: string;

  @column()
  public phone: string;

  @column({ columnName: "birth_date" })
  public birthDate: string;

  @column()
  public description: string;

  @column()
  public password: string;

  @column({ columnName: "is_seller" })
  public isSeller: string;

  @column({ columnName: "is_actve" })
  public isActive: string;

  @hasMany(() => Address, {
    foreignKey: "userId",
  })
  public addresses: HasMany<typeof Address>;

  @column.dateTime({ columnName: "created_at", autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({
    columnName: "updated_at",
    autoCreate: true,
    autoUpdate: true,
  })
  public updatedAt: DateTime;

  @beforeCreate()
  public static async createUUID(model: User) {
    model.id = uuid();
  }
}
