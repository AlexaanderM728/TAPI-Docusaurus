---
id: get-product-details
title: Pobierz szczegóły produktu
---

# Pobierz szczegóły produktu

Zwraca szczegóły pojedynczego produktu, łącznie z przypisanymi kategoriami, dostawcami i linkami HATEOAS.

## Endpoint

**GET** `/products/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                              | Przykład |
|---------|---------|-------------|------------------------------------|----------|
| `id`    | integer | path        | ID produktu, którego szczegóły mają zostać zwrócone | 1        |

## Odpowiedzi

### 200 - Szczegóły produktu

```json
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
      "rel": "categories_details",
      "method": "GET",
      "href": "http://localhost:8989/categories/101"
    },
    {
      "rel": "suppliers_details",
      "method": "GET",
      "href": "http://localhost:8989/suppliers/1"
    }
  ]
}
```

### Błąd 404

```json
{
  "error": "Nie znaleziono produktu o ID: 1"
}
```

### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się pobrać danych."
}
```