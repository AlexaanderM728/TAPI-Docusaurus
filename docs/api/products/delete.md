---
id: delete-product
title: Usuń produkt
---

# Usuń produkt

Usuwa produkt na podstawie podanego ID. Operacja wymaga odpowiednich uprawnień.

## Endpoint

**DELETE** `/products/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                              | Przykład |
|---------|---------|-------------|------------------------------------|----------|
| `id`    | integer | path        | ID produktu, który ma zostać usunięty | 1        |

## Odpowiedzi

### 200 - Produkt został pomyślnie usunięty

```json
{
  "message": "Produkt o ID 1 został usunięty.",
  "removedProduct": {
    "id": 1,
    "name": "Dream naturalny",
    "category_id": 101,
    "id_supplier": 1,
    "nutritional_values": {
      "carbohydrates": 2.9,
      "proteins": 8.3,
      "fats": 3.3
    }
  }
}
```
### Błąd 404
```josn
{
  "error": "Produkt o ID 1 nie istnieje."
}
```
### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się usunąć produktu."
}
```