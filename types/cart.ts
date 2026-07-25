export type CartProduct = {
  name: string;
  category: string;
  price: number;
  image: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};
