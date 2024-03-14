import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export const totalCredit = 20;
function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (course) => {
    console.log(course);
    const newCart = [...cart, course];
    const isExisting = cart.find((c) => c.id == course.id);
    const credits = cart.reduce((p, c) => p + c.credit, 0);
    if (credits + course.credit > totalCredit) {
      toast("You cannot add more than " + totalCredit + " credits");
      return;
    }

    if (!isExisting) {
      toast.success('Course was added successfully')
      setCart(newCart);
    }else{
      toast.warn('Course already added')
    }
  };

  return (
    <section className="">
      <section className="container mx-auto max-w-screen-xl ">
        <header>
          <Header></Header>
        </header>
        <main>
          <section className="flex md:flex-row flex-col gap-2 justify-between ">
            <Courses handleAddToCart={handleAddToCart}></Courses>

            <Cart cart={cart}></Cart>
          </section>
        </main>
      </section>
      <ToastContainer />
    </section>
  );
}

export default App;
