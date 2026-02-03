import { Link, useOutletContext } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ChosenPosts from "../components/ChosenPosts";
import Subjects from "../components/Subjects";
import RecentArticles from "../components/RecentArticles";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  const { setFilter } = useOutletContext();

  return (
    <>
      <HeroSection />
      <ChosenPosts />
      <Subjects setFilter={setFilter} />
      <RecentArticles />
      <NewsLetter />
    </>
  );
}
