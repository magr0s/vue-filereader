import VueFilereader from './filereader'

export default VueFilereader

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VueFilereader.name, VueFilereader)
}
