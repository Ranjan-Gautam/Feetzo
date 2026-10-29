export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "Pants" | "Outerwear" | "Footwear" | "Tops";
  subcategory: string;
  // Real product photo. Leave "" to show a clean branded placeholder.
  // When you have photos: save them in /public/products and set
  // image: "/products/your-file.jpg"
  image: string;
  // gradient used by the placeholder (and as a fallback)
  swatch: string;
  tag?: string;
};

export type Collection = {
  id: string;
  title: string;
  description: string;
  count: string;
  // Leave "" to show the gradient; set a /products path when you have a photo.
  image: string;
  swatch: string;
};

export const collections: Collection[] = [
  {
    id: "footwear",
    title: "Footwear",
    description: "Jordan, Nike, Adidas, Timberland, New Balance & more.",
    count: "Sneakers & Boots",
    image: "/products/cat-footwear.jpg",
    swatch: "from-amber-700 via-stone-800 to-neutral-950",
  },
  {
    id: "outerwear",
    title: "Outerwear",
    description: "Leather jackets, down jackets, bombers & coats.",
    count: "Jackets & Coats",
    image: "/products/cat-outerwear.jpg",
    swatch: "from-stone-600 via-neutral-800 to-black",
  },
  {
    id: "pants",
    title: "Pants",
    description: "Straight, baggy, boot-cut, cargo & denim fits.",
    count: "All Fits",
    image: "/products/cat-pants.jpg",
    swatch: "from-neutral-600 via-stone-700 to-neutral-900",
  },
  {
    id: "tops",
    title: "Tops",
    description: "Tees, hoodies, tracksuits, shirts & knitwear.",
    count: "Everyday Layers",
    image: "/products/cat-tops.jpg",
    swatch: "from-zinc-500 via-zinc-700 to-neutral-900",
  },
];

