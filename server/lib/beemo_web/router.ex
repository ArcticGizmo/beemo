defmodule BeemoWeb.Router do
  use BeemoWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BeemoWeb do
    pipe_through :api
  end
end
