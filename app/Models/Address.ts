import { DateTime } from "luxon";
import { BaseModel, beforeCreate, column } from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuid } from "uuid";

export default class Address extends BaseModel {
  @column({
    isPrimary: true,
  })
  public id: string;

  @column({ columnName: "zip_code" })
  public zipCode: string;

  @column()
  public state: string;

  @column()
  public city: string;

  @column()
  public street: string;

  @column()
  public number: string;

  @column()
  public complement: string;

  @column({ columnName: "main_address" })
  public mainAddress: boolean;

  @column.dateTime({ columnName: "created_at", autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({
    columnName: "updated_at",
    autoCreate: true,
    autoUpdate: true,
  })
  public updatedAt: DateTime;

  @beforeCreate()
  public static async createUUID(model: Address) {
    model.id = uuid();
  }
}
