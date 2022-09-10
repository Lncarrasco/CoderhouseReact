import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import indumentariaJson from "../indumentaria.json";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [indumentaria, setIndumentaria] = useState([])
  const { id } = useParams()

  const getIndumentaria = (data, time) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data.find(i => i.id === id))
      } else {
        reject("Error")
      }
    }, time);
  });

  useEffect(() => {
    getIndumentaria(indumentariaJson, 2000)
      .then((res) => {
        setIndumentaria(res)
        console.log(res)
      })
      .catch((err) => console.log(err, ": No hay productos"));
  }, []);

  return (
    <div>

      <div className='card mb-3' style={{ "width": "auto", "margin": "15px" }}>

        <ItemDetail indumentarias={indumentaria} />

      </div>
    </div>


  )
}

export default ItemDetailContainer