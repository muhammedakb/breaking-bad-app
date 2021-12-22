import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { fetchCharacters } from "../../redux/charactersSlice";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <main>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`/character/${character.char_id}`}>
              <img
                src={character.img}
                alt={character.name}
                className="character"
              />
              <p className="character-name">{character.name}</p>
            </Link>
          </div>
        ))}
      </Masonry>
      <div className="load-more">
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More ({nextPage})
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown</div>}
      </div>
    </main>
  );
};

export default Home;
