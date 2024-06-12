import "./App.css";
import Uploader from "./components/uploader";

// todo: setup tailwind plugin

function App() {
  return (
    <main className="bg-clr-base h-screen grid isolate">
      {/* BG GRADIENTS */}
      <section className="row-span-full col-span-full relative -z-10">
        <div className="bg-shade-one h-[360px] w-[360px] rounded-full absolute"></div>
        <div className="bg-shade-two h-[360px] w-[360px] rounded-full absolute left-[20%]"></div>
        <div className="bg-shade-three w-[458px] h-[443px] rounded-full absolute top-[25%] left-[15%]"></div>
      </section>
      {/* MAIN PAGE CONTENT */}
      <section className="row-span-full col-span-full flex flex-col backdrop-blur-[100px]">
        <nav className="px-20 pt-14 text-[2.5rem] text-white">
          <a href="/">rōdo</a>
        </nav>

        <section className="flex justify-center items-center flex-grow">
          <Uploader />
        </section>
      </section>
    </main>
  );
}

export default App;

// const CircleIcon = () => {
//   return (
//     <div className="">
//       <div className=""></div>
//     </div>
//   );
// };
