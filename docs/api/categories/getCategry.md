---
id: get-category-details
title: Pobierz szczegóły kategorii
---

# Pobierz szczegóły kategorii

Zwraca szczegóły kategorii na podstawie podanego ID.

## Endpoint

**GET** `/categories/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                                  | Przykład |
|---------|---------|-------------|----------------------------------------|----------|
| `id`    | integer | path        | ID kategorii, której szczegóły mają zostać zwrócone | 101      |

## Odpowiedzi

### 200 - Szczegóły kategorii

```json
{
  "id_category": 101,
  "name": "Nabiał",
  "main_category": "Produkty mleczne",
  "description": "Produkty mleczne i nabiałowe."
}
```

### Błąd 400 

```json
{
  "error": "Kategoria o ID 101 nie została znaleziona."
}
```

### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się pobrać kategorii."
}
```
