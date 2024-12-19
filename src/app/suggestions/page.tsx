import BackgroundImage from "@/components/suggestions/BackgroundImage";
import SuggestionForm from "@/components/suggestions/SuggestionForm";
import Titles from "@/components/suggestions/Titles";

export default function Suggestions() {
  return (
    <main className="w-full h-screen relative flex justify-center items-center">
      <BackgroundImage />
      <section className="absolute w-full px-4 top-24 flex flex-col gap-9 lg:w-2/3 lg:top-40">
        <Titles />
        <SuggestionForm />
      </section>
    </main>
  );
}
