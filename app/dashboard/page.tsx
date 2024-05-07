import Link from 'next/link';

export default function Page() {
    throw new Error('页面有问题');
    return (
        <>
            <h1 className="text-3xl text-blue-500">hellow dashboard Page</h1>
            <br />
            <br />
            <Link href={'/'}>home</Link>
        </>
    );
}
