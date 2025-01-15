---
id: get-supplier-details
title: Pobierz szczegóły dostawcy
---

# Pobierz szczegóły dostawcy

Zwraca szczegóły dostawcy na podstawie podanego ID, w tym linki HATEOAS.

## Endpoint

**GET** `/suppliers/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                                  | Przykład |
|---------|---------|-------------|----------------------------------------|----------|
| `id`    | integer | path        | ID dostawcy, którego szczegóły mają zostać zwrócone | 1        |

## Odpowiedzi

### 200 - Szczegóły dostawcy

```json
{
  "supplier": {
    "id_supplier": 1,
    "name": "Wells, Mendoza and Johnson",
    "contact_info": {
      "address": "123 Ulica, Miasto, PL 00-001",
      "phone": "+48 123 456 789"
    },
    "rating": 4.7
  },
  "links": [
    {
      "rel": "suppliers_details",
      "method": "GET",
      "href": "http://localhost:8989/suppliers/1"
    }
  ]
}
```
### Błąd 400

```json
{
  "error": "Nieprawidłowy format ID dostawcy."
}
```
### Błąd 404

```json
{
  "error": "Nie znaleziono dostawcy o ID: 1"
}
```

### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się pobrać danych."
}
```