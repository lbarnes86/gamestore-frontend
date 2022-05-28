function GamesCard({ games, notify }) {
  function handleDelete() {
    fetch(`https://game-store-backend1.herokuapp.com/games/${games.id}`, {
      method: "DELETE",
    })
      .then(() => notify({ action: "delete", games: games }))
      .catch((error) => notify({ action: "delete", error: error }));
  }

  return (
    <tr key={games.gamesId}>
      <td>{games.title}</td>
      <td>{games.ersbRating}</td>
      <td>{games.description}</td>
      <td>{games.price}</td>
      <td>{games.studio}</td>
      <td>{games.quantity}</td>
      <td>
        <button
          id="deleteButton"
          className="btn btn-danger mr-3"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          id="editButton"
          className="btn btn-secondary"
          type="button"
          onClick={() => notify({ action: "edit-form", games: games })}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default GamesCard;
