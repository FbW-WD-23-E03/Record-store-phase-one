import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecordCard from "./RecordCard";
import data from "../../records";

const RecordsList = () => {
  const { genre } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredData = genre
    ? data.filter(
        (record) => record.genre.toLowerCase() === genre.toLowerCase()
      )
    : data;

  // const containerWidth = cartState.isOpen ? `calc(100vw - 300px)` : "100%";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return filteredData.length > 0 ? (
    <div
      className='records-container'
      // style={{ width: containerWidth, transition: "1s" }}
    >
      {filteredData.map((record, index) => (
        <RecordCard key={index} record={record} index={index} />
      ))}
    </div>
  ) : (
    <div>Sorry, our collection does not include any {genre} records!</div>
  );
};

export default RecordsList;
