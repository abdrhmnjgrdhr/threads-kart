import axios from "axios";

const products = async () => {
    const product = await axios.get("https://fakestoreapi.com/products")
    return product.data
};

export default products