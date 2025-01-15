---
id: create-category
title: Tworzenie kategorii
---

# Dodaj nową kategorię

Tworzy nową kategorię w systemie. Nazwa i kategoria główna są wymagane.

## Endpoint

**POST** `/categories`

## Parametry zapytania

### Body (JSON)
| Nazwa           | Typ    | Opis                          | Przykład               |
|------------------|--------|-------------------------------|------------------------|
| `name`          | string | Nazwa kategorii               | "Nabiał"              |
| `main_category` | string | Kategoria główna              | "Produkty mleczne"    |
| `description`   | string | Dodatkowy opis kategorii      | "Produkty mleczne i nabiałowe." |

**Wymagane pola**:
- `name`
- `main_category`

## Odpowiedzi

### 201 - Kategoria została pomyślnie utworzona
```json
{
  "id_category": 5,
  "name": "Nabiał",
  "main_category": "Produkty mleczne",
  "description": "Produkty mleczne i nabiałowe."
}
```
### Błąd 400 

```json
{
  "error": "Brak wymaganych danych do utworzenia kategorii."
}
```

### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się dodać kategorii."
}
```

