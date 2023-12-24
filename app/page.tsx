import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block text-center justify-center">
			<h1 className="text-9xl	font-extrabold	">Cook,Share,Explore </h1>
				<br />
				<h1 className="text-9xl	font-extrabold">Your Recipes Wanted!</h1>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href="https://github.com/ninadvyas/All-Recipe"
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			{/* <div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
		</section>
	);
}
