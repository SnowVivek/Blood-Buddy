import Navbar from "./common/navbar";
import { BackgroundVideo, Section_1_TextBox } from "./components/home/section1";
import BB_Logo from "./common/logo";

export default function Home() {
	return (
		<>
			<main className="overflow-y-auto overflow-x-hidden flex flex-col">
				{/* ------ Section 1 ------ */}

				<section id="one" className="h-[150%]">
					<BackgroundVideo />


					<header className="w-full relative flex items-center p-12">
						{/* Logo  */}
						<BB_Logo />

						{/* Navbar */}
						<Navbar />

						{/* TextArea */}
					</header>
					<Section_1_TextBox />

				</section>

				{/* ------ Section 2 ------ */}
				<section id="two" className="h-[100%]">
				
					

				</section>
			</main>
		</>
	);
}
