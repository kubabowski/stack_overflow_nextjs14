import { Button } from "@/components/ui/button";
import { getUserById, getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types/index";
import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params, searchParams }: URLProps) => {
  const { userId: clerkId } = auth();
  const userInfo = await getUserInfo({ userId: params.id });

  return (
    <>
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Image
            src={userInfo?.user.picture}
            alt="profile picture"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

          <div className="mt-3">
            <h2>{userInfo.user.name}</h2>
            <p>{userInfo.user.username}</p>

            <div className="mt-5 flex flex-wrap items-start justify-start gap-5">
              {userInfo.user.location && (
                <div>
                  <>location</>
                </div>
              )}

              {userInfo.user.joinDate.toString()}
            </div>

            {userInfo.user.bio && <p>{userInfo.user.bio}</p>}
          </div>
        </div>
        <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3 ">
          <SignedIn>
            {clerkId === userInfo.user.clerkId && (
              <Link href="/profile/edit">
                <Button className="paragraph-medium btn-secondary text-dark300_light900 min-h-[46px] min-w-[175px] px-4 py-3">
                  Edit profile
                </Button>
              </Link>
            )}
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Page;
