defmodule BeemoWeb.TicTacToeChannel do
  @moduledoc false

  require Logger

  use BeemoWeb, :channel

  alias Phoenix.Socket

  @ttt "tic-tac-toe"

  # types
  @type topic :: String.t()

  def join(@ttt, params, socket) do
    Logger.info("joining tic tac toe lobby")
    IO.inspect(params)

    IO.inspect(socket.assigns.player_id)

    {:ok, :ok, socket}
  end

  def handle_in("test", payload, socket) do
    Logger.info("Sent something to test")
    IO.inspect(payload)

    {:reply, :ok, socket}
  end



end
