import Button from "@/components/Button/Button";
import LetsTalkDialog from "@/components/LetsTalkDialog/LetsTalkDialog";
import { Typography } from "@/components/Typography/Typography";

export default function LetsTalkBanner() {
  return (
    <div className="flex w-full bg-brand-primary py-8">
      <div className="flex justify-center items-center w-5xl max-w-11/12 mx-auto gap-4">
        <Typography
          variant="header3"
          as="h3"
          className="text-main-black font-medium text-center"
        >
          Have something in mind?
        </Typography>
        <LetsTalkDialog>
          <Button className="bg-white">Let's talk</Button>
        </LetsTalkDialog>
      </div>
    </div>
  );
}
