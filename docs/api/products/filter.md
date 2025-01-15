---
id: filter-products
title: Filtrowanie produktów
---

# Filtrowanie produktów

Endpoint umożliwia filtrowanie produktów według wybranych kryteriów.

**Ścieżka**: `/products/filter`

## Parametry zapytania

| Parametr          | Typ    | Opis                                    |
|-------------------|--------|-----------------------------------------|
| `category_id`     | int    | ID kategorii, według której filtrować.  |
| `id_supplier`     | int    | ID dostawcy, według którego filtrować.  |
| `minCarbohydrates`| float  | Minimalna ilość węglowodanów.           |
| `maxCarbohydrates`| float  | Maksymalna ilość węglowodanów.          |
| `minProteins`     | float  | Minimalna ilość białek.                 |
| `maxProteins`     | float  | Maksymalna ilość białek.                |

## Odpowiedzi

### Sukces (200)
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
        "rating": 2.8
      },
      "links": [
        {
          "rel": "products_details",
          "method": "GET",
          "href": "http://localhost:8989/products/1"
        }
      ]
    }
  ],
  "count": 10
}
```
### Błąd 400
```
{
  "error": "Nieprawidłowe parametry wyszukiwania.",
  "invalidParams": ["unknown_param"],
  "allowedParams": ["category_id", "id_supplier"]
}
```

