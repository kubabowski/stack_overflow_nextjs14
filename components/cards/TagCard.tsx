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
      href={`/tag/${tag._id}`}
      className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {tag.name}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            {tag.description}
          </p>
        </div>
        <div className="mt-5">{/* // */}</div>
      </article>
    </Link>
  );
};

export default UserCard;
