import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CgFontHeight, CgFontSpacing } from "react-icons/cg";
import { RxRowSpacing } from "react-icons/rx";
import { Toggle } from "@/components/ui/toggle";
import { TypographyPopover } from "@/components/popovers/Typography";
import Spacing from "@/components/collapse/Spacing";
import { Label } from "@/components/ui/label";
import { LuPlus } from "react-icons/lu";

const Design: FC = () => {
  return (
    <div className="pr-2">
      <div className="py-6 border-b">
        <p className="font-semibold tracking-wide text-sm">Text</p>
        <Input placeholder="Type Something ..." className="my-4" />
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 grid-rows-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Font Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="semibold">Semi Bold</SelectItem>
              <SelectItem value="heavy">Heavy</SelectItem>
              <SelectItem value="black">Black</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Font Size" value={16 + "px"} />
          <div className="border border-input bg-background flex items-center px-3">
            <CgFontHeight size={16} />
            <Input className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none" />
          </div>
          <div className="border border-input bg-background flex items-center px-3">
            <CgFontSpacing size={16} />
            <Input className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none" />
          </div>
          <div className="border border-input bg-background flex items-center px-3 ">
            <RxRowSpacing size={16} />
            <Input className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none" />
          </div>

          <TypographyPopover />
        </div>
      </div>
      <div className="py-6 border-b">
        <p className="font-semibold tracking-wide text-sm">Spacing</p>
        <div className="flex mt-4 gap-4">
          <Spacing />
        </div>
      </div>
      <div className="py-6 pr-6 border-b">
        <div className="flex justify-between items-center">
          <p className="font-semibold tracking-wide text-sm">Fill</p>
          <LuPlus className="cursor-pointer" />
        </div>
      </div>
      <div className="py-6 pr-6 border-b">
        <div className="flex justify-between items-center">
          <p className="font-semibold tracking-wide text-sm">Border</p>
          <LuPlus className="cursor-pointer" />
        </div>
      </div>
      <div className="py-6 pr-6 border-b">
        <div className="flex justify-between items-center">
          <p className="font-semibold tracking-wide text-sm">Shadow</p>
          <LuPlus className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Design;
