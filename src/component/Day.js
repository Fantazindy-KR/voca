import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

function Day() {
  const a = useParams();
  const day = a.day;
  //   const wordList = dummy.words.filter((word) => word.day === Number(day));
  //   console.log(wordList);
  //   const [words, setWords] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:3001/words?day=${day}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setWords(data);
  //       });
  //   }, [day]);

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <div>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Day;
