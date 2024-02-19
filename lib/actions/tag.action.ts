"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("Userr not found");

    return [
      { _id: "1", name: "tag1", description: "desc1" },
      { _id: "2", description: "desc2", name: "tag2" },
      { _id: "3", description: "desc3", name: "tag3" },
    ];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();

    const tags = await Tag.find({});
    return { tags };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
