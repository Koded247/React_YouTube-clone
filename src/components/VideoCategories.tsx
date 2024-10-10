const categories = [
  "Technology",
  "Education",
  "Gaming",
  "Music",
  "Sports",
  "News",
  "Entertainment",
  "Science",
  "Vlogs",
  "Health & Fitness",
  "Food & Cooking",
  "Travel",
  "Fashion & Beauty",
  "DIY & Crafts",
  "Comedy",
  "Business & Finance",
  "Movies & TV",
  "Photography",
  "Art & Design",
  "Auto & Vehicles",
  "Animation",
  "History",
  "Nature & Wildlife",
  "How-to & Tutorials",
  "Podcasts",
  "Motivational",
  "Lifestyle",
  "Tech Reviews",
  "Paranormal",
  "Gadgets",
  "Pets & Animals",
  "Spirituality",
  "Home Improvement",
  "Adventure",
  "Stand-up Comedy",
  "Marketing",
  "Fitness Challenges",
  "Social Commentary",
  "Virtual Reality",
  "Public Speaking",
];

function VideoCategory() {
  return (
    <div className="sticky top-0 flex flex-row flex-nowrap justify-start items-center gap-x-3 overflow-x-auto z-10 mb-4 px-4 py-4 bg-[#111111]">
      {categories.map((eachCategory) => (
        <button
          key={eachCategory}
          type="button"
          title="categories"
          className="btn rounded-box"
        >
          {eachCategory}
        </button>
      ))}
    </div>
  );
}

export default VideoCategory;
