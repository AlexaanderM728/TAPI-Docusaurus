---
id: supplier-schema
title: Schemat dostawcy
---

# Schemat dostawcy

Reprezentacja obiektu dostawcy w systemie.

## Struktura obiektu

| Pole              | Typ     | Opis                           | Przykład                               |
|-------------------|---------|--------------------------------|----------------------------------------|
| `id_supplier`     | integer | Unikalny identyfikator dostawcy | 1                                      |
| `name`            | string  | Nazwa dostawcy                 | "James Cook corp"                      |
| `contact_info`    | object  | Informacje kontaktowe dostawcy |                                        |
| `contact_info.address` | string | Adres dostawcy                | "Keller Lock Apt. 276, Kennethtown, MD 26090" |
| `contact_info.phone` | integer | Numer telefonu dostawcy       | 636243817                              |
| `rating`          | number  | Ocena dostawcy (od 0 do 5)     | 2.8                                    |