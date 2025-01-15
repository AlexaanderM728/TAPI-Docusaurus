---
id: filter-supplier
title: Filtruj dostawców
---

# Filtruj dostawców

Zwraca listę dostawców spełniających określone kryteria filtrowania.

## Endpoint

**GET** `/suppliers/filter`

## Parametry zapytania

| Nazwa        | Typ     | Lokalizacja | Opis                                        | Przykład            |
|--------------|---------|-------------|--------------------------------------------|---------------------|
| `name`       | string  | query       | Filtruj dostawców po nazwie (częściowe dopasowanie) | "Wells"            |
| `minRating`  | number  | query       | Minimalna ocena dostawcy                   | 3.5                 |
| `maxRating`  | number  | query       | Maksymalna ocena dostawcy                  | 5.0                 |
| `address`    | string  | query       | Filtruj dostawców po adresie (częściowe dopasowanie) | "Miasto"           |

## Odpowiedzi

### 200 - Lista przefiltrowanych dostawców

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
  "error": "Błąd serwera. Nie udało się przefiltrować dostawców."
}
```