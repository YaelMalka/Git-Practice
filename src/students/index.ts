import { Student } from "../types";

import EtiCard from "./eti/Card";
import EtiJokePage from "./eti/JokePage";
import HadarCard from "./hadar-jerafi/Card";
import HadarJokePage from "./hadar-jerafi/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort!
const students: Student[] = [
  {
    id: "eti-orenbach",
    name: "אתי אורנבך",
    jokeTitle: "חליפה למחפשי עבודה",
    email: "eti7671@gmail.com",
    teamName: "Vcomm-2",
    teamProjectUrl: "",
    CardComponent: EtiCard,
    JokePageComponent: EtiJokePage,
  },
  {
    id: "hadar",
    name: "הדר ג'ראפי",
    jokeTitle: "אם יש ביצים",
    email: "Hadar0583229585@gmail.com",
    teamName: "Vcomm-2",
    teamProjectUrl: "",
    CardComponent: HadarCard,
    JokePageComponent: HadarJokePage,
  },
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
];

export default students;
