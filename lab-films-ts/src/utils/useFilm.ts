import { Films } from "../shared/ListOfFilms";

export default function useFilm(id: any) {
    if (!id) return undefined;

    const film = Films.find(film => film.id === Number(id));

    return film;
}