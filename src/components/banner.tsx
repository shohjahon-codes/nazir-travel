"use client";
import React, { use } from "react";
import { UserContext } from "@/provider/user-provider";
export const Banner = () => {
  const { token } = use(UserContext);
  console.log(token);

  return <div>Banner</div>;
};
