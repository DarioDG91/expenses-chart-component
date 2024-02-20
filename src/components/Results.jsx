import Chart from "./Chart";

const footerParagraphClasses = " text-mediumBrown text-base tracking-tight sm:text-lg sm:tracking-normal  "

export default function Results() {
  return (
    <div className="bg-white px-5 py-6 rounded-xl sm:py-9 sm:px-10 sm:rounded-2xl">
      <h2 className=" text-2xl font-bold text-darkBrown mb-16 sm:text-3xl sm:tracking-[0.04em] ">Spending - Last 7 days</h2>
      <div>
        <Chart />
      </div>
      <hr className=" border-cream mt-[24px] mb-[22px]"/>
      <div>
          <p className={footerParagraphClasses}>Total this month</p>
        <div className="flex flex-row justify-between items-center">
            <p className=" text-darkBrown font-bold text-3xl sm:tracking-wide sm:text-5xl">$478.33</p>
          <div>
            <p className=" text-right font-bold text-base">+2.4%</p>
            <p className={footerParagraphClasses}>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
