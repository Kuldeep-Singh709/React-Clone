// // import React, { useEffect, useState } from "react";
// // import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

// // function Category() {
// //   const [category, setCategory] = useState([]);

// //   const fetchCategory = async () => {
// //     const response = await fetch(
// //       "https://mocki.io/v1/deaf146a-40c2-4af2-bcf6-4fd579ebc049"
// //     );
// //     const data = await response.json();
// //     setCategory(data);
// //   };
// //   // https://mocki.io/v1/cea4aeec-bce3-4ab7-b43e-4e542416e800

// //   useEffect(() => {
// //     fetchCategory();
// //   }, []);

// //   return (
// //     <>
// //       <div className="max-w-[1200px] mx-auto">
// //         {/* <div className='max-w-[100vw] '> */}
// //         <div className=" border border-blue-500 flex justify-between items-center">
// //           <div className="border border-green-500">
// //             <h1 className="font-bold">What's on Your Mind</h1>
// //           </div>
// //           <div className="border border-orange-500 flex items-center gap-4">
// //             <div className="bg-[#e2e2e7] rounded-full text-[black] p-[4px] cursor-pointer">
// //               <FaArrowLeft className="text-[20px]" />
// //             </div>
// //             <div className="bg-[#e2e2e7] rounded-full text-[black] p-[4px] cursor-pointer">
// //               <FaArrowRight className="text-[20px]" />
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex flex-wrap">
// //           {/* {category.map((cat, index) => (
// //             <div key={index} className="flex">
// //               <img src={"http://localhost:5000/images/"+ cat.image } alt={cat.path} />
// //             </div>
// //           ))} */}
         
// //           {/* {category.map((cat, index) => (
// //             <div key={index} className="flex">
// //             <img src={cat.image} alt={cat.name} className="cat-image" />
// //             <h3 className="cat-name">{cat.name}</h3>
// //             </div>
// //           ))} */}

// //           <div>
// //       {Object.keys(category).map(categoryName => (
// //         <Category key={categoryName} categoryName={categoryName} items={categoty[categoryName]} />
// //       ))}
// //     </div>



// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Category;









// import React, { useEffect, useState } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

// function CategoryComponent() {
//   const [apiDataKey, setapiDataKey] = useState();
//   const [apiData, setapiData] = useState();

//   const fetchCategory = async () => {
//     const response = await fetch(
//       // "https://mocki.io/v1/deaf146a-40c2-4af2-bcf6-4fd579ebc049"
//       "https://mocki.io/v1/cea4aeec-bce3-4ab7-b43e-4e542416e800"
//     );
//     const data = await response.json();
//     setapiData(data);
  
    
//     let dataKey = Object.keys(data);
//     setapiDataKey(dataKey);
    
//   };

//   useEffect(() => {
//     fetchCategory();
//   }, []);



//   return (
//     <div className="max-w-[1200px] mx-auto">
//       <div className=" border border-blue-500 flex justify-between items-center">
//         <div className="border border-green-500">
//           <h1 className="font-bold">What's on Your Mind</h1>
//         </div>
//         <div className="border border-orange-500 flex items-center gap-4">
//           <div className="bg-[#e2e2e7] rounded-full text-[black] p-[4px] cursor-pointer">
//             <FaArrowLeft className="text-[20px]" />
//           </div>
//           <div className="bg-[#e2e2e7] rounded-full text-[black] p-[4px] cursor-pointer">
//             <FaArrowRight className="text-[20px]" />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-wrap">

//       {
//           apiDataKey.map((key,index)=>{
            
//             let Arr = `${apiData}[${key}]`;
//             {console.log("Arr :",Arr)}
//             let objA = Arr[0];
//             {console.log("objA :",objA)}
           
//             <h3>{objA.name}</h3>

            
//           })
//       }

        
//       </div>
//     </div>
//   );
// }

// // const CategoryItem = ({ categoryName, items }) => {
// //   const item = items.find((item) => item.id === 0);

// //   if (!item) {
// //     return null; // Skip if there's no item with id: 0
// //   }

// //   return (
// //     <div style={{ marginBottom: "20px" }}>
// //       {console.log(`ItemName: ${item.name}`)}
// //       {console.log(`categoryname:${categoryname}`)}
// //       <h2>{categoryName}</h2>
// //       <img
// //         src={item.image}
// //         alt={item.name}
// //         style={{ width: "200px", height: "200px", objectFit: "cover" }}
// //       />
// //       <p>{item.name}</p>
// //     </div>
// //   );
// // };

// export default CategoryComponent;













import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Category() {
  const [apiDataKey, setApiDataKey] = useState([]); // Initialize as an empty array
  const [apiData, setApiData] = useState({}); // Initialize as an empty object

  const fetchCategory = async () => {
    const response = await fetch(
      // "https://mocki.io/v1/cea4aeec-bce3-4ab7-b43e-4e542416e800"
      '/data.json'
    );
    const data = await response.json();
    setApiData(data);

    let dataKey = Object.keys(data);
    setApiDataKey(dataKey);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-bold">What's on Your Mind</h1>
        </div>
        <div className=" flex items-center gap-4">
          <div className="bg-[#e2e2e7] rounded-full text-[black] p-[4px] cursor-pointer">
            <FaArrowLeft className="text-[20px]" />
          </div>
          <div className="bg-[#e2e2e7] rounded-full text-[black] p-[4px] cursor-pointer">
            <FaArrowRight className="text-[20px]" />
          </div>
        </div>
      </div>

      <div className="flex  gap-[1px] border border-[red] overflow-hidden" >
        {apiDataKey.map((key, index) => {
          let objA = apiData[key];


          let foodName = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
          // Adding console.log to debug
          console.log("Key:", key);
          console.log("Object A:", objA[0].name);
          console.log("FoodName:", foodName);



          return (
            <div key={index} className="flex-grow shrink-0 w-[150px] ">
            <div className="p-[1px] cursor-pointer hover:bg-[#e9c5c5]">
                <img src={objA[0].image} alt={objA[0].name} className="rounded-full " />
            </div>
            {/* <div className="border border-[green] flex justify-center items-center">
              <h3 >{foodName}</h3>
            </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
