import { useEffect, useState } from "react";
import { Link } from "react-router";

const Footer = () => {
  const [time, setTime] = useState("");
  const links = [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/cynthia-ugwu/' },
    { name: 'X/Twitter', link: 'https://twitter.com/CynthiiaUgwu' },
    { name: 'Instagram', link: 'https://www.instagram.com/cynthiaugwudesigns/' },
    { name: 'Youtube', link: 'https://youtube.com/@cynthiaugwudesigns' }
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const current = now.toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: '2-digit',
        minute: '2-digit'
      });

      setTime(current);
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="h-[40vh] w-full flex items-end justify-between p-6">
      <div className="flex items-center gap-4">
        <p className="max-md:text-xs">&copy; {new Date().getFullYear()}</p>
        <p className="max-md:text-xs">{time} ET</p>
      </div>
      <div className="flex items-center justify-center md:gap-8 gap-3">
        {links.map((item, i) => (
          <Link key={i} to={item.link} className="link uppercase max-md:text-xs">{item.name}</Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;