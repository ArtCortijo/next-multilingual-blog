import siteConfig from "@/config/site";
import PaddingContainer from "../layout/padding-container";
import Link from "next/link";
import SocialLink from "../elements/social-link";

const Footer = () => {
	return (
		<div className="py-8 mt-10 border-t">
			<PaddingContainer>
				<div>
					<h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
					<p className="max-w-md mt-2 text-lg text-neutral-700">
						{siteConfig.description}
					</p>
					{/* Social & Currently At */}
					<div className="mt-6 flex justify-between gap-4 flex-wrap">
						<div>
							<div className="text-lg font-medium">#exploretheworld</div>
							<div className="flex items-center gap-3 text-neutral-600 mt-2">
								<SocialLink
									platform="twitter"
									link={siteConfig.socialLinks.twitter}
								/>
								<SocialLink
									platform="instagram"
									link={siteConfig.socialLinks.instagram}
								/>
								<SocialLink
									platform="github"
									link={siteConfig.socialLinks.github}
								/>
								<SocialLink
									platform="youtube"
									link={siteConfig.socialLinks.youtube}
								/>
								<SocialLink
									platform="linkedin"
									link={siteConfig.socialLinks.linkedin}
								/>
							</div>
						</div>

						<div className="">
							<div className="text-sm text-neutral-400">Currently At</div>
							<div className="flex items-center gap-2 bg-[#fff] rounded-md shadow-md px-3 py-2">
								<div className="w-2 h-2 rounded-full bg-emerald-400" />
								{siteConfig.currentlyAt}
							</div>
						</div>
					</div>

					{/* Bottom Section */}
					<div className="py-3 flex items-center justify-between gap-4 flex-wrap mt-16 border-t">
						<div className="text-sm text-neutral-400">
							All right are reserved | Copyright {new Date().getFullYear()}
						</div>
						<div className="text-sm">
							Made with love by{" "}
							<Link className="underline underline-offset-4" href="#">
								@artyboy
							</Link>
						</div>
					</div>
				</div>
			</PaddingContainer>
		</div>
	);
};

export default Footer;
