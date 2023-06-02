import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-indigo-300 p-4 rounded-md transition hover:shadow-md dark:shadow-slate-900">
            <p className="inline-block text-sm text-slate-100 mb-2 py-1 px-2 rounded-md bg-indigo-600">{props.date}</p>
            <Link href={`/posts/${props.slug}`}>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 hover:underline">
                    {props.title}
                </h2>
            </Link>
            <p className="text-slate-700 dark:text-slate-200">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;
