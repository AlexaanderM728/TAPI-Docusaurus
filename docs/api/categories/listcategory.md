---
id: get-categories
title: Pobierz listę kategorii
---

# Pobierz listę kategorii

Zwraca pełną listę kategorii dostępnych w systemie.

## Endpoint

**GET** `/categories`

## Odpowiedzi

### 200 - Lista kategorii

```json
[
  {
    "id_category": 101,
    "name": "Nabiał",
    "main_category": "Produkty mleczne",
    "description": "Produkty mleczne i nabiałowe."
  },
  {
    "id_category": 102,
    "name": "Pieczywo",
    "main_category": "Produkty zbożowe",
    "description": "Chleb, bułki i inne wypieki."
  }
]
```
### Błąd 500

```json
{
  "error": "Błąd serwera. Nie udało się pobrać listy kategorii."
}
```