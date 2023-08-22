import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Toggle } from "../ui/toggle";
import {
  CgFormatStrike,
  CgFormatUnderline,
  CgMathMinus,
  CgFormatCenter,
  CgFormatLeft,
  CgFormatRight,
  CgFormatJustify,
} from "react-icons/cg";
import {
  RxLetterCaseCapitalize,
  RxLetterCaseLowercase,
  RxLetterCaseUppercase,
} from "react-icons/rx";

export function TypographyPopover() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <BiDotsVerticalRounded size={20} />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[365px] bg-background">
          <h5 className="font-semibold mb-4">Typography</h5>

          <div className="grid grid-cols-2 gap-2 items-center">
            <Label>Text Decoration :</Label>
            <div>
              <Toggle>
                <CgMathMinus size={16} />
              </Toggle>
              <Toggle>
                <CgFormatUnderline size={16} />
              </Toggle>
              <Toggle>
                <CgFormatStrike size={16} />
              </Toggle>
            </div>
            <Label>Case :</Label>
            <div>
              <Toggle>
                <CgMathMinus size={16} />
              </Toggle>
              <Toggle>
                <RxLetterCaseUppercase size={16} />
              </Toggle>
              <Toggle>
                <RxLetterCaseLowercase size={16} />
              </Toggle>
              <Toggle>
                <RxLetterCaseCapitalize size={16} />
              </Toggle>
            </div>
            <Label>Alignment</Label>{" "}
            <div className="border border-input bg-background flex items-center px-3">
              <Toggle aria-label="Toggle Left">
                <CgFormatLeft size={20} />
              </Toggle>
              <Toggle aria-label="Toggle Center">
                <CgFormatCenter size={20} />
              </Toggle>
              <Toggle aria-label="Toggle right">
                <CgFormatRight size={20} />
              </Toggle>{" "}
              <Toggle aria-label="Toggle right">
                <CgFormatJustify size={20} />
              </Toggle>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
