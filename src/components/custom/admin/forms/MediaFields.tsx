import { bookSchema } from "@/schemas/validation";
import { Control } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FileUpload from "../../book/file-upload";
import ColorPicker from "./ColorPicker";

type BookFormValues = z.infer<typeof bookSchema>;

interface FormFieldProps {
  control: Control<BookFormValues>;
}

const MediaFields = ({ control }: FormFieldProps) => {
  return (
    <>
      <FormField
        control={control}
        name="coverUrl"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Image
            </FormLabel>
            <FormControl>
              <FileUpload
                type="image"
                accept="image/*"
                placeholder="Upload a book cover"
                folder="books/covers"
                variant="light"
                onFileChange={field.onChange}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="coverColor"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Primary Color
            </FormLabel>
            <FormControl>
              <ColorPicker
                onPickerChange={field.onChange}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default MediaFields;