export const products: Product[] = [
  // ---------- FOOTWEAR ----------
  { id: "jordan-4", name: "Air Jordan 4 Retro", brand: "Jordan", category: "Footwear", subcategory: "Sneakers", image: "", swatch: "from-neutral-500 via-stone-600 to-neutral-900", tag: "Hyped" },
  { id: "jordan-1", name: "Air Jordan 1 High", brand: "Jordan", category: "Footwear", subcategory: "Sneakers", image: "/products/jordan-1.jpg", swatch: "from-amber-600 via-neutral-800 to-neutral-950", tag: "Hyped" },
  { id: "travis-cut", name: "Travis Scott Cut Low", brand: "Travis Scott", category: "Footwear", subcategory: "Sneakers", image: "", swatch: "from-amber-800 via-yellow-900 to-neutral-950", tag: "Limited" },
  { id: "timberland-boot", name: "Timberland 6-Inch Boot", brand: "Timberland", category: "Footwear", subcategory: "Boots", image: "/products/timberland-boot.jpg", swatch: "from-amber-700 via-amber-900 to-neutral-950", tag: "New" },
  { id: "nike-airmax", name: "Nike Running Sneaker", brand: "Nike", category: "Footwear", subcategory: "Sneakers", image: "/products/nike-airmax.jpg", swatch: "from-red-800 via-stone-700 to-neutral-900", tag: "Popular" },
  { id: "nike-dunk", name: "Nike Training Sneaker", brand: "Nike", category: "Footwear", subcategory: "Sneakers", image: "/products/nike-dunk.jpg", swatch: "from-lime-700 via-stone-700 to-neutral-900" },
  { id: "puma-suede", name: "Puma Classic", brand: "Puma", category: "Footwear", subcategory: "Sneakers", image: "/products/puma-suede.jpg", swatch: "from-stone-500 via-stone-700 to-neutral-900" },
  { id: "nb-550", name: "New Balance Sneaker", brand: "New Balance", category: "Footwear", subcategory: "Sneakers", image: "/products/nb-550.jpg", swatch: "from-lime-900 via-stone-700 to-neutral-900", tag: "Bestseller" },
  { id: "adidas-samba", name: "Adidas Sneaker", brand: "Adidas", category: "Footwear", subcategory: "Sneakers", image: "/products/adidas-samba.jpg", swatch: "from-neutral-500 via-stone-700 to-neutral-900" },
  { id: "converse-hi", name: "Converse Chuck 70 High", brand: "Converse", category: "Footwear", subcategory: "Sneakers", image: "", swatch: "from-stone-500 via-neutral-700 to-neutral-950" },
  { id: "chelsea-boot", name: "Suede Chelsea Boot", brand: "Feetzo Select", category: "Footwear", subcategory: "Boots", image: "", swatch: "from-amber-900 via-stone-800 to-neutral-950" },

  // ---------- OUTERWEAR ----------
  { id: "leather-jacket", name: "Leather Biker Jacket", brand: "Feetzo Select", category: "Outerwear", subcategory: "Leather Jacket", image: "/products/leather-jacket.jpg", swatch: "from-amber-950 via-neutral-900 to-black", tag: "New" },
  { id: "bomber-jacket", name: "Nylon Bomber Jacket", brand: "Feetzo Select", category: "Outerwear", subcategory: "Bomber", image: "/products/bomber-jacket.jpg", swatch: "from-amber-900 via-stone-800 to-neutral-950" },
  { id: "denim-jacket", name: "Washed Denim Jacket", brand: "Feetzo Select", category: "Outerwear", subcategory: "Denim Jacket", image: "/products/denim-jacket.jpg", swatch: "from-slate-500 via-slate-700 to-neutral-900" },
  { id: "down-jacket", name: "Puffer Down Jacket", brand: "Feetzo Select", category: "Outerwear", subcategory: "Down Jacket", image: "", swatch: "from-stone-600 via-neutral-700 to-neutral-900", tag: "Winter" },
  { id: "wool-coat", name: "Wool Overcoat", brand: "Feetzo Select", category: "Outerwear", subcategory: "Coat", image: "", swatch: "from-stone-500 via-stone-700 to-neutral-950" },
  { id: "windbreaker", name: "Hooded Windbreaker", brand: "Feetzo Select", category: "Outerwear", subcategory: "Windbreaker", image: "", swatch: "from-zinc-600 via-neutral-700 to-neutral-950" },

  // ---------- PANTS ----------
  { id: "smoker-straight", name: "Smoker Straight Fit Pant", brand: "Smoker", category: "Pants", subcategory: "Straight", image: "/products/smoker-straight.jpg", swatch: "from-stone-600 to-neutral-900", tag: "Popular" },
  { id: "denim-jeans", name: "Slim Fit Denim Jeans", brand: "Feetzo Select", category: "Pants", subcategory: "Denim", image: "/products/denim-jeans.jpg", swatch: "from-slate-600 to-neutral-900", tag: "New" },
  { id: "chino-pant", name: "Cotton Chino Pant", brand: "Feetzo Select", category: "Pants", subcategory: "Chino", image: "/products/chino-pant.jpg", swatch: "from-stone-500 to-neutral-900" },
  { id: "blackbird-baggy", name: "Black Bird Baggy Pant", brand: "Black Bird", category: "Pants", subcategory: "Baggy", image: "", swatch: "from-neutral-700 to-stone-900" },
  { id: "cruze-bootcut", name: "Cruze Boot-Cut Pant", brand: "Cruze", category: "Pants", subcategory: "Boot-Cut", image: "", swatch: "from-amber-900 to-neutral-950" },
  { id: "cruze-cargo", name: "Cruze Cargo Pant", brand: "Cruze", category: "Pants", subcategory: "Cargo", image: "", swatch: "from-lime-950 to-stone-900" },
  { id: "wide-pant", name: "Wide-Leg Trouser", brand: "Black Bird", category: "Pants", subcategory: "Wide-Leg", image: "", swatch: "from-neutral-500 to-stone-800" },

  // ---------- TOPS ----------
  { id: "graphic-tee", name: "Heavyweight Graphic Tee", brand: "Feetzo Select", category: "Tops", subcategory: "T-Shirt", image: "/products/graphic-tee.jpg", swatch: "from-neutral-700 to-neutral-950", tag: "Popular" },
  { id: "plain-tee", name: "Premium Cotton Tee", brand: "Feetzo Select", category: "Tops", subcategory: "T-Shirt", image: "/products/plain-tee.jpg", swatch: "from-neutral-600 to-neutral-900" },
  { id: "polo-shirt", name: "Pique Polo Shirt", brand: "Feetzo Select", category: "Tops", subcategory: "Polo", image: "/products/polo-shirt.jpg", swatch: "from-emerald-800 to-neutral-900" },
  { id: "oxford-shirt", name: "Oxford Button-Up Shirt", brand: "Feetzo Select", category: "Tops", subcategory: "Shirt", image: "/products/oxford-shirt.jpg", swatch: "from-slate-500 to-neutral-900" },
  { id: "oversized-hoodie", name: "Oversized Hoodie", brand: "Feetzo Select", category: "Tops", subcategory: "Hoodie", image: "/products/oversized-hoodie.jpg", swatch: "from-neutral-700 to-neutral-950" },
  { id: "zip-hoodie", name: "Crewneck Sweatshirt", brand: "Feetzo Select", category: "Tops", subcategory: "Sweatshirt", image: "/products/zip-hoodie.jpg", swatch: "from-neutral-400 to-neutral-700" },
  { id: "tracksuit", name: "Two-Piece Tracksuit", brand: "Feetzo Select", category: "Tops", subcategory: "Tracksuit", image: "", swatch: "from-neutral-700 to-stone-900", tag: "New" },
  { id: "flannel-shirt", name: "Brushed Flannel Shirt", brand: "Feetzo Select", category: "Tops", subcategory: "Shirt", image: "", swatch: "from-red-950 to-neutral-900" },
  { id: "knit-sweater", name: "Ribbed Knit Sweater", brand: "Feetzo Select", category: "Tops", subcategory: "Knitwear", image: "", swatch: "from-amber-800 to-stone-900" },
];

export const categoryOrder = ["All", "Footwear", "Outerwear", "Pants", "Tops"] as const;
