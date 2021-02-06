<h1 align="center">Welcome to anonymous👋</h1>

# install

```
npm install anonymous
```

# how to use

```
npm install anonymous
```

- generate

```js
const { name, image, animal } = anonymous.generate();
// name   -> elastic giraffe
// image  -> data:image/png;base64,...
// animal -> giraffe

const { name, image, animal } = anonymous.generate({ prefix: "Anonymous" });

// name   -> Anonymous elastic giraffe
// image  -> data:image/png;base64,...
// animal -> giraffe
```

- getImage

```js
const { animal } = anonymous.generate();
const image = anonymous.getImage(animal);

// image  -> data:image/png;base64,...
```

## Test

```
npm run test
```

## License

The code is licensed under the MIT license while pictures belong to Google.
