# Vue FileReader ![Current version](https://img.shields.io/badge/dynamic/json.svg?label=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fmagr0s%2Fvue-filereader%2Fmaster%2Fpackage.json&query=version&colorB=orange&style=flat-square) 

![Vue.js version](https://img.shields.io/badge/dynamic/json.svg?label=vue.js&url=https%3A%2F%2Fraw.githubusercontent.com%2Fmagr0s%2Fvue-filereader%2Fmaster%2Fpackage.json&query=dependencies.vue&colorB=blue&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg?&style=flat-square)

Vue.js component

## Install

#### NPM
```
npm i vue-filereader --save
```

## Usage
```js
import FileReader from 'vue-filereader'

// mount
...
components: {
  FileReader
}
...

// mount with global
Vue.component(FileReader.name, FileReader)
```

**Default tag**
```html
<file-reader
  accept=".txt"
  output="binary"
  @reader-load="myMethod"
/>
```
**Customization**
```html
<file-reader
  accept=".txt"
  output="binary"
  @reader-load="myMethod"
>
  <template
    #reader="props"
  >
    <input
      type="file"
      :accept="props.accept"
      @change="props.onchange"
    />
  </template>
</file-reader>
```

## Development

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build:lib
```

#### Lints and fixes files
```
npm run lint
```
### Author

[magr0s](https://github.com/magr0s)

### License

[MIT](https://github.com/magr0s/vue-filereader/blob/master/LICENSE)