---
id: delete-supplier
title: Usuń dostawcę
---

# Usuń dostawcę

Usuwa dostawcę na podstawie podanego ID.

## Endpoint

**DELETE** `/suppliers/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                                 | Przykład |
|---------|---------|-------------|---------------------------------------|----------|
| `id`    | integer | path        | ID dostawcy, który ma zostać usunięty | 5        |

## Odpowiedzi

### 200 - Dostawca został pomyślnie usunięty

```json
{
  "message": "Dostawca o ID 5 został usunięty."
}
```
### Błąd 400
```json 
{
  "error": "Dostawca o ID 5 nie został znaleziony."
}
```
### Błąd 500 
```json 
{
  "error": "Dostawca o ID 5 nie został znaleziony."
}
```