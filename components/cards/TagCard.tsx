import { getAllTags, getTopInteractedTags } from "@/lib/actions/tag.action";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import RenderTag from "../shared/RenderTag";

interface Props {
  tag: {
    _id?: string;
    name?: string;
    description?: string;
    questions?: string;
  };
}

const UserCard = async ({ tag }: Props) => {
  return (
    <Link
      href={`/tags/${tag._id}`}
      className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border px-8 py-10 sm:w-[260px]">
        <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
          <p className="paragraph-semibold text-dark200_light900 line-clamp-1">
            {tag.name}
          </p>
        </div>

        <p className="small-medium text-dark500_light500 mt-3.5">
          <span className="body-semibold primary-text-gradient mr-2.5">
            {tag.questions.length}+
          </span>{" "}
          Questions
        </p>

        {/* <p className="text-dark200_light900">
          
        </p> */}
      </article>
    </Link>
  );
};

export default UserCard;
