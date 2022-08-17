import Route from "@ioc:Adonis/Core/Route";

Route.get("/register", "UsersController.view");

Route.post("/register", "UsersController.store").as("user_register");
