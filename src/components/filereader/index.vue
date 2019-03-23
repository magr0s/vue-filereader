<template>
  <div class="file-reader">
    <slot
      name="reader"
      :accept="accept"
      :onchange="handleOnChange"
    >
      <input
        type="file"
        class="file-reader__control"
        :accept="accept"
        @change="handleOnChange"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'file-reader',

  props: {
    accept: {
      type: String,
      default: () => ('')
    },

    output: {
      type: String,
      default: () => ('text')
    }
  },

  methods: {
    handleOnChange (evt) {
      const file = evt.target.files[0]

      if (!file) {
        return
      }

      if (!(file instanceof Blob)) {
        throw new TypeError('Must be a File or Blob')
      }

      const reader = new FileReader()

      reader.onload = e => (this.$emit('reader-load', e.target.result))

      reader.onerror = e => (new Error(`Error reading ${file.name}: ${e.target.result}`))

      switch (this.output) {
        case 'array':
          reader.readAsArrayBuffer(file)
          break
        case 'binary':
          reader.readAsBinaryString(file)
          break
        case 'data':
          reader.readAsDataURL(file)
          break
        default: reader.readAsText(file)
      }
    }
  }
}
</script>

<style scoped>
.file-reader__control {
  padding: 5px;
  border: 1px dashed #414141;
  outline: none!important;
}
</style>
