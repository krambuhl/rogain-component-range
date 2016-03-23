# rogain-helper-range

Returns children if `data` is between `min` and `max`.  If the `<Else />` branch is defined, it will be returned when `data` is out of range. 

Omitting `min` or `max` will default to `-Infinity` and `Infinity` respectively.

```html
<Each data={searchResults}>
    <Range data={@index} min="0" max="2">
        <!-- Top 3 -->
        <h2>{@item.title}</h2>
        <p>{@item.excerpt}</p>
    <Else />
        <!-- The rest -->
        <h3>{@item.title}</h3>
    </Range>
</Each>
```

__Attributes__

___data___

Variable or expression.

___min___

Number. Optional.

___max___

Number. Optional.


## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-helper-range
```

## License

MIT