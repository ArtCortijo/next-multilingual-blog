export interface SiteConfig {
	siteName: string;
	description: string;
	currentlyAt: string;
	socialLinks: {
		twitter: string;
		youtube: string;
		github: string;
		linkedin: string;
		instagram: string;
	};
}

const siteConfig: SiteConfig = {
	siteName: "Explorer",
	description:
		"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
	currentlyAt: "Budapest",
	socialLinks: {
		twitter: "https://twitter.com",
		youtube: "https://youtube.com",
		github: "https://github.com",
		linkedin: "https://linkedin.com",
		instagram: "https://instagram.com",
	},
};

export default siteConfig;
