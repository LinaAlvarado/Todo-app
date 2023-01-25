import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
        <header className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
              Todo
            </h1>
            <button> <MoonIcon/></button>
          </div>
          <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white p-3">
            <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-400"></span>
            <input
              className="w-full text-gray-400 outline-none"
              type="text"
              placeholder="Create a new to-do..."
            />
          </form>
        </header>
        <main className="container mx-auto mt-8 px-4">
          <div className="rounded-md  bg-white ">
            <article className="flex gap-4 border-b border-b-gray-300 py-4 px-4">
              <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-400"></button>
              <p className="grow text-gray-600"> Complete Online Curse</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-300 py-4 px-4">
              <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-400"></button>
              <p className="grow text-gray-600"> Complete Online Curse</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-300 py-4 px-4">
              <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-400"></button>
              <p className="grow text-gray-600"> Complete Online Curse</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <section className="p-4 flex justify-between">
              <span className="text-gray-400"> 5 items left </span>
              <button className="text-gray-400"> Clear Completes</button>
            </section>
          </div>
        </main>

        <section className="container mx-auto mt-8 px-4 ">
          <div className="bg-white p-4 rounded-md flex justify-evenly"> 
          <button className="font-medium text-gray-500"> All</button>
          <button className="font-medium text-gray-300 hover:text-gray-500"> Active</button>
          <button className="font-medium text-gray-300 hover:text-gray-500"> Completed</button>
          </div>
        </section>

        <p className="text-gray-400 text-center mt-8"> Drag and drop to reorder list</p>
      </div>
    </>
  );
};
export default App;
