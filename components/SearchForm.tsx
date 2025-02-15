import React from "react";
import Form from "next/form";
import SearchReset from "./SearchReset";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search startup"
      />
      <div className="flex gap-2">
        {query && <SearchReset />}
        <Button type="submit" className="search-btn">
          <SearchIcon className="text-white" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
