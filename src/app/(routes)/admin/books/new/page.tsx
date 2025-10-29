import BookForm from "@/components/custom/admin/forms/BookForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AddBookPage = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};

export default AddBookPage;
