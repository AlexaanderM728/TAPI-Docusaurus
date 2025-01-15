---
id: get-suppliers
title: Pobierz listę dostawców
---

# Pobierz listę dostawców

Zwraca pełną listę dostawców dostępnych w systemie.

## Endpoint

**GET** `/suppliers`

## Odpowiedzi

### 200 - Lista dostawców

```json
[
  {
    "id_supplier": 1,
    "name": "Wells, Mendoza and Johnson",
    "contact_info": {
      "address": "123 Ulica, Miasto, PL 00-001",
      "phone": "+48 123 456 789"
    },
    "rating": 4.7
  }
]
```
### Błąd 500

```json 
{
  "error": "Błąd serwera. Nie udało się pobrać listy dostawców."
}
```
