import Card from "../components/Card";

function Home() {
  return (
    <div className="bg-neutral-100 h-screen w-screen p-8">
      <div></div>
      <div className="flex flex-wrap gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
