defmodule BeemoWeb.Router do
  use BeemoWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/public", BeemoWeb do
    pipe_through :api

    get "/hello", PageController, :hello
  end

end
