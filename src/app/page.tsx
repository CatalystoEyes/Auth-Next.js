import Body from "./Components/Body";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Body />
      </div>
    </div>
  );
}
