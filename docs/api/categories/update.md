---
id: update-category
title: Zaktualizuj szczegóły kategorii
---

# Zaktualizuj szczegóły kategorii

Aktualizuje szczegóły kategorii na podstawie podanego ID. Można zaktualizować nazwę, kategorię główną oraz opis.

## Endpoint

**PATCH** `/categories/{id}`

## Parametry zapytania

| Nazwa   | Typ     | Lokalizacja | Opis                                  | Przykład              |
|---------|---------|-------------|----------------------------------------|-----------------------|
| `id`    | integer | path        | ID kategorii, która ma zostać zaktualizowana | 101                   |

## Treść zapytania (body)

| Nazwa           | Typ     | Opis                   | Przykład                            |
|------------------|---------|------------------------|--------------------------------------|
| `name`          | string  | Nowa nazwa kategorii   | "Nabiał zmodyfikowany"              |
| `main_category` | string  | Nowa kategoria główna  | "Zmodyfikowane produkty mleczne"    |
| `description`   | string  | Nowy opis kategorii    | "Zmodyfikowane produkty mleczne i nabiałowe." |

## Odpowiedzi

### 200 - Kategoria została pomyślnie zaktualizowana

```json
{
  "id_category": 101,
  "name": "Nabiał zmodyfikowany",
  "main_category": "Zmodyfikowane produkty mleczne",
  "description": "Zmodyfikowane produkty mleczne i nabiałowe."
}
```
### Błąd 404 
```json 
{
  "error": "Kategoria o ID 101 nie została znaleziona."
}
```
### Błąd 500

```json
{
  "error": "Błąd serwera. Nie udało się zaktualizować kategorii."
}
```