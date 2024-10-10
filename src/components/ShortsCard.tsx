import { LucideMoreVertical } from "lucide-react";
import { IconView } from "./VideoCard";
import { T_ShortsCardProps } from "../types";

function ShortsCard({ title, views }: T_ShortsCardProps) {
  const menuItems = [
    {
      icon: <IconView icon={""} />,
      text: "Add to queue",
    },
    {
      icon: <IconView icon={""} />,
      text: "Not interested",
    },
    {
      icon: <IconView icon={""} />,
      text: "Report",
    },
    {
      icon: <IconView icon={""} />,
      text: "Send Feedback",
    },
  ];
  return (
    <div className="carousel carousel-center bg-neutral/20 max-w-full space-x-4 p-4">
      <div className="carousel-item flex flex-col">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt=""
          className="rounded-box"
        />
        <div className="flex flex-row py-2">
          <div className="flex-auto">
            <div className="font-bold text-lg h-12">
              {title || "Satifying designs..."}
            </div>
            <div>{views || "10M"} views</div>
          </div>
          {/* The Video Card dropdown icon and dropdown items */}
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle m-1">
              <LucideMoreVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 rounded-box z-[1] w-72 p-2 shadow"
            >
              {menuItems.map((eachMenuItem, index) => (
                <>
                  {index == 5 && <div className="divider"></div>}
                  <li key={index}>
                    <a className="flex flex-row items-center gap-x-4 px-1">
                      {eachMenuItem.icon}
                      <span>{eachMenuItem.text}</span>
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt=""
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt=""
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt=""
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
          alt=""
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt=""
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt=""
          className="rounded-box"
        />
      </div>
    </div>
  );
}

export default ShortsCard;
