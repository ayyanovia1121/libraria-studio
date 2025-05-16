import BookList from "@/components/shared/book/book-list";
import BookOverview from "@/components/shared/book/book-overview";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]}/>

      {/* //Wip: Book List */}
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
}
