import { DateTime } from "luxon";
import { BaseModel, beforeCreate, column } from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuid } from "uuid";

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

  @column()
  public birthDate: string;

  @column()
  public description: string;

  @column()
  public password: string;

  @column()
  public isSeller: string;

  @column()
  public isActive: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static async createUUID(model: User) {
    model.id = uuid();
  }
}
