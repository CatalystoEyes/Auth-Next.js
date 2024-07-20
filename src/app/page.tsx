import { MainCard } from "./Components/Card";
import Header from "./Components/Header";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <MainCard />
      </div>
    </div>
  );
}
