import product from '~/assets/lib/products'
import brand from '~/assets/lib/brands'

export const useProductsStore = defineStore('products', () => {
    const products=ref(product)
   const brands=ref(brand)
   const basket=ref([])
    return { products,brands,basket }
  })
  