import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY ELITE",
      price: "99.99",
      length: "3",
    },
    {
      imgUrl: "/pricing.jpg",
      title: "SEMI-ANNUAL PRO",
      price: "149.99",
      length: "6",
    },
    {
      imgUrl: "/pricing.jpg",
      title: "ANNUAL PRESTIGE",
      price: "249.99",
      length: "12",
    },
  ];
  return (
    <section className="pricing">
      <h1>IRONVERGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h3>$ {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Access to all gym equipment
                </p>
                <p>
                  <Check /> All day free training sessions with our expert trainers
                </p>
                <p>
                  <Check /> Free restroom access
                </p>
                <p>
                  <Check /> 24/7 skilled Staff Support
                </p>
                <p>
                  <Check /> 3 days free trial for new members
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
