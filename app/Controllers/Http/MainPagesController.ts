// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainPagesController {
  public async view({ view }) {
    return view.render("home");
  }
}
