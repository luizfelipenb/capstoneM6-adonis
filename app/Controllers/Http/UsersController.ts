// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from "App/Validators/CreateUserValidator";

export default class UsersController {
  public async view({ view }) {
    return view.render("register");
  }

  public async store({ request, response }) {
    const body = await request.validate(CreateUserValidator);

    delete body.confirm_password;

    return body.json();
  }
}
