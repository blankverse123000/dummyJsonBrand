import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({ type: "GetProduct", payload: productList });
    const filterProducts = productList.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: "GetProduct", payload: filterProducts });
  }, [productList, search]);
  const fetchData = async () => {
    const api = await fetch("https://dummyjson.com/products");
    const { products } = await api.json();
    setProductList(products);
  };
  const initial = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initial);
  const data = { state, dispatch, productList, setProductList, setSearch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const customContext = () => {
  return useContext(StateContext);
};
