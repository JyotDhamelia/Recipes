export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "All-Recipe",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "About",
			href: "/about",
		},
		
	],
	links: {
		github: "https://github.com/ninadvyas/All-Recipe",
		twitter: "https://twitter.com/ninadvsd",
    sponsor: "https://github.com/ninadvyas/All-Recipe"
	},
};
