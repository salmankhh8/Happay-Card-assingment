import React from "react";
export default function Card({id,name, description, final_price,original_price,img_url}){
    return (
        <div className="card wrapper">
            <img className="card_debt" src={img_url}></img>
            <div className="card_property">
            <h3 className="card_title">{name}</h3>
            <h3 className="card_original">${original_price}</h3>
            <h3 className="card_price">${final_price}</h3>
            <h3 className="card_description">{description}</h3>
            </div>
            <div className="add_cart">
                <button>Add to cart</button>
            </div>
            <div className="card_adjust">
                <button className="card_button increment">+</button>
                <input className='card_input' type="text"></input>
                <button className='card_button decrement'>-</button>
            </div>          
        </div> 
        
        
    )

}

// function Card(props) {
//   return (
//     <div className="card">
//       <div className="top">
//         <h2 className="name">{props.name}</h2>
//         <img className="circle-img" src={props.img} alt="avatar_img" />
//       </div>
//       <div className="bottom">
//         <p className="info">{props.tel}</p>
//         <p className="info">{props.email}</p>
//         <button>+</button>
//       </div>
//     </div>
//   );
// }

// export default Card;
