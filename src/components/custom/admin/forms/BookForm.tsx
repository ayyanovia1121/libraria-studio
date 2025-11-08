"use client";

import { bookSchema } from "@/schemas/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FileUpload from "../../book/file-upload";
import BasicInfoField from "./BasicInfoField";
import MediaFields from "./MediaFields";
import DescriptionFields from "./DescriptionFields";
import { Button } from "@/components/ui/button";
import { AddBook } from "@/actions/book.action";
import { toast } from "sonner";

interface Props extends Partial<BookProps> {
  type?: "create" | "update";
}

const BookForm = ({ type, ...book }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      summary: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {
    const result = await AddBook(values);

    if (result.success) {
      toast.success("Success", {
        description: "Book added to library successfully",
      });
      router.push(`/admin/books/${result.data.id}`);
    } else {
      toast.error("Error", {
        description: result.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <BasicInfoField control={form.control} />
        <MediaFields control={form.control} />
        <DescriptionFields control={form.control} />

        <Button type="submit" className="book-form_btn text-white">
          Add Book to Library
        </Button>
      </form>
    </Form>
  );
};

export default BookForm;
