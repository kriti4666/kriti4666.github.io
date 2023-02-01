import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Statistics = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div
      name="statistics"
      className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center h-full text-black"
    >
      <div>
        <p className="text-black text-center text-4xl ">Statistics</p>
        <p className=" text-orange-600 text-center">—•— Git Stats —•—</p>
      </div>
      <p className="text-center mt-8 ">GITHUB CALANDER</p>
      <div className="flex border-2 h-auto w-full justify-center align-center m-auto mt-8">
        <GitHubCalendar username="kriti4666" year="last" >
          {" "}
          <ReactTooltip delayShow={20} />{" "}
        </GitHubCalendar>
      </div>
      <div className=" m-auto mt-14">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=kriti4666&show_icons=true&locale=en&layout=compact&theme=white" />
      </div>
      <div className="flex gap-20  justify-center mt-14">
        <div>
          <img
            align="center"
            alt="kriti4666"
            src="https://github-readme-streak-stats.herokuapp.com/?user=kriti4666&show_icons=true&count_private=true"
          />
        </div>
        <div>
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=kriti4666&count_private=true&show_icons=true"
            alt="kriti4666"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
