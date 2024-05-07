'use client';
import Link from 'next/link';
import PostLink from './blog/PostList';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Home() {
    const path = usePathname();
    console.log(path);
    const router = useRouter();

    const postData = [
        { id: 1, slug: 'aaa', title: 'aaa' },
        { id: 2, slug: 'bbb', title: 'bbb' },
        { id: 3, slug: 'ccc', title: 'ccc' },
    ];

    return (
        <>
            <h1 className="text-4xl text-orange-600">5月一定找到工作</h1>
            <br />
            <br />
            <Link href={'/dashboard'}>跳转Dashboard</Link>
            <br />
            <br />
            <PostLink posts={postData}></PostLink>
            <br />
            <br />
            <button
                onClick={() => {
                    router.push('/dashboard');
                }}
            >
                router跳转
            </button>
        </>
    );
}
