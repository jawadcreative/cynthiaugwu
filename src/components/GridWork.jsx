const GridWork = () => {
    const data = [
        { title: "Lucid Motors", year: "2023", img: "/img/lucid-motors.webp" },
        { title: "Baron Capital", year: "2023", img: "/img/baron-capital.webp" },
        { title: "NFL", year: "2024", img: "/img/nfl.webp" },
        { title: "Placenew", year: "2024", img: "/img/placenew.webp" },
        { title: "Somos", year: "2023", img: "/img/somos.webp" },
        { title: "The Plug", year: "2022", img: "/img/plug.webp" },
        { title: "Ixperience", year: "2023", img: "/img/ixperience.webp" },
        { title: "Hudu", year: "2023", img: "/img/hudu.webp" },
    ];
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 h-full">
            {data.map((item, i) => (
                <div key={i} className="col-span-1 h-screen overflow-hidden">
                    <img className="h-[90%] w-full object-center object-cover rounded-xl" src={item.img} alt="nfl" />
                    <div className="flex items-center w-full justify-between h-[10%]">
                        <h1 className="text-4xl uppercase">{item.title}</h1>
                        <p>{item.year}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default GridWork