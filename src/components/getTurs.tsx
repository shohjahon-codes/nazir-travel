"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  departure_date: string;
  departure_time: string;
}

const GetTurs = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("https://shohjahon-backend.vercel.app/data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store", // Next.js fetch qoidalariga mos qilish uchun
        });

        if (!response.ok) {
          throw new Error("Ma'lumotlarni yuklashda xatolik!");
        }

        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <p className="text-center text-lg">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500">Xatolik: {error}</p>;

  return (
    <div className="grid grid-cols-1 h-[400px]   sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mb-8">
      {tours.map((tour) => (
        <Card key={tour.id} className="shadow-lg rounded-xl pt-4 hover:scale-95 transition-all duration-300 ease-linear">
          
          <CardContent>
            <Image
              src={tour.image}
              alt={tour.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md"
              unoptimized // Agar lokal serverda rasm bo'lsa, Next.js optimizatsiyasini o‘chiradi
            />
            <p className="text-gray-600 mt-2">{tour.title}</p>
            <p className="font-semibold mt-2">Narx: ${tour.price}</p>
            <p className="text-sm text-gray-500">
              Jo'nash vaqti: {tour.departure_date} {tour.departure_time}
            </p> 
            <Button className="mt-4 border border-amber-600 text-amber-600 "> Malumot Olish</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GetTurs;
