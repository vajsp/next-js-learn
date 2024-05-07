import Link from 'next/link';

export default function PostLink({ posts }: any) {
    return (
        <ul>
            {posts.map((item: any) => {
                return (
                    <li key={item.id}>
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
