function Footer() {
  const footerLinks = [
    {
      url: "",
      name: "About",
    },
    {
      url: "",
      name: "Press",
    },
    {
      url: "",
      name: "Copyright",
    },
    {
      url: "",
      name: "Contact us",
    },
    {
      url: "",
      name: "Creators",
    },
    {
      url: "",
      name: "Advertise",
    },
    {
      url: "",
      name: "Advertise",
    },
    {
      url: "",
      name: "Developers",
    },
  ];

  const otherFooterLinks = [
    {
      url: "",
      name: "Terms",
    },
    {
      url: "",
      name: "Privacy",
    },
    {
      url: "",
      name: "Policy & Safety",
    },
    {
      url: "",
      name: "How youtube works",
    },
    {
      url: "",
      name: "Test new features",
    },
  ];

  return (
    <div className="w-full space-y-4 px-2">
      <div className="flex flex-row flex-wrap gap-x-3 font-bold text-sm">
        {footerLinks.map((eachFooterLink, index) => (
          <a key={index} href={eachFooterLink.url}>
            {eachFooterLink.name}
          </a>
        ))}
      </div>

      {/* OtherFooter Links */}
      <div className="flex flex-row flex-wrap gap-x-3 font-bold text-sm">
        {otherFooterLinks.map((eachFooterLink, index) => (
          <a key={index} href={eachFooterLink.url}>
            {eachFooterLink.name}
          </a>
        ))}
      </div>

      <div className="text-xs">
        &copy; {new Date().getFullYear()} Google LLC
      </div>
    </div>
  );
}

export default Footer;
