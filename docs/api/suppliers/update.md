---
id: update-supplier
title: Zaktualizuj dane dostawcy
---

# Zaktualizuj dane dostawcy

Aktualizuje szczegóły dostawcy na podstawie podanego ID.

## Endpoint

**PATCH** `/suppliers/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                                  | Przykład |
|---------|---------|-------------|----------------------------------------|----------|
| `id`    | integer | path        | ID dostawcy, który ma zostać zaktualizowany | 5        |

## Treść zapytania (body)

| Nazwa           | Typ     | Opis                              | Przykład              |
|------------------|---------|-----------------------------------|-----------------------|
| `name`          | string  | Nowa nazwa dostawcy               | "Nowy dostawca"       |
| `contact_info`  | object  | Nowe informacje kontaktowe dostawcy |                       |
| `contact_info.address` | string | Nowy adres dostawcy            | "456 Nowa Ulica, Miasto, PL 00-002" |
| `contact_info.phone` | string | Nowy numer telefonu dostawcy    | "+48 987 654 321"     |
| `rating`        | number  | Nowa ocena dostawcy               | 4.9                   |

## Odpowiedzi

### 200 - Dostawca został pomyślnie zaktualizowany

```json
{
  "id_supplier": 5,
  "name": "Nowy dostawca",
  "contact_info": {
    "address": "456 Nowa Ulica, Miasto, PL 00-002",
    "phone": "+48 987 654 321"
  },
  "rating": 4.9
}
```
### Błąd 404

```json
{
  "error": "Dostawca o ID 5 nie został znaleziony."
}
```

### Błąd 500
```json
{
  "error": "Błąd serwera. Nie udało się zaktualizować dostawcy."
}
```