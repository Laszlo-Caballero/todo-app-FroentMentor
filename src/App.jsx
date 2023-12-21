import Header from "./components/Header";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <div className="min-h-screen w-screen mobile:dark:bg-DarkMobile md:dark:bg-DarkDesktop bg-no-repeat dark:bg-DarkBlue mobile:bg-LightMobile md:bg-LightDesktop bg-LightGray flex justify-center bg-scroll">
        <main className="mobile:w-[90%] md:w-[38%] min-h-[700px] flex flex-col md:mt-20 mobile:mx-[20px] mobile:mt-16">
          <Header />
          <section className="dark:text-LightGrayishBlue overflow-hidden text-DarkGrayishWhite">
            <Todos />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
