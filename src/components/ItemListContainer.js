import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";


export const ItemListContainer = ({}) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId),
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((items) => ({ id: items.id, ...items.data() })),
        ),
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((items) => ({ id: items.id, ...items.data() })),
        ),
      );
    }
  }, [categoriaId]);

  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
