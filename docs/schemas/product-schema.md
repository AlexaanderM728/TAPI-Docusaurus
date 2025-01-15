---
id: product-schema
title: Schemat produktu
---

# Schemat produktu

Schemat obiektu `Product`.

## Struktura

| Pole                | Typ    | Opis                |
|---------------------|--------|---------------------|
| `id`                | int    | Unikalne ID produktu. |
| `name`              | string | Nazwa produktu.       |
| `category_id`       | int    | ID kategorii.         |
| `id_supplier`       | int    | ID dostawcy.          |
| `nutritional_values`| object | Wartości odżywcze.    |

## Przykład
```yaml
{
  "id": 1,
  "name": "Mleko",
  "category_id": 2,
  "id_supplier": 3,
  "nutritional_values": {
    "carbohydrates": 14.0,
    "proteins": 0.3,
    "fats": 0.2
  }
}