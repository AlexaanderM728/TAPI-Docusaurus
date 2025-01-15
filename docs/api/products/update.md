---
id: update-product
title: Zaktualizuj produkt
---

# Zaktualizuj produkt

Aktualizuje szczegóły produktu na podstawie podanego ID. Można zmienić nazwę, kategorię, dostawcę oraz wartości odżywcze produktu.

## Endpoint

**PATCH** `/products/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                              | Przykład |
|---------|---------|-------------|------------------------------------|----------|
| `id`    | integer | path        | ID produktu, który ma zostać zaktualizowany | 1        |

## Treść zapytania (body)

| Nazwa           | Typ     | Opis                              | Przykład              |
|------------------|---------|-----------------------------------|-----------------------|
| `name`          | string  | Nazwa produktu                    | "Dream naturalny"     |
| `category_id`   | integer | ID kategorii produktu             | 101                   |
| `id_supplier`   | integer | ID dostawcy                       | 1                     |
| `carbohydrates` | number  | Zawartość węglowodanów (g)        | 2.9                   |
| `proteins`      | number  | Zawartość białka (g)              | 8.3                   |
| `fats`          | number  | Zawartość tłuszczu (g)            | 3.3                   |

## Odpowiedzi

### 200 - Produkt został pomyślnie zaktualizowany

```json
{
  "message": "Produkt o ID 1 został zaktualizowany.",
  "updatedProduct": {
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
### Błąd 400 

```json
{
  "error": "Dostawca o ID 2 nie istnieje."
}
```
### Błąd 404

```json
{
  "error": "Produkt o ID 1 nie istnieje."
}
```

### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się zaktualizować produktu."
}
```