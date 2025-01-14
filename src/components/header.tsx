import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export const Header = async () => {
  const user = (await cookies()).get("token")?.value;

  return (
    <div className="p-[30px] bg-blue-500 flex items-center gap-[40px]">
      {user ? (
        <Link href={"/profile"}>Profile</Link>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
};
