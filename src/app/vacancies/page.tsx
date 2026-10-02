import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Vacancies } from "@/components/Vacancies";

export const metadata: Metadata = {
  title: "Вакансии — Снегурочка",
  description: "Оставьте заявку на вакансию в сети салонов «Снегурочка»",
};

export default function VacanciesPage() {
  return (
    <>
      <Header />
      <main>
        <Vacancies />
      </main>
      <Footer />
    </>
  );
};
