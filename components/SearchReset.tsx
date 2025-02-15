"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const SearchReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <Button type="reset" onClick={reset}>
      <Link href={"/"} className="search-btn text-white">
        <X />
      </Link>
    </Button>
  );
};

export default SearchReset;
