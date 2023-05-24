import { products } from "./constant/data.js";
import Product from "./model/product-schema.js";
const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data imported successfully");
  } catch (error) {
    console.log("error while inserting data");
  }
};

export default DefaultData;
