import {
  LucideChevronRight,
  LucideFlag,
  LucideHelpCircle,
  LucidePlaySquare,
  LucideSettings,
  LucideThumbsUp,
} from "lucide-react";
import Footer from "./Footer";

type TListItem = {
  icon: string;
  name: string;
};

const baseListItem: TListItem[] = [
  {
    icon: "",
    name: "Home",
  },
  {
    icon: "",
    name: "Shorts",
  },
  {
    icon: "",
    name: "Subscriptions",
  },
];

const youListItem: TListItem[] = [
  {
    icon: "",
    name: "Your channel",
  },
  {
    icon: "",
    name: "History",
  },
  {
    icon: "",
    name: "Playlist",
  },
  {
    icon: <LucidePlaySquare />,
    name: "Your videos",
  },
  {
    icon: "",
    name: "Your podcasts",
  },
  {
    icon: "",
    name: "Watch later",
  },
  {
    icon: <LucideThumbsUp size={16} />,
    name: "Liked videos",
  },
];

const exploreListItem: TListItem[] = [
  {
    icon: "",
    name: "Trending",
  },
  {
    icon: "",
    name: "Music",
  },
  {
    icon: "",
    name: "Gaming",
  },
  {
    icon: <LucidePlaySquare />,
    name: "News",
  },
  {
    icon: "",
    name: "Sports",
  },
];

const moreListItem: TListItem[] = [
  {
    icon: "",
    name: "Youtube Premium",
  },
  {
    icon: "",
    name: "Youtube Studio",
  },
  {
    icon: "",
    name: "Youtube Music",
  },
  {
    icon: <LucidePlaySquare />,
    name: "Youtube Kids",
  },
];

const otherListItem: TListItem[] = [
  {
    icon: <LucideSettings />,
    name: "Settings",
  },
  {
    icon: <LucideFlag />,
    name: "Report history",
  },
  {
    icon: <LucideHelpCircle />,
    name: "Help",
  },
  {
    icon: "",
    name: "Send Feedback",
  },
];

function LeftPanel() {
  return (
    <div className="px-2">
      <ul className="menu menu-md rounded-box w-full gap-y-2">
        {baseListItem.map((eachBaseListItem, index) => (
          <li key={index}>
            <a className="flex flex-row items-center gap-x-4 px-1">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">{eachBaseListItem.name[0]}</span>
                </div>
              </div>
              <span>{eachBaseListItem.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="divider divider-neutral"></div>

      <div>
        <div className="btn btn-block justify-start">
          <a href="" className="flex flex-row items-center gap-x-2 p-2">
            <span>You</span> <LucideChevronRight />
          </a>
        </div>
        <ul className="menu menu-md rounded-box w-full gap-y-2">
          {youListItem.map((eachYouListItem, index) => (
            <li key={index}>
              <a className="flex flex-row items-center gap-x-4 px-1">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-8 rounded-full">
                    <span className="text-xs">{eachYouListItem.name[0]}</span>
                  </div>
                </div>
                <span>{eachYouListItem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider divider-neutral"></div>

      {/* SUBSCRIPTION LISTS */}
      <div>
        <header className="flex flex-row items-center gap-x-2 p-2">
          <span className="font-bold">Subscriptions</span>
        </header>
        <ul className="menu menu-md rounded-box w-full gap-y-2">
          {youListItem.map((eachYouListItem, index) => (
            <li key={index}>
              <a className="flex flex-row items-center gap-x-4 px-1">
                {eachYouListItem.icon === "" ? (
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                      <span className="text-xs">{eachYouListItem.name[0]}</span>
                    </div>
                  </div>
                ) : (
                  <div className="avatar">
                    <div className="bg-neutral text-neutral-content w-8 h-8 leading-8 rounded-full text-center">
                      <span className="w-full h-full flex flex-col items-center justify-center">
                        {eachYouListItem.icon}
                      </span>
                    </div>
                  </div>
                )}
                <span>{eachYouListItem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider divider-neutral"></div>

      {/* EXPLORE LISTS */}
      <div>
        <header className="flex flex-row items-center gap-x-2 p-2">
          <span className="font-bold">Explore</span>
        </header>
        <ul className="menu menu-md rounded-box w-full gap-y-2">
          {exploreListItem.map((eachExploreListItem, index) => (
            <li key={index}>
              <a className="flex flex-row items-center gap-x-4 px-1">
                {eachExploreListItem.icon === "" ? (
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                      <span className="text-xs">
                        {eachExploreListItem.name[0]}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="avatar">
                    <div className="bg-neutral text-neutral-content w-8 h-8 leading-8 rounded-full text-center">
                      <span className="w-full h-full flex flex-col items-center justify-center">
                        {eachExploreListItem.icon}
                      </span>
                    </div>
                  </div>
                )}
                <span>{eachExploreListItem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider divider-neutral"></div>

      {/* MORE LISTS */}
      <div>
        <header className="flex flex-row items-center gap-x-2 p-2">
          <span className="font-bold">More</span>
        </header>
        <ul className="menu menu-md rounded-box w-full gap-y-2">
          {moreListItem.map((eachMoreListItem, index) => (
            <li key={index}>
              <a className="flex flex-row items-center gap-x-4 px-1">
                {eachMoreListItem.icon === "" ? (
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                      <span className="text-xs">
                        {eachMoreListItem.name[0]}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="avatar">
                    <div className="bg-neutral text-neutral-content w-8 h-8 leading-8 rounded-full text-center">
                      <span className="w-full h-full flex flex-col items-center justify-center">
                        {eachMoreListItem.icon}
                      </span>
                    </div>
                  </div>
                )}
                <span>{eachMoreListItem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* OTHERS LISTS */}
      <div>
        <ul className="menu menu-md rounded-box w-full gap-y-2">
          {otherListItem.map((eachOtherListItem, index) => (
            <li key={index}>
              <a className="flex flex-row items-center gap-x-4 px-1">
                {eachOtherListItem.icon === "" ? (
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                      <span className="text-xs">
                        {eachOtherListItem.name[0]}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="avatar">
                    <div className="bg-neutral text-neutral-content w-8 h-8 leading-8 rounded-full text-center">
                      <span className="w-full h-full flex flex-col items-center justify-center">
                        {eachOtherListItem.icon}
                      </span>
                    </div>
                  </div>
                )}
                <span>{eachOtherListItem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider divider-neutral"></div>

      {/* The Footer */}
      <Footer />
    </div>
  );
}

export default LeftPanel;
