defmodule BeemoWeb.TicTacToeSocket do
  use Phoenix.Socket

  channel("tic-tac-toe", BeemoWeb.TicTacToeChannel)

  def connect(params, socket, _connect_info) do

    socket =
      socket
      |> assign(:player_id, params["player_id"] || UUID.uuid4())

    {:ok, socket}
  end

  def id(socket), do: "tic-tac-toe:#{socket.assigns.player_id}"

end
