# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :beemo, BeemoWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "yyNVEl99Q3nmdBOav2B6fdeFlLl3iGUze6j9thoImkaA9/nNQAUlVn0QfZa/y7hn",
  render_errors: [view: BeemoWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Beemo.PubSub,
  live_view: [signing_salt: "DNoJb92A"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
