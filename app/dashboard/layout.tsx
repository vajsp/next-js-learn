export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    setTimeout(() => {
        console.log('dashbord');
    }, 17000);

    return (
        <section>
            DashboardLayout
            {children}
        </section>
    );
}
