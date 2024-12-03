import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Football",
      price: 20,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Jersey",
      price: 30,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Cleats",
      price: 50,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/100",
    },
  ]);

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-black">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <p className="text-black font-semibold">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="text-pink-500 font-semibold"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-12 text-center border-2 rounded-md p-1"
                />
                <button
                  className="text-pink-500 font-semibold"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex justify-between text-black font-semibold text-xl">
        <p>Total:</p>
        <p>${calculateTotal()}</p>
      </div>
      <div className="mt-6">
        <button className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition duration-200">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
