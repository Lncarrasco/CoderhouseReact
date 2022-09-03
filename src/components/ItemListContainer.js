import React, { useEffect, useState } from 'react';
import indumentariaJson from "../indumentaria.json";
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const [indumentaria, setIndumentaria] = useState([])
  const getIndumentaria = (data, time) => new Promise((resolve, reject)=>{
      setTimeout(()=>{
          if(data){
              resolve(data)
          } else{
              reject("Error")
          }
      }, time);
  });

  useEffect(()=>{
      getIndumentaria(indumentariaJson, 2000).then((res)=>{
          setIndumentaria(res)
      }).catch((err)=> console.log(err, ": No hay productos"));
  }, []);


  
  return (
    <div>
      
      <ItemList indumentarias={indumentaria}/>

    </div>
  )
}

export default ItemListContainer