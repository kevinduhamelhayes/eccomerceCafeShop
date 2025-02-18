export type ProductType = {
  id: number;
  attributes: {
    productName: string;
    slug: string;
    productDescription: string;
    featured: boolean;
    price: number;
    taste: string;
    origin: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    productMedia: {
      data: {
        id: number;
        attributes: {
          url: string;
          formats: {
            thumbnail: {
              url: string;
            };
            small?: {
              url: string;
            };
            medium?: {
              url: string;
            };
          };
        };
      }[];
    };
    localizations: {
      data: string;
    };
  };
};
export type ProductCategoryType = {
category: {
      data: {
        slug: string;
        categoryName: string;
      }
    }
  };


export type ProductsResponse = {
  data: ProductType[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};