---
id: delete-category
title: Usuń kategorię
---

# Usuń kategorię

Usuwa kategorię na podstawie podanego ID.

## Endpoint

**DELETE** `/categories/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                                  | Przykład |
|---------|---------|-------------|----------------------------------------|----------|
| `id`    | integer | path        | ID kategorii, która ma zostać usunięta | 5        |

## Odpowiedzi

### 200 - Kategoria została pomyślnie usunięta

```json
{
  "message": "Kategoria o ID 5 została usunięta."
}
```
### Błąd 400

```json
{
  "error": "Kategoria o ID 5 nie została znaleziona."
}
```
### Błąd 500

```json
{
  "error": "Błąd serwera. Nie udało się usunąć kategorii."
}
```