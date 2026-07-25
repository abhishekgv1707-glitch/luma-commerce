import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product/ProductDetails";
import { getProductById } from "@/lib/data";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return <ProductDetails product={product}/>;
}
