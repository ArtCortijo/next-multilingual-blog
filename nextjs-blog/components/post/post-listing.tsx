import { Post } from "@/types/collection";
import PostCard from "./post-card";

interface PostListingProps {
	posts: Post[];
	layout?: "vertical" | "horizontal";
}

const PostListing = ({ posts, layout = "vertical" }: PostListingProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
			{posts.map((post) => (
				<PostCard layout={layout} post={post} key={post.id} />
			))}
		</div>
	);
};

export default PostListing;
