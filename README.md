<h1 align="center">Welcome to anonymous👋</h1>



# Install

```
npm install anonymous-animals-gen
```


# How to use

- generate

```js
import anonymous from 'anonymous-animals-gen'
const { name, image, animal } = anonymous.generate();
// name   -> elastic giraffe
// image  -> data:image/png;base64,...
// animal -> giraffe

const { name, image, animal } = anonymous.generate({ prefix: "Anonymous" });

// name   -> Anonymous elastic giraffe
// image  -> data:image/png;base64,...
// animal -> giraffe

<img src={image} style={{background:'black'}}>
```

- getImage

```js
import anonymous from 'anonymous-animals-gen'
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
