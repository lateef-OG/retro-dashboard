import React from "react";
import blue_chart from "../../assets/blue_chart.svg";
import cyan_chart from "../../assets/cyan_chart.svg";
import pink_bar from "../../assets/pink_bars.svg";
import yellow_bar from "../../assets/yellow_bars.svg";

const Metrics = () => {
  return (
    <div class="grid grid-cols-4 gap-8 mb-8">
      <div className="bg-gradient-to-r from-blue-150 to-blue-250 rounded-lg py-5 px-6">
        <p className="text-white">Daily Income</p>
        <div className="flex items-center justify-between">
          <p className="text-white text-4xl mt-3 font-semibold">$ 345</p>
          <img src={blue_chart} alt="" className="h-16 w-auto" />
        </div>
      </div>
      <div className="bg-white rounded-lg py-5 px-6">
        <p className="text-secondary_text">Daily Expense</p>
        <div className="flex items-center justify-between">
          <p className="text-primary_text text-4xl mt-3 font-semibold">$ 380</p>
          <img src={pink_bar} alt="" className="h-16 w-auto" />
        </div>
      </div>
      <div className="bg-white rounded-lg py-5 px-6">
        <p className="text-secondary_text">Weekly Income</p>
        <div className="flex items-center justify-between">
          <p className="text-primary_text text-4xl mt-3 font-semibold">$ 5380</p>
          <img src={cyan_chart} alt="" className="h-16 w-auto" />
        </div>
      </div>
      <div className="bg-white rounded-lg py-5 px-6">
        <p className="text-secondary_text">Weekly Expense</p>
        <div className="flex items-center justify-between">
          <p className="text-primary_text text-4xl mt-3 font-semibold">$ 4320</p>
          <img src={yellow_bar} alt="" className="h-16 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Metrics;
