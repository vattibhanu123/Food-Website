import Restaurant from"./Restaurant"
import {useState} from"react";
import reslist from"../utils/mockData"
const Body = () => {
  //State variable---super powerful variable
  const [listOfRest,setlistOfRest]=useState(reslist);
  
    return (
       <div className="body">
        <div className="filter">
          <button onClick={
            //Filter logic
            ()=>{

              const filteredData=listOfRest.filter
              ((res)=>res.rating>4.7);
             setlistOfRest(filteredData);
            }
          
        }
          className="filter_btn">Top Rated Restaurant</button>
          </div>
      <div className="res_container">
      {
      listOfRest.map((res_data)=>{
        return <Restaurant key={res_data.restaurantName} resData={res_data} />
      })
     }
        </div>
      </div>
    );
  }
  export default Body;