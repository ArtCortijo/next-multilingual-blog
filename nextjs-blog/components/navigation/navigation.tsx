import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navigation = () => {
	return (
		<div className="border-b sticky top-0 z-[999] left-0 right-0 bg-[#fff] bg-opacity-50 backdrop-blur-md">
			<PaddingContainer>
				<div className="nav-wrapper flex items-center justify-between py-5">
					<Link className="text-lg font-bold" href="/">
						Explorer
					</Link>
					{/* Category links */}
					<nav>
						<ul className="flex items-center gap-4">
							<li>
								<Link href="/cities">Cities</Link>
							</li>
							<li>
								<Link href="/experiences">Experiences</Link>
							</li>
						</ul>
					</nav>
				</div>
			</PaddingContainer>
		</div>
	);
};

export default Navigation;
