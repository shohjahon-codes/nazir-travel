import { Banner } from "@/components/banner";
import { Card } from "@/components/card";
import { getUserData } from "@/service/queryes";

export default async function Home() {
  const data = await getUserData();
  return (
    <div className="container max-w-[1200px] mx-auto">
      <Banner />
      <div className="grid grid-cols-4 text-center">
        {data?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
