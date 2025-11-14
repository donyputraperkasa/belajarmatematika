import TeacherList from "@/components/TeacherList";

export default function TeamPage() {
    return (
        <section
            className="min-h-screen bg-cover bg-center bg-no-repeat p-6"
            style={{ backgroundImage: "url('/wallpaper1.png')" }}
        >
            <TeacherList />
        </section>
    );
}