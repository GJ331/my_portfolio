import React from "react";

const WorkCard = ({ img, title, subtitle }) => (
  <div className="group relative overflow-hidden border-2 border-white/50 rounded-2xl">
    {/* 遮罩 */}
    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
    {/* 图片 */}
    <img
      className="group-hover:scale-125 transition-all duration-500"
      src={img}
      alt={title}
    />
    {/* 預覽文字 */}
    <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
      <span className="text-gradient">{subtitle}</span>
    </div>
    {/* 標題 */}
    <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
      <span className="text-3xl text-white">{title}</span>
    </div>
  </div>
);

export default WorkCard;
