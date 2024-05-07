import React from "react";
import "./category.scss";
import { CATEGORY_DATA } from "../../static/listData";

function Category() {
  let categoryCreateCard = CATEGORY_DATA?.map((value, index) => (
    <div key={index} className="category__card">
      <img src={value.img} alt="" />
      <div className="category__card__left">
        <h3 className="category__card__title">{value.title}</h3>
        <p className="category__card__text">{value.text}</p>
      </div>
    </div>
  ));

  return (
    <section className="category">
      <div className="container">
        <div className="category__cards">{categoryCreateCard}</div>
      </div>
    </section>
  );
}

export default Category;