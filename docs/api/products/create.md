---
id: create-products
title: Tworzenie produktów
---

# Tworzenie produktów

Endpoint umożliwia dodanie nowego produktu.

**Ścieżka**: `/products`

## Dane wejściowe

### Przykład zapytania
```json
{
  "name": "Dream naturalny",
  "category_id": 101,
  "id_supplier": 1,
  "nutritional_values": {
    "carbohydrates": 2.9,
    "proteins": 8.3,
    "fats": 3.3
  }
}
```
### Sukces 201

```json
{
  "message": "Produkt został pomyślnie utworzony.",
  "product": {
    "id": 5,
    "name": "Dream naturalny",
    "category_id": 101,
    "id_supplier": 1,
    "nutritional_values": {
      "carbohydrates": 2.9,
      "proteins": 8.3,
      "fats": 3.3
    }
  }
}
```

### Błąd 400

```json 
{
  "error": "Brak wymaganych danych. Upewnij się, że wszystkie pola są wypełnione."
}
```
