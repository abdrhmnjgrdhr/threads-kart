import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

function ProductDetail() {
  const { productid } = useParams();
  const [product, setProduct] = useState({});

  const { title, description, image, price, category } = product;

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productid}`).then((res) => {
      setProduct(res.data);
    });
  }, [productid]);

  let [num, setNum] = useState(0);

  const handleAdd = () => {
    return setNum(num + 1);
  };
  const handleLess = () => {
    return setNum(num < 0 ? 0 : num - 1);
  };

  return (
    <>
      <section className="container mt-8 lg:grid grid-cols-2 place-item-center">
        <div className="flex justify-center">
          <img src={image} alt={title} className="w-[55%] h-[500px]" />
        </div>
        <div className=" lg:w-[90%]">
          <div className="border-b-2 pb-5">
            <h6 className="font-semibold text-[#2c7a64] uppercase">
              {category}
            </h6>
            <h4 className="text-3xl lg:text-4xl font-bold mt-5 ">{title}</h4>
            <p className="font-semibold mt-5">$ {price}</p>
            <p className="mt-5 text-sm leading-6">{description}</p>
            <div className="flex gap-5 mt-5">
              <p>
                <span className="font-semibold">Ratings : </span>5/5
              </p>
              <p className="text-green-500 font-semibold">In-Stock</p>
            </div>
            <p className="text-red-500 font-semibold mt-5">Only 500 left</p>
          </div>
          <div className="mt-5">
            <div className="flex gap-5">
              <label className="font-semibold">Quantity</label>
              <div className="flex text-xl border ">
                <button
                  className="border-r-2 px-3"
                  onClick={() => handleLess()}
                >
                  -
                </button>
                <p className="border-r-2 px-3">{num}</p>
                <button className="px-3" onClick={() => handleAdd()}>
                  +
                </button>
              </div>
            </div>
            <button className="w-full text-center rounded-sm font-semibold p-2 mt-5 bg-[#2c7a64] text-white hover:bg-[#315d50] transition-all">
              <span>
                <ShoppingCartOutlined className="me-2 font-bold" />
              </span>
              Add to Cart
            </button>
            <button className="w-full text-center border p-3 font-semibold rounded-sm mt-5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all">
              Buy Now{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
