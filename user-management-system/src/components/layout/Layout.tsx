import Navbar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    console.log("working")
    return (
        <div>
            <Navbar />
            <div className="p-6">{children}</div>
        </div>
    );
}