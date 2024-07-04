'use client'

import { useState } from "react";

export default function List() {
    let product = ['Tomatoes', 'Pasta', 'Coconut'];
    let [count, change] = useState([0, 0, 0]);

    function countChange(a, i){
        let temp = [...count];
        if(a === "+") {
            temp[i]++;
        } else {
            temp[i] = temp[i] > 0 ? temp[i]-- : 0;
        }
        change(temp);
    }

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                product.map((a, i)=>{
                    return(
                        <div className="food" key={i}>
                            <img src={'/food'+[i]+'.png'} className="food-img"/>
                            <h4>{a} $40</h4>
                            <button onClick={()=>{countChange("-", [i])}}>-</button>
                            <span> {count[i]} </span>
                            <button onClick={()=>{countChange("+", [i])}}>+</button>
                        </div>
                    );
                })
            }
        </div>
    );
}