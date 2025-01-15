---
id: get-products
title: Pobierz listę produktów
---

# Pobierz listę produktów

Zwraca pełną listę produktów, łącznie z przypisanymi kategoriami, dostawcami i linkami HATEOAS.

## Endpoint

**GET** `/products`

## Odpowiedzi

### 200 - Lista produktów

```json
{
  "products": [
    {
      "id": 1,
      "name": "Dream naturalny",
      "category_id": 101,
      "id_supplier": 1,
      "nutritional_values": {
        "carbohydrates": 2.9,
        "proteins": 8.3,
        "fats": 3.3
      },
      "supplier": {
        "id_supplier": 1,
        "name": "Wells, Mendoza and Johnson",
        "contact_info": {
          "address": "1816 Jacob Coves Apt. 675, Raymondmouth, WV 53374",
          "phone": "001-636-243-8171x038"
        },
        "rating": 2.8
      },
      "category": {
        "id_category": 101,
        "name": "Nabiał",
        "main_category": "Produkty mleczne",
        "description": "Produkty mleczne i nabiałowe."
      },
      "links": [
        {
          "rel": "products_list",
          "method": "GET",
          "href": "http://localhost:8989/products"
        },
        {
          "rel": "products_create",
          "method": "POST",
          "href": "http://localhost:8989/products"
        },
        {
          "rel": "products_details",
          "method": "GET",
          "href": "http://localhost:8989/products/1"
        },
        {
          "rel": "products_update",
          "method": "PATCH",
          "href": "http://localhost:8989/products/1"
        },
        {
          "rel": "products_delete",
          "method": "DELETE",
          "href": "http://localhost:8989/products/1"
        },
        {
          "rel": "products_filter",
          "method": "GET",
          "href": "http://localhost:8989/products/filter?category_id=101&minCarbohydrates=2.9&maxCarbohydrates=2.9&minProteins=8.3&maxProteins=8.3&minFats=3.3&maxFats=3.3"
        },
        {
          "rel": "categories_list",
          "method": "GET",
          "href": "http://localhost:8989/categories"
        },
        {
          "rel": "suppliers_list",
          "method": "GET",
          "href": "http://localhost:8989/suppliers"
        },
        {
          "rel": "suppliers_details",
          "method": "GET",
          "href": "http://localhost:8989/suppliers/1"
        }
      ]
    }
  ]
}

```
### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się pobrać listy produktów."
}
```