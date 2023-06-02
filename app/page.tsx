import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";
const postMetadata = getPostMetadata();
const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
));

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {postPreviews}
        </div>
    );
}
