import { Link, Outlet } from "react-router";

// Add a new example here and it shows up as a card
const examples = [
    {
        path: "/gelatinous-cube",
        title: "Gelatinous Cube",
        image: "/thumbnails/gelatinous-cube.png",
    },
    {
        path: "/earth-marker",
        title: "Earth Marker",
        image: "/thumbnails/earth-marker.png",
    },
    {
        path: "/lens-scroll",
        title: "Lens Scroll",
        image: "/thumbnails/lens-scroll.png",
    },
];

export default function Home() {
    return (
        <main className="home">
            <h1 className="home__title">3D Examples</h1>
            <div className="home__grid">
                {examples.map(({ path, title, image }) => (
                    <Link key={path} to={path} className="card">
                        <div className="card__image">
                            <img src={image} alt={title} loading="lazy" />
                        </div>
                        <h2 className="card__title">{title}</h2>
                    </Link>
                ))}
            </div>
        </main>
    );
}

// Wraps the example routes so there's a way back to the home page
export function ExampleLayout() {
    return (
        <>
            <Link to="/" className="back-link">
                ← All examples
            </Link>
            <Outlet />
        </>
    );
}
