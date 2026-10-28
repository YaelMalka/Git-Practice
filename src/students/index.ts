import { Student } from "../types";

import YaelCard from "./yael-malka/Card";
import YaelJokePage from "./yael-malka/JokePage";
import HadarCard from "./hadar-jerafi/Card";
import HadarJokePage from "./hadar-jerafi/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  {
    id: "yael-malka",
    name: "יעל מלכא",
    jokeTitle: "מורה ותלמיד",
    email: "329467211@zzv.org.il",
    teamName: "Vcomm",
    teamProjectUrl: "",
    CardComponent: YaelCard,
    JokePageComponent: YaelJokePage,
  },
  {
    id: "hadar",
    name: "הדר ג'ראפי",
    jokeTitle: "אם יש ביצים",
    email: "Hadar0583229585@gmail.com",
    teamName: "Vcomm",
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
