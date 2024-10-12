import { LucideMoreVertical } from "lucide-react";
import React from "react";

type T_VideoCard = {
  videoThumbnail: string;
  videoOwnerDp: string;
  videoOwnerName: string;
  videoTitle: string;
  userName: string;
  views: string;
  uploadTime: string;
};

// Corrected: icon should be ReactNode, not never

export function IconView({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="avatar">
      <div className="bg-neutral text-neutral-content w-8 h-8 leading-8 rounded-full text-center">
        <span className="w-full h-full flex flex-col items-center justify-center">
          {icon}
        </span>
      </div>
    </div>
  );
}

function VideoCard({
  videoThumbnail,
  videoOwnerDp,
  videoOwnerName,
  videoTitle,
  userName,
  views,
  uploadTime,
}: T_VideoCard) {
  const menuItems = [
    {
      icon: <IconView icon={null} />, // Use null instead of an empty string for icons
      text: "Add to queue",
    },
    {
      icon: <IconView icon={null} />,
      text: "Save to Watch later",
    },
    {
      icon: <IconView icon={null} />,
      text: "Save to playlist",
    },
    {
      icon: <IconView icon={null} />,
      text: "Download",
    },
    {
      icon: <IconView icon={null} />,
      text: "Share",
    },
    {
      icon: <IconView icon={null} />,
      text: "Not interested",
    },
    {
      icon: <IconView icon={null} />,
      text: "Don't recommend channel",
    },
    {
      icon: <IconView icon={null} />,
      text: "Report",
    },
  ];

  return (
    <div className="card card-compact bg-transparent min-w-96 p-0 flex-1">
      <figure>
        <img
          src={
            videoThumbnail ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={videoTitle || "Video Thumbnail"}
          className="rounded-box w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body !px-0">
        <div className="flex flex-row justify-center items-start gap-x-2">
          {videoOwnerDp === "" ? (
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <span className="text-xs">{videoOwnerName[0]}</span>
              </div>
            </div>
          ) : (
            <div className="avatar">
              <div className="bg-neutral text-neutral-content w-8 h-8 leading-8 rounded-full text-center ring-primary ring-offset-base-100 ring-0 ring-offset-2">
                <img
                  src={videoOwnerDp} // Use dynamic value for owner's profile picture
                  alt={videoOwnerName}
                />
              </div>
            </div>
          )}
          <div className="flex-auto flex flex-col">
            <span className="font-bold text-lg leading-tight">
              {videoTitle ||
                "This is a trending video and it's from my channel"}
            </span>

            <span>{userName || "Imaprogrammer"}</span>

            {/* Views and time */}
            <div>
              <span className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                {views || "45K"} views
              </span>
              <span className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                {uploadTime || "5 hours ago"}
              </span>
            </div>
          </div>

          {/* The Video Card dropdown icon and dropdown items */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle m-1">
              <LucideMoreVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 rounded-box z-[1] w-72 p-2 shadow"
            >
              {menuItems.map((eachMenuItem, index) => (
                <React.Fragment key={index}>
                  {index === 5 && <div className="divider"></div>}
                  <li>
                    <a className="flex flex-row items-center gap-x-4 px-1">
                      {eachMenuItem.icon}
                      <span>{eachMenuItem.text}</span>
                    </a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
