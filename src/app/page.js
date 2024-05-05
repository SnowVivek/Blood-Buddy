import Navbar from "./common/navbar";
import { BackgroundVideo, Hero_Content_1 } from "./components/home/section1";
import { About } from "./components/home/about";
import { Volunteer } from "./components/home/volunteer";
import { Testimonials } from "./components/home/testimonials";
import { Footer } from "./common/footer";

export default function Home() {
	return (
		<>
			<main className=" flex flex-col">
				{/* ------ Landing Page ------ */}

				<section id="landing_page" className="h-[100dvh]">
					<BackgroundVideo />
					<Navbar/>
					<Hero_Content_1 />
				</section>

				{/* ------ About ------ */}
				<section id="about" className="overflow-x-hidden">
					<About/>
				</section>

				{/* ------ Volunteer ------ */}
				<section id="volunteer" className="overflow-x-hidden">
				 	<Volunteer/>
				</section>


				{/* ------ Testimonials ------ */}
				<section id="testimonials" className="overflow-x-hidden">
				 	<Testimonials/>
				</section>

				{/* ------ Footer ------ */}
				<section id="footer" className="overflow-x-hidden">
				 	<Footer/>
				</section>


			</main>
		</>
	);
}
