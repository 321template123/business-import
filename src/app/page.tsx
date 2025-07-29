import AboutPreview from "./components/Preview/AboutPreview";
import MainPreview from "./components/Preview/MainPreview";

export default function Home() {
  return (
		<main className="relative items-center">
			<MainPreview />
			<AboutPreview />
		</main>
  );
}
