import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div>
            <div className="prose dark:prose-invert my-12 text-center max-w-full">
                <h1 className="px-10 text-3xl text-slate-600 dark:text-slate-300">{post.data.title}</h1>
                <p className="inline-block text-slate-100 mt-2 py-1 px-2 rounded-md bg-indigo-600">{post.data.date}</p>
            </div>

            <article className="prose dark:prose-invert max-w-full">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;
