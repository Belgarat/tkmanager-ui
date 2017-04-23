# TkManager

Ticket manager.
This is an learning project for angular 2, typescript.
Tools: angular-cli

## Table component (./src/app/table/)

This component show data in a table.
It depends on actionbar child component and custum pipe CapitalizePipe.

Input element:
- rows: array of object to view in table (row data)
- cols: array with column name to view

Output element:
- onSelect: function to invoke on click row event (type: EventEmitter - require EventEmitter angular/core component)

## Actionbar component (./src/app/actionbar/)

## CapitalizePipe (./src/app/pipe/capitalize.pipe.ts)
