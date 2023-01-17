import { useRef, useState } from "react";
import Bar from "../components/Bar";
import Card from "../components/Card";
import { makePerson } from "../person";

function Home() {
  const [budget, setBudget] = useState(300000);
  const [people, setPeople] = useState(() =>
    Array.from({ length: 30 }, (v, k) => ({
      ...makePerson(
        `Person ${k + 1}`,
        Math.ceil(Math.random() * 20 + 13),
        Math.ceil(Math.random() * 60000 + 40000),
        Math.floor(Math.random() * 5),
        programs[Math.floor(programs.length * Math.random())],
        (Math.random() * 2 + 2.2).toFixed(2)
      ),
      key: k,
    }))
  );
  const [buckets, setBuckets] = useState(() =>
    Array.from({ length: 30 }, () => 0)
  );
  const [percent, setPercent] = useState(0);
  const maxPerPerson = 53000;

  const cards = people.map((v, k) => {
    return (
      <Card
        key={v.key}
        person={v}
        handleClick={(frac) => {
          const tmp = buckets.map((vv, kk) =>
            kk === k ? maxPerPerson * frac : vv
          );
          setBuckets(tmp);
          setPercent((tmp.reduce((acc, cur) => acc + cur) * 100) / budget);
        }}
      />
    );
  });

  return (
    <div className="bg-neutral-100 w-screen p-8">
      <div className="mb-12">
        <h1 className="text-4xl mb-6">
          Post-Secondary Student Support Program Planner
        </h1>
        <span className="text-3xl ">Budget: $</span>
        <input
          type="number"
          className="text-3xl focus:bg-white bg-neutral-100 focus:outline-none py-2 pr-2 rounded-lg w-48"
          value={budget}
          onChange={(e) => {
            setPercent(
              (buckets.reduce((acc, cur) => acc + cur) * 100) / e.target.value
            );
            setBudget(e.target.value);
          }}
        />
        <h3>Max per person: ${maxPerPerson.toLocaleString("en-US")}</h3>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mx-30">{cards}</div>
      <Bar percent={percent} />
    </div>
  );
}

const programs = [
  "Medical Science",
  "Computer Science",
  "Architecture",
  "Civil Engineering",
  "Humanity",
  "Psychology",
  "Teaching",
  "Business",
  "Chemistry",
  "Visual Arts",
  "Music",
  "Economics",
  "Earth Sciences",
  "English",
  "Indigenous Languages",
  "Mathematics",
  "Nursing",
  "Optometry",
  "Electrical Engineering",
  "Social Work",
  "Sociology",
  "Theatre",
  "Pharmacy",
  "Life Sciences",
  "Law",
];

export default Home;
