import { userData } from "@/service/queryes";
import Link from "next/link";
import React from "react";

export const Card = ({ img, title, id }: userData) => {
  return (
    <div>
      <img src={img} alt="img" />
      <h2>
        <Link href={`/product/${id}`}>{title}</Link>
      </h2>
    </div>
  );
};
