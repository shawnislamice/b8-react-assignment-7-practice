import { totalCredit } from "../../App";
import PropTypes from "prop-types";
const Cart = ({ cart }) => {
  const credit = cart.reduce((p, c) => p + c.credit, 0);
  return (
    <div className="border-2  md:w-[25%] bg-white shadow-xl rounded-xl p-4">
      <h1 className="text-[#2F80ED] text-[18px] my-3">
        Credit Hour Remaining {totalCredit-credit} hr
      </h1>
      <hr />
      <h1 className="font-bold text-xl text-[#1C1B1B] my-0">Course Name</h1>
      <ol>
        {cart.map((cart, index) => (
          <li className="text-[#1C1B1B99] text-[16px] my-2" key={index}>
            {cart.name}
          </li>
        ))}
      </ol>
      <hr />
      <p className="font-medium text-[#1C1B1BCC]">
        Total Credit Hour : {cart.reduce((p, c) => p + c.credit, 0)}
      </p>
      <hr />
      <p className="text-[#1C1B1BCC] font-semibold">
        Total Price : {cart.reduce((p, c) => p + c.price, 0)} USD
      </p>
    </div>
  );
};

Cart.propTypes={
    cart:PropTypes.object.isRequired
}
export default Cart;
