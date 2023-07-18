import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostListing from "@/components/post/post-listing";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
	return (
		<PaddingContainer>
			<main className="h-auto space-y-10">
				<PostCard post={DUMMY_POSTS[0]} />
				<PostListing
					posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
				/>
				<CTACard />
				<PostCard reverse={true} post={DUMMY_POSTS[3]} />
				<PostListing posts={DUMMY_POSTS.filter((_post, index) => index > 3)} />
			</main>
		</PaddingContainer>
	);
}
