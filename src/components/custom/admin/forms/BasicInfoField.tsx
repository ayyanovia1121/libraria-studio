import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { bookSchema } from "@/schemas/validation";
import { Control } from "react-hook-form";
import { z } from "zod";

type BookFormValues = z.infer<typeof bookSchema>;

interface FormFieldProps {
  control: Control<BookFormValues>;
}

const BasicInfoField = ({ control }: FormFieldProps) => {
  return (
    <>
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Title
            </FormLabel>
            <FormControl>
              <Input
                required
                placeholder="Book title"
                {...field}
                className="book-form_input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="author"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Author
            </FormLabel>
            <FormControl>
              <Input
                required
                placeholder="Book author"
                {...field}
                className="book-form_input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="genre"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Genre
            </FormLabel>
            <FormControl>
              <Input
                required
                placeholder="Book genre"
                {...field}
                className="book-form_input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="rating"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Rating
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  placeholder="Book rating"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="totalCopies"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Total Copies
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={10000}
                  placeholder="Total copies"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default BasicInfoField;
