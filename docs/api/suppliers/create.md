---
id: create-supplier
title: Tworzenie nowego dostawcy
---

# Dodaj nowego dostawcę

Tworzy nowego dostawcę w systemie. Wszystkie pola są wymagane.

## Endpoint

**POST** `/suppliers`

## Treść zapytania (body)

| Nazwa        | Typ     | Opis                           | Przykład                     |
|--------------|---------|--------------------------------|------------------------------|
| `name`       | string  | Nazwa dostawcy                 | "Dostawca ABC"               |
| `contact_info` | object  | Informacje kontaktowe dostawcy |                              |
| `contact_info.address` | string | Adres dostawcy                | "123 Ulica, Miasto, PL 00-001" |
| `contact_info.phone` | string | Numer telefonu dostawcy       | "+48 123 456 789"            |
| `rating`     | number  | Ocena dostawcy (od 0 do 5)     | 4.7                          |

## Odpowiedzi

### 201 - Dostawca został pomyślnie utworzony

```json
{
  "id_supplier": 5,
  "name": "Dostawca ABC",
  "contact_info": {
    "address": "123 Ulica, Miasto, PL 00-001",
    "phone": "+48 123 456 789"
  },
  "rating": 4.7
}
```
### Błąd 400
```json 
{
  "error": "Brak wymaganych danych do utworzenia dostawcy."
}
```
### Błąd 500 
```json 
{
  "error": "Błąd serwera. Nie udało się dodać dostawcy."
}
```


