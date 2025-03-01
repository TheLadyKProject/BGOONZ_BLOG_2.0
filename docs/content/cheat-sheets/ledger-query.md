---
title: Ledger queries
category: Ledger

---

### Query characters

| Query           | Description |
| --------------- | ----------- |
| `@payee`        | Payee       |
| `%tag`          | Tag         |
| `=note`         | Note        |
| `#code`         | Code        |
| ---             | ---         |
| `TERM and TERM` | Boolean and |
| `TERM or TERM`  | Boolean or  |
| `not TERM`      | Boolean not |

### Examples

```sh
ledger r @taco
ledger r comment =~ /landline/
```

## References

{: .-one-column}

-   <http://ledger-cli.org/3.0/doc/ledger3.html#Complex-expressions>
