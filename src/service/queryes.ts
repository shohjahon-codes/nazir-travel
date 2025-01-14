export interface userData {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

export const getUserData = async () => {
  const res = await fetch("http://localhost:3000/phones");
  const data: userData[] = await res.json();

  return data;
};
