export default function Page({ params }: { params: { slug: string } }) {
    return <h1>Catch-All Page{params.slug}</h1>;
}
