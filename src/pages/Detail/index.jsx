import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

const Detail = () => {
  const { char_id } = useParams();
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeatil = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`
        );
        await setChar(data[0]);
      } catch (error) {
        await setError(error);
      } finally {
        await setLoading(false);
      }
    };

    fetchDeatil();
  }, [char_id]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      {loading && <Loading />}
      <h1>{char.name}</h1>
      <img src={char.img} alt={char.name} style={{ width: "50%" }} />
      <br />
      {char && <pre>{JSON.stringify(char, null, 2)}</pre>}
    </div>
  );
};

export default Detail;
