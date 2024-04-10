import React, { useEffect, useState } from "react";
import { categories } from "../Assets/Data/datas";
import ProductCard from "../Component/ProductCards";
import axios from "axios";

function Shop() {
  const [items, setitems] = useState([]);
  const [allItems, setAllItem] = useState([]);
  const [filBtn, setFilBtn] = useState(["Shop Now"]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setitems(res.data);
      setAllItem(res.data);
    });
  }, []);

  const filterProduct = (e) => {
    const getBtn = e.target.id;
    const fltr = allItems.filter((data) => {
      return getBtn === data.category;
    });

    setitems(fltr);
    setFilBtn(getBtn.toUpperCase());

    if (getBtn === "all") {
      setitems(allItems);
    }
    return getBtn;
  };

  return (
    <section className="">
      <div className="text-center mt-2">
        <div className="">
          <button
            className="text-[1rem] ms-5 hover:text-green-500"
            id="all"
            onClick={filterProduct}
          >
            All
          </button>
          {categories.map((i) => {
            return (
              <button
                key={i.id}
                type="button"
                onClick={filterProduct}
                className="text-[1rem] ms-5 hover:text-green-500"
                id={i.btn}
              >
                {i.btn.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-cover w-[90%] rounded-xl p-5 text-center mt-2 banner">
          <h5 className="text-[#2c7a64] font-semibold">{filBtn}</h5>
        </div>
      </div>

      <div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 md:p-10 ">
          {items.map((i) => {
            return (
              <div
                key={i.id}
                className="flex justify-center transition-all duration-500"
              >
                <ProductCard i={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Shop;
