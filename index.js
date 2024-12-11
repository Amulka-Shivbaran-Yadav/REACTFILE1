 import React from "react";
 import ReactDOM from "react-dom";
  import Card from "./Cards";
  import "./index.css";
  import Sdata from "./Sdata";



  //console.log(Sdata[0]);

/* using map method
function ncard(val){   
  console.log(val);
  return(
  <Card 
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
}

// They are written inside map method


{Sdata.map(ncard)}

*/





 ReactDOM.render(
<>
<h1 className="heading_style">List of 3 Netflix series in 2024</h1>

{Sdata.map((val,index) => {

  console.log(index);

  return(
  <Card 
  key={val.id}
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
  

})}


 </>
 ,document.getElementById('root')); 



 