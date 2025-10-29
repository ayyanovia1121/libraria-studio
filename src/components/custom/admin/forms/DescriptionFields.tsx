import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { bookSchema } from "@/schemas/validation";
import { Control } from "react-hook-form";
import { z } from "zod";

type BookFormValues = z.infer<typeof bookSchema>;

interface FormFieldProps {
  control: Control<BookFormValues>;
}

const DescriptionFields = ({ control }: FormFieldProps) => {
  return (
    <>
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Description
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Book description"
                {...field}
                rows={10}
                className="book-form_input"
              />
            </FormControl>
            {/* <FormMessage /> */}
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="summary"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Summary
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Book summary"
                {...field}
                rows={5}
                className="book-form_input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default DescriptionFields;
