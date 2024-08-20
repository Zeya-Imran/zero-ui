export interface ProductInterface {
  title: string;
  category: string;
  description: string;
  id: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}
