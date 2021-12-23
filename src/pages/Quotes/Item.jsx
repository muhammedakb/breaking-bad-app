import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Link to={`/quotes/${item.quote_id}`}>
        <q>{item.quote}</q>
      </Link>
      <strong style={{ marginLeft: "10px" }}>{item.author}</strong>
    </div>
  );
};

export default Item;
