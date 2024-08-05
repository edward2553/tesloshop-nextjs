import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';

const products = initialData.products;

const Home = () => {
  return (
    <main className="">
      <Title title="Tienda" subtitle="Todos los Productos" />
      <ProductGrid products={products} />
    </main>
  );
};

export default Home;
