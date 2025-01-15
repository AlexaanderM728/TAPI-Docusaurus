/**
 * Sidebar konfigurujący dokumentację dla Docusaurusa.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar dla dokumentacji API
  apiSidebar: [
    {
      type: 'doc', 
      id: 'api/intro', // Plik docs/api/intro.md
    },
    {
      type: 'category',
      label: 'Produkty',
      items: [
        'api/products/create-products', 
        'api/products/delete-product',
        'api/products/update-product',
        'api/products/get-products',
        'api/products/get-product-details',
        'api/products/filter-products'
      ],
    },
    {
      type: 'doc', 
      id: 'schemas/product-schema', // Plik docs/schemas/product-schema.md
    },
    {
      type: 'category',
      label: 'Kategorie',
      items: [
        'api/categories/create-category',
        'api/categories/delete-category',
        'api/categories/update-category',
        'api/categories/get-categories',
        'api/categories/get-category-details'

      ],
    },
    {
      type: 'doc', 
      id: 'schemas/category-schema', // Plik docs/schemas/product-schema.md
    },
    {
      type: 'category',
      label: 'Dostawcy',
      items: [
        'api/suppliers/create-supplier',
        'api/suppliers/delete-supplier',
        'api/suppliers/update-supplier',
        'api/suppliers/get-suppliers',
        'api/suppliers/get-supplier-details',
        'api/suppliers/filter-supplier'


        
      ],
    },
    {
      type: 'doc', 
      id: 'schemas/supplier-schema', 
    },
    
  ],
};

module.exports = sidebars;
