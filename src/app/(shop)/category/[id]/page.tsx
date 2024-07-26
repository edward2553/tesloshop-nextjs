import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id: routeId } = params;

  if (routeId === 'kids') {
    notFound();
  }

  return (
    <div>
      <h1>CategoryPage {routeId}</h1>
    </div>
  );
}
